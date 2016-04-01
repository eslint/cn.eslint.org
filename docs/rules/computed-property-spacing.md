---
title: Rule computed-property-spacing
layout: doc
translator: molee1905
proofreader: sunshiner
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# Disallow or enforce spaces inside of computed properties. (computed-property-spacing)

# 禁止或强制在计算属性中使用空格。(computed-property-spacing)

While formatting preferences are very personal, a number of style guides require
or disallow spaces between computed properties in the following situations:

当代码风格非常个人化的时候，一些代码风格规范开始对计算属性两边是否使用空格做出强制规定：

```js
/*eslint-env es6*/

// computed properties
var obj = { prop: "value" };
var a = "prop";
var x = obj[a];

// object literal computed properties (EcmaScript 6)
var a = "prop";
var obj = { [a]: "value" };
```

**Fixable:** This rule is automatically fixable using the `--fix` flag on the command line.

**Fixable:** 该规则可以通过`--fix`命令行进行自动修复。

## Rule Details

This rule aims to maintain consistency around the spacing inside of computed properties.

该规则旨在保持计算属性内空格的一致性。

It either requires or disallows spaces between the brackets and the values inside of them.
Brackets that are separated from the adjacent value by a new line are exempt from this rule.

它强制要求或禁止括号和其内部值之间的空格。括号内相邻的值出现折行的，不适用此规则。

## Options

There are two main options for the rule:

该规则有两个主要可选项：

* `"always"` enforces a space inside of computed properties

* `"always"` 强制在计算属性内使用空格

* `"never"` disallows spaces inside of computed properties (default)

* `"never"` 禁止在计算属性内使用空格 (默认)

Depending on your coding conventions, you can choose either option by specifying it in your configuration:

根据您的编码约定，您可以在您的配置中选择使用任一选项：

```json
"computed-property-spacing": [2, "never"]
```

### "never"

When `"never"` is set, the following patterns will give a warning:

当`"never"`被设置，以下模式将给出一个警告：

```js
/*eslint computed-property-spacing: [2, "never"]*/
/*eslint-env es6*/

obj[foo ]
obj[ 'foo']
var x = {[ b ]: a}
obj[foo[ bar ]]
```

The following patterns are considered correct:

以下模式被认为是正确的：

```js
/*eslint computed-property-spacing: [2, "never"]*/
/*eslint-env es6*/

obj[foo]
obj['foo']
var x = {[b]: a}
obj[foo[bar]]
```

### "always"

When `"always"` is used, the following patterns will give a warning:

当`"always"`被设置，以下模式将给出一个警告：

```js
/*eslint computed-property-spacing: [2, "always"]*/
/*eslint-env es6*/

obj[foo]
var x = {[b]: a}
obj[ foo]
obj[ foo ]
obj['foo' ]
obj[foo[ bar ]]
var x = {[ b]: a}
```

The following patterns are considered correct:

以下模式被认为是正确的：

```js
/*eslint computed-property-spacing: [2, "always"]*/
/*eslint-env es6*/

obj[ foo ]
obj[ 'foo' ]
var x = {[ b ]: a}
obj[ foo[ bar ] ]

```


## When Not To Use It

You can turn this rule off if you are not concerned with the consistency of computed properties.

如果你并不关注计算属性间距的一致性的话，关闭此规则即可。

## Related Rules

* [comma-spacing](comma-spacing)
* [space-in-parens](space-in-parens)
* [computed-property-spacing](computed-property-spacing)
* [space-in-brackets](space-in-brackets) (deprecated)

## Version

This rule was introduced in ESLint 0.23.0.

该规则在ESLint 0.23.0 被引入。

## Resources

* [Rule source](https://github.com/eslint/eslint/tree/master/lib/rules/computed-property-spacing.js)
* [Documentation source](https://github.com/eslint/eslint/tree/master/docs/rules/computed-property-spacing.md)
