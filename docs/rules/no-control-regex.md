---
title: Rule no-control-regex
layout: doc
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# disallow control characters in regular expressions (no-control-regex)

# 禁止在正则表达式中使用控制字符（no-control-regex）

Control characters are special, invisible characters in the ASCII range 0-31. These characters are rarely used in JavaScript strings so a regular expression containing these characters is most likely a mistake.

在 ASCII 中，0-31 范围内的控制字符是特殊的、不可见的字符。这些字符很少被用在 JavaScript 字符串中，所以一个正则表达式如果包含这些字符的，很有可能一个错误。

## Rule Details

This rule disallows control characters in regular expressions.

该规则禁止在正则表达式中出现控制字符。

Examples of **incorrect** code for this rule:

**错误** 代码示例：

```js
/*eslint no-control-regex: "error"*/

var pattern1 = /\x1f/;
var pattern2 = new RegExp("\x1f");
```

Examples of **correct** code for this rule:

**正确** 代码示例：

```js
/*eslint no-control-regex: "error"*/

var pattern1 = /\x20/;
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
