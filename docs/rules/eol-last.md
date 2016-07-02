---
title: Rule eol-last
layout: doc
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# Require file to end with single newline (eol-last)

# 要求文件末尾保留一行空行 (eol-last)

(fixable) The `--fix` option on the [command line](../user-guide/command-line-interface#fix) automatically fixes problems reported by this rule.

(fixable) [命令行](../user-guide/command-line-interface#fix)中的 `--fix` 选项可以自动修复该规则报告的问题。

Trailing newlines in non-empty files are a common UNIX idiom. Benefits of
trailing newlines include the ability to concatenate or append to files as well
as output files to the terminal without interfering with shell prompts.

在非空文件中存在拖尾换行是一个常见的 UNIX 风格。它的好处同输出文件到终端一样，方便在串联和追加文件时不会打断 shell 的提示。

## Rule Details

This rule requires at least one newline at the end of non-empty files.

该规则要求在非空文件末尾至少存在一行空行。

Prior to v0.16.0 this rule also enforced that there was only a single line at
the end of the file. If you still want this behaviour, consider enabling
[no-multiple-empty-lines](no-multiple-empty-lines) with `maxEOF` and/or
[no-trailing-spaces](no-trailing-spaces).

在 v0.16.0 之前此规则还强制在文件末尾只有一行空行。如果你仍然想要这样，可以考虑开启 [no-multiple-empty-lines](no-multiple-empty-lines) 使用 `maxEOF` 和/或 [no-trailing-spaces](no-trailing-spaces)。

Examples of **incorrect** code for this rule:

**错误** 代码示例：

```js
/*eslint eol-last: "error"*/

function doSmth() {
  var foo = 2;
}
```

Examples of **correct** code for this rule:

**正确** 代码示例：

```js
/*eslint eol-last: "error"*/

function doSmth() {
  var foo = 2;
}

```

## Options

This rule has a string option:

该规则有一个字符串选项：

* `"unix"` (default) enforces line feed (LF) as newline
* `"unix"` (默认) 强制使用换行 (LF)
* `"windows"` enforces carriage return line feed (CRLF) as newline
* `"windows"` 强制使用回车换行 (CRLF)

## Version

This rule was introduced in ESLint 0.7.1.

该规则在 ESLint 0.7.1 被引入。

## Resources

* [Rule source](https://github.com/eslint/eslint/tree/master/lib/rules/eol-last.js)
* [Documentation source](https://github.com/eslint/eslint/tree/master/docs/rules/eol-last.md)
