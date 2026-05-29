---
layout: post
title: "Python 缩进：一个空格引发的惨案"
date: 2026-05-27 20:00:00 +0800
categories: [踩坑笔记, Python]
tags: [Python, 缩进, 调试, 编码规范]
---

## 那一天，我盯着报错看了 20 分钟

```
IndentationError: unexpected indent
```

就这一行红字，让我 debug 了将近半小时。最后发现问题出在一个**空格**上。

## 案发现场

```python
def train_model(model, data, epochs=5):
    for epoch in range(epochs):
       loss = model.train(data)     # ← 这里只有 7 个空格！
        acc = model.evaluate(data)  # ← 这里是 8 个空格
        print(f"Epoch {epoch}: loss={loss:.4f}, acc={acc:.4f}")
```

第 3 行用了 7 个空格，第 4 行用了 8 个空格。Python 解释器认为它们的缩进级别不同，直接报错。

## 为什么会踩这个坑？

从其他语言（C/Java/JavaScript）转 Python 时，最大的不适应就是**缩进是语法，不是装饰**。

| 语言 | 代码块界定方式 |
|------|--------------|
| C/C++ | `{ }` 大括号 |
| Java | `{ }` 大括号 |
| JavaScript | `{ }` 大括号 |
| Python | **缩进（空格/Tab）** |

在 C 系语言里，缩进乱一点也不影响编译。但在 Python 里，缩进错了就是语法错误。

## 更隐蔽的坑：Tab 和空格混用

```python
def foo():
→   print("这是Tab缩进")
    print("这是空格缩进")  # 看起来一样，但 Python 不这么想
```

有些编辑器默认用 Tab，有些默认用空格。混用的结果就是间歇性报错，时好时坏，最难排查。

## 解决方案（一劳永逸）

### 1. PyCharm 设置

Settings → Editor → Code Style → Python → **Use tab character: 关掉** → Tab size: **4** → Indent: **4**

然后点 **"Show Whitespace"**（显示空白字符），空格显示为 `·`，Tab 显示为 `→`，一目了然。

### 2. VS Code 设置

```json
{
  "editor.renderWhitespace": "all",
  "editor.insertSpaces": true,
  "editor.tabSize": 4,
  "[python]": {
    "editor.tabSize": 4
  }
}
```

### 3. 终极武器：格式化工具

```bash
pip install black
black your_file.py  # 一键统一缩进
```

## 记住这三点

1. **永远用空格，别用 Tab**——PEP 8 推荐 4 空格缩进
2. **打开空白字符可视化**——让隐形的问题现原形
3. **用 `black` 或 `autopep8` 自动格式化**——机器不会犯错，人会的交给机器做

> 一个空格引发的血案，希望你不要再经历一次 😂
