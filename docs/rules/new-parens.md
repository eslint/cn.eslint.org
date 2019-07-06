---
title: new-parens - Rules
layout: doc
edit_link: https://github.com/eslint/eslint/edit/master/docs/rules/new-parens.md
rule_type: layout
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# require parentheses when invoking a constructor with no arguments (new-parens)

# 要求调用无参构造函数时带括号 (new-parens)

(fixable) The `--fix` option on the [command line](../user-guide/command-line-interface#fixing-problems) can automatically fix some of the problems reported by this rule.

(fixable) [命令行](../user-guide/command-line-interface#fixing-problems)中的 `--fix` 选项可以自动修复一些该规则报告的问题。

JavaScript allows the omission of parentheses when invoking a function via the `new` keyword and the constructor has no arguments. However, some coders believe that omitting the parentheses is inconsistent with the rest of the language and thus makes code less clear.

在 JavaScript 中，如果通过 `new` 关键调用一个函数而且它的构造函数不带参数，则可以省略后面圆括号。然而，一些程序员认为省略圆括号与整体不一致，从而使代码不清晰。

```js
var person = new Person;
```

## Rule Details

This rule can enforce or disallow parentheses when invoking a constructor with no arguments using the `new` keyword.

当使用 `new` 关键字调用没有参数的构造函数时，此规则可以强制或禁止括号。

## Options

This rule takes one option.

此规则接受一个选项。

- `"always"` enforces parenthesis after a new constructor with no arguments (default)
- `"always"` 强制括号后的新构造函数没有参数（默认）
- `"never"` enforces no parenthesis after a new constructor with no arguments
- `"never"` 强制在没有参数的新构造函数后不出现任何圆括号

### always

Examples of **incorrect** code for this rule with the `"always"` option:

选项 `"always"` 的 **错误** 代码示例：

```js
/*eslint new-parens: "error"*/

var person = new Person;
var person = new (Person);
```

Examples of **correct** code for this rule with the `"always"` option:

选项 `"always"` 的 **正确** 代码示例：

```js
/*eslint new-parens: "error"*/

var person = new Person();
var person = new (Person)();
```

### never

Examples of **incorrect** code for this rule with the `"never"` option:

选项 `"never"` 的 **错误** 代码示例：

```js
/*eslint new-parens: ["error", "never"]*/

var person = new Person();
var person = new (Person)();
```

Examples of **correct** code for this rule with the `"never"` option:

选项 `"never"` 的 **正确** 代码示例：

```js
/*eslint new-parens: ["error", "never"]*/

var person = new Person;
var person = (new Person);
var person = new Person("Name");
```

## Version

This rule was introduced in ESLint 0.0.6.

该规则在 ESLint 0.0.6 中被引入。

## Resources

* [Rule source](https://github.com/eslint/eslint/tree/master/lib/rules/new-parens.js)
* [Documentation source](https://github.com/eslint/eslint/tree/master/docs/rules/new-parens.md)
