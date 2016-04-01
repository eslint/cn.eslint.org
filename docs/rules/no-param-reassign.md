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

## Rule Details

This rule aims to prevent unintended behavior caused by overwriting function parameters.

此规则旨在防止无意识地重写函数参数。

## Options

This rule takes one option, an object, with a property `"props"`.

此规则带有一个选项，一个带有`"props"`属性的对象。

```json
{
    "no-param-reassign": [2, {"props": false}]
}
```

### `props`

It is `false` by default. If it is `true` is set, this rule warns modifying of properties of parameters.

默认为`false`。如果设置为`true`，此规则对修改参数行为给出警告

The following patterns are considered problems:

以下模式被认为是有问题的：

```js
/*eslint no-param-reassign: 2*/

function foo(bar) {
    bar = 13;
}

function foo(bar) {
    bar++;
}
```

When `{"props": true}`:

当`{"props": true}`时：

```js
/*eslint no-param-reassign: [2, { "props": true }]*/

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
 
The following patterns are not considered problems:

以下模式被认为是没有问题的：

```js
/*eslint no-param-reassign: 2*/

function foo(a) {
    var b = a;
}
```

When `{"props": false}`:

当`{"props": false}`时：

```js
/*eslint no-param-reassign: [2, { "props": false }]*/

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

此规则在ESLint 0.18.0中被引入。

## Resources

* [Rule source](https://github.com/eslint/eslint/tree/master/lib/rules/no-param-reassign.js)
* [Documentation source](https://github.com/eslint/eslint/tree/master/docs/rules/no-param-reassign.md)
