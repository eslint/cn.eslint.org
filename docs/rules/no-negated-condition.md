---
title: Rule no-negated-condition
layout: doc
translator: molee1905
proofreader: molee1905
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# Disallow use of negated expressions in conditions (no-negated-condition)

# 禁止在条件语句中使用否定的表达式 (no-negated-condition)

Checks against the use of a negated expression in an if condition when the else branch is not empty or in a ternary operator. Negated conditions are more difficult to understand. Code can be made more readable by inverting the condition instead.

检查在 else 分支不为空的 if 条件语句或三元操作符中否定表达式的使用。否定的条件语句让人更加难以理解。如果将条件反过来，代码会更具可读性。

For example:

例如：

```js
if (!a) {
    doSomething();
}
else {
    doSomethingElse();
}
```

should instead be written as:

应该被写为：

```js
if (a) {
    doSomethingElse();
}
else {
    doSomething();
}
```

## Rule Details

The rule is aimed at preventing the use of a negated expression in a condition.

该规则旨在防止在条件语句中使用否定表达式。

The following patterns are considered warnings:

以下模式被认为是有问题的：

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


!a ? b : c

```

The following patterns are not warnings:

以下模式被认为是没有问题的：

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
