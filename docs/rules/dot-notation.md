---
title: Rule dot-notation
layout: doc
translator: fengnana
proofreader: molee1905
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# Require Dot Notation (dot-notation)

# 要求使用点号 (dot-notation)

In JavaScript, one can access properties using the dot notation (`foo.bar`) or square-bracket notation (`foo["bar"]`). However, the dot notation is often preferred because it is easier to read, less verbose, and works better with aggressive JavaScript minimizers.

在 JavaScript 中，可以使用点符号(`foo.bar`)或者方括号(`foo["bar"]`)来访问属性。然而，点括号通常是首选，因为他更加易读，简洁，也更适于 JavaScript 压缩。

```js
foo["bar"];
```

## Rule Details

This rule is aimed at maintaining code consistency and improving code readability by encouraging use of the dot notation style whenever possible. As such, it will warn when it encounters an unnecessary use of square-bracket notation.

该规则旨在维护代码的一致性，通过鼓励使用点号操作符来提供代码可读性。因此，当遇到不必要的方括号的使用，该规则将发出警告。

Examples of **incorrect** code for this rule:

**错误**代码示例：

```js
/*eslint dot-notation: "error"*/

var x = foo["bar"];
```

Examples of **correct** code for this rule:

**正确**代码示例：

```js
/*eslint dot-notation: "error"*/

var x = foo.bar;

var x = foo[bar];    // Property name is a variable, square-bracket notation required
```

## Options

This rule accepts a single options argument:

该规则值接受一个选项：

* Set the `allowKeywords` option to `false` (default is `true`) to follow ECMAScript version 3 compatible style, avoiding dot notation for reserved word properties.
* 为了兼容 ECMAScript 3，设置`allowKeywords`为`false`（默认为`true`），避免对属性是保留字的使用点号。
* Set the `allowPattern` option to a regular expression string to allow bracket notation for property names that match a pattern (by default, no pattern is tested).
* 将`allowPattern`设置为一个正则表达式字符串允许匹配这个模式的属性名使用括号。（默认情况下,没有匹配模式）。

### allowKeywords

Examples of **correct** code for the `{ "allowKeywords": false }` option:

`{ "allowKeywords": false }`选项的 **正确**代码示例：

```js
/*eslint dot-notation: ["error", { "allowKeywords": false }]*/

var foo = { "class": "CS 101" }
var x = foo["class"]; // Property name is a reserved word, square-bracket notation required
```

### allowPattern

For example, when preparing data to be sent to an external API, it is often required to use property names that include underscores. If the `camelcase` rule is in effect, these [snake case](http://en.wikipedia.org/wiki/Snake_case) properties would not be allowed. By providing an `allowPattern` to the `dot-notation` rule, these snake case properties can be accessed with bracket notation.

例如，当把准备的数据发送到外部接口时，经常要求使用包括下划线的属性名。如果启用了`camelcase`规则，这些[snake case](http://en.wikipedia.org/wiki/Snake_case)属性将不被允许使用。通过给`dot-notation`规则提供`allowPattern`选项，这些属性就可以使用括号来访问了。

Examples of **correct** code for the sample `{ "allowPattern": "^[a-z]+(_[a-z]+)+$" }` option:

`{ "allowPattern": "^[a-z]+(_[a-z]+)+$" }`选项的 **正确**代码示例：

```js
/*eslint camelcase: "error"*/
/*eslint dot-notation: ["error", { "allowPattern": "^[a-z]+(_[a-z]+)+$" }]*/

var data = {};
data.foo_bar = 42;

var data = {};
data["fooBar"] = 42;

var data = {};
data["foo_bar"] = 42; // no warning
```

## Version

This rule was introduced in ESLint 0.0.7.

此规则在 ESLint 0.0.7 中被引入

## Resources

* [Rule source](https://github.com/eslint/eslint/tree/master/lib/rules/dot-notation.js)
* [Documentation source](https://github.com/eslint/eslint/tree/master/docs/rules/dot-notation.md)
