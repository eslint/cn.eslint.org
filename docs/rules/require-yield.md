---
title: require-yield - Rules
layout: doc
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# Disallow generator functions that do not have `yield` (require-yield)

# 禁用函数内没有`yield`的 generator 函数

## Rule Details

This rule generates warnings for generator functions that do not have the `yield` keyword.

如果 generator 函数内部没有`yield`关键字，该规则将发出警告。

## Examples

Examples of **incorrect** code for this rule:

**错误** 代码示例：

```js
/*eslint require-yield: "error"*/
/*eslint-env es6*/

function* foo() {
  return 10;
}
```

Examples of **correct** code for this rule:

**正确** 代码示例：

```js
/*eslint require-yield: "error"*/
/*eslint-env es6*/

function* foo() {
  yield 5;
  return 10;
}

function foo() {
  return 10;
}

// This rule does not warn on empty generator functions.
function* foo() { }
```

## Version

This rule was introduced in ESLint 1.0.0-rc-1.

该规则在 ESLint 1.0.0-rc-1 中被引入。

## Resources

* [Rule source](https://github.com/eslint/eslint/tree/master/lib/rules/require-yield.js)
* [Documentation source](https://github.com/eslint/eslint/tree/master/docs/rules/require-yield.md)
