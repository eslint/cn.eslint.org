---
title: line-comment-position - Rules
layout: doc
edit_link: https://github.com/eslint/eslint/edit/master/docs/rules/line-comment-position.md
rule_type: layout
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# enforce position of line comments (line-comment-position)

# 强制行注释的位置 (line-comment-position)

Line comments can be positioned above or beside code. This rule helps teams maintain a consistent style.

行注释可以在代码上方或旁边。该规则帮助团队维护一致的注释风格。

```js
// above comment
var foo = "bar";  // beside comment
```

## Rule Details

This rule enforces consistent position of line comments. Block comments are not affected by this rule. By default, this rule ignores comments starting with the following words: `eslint`, `jshint`, `jslint`, `istanbul`, `global`, `exported`, `jscs`, `falls through`.

该规则强制一致的行注释风格。块注释不受此规则影响。默认情况下，该规则忽略以 `eslint`、`jshint`、`jslint`、 `istanbul`、`global`、`exported`、`jscs`、`falls through` 开头的注释。


## Options

This rule takes one argument, which can be a string or an object. The string settings are the same as those of the `position` property (explained below). The object option has the following properties:

该规则有一个参数，可以使是一个字符串也可以是个对象。字符串选项和下面的 `position` 属性相同。对象选项有以下属性：

### position

The `position` option has two settings:

`position` 选项有两个设置：

* `above` (default) enforces line comments only above code, in its own line.
* `above` (默认) 强制行注释只在代码上方，单独成行。
* `beside` enforces line comments only at the end of code lines.
* `beside` 强制行注释只在代码行后面。

#### position: above

Examples of **correct** code for the `{ "position": "above" }` option:

选项 `{ "position": "above" }` 的 **正确** 代码示例：

```js
/*eslint line-comment-position: ["error", { "position": "above" }]*/
// valid comment
1 + 1;
```


Examples of **incorrect** code for the `{ "position": "above" }` option:

选项 `{ "position": "above" }` 的 **错误** 代码示例：

```js
/*eslint line-comment-position: ["error", { "position": "above" }]*/
1 + 1; // invalid comment
```

#### position: beside

Examples of **correct** code for the `{ "position": "beside" }` option:

选项 `{ "position": "beside" }` 的 **正确** 代码示例：

```js
/*eslint line-comment-position: ["error", { "position": "beside" }]*/
1 + 1; // valid comment
```


Examples of **incorrect** code for the `{ "position": "beside" }` option:

选项 `{ "position": "beside" }` 的 **错误** 代码示例：

```js
/*eslint line-comment-position: ["error", { "position": "beside" }]*/
// invalid comment
1 + 1;
```

### ignorePattern

By default this rule ignores comments starting with the following words: `eslint`, `jshint`, `jslint`, `istanbul`, `global`, `exported`, `jscs`, `falls through`. An alternative regular expression can be provided.

默认情况下，该规则忽略以 `eslint`、`jshint`、`jslint`、 `istanbul`、`global`、`exported`、`jscs`、`falls through` 开头的注释。该规则提供另一种方式，即正则表达式。

Examples of **correct** code for the `ignorePattern` option:

选项 `ignorePattern` 的 **正确** 代码示例:

```js
/*eslint line-comment-position: ["error", { "ignorePattern": "pragma" }]*/
1 + 1; // pragma valid comment
```

Examples of **incorrect** code for the `ignorePattern` option:

选项 `ignorePattern` 的 **错误** 代码示例:

```js
/*eslint line-comment-position: ["error", { "ignorePattern": "pragma" }]*/
1 + 1; // invalid comment
```

### applyDefaultIgnorePatterns

Default ignore patterns are applied even when `ignorePattern` is provided. If you want to omit default patterns, set this option to `false`.

即使提供了 `ignorePattern`，默认的忽略模式也会被应用。如果你想省略默认模式，设置此选项为 `false`。

Examples of **correct** code for the `{ "applyDefaultIgnorePatterns": false }` option:

选项 `{ "applyDefaultIgnorePatterns": false }` 的 **正确** 代码示例：

```js
/*eslint line-comment-position: ["error", { "ignorePattern": "pragma", "applyDefaultIgnorePatterns": false }]*/
1 + 1; // pragma valid comment
```

Examples of **incorrect** code for the `{ "applyDefaultIgnorePatterns": false }` option:

选项 `{ "applyDefaultIgnorePatterns": false }` 的 **错误** 代码示例：

```js
/*eslint line-comment-position: ["error", { "ignorePattern": "pragma", "applyDefaultIgnorePatterns": false }]*/
1 + 1; // falls through
```

**Deprecated:** the object property `applyDefaultPatterns` is deprecated. Please use the property `applyDefaultIgnorePatterns` instead.

**弃用：**属性`applyDefaultPatterns` 已被弃用。请使用属性 `applyDefaultIgnorePatterns`

## When Not To Use It

If you aren't concerned about having different line comment styles, then you can turn off this rule.

如果你不关心行注释的风格，可以关闭此规则。

## Compatibility

**JSCS**: [validateCommentPosition](https://jscs-dev.github.io/rule/validateCommentPosition)

## Version

This rule was introduced in ESLint 3.5.0.

该规则在 ESLint 3.5.0 中被引入。

## Resources

* [Rule source](https://github.com/eslint/eslint/tree/master/lib/rules/line-comment-position.js)
* [Documentation source](https://github.com/eslint/eslint/tree/master/docs/rules/line-comment-position.md)
