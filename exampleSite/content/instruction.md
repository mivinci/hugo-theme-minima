---
author: Hugo Authors
title: Instruction
date: 2021-07-19T10:52:59+08:00
description: A Clean and minimal Hugo theme porting from the [Hexo Minima](https://github.com/adisaktijrs/hexo-theme-minima). [Click me](https://h.xjj.pub/) to take a look.
math: true
comment: true
---

> The main branch is in development stage, UI or configurations may vary. You can use the latest stable version [here](https://github.com/Mivinci/hugo-theme-minima/releases/tag/v1.1.0).

## Features

- [x] Clean
- [x] Light/dark mode
- [x] VSCode-style code hightlighting (the most alike among all Hugo themes)
- [x] KaTeX
- [x] Mermaid diagrams
- [x] Google analytics
- [x] Disqus/Utterances
- [x] Optional ToC

## Usage

Before using Minima, make sure you've got Hugo (extended version) installed on your device.

### Installation

Suppose `blog` is where you place your sources.

```bash
cd blog
git init
git submodule add --depth 1 https://github.com/mivinci/hugo-theme-minima.git themes/minima
```

Or  `clone` directly if you don't wanna use the Git submodule.

```bash
git clone https://github.com/mivinci/hugo-theme-minima.git themes/minima
```

Anyways, you just need to put Minima under the `blog/themes` directory.

### Configuration

Follow [exampleSite/config.toml](https://github.com/Mivinci/hugo-theme-minima/blob/main/exampleSite/config.toml) and edit your own `blog/config.toml` file.

### Supported Front Matters

| Field       | Type   | Explanation                                            |
|:----------- |:------ |:------------------------------------------------------ |
| title       | string | Title of the post                                      |
| description | string | Description of the post                                |
| date        | string | Datetime when the post is written                      |
| categories  | array  | Array of categories the posts belongs to               |
| series      | array  | Array of series the post belongs to                    |
| tags        | array  | Array of tags the posts is related to                  |
| math        | bool   | True if the post needs to render math formulas         |
| mermaid     | bool   | True if the post needs to render mermaid diagrams      |
| comment     | bool   | True if the post allows people to make comments        |
| draft       | bool   | True if the post isn't already for publishing          |
| toc         | bool   | True if the post needs a ToC                           |

### Feedback

Feedbacks are welcome [here](https://github.com/Mivinci/hugo-theme-minima/issues).
