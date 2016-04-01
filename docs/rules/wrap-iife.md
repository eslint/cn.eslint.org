---
title: Rule wrap-iife
layout: doc
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# Require IIFEs to be Wrapped (wrap-iife)

# 需要把立即执行的函数包裹起来 (wrap-iife)

Require immediate function invocation to be wrapped in parentheses.

需要立即执行的函数需要用括号包裹起来。

```js
var x = function () { return { y: 1 };}();
```

## Rule Details

Since function statements cannot be immediately invoked, and function expressions can be, a common technique to create an immediately-invoked function expression is to simply wrap a function statement in parentheses. The opening parentheses causes the contained function to be parsed as an expression, rather than a declaration.

因为函数语句不能立即被调用，但是函数表达式可以，创建一个立即调用的函数表达式通常的技巧是用括号直接包裹。开括号使得被包含的函数被解析成一个表达式而不是一个声明。

## Options

The rule takes one option which can enforce a consistent wrapping style. The default is `outside`.

规则中带有一个选项，可以强制统一的包裹风格。默认值是`outside`。

```json
"wrap-iife": [2, "outside"]
```

This configures the rule to enforce wrapping always the call expression.

这个配置规则总是强制包裹调用语句。

```json
"wrap-iife": [2, "inside"]
```

This configures the rule to enforce wrapping always the function expression.

这个配置规则总是强制包裹函数表达式。

```json
"wrap-iife": [2, "any"]
```

This allows any wrapping style.

这个配置允许任何形式的包裹风格。

The following patterns are considered problems:

以下模式被认为是有问题的：

```js
/*eslint wrap-iife: 2*/

var x = function () { return { y: 1 };}();
```

```js
/*eslint wrap-iife: [2, "outside"]*/

var x = (function () { return { y: 1 };})();
```

```js
/*eslint wrap-iife: [2, "inside"]*/

var x = (function () { return { y: 1 };}());
```

The following patterns are not considered problems:

以下模式被认为是没有问题的：

```js
/*eslint wrap-iife: [2, "inside"]*/

var x = (function () { return { y: 1 };})();
```

```js
/*eslint wrap-iife: [2, "outside"]*/

var x = (function () { return { y: 1 };}());
```

## Version

This rule was introduced in ESLint 0.0.9.

此规则在ESLint 0.0.9中被引入。

## Resources

* [Rule source](https://github.com/eslint/eslint/tree/master/lib/rules/wrap-iife.js)
* [Documentation source](https://github.com/eslint/eslint/tree/master/docs/rules/wrap-iife.md)
