---
title: dot-location - Rules
layout: doc
edit_link: https://github.com/eslint/eslint/edit/master/docs/rules/dot-location.md
rule_type: layout
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# Enforce newline before and after dot (dot-location)

# 强制在点号之前或之后换行 (dot-location)

(fixable) The `--fix` option on the [command line](../user-guide/command-line-interface#fixing-problems) can automatically fix some of the problems reported by this rule.

(fixable) [命令行](../user-guide/command-line-interface#fixing-problems)中的 `--fix` 选项可以自动修复一些该规则报告的问题。

JavaScript allows you to place newlines before or after a dot in a member expression.

JavaScript 允许你在成员表达式中的点操作符之前或之后放置一个换行符。

Consistency in placing a newline before or after the dot can greatly increase readability.

点操作符前后一致得放置换行符，可以能大大提供代码可读性。

```js
var a = universe.
        galaxy;

var b = universe
       .galaxy;
```

## Rule Details

This rule aims to enforce newline consistency in member expressions. This rule prevents the use of mixed newlines around the dot in a member expression.

该规则旨在强制成员表达式中强制换行的一致性。防止既在点号操作之前也在之后使用换行符。

## Options

The rule takes one option, a string:

该规则有个字符串选项：

* If it is `"object"` (default), the dot in a member expression should be on the same line as the object portion.

* 如果它的值是 `"object"` (默认)，表达式中的点号操作符应该和对象部分在同一行。

* If it is `"property"`, the dot in a member expression should be on the same line as the property portion.

* 如果它的值是 `"property"`，表达式中的点号操作符应该和属性在同一行。

### object

The default `"object"` option requires the dot to be on the same line as the object.

默认选项 `"object"` 要求点操作符和对象部分放在同一行。

Examples of **incorrect** code for the default `"object"` option:

默认选项 `"object"` 的 **错误** 代码示例：

```js
/*eslint dot-location: ["error", "object"]*/

var foo = object
.property;
```

Examples of **correct** code for the default `"object"` option:

默认选项 `"object"` 的 **正确** 代码示例：

```js
/*eslint dot-location: ["error", "object"]*/

var foo = object.
property;
var bar = object.property;
```

### property

The `"property"` option requires the dot to be on the same line as the property.

选项 `"property"` 要求点操作符和属性放在同一行。

Examples of **incorrect** code for the `"property"` option:

选项 `"property"` 的 **错误** 代码示例：

```js
/*eslint dot-location: ["error", "property"]*/

var foo = object.
property;
```

Examples of **correct** code for the `"property"` option:

选项 `"property"` 的 **正确** 代码示例：

```js
/*eslint dot-location: ["error", "property"]*/

var foo = object
.property;
var bar = object.property;
```

## When Not To Use It

You can turn this rule off if you are not concerned with the consistency of newlines before or after dots in member expressions.

如果你不关心成员表达式中点操作符前后的换行符的一致性，可以关掉此规则。

## Related Rules

* [newline-after-var](newline-after-var)
* [dot-notation](dot-notation)

## Version

This rule was introduced in ESLint 0.21.0.

该规则在 ESLint 0.21.0 中被引入

## Resources

* [Rule source](https://github.com/eslint/eslint/tree/master/lib/rules/dot-location.js)
* [Documentation source](https://github.com/eslint/eslint/tree/master/docs/rules/dot-location.md)
