---
title: capitalized-comments - Rules
layout: doc
edit_link: https://github.com/eslint/eslint/edit/master/docs/rules/capitalized-comments.md
rule_type: suggestion
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# enforce or disallow capitalization of the first letter of a comment (capitalized-comments)

# 强制或禁止对注释的第一个字母大写 (capitalized-comments)

(fixable) The `--fix` option on the [command line](../user-guide/command-line-interface#fixing-problems) can automatically fix some of the problems reported by this rule.

(fixable) [命令行](../user-guide/command-line-interface#fixing-problems)中的 `--fix` 选项可以自动修复一些该规则报告的问题。

Comments are useful for leaving information for future developers. In order for that information to be useful and not distracting, it is sometimes desirable for comments to follow a particular style. One element of comment formatting styles is whether the first word of a comment should be capitalized or lowercase.

注释可以为将来的开发人员留下信息，这很有用。为了使这些信息有用而不是分散注意力，有时候，注释需要遵循某种特定的风格。有一种注释格式化风格是注释的第一个字是否应该大写或小写。

In general, no comment style is any more or less valid than any others, but many developers would agree that a consistent style can improve a project's maintainability.

一般来说，没有任何注释风格比其他注释风格更有效，但是许多开发人员都认为一致的风格可以提高项目的可维护性。

## Rule Details

This rule aims to enforce a consistent style of comments across your codebase, specifically by either requiring or disallowing a capitalized letter as the first word character in a comment. This rule will not issue warnings when non-cased letters are used.

该规则的目的是在你的代码库中强制使用一种一致的注释风格，特别是在注释中要求或禁止第一个字母为大写字母。当使用非大小写的字母时，该规则将不会发出警告。

By default, this rule will require a non-lowercase letter at the beginning of comments.

默认情况下，该规则要求在注释的开始位置有一个非小写的字母。

Examples of **incorrect** code for this rule:

**错误** 代码示例：

```js
/* eslint capitalized-comments: ["error"] */

// lowercase comment

```

Examples of **correct** code for this rule:

**正确** 代码示例：

```js

// Capitalized comment

// 1. Non-letter at beginning of comment

// 丈 Non-Latin character at beginning of comment

/* eslint semi:off */
/* eslint-env node */
/* eslint-disable */
/* eslint-enable */
/* istanbul ignore next */
/* jscs:enable */
/* jshint asi:true */
/* global foo */
/* globals foo */
/* exported myVar */
// eslint-disable-line
// eslint-disable-next-line
// https://github.com

```

### Options

This rule has two options: a string value `"always"` or `"never"` which determines whether capitalization of the first word of a comment should be required or forbidden, and optionally an object containing more configuration parameters for the rule.

该规则有两个选项：一个值为 `"always"` 或 `"never"` 的字符串，来决定是否要求或禁止一个注释的第一个字母，以及一个可包含更多配置参数的对象选项。

Here are the supported object options:

以下是对象选项：

* `ignorePattern`: A string representing a regular expression pattern of words that should be ignored by this rule. If the first word of a comment matches the pattern, this rule will not report that comment.
* `ignorePattern`: 应该被该规则忽略的单词的正则表达式。如果注释的第一个字母与模式匹配，该规则将不会报告该注释。
    * Note that the following words are always ignored by this rule: `["jscs", "jshint", "eslint", "istanbul", "global", "globals", "exported"]`.
    * 注意，以下单词总是被该规则忽略：`["jscs", "jshint", "eslint", "istanbul", "global", "globals", "exported"]`。
* `ignoreInlineComments`: If this is `true`, the rule will not report on comments in the middle of code. By default, this is `false`.
* `ignoreInlineComments`: 如果为 `true`， 该规则将不会报告行内注释。默认为 `false`。
* `ignoreConsecutiveComments`: If this is `true`, the rule will not report on a comment which violates the rule, as long as the comment immediately follows another comment. By default, this is `false`.
* `ignoreConsecutiveComments`: 如果为 `true`，该规则将不会报告违反此规则的注释，只要该注释紧随另一注释。。默认为 `false`。

Here is an example configuration:

以下是一个示例配置：

```json
{
    "capitalized-comments": [
        "error",
        "always",
        {
            "ignorePattern": "pragma|ignored",
            "ignoreInlineComments": true
        }
    ]
}
```

#### `"always"`

Using the `"always"` option means that this rule will report any comments which start with a lowercase letter. This is the default configuration for this rule.

`"always"` 选项意味着该规则将报告任何以小写字母开始的注释。这是该规则的默认配置。

Note that configuration comments and comments which start with URLs are never reported.

注意，该规则不会报告 eslint 的配置注释 和 以 URL 开始的注释。

Examples of **incorrect** code for this rule:

**错误** 代码示例：

```js
/* eslint capitalized-comments: ["error", "always"] */

// lowercase comment

```

Examples of **correct** code for this rule:

**正确** 代码示例：

```js
/* eslint capitalized-comments: ["error", "always"] */

// Capitalized comment

// 1. Non-letter at beginning of comment

// 丈 Non-Latin character at beginning of comment

/* eslint semi:off */
/* eslint-env node */
/* eslint-disable */
/* eslint-enable */
/* istanbul ignore next */
/* jscs:enable */
/* jshint asi:true */
/* global foo */
/* globals foo */
/* exported myVar */
// eslint-disable-line
// eslint-disable-next-line
// https://github.com

```

#### `"never"`

Using the `"never"` option means that this rule will report any comments which start with an uppercase letter.

`"never"` 选项意味着该规则将报告任何以大写字母开始的注释。

Examples of **incorrect** code with the `"never"` option:

选项 `"never"` 的 **错误** 代码示例：

```js
/* eslint capitalized-comments: ["error", "never"] */

// Capitalized comment

```

Examples of **correct** code with the `"never"` option:

选项 `"never"` 的 **正确** 代码示例：

```js
/* eslint capitalized-comments: ["error", "never"] */

// lowercase comment

// 1. Non-letter at beginning of comment

// 丈 Non-Latin character at beginning of comment

```

#### `ignorePattern`

The `ignorePattern` object takes a string value, which is used as a regular expression applied to the first word of a comment.

`ignorePattern` 值为字符串，该字符串作为一个正则表达式应用到注释的第一个字母。

Examples of **correct** code with the `"ignorePattern"` option set to `"pragma"`:

选项 `{ "ignorePattern": "pragma" }` 的 **正确** 代码示例：

```js
/* eslint capitalized-comments: ["error", "always", { "ignorePattern": "pragma" }] */

function foo() {
    /* pragma wrap(true) */
}

```

#### `ignoreInlineComments`

Setting the `ignoreInlineComments` option to `true` means that comments in the middle of code (with a token on the same line as the beginning of the comment, and another token on the same line as the end of the comment) will not be reported by this rule.

设置选项 `ignoreInlineComments` 为 `true` 意味着该规则不会报告代码中的注释（在同一行中，一个标记作为注释的开始，另一个标记作为注释的结尾）。

Examples of **correct** code with the `"ignoreInlineComments"` option set to `true`:

选项 `{ "ignoreInlineComments": true }` 的 **正确** 代码示例：

```js
/* eslint capitalized-comments: ["error", "always", { "ignoreInlineComments": true }] */

function foo(/* ignored */ a) {
}

```

#### `ignoreConsecutiveComments`

If the `ignoreConsecutiveComments` option is set to `true`, then comments which otherwise violate the rule will not be reported as long as they immediately follow another comment. This can be applied more than once.

设置选项 `ignoreInlineComments` 为 `true`，违反此规则的注释将不会被报告，只要该注释紧随另一个注释。可以被应用多次。

Examples of **correct** code with `ignoreConsecutiveComments` set to `true`:

选项 `{ "ignoreConsecutiveComments": true }` 的 **正确** 代码示例：

```js
/* eslint capitalized-comments: ["error", "always", { "ignoreConsecutiveComments": true }] */

// This comment is valid since it has the correct capitalization.
// this comment is ignored since it follows another comment,
// and this one as well because it follows yet another comment.

/* Here is a block comment which has the correct capitalization, */
/* but this one is ignored due to being consecutive; */
/*
 * in fact, even if any of these are multi-line, that is fine too.
 */
```

Examples of **incorrect** code with `ignoreConsecutiveComments` set to `true`:

选项 `{ "ignoreConsecutiveComments": true }` 的 **错误** 代码示例：

```js
/* eslint capitalized-comments: ["error", "always", { "ignoreConsecutiveComments": true }] */

// this comment is invalid, but only on this line.
// this comment does NOT get reported, since it is a consecutive comment.
```

### Using Different Options for Line and Block Comments

If you wish to have a different configuration for line comments and block comments, you can do so by using two different object configurations (note that the capitalization option will be enforced consistently for line and block comments):

如果你想对行注释和块注释进行不同的配置，你可以用两个不同的配置对象（注意，对行注释和块注释，将强制使用一致的大写选项）：

```json
{
    "capitalized-comments": [
        "error",
        "always",
        {
            "line": {
                "ignorePattern": "pragma|ignored",
            },
            "block": {
                "ignoreInlineComments": true,
                "ignorePattern": "ignored"
            }
        }
    ]
}
```

Examples of **incorrect** code with different line and block comment configuration:

不同的行和块注释配置的 **错误** 代码示例：

```js
/* eslint capitalized-comments: ["error", "always", { "block": { "ignorePattern": "blockignore" } }] */

// capitalized line comment, this is incorrect, blockignore does not help here
/* lowercased block comment, this is incorrect too */

```

Examples of **correct** code with different line and block comment configuration:

不同的行和块注释配置的 **正确** 代码示例：

```js
/* eslint capitalized-comments: ["error", "always", { "block": { "ignorePattern": "blockignore" } }] */

// Uppercase line comment, this is correct
/* blockignore lowercase block comment, this is correct due to ignorePattern */

```

## When Not To Use It

This rule can be disabled if you do not care about the grammatical style of comments in your codebase.

如果你不关心代码库中注释的语法风格，你可以禁用此规则。

## Compatibility

* **JSCS**: [requireCapitalizedComments](https://jscs-dev.github.io/rule/requireCapitalizedComments)
* **JSCS**: [disallowCapitalizedComments](https://jscs-dev.github.io/rule/disallowCapitalizedComments)

## Version

This rule was introduced in ESLint 3.11.0.

该规则在 ESLint 3.11.0 中被引入。

## Resources

* [Rule source](https://github.com/eslint/eslint/tree/master/lib/rules/capitalized-comments.js)
* [Documentation source](https://github.com/eslint/eslint/tree/master/docs/rules/capitalized-comments.md)
