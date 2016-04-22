---
title: Rule wrap-iife
layout: doc
translator: fengnana
proofreader: qifeigit
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# Require IIFEs to be Wrapped (wrap-iife)

# 需要把立即执行的函数包裹起来 (wrap-iife)

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

The rule takes one option which can enforce a consistent wrapping style:

该规则有一个选项，可以强制统一的包裹风格。

* `"outside"` enforces always wrapping the *call* expression. The default is `"outside"`.
* `"outside"` 强制总是包裹 *call* 表达式。默认是 `"outside"`。
* `"inside"` enforces always wrapping the *function* expression.
* `"inside"` 强制总是包裹 *function* 表达式。
* `"any"` enforces always wrapping, but allows either style.
* `"any"`强制总是包裹，但允许其它风格。

### outside

Examples of **incorrect** code for the default `"outside"` option:

默认选项`"outside"`的 **错误**代码示例：

```js
/*eslint wrap-iife: ["error", "outside"]*/

var x = function () { return { y: 1 };}(); // unwrapped
var x = (function () { return { y: 1 };})(); // wrapped function expression
```

Examples of **correct** code for the default `"outside"` option:

默认选项`"outside"`的 **正确**代码示例：

```js
/*eslint wrap-iife: ["error", "outside"]*/

var x = (function () { return { y: 1 };}()); // wrapped call expression
```

### inside

Examples of **incorrect** code for the `"inside"` option:

`"inside"`选项的 **错误**代码示例：

```js
/*eslint wrap-iife: ["error", "inside"]*/

var x = function () { return { y: 1 };}(); // unwrapped
var x = (function () { return { y: 1 };}()); // wrapped call expression
```

Examples of **correct** code for the `"inside"` option:

`"inside"`选项的 **正确**代码示例：

```js
/*eslint wrap-iife: ["error", "inside"]*/

var x = (function () { return { y: 1 };})(); // wrapped function expression
```

### any

Examples of **incorrect** code for the `"any"` option:

`"any"`选项的 **错误**代码示例：

```js
/*eslint wrap-iife: ["error", "any"]*/

var x = function () { return { y: 1 };}(); // unwrapped
```

Examples of **correct** code for the `"any"` option:

`"any"`选项的 **正确**代码示例：

```js
/*eslint wrap-iife: ["error", "any"]*/

var x = (function () { return { y: 1 };}()); // wrapped call expression
var x = (function () { return { y: 1 };})(); // wrapped function expression
```

## Version

This rule was introduced in ESLint 0.0.9.

该规则在 ESLint 0.0.9 中被引入。

## Resources

* [Rule source](https://github.com/eslint/eslint/tree/master/lib/rules/wrap-iife.js)
* [Documentation source](https://github.com/eslint/eslint/tree/master/docs/rules/wrap-iife.md)
