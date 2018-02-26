---
title: multiline-comment-style - Rules
layout: doc
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# enforce a particular style for multiline comments (multiline-comment-style)

# 强制对多行注释使用特定风格 (multiline-comment-style)


(fixable) The `--fix` option on the [command line](../user-guide/command-line-interface#fix) can automatically fix some of the problems reported by this rule.

(fixable) [命令行](../user-guide/command-line-interface#fix)中的 `--fix` 选项可以自动修复一些该规则报告的问题。

Many style guides require a particular style for comments that span multiple lines. For example, some style guides prefer the use of a single block comment for multiline comments, whereas other style guides prefer consecutive line comments.

很多风格指南对多行注释要求使用特定的风格。例如，一些风格指南喜欢对多行注释使用单个块注释，而其他的风格指南喜欢连续的行注释。

## Rule Details

This rule aims to enforce a particular style for multiline comments.

该规则旨在对多行注释强制使用一中特定的风格。

### Options

This rule has a string option, which can have one of the following values:

该规则有一个字符串选项，可以是以下值：

* `"starred-block"` (default): Disallows consecutive line comments in favor of block comments. Additionally, requires block comments to have an aligned `*` character before each line.
* `"starred-block"` (默认): 禁止使用连续的行注释来表示块注释。另外，要求块注释的每行之前有一个 `*`。
* `"bare-block"`: Disallows consecutive line comments in favor of block comments, and disallows block comments from having a `"*"` character before each line.
* `"bare-block"`: 禁止使用连续的行注释来表示块注释，并且禁止块注释每行前有一个`"*"`。
* `"separate-lines"`: Disallows block comments in favor of consecutive line comments
* `"separate-lines"`: 禁用块注释，使用连续的行注释。

The rule always ignores directive comments such as `/* eslint-disable */`. Additionally, unless the mode is `"starred-block"`, the rule ignores JSDoc comments.

该规则总是忽略像 `/* eslint-disable */` 这样的指令注释。另外，除非是 `"starred-block"`，该规则忽略 JSDoc 注释。

Examples of **incorrect** code for this rule with the default `"starred-block"` option:

默认选项 `"starred-block"` 的 **错误** 代码示例：

```js

/* eslint multiline-comment-style: ["error", "starred-block"] */

// this line
// calls foo()
foo();

/* this line
calls foo() */
foo();

/* this comment
 * is missing a newline after /*
 */

/*
 * this comment
 * is missing a newline at the end */

/*
* the star in this line should have a space before it
 */

/*
 * the star on the following line should have a space before it
*/

```

Examples of **correct** code for this rule with the default `"starred-block"` option:

默认选项 `"starred-block"` 的 **正确** 代码示例：

```js
/* eslint multiline-comment-style: ["error", "starred-block"] */

/*
 * this line
 * calls foo()
 */
foo();

// single-line comment
```

Examples of **incorrect** code for this rule with the `"bare-block"` option:

选项 `"bare-block"` 的 **错误** 代码示例：

```js
/* eslint multiline-comment-style: ["error", "bare-block"] */

// this line
// calls foo()
foo();

/*
 * this line
 * calls foo()
 */
foo();
```

Examples of **correct** code for this rule with the `"bare-block"` option:

选项 `"bare-block"` 的 **正确** 代码示例：

```js
/* eslint multiline-comment-style: ["error", "bare-block"] */

/* this line
   calls foo() */
foo();
```

Examples of **incorrect** code for this rule with the `"separate-lines"` option:

选项 `"separate-lines"` 的 **错误** 代码示例：

```js

/* eslint multiline-comment-style: ["error", "separate-lines"] */

/* This line
calls foo() */
foo();

/*
 * This line
 * calls foo()
 */
foo();

```

Examples of **correct** code for this rule with the `"separate-lines"` option:

选项 `"separate-lines"` 的 **正确** 代码示例：

```js
/* eslint multiline-comment-style: ["error", "separate-lines"] */

// This line
// calls foo()
foo();


```

## When Not To Use It

If you don't want to enforce a particular style for multiline comments, you can disable the rule.

如果你不想对多行注释强制使用一种特定的风格，你可以禁用此规则。

## Version

This rule was introduced in ESLint 4.10.0.

该规则在 ESLint 4.10.0 中被引入。

## Resources

* [Rule source](https://github.com/eslint/eslint/tree/master/lib/rules/multiline-comment-style.js)
* [Documentation source](https://github.com/eslint/eslint/tree/master/docs/rules/multiline-comment-style.md)
