---
title: Rule space-return-throw-case
layout: doc
translator: molee1905
proofreader: maomaoking
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# Require spaces following `return`, `throw`, and `case` (space-return-throw-case)

# 要求`return`, `throw`, 和 `case`后紧跟空格 (space-return-throw-case)

**Replacement notice**: This rule was removed in ESLint v2.0 and replaced by [keyword-spacing](keyword-spacing) rule.

**替代通知**: 该规则在 ESLint v2.0 中被移除，被[keyword-spacing](keyword-spacing) 替代。

Require spaces following `return`, `throw`, and `case`.

要求`return`, `throw`, 和 `case`后紧跟空格。

**Fixable:** This rule is automatically fixable using the `--fix` flag on the command line.

**Fixable:** 该规则可以通过`--fix`命令行进行自动修复。

## Rule Details

The following patterns are considered problems:

以下模式被认为是有问题的：

```js
/*eslint space-return-throw-case: 2*/

throw{a:0}

function f(){ return-a; }

switch(a){ case'a': break; }
```

The following patterns are not considered problems:

以下模式被认为是没有问题的：

```js
/*eslint space-return-throw-case: 2*/

throw {a: 0};

function f(){ return -a; }

switch(a){ case 'a': break; }
```

## Version

This rule was introduced in ESLint 0.1.4 and removed in 2.0.0-beta.3.

该规则在ESLint 0.1.4 中被引入，在 2.0.0-beta.3 被移除。

## Resources

* [Documentation source](https://github.com/eslint/eslint/tree/master/docs/rules/space-return-throw-case.md)
