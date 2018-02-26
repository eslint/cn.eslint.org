---
title: no-multi-str - Rules
layout: doc
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# Disallow Multiline Strings (no-multi-str)

# 禁止多行字符串 (no-multi-str)

It's possible to create multiline strings in JavaScript by using a slash before a newline, such as:

在 JavaScript 中，可以在新行之前使用斜线创建多行字符串，例如：

```js
var x = "Line 1 \
         Line 2";
```

Some consider this to be a bad practice as it was an undocumented feature of JavaScript that was only formalized later.

一些人认为这不是一个好的做法，因为它是 JavaScript 中的一个非正式的特性。

## Rule Details

This rule is aimed at preventing the use of multiline strings.

该规则是为了防止多行字符串的使用。

Examples of **incorrect** code for this rule:

**错误** 代码示例：

```js
/*eslint no-multi-str: "error"*/
var x = "Line 1 \
         Line 2";
```

Examples of **correct** code for this rule:

**正确** 代码示例：

```js
/*eslint no-multi-str: "error"*/

var x = "Line 1\n" +
        "Line 2";
```

## Version

This rule was introduced in ESLint 0.0.9.

该规则在 ESLint 0.0.9 中被引入。

## Resources

* [Rule source](https://github.com/eslint/eslint/tree/master/lib/rules/no-multi-str.js)
* [Documentation source](https://github.com/eslint/eslint/tree/master/docs/rules/no-multi-str.md)
