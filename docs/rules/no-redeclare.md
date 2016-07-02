---
title: Rule no-redeclare
layout: doc
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# Disallow Redeclaring Variables (no-redeclare)

# 禁止重新声明变量 (no-redeclare)

In JavaScript, it's possible to redeclare the same variable name using `var`. This can lead to confusion as to where the variable is actually declared and initialized.

在 JavaScript 中，使用 `var` 可以对同一个变量再次声明。这会使变量实际声明和定义的位置混乱不堪。

## Rule Details

This rule is aimed at eliminating variables that have multiple declarations in the same scope.

此规则目旨在消除同一作用域中多次声明同一变量。

Examples of **incorrect** code for this rule:

**错误** 代码示例：

```js
/*eslint no-redeclare: "error"*/

var a = 3;
var a = 10;
```

Examples of **correct** code for this rule:

**正确** 代码示例：

```js
/*eslint no-redeclare: "error"*/

var a = 3;
// ...
a = 10;
```

## Options

This rule takes one optional argument, an object with a boolean property `"builtinGlobals"`. It defaults to `false`.

该规则有一个选项参数，是个对象，该对象有个布尔属性为`"builtinGlobals"`。默认为`false`。

If set to `true`, this rule also checks redeclaration of built-in globals, such as `Object`, `Array`, `Number`...

如果设置为 `true`，该规则也会检查全局内建对象，比如`Object`、`Array`、`Number`...

### builtinGlobals

Examples of **incorrect** code for the `{ "builtinGlobals": true }` option:

选项 `{ "builtinGlobals": true }` 的 **错误** 代码示例：

```js
/*eslint no-redeclare: ["error", { "builtinGlobals": true }]*/

var Object = 0;
```

Examples of **incorrect** code for the `{ "builtinGlobals": true }` option and the `browser` environment:

在 `browser` 环境下，选项 `{"builtinGlobals": true}` 的 **错误** 代码示例：

```js
/*eslint no-redeclare: ["error", { "builtinGlobals": true }]*/
/*eslint-env browser*/

var top = 0;
```

The `browser` environment has many built-in global variables (for example, `top`). Some of built-in global variables cannot be redeclared.

`browser` 环境有很多内建的全局变量（例如，`top`）。一些内建的全局变量不能被重新声明。

## Version

This rule was introduced in ESLint 0.0.9.

该规则在 ESLint 0.0.9 中被引入。

## Resources

* [Rule source](https://github.com/eslint/eslint/tree/master/lib/rules/no-redeclare.js)
* [Documentation source](https://github.com/eslint/eslint/tree/master/docs/rules/no-redeclare.md)
