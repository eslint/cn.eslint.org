---
title: Rule no-undef-init
layout: doc
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# Disallow Initializing to undefined (no-undef-init)

# 不允许初始化变量值为 undefined (no-undef-init)

In JavaScript, a variable that is declared and not initialized to any value automatically gets the value of `undefined`. For example:

在 JavaScript 中，声明一个变量但未初始化，变量会自动获得 `undefined` 作为初始值。比如：

```js
var foo;

console.log(foo === undefined);     // true
```

It's therefore unnecessary to initialize a variable to `undefined`, such as:

因此，初始化变量值为 `undefined` 是多余的，如：

```js
var foo = undefined;
```

It's considered a best practice to avoid initializing variables to `undefined`.

最好的做法是避免初始化变量值为 `undefined`。

## Rule Details

This rule aims to eliminate variable declarations that initialize to `undefined`.
此规则旨在限制变量声明后被初始化为 `undefined`。

Examples of **incorrect** code for this rule:

**错误** 代码示例：

```js
/*eslint no-undef-init: "error"*/
/*eslint-env es6*/

var foo = undefined;
let bar = undefined;
```

Examples of **correct** code for this rule:

**正确** 代码示例：
```js
/*eslint no-undef-init: "error"*/
/*eslint-env es6*/

var foo;
let bar;
const baz = undefined;
```

## When Not To Use It

There is one situation where initializing to `undefined` behaves differently than omitting the initialization, and that's when a `var` declaration occurs inside of a loop. For example:

当在一个循环中用 `var` 声明一个变量的时候，这种情况下给变量赋值为 `undefined` 与省略初始化的结果不同。比如：

Example of **incorrect** code for this rule:

**错误** 代码示例：

```js
for (i = 0; i < 10; i++) {
    var x = undefined;
    console.log(x);
    x = i;
}
```

In this case, the `var x` is hoisted out of the loop, effectively creating:

在这种情况下，`var x` 被提升到循环外。

```js
var x;

for (i = 0; i < 10; i++) {
    x = undefined;
    console.log(x);
    x = i;
}
```

If you were to remove the initialization, then the behavior of the loop changes:

如果删除初始化语句，循环语句的行为会改变：

```js
for (i = 0; i < 10; i++) {
    var x;
    console.log(x);
    x = i;
}
```

This code is equivalent to:

此代码等价于下面代码：

```js
var x;

for (i = 0; i < 10; i++) {
    console.log(x);
    x = i;
}
```

This produces a different outcome than defining `var x = undefined` in the loop, as `x` is no longer reset to `undefined` each time through the loop.

于在循环语句中使用 `var x = undefined` 相比，这样产生了一个不同结果 ，因为每次循环后 `x` 不在赋值为 `undefined`。

If you're using such an initialization inside of a loop, then you should disable this rule.

如果你有在循环语句中初始化变量，你应该禁用此规则。

Example of **correct** code for this rule, because it is disabled on a specific line:

**正确** 代码示例，因为它在特定的行上被禁用。

```js
/*eslint no-undef-init: "error"*/

for (i = 0; i < 10; i++) {
    var x = undefined; // eslint-disable-line no-undef-init
    console.log(x);
    x = i;
}
```

## Related Rules

* [no-undefined](no-undefined)
* [no-void](no-void)

## Version

This rule was introduced in ESLint 0.0.6.

该规则在 ESLint 0.0.6 中被引入。

## Resources

* [Rule source](https://github.com/eslint/eslint/tree/master/lib/rules/no-undef-init.js)
* [Documentation source](https://github.com/eslint/eslint/tree/master/docs/rules/no-undef-init.md)
