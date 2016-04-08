---
title: Rule no-param-reassign
layout: doc
translator: fengnana
proofreader: yanggao40
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# Disallow Reassignment of Function Parameters (no-param-reassign)

# 禁止重新分配函数参数值 (no-param-reassign)

Assignment to variables declared as function parameters can be misleading and lead to confusing behavior, as modifying function parameters will also mutate the `arguments` object. Often, assignment to function parameters is unintended and indicative of a mistake or programmer error.

赋值给做为函数参数的变量可能会误导或者导致混乱，修改函数参数也会改变`arguments`对象。通常，赋值给函数参数是无意识的，表明一个错误或者程序员的错误。

This rule can be also configured to fail when function parameters are modified. Side effects on parameters can cause counter-intuitive execution flow and make errors difficult to track down.

## Rule Details

This rule aims to prevent unintended behavior caused by modification or reassignment of function parameters.

Examples of **incorrect** code for this rule:

**错误**代码示例：

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

**正确**代码示例：

```js
/*eslint no-param-reassign: "error"*/

function foo(bar) {
    var baz = bar;
}
```

## Options

This rule takes one option, an object, with a property `"props"`. It is `false` by default. If it is `true` is set, this rule warns modifying of properties of parameters.

该规则有一个选项，是个对象，其中有一个`"props"`的属性。默认为`false`。如果设置为`true`，对参数的任何属性的修改，该规则都将发出警告。

### props

Examples of **correct** code for the default `{ "props": false }` option:

默认选项`{ "props": false }`的 **正确**代码示例：

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

`{ "props": true }`选项的 **错误**代码示例：

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

## When Not To Use It

If you want to allow assignment to function parameters, then you can safely disable this rule.

如果你想允许对函数参数重新赋值，你可以安全地禁用此规则。

## Further Reading

* [JavaScript: Don’t Reassign Your Function Arguments](http://spin.atomicobject.com/2011/04/10/javascript-don-t-reassign-your-function-arguments/)

## Version

This rule was introduced in ESLint 0.18.0.

此规则在 ESLint 0.18.0 中被引入。

## Resources

* [Rule source](https://github.com/eslint/eslint/tree/master/lib/rules/no-param-reassign.js)
* [Documentation source](https://github.com/eslint/eslint/tree/master/docs/rules/no-param-reassign.md)
