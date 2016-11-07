---
title: no-obj-calls - Rules
layout: doc
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# disallow calling global object properties as functions (no-obj-calls)

# 禁止将全局对象当作函数进行调用 (no-obj-calls)

ECMAScript provides several global objects that are intended to be used as-is. Some of these objects look as if they could be constructors due their capitalization (such as `Math` and `JSON`) but will throw an error if you try to execute them as functions.

ECMAScript 提供了几个全局对象，旨在直接调用。这些对象由于是大写的（比如 `Math` 和 `JSON`）看起来像是构造函数，但是如果你尝试像函数一样执行它们，将会抛出错误。

The [ECMAScript 5 specification](http://es5.github.io/#x15.8) makes it clear that both `Math` and `JSON` cannot be invoked:

[ECMAScript 5 规范](http://es5.github.io/#x15.8)明确表示 `Math` 和 `JSON` 是不能被调用的：

> The Math object does not have a `[[Call]]` internal property; it is not possible to invoke the Math object as a function.

> Math 对象没有 `[[Call]]` 内部属性，不能像一个函数一样调用 Math 对象

## Rule Details

This rule disallows calling the `Math` and `JSON` objects as functions.

该规则禁止将 `Math` 和 `JSON` 对象当作函数进行调用。

Examples of **incorrect** code for this rule:

**错误** 代码示例：

```js
/*eslint no-obj-calls: "error"*/

var math = Math();
var json = JSON();
```

Examples of **correct** code for this rule:

**正确** 代码示例：

```js
/*eslint no-obj-calls: "error"*/

function area(r) {
    return Math.PI * r * r;
}
var object = JSON.parse("{}");
```

## Further Reading

* [The Math Object](http://es5.github.io/#x15.8)
* ['{a}' is not a function](http://jslinterrors.com/a-is-not-a-function/)

## Version

This rule was introduced in ESLint 0.0.9.

该规则在 ESLint 0.0.9 中被引入。

## Resources

* [Rule source](https://github.com/eslint/eslint/tree/master/lib/rules/no-obj-calls.js)
* [Documentation source](https://github.com/eslint/eslint/tree/master/docs/rules/no-obj-calls.md)
