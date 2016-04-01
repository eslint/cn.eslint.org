---
title: Rule quotes
layout: doc
translator: molee1905
proofreader: molee1905
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# Enforce Quote Style (quotes)

# 强制引号风格 (quotes)

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

**Fixable:** This rule is automatically fixable using the `--fix` flag on the command line.

**Fixable:** 该规则可以通过`--fix`命令行进行自动修复。

## Rule Details

This rule is aimed at ensuring consistency of string quotes and as such will report a problem when an inconsistent style is found.

该规则旨在保证字符串引号的一致性，因此，如果发现不一致的风格，该规则将会报告问题。

The rule configuration takes up to two options:

该规则配置有两个可选项。

1. The first option is `"double"`, `"single"` or `"backtick"` for double-quotes, single-quotes or backticks respectively. The default is `"double"`.

1. 第一个选项是`"double"`，`"single"` 或 `"backtick"`分别对应双引号，单引号或反勾号。默认是`"double"`。

2. The second option is the `"avoid-escape"` flag. When using `"avoid-escape"`, this rule will not report a problem when a string is using single-quotes or double-quotes so long as the string contains a quote that would have to be escaped otherwise. For example, if you specify `"double"` and `"avoid-escape"`, the string `'He said, "hi!"'` is not considered a problem because using double quotes for that string would require escaping the double quotes inside of the string. This option is off by default.

2. 第二个选项是`"avoid-escape"`。当使用`"avoid-escape"`时，如果一个字符串使用了单引号或双引号，只要这个字符串包含需要转义的引号，该规则就不会报告问题。例如，如果你指定`"double"` 和 `"avoid-escape"`，字符串`'He said, "hi!"'`不被认为是个问题，因为，该字符串使用双引号要求将该字符串内的双引号进行转义。该选项默认是关闭的。

When using `"single"` or `"double"`, template literals that don't contain a substitution, don't contain a line break and aren't tagged templates, are flagged as problems, even with the `"avoid-escape"` option.

当使用`"single"` 或 `"double"`，不包含一个替代文本、换行符和不被标记的模板的模板字面量，都被认为是问题，即使有`"avoid-escape"`选项。

Configuration looks like this:

配置看起来像这样：

```js
[2, "single", "avoid-escape"]
```

The following patterns are considered problems:

以下模式被认为是有问题的：

```js
/*eslint quotes: [2, "double"]*/

var single = 'single';
var unescaped = 'a string containing "double" quotes';
```

```js
/*eslint quotes: [2, "single"]*/

var double = "double";
var unescaped = "a string containing 'single' quotes";
```

```js
/*eslint quotes: [2, "double", "avoid-escape"]*/

var single = 'single';
var single = `single`;
```

```js
/*eslint quotes: [2, "single", "avoid-escape"]*/

var double = "double";
var double = `double`;
```

```js
/*eslint quotes: [2, "backtick"]*/

var single = 'single';
var double = "double";
var unescaped = 'a string containing `backticks`';
```

```js
/*eslint quotes: [2, "backtick", "avoid-escape"]*/

var single = 'single';
var double = "double";
```

The following patterns are not considered problems:

以下模式被认为是没有问题的：

```js
/*eslint quotes: [2, "double"]*/
/*eslint-env es6*/

var double = "double";
var backtick = `back\ntick`;  // backticks are allowed due to newline
var backtick = tag`backtick`; // backticks are allowed due to tag
```

```js
/*eslint quotes: [2, "single"]*/
/*eslint-env es6*/

var single = 'single';
var backtick = `back${x}tick`; // backticks are allowed due to substitution
```

```js
/*eslint quotes: [2, "double", "avoid-escape"]*/

var single = 'a string containing "double" quotes';
```

```js
/*eslint quotes: [2, "single", "avoid-escape"]*/

var double = "a string containing 'single' quotes";
```

```js
/*eslint quotes: [2, "backtick"]*/
/*eslint-env es6*/

var backtick = `backtick`;
```

```js
/*eslint quotes: [2, "backtick", "avoid-escape"]*/

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
