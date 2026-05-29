---
layout: post
title: "Jekyll博客搭建全记录：从Docker到GitHub Pages"
date: 2026-05-29 12:00:00 +0800
categories: [技术, 工具]
tags: [Jekyll, Docker, GitHub Pages, 静态网站]
---

## 什么是 Jekyll？

Jekyll 是一个用 Ruby 编写的**静态网站生成器**。它将 Markdown 文本文件、HTML 模板和 CSS 样式表编译成完整的静态 HTML 网站。

### 核心概念

- **Markdown** → 用纯文本写文章
- **Liquid 模板** → 控制页面布局
- **YAML Front Matter** → 页面元数据
- **`_config.yml`** → 全局站点配置

### 为什么用 Jekyll？

1. **无需数据库** — 纯静态文件，速度快
2. **版本控制** — 所有内容都是文本文件，Git 友好
3. **免费托管** — GitHub Pages 原生支持
4. **安全** — 无后台，无注入风险

## Docker 环境搭建

```bash
# 拉取官方镜像（配置国内镜像源后）
docker pull jekyll/jekyll:latest

# 创建新站点
docker run --rm -v "$(pwd):/srv/jekyll" jekyll/jekyll jekyll new myblog --force

# 本地预览
docker run --rm -v "$(pwd):/srv/jekyll" -p 4000:4000 jekyll/jekyll jekyll serve --force_polling
```

## 目录结构

```
jekyll-blog/
├── _config.yml      # 站点配置
├── _posts/          # 博客文章
├── _layouts/        # 页面布局模板
├── _includes/       # 可复用组件
├── assets/          # 静态资源 (CSS/JS/图片)
├── index.md         # 首页
├── about.md         # 关于页
└── Gemfile          # Ruby 依赖
```

## 部署到 GitHub Pages

1. 创建仓库 `username.github.io`
2. 推送代码到 `main` 分支
3. GitHub 自动构建并部署
4. 访问 `https://username.github.io`

## 总结

Jekyll + Docker + GitHub Pages 的组合非常适合个人博客和文档站点。Docker 解决了环境依赖问题，GitHub Pages 提供了零成本托管。
