---
title: Rule no-iterator
layout: doc
translator: fengnana
proofreader: molee1905
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# Disallow Iterator (no-iterator)

# 禁用迭代器 (no-iterator)

The `__iterator__` property was a SpiderMonkey extension to JavaScript that could be used to create custom iterators that are compatible with JavaScript's `for in` and `for each` constructs. However, this property is now obsolete, so it should not be used. Here's an example of how this used to work:

`__iterator__`属性曾是 SpiderMonkey 对 JavaScript 的扩展，被用来创建自定义迭代器，兼容JavaScript的`for in`和`for each`。然而，这个属性现在废弃了，所以不应再使用它。这里有个例子，展示它是如何使用的：

```js
Foo.prototype.__iterator__ = function() {
    return new FooIterator(this);
}
```

You should use ECMAScript 6 iterators and generators instead.

你应该使用 ECMAScript 6 迭代器和生成器。

## Rule Details

This rule is aimed at preventing errors that may arise from using the `__iterator__` property, which is not implemented in several browsers. As such, it will warn whenever it encounters the `__iterator__` property.

此规则目的在于防止因使用`__iterator__`属性而出现的错误，并不是所有浏览器都实现了这个属性。因此，当遇到`__iterator__`属性时，该规则将会发出警告。

The following patterns are considered problems:

以下模式被认为是有问题的：

```js
/*eslint no-iterator: 2*/

Foo.prototype.__iterator__ = function() {
    return new FooIterator(this);
};

foo.__iterator__ = function () {};

foo["__iterator__"] = function () {};

```

The following patterns are not considered problems:

以下模式被认为是没有问题的：

```js
/*eslint no-iterator: 2*/

var __iterator__ = foo; // Not using the `__iterator__` property.
```

## Further Reading

* [MDN - Iterators and Generators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Iterators_and_Generators)
* [ECMAScript 6 compatibility table - Iterators](http://kangax.github.io/es5-compat-table/es6/#Iterators)
* [Deprecated and Obsolete Features](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features#Object_methods)

## Version

This rule was introduced in ESLint 0.0.9.

此规则在 ESLint 0.0.9 中被引入。

## Resources

* [Rule source](https://github.com/eslint/eslint/tree/master/lib/rules/no-iterator.js)
* [Documentation source](https://github.com/eslint/eslint/tree/master/docs/rules/no-iterator.md)
