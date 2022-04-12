---
author: "Hugo Authors"
title: "Markdown Syntax Guide"
date: "2021-07-18T10:52:59+08:00"
description: "Sample article showcasing basic Markdown syntax and formatting for HTML elements."
toc: true
categories: ["Markdown"]
---

This article offers a sample of basic Markdown syntax that can be used in Hugo content files, also it shows whether basic HTML elements are decorated with CSS in a Hugo theme.

<!--more-->

## Headings

The following HTML `<h1>`—`<h6>` elements represent six levels of section headings. `<h1>` is the highest section level while `<h6>` is the lowest.

# H1

## H2

### H3

#### H4

##### H5

###### H6

## Paragraph

Xerum, quo qui aut unt expliquam qui dolut labo. Aque venitatiusda cum, voluptionse latur sitiae dolessi aut parist aut dollo enim qui voluptate ma dolestendit peritin re plis aut quas inctum laceat est volestemque commosa as cus endigna tectur, offic to cor sequas etum rerum idem sintibus eiur? Quianimin porecus evelectur, cum que nis nust voloribus ratem aut omnimi, sitatur? Quiatem. Nam, omnis sum am facea corem alique molestrunt et eos evelece arcillit ut aut eos eos nus, sin conecerem erum fuga. Ri oditatquam, ad quibus unda veliamenimin cusam et facea ipsamus es exerum sitate dolores editium rerore eost, temped molorro ratiae volorro te reribus dolorer sperchicium faceata tiustia prat.

Itatur? Quiatae cullecum rem ent aut odis in re eossequodi nonsequ idebis ne sapicia is sinveli squiatum, core et que aut hariosam ex eat.

## Blockquotes

The blockquote element represents content that is quoted from another source, optionally with a citation which must be within a `footer` or `cite` element, and optionally with in-line changes such as annotations and abbreviations.

#### Blockquote without attribution

> Tiam, ad mint andaepu dandae nostion secatur sequo quae.
> **Note** that you can use *Markdown syntax* within a blockquote.

#### Blockquote with attribution

> Don't communicate by sharing memory, share memory by communicating.<br>
> — <cite>Rob Pike[^1]</cite>

[^1]: The above quote is excerpted from Rob Pike's [talk](https://www.youtube.com/watch?v=PAAkCSZUG1c) during Gopherfest, November 18, 2015.

## Tables

Tables aren't part of the core Markdown spec, but Hugo supports supports them out-of-the-box.

| Name | Age |
|:----:|:---:|
|  Bob | 27  |
| Alice | 23 |

#### Inline Markdown within tables

| Italics   | Bold     | Code   |
|:---------:|:--------:|:------:|
| *italics* | **bold** | `code` |

## Code Blocks

#### Code block with backticks

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

#### Code block indented with four spaces

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

#### Code block with Golang

```go {hl_lines=[3]}
type Registry interface {
    Register(*Service, ...RegisterOption) error
    Deregister(*Service, ...DeregisterOption) error
    GetService(string, ...GetOption) ([]*Service, error)
}
```

#### Code block with C艹

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

#### Code block with Java

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

#### Code block with Python

```python
class Dog(Animal):
    def __init__(self):
        super.__init__()
    
    def eat():
        pass
```

## List Types

#### Ordered List

1. First item
2. Second item
3. Third item
- [x] checked
- [ ] not checked

#### Unordered List

* List item
* Another item
* And another item

#### Nested list

* Fruit
  * Apple
  * Orange
  * Banana
* Dairy
  * Milk
  * Cheese
