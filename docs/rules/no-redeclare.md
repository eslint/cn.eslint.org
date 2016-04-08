---
title: Rule no-redeclare
layout: doc
translator: fengnana
proofreader: yanggao40
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# Disallow Redeclaring Variables (no-redeclare)

# 禁止重新定义变量 (no-redeclare)

In JavaScript, it's possible to redeclare the same variable name using `var`. This can lead to confusion as to where the variable is actually declared and initialized.

在 JavaScript 中，使用`var`可以对同一个变量重定义。这会导致混乱变量在哪里和初始化。

## Rule Details

This rule is aimed at eliminating variables that have multiple declarations in the same scope.

此规则目旨在消除同一作用域中多次重定义变量。

Examples of **incorrect** code for this rule:

**错误**代码示例：

```js
/*eslint no-redeclare: "error"*/

var a = 3;
var a = 10;
```

Examples of **correct** code for this rule:

**正确**代码示例：

```js
/*eslint no-redeclare: "error"*/

var a = 3;
// ...
a = 10;
```

## Options

This rule takes one option, an object, with a property `"builtinGlobals"`. `false` by default.

此规则带有一个选项，属性是`"builtinGlobals"`的对象。默认为`false`。

If this is `true`, this rule checks with built-in global variables such as `Object`, `Array`, `Number`, ...

如果为`true`，此规则检查内建全局变量如`Object`, `Array`, `Number`, ...

### builtinGlobals

Examples of **incorrect** code for the `{ "builtinGlobals": true }` option:

`{"builtinGlobals": true}`选项的 **错误**代码示例：

```js
/*eslint no-redeclare: ["error", { "builtinGlobals": true }]*/

var Object = 0;
```

Examples of **incorrect** code for the `{ "builtinGlobals": true }` option and the `browser` environment:

在`browser`环境下，`{"builtinGlobals": true}`选项的 **错误**代码示例：

```js
/*eslint no-redeclare: ["error", { "builtinGlobals": true }]*/
/*eslint-env browser*/

var top = 0;
```

The `browser` environment has many built-in global variables (for example, `top`). Some of built-in global variables cannot be redeclared.

`browser`环境有很多内建的全局变量（例如，`top`）。一些内建的全局变量不能被重新声明。

## Version

This rule was introduced in ESLint 0.0.9.

此规则在 ESLint 0.0.9 中被引入。

## Resources

* [Rule source](https://github.com/eslint/eslint/tree/master/lib/rules/no-redeclare.js)
* [Documentation source](https://github.com/eslint/eslint/tree/master/docs/rules/no-redeclare.md)
