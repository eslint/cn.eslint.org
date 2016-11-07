---
title: no-extra-bind - Rules
layout: doc
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# Disallow unnecessary function binding (no-extra-bind)

# 禁止不必要的函数绑定 (no-extra-bind)

(fixable) The `--fix` option on the [command line](../user-guide/command-line-interface#fix) automatically fixes problems reported by this rule.

(fixable) [命令行](../user-guide/command-line-interface#fix)中的 `--fix` 选项可以自动修复该规则报告的问题。

The `bind()` method is used to create functions with specific `this` values and, optionally, binds arguments to specific values. When used to specify the value of `this`, it's important that the function actually use `this` in its function body. For example:

`bind()` 方法使用特定的 `this` 值来创建函数，并可选地将参数绑定到特定的值。当使用 `this` 时，在函数体中实际上使用的 `this` 值。例如：

```js
var boundGetName = (function getName() {
    return this.name;
}).bind({ name: "ESLint" });

console.log(boundGetName());      // "ESLint"
```

This code is an example of a good use of `bind()` for setting the value of `this`.

这段代码就是一个很好的例子，它使用 `bind()` 来设置 `this` 值。

Sometimes during the course of code maintenance, the `this` value is removed from the function body. In that case, you can end up with a call to `bind()` that doesn't accomplish anything:

有时，在代码维护过程中，`this` 值从函数体中被移除。在这种情况下，你可以结束 `bind()`的调用，因为它没有做任何事情。

```js
// useless bind
var boundGetName = (function getName() {
    return "ESLint";
}).bind({ name: "ESLint" });

console.log(boundGetName());      // "ESLint"
```

In this code, the reference to `this` has been removed but `bind()` is still used. In this case, the `bind()` is unnecessary overhead (and a performance hit) and can be safely removed.

在这段代码中，`this` 的引用已经被删除，但是 `bind()` 仍在使用。在这种情况下，`bind()` 就成了不必要的开销（和性能损耗），可以安全地删除。

## Rule Details

This rule is aimed at avoiding the unnecessary use of `bind()` and as such will warn whenever an immediately-invoked function expression (IIFE) is using `bind()` and doesn't have an appropriate `this` value. This rule won't flag usage of `bind()` that includes function argument binding.

此规则目的在于避免不必要的 `bind()` 使用，并且当立即执行的函数表达式 (IIFE) 使用 `bind()`，但是没有一个合适的 `this` 值时，该规则会发出警告。此规则不会标记有函数参数绑定的`bind()` 的使用情况。

**Note:** Arrow functions can never have their `this` value set using `bind()`. This rule flags all uses of `bind()` with arrow functions as a problem

**注意：**箭头函数不能通过使用 `bind()` 设置它们的自己 `this` 值。此规则把所有使用`bind()` 的箭头函数标记为是有问题的。

Examples of **incorrect** code for this rule:

**错误** 代码示例：

```js
/*eslint no-extra-bind: "error"*/
/*eslint-env es6*/

var x = function () {
    foo();
}.bind(bar);

var x = (() => {
    foo();
}).bind(bar);

var x = (() => {
    this.foo();
}).bind(bar);

var x = function () {
    (function () {
      this.foo();
    }());
}.bind(bar);

var x = function () {
    function foo() {
      this.bar();
    }
}.bind(baz);
```

Examples of **correct** code for this rule:

**正确** 代码示例：

```js
/*eslint no-extra-bind: "error"*/

var x = function () {
    this.foo();
}.bind(bar);

var x = function (a) {
    return a + 1;
}.bind(foo, bar);
```

## When Not To Use It

If you are not concerned about unnecessary calls to `bind()`, you can safely disable this rule.

如果你不担心不必要的 `bind()` 调用，你可以禁用此规则。

## Further Reading

* [Function.prototype.bind](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind)
* [Understanding JavaScript's Function.prototype.bind](http://www.smashingmagazine.com/2014/01/understanding-javascript-function-prototype-bind/)

## Version

This rule was introduced in ESLint 0.8.0.

该规则在 ESLint 0.8.0 中被引入。

## Resources

* [Rule source](https://github.com/eslint/eslint/tree/master/lib/rules/no-extra-bind.js)
* [Documentation source](https://github.com/eslint/eslint/tree/master/docs/rules/no-extra-bind.md)
