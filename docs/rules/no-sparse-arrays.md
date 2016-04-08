---
title: Rule no-sparse-arrays
layout: doc
translator: molee1905
proofreader: xkf521
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# Disallow Sparse Arrays (no-sparse-arrays)

# 禁用稀疏数组

Sparse arrays contain empty slots, most frequently due to multiple commas being used in an array literal, such as:

稀疏数组包括很多空位置，经常是由于在数组字面量中使用多个逗号造成的，例如：

```js
var items = [,,];
```

While the `items` array in this example has a `length` of 2, there are actually no values in `items[0]` or `items[1]`. The fact that the array literal is valid with only commas inside, coupled with the `length` being set and actual item values not being set, make sparse arrays confusing for many developers. Consider the following:

在这个例子中，`item`数组的`length`为2，实际上，`items[0]` 或 `items[1]`并没有值。数组中只有逗号是有效的，再加上`length`被设置，和并没有实际的值被设置，这些情况让很多开发者对稀疏数组感到困惑。考虑下面的情况：

```js
var colors = [ "red",, "blue" ];
```

In this example, the `colors` array has a `length` of 3. But did the developer intend for there to be an empty spot in the middle of the array? Or is it a typo?

在这个例子中，`colors`数值的`length`是3。但这是开发者想让数组中间出现一个空点，还是一个书写错误？

The confusion around sparse arrays defined in this manner is enough that it's recommended to avoid using them unless you are certain that they are useful in your code.

稀疏数组的定义方式造成了很大的困惑，建议避免使用它们，除非你确定它们在你的代码中很有用。

## Rule Details

This rule aims to eliminate sparse arrays that are defined by extra commas.

该规则旨在消除使用额外的逗号定义的稀疏数组。

Examples of **incorrect** code for this rule:

**错误**代码示例：

```js
/*eslint no-sparse-arrays: "error"*/

var items = [,];
var colors = [ "red",, "blue" ];
```

Examples of **correct** code for this rule:

**正确**代码示例：

```js
/*eslint no-sparse-arrays: "error"*/

var items = [];
var items = new Array(23);

// trailing comma is okay
var colors = [ "red", "blue", ];
```

## When Not To Use It

If you want to use sparse arrays, then it is safe to disable this rule.

如果你想使用稀疏数组，可以关闭此规则。

## Further Reading

* [Inconsistent array literals](http://www.nczonline.net/blog/2007/09/09/inconsistent-array-literals/)

## Version

This rule was introduced in ESLint 0.4.0.

该规则在 ESLint 0.4.0 中被引入。

## Resources

* [Rule source](https://github.com/eslint/eslint/tree/master/lib/rules/no-sparse-arrays.js)
* [Documentation source](https://github.com/eslint/eslint/tree/master/docs/rules/no-sparse-arrays.md)
