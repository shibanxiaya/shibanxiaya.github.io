---
layout: post
title: "Welcome to My World — Jekyll + GitHub Pages 个人网站搭建"
date: 2026-05-29 15:00:00
tags: [jekyll, github-pages, web-dev, welcome]
---

## 为什么选择 Jekyll？

在搭建个人网站的众多选择中，我最终选择了 **Jekyll + GitHub Pages** 的组合，原因如下：

1. **纯静态** — 无需数据库、无需服务器，速度快且安全
2. **Markdown 写作** — 用熟悉的 Markdown 格式写博客，专注内容本身
3. **免费托管** — GitHub Pages 提供免费的 HTTPS 域名和全球 CDN
4. **版本控制** — 所有内容都在 Git 中，随时回溯

## 网站设计理念

这个网站融合了三种风格的精华：

- 🌈 **渐变 Hero** — 来自 ros258 的彩虹渐变文字 + 大标题视觉冲击
- ✨ **暗色科技风** — 来自 agonizd 的未来感暗色主题
- 📝 **完整博客系统** — 来自 11huang-crypto 的文章分类与归档体系
- 🔮 **粒子背景** — 自定义 Canvas 粒子连线动效
- ⌨️ **打字机效果** — 循环展示不同身份标签

## 技术栈总览

| 层级 | 技术 |
|------|------|
| 静态站点生成器 | [Jekyll 4.x](https://jekyllrb.com) |
| 托管平台 | [GitHub Pages](https://pages.github.com) |
| 样式方案 | SCSS → CSS（Jekyll 内置编译） |
| 字体 | Inter (正文) + JetBrains Mono (代码) |
| 动画 | Canvas 粒子 + IntersectionObserver 滚动动画 |
| 版本控制 | Git + GitHub |

## 快速开始

如果你也想用 Jekyll 搭建自己的网站，基本步骤如下：

```bash
# 1. 安装 Jekyll
gem install jekyll bundler

# 2. 创建新项目
jekyll new my-site

# 3. 本地预览
cd my-site && bundle exec jekyll serve

# 4. 推送到 GitHub
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/你的用户名/你的用户名.github.io.git
git push -u origin main
```

几分钟后访问 `你的用户名.github.io` 即可看到你的个人网站！

## 接下来的计划

- [ ] 完善更多技术文章
- [ ] 添加评论系统（Giscus）
- [ ] 集成搜索功能
- [ ] 添加更多项目展示
- [ ] SEO 优化

---

*这是我的第一篇正式文章，更多精彩内容敬请期待！* ✨
