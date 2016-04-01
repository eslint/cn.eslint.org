---
title: Rule no-implied-eval
layout: doc
translator: fengnana
proofreader: molee1905
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# Disallow Implied eval() (no-implied-eval)

# 禁用隐式的eval() (no-implied-eval)

It's considered a good practice to avoid using `eval()` in JavaScript. There are security and performance implications involved with doing so, which is why many linters (including ESLint) recommend disallowing `eval()`. However, there are some other ways to pass a string and have it interpreted as JavaScript code that have similar concerns.

在 JavaScript 中避免使用`eval()`被认为是一个很好的实践。这么做事考虑到安全性和性能的影响，这也是为什么很多检查工具（包括 ESLint）推荐禁用`eval()`。然而，也有一些其它方式，通过传递一个字符串，并将它解析为 JavaScript 代码，也有类似的问题。

The first is using `setTimeout()`, `setInterval()` or `execScript()` (Internet Explorer only), both of which can accept a string of JavaScript code as their first argument. For example:

首当其冲的就是`setTimeout()`，`setInterval()`或者`execScript()` (仅限IE浏览器)，它们都可以接受一个 JavaScript 字符串代码作为第一个参数。例如：

```js
setTimeout("alert('Hi!');", 100);
```

This is considered an implied `eval()` because a string of JavaScript code is
 passed in to be interpreted. The same can be done with `setInterval()` and `execScript()`. Both interpret the JavaScript code in the global scope. For  both `setTimeout()` and `setInterval()`, the first argument can also be a function, and that is considered safer and is more performant:

这被认为是一个隐式的`eval()`因为传入的 JavaScript 字符串可以被解析。`setInterval()`和`execScript()`也一样。两种方式都能在全局作用域解析 JavaScript 代码。对于`setTimeout()`和 `setInterval()`来说，第一个参数也可以是个函数，并且这种方式被认为更安全更高效。
 
```js
setTimeout(function() {
    alert("Hi!");
}, 100);
```

The best practice is to always use a function for the first argument of `setTimeout()` and `setInterval()` (and avoid `execScript()`).

最佳实践是总是使用函数作为`setTimeout()`和 `setInterval()`（避开`execScript()`）的第一个参数。

## Rule Details

This rule aims to eliminate implied `eval()` through the use of `setTimeout()`, `setInterval()` or `execScript()`. As such, it will warn when either function is used with a string as the first argument.

此规则目的在于消除使用`setTimeout()`，`setInterval()`或`execScript()`时隐式的`eval()`。因此，当它们中的任何一个使用字符串作为第一个参数时，该规则将发出警告。

The following patterns are considered problems:

以下模式被认为是有问题的：

```js
/*eslint no-implied-eval: 2*/

setTimeout("alert('Hi!');", 100);

setInterval("alert('Hi!');", 100);

execScript("alert('Hi!')");

window.setTimeout("count = 5", 10);

window.setInterval("foo = bar", 10);
```

The following patterns are not considered problems:

以下模式被认为是没有问题的：

```js
/*eslint no-implied-eval: 2*/

setTimeout(function() {
    alert("Hi!");
}, 100);

setInterval(function() {
    alert("Hi!");
}, 100);
```

## When Not To Use It

If you want to allow `setTimeout()` and `setInterval()` with string arguments, then you can safely disable this rule.

如果你想要允许`setTimeout()`和`setInterval()`使用字符串参数，你可以关闭此规则。

## Further Reading

* [Implied eval is evil. Pass a function instead of a string.](http://jslinterrors.com/implied-eval-is-evil-pass-a-function-instead-of-a-string/)

## Related Rules

* [no-eval](no-eval)

## Version

This rule was introduced in ESLint 0.0.7.

此规则在 ESLint 0.0.7 中被引入。

## Resources

* [Rule source](https://github.com/eslint/eslint/tree/master/lib/rules/no-implied-eval.js)
* [Documentation source](https://github.com/eslint/eslint/tree/master/docs/rules/no-implied-eval.md)
