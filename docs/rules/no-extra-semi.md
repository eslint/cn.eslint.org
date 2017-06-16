---
title: no-extra-semi - Rules
layout: doc
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# disallow unnecessary semicolons (no-extra-semi)

# 禁用不必要的分号 (no-extra-semi)

(recommended) The `"extends": "eslint:recommended"` property in a configuration file enables this rule.

(recommended) 配置文件中的 `"extends": "eslint:recommended"` 属性启用了此规则。

(fixable) The `--fix` option on the [command line](../user-guide/command-line-interface#fix) can automatically fix some of the problems reported by this rule.

(fixable) [命令行](../user-guide/command-line-interface#fix)中的 `--fix` 选项可以自动修复一些该规则报告的问题。

Typing mistakes and misunderstandings about where semicolons are required can lead to semicolons that are unnecessary. While not technically an error, extra semicolons can cause confusion when reading code.

书写错误和对哪里需要使用分号的误解，会导致出现不必要的分号。虽然在技术上不是个错误，但阅读代码时会引起困惑。

## Rule Details

This rule disallows unnecessary semicolons.

该规则禁用不必要的分号。

Examples of **incorrect** code for this rule:

**错误** 代码示例：

```js
/*eslint no-extra-semi: "error"*/

var x = 5;;

function foo() {
    // code
};

```

Examples of **correct** code for this rule:

**正确** 代码示例：

```js
/*eslint no-extra-semi: "error"*/

var x = 5;

var foo = function() {
    // code
};

```

## When Not To Use It

If you intentionally use extra semicolons then you can disable this rule.

如果你有意使用额外的分号，那么你可以禁用此规则。

## Related Rules

* [semi](semi)
* [semi-spacing](semi-spacing)

## Version

This rule was introduced in ESLint 0.0.9.

该规则在 ESLint 0.0.9 中被引入。

## Resources

* [Rule source](https://github.com/eslint/eslint/tree/master/lib/rules/no-extra-semi.js)
* [Documentation source](https://github.com/eslint/eslint/tree/master/docs/rules/no-extra-semi.md)
