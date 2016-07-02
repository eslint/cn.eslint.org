---
title: Rule quotes
layout: doc
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# Enforce Quote Style (quotes)

# 强制引号风格 (quotes)

(fixable) The `--fix` option on the [command line](../user-guide/command-line-interface#fix) automatically fixes problems reported by this rule.

(fixable) [命令行](../user-guide/command-line-interface#fix)中的 `--fix` 选项可以自动修复该规则报告的问题。

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

This rule is aimed at ensuring consistency of string quotes and as such will report a problem when an inconsistent style is found.

该规则旨在保证字符串引号的一致性，因此，如果发现不一致的风格，该规则将会报告问题。

The rule configuration takes up to two options:

该规则配置有两个可选项。

1. The first option is `"double"`, `"single"` or `"backtick"` for double-quotes, single-quotes or backticks respectively. The default is `"double"`.
1. 第一个选项是 `"double"`、`"single"` 或 `"backtick"`分别对应双引号，单引号或反勾号。默认是 `"double"`。
1. The second option takes two options:
1. 第二个选项有两个选项：
    1. `"avoidEscape"`: When using `"avoidEscape"`, this rule will not report a problem when a string is using single-quotes or double-quotes so long as the string contains a quote that would have to be escaped otherwise. For example, if you specify `"double"` and `"avoidEscape"`, the string `'He said, "hi!"'` is not considered a problem because using double quotes for that string would require escaping the double quotes inside of the string. This option is off by default.
    1. `"avoidEscape"`: 当使用 `"avoidEscape"` 时，如果一个字符串使用了单引号或双引号，只要这个字符串包含需要转义的引号，该规则就不会报告问题。例如，如果你指定`"double"` 和 `"avoid-escape"`，字符串 `'He said, "hi!"'` 不被认为是个问题，因为，该字符串使用双引号要求将该字符串内的双引号进行转义。该选项默认是关闭的。
    1. `"allowTemplateLiterals"`: when using `"allowTemplateLiterals"`, this rule will not report a problem when a string is using backticks and option one is either `"double"` or `"single"`.
    1. `"allowTemplateLiterals"`: 当使用 `"allowTemplateLiterals"`时，如果一字符串使用了反勾号，另一选项是 `"double"` 或 `"single"`，该规则就不会报告问题。

When using `"single"` or `"double"`, template literals that don't contain a substitution, don't contain a line break and aren't tagged templates, are flagged as problems, even with the `"avoidEscape"` option. However they are not problems when `"allowTemplateLiterals"` is used.

当使用 `"single"` 或 `"double"`，不包含一个替代文本、换行符和不被标记的模板的模板字面量，都被认为是问题，即使有 `"avoid-escape"` 选项。

Configuration looks like this:

配置看起来像这样：

```js
[2, "single", {"avoidEscape": true, "allowTemplateLiterals": true}]
```

**Deprecation notice**: The `avoid-escape` option is a deprecated syntax and you should use the object form instead.

The following patterns are considered problems:

以下模式被认为是有问题的：

```js
/*eslint quotes: ["error", "double"]*/

var single = 'single';
var unescaped = 'a string containing "double" quotes';
```

```js
/*eslint quotes: ["error", "single"]*/

var double = "double";
var unescaped = "a string containing 'single' quotes";
```

```js
/*eslint quotes: ["error", "double", {"avoidEscape": true}]*/

var single = 'single';
var single = `single`;
```

```js
/*eslint quotes: ["error", "single", {"avoidEscape": true}]*/

var double = "double";
var double = `double`;
```

```js
/*eslint quotes: ["error", "backtick"]*/

var single = 'single';
var double = "double";
var unescaped = 'a string containing `backticks`';
```

```js
/*eslint quotes: ["error", "backtick", {"avoidEscape": true}]*/

var single = 'single';
var double = "double";
```

The following patterns are not considered problems:

以下模式被认为是没有问题的：

```js
/*eslint quotes: ["error", "double"]*/
/*eslint-env es6*/

var double = "double";
var backtick = `back\ntick`;  // backticks are allowed due to newline
var backtick = tag`backtick`; // backticks are allowed due to tag
```

```js
/*eslint quotes: ["error", "single"]*/
/*eslint-env es6*/

var single = 'single';
var backtick = `back${x}tick`; // backticks are allowed due to substitution
```

```js
/*eslint quotes: ["error", "double", {"avoidEscape": true}]*/

var single = 'a string containing "double" quotes';
```

```js
/*eslint quotes: ["error", "single", {"avoidEscape": true}]*/

var double = "a string containing 'single' quotes";
```

```js
/*eslint quotes: ["error", "double", {"allowTemplateLiterals": true}]*/

var single = 'single';
var single = `single`;
```

```js
/*eslint quotes: ["error", "single", {"allowTemplateLiterals": true}]*/

var double = "double";
var double = `double`;
```

```js
/*eslint quotes: ["error", "backtick"]*/
/*eslint-env es6*/

var backtick = `backtick`;
```

```js
/*eslint quotes: ["error", "backtick", {"avoidEscape": true}]*/

var double = "a string containing `backtick` quotes"
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
