---
title: Rule new-parens
layout: doc
translator: molee1905
proofreader: molee1905
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# Require Parens for Constructors (new-parens)

# 要求构造函数带括号 (new-parens)

JavaScript allows the omission of parentheses when invoking a function via the `new` keyword and the constructor has no arguments. However, some coders believe that omitting the parentheses is inconsistent with the rest of the language and thus makes code less clear.

在 Javascript 中，如果通过`new`关键调用一个函数而且它的构造函数不带参数，则可以省略后面圆括号。然而，一些程序员认为省略圆括号与整体不一致，从而使代码不清晰。

```js
var person = new Person;
```

## Rule Details

This rule is aimed at highlighting a lack of convention and increasing code clarity by requiring the use of parentheses when invoking a constructor via the `new` keyword. As such, it will warn when these parentheses are omitted.

该规则目的在于，当通过`new`关键字调用构造函数时，要求使用圆括号，以此提高代码的清晰度。因此，当圆括号省略时，该规则将发出警告。

The following patterns are considered problems:

以下模式被认为是有问题的：

```js
/*eslint new-parens: 2*/

var person = new Person;
```

The following patterns are not considered problems:

以下模被认为是没有问题的：

```js
/*eslint new-parens: 2*/

var person = new Person();
```

## Version

This rule was introduced in ESLint 0.0.6.

该规则在 ESLint 0.0.6 中被引入。

## Resources

* [Rule source](https://github.com/eslint/eslint/tree/master/lib/rules/new-parens.js)
* [Documentation source](https://github.com/eslint/eslint/tree/master/docs/rules/new-parens.md)
