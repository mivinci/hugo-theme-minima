# Minima

Minima 是个简洁但功能完整的 Hugo 主题，原本是 [Hexo Minima](https://github.com/adisaktijrs/hexo-theme-minima) 主题的 Hugo 版本，现在已经在其设计行上做了多处调整，和添加新的功能。

链接：[示例网页](https://h.xjj.pub/)，[示例配置](../exampleSite/config.toml)，[作者博客](https://xjj.pub)

![screenshot](../images/tn.png)

## 功能

- [x] 暗黑模式，点击首页的 Logo 能在黑白两种模式下切换
- [x] VSCode 风格的代码高亮
- [x] KaTeX 公式
- [x] Mermaid 图表
- [x] Google 分析
- [x] Disqus、Utterances 评论插件（即将支持 Waline）
- [x] 文章目录
- [x] 分类、标签、专栏
- [x] 外部链接 
- [x] RSS

## 使用

在使用前，确保您的设备已安装了 Hugo 最新的扩展版本（hugo-extended）

然后确保你的博客根目录（假设为 `blog/`）处在 git 工作区，若没有，则运行下面命令

```bash
cd blog
git init
```

### 安装

在博客根目录使用 git submodule 将 minima 下载到博客的 theme 目录下

```bash
git submodule add --depth 1 https://github.com/mivinci/hugo-theme-minima.git themes/minima
```

或直接使用 git 将 minima 克隆到 theme 目录下

```bash
git clone https://github.com/mivinci/hugo-theme-minima.git themes/minima
```

总之，要将 minima 放到博客根目录的 theme 目录下。

### 主题配置

根据示例配置 [exampleSite/config.toml](https://github.com/Mivinci/hugo-theme-minima/blob/main/exampleSite/config.toml) 编辑你自己的配置文件 `博客根目录/config.toml` 

### 文章配置

为缩短博客网页的加载和渲染时间，minima 不支持如公式、图表、评论插件的全局配置，需要在每篇文章中设置是否启用相关插件，以下是 minima 目前支持的文章配置。

| 字段          | 类型     | 解释                                |
|:----------- |:------ |:--------------------------------- |
| title       | string | 文章标题                              |
| description | string | 文章简介，会显示在标题和正文之间                  |
| date        | string | 文章创建日期                            |
| link        | string | 外部链接     |
| categories  | array  | 文章分类                              |
| series      | array  | 文章专栏                              |
| tags        | array  | 文章标签                              |
| math        | bool   | true：为该文章开启公式渲染                   |
| mermaid     | bool   | true：为该文章开启图表渲染                   |
| comment     | bool   | true：为该文章开启评论插件，具体是哪个插件在博客配置文件中设置 |
| draft       | bool   | true：该篇文章为草稿，不会被打包                |
| toc         | bool   | true：为该篇文章开启目录显示                  |


### 外部链接

可在 front matter 中通过设置 `link` 来创建外部链接。

**示例**

```yaml
---
author: XJJ
title: External Link Post
date: 2021-07-17T10:52:59+08:00
link: https://gohugo.io
---
```

当点击改文章题目时，会跳转到设置的链接地址 https://gohugo.io，🆒

### RSS Feeds

v1.1.0 版本之后，Minima 支持订阅 RSS Feeds，因此你可以用来在自己的博客上显示别人的文章标题和链接。详情见 [示例配置](./exampleSite/config.toml) 的 `friends` 部分。

**示例**

```yaml
[params.friends]
feeds = ["https://xjj.pub/index.xml"]
topk = 3
title = "Friends' Posts"
```

### 反馈

欢迎在 [issues](https://github.com/Mivinci/hugo-theme-minima/issues) 下留言，或将问题详细描述发送到我的邮箱：i@xjj.pub
