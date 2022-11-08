# Minima

A clean and minimal Hugo theme porting from [Hexo Minima](https://github.com/adisaktijrs/hexo-theme-minima). See the [demo site](https://mivinci.github.io/hugo-theme-minima).

> The main branch is in development stage, UI or configuration may vary.

![screenshot](./images/tn.png)

## Features

- [x] Dark mode
- [x] Multilingual mode
- [x] Code highlighting - VSCode dark+
- [x] Math - KaTeX
- [x] Flowcharts - Mermaid
- [x] Comment - Disqus, Utterances, Giscus
- [x] Google analytics
- [x] External link
- [x] RSS

## Usage

Before using Minima, make sure you've got Hugo (extended version) installed on your device.

### Installation

You can use either `git submodule` or `git clone` to fetch this theme into the directory where Hugo places themes.

#### Git Submodule

```bash
git submodule add --depth 1 https://github.com/mivinci/hugo-theme-minima.git themes/minima
```

#### Git Clone

```bash
git clone https://github.com/mivinci/hugo-theme-minima.git themes/minima
```


### Configuration

Follow [exampleSite/config.toml](https://github.com/Mivinci/hugo-theme-minima/blob/main/exampleSite/config.toml) and edit your own one.

### Supported Front Matters

| Field       | Type   | Explanation                                            |
|:----------- |:------ |:------------------------------------------------------ |
| title       | string | Title of the post                                      |
| description | string | Description of the post                                |
| date        | string | Datetime when the post is written                      |
| link        | string | If set, the post will redirect to an external link     |
| categories  | array  | Array of categories the posts belongs to               |
| series      | array  | Array of series the post belongs to                    |
| tags        | array  | Array of tags the posts is related to                  |
| math        | bool   | True if the post needs to render math formulas         |
| mermaid     | bool   | True if the post needs to render mermaid diagrams      |
| comment     | bool   | True if the post allows people to make comments        |
| draft       | bool   | True if the post isn't already for publishing          |


### Contribution

I'm currently looking for i18n contributors :)

### Feedback

Feedbacks are welcome [here](https://github.com/Mivinci/hugo-theme-minima/issues).
