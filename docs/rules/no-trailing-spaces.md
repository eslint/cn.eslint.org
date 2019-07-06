---
title: no-trailing-spaces - Rules
layout: doc
edit_link: https://github.com/eslint/eslint/edit/master/docs/rules/no-trailing-spaces.md
rule_type: layout
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# disallow trailing whitespace at the end of lines (no-trailing-spaces)

# 禁用行尾空白 (no-trailing-spaces)

(fixable) The `--fix` option on the [command line](../user-guide/command-line-interface#fixing-problems) can automatically fix some of the problems reported by this rule.

(fixable) [命令行](../user-guide/command-line-interface#fixing-problems)中的 `--fix` 选项可以自动修复一些该规则报告的问题。

Sometimes in the course of editing files, you can end up with extra whitespace at the end of lines. These whitespace differences can be picked up by source control systems and flagged as diffs, causing frustration for developers. While this extra whitespace causes no functional issues, many code conventions require that trailing spaces be removed before check-in.

有时在编辑文件的过程中，你可以在行的末尾以额外的空格作为结束。这些空格差异可以被源码控制系统识别出并被标记为差异，给开发人员带来挫败感。虽然这种额外的空格并不会造成功能性的问题，许多编码规范要求在提交代码之前删除尾部空格。

## Rule Details

This rule disallows trailing whitespace (spaces, tabs, and other Unicode whitespace characters) at the end of lines.

该规则禁止使用行尾空白（空格、tab 和其它 Unicode 空白字符）。

Examples of **incorrect** code for this rule:

**错误** 代码示例：

```js
/*eslint no-trailing-spaces: "error"*/

var foo = 0;//•••••
var baz = 5;//••
//•••••
```

Examples of **correct** code for this rule:

**正确** 代码示例：

```js
/*eslint no-trailing-spaces: "error"*/

var foo = 0;
var baz = 5;
```

## Options

This rule has an object option:

该规则有一个对象选项：

* `"skipBlankLines": false` (default) disallows trailing whitespace on empty lines
* `"skipBlankLines": false` (默认) 禁止在空行使用空白符
* `"skipBlankLines": true` allows trailing whitespace on empty lines
* `"skipBlankLines": true` 允许在空行使用空白符
* `"ignoreComments": false` (default) disallows trailing whitespace in comment blocks
* `"ignoreComments": false` (默认) 禁止在注释块中使用空白符
* `"ignoreComments": true` allows trailing whitespace in comment blocks
* `"ignoreComments": true` 允许在注释块中使用空白符

### skipBlankLines

Examples of **correct** code for this rule with the `{ "skipBlankLines": true }` option:

选项 `{ "skipBlankLines": true }` 的 **正确** 代码示例：

```js
/*eslint no-trailing-spaces: ["error", { "skipBlankLines": true }]*/

var foo = 0;
var baz = 5;
//•••••
```

### ignoreComments

Examples of **correct** code for this rule with the `{ "ignoreComments": true }` option:

选项 `{ "ignoreComments": true }` 的 **正确** 代码示例：

```js
/*eslint no-trailing-spaces: ["error", { "ignoreComments": true }]*/

//foo•
//•••••
/**
 *•baz
 *••
 *•bar
 */
```

## Version

This rule was introduced in ESLint 0.7.1.

该规则在 ESLint 0.7.1 中被引入。

## Resources

* [Rule source](https://github.com/eslint/eslint/tree/master/lib/rules/no-trailing-spaces.js)
* [Documentation source](https://github.com/eslint/eslint/tree/master/docs/rules/no-trailing-spaces.md)
