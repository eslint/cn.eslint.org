---
title: no-multiple-empty-lines - Rules
layout: doc
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# disallow multiple empty lines (no-multiple-empty-lines)

# 不允许多个空行 (no-multiple-empty-lines)

(fixable) The `--fix` option on the [command line](../user-guide/command-line-interface#fix) automatically fixes problems reported by this rule.

(fixable) [命令行](../user-guide/command-line-interface#fix)中的 `--fix` 选项可以自动修复该规则报告的问题。

Some developers prefer to have multiple blank lines removed, while others feel that it helps improve readability. Whitespace is useful for separating logical sections of code, but excess whitespace takes up more of the screen.

一些开发者喜欢删除多个空行，然而其他人认为多个空行可以提高可读性。空白对于分离代码代码段逻辑是有帮助的，但过量的空白会占用更多的屏幕。

## Rule Details

This rule aims to reduce the scrolling required when reading through your code. It will warn when the maximum amount of empty lines has been exceeded.

该规则目的在于，当你读代码时，减少滚动。当超过最大空行数，该规则将发出警告。

## Options

This rule has an object option:

该规则有一个对象选项：

* `"max"` (default: `2`) enforces a maximum number of consecutive empty lines.
* `"max"` (默认为 `2`) 强制最大连续空行数。
* `"maxEOF"` enforces a maximum number of consecutive empty lines at the end of files.
* `"maxEOF"` 强制文件末尾的最大连续空行数。
* `"maxBOF"` enforces a maximum number of consecutive empty lines at the beginning of files.
* `"maxBOF"` 强制文件开始的最大连续空行数。

### max

Examples of **incorrect** code for this rule with the default `{ "max": 2 }` option:

默认选项 `{ "max": 2 }` 的 **错误** 代码示例：

```js
/*eslint no-multiple-empty-lines: "error"*/

var foo = 5;



var bar = 3;
```

Examples of **correct** code for this rule with the default `{ "max": 2 }` option:

默认选项 `{ "max": 2 }` 的 **正确** 代码示例：

```js
/*eslint no-multiple-empty-lines: "error"*/

var foo = 5;


var bar = 3;
```

### maxEOF

Examples of **incorrect** code for this rule with the `{ max: 2, maxEOF: 1 }` options:

选项 `{ max: 2, maxEOF: 1 }` 的 **错误** 代码示例：

```js
/*eslint no-multiple-empty-lines: ["error", { "max": 2, "maxEOF": 1 }]*/

var foo = 5;


var bar = 3;


```

Examples of **correct** code for this rule with the `{ max: 2, maxEOF: 1 }` options:

选项 `{ max: 2, maxEOF: 1 }` 的 **正确** 代码示例：

```js
/*eslint no-multiple-empty-lines: ["error", { "max": 2, "maxEOF": 1 }]*/

var foo = 5;


var bar = 3;

```

### maxBOF

Examples of **incorrect** code for this rule with the `{ max: 2, maxBOF: 1 }` options:

选项 `{ max: 2, maxBOF: 1 }` 的 **错误** 代码示例：

```js
/*eslint no-multiple-empty-lines: ["error", { "max": 2, "maxBOF": 1 }]*/


var foo = 5;


var bar = 3;
```

Examples of **correct** code for this rule with the `{ max: 2, maxBOF: 1 }` options:

选项 `{ max: 2, maxBOF: 1 }` 的 **正确** 代码示例：

```js
/*eslint no-multiple-empty-lines: ["error", { "max": 2, "maxBOF": 1}]*/

var foo = 5;


var bar = 3;
```

## When Not To Use It

If you do not care about extra blank lines, turn this off.

如果你不关心额外的空行，关闭此规则即可。

## Version

This rule was introduced in ESLint 0.9.0.

该规则在 ESLint 0.9.0 中被引入。

## Resources

* [Rule source](https://github.com/eslint/eslint/tree/master/lib/rules/no-multiple-empty-lines.js)
* [Documentation source](https://github.com/eslint/eslint/tree/master/docs/rules/no-multiple-empty-lines.md)
