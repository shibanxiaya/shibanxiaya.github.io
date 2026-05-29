---
layout: post
title: "Docker 拉镜像拉了 3 个小时之后……"
date: 2026-05-29 14:30:00 +0800
categories: [踩坑笔记, 工具]
tags: [Docker, 镜像源, 网络, 环境配置]
---

## 故事的开始

那天我信心满满地打开终端，准备用 Docker 跑 Jekyll：

```bash
docker pull jekyll/jekyll:latest
```

然后去接了杯水。回来一看——

```
Error response from daemon: Get https://registry-1.docker.io/v2/: net/http: request canceled
```

好吧，再试一次。还是超时。再试……三个小时过去了。

## 踩坑实录

### 第一回合：中科大镜像源

网上搜到教程说配 `docker.mirrors.ustc.edu.cn`，我兴冲冲地改了 Docker Engine 配置：

```json
{
  "registry-mirrors": ["https://docker.mirrors.ustc.edu.cn"]
}
```

Apply & Restart……**连接超时**。中科大镜像已经停止服务了。

### 第二回合：DaoCloud

换成 `docker.m.daocloud.io`，这次能连上——但是 **403 Forbidden**。

### 第三回合：其他镜像源

试了网易、南京大学、dockerproxy……全军覆没。要么超时，要么 403。

## 最终的解决方案

**既然拉不了镜像，那就绕过去。**

Jekyll 站点的本质是什么？目录结构 + Markdown 文件 + 一个配置文件。不需要 `jekyll new` 命令也能手工搭建。

我自己建了目录：

```
jekyll-blog/
├── _config.yml
├── index.md
├── _posts/
│   └── 我的第一篇文章.md
└── assets/css/style.scss
```

推上 GitHub，GitHub Pages 自动识别 Jekyll 项目，构建部署一气呵成。

## 学到的教训

1. **镜像源不可靠**——随时可能挂掉，国内网络环境下不要对镜像源有太高期望
2. **懂原理比懂命令更重要**——Jekyll 本质上就是 Markdown 转 HTML，理解了这点就不怕 `jekyll new` 用不了
3. **GitHub Pages 最稳妥**——它原生支持 Jekyll，你只需要推送源代码，构建工作 GitHub 帮你搞定
4. **别死磕一个方案**——Docker 拉不到镜像就手工建，工具是手段不是目的

> 下次遇到网络问题，先问自己：这个工具本质上做了什么？有没有更直接的办法？

---

*你的 Docker 拉镜像最快的一次用了多久？欢迎在评论区聊聊~*
