---
title: no-param-reassign - Rules
layout: doc
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# Disallow Reassignment of Function Parameters (no-param-reassign)

# 禁止对函数参数再赋值 (no-param-reassign)

Assignment to variables declared as function parameters can be misleading and lead to confusing behavior, as modifying function parameters will also mutate the `arguments` object. Often, assignment to function parameters is unintended and indicative of a mistake or programmer error.

对函数参数中的变量进行赋值可能会误导读者，导致混乱，也会改变 `arguments` 对象。通常，对函数参数进行赋值并非有意为之，更多的是程序员的书写错误做成的。

This rule can be also configured to fail when function parameters are modified. Side effects on parameters can cause counter-intuitive execution flow and make errors difficult to track down.

当函数参数被修改时，该规则也可能会失效。由此造成的副作用可能导致不直观的执行流程，使错误难以跟踪。

## Rule Details

This rule aims to prevent unintended behavior caused by modification or reassignment of function parameters.

该规则旨在避免出现对函数参数的修改或重新赋值造成的非自主行为。

Examples of **incorrect** code for this rule:

**错误** 代码示例：

```js
/*eslint no-param-reassign: "error"*/

function foo(bar) {
    bar = 13;
}

function foo(bar) {
    bar++;
}
```

Examples of **correct** code for this rule:

**正确** 代码示例：

```js
/*eslint no-param-reassign: "error"*/

function foo(bar) {
    var baz = bar;
}
```

## Options

This rule takes one option, an object, with a boolean property `"props"` and an array `"ignorePropertyModificationsFor"`. `"props"` is `false` by default. If `"props"` is set to `true`, this rule warns against the modification of parameter properties unless they're included in `"ignorePropertyModificationsFor"`, which is an empty array by default.

该规则有一个选项，是个对象，其中有一个 `"props"` 的布尔属性和一个数组属性`"ignorePropertyModificationsFor"`。`"props"` 默认为 `false`。如果 `"props"` 设置为`true`，对参数的任何属性的修改，该规则都将发出警告， 除非在 `"ignorePropertyModificationsFor"`（默认为空数组） 有该参数。

### props

Examples of **correct** code for the default `{ "props": false }` option:

默认选项 `{ "props": false }`的 **正确** 代码示例：

```js
/*eslint no-param-reassign: ["error", { "props": false }]*/

function foo(bar) {
    bar.prop = "value";
}

function foo(bar) {
    delete bar.aaa;
}

function foo(bar) {
    bar.aaa++;
}
```

Examples of **incorrect** code for the `{ "props": true }` option:

选项 `{ "props": true }` 的 **错误** 代码示例：

```js
/*eslint no-param-reassign: ["error", { "props": true }]*/

function foo(bar) {
    bar.prop = "value";
}

function foo(bar) {
    delete bar.aaa;
}

function foo(bar) {
    bar.aaa++;
}
```

Examples of **correct** code for the `{ "props": true }` option with `"ignorePropertyModificationsFor"` set:

选项 `{ "props": true }` 并设置了 `"ignorePropertyModificationsFor"` 的 **正确** 代码示例：

```js
/*eslint no-param-reassign: ["error", { "props": true, "ignorePropertyModificationsFor": ["bar"] }]*/

function foo(bar) {
    bar.prop = "value";
}

function foo(bar) {
    delete bar.aaa;
}

function foo(bar) {
    bar.aaa++;
}
```


## When Not To Use It

If you want to allow assignment to function parameters, then you can safely disable this rule.

如果你想允许对函数参数重新赋值，你可以禁用此规则。

## Further Reading

* [JavaScript: Don’t Reassign Your Function Arguments](https://spin.atomicobject.com/2011/04/10/javascript-don-t-reassign-your-function-arguments/)

## Version

This rule was introduced in ESLint 0.18.0.

该规则在 ESLint 0.18.0 中被引入。

## Resources

* [Rule source](https://github.com/eslint/eslint/tree/master/lib/rules/no-param-reassign.js)
* [Documentation source](https://github.com/eslint/eslint/tree/master/docs/rules/no-param-reassign.md)
