---
title: Rule wrap-regex
layout: doc
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# Require Regex Literals to be Wrapped (wrap-regex)

# 要求正则表达式被包裹起来 (wrap-regex)

When a regular expression is used in certain situations, it can end up looking like a division operator. For example:

在某些情况下，使用正则表达式时，看起来像一个除法运算符。例如：

```js
function a() {
    return /foo/.test("bar");
}
```

## Rule Details

This is used to disambiguate the slash operator and facilitates more readable code.

该规则旨在消除斜线运算符造成的歧义，增加代码的可读性。

The following patterns are considered problems:

以下模式被认为是有问题的：

```js
/*eslint wrap-regex: 2*/

function a() {
    return /foo/.test("bar");
}
```

The following patterns are not considered problems:

以下模式被认为是没有问题的：

```js
/*eslint wrap-regex: 2*/

function a() {
    return (/foo/).test("bar");
}
```

## Version

This rule was introduced in ESLint 0.1.0.

该规则在ESLint 0.1.0 中被引入。

## Resources

* [Rule source](https://github.com/eslint/eslint/tree/master/lib/rules/wrap-regex.js)
* [Documentation source](https://github.com/eslint/eslint/tree/master/docs/rules/wrap-regex.md)
