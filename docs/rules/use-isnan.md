---
title: Rule use-isnan
layout: doc
translator: molee1905
proofreader: molee1905
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# Require isNaN() (use-isnan)

# 要求使用isNaN() (use-isnan)

In JavaScript, `NaN` is a special value of the `Number` type. It's used to represent any of the "not-a-number" values represented by the double-precision 64-bit format as specified by the IEEE Standard for Binary Floating-Point Arithmetic. `NaN` has the unique property of not being equal to anything, including itself. That is to say, that the condition `NaN !== NaN` evaluates to true.

在 Javascript 中，`NaN`是`Number`类型的一个特殊的值。它是用来表示任何“不是一个数字”的值。`NaN`有一个唯一的特性就是不等于任何东西，包括它本身。这就是说，`NaN !== NaN` 等于 true。

## Rule Details

This rule is aimed at eliminating potential errors as the result of comparing against the special value `NaN`.

该规则旨在消除与特殊值`NaN`进行比较造成的潜在的错误。

Examples of **incorrect** code for this rule:

**错误**代码示例：

```js
/*eslint use-isnan: 2*/

if (foo == NaN) {
    // ...
}

if (foo != NaN) {
    // ...
}
```

Examples of **correct** code for this rule:

**正确**代码示例：

```js
/*eslint use-isnan: 2*/

if (isNaN(foo)) {
    // ...
}

if (isNaN(NaN)) {
    // ...
}
```

## Further Reading

* [Use the isNaN function to compare with NaN](http://jslinterrors.com/use-the-isnan-function-to-compare-with-nan/)

## Version

This rule was introduced in ESLint 0.0.6.

该规则在 ESLint 0.0.6 中被引入。

## Resources

* [Rule source](https://github.com/eslint/eslint/tree/master/lib/rules/use-isnan.js)
* [Documentation source](https://github.com/eslint/eslint/tree/master/docs/rules/use-isnan.md)
