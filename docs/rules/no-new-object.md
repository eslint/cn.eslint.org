---
title: Rule no-new-object
layout: doc
translator: molee1905
proofreader: molee1905
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# Disallow the use of the Object constructor (no-new-object)

# 禁止使用 Object 的构造函数 (no-new-object)

The `Object` constructor is used to create new generic objects in JavaScript, such as:

在 Javascript 中`Object`的构造函数用来创建新的通用对象，例如：

```js
var myObject = new Object();
```

However, this is no different from using the more concise object literal syntax:

然而，这与使用更为简洁的字面量没有什么区别：

```js
var myObject = {};
```

For this reason, many prefer to always use the object literal syntax and never use the `Object` constructor.

为此，很多人更青睐使用对象字面量而非`Object`的构造函数。

While there are no performance differences between the two approaches, the byte savings and conciseness of the object literal form is what has made it the de facto way of creating new objects.

虽然这两种方式没有性能上的差别，当对象字面量节省字节、简洁的特点，让它成为事实上的创建新对象的方式。

## Rule Details

This rule aims to eliminate use of the `Object` constructor. As such, it warns whenever `new Object` is found in code.

该规则旨在消除`Object`构造函数的使用。因此，当在代码中遇到`new Object`，该规则将发出警告。

The following patterns are considered problems:

以下模式被认为是有问题的：

```js
/*eslint no-new-object: 2*/

var myObject = new Object();

var myObject = new Object;
```

The following patterns are not considered problems:

以下模式被认为是没有问题的：

```js
/*eslint no-new-object: 2*/

var myObject = new CustomObject();

var myObject = {};
```

## When Not To Use It

If you wish to allow the use of the `Object` constructor, you can safely turn this rule off.

如果你允许`Object`构造函数的使用，你可以关闭此规则。

## Related Rules

* [no-array-constructor](no-array-constructor)
* [no-new-wrappers](no-new-wrappers)

## Version

This rule was introduced in ESLint 0.0.9.

该规则在 ESLint 0.0.9 中被引入。

## Resources

* [Rule source](https://github.com/eslint/eslint/tree/master/lib/rules/no-new-object.js)
* [Documentation source](https://github.com/eslint/eslint/tree/master/docs/rules/no-new-object.md)
