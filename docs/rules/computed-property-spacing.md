---
title: computed-property-spacing - Rules
layout: doc
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# Disallow or enforce spaces inside of computed properties (computed-property-spacing)

# 禁止或强制在计算属性中使用空格 (computed-property-spacing)

(fixable) The `--fix` option on the [command line](../user-guide/command-line-interface#fix) automatically fixes problems reported by this rule.

(fixable) [命令行](../user-guide/command-line-interface#fix)中的 `--fix` 选项可以自动修复该规则报告的问题。

While formatting preferences are very personal, a number of style guides require
or disallow spaces between computed properties in the following situations:

虽然代码风格纯属个人偏好，一些代码风格规范要求或禁止在以下情况的对计算属性内使用空格：

```js
/*eslint-env es6*/

var obj = { prop: "value" };
var a = "prop";
var x = obj[a]; // computed property in object member expression

var a = "prop";
var obj = {
  [a]: "value" // computed property key in object literal (ECMAScript 6)
};
```

## Rule Details

This rule enforces consistent spacing inside computed property brackets.

该规则旨在保持计算属性内空格的一致性。

It either requires or disallows spaces between the brackets and the values inside of them.
This rule does not apply to brackets that are separated from the adjacent value by a newline.

它要求或禁止括号和其内部值之间的空格。括号内相邻的值出现折行的情况，不适用于此规则。

## Options

This rule has a string option:

该规则有一个字符串选项：

* `"never"` (default) disallows spaces inside computed property brackets
* `"never"` (默认) 禁止在计算属性内使用空格
* `"always"` requires one or more spaces inside computed property brackets
* `"always"` 要求在计算属性内使用一个或多个空格

### never

Examples of **incorrect** code for this rule with the default `"never"` option:

默认选项 `"never"` 的 **错误** 代码示例：

```js
/*eslint computed-property-spacing: ["error", "never"]*/
/*eslint-env es6*/

obj[foo ]
obj[ 'foo']
var x = {[ b ]: a}
obj[foo[ bar ]]
```

Examples of **correct** code for this rule with the default `"never"` option:

默认选项 `"never"` 的 **正确** 代码示例：

```js
/*eslint computed-property-spacing: ["error", "never"]*/
/*eslint-env es6*/

obj[foo]
obj['foo']
var x = {[b]: a}
obj[foo[bar]]
```

### always

Examples of **incorrect** code for this rule with the `"always"` option:

选项 `"always"` 的 **错误** 代码示例：

```js
/*eslint computed-property-spacing: ["error", "always"]*/
/*eslint-env es6*/

obj[foo]
var x = {[b]: a}
obj[ foo]
obj['foo' ]
obj[foo[ bar ]]
var x = {[ b]: a}
```

Examples of **correct** code for this rule with the `"always"` option:

选项 `"always"` 的 **正确** 代码示例：

```js
/*eslint computed-property-spacing: ["error", "always"]*/
/*eslint-env es6*/

obj[ foo ]
obj[ 'foo' ]
var x = {[ b ]: a}
obj[ foo[ bar ] ]
```


## When Not To Use It

You can turn this rule off if you are not concerned with the consistency of computed properties.

如果你并不关注计算属性的一致性的话，关闭此规则即可。

## Related Rules

* [array-bracket-spacing](array-bracket-spacing)
* [comma-spacing](comma-spacing)
* [space-in-parens](space-in-parens)

## Version

This rule was introduced in ESLint 0.23.0.

该规则在 ESLint 0.23.0 被引入。

## Resources

* [Rule source](https://github.com/eslint/eslint/tree/master/lib/rules/computed-property-spacing.js)
* [Documentation source](https://github.com/eslint/eslint/tree/master/docs/rules/computed-property-spacing.md)
