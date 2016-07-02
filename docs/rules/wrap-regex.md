---
title: Rule wrap-regex
layout: doc
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# Require Regex Literals to be Wrapped (wrap-regex)

# 要求正则表达式被包裹起来 (wrap-regex)

When a regular expression is used in certain situations, it can end up looking like a division operator. For example:

在某些情况下，使用正则表达式时，它看起来会像一个除法运算符。例如：

```js
function a() {
    return /foo/.test("bar");
}
```

## Rule Details

This is used to disambiguate the slash operator and facilitates more readable code.

该规则旨在消除斜线运算符造成的歧义，增加代码的可读性。

Examples of **incorrect** code for this rule:

**错误** 代码示例：

```js
/*eslint wrap-regex: "error"*/

function a() {
    return /foo/.test("bar");
}
```

Examples of **correct** code for this rule:

**正确** 代码示例：

```js
/*eslint wrap-regex: "error"*/

function a() {
    return (/foo/).test("bar");
}
```

## Version

This rule was introduced in ESLint 0.1.0.

该规则在 ESLint 0.1.0 中被引入。

## Resources

* [Rule source](https://github.com/eslint/eslint/tree/master/lib/rules/wrap-regex.js)
* [Documentation source](https://github.com/eslint/eslint/tree/master/docs/rules/wrap-regex.md)
