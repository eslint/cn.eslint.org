---
title: Rule prefer-template
layout: doc
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# Suggest using template literals instead of string concatenation. (prefer-template)

# 建议使用模板而非字符串连接 (prefer-template)

In ES2015 (ES6), we can use template literals instead of string concatenation.

在 ES2015 (ES6) 中，我们可以使用模板而非字符串连接。

```js
var str = "Hello, " + name + "!";
```

```js
/*eslint-env es6*/

var str = `Hello, ${name}!`;
```

## Rule Details

This rule is aimed to flag usage of `+` operators with strings.

该规则旨在标记字符串间 `+` 操作符的使用。

The following patterns are considered problems:

以下模式被认为是有问题的：

```js
/*eslint prefer-template: "error"*/

var str = "Hello, " + name + "!";
var str = "Time: " + (12 * 60 * 60 * 1000);
```

The following patterns are not considered problems:

以下模式被认为是没有问题的：

```js
/*eslint prefer-template: "error"*/
/*eslint-env es6*/

var str = "Hello World!";
var str = `Hello, ${name}!`;
var str = `Time: ${12 * 60 * 60 * 1000}`;

// This is reported by `no-useless-concat`.
var str = "Hello, " + "World!";
```

## When Not To Use It

This rule should not be used in ES3/5 environments.

此规则不应在 ES3/5 环境中使用。

In ES2015 (ES6) or later, if you don't want to be notified about string concatenation, you can safely disable this rule.

在 ES2015 (ES6) 或以后的版本，如果你不希望收到关于字符串连接的通知，关闭此规则即可。

## Related Rules

* [quotes](quotes)

## Version

This rule was introduced in ESLint 1.2.0.

该规则在 ESLint 1.2.0 中被引入。

## Resources

* [Rule source](https://github.com/eslint/eslint/tree/master/lib/rules/prefer-template.js)
* [Documentation source](https://github.com/eslint/eslint/tree/master/docs/rules/prefer-template.md)
