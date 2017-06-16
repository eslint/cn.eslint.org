---
title: block-spacing - Rules
layout: doc
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# Disallow or enforce spaces inside of single line blocks (block-spacing)

# 禁止或强制在单行代码块中使用空格 (block-spacing)

(fixable) The `--fix` option on the [command line](../user-guide/command-line-interface#fix) can automatically fix some of the problems reported by this rule.

(fixable) [命令行](../user-guide/command-line-interface#fix)中的 `--fix` 选项可以自动修复一些该规则报告的问题。

## Rule Details

This rule enforces consistent spacing inside single-line blocks.

该规则强制在单行块内的空格的一致性。

## Options

This rule has a string option:

该规则有一个字符串选项：

* `"always"` (default) requires one or more spaces
* `"always"` (more) 要求使用一个或多个空格
* `"never"` disallows spaces
* `"never"` 禁用空格

### always

Examples of **incorrect** code for this rule with the default `"always"` option:

默认选项`"always"`的 **错误** 代码示例：

```js
/*eslint block-spacing: "error"*/

function foo() {return true;}
if (foo) { bar = 0;}
```

Examples of **correct** code for this rule with the default `"always"` option:

默认选项`"always"`的 **正确** 代码示例：

```js
/*eslint block-spacing: "error"*/

function foo() { return true; }
if (foo) { bar = 0; }
```

### never

Examples of **incorrect** code for this rule with the `"never"` option:

选项`"never"`的 **错误** 代码示例：

```js
/*eslint block-spacing: ["error", "never"]*/

function foo() { return true; }
if (foo) { bar = 0;}
```

Examples of **correct** code for this rule with the `"never"` option:

选项`"never"`的 **正确** 代码示例：

```js
/*eslint block-spacing: ["error", "never"]*/

function foo() {return true;}
if (foo) {bar = 0;}
```

## When Not To Use It

If you don't want to be notified about spacing style inside of blocks, you can safely disable this rule.

如果你不想收到单行代码块中间距风格问题的通知，你可以禁用此规则。

## Version

This rule was introduced in ESLint 1.2.0.

该规则在 ESLint 1.2.0 被引入。

## Resources

* [Rule source](https://github.com/eslint/eslint/tree/master/lib/rules/block-spacing.js)
* [Documentation source](https://github.com/eslint/eslint/tree/master/docs/rules/block-spacing.md)
