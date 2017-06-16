---
title: quotes - Rules
layout: doc
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# enforce the consistent use of either backticks, double, or single quotes (quotes)

# 强制使用一致的反勾号、双引号或单引号 (quotes)

(fixable) The `--fix` option on the [command line](../user-guide/command-line-interface#fix) can automatically fix some of the problems reported by this rule.

(fixable) [命令行](../user-guide/command-line-interface#fix)中的 `--fix` 选项可以自动修复一些该规则报告的问题。

JavaScript allows you to define strings in one of three ways: double quotes, single quotes, and backticks (as of ECMAScript 6). For example:

Javascript 允许你用三种方式定义字符串：双引号，单引号和反勾号(在 ECMAScript 6 中)。例如：

```js
/*eslint-env es6*/

var double = "double";
var single = 'single';
var backtick = `backtick`;    // ES6 only
```

Each of these lines creates a string and, in some cases, can be used interchangeably. The choice of how to define strings in a codebase is a stylistic one outside of template literals (which allow embedded of expressions to be interpreted).

每一行创建了一个字符串，在某些情况下，可替换使用。在代码库中，如何定义字符串是模板文本(允许嵌入的表达式被解释执行)之外的风格上的问题。

Many codebases require strings to be defined in a consistent manner.

许多代码库要求以一致的方式定义字符串。

## Rule Details

This rule enforces the consistent use of either backticks, double, or single quotes.

该规则强制使用一致的反勾号、双引号或单引号。

## Options

This rule has two options, a string option and an object option.

该规则有两个选项，一个是字符串，一个是对象。

String option:

字符串选项：

* `"double"` (default) requires the use of double quotes wherever possible
* `"double"` (默认) 要求尽可能地使用双引号
* `"single"` requires the use of single quotes wherever possible
* `"single"` 要求尽可能地使用单引号
* `"backtick"` requires the use of backticks wherever possible
* `"backtick"` 要求尽可能地使用反勾号

Object option:

对象选项：

* `"avoidEscape": true` allows strings to use single-quotes or double-quotes so long as the string contains a quote that would have to be escaped otherwise
* `"avoidEscape": true` 允许字符串使用单引号或双引号，只要字符串中包含了一个其它引号，否则需要转义
* `"allowTemplateLiterals": true` allows strings to use backticks
* `"allowTemplateLiterals": true` 允许字符串使用反勾号

**Deprecated**: The object property `avoid-escape` is deprecated; please use the object property `avoidEscape` instead.

**弃用：**`avoid-escape`选项已被弃用；请使用 `avoidEscape`。

### double

Examples of **incorrect** code for this rule with the default `"double"` option:

默认选项 `"double"` 的 **错误** 代码示例：

```js
/*eslint quotes: ["error", "double"]*/

var single = 'single';
var unescaped = 'a string containing "double" quotes';
```

Examples of **correct** code for this rule with the default `"double"` option:

默认选项 `"double"` 的 **正确** 代码示例：

```js
/*eslint quotes: ["error", "double"]*/
/*eslint-env es6*/

var double = "double";
var backtick = `back\ntick`;  // backticks are allowed due to newline
var backtick = tag`backtick`; // backticks are allowed due to tag
```

### single

Examples of **incorrect** code for this rule with the `"single"` option:

选项 `"single"` 的 **错误** 代码示例：

```js
/*eslint quotes: ["error", "single"]*/

var double = "double";
var unescaped = "a string containing 'single' quotes";
```

Examples of **correct** code for this rule with the `"single"` option:

选项 `"single"` 的 **正确** 代码示例：

```js
/*eslint quotes: ["error", "single"]*/
/*eslint-env es6*/

var single = 'single';
var backtick = `back${x}tick`; // backticks are allowed due to substitution
```

### backticks

Examples of **incorrect** code for this rule with the `"backtick"` option:

选项 `"backtick"` 的 **错误** 代码示例：

```js
/*eslint quotes: ["error", "backtick"]*/

var single = 'single';
var double = "double";
var unescaped = 'a string containing `backticks`';
```

Examples of **correct** code for this rule with the `"backtick"` option:

选项 `"backtick"` 的 **正确** 代码示例：

```js
/*eslint quotes: ["error", "backtick"]*/
/*eslint-env es6*/

var backtick = `backtick`;
```

### avoidEscape

Examples of additional **correct** code for this rule with the `"double", { "avoidEscape": true }` options:

选项呢 `"double", { "avoidEscape": true }` 的 **正确** 代码示例：

```js
/*eslint quotes: ["error", "double", { "avoidEscape": true }]*/

var single = 'a string containing "double" quotes';
```

Examples of additional **correct** code for this rule with the `"single", { "avoidEscape": true }` options:

选项 `"single", { "avoidEscape": true }` 的 **正确** 代码示例：

```js
/*eslint quotes: ["error", "single", { "avoidEscape": true }]*/

var double = "a string containing 'single' quotes";
```

Examples of additional **correct** code for this rule with the `"backtick", { "avoidEscape": true }` options:

选项 `"backtick", { "avoidEscape": true }` 的 **正确** 代码示例：

```js
/*eslint quotes: ["error", "backtick", { "avoidEscape": true }]*/

var double = "a string containing `backtick` quotes"
```

### allowTemplateLiterals

Examples of additional **correct** code for this rule with the `"double", { "allowTemplateLiterals": true }` options:

选项 `"double", { "allowTemplateLiterals": true }` 的 **正确** 代码示例：

```js
/*eslint quotes: ["error", "double", { "allowTemplateLiterals": true }]*/

var double = "double";
var double = `double`;
```

Examples of additional **correct** code for this rule with the `"single", { "allowTemplateLiterals": true }` options:

选项 `"single", { "allowTemplateLiterals": true }` 的 **正确** 代码示例：

```js
/*eslint quotes: ["error", "single", { "allowTemplateLiterals": true }]*/

var single = 'single';
var single = `single`;
```

## When Not To Use It

If you do not need consistency in your string styles, you can safely disable this rule.

如果你不需要字符串风格保持一致，可以关闭此规则。

## Version

This rule was introduced in ESLint 0.0.7.

该规则在 ESLint 0.0.7 被引入。

## Resources

* [Rule source](https://github.com/eslint/eslint/tree/master/lib/rules/quotes.js)
* [Documentation source](https://github.com/eslint/eslint/tree/master/docs/rules/quotes.md)
