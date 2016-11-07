---
title: no-useless-concat - Rules
layout: doc
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# Disallow unnecessary concatenation of strings (no-useless-concat)

# 禁止没有必要的字符拼接 (no-useless-concat)

It's unnecessary to concatenate two strings together, such as:

把两个字符拼接在一起是没有必要的，比如：

```js
var foo = "a" + "b";
```

This code is likely the result of refactoring where a variable was removed from the concatenation (such as `"a" + b + "b"`). In such a case, the concatenation isn't important and the code can be rewritten as:

这段代码像是在拼接中移除了某个变量的重构造成的（比如 `"a" + b + "b"`）。在这种情况下，拼接不是重要的，代码可以被写成如下形式:

```js
var foo = "ab";
```

## Rule Details

This rule aims to flag the concatenation of 2 literals when they could be combined into a single literal. Literals can be strings or template literals.

此规则目的在于标记可以组合成单个字面量的两个字面量的拼接。字面量可以是字符串或者模板字面量。

Examples of **incorrect** code for this rule:

**错误** 代码示例：

```js
/*eslint no-useless-concat: "error"*/
/*eslint-env es6*/

// these are the same as "10"
var a = `some` + `string`;
var a = '1' + '0';
var a = '1' + `0`;
var a = `1` + '0';
var a = `1` + `0`;
```

Examples of **correct** code for this rule:

**正确** 代码示例：

```js
/*eslint no-useless-concat: "error"*/

// when a non string is included
var c = a + b;
var c = '1' + a;
var a = 1 + '1';
var c = 1 - 2;
// when the string concatenation is multiline
var c = "foo" +
    "bar";
```

## When Not To Use It

If you don't want to be notified about unnecessary string concatenation, you can safely disable this rule.

如果不想收到关于不必要的字符拼接的通知，你可以禁用此规则。

## Version

This rule was introduced in ESLint 1.3.0.

该规则在 ESLint 1.3.0 中被引入。

## Resources

* [Rule source](https://github.com/eslint/eslint/tree/master/lib/rules/no-useless-concat.js)
* [Documentation source](https://github.com/eslint/eslint/tree/master/docs/rules/no-useless-concat.md)
