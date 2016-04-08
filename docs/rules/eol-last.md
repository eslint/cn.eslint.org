---
title: Rule eol-last
layout: doc
translator: molee1905
proofreader: molee1905
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# Require file to end with single newline (eol-last)

# 要求文件末尾保留一行空行 (eol-last)

(fixable) The --fix option on the [command line](../user-guide/command-line-interface#fix) automatically fixes problems reported by this rule.

(fixable)[command line](../user-guide/command-line-interface#fix)中的`--fix`选项可以自动修复该规则报告的问题。

Trailing newlines in non-empty files are a common UNIX idiom. Benefits of
trailing newlines include the ability to concatenate or append to files as well
as output files to the terminal without interfering with shell prompts. This
rule enforces newlines for all non-empty programs.

非空文件的尾部空行常见于 UNIX 风格中。同输出文件到终端一样，方便在串联和追加文件时不会打断 shell 的提示。该规则强制在所有非空程序中使用末尾空行。

Prior to v0.16.0 this rule also enforced that there was only a single line at
the end of the file. If you still want this behaviour, consider enabling
[no-multiple-empty-lines](no-multiple-empty-lines) with `maxEOF` and/or
[no-trailing-spaces](no-trailing-spaces).

在 v0.16.0 之前此规则还强制在文件末尾只有一行空行。如果你仍然想要这样，可以考虑开启[no-multiple-empty-lines](no-multiple-empty-lines) 使用 `maxEOF` 和/或
[no-trailing-spaces](no-trailing-spaces)。

## Rule Details

The following patterns are considered problems:

以下模式被认为是有问题的：

```js
/*eslint eol-last: "error"*/

function doSmth() {
  var foo = 2;
}
```

The following patterns are not considered problems:

以下模式被认为是没有问题的：

```js
/*eslint eol-last: "error"*/

function doSmth() {
  var foo = 2;
}
// spaces here
```

## Options

This rule may take one option which is either `unix` (LF) or `windows` (CRLF). When omitted `unix` is assumed.

该规则有一个可选项：`unix` (LF) 或 `windows` (CRLF)。如果省略的话，默认设置为`unix`。

## Version

This rule was introduced in ESLint 0.7.1.

该规则在 ESLint 0.7.1 被引入。

## Resources

* [Rule source](https://github.com/eslint/eslint/tree/master/lib/rules/eol-last.js)
* [Documentation source](https://github.com/eslint/eslint/tree/master/docs/rules/eol-last.md)
