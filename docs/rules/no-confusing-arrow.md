---
title: no-confusing-arrow - Rules
layout: doc
edit_link: https://github.com/eslint/eslint/edit/master/docs/rules/no-confusing-arrow.md
rule_type: suggestion
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# Disallow arrow functions where they could be confused with comparisons (no-confusing-arrow)

# 禁止在可能与比较操作符相混淆的地方使用箭头函数 (no-confusing-arrow)

(fixable) The `--fix` option on the [command line](../user-guide/command-line-interface#fixing-problems) can automatically fix some of the problems reported by this rule.

(fixable) [命令行](../user-guide/command-line-interface#fixing-problems)中的 `--fix` 选项可以自动修复一些该规则报告的问题。

Arrow functions (`=>`) are similar in syntax to some comparison operators (`>`, `<`, `<=`, and `>=`). This rule warns against using the arrow function syntax in places where it could be confused with a comparison operator.

箭头函数 (`=>`) 在语法上与一些比较操作符(`>`，`<`，`<=` 和 `>=`)相似。当与比较操作符混淆的地方使用箭头函数语法，该规则会发出警告。

Here's an example where the usage of `=>` could be confusing:

下面的例子使用 `=>` 可能会让人感到困惑：

```js
// The intent is not clear
var x = a => 1 ? 2 : 3;
// Did the author mean this
var x = function (a) { return 1 ? 2 : 3 };
// Or this
var x = a <= 1 ? 2 : 3;
```

## Rule Details

Examples of **incorrect** code for this rule:

**错误** 代码示例：

```js
/*eslint no-confusing-arrow: "error"*/
/*eslint-env es6*/

var x = a => 1 ? 2 : 3;
var x = (a) => 1 ? 2 : 3;
var x = (a) => (1 ? 2 : 3);
```

Examples of **correct** code for this rule:

**正确** 代码示例：

```js
/*eslint no-confusing-arrow: "error"*/
/*eslint-env es6*/

var x = a => (1 ? 2 : 3);
var x = (a) => (1 ? 2 : 3);
var x = a => { return 1 ? 2 : 3; };
var x = (a) => { return 1 ? 2 : 3; };
```

## Options

This rule accepts a single options argument with the following defaults:

该规则只接收一个选项参数，使用下面的默认值：

```json
{
    "rules": {
        "no-confusing-arrow": ["error", {"allowParens": true}]
    }
}
```

`allowParens` is a boolean setting that can be `true`(default) or `false`:

`allowParens` 是一个布尔类型的设置，可以使 `true`（默认）或 `false`：

1. `true` relaxes the rule and accepts parenthesis as a valid "confusion-preventing" syntax.
1. `true` 使该规则不那么严格，将括号作为有效防止混淆的语法。
2. `false` warns even if the expression is wrapped in parenthesis
2. `false` 即使表达式括在括号中也发出警告

Examples of **incorrect** code for this rule with the `{"allowParens": false}` option:

选项 `{"allowParens": false}` 的 **错误** 代码示例：

```js
/*eslint no-confusing-arrow: ["error", {"allowParens": false}]*/
/*eslint-env es6*/
var x = a => (1 ? 2 : 3);
var x = (a) => (1 ? 2 : 3);
```

## Related Rules

* [no-constant-condition](no-constant-condition)
* [arrow-parens](arrow-parens)

## Version

This rule was introduced in ESLint 2.0.0-alpha-2.

该规则在 ESLint 2.0.0-alpha-2 中被引入。

## Resources

* [Rule source](https://github.com/eslint/eslint/tree/master/lib/rules/no-confusing-arrow.js)
* [Documentation source](https://github.com/eslint/eslint/tree/master/docs/rules/no-confusing-arrow.md)
