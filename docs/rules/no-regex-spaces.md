---
title: Rule no-regex-spaces
layout: doc
translator: molee1905
proofreader: yanggao40
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# Disallow Spaces in Regular Expressions (no-regex-spaces)

# 禁止正则表达式中空格 (no-regex-spaces)

Regular expressions can be very complex and difficult to understand, which is why it's important to keep them as simple as possible in order to avoid mistakes. One of the more error-prone things you can do with a regular expression is to use more than one space, such as:

正则表达式可以很复杂和难以理解，这就是为什么要保持它们尽可能的简单，以避免错误。你在使用正则表达式时最容易出错的是使用了不止一个空格，例如：

```js
var re = /foo   bar/;
```

In this regular expression, it's very hard to tell how many spaces are intended to be matched. It's better to use only one space and then specify how many spaces are expected, such as:

在正则表达式中，很难断定想要匹配多少个空格。最好是只使用一个空格，然后指定需要多少个，例如：

```js
var re = /foo {3}bar/;
```

Now it is very clear that three spaces are expected to be matched.

现在非常清楚需要匹配3个空格。

## Rule Details

This rule aims to eliminate errors due to multiple spaces inside of a regular expression. As such, it warns whenever more than one space in a row is found inside of a regular expression literal.

该规则旨在消除由于正则表达式中多个空格造成的错误。因此，如果在正则表达式字面量中发现一行中不止有一个空格时，该规则将发出警告。

Examples of **incorrect** code for this rule:

**错误**代码示例：

```js
/*eslint no-regex-spaces: "error"*/

var re = /foo   bar/;
```

Examples of **correct** code for this rule:

**正确**代码示例：

```js
/*eslint no-regex-spaces: "error"*/

var re = /foo {3}bar/;

var re = new RegExp("foo   bar");
```

## When Not To Use It

If you want to allow multiple spaces in a regular expression, then you can safely turn this rule off.

如果你允许多个空格出现在正则表达式中，你可以安全地关闭此规则。

## Further Reading

* [Spaces are hard to count](http://jslinterrors.com/spaces-are-hard-to-count-use-a/)

## Related Rules

* [no-div-regex](no-div-regex)
* [no-control-regex](no-control-regex)

## Version

This rule was introduced in ESLint 0.4.0.

该规则在 ESLint 0.4.0 中被引入。

## Resources

* [Rule source](https://github.com/eslint/eslint/tree/master/lib/rules/no-regex-spaces.js)
* [Documentation source](https://github.com/eslint/eslint/tree/master/docs/rules/no-regex-spaces.md)
