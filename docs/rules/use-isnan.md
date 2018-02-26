---
title: use-isnan - Rules
layout: doc
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# require calls to `isNaN()` when checking for `NaN` (use-isnan)

# 要求调用 `isNaN()`检查 `NaN` (use-isnan)

(recommended) The `"extends": "eslint:recommended"` property in a configuration file enables this rule.

(recommended) 配置文件中的 `"extends": "eslint:recommended"` 属性启用了此规则。

In JavaScript, `NaN` is a special value of the `Number` type. It's used to represent any of the "not-a-number" values represented by the double-precision 64-bit format as specified by the IEEE Standard for Binary Floating-Point Arithmetic.

在 JavaScript 中，`NaN` 是 `Number` 类型的一个特殊值。它被用来表示非数值，这里的数值是指在 IEEE 浮点数算术标准中定义的双精度64位格式的值。

Because `NaN` is unique in JavaScript by not being equal to anything, including itself, the results of comparisons to `NaN` are confusing:

因为在 JavaScript 中 `NaN` 独特之处在于它不等于任何值，包括它本身，与 `NaN` 进行比较的结果是令人困惑：

* `NaN === NaN` or `NaN == NaN` evaluate to false
* `NaN !== NaN` or `NaN != NaN` evaluate to true

Therefore, use `Number.isNaN()` or global `isNaN()` functions to test whether a value is `NaN`.

因此，使用 `Number.isNaN()` 或 全局的 `isNaN()` 函数来测试一个值是否是 `NaN`。

## Rule Details

This rule disallows comparisons to 'NaN'.

该规则禁止与 'NaN' 的比较。

Examples of **incorrect** code for this rule:

**错误** 代码示例：

```js
/*eslint use-isnan: "error"*/

if (foo == NaN) {
    // ...
}

if (foo != NaN) {
    // ...
}
```

Examples of **correct** code for this rule:

**正确** 代码示例：

```js
/*eslint use-isnan: "error"*/

if (isNaN(foo)) {
    // ...
}

if (!isNaN(foo)) {
    // ...
}
```

## Version

This rule was introduced in ESLint 0.0.6.

该规则在 ESLint 0.0.6 中被引入。

## Resources

* [Rule source](https://github.com/eslint/eslint/tree/master/lib/rules/use-isnan.js)
* [Documentation source](https://github.com/eslint/eslint/tree/master/docs/rules/use-isnan.md)
