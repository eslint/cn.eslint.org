---
title: Rule space-return-throw-case
layout: doc
translator: molee1905
proofreader: maomaoking
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# Require spaces following `return`, `throw`, and `case` (space-return-throw-case)

# 要求`return`，`throw`和`case`后紧跟空格 (space-return-throw-case)

**Replacement notice**: This rule was removed in ESLint v2.0 and replaced by [keyword-spacing](keyword-spacing) rule.

**替代通知：**该规则在 ESLint v2.0 中被移除，被[keyword-spacing](keyword-spacing) 替代。

(fixable) The --fix option on the [command line](../user-guide/command-line-interface#fix) automatically fixed problems reported by this rule.

(fixable)[command line](../user-guide/command-line-interface#fix)中的`--fix`选项可以自动修复该规则报告的问题。

Require spaces following `return`, `throw`, and `case`.

要求`return`，`throw`和`case`后紧跟空格。

## Rule Details

The following patterns are considered problems:

以下模式被认为是有问题的：

```js
/*eslint space-return-throw-case: "error"*/

throw{a:0}

function f(){ return-a; }

switch(a){ case'a': break; }
```

The following patterns are not considered problems:

以下模式被认为是没有问题的：

```js
/*eslint space-return-throw-case: "error"*/

throw {a: 0};

function f(){ return -a; }

switch(a){ case 'a': break; }
```

## Version

This rule was introduced in ESLint 0.1.4 and removed in 2.0.0-beta.3.

该规则在 ESLint 0.1.4 中被引入，在 2.0.0-beta.3 被移除。

## Resources

* [Documentation source](https://github.com/eslint/eslint/tree/master/docs/rules/space-return-throw-case.md)
