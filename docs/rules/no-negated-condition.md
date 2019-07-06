---
title: no-negated-condition - Rules
layout: doc
edit_link: https://github.com/eslint/eslint/edit/master/docs/rules/no-negated-condition.md
rule_type: suggestion
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# disallow negated conditions (no-negated-condition)

# 禁用否定表达式 (no-negated-condition)

Negated conditions are more difficult to understand. Code can be made more readable by inverting the condition instead.

否定表达式更难以理解。如果将条件反过来，代码会更具可读性。

## Rule Details

This rule disallows negated conditions in either of the following:

该规则禁止在以下情况使用否定表达式：

* `if` statements which have an `else` branch
* 含有  `else` 分支的 `if` 语句
* ternary expressions
* 三元表达式

Examples of **incorrect** code for this rule:

**错误** 代码示例：

```js
/*eslint no-negated-condition: "error"*/

if (!a) {
    doSomething();
} else {
    doSomethingElse();
}

if (a != b) {
    doSomething();
} else {
    doSomethingElse();
}

if (a !== b) {
    doSomething();
} else {
    doSomethingElse();
}

!a ? c : b
```

Examples of **correct** code for this rule:

**正确** 代码示例：

```js
/*eslint no-negated-condition: "error"*/

if (!a) {
    doSomething();
}

if (!a) {
    doSomething();
} else if (b) {
    doSomething();
}

if (a != b) {
    doSomething();
}

a ? b : c
```

## Version

This rule was introduced in ESLint 1.6.0.

该规则在 ESLint 1.6.0 中被引入。

## Resources

* [Rule source](https://github.com/eslint/eslint/tree/master/lib/rules/no-negated-condition.js)
* [Documentation source](https://github.com/eslint/eslint/tree/master/docs/rules/no-negated-condition.md)
