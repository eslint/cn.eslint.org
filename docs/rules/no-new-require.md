---
title: no-new-require - Rules
layout: doc
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# Disallow new require (no-new-require)

# 不允许 new require (no-new-require)

The `require` function is used to include modules that exist in separate files, such as:

`require` 方法被用来引入不同文件中模块，例如：

```js
var appHeader = require('app-header');
```

Some modules return a constructor which can potentially lead to code such as:

某些模块返回一个构造函数，可能导致代码如：

```js
var appHeader = new require('app-header');
```

Unfortunately, this introduces a high potential for confusion since the code author likely meant to write:

不幸的是，这引入了潜在的混乱，因为作者可能要这样：

```js
var appHeader = new (require('app-header'));
```

For this reason, it is usually best to disallow this particular expression.

处于这个原因，最好禁止使用这种特殊的表达式。

## Rule Details

This rule aims to eliminate use of the `new require` expression.

此规则旨在消除使用 `new require` 的表达方式。

Examples of **incorrect** code for this rule:

**错误** 代码示例：

```js
/*eslint no-new-require: "error"*/

var appHeader = new require('app-header');
```

Examples of **correct** code for this rule:

**正确** 代码示例：

```js
/*eslint no-new-require: "error"*/

var AppHeader = require('app-header');
var appHeader = new AppHeader();
```

## When Not To Use It

If you are using a custom implementation of `require` and your code will never be used in projects where a standard `require` (CommonJS, Node.js, AMD) is expected, you can safely turn this rule off.

如果你使用一个自定义的 `require` 方法，而且代码永远不会在项目中使用标准 `require`  (CommonJS、Node.js、AMD)，你可以关闭此规则。

## Version

This rule was introduced in ESLint 0.6.0.

该规则在 ESLint 0.6.0 被引入。

## Resources

* [Rule source](https://github.com/eslint/eslint/tree/master/lib/rules/no-new-require.js)
* [Documentation source](https://github.com/eslint/eslint/tree/master/docs/rules/no-new-require.md)
