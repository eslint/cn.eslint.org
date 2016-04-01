---
title: Rule no-octal-escape
layout: doc
translator: fengnana
proofreader: yanggao40
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# Disallow Octal Escapes (no-octal-escape)

# 禁止八进制转义 (no-octal-escape)

As of version 5 of the ECMAScript specification, octal escape sequences are a deprecated feature and should not be used. It is recommended that Unicode escapes be used instead.

自ECMAScript规范第5版起，八进制转义序列是弃用的特性并且不应该被使用。它被建议改为采用Unicode转义符。

```js
var foo = "Copyright \251";
```

## Rule Details

The rule is aimed at preventing the use of a deprecated JavaScript feature, the use of octal escape sequences. As such it will warn whenever an octal escape sequence is found in a string literal.

此规则旨在防止使用弃用的JavaScript特性，八进制转义序列的使用。因此每当在字符串中发现八进制转义序列时会发出警告。

The following patterns are considered problems:

以下模式被认为是有问题的：

```js
/*eslint no-octal-escape: 2*/

var foo = "Copyright \251";
```

The following patterns are not considered problems:

以下模式被认为是没有问题的：

```js
/*eslint no-octal-escape: 2*/

var foo = "Copyright \u00A9";   // unicode

var foo = "Copyright \xA9";     // hexadecimal
```

## Version

This rule was introduced in ESLint 0.0.9.

此规则在ESLint 0.0.9中被引入。

## Resources

* [Rule source](https://github.com/eslint/eslint/tree/master/lib/rules/no-octal-escape.js)
* [Documentation source](https://github.com/eslint/eslint/tree/master/docs/rules/no-octal-escape.md)
