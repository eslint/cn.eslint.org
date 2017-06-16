---
title: no-regex-spaces - Rules
layout: doc
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# disallow multiple spaces in regular expression literals (no-regex-spaces)

# 禁止正则表达式字面量中出现多个空格 (no-regex-spaces)

(recommended) The `"extends": "eslint:recommended"` property in a configuration file enables this rule.

(recommended) 配置文件中的 `"extends": "eslint:recommended"` 属性启用了此规则。

(fixable) The `--fix` option on the [command line](../user-guide/command-line-interface#fix) can automatically fix some of the problems reported by this rule.

(fixable) [命令行](../user-guide/command-line-interface#fix)中的 `--fix` 选项可以自动修复一些该规则报告的问题。

Regular expressions can be very complex and difficult to understand, which is why it's important to keep them as simple as possible in order to avoid mistakes. One of the more error-prone things you can do with a regular expression is to use more than one space, such as:

正则表达式可以很复杂和难以理解，这就是为什么要保持它们尽可能的简单，以避免出现错误。你在使用正则表达式时最容易出错的是使用了多个空格，例如：

```js
var re = /foo   bar/;
```

In this regular expression, it's very hard to tell how many spaces are intended to be matched. It's better to use only one space and then specify how many spaces are expected, such as:

在这个正则表达式中，很难断定想要匹配多少个空格。最好是只使用一个空格，然后指定需要多少个，例如：

```js
var re = /foo {3}bar/;
```

Now it is very clear that three spaces are expected to be matched.

现在非常清楚地知道需要匹配 3 个空格。

## Rule Details

This rule disallows multiple spaces in regular expression literals.

该规则禁止在正则表达式字面量中出现多个空格。

Examples of **incorrect** code for this rule:

**错误** 代码示例：

```js
/*eslint no-regex-spaces: "error"*/

var re = /foo   bar/;
var re = new RegExp("foo   bar");
```

Examples of **correct** code for this rule:

**正确** 代码示例：

```js
/*eslint no-regex-spaces: "error"*/

var re = /foo {3}bar/;
var re = new RegExp("foo {3}bar");
```

## When Not To Use It

If you want to allow multiple spaces in a regular expression, then you can safely turn this rule off.

如果你允许多个空格出现在正则表达式中，你可以关闭此规则。

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
