---
title: Rule no-shadow-restricted-names
layout: doc
translator: ILFront-End
proofreader: xkf521
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# Disallow Shadowing of Restricted Names (no-shadow-restricted-names)

# 关键字不能被遮蔽

ES5 §15.1.1 Value Properties of the Global Object (`NaN`, `Infinity`, `undefined`) as well as strict mode restricted identifiers `eval` and `arguments` are considered to be restricted names in JavaScript. Defining them to mean something else can have unintended consequences and confuse others reading the code. For example, there's nothing prevent you from writing:

ES5 §15.1.1中全局对象的属性值(`NaN`, `Infinity`, `undefined`)和严格模式下被限定的标识符`eval`，`arguments`也被认为是关键字。重定义关键字会产生意想不到的后果且易迷惑其他读者。比如：

```js
var undefined = "foo";
```

Then any code used within the same scope would not get the global `undefined`, but rather the local version with a very different meaning.

以上不能得到全局`undefined`，但在本作用域中却具有不同于全局的意思。

## Rule Details

Examples of **incorrect** code for this rule:

以下模式被认为是有问题的：

```js
/*eslint no-shadow-restricted-names: 2*/

function NaN(){}

!function(Infinity){};

var undefined;

try {} catch(eval){}
```

Examples of **correct** code for this rule:

以下模式被认为是没有问题的：

```js
/*eslint no-shadow-restricted-names: 2*/

var Object;

function f(a, b){}
```

## Further Reading

* [Annotated ES5 - §15.1.1](http://es5.github.io/#x15.1.1)
* [Annotated ES5 - Annex C](http://es5.github.io/#C)

## Related Rules

* [no-shadow](no-shadow)

## Version

This rule was introduced in ESLint 0.1.4.

此规则在ESLint 0.1.4中被引入。

## Resources

* [Rule source](https://github.com/eslint/eslint/tree/master/lib/rules/no-shadow-restricted-names.js)
* [Documentation source](https://github.com/eslint/eslint/tree/master/docs/rules/no-shadow-restricted-names.md)
