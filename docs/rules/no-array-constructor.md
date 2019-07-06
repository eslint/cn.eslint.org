---
title: no-array-constructor - Rules
layout: doc
edit_link: https://github.com/eslint/eslint/edit/master/docs/rules/no-array-constructor.md
rule_type: suggestion
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# disallow `Array` constructors (no-array-constructor)

# 禁止使用 `Array` 构造函数

Use of the `Array` constructor to construct a new array is generally
discouraged in favor of array literal notation because of the single-argument
pitfall and because the `Array` global may be redefined. The exception is when
the Array constructor is used to intentionally create sparse arrays of a
specified size by giving the constructor a single numeric argument.

由于单参数的陷阱，和全局范围的 `Array` 可能被重定义，通常不允许使用 `Array`的构造函数来创建数组。唯一的例外是通过给构造函数传入指定的一个数值来创建稀疏数组。

## Rule Details

This rule disallows `Array` constructors.

该规则禁止使用 `Array` 构造函数。

Examples of **incorrect** code for this rule:

**错误** 代码示例：

```js
/*eslint no-array-constructor: "error"*/

Array(0, 1, 2)
```

```js
/*eslint no-array-constructor: "error"*/

new Array(0, 1, 2)
```

Examples of **correct** code for this rule:

**正确** 代码示例：

```js
/*eslint no-array-constructor: "error"*/

Array(500)
```

```js
/*eslint no-array-constructor: "error"*/

new Array(someOtherArray.length)
```

## When Not To Use It

This rule enforces a nearly universal stylistic concern. That being said, this
rule may be disabled if the constructor style is preferred.

该规则强制一个几乎很普遍的风格问题。也就是说，如果构造函数的风格是首选的，可以禁用此规则。

## Related Rules

* [no-new-object](no-new-object)
* [no-new-wrappers](no-new-wrappers)

## Version

This rule was introduced in ESLint 0.4.0.

该规则在 ESLint 0.4.0 中被引入。

## Resources

* [Rule source](https://github.com/eslint/eslint/tree/master/lib/rules/no-array-constructor.js)
* [Documentation source](https://github.com/eslint/eslint/tree/master/docs/rules/no-array-constructor.md)
