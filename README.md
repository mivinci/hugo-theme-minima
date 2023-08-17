# Minima

Minima is a clean and minimal Hugo theme originally ported from [Hexo Minima](https://github.com/adisaktijrs/hexo-theme-minima). Check out the [example site](https://mivinci.github.io/hugo-theme-minima).

![screenshot](./images/tn.png)

> Note that the main branch is in development phase, UI or configuration may vary.


## Features

- [x] 🌗 Dark mode
- [x] 📚 Multilingual mode
- [x] 🏳️‍🌈 Code highlighting - VSCode dark+
- [x] 🔢 Math - KaTeX
- [x] 💹 Flowcharts - Mermaid
- [x] 🧑‍💻 Comment - Disqus, Utterances, Giscus
- [x] 🔎 Search - FuseJS
- [x] 〽️ Google analytics
- [x] 🔗 External link
- [x] ✉️ RSS

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

Follow [exampleSite/config.yaml](https://github.com/Mivinci/hugo-theme-minima/blob/main/exampleSite/config.yaml) and edit your own one.

## Supported Front Matters

| Attr       | Type   | Explanation |
|:----------- |:------ |:------------|
| title       | string | title |
| description | string | description |
| date        | string | creation time |
| categories  | array<string>  | category list |
| series      | array<string>  | series list |
| tags        | array<string>  | tag list |
| math        | bool   | enables math plugin |
| diagram     | bool   | enables diagram plugin |
| comment     | bool   | enable comment plugin |
| draft       | bool   | disallow being published |
| link        | string | a URL to redirect to |


## Contribution

I'm currently looking for i18n contributors :)

## Feedback

Feedbacks are welcome [here](https://github.com/Mivinci/hugo-theme-minima/issues).

## Star History

[![Star History Chart](https://api.star-history.com/svg?repos=mivinci/hugo-theme-minima&type=Date)](https://star-history.com/#star-history/star-history&Date)

## License

Hugo Minima is MIT licensed.
