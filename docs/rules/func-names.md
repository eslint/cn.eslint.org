---
title: Rule func-names
layout: doc
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# Require Function Expressions to have a Name (func-names)

# 要求函数表达式有个一名字 (func-names)

A pattern that's becoming more common is to give function expressions names to aid in debugging. For example:

给函数表达式加个名字可以方便调试，这种模式越来越普遍。例如：

```js
Foo.prototype.bar = function bar() {};
```

Adding the second `bar` in the above example is optional.  If you leave off the function name then when the function throws an exception you are likely to get something similar to `anonymous function` in the stack trace.  If you provide the optional name for a function expression then you will get the name of the function expression in the stack trace.

在上面的例子中添加第二个 `bar`是可选的。如果不使用函数名的话，当该函数抛出异常时，你可能得到一些类似于堆栈里 `anonymous function` 的东西。如果你为函数表达式提供了可选名称，你将在堆栈中找到该函数表达式的名称。

## Rule Details

Examples of **incorrect** code for this rule:

**错误** 代码示例：

```js
/*eslint func-names: "error"*/

Foo.prototype.bar = function() {};

(function() {
    // ...
}())
```

Examples of **correct** code for this rule:

**正确** 代码示例：

```js
/*eslint func-names: "error"*/

Foo.prototype.bar = function bar() {};

(function bar() {
    // ...
}())
```

## Further Reading

* [Functions Explained](http://markdaggett.com/blog/2013/02/15/functions-explained/)

## Version

This rule was introduced in ESLint 0.4.0.

该规则在 ESLint 0.4.0 中被引入。

## Resources

* [Rule source](https://github.com/eslint/eslint/tree/master/lib/rules/func-names.js)
* [Documentation source](https://github.com/eslint/eslint/tree/master/docs/rules/func-names.md)
