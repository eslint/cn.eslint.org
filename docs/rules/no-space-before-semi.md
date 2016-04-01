---
title: Rule no-space-before-semi
layout: doc
translator: yanggao40
proofreader: xkf521
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# Disallow Spaces Before Semicolon (no-space-before-semi)

# 禁止分号前空格 (no-space-before-semi)

**Replacement notice**: This rule was removed in ESLint v1.0 and replaced by the [semi-spacing](semi-spacing) rule.

**替换声明**: 该规则在 ESLint v1.0 中移除，被[semi-spacing](semi-spacing) 规则替代。

JavaScript allows for placing unnecessary spaces between an expression and the closing semicolon.

JavaScript 允许在表达式和结尾的分号间使用不必要的空格。

Space issues can also cause code to look inconsistent and harder to read.

但空格问题会导致代码看上去不一致并且难以阅读。

```js
var thing = function () {
  var test = 12 ;
}  ;
```

## Rule Details

This rule prevents the use of spaces before a semicolon in expressions.

该规则防止在表达式分号前使用空格。

The following patterns are considered problems:

下面的模式被认为是有问题的：

```js
var foo = "bar" ;

var foo = function() {} ;

var foo = function() {
} ;

var foo = 1 + 2 ;
```

The following patterns are not considered problems:

下面的模式认为是正确的：

```js
;(function(){}());

var foo = "bar";
```

## Related Rules

* [semi](semi)
* [no-extra-semi](no-extra-semi)

## Version

This rule was introduced in ESLint 0.4.3 and removed in 1.0.0-rc-1.

该规则在 ESLint 0.4.3 中引入，在 1.0.0-rc-1 中移除。

## Resources

* [Documentation source](https://github.com/eslint/eslint/tree/master/docs/rules/no-space-before-semi.md)
