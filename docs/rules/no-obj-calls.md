---
title: Rule no-obj-calls
layout: doc
translator: molee1905
proofreader: yanggao40
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# Disallow Global Object Function Calls (no-obj-calls)

# 禁止全局对象函数调用

ECMAScript provides several global objects that are intended to be used as-is. Some of these objects look as if they could be constructors due their capitalization (such as `Math` and `JSON`) but will throw an error if you try to execute them as functions.

ECMAScript提供了几个全局对象，旨在直接调用。这些对象由于是大写的（比如`Math` 和 `JSON`）看起来好像是构造函数，但是如果你尝试像函数一致执行它们，将会抛出错误。

The [ECMAScript 5 specification](http://es5.github.io/#x15.8) makes it clear that both `Math` and `JSON` cannot be invoked:

[ECMAScript 5 规范](http://es5.github.io/#x15.8)明确表示`Math` 和 `JSON`不能被调用：

> The Math object does not have a `[[Call]]` internal property; it is not possible to invoke the Math object as a function.


> Math对象没有`[[Call]]`内部属性，不能像一个函数一样调用Math对象

## Rule Details

This rule is aimed at preventing the accidental calling of global objects as functions.

该规则旨在阻止意外调用全局对象函数。

Examples of **incorrect** code for this rule:

**错误**代码示例：

```js
/*eslint no-obj-calls: 2*/

var x = Math();
var y = JSON();
```

Examples of **correct** code for this rule:

**正确**代码示例：

```js
/*eslint no-obj-calls: 2*/

var x = math();
var y = json();
```

## Further Reading

* [The Math Object](http://es5.github.io/#x15.8)
* ['{a}' is not a function](http://jslinterrors.com/a-is-not-a-function/)

## Version

This rule was introduced in ESLint 0.0.9.

该规则在ESLint 0.0.9中被引入。

## Resources

* [Rule source](https://github.com/eslint/eslint/tree/master/lib/rules/no-obj-calls.js)
* [Documentation source](https://github.com/eslint/eslint/tree/master/docs/rules/no-obj-calls.md)
