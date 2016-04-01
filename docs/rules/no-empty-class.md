---
title: Rule no-empty-class
layout: doc
translator: yanggao40
proofreader: molee1905
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# Disallow Empty Character Classes (no-empty-class)

# 禁止空字符类 (no-empty-class)

**Replacement notice**: This rule was removed in ESLint v1.0 and replaced by the [no-empty-character-class](no-empty-character-class) rule.

**替换声明**:  该规则在 ESLint v1.0 中被移除，被[no-empty-character-class](no-empty-character-class)规则代替。

Empty character classes in regular expressions do not match anything and can result in code that may not work as intended.

在正则表达式中，空字符类不会匹配任何东西，并且可能会导致代码不会按照预期工作。

```js
var foo = /^abc[]/;
```

## Rule Details

This rule is aimed at highlighting possible typos and unexpected behavior in regular expressions which may arise from the use of empty character classes.

此规则目的在于高亮显示在正则表达式中由空字符类引起的可能的拼写错误和异常的行为。

The following patterns are considered problems:

下面的模式被认为有问题的：

```js
var foo = /^abc[]/;

/^abc[]/.test(foo);

bar.match(/^abc[]/);
```

The following patterns are not considered problems:

下面的模式被认为是没有问题的：

```js
var foo = /^abc/;

var foo = /^abc[a-z]/;

var bar = new RegExp("^abc[]");
```

## Version

This rule was introduced in ESLint 0.0.9 and removed in 1.0.0-rc-1.

该规则在 ESLint 0.0.9 中被引入，在 1.0.0-rc-1 中被移除。

## Resources

* [Documentation source](https://github.com/eslint/eslint/tree/master/docs/rules/no-empty-class.md)
