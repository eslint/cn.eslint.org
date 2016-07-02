---
title: Rule no-proto
layout: doc
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# Disallow Use of `__proto__` (no-proto)

# 禁用`__proto__`（no-proto）

`__proto__` property has been deprecated as of ECMAScript 3.1 and shouldn't be used in the code.Use `getPrototypeOf` method instead.

`__proto__` 属性在 ECMAScript 3.1 中已经被弃用，并且不应该在代码中使用。使用 `getPrototypeOf` 方法替代 `__proto__`。

## Rule Details

When an object is created `__proto__` is set to the original prototype property of the object’s constructor function. `getPrototypeOf` is the preferred method of getting "the prototype".

当一个对象被创建，`__proto__` 被设置为对象构造方法的原始原型属性。`getPrototypeOf`是获取原型的首选方法。

Examples of **incorrect** code for this rule:

**错误** 代码示例：

```js
/*eslint no-proto: "error"*/

var a = obj.__proto__;

var a = obj["__proto__"];
```

Examples of **correct** code for this rule:

**正确** 代码示例：

```js
/*eslint no-proto: "error"*/

var a = Object.getPrototypeOf(obj);
```

## When Not To Use It

If you need to support legacy browsers, you might want to turn this rule off, since support for `getPrototypeOf` is not yet universal.

如果你需要支持老版本的浏览器，你可能会想要关闭此规则，因为 `getPrototypeOf` 还没有被广泛支持。

## Further Reading

* [Object.getPrototypeOf](http://ejohn.org/blog/objectgetprototypeof/)

## Version

This rule was introduced in ESLint 0.0.9.

该规则在 ESLint 0.0.9 中被引入。

## Resources

* [Rule source](https://github.com/eslint/eslint/tree/master/lib/rules/no-proto.js)
* [Documentation source](https://github.com/eslint/eslint/tree/master/docs/rules/no-proto.md)
