---
title: for-direction - Rules
layout: doc
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# Enforce "for" loop update clause moving the counter in the right direction. (for-direction)

# 强制 "for" 循环中更新子句的计数器朝着正确的方向移动 (for-direction)

## Rule Details

A `for` loop with a stop condition that can never be reached, such as one with a counter that moves in the wrong direction, will run infinitely. While there are occasions when an infinite loop is intended, the convention is to construct such loops as `while` loops. More typically, an infinite for loop is a bug.

如果一个 `for` 循环的停止条件永远无法到达，比如，计数器在错误的方向上移动，将陷入无限循环。当存在这样的无限循环时，惯例是改用 `while` 循环。更典型的是，无限循环是个 bug。

Examples of **incorrect** code for this rule:

**错误** 代码示例：

```js
/*eslint for-direction: "error"*/
for (var i = 0; i < 10; i--) {
}

for (var i = 10; i >= 0; i++) {
}
```

Examples of **correct** code for this rule:

**正确** 代码示例：

```js
/*eslint for-direction: "error"*/
for (var i = 0; i < 10; i++) {
}
```

## Version

This rule was introduced in ESLint 4.0.0-beta.0.

该规则在 ESLint 4.0.0-beta.0 中被引入。

## Resources

* [Rule source](https://github.com/eslint/eslint/tree/master/lib/rules/for-direction.js)
* [Documentation source](https://github.com/eslint/eslint/tree/master/docs/rules/for-direction.md)
