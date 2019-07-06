---
title: no-unneeded-ternary - Rules
layout: doc
edit_link: https://github.com/eslint/eslint/edit/master/docs/rules/no-unneeded-ternary.md
rule_type: suggestion
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# disallow ternary operators when simpler alternatives exist (no-unneeded-ternary)

# 禁止可以表达为更简单结构的三元操作符 (no-unneeded-ternary)

(fixable) The `--fix` option on the [command line](../user-guide/command-line-interface#fixing-problems) can automatically fix some of the problems reported by this rule.

(fixable) [命令行](../user-guide/command-line-interface#fixing-problems)中的 `--fix` 选项可以自动修复一些该规则报告的问题。

It's a common mistake in JavaScript to use a conditional expression to select between two Boolean values instead of using ! to convert the test to a Boolean.
Here are some examples:

在 JavaScript 中一个常见的错误是使用一个条件表达式在两个 Boolean 值之间进行选择而不是使用！将测试条件转为一个 Boolean 类型。如以下示例：

```js
// Bad
var isYes = answer === 1 ? true : false;

// Good
var isYes = answer === 1;


// Bad
var isNo = answer === 1 ? false : true;

// Good
var isNo = answer !== 1;
```

This rule disallows the use of 'Boolean' literals inside conditional expressions.

该规则禁止在条件表达式中使用布尔型字面量。

Another common mistake is using a single variable as both the conditional test and the consequent. In such cases, the logical `OR` can be used to provide the same functionality.
Here is an example:

另一个常见的错误是使用单个变量同时作为测试条件和结果。在这种情况下，逻辑或操作符可以实现相同的功能。如下所示：

```js
// Bad
foo(bar ? bar : 1);

// Good
foo(bar || 1);
```

## Rule Details

This rule disallow ternary operators when simpler alternatives exist.

当有更简单的结构可以代替三元操作符时，该规则禁止使用三元操作符。

Examples of **incorrect** code for this rule:

**错误** 代码示例：

```js
/*eslint no-unneeded-ternary: "error"*/

var a = x === 2 ? true : false;

var a = x ? true : false;

var a = f(x ? x : 1);
```

Examples of **correct** code for this rule:

**正确** 代码示例：

```js
/*eslint no-unneeded-ternary: "error"*/

var a = x === 2 ? "Yes" : "No";

var a = x !== false;

var a = x ? "Yes" : "No";

var a = x ? y : x;

var a = x ? x : 1;  // Note that this is only allowed as it on the right hand side of an assignment; this type of ternary is disallowed everywhere else. See defaultAssignment option below for more details.
```

## Options

This rule has an object option:

该规则有一个对象选项：

* `"defaultAssignment": true` (default) allows the conditional expression as a default assignment pattern
* `"defaultAssignment": true` (默认) 允许条件表达式作为默认的赋值模式
* `"defaultAssignment": false` disallows the conditional expression as a default assignment pattern
* `"defaultAssignment": false` 禁止条件表达式作为默认的赋值模式

### defaultAssignment

The defaultAssignment option allows expressions of the form `x ? x : expr` (where `x` is any identifier and `expr` is any expression) as the right hand side of assignments (but nowhere else).

defaultAssignment 选项允许 `x ? x : expr` 形式的表达式(其中 `x` 是任何标识符，`expr` 是任何表达式)作为赋值的右侧(但没有其他地方)。

Examples of additional **incorrect** code for this rule with the `{ "defaultAssignment": false }` option:

选项 `{ "defaultAssignment": false }` 的 **错误** 代码示例：

```js
/*eslint no-unneeded-ternary: ["error", { "defaultAssignment": false }]*/

var a = x ? x : 1;
```

## When Not To Use It

You can turn this rule off if you are not concerned with unnecessary complexity in conditional expressions.

如果你不关心条件表达式中不必要的复杂性的话，你可以关闭此规则。

## Related Rules

* [no-ternary](no-ternary)
* [no-nested-ternary](no-nested-ternary)

## Version

This rule was introduced in ESLint 0.21.0.

该规则在 ESLint 0.21.0 中被引入。

## Resources

* [Rule source](https://github.com/eslint/eslint/tree/master/lib/rules/no-unneeded-ternary.js)
* [Documentation source](https://github.com/eslint/eslint/tree/master/docs/rules/no-unneeded-ternary.md)
