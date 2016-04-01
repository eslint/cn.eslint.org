---
title: Rule no-div-regex
layout: doc
translator: fengnana
proofreader: molee1905
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# Disallow Regexs That Look Like Division (no-div-regex)

# 禁止使用看起来像除法的正则表达式 (no-div-regex)

Require regex literals to escape division operators.

要求正则表达式字面量避开除法操作符。

```js
function bar() { return /=foo/; }
```

## Rule Details

This is used to disambiguate the division operator to not confuse users.

此规则用来消除除法操作符的歧义。

The following patterns are considered problems:

以下模式被认为是有问题的：

```js
/*eslint no-div-regex: 2*/

function bar() { return /=foo/; }
```

The following patterns are not considered problems:

以下模式被认为是没有问题的：

```js
/*eslint no-div-regex: 2*/

function bar() { return /\=foo/; }
```

## Related Rules

* [no-control-regex](no-control-regex)
* [no-regex-spaces](no-regex-spaces)

## Version

This rule was introduced in ESLint 0.1.0.

该规则在 ESLint 0.1.0 中被引入。

## Resources

* [Rule source](https://github.com/eslint/eslint/tree/master/lib/rules/no-div-regex.js)
* [Documentation source](https://github.com/eslint/eslint/tree/master/docs/rules/no-div-regex.md)
