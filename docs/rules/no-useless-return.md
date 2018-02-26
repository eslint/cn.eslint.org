---
title: no-useless-return - Rules
layout: doc
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# Disallow redundant return statements (no-useless-return)

# 禁止多余的 return 语句 (no-useless-return)

(fixable) The `--fix` option on the [command line](../user-guide/command-line-interface#fix) can automatically fix some of the problems reported by this rule.

(fixable) [命令行](../user-guide/command-line-interface#fix)中的 `--fix` 选项可以自动修复一些该规则报告的问题。

A `return;` statement with nothing after it is redundant, and has no effect on the runtime behavior of a function. This can be confusing, so it's better to disallow these redundant statements.

`return;` 语句是多余的，并且在函数执行过程中不会产生效果。这可能令人困惑，因此最好禁止使用这些多余的语句。

## Rule Details

This rule aims to report redundant `return` statements.

该规则旨在报告多余的 `return` 语句。

Examples of **incorrect** code for this rule:

**错误** 代码示例：

```js
/* eslint no-useless-return: "error" */

function foo() { return; }

function foo() {
  doSomething();
  return;
}

function foo() {
  if (condition) {
    bar();
    return;
  } else {
    baz();
  }
}

function foo() {
  switch (bar) {
    case 1:
      doSomething();
    default:
      doSomethingElse();
      return;
  }
}

```

Examples of **correct** code for this rule:

**正确** 代码示例：

```js
/* eslint no-useless-return: "error" */

function foo() { return 5; }

function foo() {
  return doSomething();
}

function foo() {
  if (condition) {
    bar();
    return;
  } else {
    baz();
  }
  qux();
}

function foo() {
  switch (bar) {
    case 1:
      doSomething();
      return;
    default:
      doSomethingElse();
  }
}

function foo() {
  for (const foo of bar) {
    return;
  }
}

```

## When Not To Use It

If you don't care about disallowing redundant return statements, you can turn off this rule.

如果你不关心禁用多余的 return 语句，那么你可以禁用此规则。

## Version

This rule was introduced in ESLint 3.9.0.

该规则在 ESLint 3.9.0 中被引入。

## Resources

* [Rule source](https://github.com/eslint/eslint/tree/master/lib/rules/no-useless-return.js)
* [Documentation source](https://github.com/eslint/eslint/tree/master/docs/rules/no-useless-return.md)
