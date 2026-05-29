# ✏️ 踩坑笔记本

> ML/NLP 学习者的个人博客 — Jekyll 静态站点，简笔画手绘风格，记录踩坑经历与项目实验。

## 🎨 v2 主题特色

- **Hero 主页**：DiceBear 动态头像 + 身份标签 + GitHub 入口
- **技能雷达**：四大分类（深度学习 / 数据处理 / 工具平台 / 正在学习）网格展示
- **项目卡片**：MNIST、NLP对比、K-means聚类、充电预测四个实验项目
- **简笔画手绘风格**：牛皮纸底色 + 横线纸纹理 + 手写体标题 + 不规则边框
- **暖色调配色**：墨水色正文 + 红/蓝/绿笔标注 + 荧光笔高亮
- **响应式设计**：手机/平板/桌面全适配

## 📂 目录结构

```
jekyll-blog/
├── _config.yml              # 站点配置
├── _layouts/
│   └── home.html            # 自定义首页布局（Hero+技能+项目+文章）
├── index.md                 # 首页入口
├── about.md                 # 关于页面（个人介绍+项目列表）
├── project.md               # 专题网站页面
├── Gemfile                  # Ruby 依赖
├── README.md                # 本文件
├── assets/
│   └── css/
│       └── style.scss       # 自定义简笔画主题
└── _posts/
    ├── 2026-05-25-pytorch-version-hell.md
    ├── 2026-05-26-kaggle-dataset-mirror.md
    ├── 2026-05-27-python-indentation.md
    └── 2026-05-28-docker-mirror-struggle.md
```

## 🚀 本地运行

### Docker（推荐）

```bash
docker run --rm -v "$(pwd):/srv/jekyll" -p 4000:4000 jekyll/jekyll:latest jekyll serve --livereload
# 访问 http://localhost:4000
```

### 本地 Ruby

```bash
gem install bundler jekyll
bundle install
bundle exec jekyll serve --livereload
```

## 📦 部署

推送到 `main` 分支后，GitHub Pages 自动构建并发布到 [https://shibanxiaya.github.io](https://shibanxiaya.github.io)。

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
- **头像**：DiceBear Avataaars API

## 📄 许可

内容为个人学习笔记，仅供参考。

---
*每个 bug 都是一次学习的机会。*
