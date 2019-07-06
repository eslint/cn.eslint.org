---
title: no-proto - Rules
layout: doc
edit_link: https://github.com/eslint/eslint/edit/master/docs/rules/no-proto.md
rule_type: suggestion
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# Disallow Use of `__proto__` (no-proto)

# 禁用`__proto__`（no-proto）

`__proto__` property has been deprecated as of ECMAScript 3.1 and shouldn't be used in the code. Use `Object.getPrototypeOf` and `Object.setPrototypeOf` instead.

`__proto__` 属性在 ECMAScript 3.1 中已经被弃用，并且不应该在代码中使用。使用 `Object.getPrototypeOf` 和 `Object.setPrototypeOf` 代替。

## Rule Details

When an object is created with the `new` operator, `__proto__` is set to the original "prototype" property of the object's constructor function. `Object.getPrototypeOf` is the preferred method of getting the object's prototype. To change an object's prototype, use `Object.setPrototypeOf`.

当使用 `new` 操作符创建对象时，将 `__proto__` 设置为对象构造函数的原始 “prototype” 属性。`Object.getPrototypeOf` 是获取对象原型的首选方法。要更改对象的原型，请使用 `Object.setPrototypeOf`。

Examples of **incorrect** code for this rule:

**错误** 代码示例：

```js
/*eslint no-proto: "error"*/

var a = obj.__proto__;

var a = obj["__proto__"];

obj.__proto__ = b;

obj["__proto__"] = b;
```

Examples of **correct** code for this rule:

**正确** 代码示例：

```js
/*eslint no-proto: "error"*/

var a = Object.getPrototypeOf(obj);

Object.setPrototypeOf(obj, b);

var c = { __proto__: a };
```

## When Not To Use It

If you need to support legacy browsers, you might want to turn this rule off, since support for `getPrototypeOf` is not yet universal.

You might want to turn this rule off if you need to support legacy browsers which implement the
`__proto__` property but not `Object.getPrototypeOf` or `Object.setPrototypeOf`.

如果需要支持实现 `__proto__` 而不是 `Object.getPrototypeOf` 或 `Object.setPrototypeOf` 的遗留浏览器，则可能需要关闭此规则。

## Further Reading

* [Object.getPrototypeOf](http://ejohn.org/blog/objectgetprototypeof/)

## Version

This rule was introduced in ESLint 0.0.9.

该规则在 ESLint 0.0.9 中被引入。

## Resources

* [Rule source](https://github.com/eslint/eslint/tree/master/lib/rules/no-proto.js)
* [Documentation source](https://github.com/eslint/eslint/tree/master/docs/rules/no-proto.md)
