---
title: Rule no-prototype-builtins
layout: doc
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# Disallow use of Object.prototypes builtins directly (no-prototype-builtins)

# 禁止直接使用 Object.prototypes 的内置属性 (no-prototype-builtins)

In ECMAScript 5.1, `Object.create` was added, which enables the creation of objects with a specified `[[Prototype]]`. `Object.create(null)` is a common pattern used to create objects that will be used as a Map. This can lead to errors when it is assumed that objects will have properties from `Object.prototype`. This rule prevents calling `Object.prototype` methods directly from an object.

ECMAScript 5.1 新增了 `Object.create`，可以通过它创建带有指定的 `[[Prototype]]` 的对象。`Object.create(null)` 是的一种常见模式，用来创建键值对对象。当创建的对象有从 `Object.prototype` 继承来的属性时，可能会导致错误出现。该规则防止在一个对象中直接调用 `Object.prototype` 的方法。

## Rule Details

This rule disallows calling some `Object.prototype` methods directly on object instances.

该规则禁止直接在对象实例上调用 `Object.prototype` 的一些方法。

Examples of **incorrect** code for this rule:

**错误** 代码示例：

```js
/*eslint no-prototype-builtins: "error"*/

var hasBarProperty = foo.hasOwnProperty("bar");

var isPrototypeOfBar = foo.isPrototypeOf(bar);

var barIsEnumerable = foo.propertyIsEnumerable("bar");
```

Examples of **correct** code for this rule:

**正确** 代码示例：

```js
/*eslint no-prototype-builtins: "error"*/

var hasBarProperty = {}.hasOwnProperty.call(foo, "bar");

var isPrototypeOfBar = {}.isPrototypeOf.call(foo, bar);

var barIsEnumerable = {}.propertyIsEnumerable.call(foo, "bar");
```

## When Not To Use It

You may want to turn this rule off if you will never use an object that shadows an `Object.prototype` method or which does not inherit from `Object.prototype`.

如果你从不使用覆盖了 `Object.prototype` 方法的对象或不是从 `Object.prototype` 继承来的方法，你可能想关闭此规则。

## Version

This rule was introduced in ESLint 2.11.0.

该规则在 ESLint 2.11.0 中被引入。

## Resources

* [Rule source](https://github.com/eslint/eslint/tree/master/lib/rules/no-prototype-builtins.js)
* [Documentation source](https://github.com/eslint/eslint/tree/master/docs/rules/no-prototype-builtins.md)
