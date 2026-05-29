# ✏️ 踩坑笔记本

> 一个 Jekyll 静态博客，简笔画手绘风格，记录 ML/NLP 学习中的真实踩坑经历。

## 🎨 主题特色

- **简笔画手绘风格**：牛皮纸底色 + 手写体标题 + 涂鸦边框
- **CSS 纯手绘装饰**：横线纸纹理、红色竖线、虚线边框、手绘下划线
- **暖色调配色**：墨水色正文 + 红/蓝/绿笔标注 + 荧光笔高亮
- **ZCOOL KuaiLe 字体**：标题使用俏皮的中文手写体
- **响应式设计**：手机/平板/桌面全适配

## 📂 目录结构

```
jekyll-blog/
├── _config.yml              # 站点配置
├── index.md                 # 首页（带欢迎卡片）
├── about.md                 # 关于页面
├── project.md               # 专题网站页面
├── Gemfile                  # Ruby 依赖
├── README.md                # 本文件
├── assets/
│   └── css/
│       └── style.scss       # 自定义简笔画主题
└── _posts/
    ├── 2026-05-25-pytorch-version-hell.md     # PyTorch 版本不兼容
    ├── 2026-05-26-kaggle-dataset-mirror.md    # Kaggle 数据集下载
    ├── 2026-05-27-python-indentation.md       # Python 缩进惨案
    └── 2026-05-28-docker-mirror-struggle.md   # Docker 镜像源
```

## 🚀 本地运行

### 方式一：Docker（推荐）

```bash
# 启动 Jekyll 开发服务器
docker run --rm -v "$(pwd):/srv/jekyll" -p 4000:4000 jekyll/jekyll:latest jekyll serve --livereload

# 访问 http://localhost:4000
```

### 方式二：本地 Ruby

```bash
gem install bundler jekyll
bundle install
bundle exec jekyll serve --livereload
```

## 📦 部署

本仓库使用 **GitHub Pages** 自动部署。

推送到 `main` 分支后，GitHub Actions 自动构建并发布到 [https://shibanxiaya.github.io](https://shibanxiaya.github.io)。

## 📝 文章列表

| 日期 | 标题 | 标签 |
|------|------|------|
| 2026-05-28 | Docker 拉镜像拉了 3 个小时之后…… | Docker, 镜像源 |
| 2026-05-27 | Python 缩进：一个空格引发的惨案 | Python, 调试 |
| 2026-05-26 | Kaggle 下载不了数据集？试试 GitHub 镜像 | Kaggle, 数据集 |
| 2026-05-25 | PyTorch 版本不兼容的那一夜 | PyTorch, CUDA |

## 🛠 技术栈

- **框架**：Jekyll 4.x + Minima 主题
- **样式**：自定义 SCSS（零 JS 框架依赖）
- **托管**：GitHub Pages
- **字体**：ZCOOL KuaiLe（Google Fonts）

## 📄 许可

内容为个人学习笔记，仅供参考。代码片段可自由使用。

---

*每个 bug 都是一次学习的机会。*
