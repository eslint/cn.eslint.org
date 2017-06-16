---
title: wrap-iife - Rules
layout: doc
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# Require IIFEs to be Wrapped (wrap-iife)

# 需要把立即执行的函数包裹起来 (wrap-iife)

(fixable) The `--fix` option on the [command line](../user-guide/command-line-interface#fix) can automatically fix some of the problems reported by this rule.

(fixable) [命令行](../user-guide/command-line-interface#fix)中的 `--fix` 选项可以自动修复一些该规则报告的问题。

You can immediately invoke function expressions, but not function declarations. A common technique to create an immediately-invoked function expression (IIFE) is to wrap a function declaration in parentheses. The opening parentheses causes the contained function to be parsed as an expression, rather than a declaration.

你可以立即调用函数表达式，而不是函数声明。创建一个立即执行函数 (IIFE) 的一个通用技术是用括号包裹一个函数声明。括号内的函数被解析为一个表达式，而不是一个声明。


```js
// function expression could be unwrapped
var x = function () { return { y: 1 };}();

// function declaration must be wrapped
function () { /* side effects */ }(); // SyntaxError
```

## Rule Details

This rule requires all immediately-invoked function expressions to be wrapped in parentheses.

该规则要求所有的立即执行函数表达式使用括号包裹起来。

## Options

This rule has two options, a string option and an object option.

该规则有两个选项，一个是字符串，一个是对象。

String option:

字符串选项：

* `"outside"` enforces always wrapping the *call* expression. The default is `"outside"`.
* `"outside"` 强制总是包裹 *call* 表达式。默认是 `"outside"`。
* `"inside"` enforces always wrapping the *function* expression.
* `"inside"` 强制总是包裹 *function* 表达式。
* `"any"` enforces always wrapping, but allows either style.
* `"any"`强制总是包裹，但允许其它风格。

Object option:

对象选项：

* `"functionPrototypeMethods": true` additionally enforces wrapping function expressions invoked using `.call` and `.apply`. The default is `false`.
* `"functionPrototypeMethods": true` 使用 `.call` 和 `.apply` 调用时，强制要求包裹函数表达式。默认为 `false`。

### outside

Examples of **incorrect** code for the default `"outside"` option:

默认选项 `"outside"` 的 **错误** 代码示例：

```js
/*eslint wrap-iife: ["error", "outside"]*/

var x = function () { return { y: 1 };}(); // unwrapped
var x = (function () { return { y: 1 };})(); // wrapped function expression
```

Examples of **correct** code for the default `"outside"` option:

默认选项 `"outside"` 的 **正确** 代码示例：

```js
/*eslint wrap-iife: ["error", "outside"]*/

var x = (function () { return { y: 1 };}()); // wrapped call expression
```

### inside

Examples of **incorrect** code for the `"inside"` option:

选项 `"inside"` 的 **错误** 代码示例：

```js
/*eslint wrap-iife: ["error", "inside"]*/

var x = function () { return { y: 1 };}(); // unwrapped
var x = (function () { return { y: 1 };}()); // wrapped call expression
```

Examples of **correct** code for the `"inside"` option:

选项 `"inside"` 的 **正确** 代码示例：

```js
/*eslint wrap-iife: ["error", "inside"]*/

var x = (function () { return { y: 1 };})(); // wrapped function expression
```

### any

Examples of **incorrect** code for the `"any"` option:

选项 `"any"` 的 **错误** 代码示例：

```js
/*eslint wrap-iife: ["error", "any"]*/

var x = function () { return { y: 1 };}(); // unwrapped
```

Examples of **correct** code for the `"any"` option:

选项 `"any"` 的 **正确** 代码示例：

```js
/*eslint wrap-iife: ["error", "any"]*/

var x = (function () { return { y: 1 };}()); // wrapped call expression
var x = (function () { return { y: 1 };})(); // wrapped function expression
```

### functionPrototypeMethods

Examples of **incorrect** code for this rule with the `"inside", { "functionPrototypeMethods": true }` options:

选项 `"inside", { "functionPrototypeMethods": true }` 的 **错误** 代码示例：

```js
/* eslint wrap-iife: [2, "inside", { functionPrototypeMethods: true }] */

var x = function(){ foo(); }()
var x = (function(){ foo(); }())
var x = function(){ foo(); }.call(bar)
var x = (function(){ foo(); }.call(bar))
```

Examples of **correct** code for this rule with the `"inside", { "functionPrototypeMethods": true }` options:

选项 `"inside", { "functionPrototypeMethods": true }` 的 **正确** 代码示例：

```js
/* eslint wrap-iife: [2, "inside", { functionPrototypeMethods: true }] */

var x = (function(){ foo(); })()
var x = (function(){ foo(); }).call(bar)
```

## Version

This rule was introduced in ESLint 0.0.9.

该规则在 ESLint 0.0.9 中被引入。

## Resources

* [Rule source](https://github.com/eslint/eslint/tree/master/lib/rules/wrap-iife.js)
* [Documentation source](https://github.com/eslint/eslint/tree/master/docs/rules/wrap-iife.md)
