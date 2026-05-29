# ✦ 踩坑笔记本

> ML/NLP 学习者的个人博客 — Jekyll 静态站点，动态渐变霓虹风格，记录踩坑经历与项目实验。

## 🎨 v3 主题特色

- **动态渐变背景**：暗色深空 + 多色光晕 + 浮动粒子动画
- **霓虹发光效果**：渐变文字、发光头像、悬停光条
- **毛玻璃卡片**：backdrop-filter + 半透明边框 + 悬停阴影
- **Hero 主页**：动态渐变发光头像 + 渐变文字标题 + 身份标签
- **技能雷达**：四大分类网格 + hover 发光标签
- **项目卡片**：毛玻璃卡片 + 悬浮光条动画
- **时间线文章列表**：左侧彩色渐变指示条
- **响应式设计**：手机/平板/桌面全适配

## 📂 目录结构

```
jekyll-blog/
├── _config.yml              # 站点配置
├── _layouts/
│   └── home.html            # 自定义首页布局（Hero+技能+项目+文章）
├── index.md                 # 首页入口
├── about.md                 # 关于页面
├── Gemfile                  # Ruby 依赖
├── README.md                # 本文件
├── assets/
│   └── css/
│       └── style.scss       # 自定义动态渐变主题
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
- **字体**：Space Grotesk + Noto Sans SC + JetBrains Mono（Google Fonts）
- **头像**：DiceBear Avataaars API
- **特效**：CSS 渐变 / 动画 / backdrop-filter 毛玻璃

## 📄 许可

内容为个人学习笔记，仅供参考。

---
*每个 bug 都是一次学习的机会。*
