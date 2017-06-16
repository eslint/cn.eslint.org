---
title: no-new-func - Rules
layout: doc
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# Disallow Function Constructor (no-new-func)

# 禁用Function构造函数 (no-new-func)

It's possible to create functions in JavaScript using the `Function` constructor, such as:

在 JavaScript 中可以使用 `Function` 构造函数创建一个函数，例如：

```js
var x = new Function("a", "b", "return a + b");
```

This is considered by many to be a bad practice due to the difficulty in debugging and reading these types of functions.

由于调试和阅读这种类型的函数比较困难，许多人认为这并不是一个好的做法，

## Rule Details

This error is raised to highlight the use of a bad practice. By passing a string to the Function constructor, you are requiring the engine to parse that string much in the way it has to when you call the `eval` function.

该规则会高亮标记出不好的实践的使用。把一个字符串传给 Function 构造函数，你需要引擎解析该字符串，这一点同调用 `eval` 函数一样。

Examples of **incorrect** code for this rule:

**错误** 代码示例：

```js
/*eslint no-new-func: "error"*/

var x = new Function("a", "b", "return a + b");
var x = Function("a", "b", "return a + b");
```

Examples of **correct** code for this rule:

**正确** 代码示例：

```js
/*eslint no-new-func: "error"*/

var x = function (a, b) {
    return a + b;
};
```

## When Not To Use It

In more advanced cases where you really need to use the `Function` constructor.

在一些更高级的情况下，你确实需要使用 `Function` 构造函数。

## Further Reading

* [The Function constructor is eval](http://jslinterrors.com/the-function-constructor-is-eval/)

## Version

This rule was introduced in ESLint 0.0.7.

该规则在 ESLint 0.0.7 中被引入。

## Resources

* [Rule source](https://github.com/eslint/eslint/tree/master/lib/rules/no-new-func.js)
* [Documentation source](https://github.com/eslint/eslint/tree/master/docs/rules/no-new-func.md)
