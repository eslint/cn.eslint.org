---
title: no-new-object - Rules
layout: doc
edit_link: https://github.com/eslint/eslint/edit/master/docs/rules/no-new-object.md
rule_type: suggestion
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# disallow `Object` constructors (no-new-object)

# 禁止使用  `Object` 构造函数 (no-new-object)

The `Object` constructor is used to create new generic objects in JavaScript, such as:

在 JavaScript 中，`Object`的构造函数用来创建新的通用对象，例如：

```js
var myObject = new Object();
```

However, this is no different from using the more concise object literal syntax:

然而，这与使用更为简洁的字面量没有什么区别：

```js
var myObject = {};
```

For this reason, many prefer to always use the object literal syntax and never use the `Object` constructor.

为此，很多人更青睐使用对象字面量而非 `Object` 的构造函数。

While there are no performance differences between the two approaches, the byte savings and conciseness of the object literal form is what has made it the de facto way of creating new objects.

虽然这两种方式没有性能上的差别，当对象字面量节省字节、简洁的特点，让它成为事实上的创建新对象的方式。

## Rule Details

This rule disallows `Object` constructors.

该规则禁止使用 `Object` 构造函数。。

Examples of **incorrect** code for this rule:

**错误** 代码示例：

```js
/*eslint no-new-object: "error"*/

var myObject = new Object();

var myObject = new Object;
```

Examples of **correct** code for this rule:

**正确** 代码示例：

```js
/*eslint no-new-object: "error"*/

var myObject = new CustomObject();

var myObject = {};
```

## When Not To Use It

If you wish to allow the use of the `Object` constructor, you can safely turn this rule off.

如果你允许 `Object` 构造函数的使用，你可以关闭此规则。

## Related Rules

* [no-array-constructor](no-array-constructor)
* [no-new-wrappers](no-new-wrappers)

## Version

This rule was introduced in ESLint 0.0.9.

该规则在 ESLint 0.0.9 中被引入。

## Resources

* [Rule source](https://github.com/eslint/eslint/tree/master/lib/rules/no-new-object.js)
* [Documentation source](https://github.com/eslint/eslint/tree/master/docs/rules/no-new-object.md)
