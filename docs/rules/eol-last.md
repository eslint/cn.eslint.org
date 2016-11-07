---
title: eol-last - Rules
layout: doc
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# require or disallow newline at the end of files (eol-last)

# 要求或禁止文件末尾保留一行空行 (eol-last)

(fixable) The `--fix` option on the [command line](../user-guide/command-line-interface#fix) automatically fixes problems reported by this rule.

(fixable) [命令行](../user-guide/command-line-interface#fix)中的 `--fix` 选项可以自动修复该规则报告的问题。

Trailing newlines in non-empty files are a common UNIX idiom. Benefits of
trailing newlines include the ability to concatenate or append to files as well
as output files to the terminal without interfering with shell prompts.

在非空文件中存在拖尾换行是一个常见的 UNIX 风格。它的好处同输出文件到终端一样，方便在串联和追加文件时不会打断 shell 的提示。

## Rule Details

This rule enforces at least one newline (or absence thereof) at the end
of non-empty files.

该规则要求在非空文件末尾至少存在一行空行（或缺少换行）。

Prior to v0.16.0 this rule also enforced that there was only a single line at
the end of the file. If you still want this behaviour, consider enabling
[no-multiple-empty-lines](no-multiple-empty-lines) with `maxEOF` and/or
[no-trailing-spaces](no-trailing-spaces).

在 v0.16.0 之前此规则还强制在文件末尾只有一行空行。如果你仍然想要这样，可以考虑开启 [no-multiple-empty-lines](no-multiple-empty-lines) 使用 `maxEOF` 和/或 [no-trailing-spaces](no-trailing-spaces)。

Examples of **incorrect** code for this rule:

**错误** 代码示例：

```js
/*eslint eol-last: ["error", "always"]*/

function doSmth() {
  var foo = 2;
}
```

Examples of **correct** code for this rule:

**正确** 代码示例：

```js
/*eslint eol-last: ["error", "always"]*/

function doSmth() {
  var foo = 2;
}\n
```

## Options

This rule has a string option:

该规则有一个字符串选项：

* `"always"` (default) enforces that files end with a newline (LF)
* `"always"` (默认) 强制使用换行 (LF)
* `"never"` enforces that files do not end with a newline
* `"never"` 强制文件末尾不要有换行符
* `"unix"` (deprecated) is identical to "always"
* `"unix"` (弃用) 等效于 "always"
* `"windows"` (deprecated) is identical to "always", but will use a CRLF character when autofixing
* `"windows"` (弃用) 等效于 "always"，但是自动修复时将使用回车换行 (CRLF)

**Deprecated:** The options `"unix"` and `"windows"` are deprecated. If you need to enforce a specific linebreak style, use this rule in conjunction with `linebreak-style`.

**弃用：**`"unix"` 和 `"windows"` 选项已被弃用。 如果你需要强制一种指定的换行风格，结合 `linebreak-style` 规则一起使用。

## Version

This rule was introduced in ESLint 0.7.1.

该规则在 ESLint 0.7.1 被引入。

## Resources

* [Rule source](https://github.com/eslint/eslint/tree/master/lib/rules/eol-last.js)
* [Documentation source](https://github.com/eslint/eslint/tree/master/docs/rules/eol-last.md)
