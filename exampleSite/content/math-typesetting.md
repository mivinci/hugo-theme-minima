---
author: Mivinci
title: Math Typesetting
date: 2020-07-18T10:52:59+08:00
description: A brief guide to write mathematical notation.
math: true
tags: 
    - KaTex
    - markdown
---

Mathematical notation in a Hugo project can be enabled by using third party JavaScript libraries like [KaTeX](https://katex.org) the one that Minima uses. Here's what you can do in the configuration file to enable it.

```
math:
  enable: false
  provider: katex
```

## Examples

The following are some examples of mathematical notations with KaTeX that are pretty much like LaTeX's.

### Block

```
\varphi = 1+\frac{1}{1+\frac{1}{1+\frac{1} {1+\cdots}}} 
```

wiil be rendered as:

$$
\varphi = 1+\frac{1}{1+\frac{1}{1+\frac{1} {1+\cdots}}} 
$$

### Inline

```
Pythagorean theorem can be written as $a^2+b^2=c^2$ where *a*, *b* and *c* are the length of legs of a triangle.
```

will be rendered as:

Pythagorean theorem can be written as $a^2+b^2=c^2$ where *a*, *b* and *c* are the length of legs of a triangle.
