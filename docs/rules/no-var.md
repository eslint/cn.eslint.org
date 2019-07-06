---
title: no-var - Rules
layout: doc
edit_link: https://github.com/eslint/eslint/edit/master/docs/rules/no-var.md
rule_type: suggestion
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# require `let` or `const` instead of `var` (no-var)

# 要求使用 `let` 或 `const` 而不是 `var`

(fixable) The `--fix` option on the [command line](../user-guide/command-line-interface#fixing-problems) can automatically fix some of the problems reported by this rule.

(fixable) [命令行](../user-guide/command-line-interface#fixing-problems)中的 `--fix` 选项可以自动修复一些该规则报告的问题。

ECMAScript 6 allows programmers to create variables with block scope instead of function scope using the `let`
and `const` keywords. Block scope is common in many other programming languages and helps programmers avoid mistakes
such as:

ECMAScript 6 允许程序员使用 `let` 和 `const` 关键字在块级作用域而非函数作用域下声明变量。块级作用域在很多其他编程语言中很普遍，能帮助程序员避免错误，例如：

```js
var count = people.length;
var enoughFood = count > sandwiches.length;

if (enoughFood) {
    var count = sandwiches.length; // accidentally overriding the count variable
    console.log("We have " + count + " sandwiches for everyone. Plenty for all!");
}

// our count variable is no longer accurate
console.log("We have " + count + " people and " + sandwiches.length + " sandwiches!");
```

## Rule Details

This rule is aimed at discouraging the use of `var` and encouraging the use of `const` or `let` instead.

该规则旨在阻止 `var` 的使用，推荐使用 `const` 或 `let`。

## Examples

Examples of **incorrect** code for this rule:

**错误** 代码示例：

```js
/*eslint no-var: "error"*/

var x = "y";
var CONFIG = {};
```

Examples of **correct** code for this rule:

**正确** 代码示例：

```js
/*eslint no-var: "error"*/
/*eslint-env es6*/

let x = "y";
const CONFIG = {};
```

## When Not To Use It

In addition to non-ES6 environments, existing JavaScript projects that are beginning to introduce ES6 into their
codebase may not want to apply this rule if the cost of migrating from `var` to `let` is too costly.

除了非 ES6 环境外，那些现有 Javascript 项目开始在他们的代码库中引入 ES6 的，如果从 `var` 迁移到 `let` 代价高的话，可能并不适用于此规则。

## Version

This rule was introduced in ESLint 0.12.0.

该规则在 ESLint 0.12.0 中被引入。

## Resources

* [Rule source](https://github.com/eslint/eslint/tree/master/lib/rules/no-var.js)
* [Documentation source](https://github.com/eslint/eslint/tree/master/docs/rules/no-var.md)
