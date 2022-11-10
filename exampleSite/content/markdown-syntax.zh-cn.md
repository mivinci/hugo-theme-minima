---
author: "Mivinci"
title: "Markdown 语法指北"
date: "2021-07-18T10:52:59+08:00"
description: "一篇 Markdown 示例文章，翻译自官方示例。"
categories:
tags:
  - markdown
---

本文提供了一个可以在 Hugo 内容文件中使用的基本 Markdown 语法示例，还展示了基本 HTML 元素是否在 Hugo 主题中使用 CSS 进行修饰。

<!--more-->

## 标题

下面的 HTML `<h1>`—`<h6>` 元素代表了六个级别的章节标题。 `<h1>` 是最高的部分级别，而 `<h6>` 是最低的。

# 一级标题

## 二级标题

### 三级标题

#### 四级标题

##### 五级标题

###### 六级标题

## 段落

Xerum，我可以和他解释谁在痛苦中。 当我来到你身边，当我充满快乐时，我被快乐所折磨，或者他是天生的，或者是一个骗子，因为那个让我快乐痛苦的人是事情的专家，或者他撕裂和撕破自己的意志，仿佛他值得被遮盖，他是不是走到了心坎上，以同样的心去追随同样的事情？ 为什么毛孔会竖起来，当它被放置在一个不知道老鼠意志或一切的地方时？ 我会安静的。 就我而言，我的心以一种或另一种方式受到干扰，我把它们撕下来擦干，这样我要么杀了它们，要么让它们逃跑。 他憎恨真相，因为 veliamenim 的浪潮是起因和面子本身，而版本的痛苦又重演了。

是旅行吗？ 因为每一件事都有一些你讨厌或讨厌的东西，所以你会吃东西，以免让你的智慧隐藏这样一个事实，即心脏和心脏或有趣的东西会从中出来。

## 块引用

blockquote 元素表示从另一个来源引用的内容，可选地带有必须在“footer”或“cite”元素内的引用，以及可选的内联更改，例如注释和缩写。

#### 不注明出处的块引用

> 然后，为了铸币安德普，要给予的知识相应地减少。
> **注意**您可以在块引用中使用 *Markdown 语法*。

#### 带出处的块引用

> 不要通过共享内存来通信，通过通信来共享内存。<br>
> — <cite>Rob Pike[^1]</cite>

[^1]: 上述引述摘自 Rob Pike 在 2015 年 11 月 18 日 Gopherfest 期间的 [talk](https://www.youtube.com/watch?v=PAAkCSZUG1c)。

## 表格

表格不是核心 Markdown 规范的一部分，但 Hugo 支持开箱即用地支持它们。

| 姓名 | 年龄 |
|:----:|:---:|
| 小明 | 27  |
| 大壮 | 23 |

#### 表格内的内联 Markdown

| 斜体   | 粗体     | 代码   |
|:---------:|:--------:|:------:|
| *斜体* | **粗体** | `code` |

## 代码块

#### 不使用高亮的代码块

```
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>Example HTML5 Document</title>
  </head>
  <body>
    <p>Test</p>
  </body>
</html>
```

#### HTML 的代码块

```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Example HTML5 Document</title>
</head>
<body>
  <p>Test</p>
</body>
</html>
```

#### Go 的代码块

```go {hl_lines=[3]}
type Registry interface {
    Register(*Service, ...RegisterOption) error
    Deregister(*Service, ...DeregisterOption) error
    List(string, ...ListOption) ([]*Service, error)
}
```

#### C艹 的代码块

```c++
#include <iostream>

class Animal {
    string name;
public:
    void eat();
}

void Animal::eat() {
    std::cout << "eat something" << std::endl;
}
```

#### Jvav 的代码块

```java
class Animal {
    void speak() { /* speak */ }
}

class Dog extends Animal {
    @override
    void speak() { /* bark */ }
}

class Cat extends Animal {
    @override
    void speak() { /* mew */ } 
}
```

#### Python 的代码块

```python
class Dog(Animal):
    def __init__(self):
        super.__init__()
    
    def eat():
        pass
```

## 列表类型

#### 有序列表

1. 第一项
2. 第二项
3. 第三项
- [x] 已勾选
- [ ] 未勾选

#### 无序列表

* 第一项
* 另一项
* 另另一项

#### 嵌套列表

* 水果
  * 苹果
  * 橘子
  * 香蕉
* 乳制品
  * 牛奶
  * 奶酪
