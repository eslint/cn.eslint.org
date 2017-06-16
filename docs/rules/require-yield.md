---
title: require-yield - Rules
layout: doc
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# Disallow generator functions that do not have `yield` (require-yield)

# 禁用函数内没有`yield`的 generator 函数

(recommended) The `"extends": "eslint:recommended"` property in a configuration file enables this rule.

(recommended) 配置文件中的 `"extends": "eslint:recommended"` 属性启用了此规则。

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

## When Not To Use It

If you don't want to notify generator functions that have no `yield` expression, then it's safe to disable this rule.

如果伱不想被通知 generator 函数没有 `yield` 表达式，关闭此规则即可。

## Related Rules

* [require-await](require-await)

## Version

This rule was introduced in ESLint 1.0.0-rc-1.

该规则在 ESLint 1.0.0-rc-1 中被引入。

## Resources

* [Rule source](https://github.com/eslint/eslint/tree/master/lib/rules/require-yield.js)
* [Documentation source](https://github.com/eslint/eslint/tree/master/docs/rules/require-yield.md)
