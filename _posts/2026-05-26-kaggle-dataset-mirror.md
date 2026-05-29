---
layout: post
title: "Kaggle 下载不了数据集？试试 GitHub 镜像这招"
date: 2026-05-26 18:00:00 +0800
categories: [踩坑笔记, 数据]
tags: [Kaggle, 数据集, GitHub, 镜像, 下载]
---

## 问题

刚接触 Kaggle 时，最让人头疼的不是模型，不是特征工程，而是——**数据集下载不下来**。

Kaggle 官网下载需要：
- 注册账号
- 手机号验证
- 同意竞赛规则
- 用 `kaggle` CLI 或网页下载

对于国内网络环境，下载速度可能只有几十 KB/s，一个 500MB 的数据集能下一整天。

## 发现：GitHub 镜像

很多经典的 Kaggle 数据集已经被热心网友搬运到了 GitHub 上。比如：

| 数据集 | GitHub 搜索关键词 |
|--------|------------------|
| MNIST | `mnist dataset csv github` |
| Iris | `iris.csv raw github` |
| Titanic | `titanic train.csv github` |
| CIFAR-10 | `cifar10 python github` |

## 具体操作

### 方法一：直接搜索 CSV 文件

在 GitHub 搜索栏输入：

```
iris.csv path:/
```

点进文件 → 右上角 **Raw** → 复制 URL → 用浏览器或 `wget` 下载：

```bash
wget https://raw.githubusercontent.com/xxx/dataset/master/iris.csv
```

### 方法二：用 Kaggle 数据集镜像仓库

有些仓库专门收集 Kaggle 数据集，比如搜索 `kaggle-datasets` 或 `awesome-dataset`。

```bash
git clone https://github.com/xxx/awesome-dataset.git
cd awesome-dataset/datasets/iris/
```

### 方法三：Kaggle API + 代理

如果确实需要 Kaggle 的最新版本：

```bash
pip install kaggle
# 在 Kaggle 设置中生成 API Token，下载 kaggle.json 放到 ~/.kaggle/
kaggle datasets download -d uciml/iris
```

## 踩坑提醒

1. **检查文件编码**——GitHub 上的 CSV 可能是 `utf-8`，也可能有 BOM 头，用 `pd.read_csv('file.csv', encoding='utf-8-sig')` 兼容处理
2. **注意换行符**——Windows 和 Linux 的换行格式不同（`\r\n` vs `\n`），下载后可以用 `dos2unix` 或文本编辑器转换
3. **确认数据完整性**——下载后检查行数、列数是否与描述一致

## 总结

Kaggle 官方下载慢不是个例，GitHub 镜像是最省事的替代方案。下次遇到下载问题，先去 GitHub 搜一圈，大概率有惊喜。

> 你还有什么下数据集的好办法？欢迎分享~
