---
title: no-useless-catch - Rules
layout: doc
edit_link: https://github.com/eslint/eslint/edit/master/docs/rules/no-useless-catch.md
rule_type: suggestion
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# Disallow unnecessary catch clauses (no-useless-catch)

# 禁止不必要的 `catch` 子句 (no-useless-catch)

(recommended) The `"extends": "eslint:recommended"` property in a configuration file enables this rule.

(recommended) 配置文件中的 `"extends": "eslint:recommended"` 属性启用了此规则。

A `catch` clause that only rethrows the original error is redundant, and has no effect on the runtime behavior of the program. These redundant clauses can be a source of confusion and code bloat, so it's better to disallow these unnecessary `catch` clauses.

只重新抛出原始错误的 `catch` 子句是冗余的，对程序的运行时行为没有影响。这些冗余子句可能会导致混乱和代码膨胀，所以最好不要使用这些不必要的 `catch` 子句。

## Rule Details

This rule reports `catch` clauses that only `throw` the caught error.

此规则报告只 `throw` 已捕获过的错误的 `catch` 子句。

Examples of **incorrect** code for this rule:

**错误** 代码示例：

```js
/*eslint no-useless-catch: "error"*/

try {
  doSomethingThatMightThrow();
} catch (e) {
  throw e;
}

try {
  doSomethingThatMightThrow();
} catch (e) {
  throw e;
} finally {
  cleanUp();
}
```

Examples of **correct** code for this rule:

**正确** 代码示例：

```js
/*eslint no-useless-catch: "error"*/

try {
  doSomethingThatMightThrow();
} catch (e) {
  doSomethingBeforeRethrow();
  throw e;
}

try {
  doSomethingThatMightThrow();
} catch (e) {
  handleError(e);
}
```

## When Not To Use It

If you don't want to be notified about unnecessary catch clauses, you can safely disable this rule.

如果你不想被通知有关不必要的 catch 子句，你可以安全地禁用此规则。

## Version

This rule was introduced in ESLint 5.11.0.

该规则在 ESLint 5.11.0 中被引入。

## Resources

* [Rule source](https://github.com/eslint/eslint/tree/master/lib/rules/no-useless-catch.js)
* [Documentation source](https://github.com/eslint/eslint/tree/master/docs/rules/no-useless-catch.md)
