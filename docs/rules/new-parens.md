---
title: new-parens - Rules
layout: doc
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# require parentheses when invoking a constructor with no arguments (new-parens)

# 要求调用无参构造函数时带括号 (new-parens)

(fixable) The `--fix` option on the [command line](../user-guide/command-line-interface#fix) automatically fixes problems reported by this rule.

(fixable) [命令行](../user-guide/command-line-interface#fix)中的 `--fix` 选项可以自动修复该规则报告的问题。

JavaScript allows the omission of parentheses when invoking a function via the `new` keyword and the constructor has no arguments. However, some coders believe that omitting the parentheses is inconsistent with the rest of the language and thus makes code less clear.

在 JavaScript 中，如果通过 `new` 关键调用一个函数而且它的构造函数不带参数，则可以省略后面圆括号。然而，一些程序员认为省略圆括号与整体不一致，从而使代码不清晰。

```js
var person = new Person;
```

## Rule Details

This rule requires parentheses when invoking a constructor with no arguments using the `new` keyword in order to increase code clarity.

该规则目的在于，当通过 `new` 关键字调用构造函数时，要求使用圆括号，以此提高代码的清晰度。

Examples of **incorrect** code for this rule:

**错误** 代码示例：

```js
/*eslint new-parens: "error"*/

var person = new Person;
var person = new (Person);
```

Examples of **correct** code for this rule:

**正确** 代码示例：

```js
/*eslint new-parens: "error"*/

var person = new Person();
var person = new (Person)();
```

## Version

This rule was introduced in ESLint 0.0.6.

该规则在 ESLint 0.0.6 中被引入。

## Resources

* [Rule source](https://github.com/eslint/eslint/tree/master/lib/rules/new-parens.js)
* [Documentation source](https://github.com/eslint/eslint/tree/master/docs/rules/new-parens.md)
