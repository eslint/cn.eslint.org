---
title: Rule one-var-declaration-per-line
layout: doc
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# Require or disallow an newline around variable declarations (one-var-declaration-per-line)

# 要求或禁止在变量声明周围换行 (one-var-declaration-per-line)

Some developers declare multiple var statements on the same line:

一些开发者在同一行上声明多个变量：

```js
var foo, bar, baz;
```

Others prefer to declare one var per line.

另一些人更喜欢声明每个变量单独成行。

```js
var foo,
    bar,
    baz;
```

This rule enforces a consistent style across the entire project.

该规则强制在整个项目中使用一致的风格。

## Rule Details

This rule enforces a consistent coding style where newlines are required or disallowed after each var declaration or just when there is a variable initialization. It ignores var declarations inside for loop conditionals.

该规则强制一种一致的代码风格，在每个变量声明或只是在变量初始化之后要求或禁止使用换行符。它将忽略循环条件中的变量声明。

## Options

This rule takes one option, a string, which can be:

该规则有一个字符串选项，可以是：

* `"always"` enforces a newline around each variable declaration
* `"always"` 强制每个变量声明都换行
* `"initializations"` enforces a newline around each variable initialization (default)
* `"initializations"` 强制每个变量初始化语句换行 (默认)

The following patterns are considered problems when set to `"always"`:

设置为 `"always"`，以下模式被认为是有问题的：

```js
/*eslint one-var-declaration-per-line: ["error", "always"]*/
/*eslint-env es6*/

var a, b;

let a, b = 0;

const a = 0, b = 0;
```

The following patterns are not considered problems when set to `"always"`:

设置为 `"always"`，以下模式被认为是没有问题的：

```js
/*eslint one-var-declaration-per-line: ["error", "always"]*/
/*eslint-env es6*/

var a,
    b;

let a,
    b = 0;
```

The following patterns are considered problems when set to `"initializations"`:

设置为 `"initializations"`，以下模式被认为是有问题的：

```js
/*eslint one-var-declaration-per-line: ["error", "initializations"]*/
/*eslint-env es6*/

var a, b, c = 0;

let a,
    b = 0, c;
```

The following patterns are not considered problems when set to `"initializations"`:

设置为  `"initializations"`，以下模式被认为是没有问题的：

```js
/*eslint one-var-declaration-per-line: ["error", "initializations"]*/
/*eslint-env es6*/

var a, b;

let a,
    b;

let a,
    b = 0;
```

## Related Rules

* [one-var](one-var)

## Version

This rule was introduced in ESLint 2.0.0-beta.3.

该规则在 ESLint 2.0.0-beta.3 中被引入。

## Resources

* [Rule source](https://github.com/eslint/eslint/tree/master/lib/rules/one-var-declaration-per-line.js)
* [Documentation source](https://github.com/eslint/eslint/tree/master/docs/rules/one-var-declaration-per-line.md)
