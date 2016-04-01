---
title: Rule no-control-regex
layout: doc
translator: ybbjegj
proofreader: molee1905
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# Disallow Controls Characters in Regular Expressions (no-control-regex)

# 禁止在正则表达式中使用控制字符（no-control-regex）

Control characters are special, invisible characters in the ASCII range 0-31. These characters are rarely used in JavaScript strings so a regular expression containing these characters is most likely a mistake.

在ASCII中，0-31范围内的控制字符是特殊的不可视字符。这些字符很少被用在 JavaScript 字符串中，所以包含这些字符的正则表达式很有可能是错误的。

## Rule Details

This rule is aimed at ensuring all regular expressions don't use control characters.

该规则目的在于确保所有的正则表达式都不使用控制字符。

Examples of **incorrect** code for this rule:

以下模式被认为是有问题的：

```js
/*eslint no-control-regex: 2*/

var pattern1 = /\\x1f/;
var pattern2 = new RegExp("\x1f");
```

Examples of **correct** code for this rule:

以下模式不会引发警告：

```js
/*eslint no-control-regex: 2*/

var pattern1 = /\\x20/;
var pattern2 = new RegExp("\x20");
```

## When Not To Use It

If you need to use control character pattern matching, then you should turn this rule off.

如果你需要使用控制字符进行模式匹配，你应该关闭该规则。

## Related Rules

* [no-div-regex](no-div-regex)
* [no-regex-spaces](no-regex-spaces)

## Version

This rule was introduced in ESLint 0.1.0.

该规则在 ESLint 0.1.0 中被引入。

## Resources

* [Rule source](https://github.com/eslint/eslint/tree/master/lib/rules/no-control-regex.js)
* [Documentation source](https://github.com/eslint/eslint/tree/master/docs/rules/no-control-regex.md)
