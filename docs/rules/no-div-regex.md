---
title: no-div-regex - Rules
layout: doc
edit_link: https://github.com/eslint/eslint/edit/master/docs/rules/no-div-regex.md
rule_type: suggestion
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# Disallow Regular Expressions That Look Like Division (no-div-regex)

# 禁止使用看起来像除法的正则表达式 (no-div-regex)

(fixable) The `--fix` option on the [command line](../user-guide/command-line-interface#fixing-problems) can automatically fix some of the problems reported by this rule.

(fixable) [命令行](../user-guide/command-line-interface#fixing-problems)中的 `--fix` 选项可以自动修复一些该规则报告的问题。

Require regex literals to escape division operators.

要求正则表达式字面量避开除法操作符。

```js
function bar() { return /=foo/; }
```

## Rule Details

This is used to disambiguate the division operator to not confuse users.

该规则用来消除除法操作符的歧义。

Examples of **incorrect** code for this rule:

**错误** 代码示例：

```js
/*eslint no-div-regex: "error"*/

function bar() { return /=foo/; }
```

Examples of **correct** code for this rule:

**正确** 代码示例：

```js
/*eslint no-div-regex: "error"*/

function bar() { return /[=]foo/; }
```

## Related Rules

* [no-control-regex](no-control-regex)
* [no-regex-spaces](no-regex-spaces)

## Version

This rule was introduced in ESLint 0.1.0.

该规则在 ESLint 0.1.0 中被引入。

## Resources

* [Rule source](https://github.com/eslint/eslint/tree/master/lib/rules/no-div-regex.js)
* [Documentation source](https://github.com/eslint/eslint/tree/master/docs/rules/no-div-regex.md)
