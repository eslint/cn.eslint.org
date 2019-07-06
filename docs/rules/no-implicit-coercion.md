---
title: no-implicit-coercion - Rules
layout: doc
edit_link: https://github.com/eslint/eslint/edit/master/docs/rules/no-implicit-coercion.md
rule_type: suggestion
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# Disallow the type conversion with shorter notations. (no-implicit-coercion)

# 禁止使用较短的符号实现类型转换 (no-implicit-coercion)

(fixable) The `--fix` option on the [command line](../user-guide/command-line-interface#fixing-problems) can automatically fix some of the problems reported by this rule.

(fixable) [命令行](../user-guide/command-line-interface#fixing-problems)中的 `--fix` 选项可以自动修复一些该规则报告的问题。

In JavaScript, there are a lot of different ways to convert value types.
Some of them might be hard to read and understand.

在 JavaScript 中，有许多不同的方式进行类型转换。其中有些可能难于阅读和理解。

Such as:

例如：

```js
var b = !!foo;
var b = ~foo.indexOf(".");
var n = +foo;
var n = 1 * foo;
var s = "" + foo;
foo += ``;
```

Those can be replaced with the following code:

可以使用下面的代码替换:

```js
var b = Boolean(foo);
var b = foo.indexOf(".") !== -1;
var n = Number(foo);
var n = Number(foo);
var s = String(foo);
foo = String(foo);
```

## Rule Details

This rule is aimed to flag shorter notations for the type conversion, then suggest a more self-explanatory notation.

该规则目的是标记出使用较短的符号进行类型转换的情况，建议使用一个更明确的符号。

## Options

This rule has three main options and one override option to allow some coercions as required.

该规则有三个主要选项和一个覆盖选项，覆盖选项允许一些强制要求。

* `"boolean"` (`true` by default) - When this is `true`, this rule warns shorter type conversions for `boolean` type.
* `"boolean"`(默认是 `true`)－当为 `true` 时，规则会对简短的 `boolean` 类型转换发出警告。
* `"number"` (`true` by default) - When this is `true`, this rule warns shorter type conversions for `number` type.
* `"number"`(默认是 `true`)－当为 `true` 时，规则会对简短的 `number` 类型转换发出警告。
* `"string"` (`true` by default) - When this is `true`, this rule warns shorter type conversions for `string` type.
* `"string"`(默认是 `true`)－当为 `true` 时，规则会对简短的 `string` 类型转换发出警告。
* `"allow"` (`empty` by default) - Each entry in this array can be one of `~`, `!!`, `+` or `*` that are to be allowed.
* `"allow"` (默认是 `empty`) - 这个数组的每一项可以是 `~`、`!!`、`+` 或 `*`。

Note that operator `+` in `allow` list would allow `+foo` (number coercion) as well as `"" + foo` (string coercion).

注意，在 `allow` 列表中，操作符 `+` 同时允许 `+foo`（数字）和 `"" + foo` (字符串)

### boolean

Examples of **incorrect** code for the default `{ "boolean": true }` option:

默认选项 `{ "boolean": true }` 的 **错误** 代码示例：

```js
/*eslint no-implicit-coercion: "error"*/

var b = !!foo;
var b = ~foo.indexOf(".");
// bitwise not is incorrect only with `indexOf`/`lastIndexOf` method calling.
```

Examples of **correct** code for the default `{ "boolean": true }` option:

默认选项 `{ "boolean": true }` 的 **正确** 代码示例：

```js
/*eslint no-implicit-coercion: "error"*/

var b = Boolean(foo);
var b = foo.indexOf(".") !== -1;

var n = ~foo; // This is a just bitwise not.
```

### number

Examples of **incorrect** code for the default `{ "number": true }` option:

默认选项 `{ "number": true }` 的 **错误** 代码示例：

```js
/*eslint no-implicit-coercion: "error"*/

var n = +foo;
var n = 1 * foo;
```

Examples of **correct** code for the default `{ "number": true }` option:

默认选项 `{ "number": true }` 的 **正确** 代码示例：

```js
/*eslint no-implicit-coercion: "error"*/

var n = Number(foo);
var n = parseFloat(foo);
var n = parseInt(foo, 10);
```

### string

Examples of **incorrect** code for the default `{ "string": true }` option:

默认选项 `{ "string": true }` 的 **错误** 代码示例：

```js
/*eslint no-implicit-coercion: "error"*/

var s = "" + foo;
var s = `` + foo;
foo += "";
foo += ``;
```

Examples of **correct** code for the default `{ "string": true }` option:

默认选项 `{ "string": true }` 的 **正确** 代码示例：

```js
/*eslint no-implicit-coercion: "error"*/

var s = String(foo);
foo = String(foo);
```

### allow

Using `allow` list, we can override and allow specific operators.

使用 `allow` 列表，我们可以覆盖和允许特定的操作符。

Examples of **correct** code for the sample `{ "allow": ["!!", "~"] }` option:

默认选项 `{ "allow": ["!!", "~"] }` 的 **正确** 代码示例：

```js
/*eslint no-implicit-coercion: [2, { "allow": ["!!", "~"] } ]*/

var b = !!foo;
var b = ~foo.indexOf(".");
```

## When Not To Use It

If you don't want to be notified about shorter notations for the type conversion, you can safely disable this rule.

如果你不想收到关于使用较短符号进行类型转换的通知，可以禁用此规则。

## Version

This rule was introduced in ESLint 1.0.0-rc-2.

该规则在 ESLint 1.0.0-rc-2 中被引入。

## Resources

* [Rule source](https://github.com/eslint/eslint/tree/master/lib/rules/no-implicit-coercion.js)
* [Documentation source](https://github.com/eslint/eslint/tree/master/docs/rules/no-implicit-coercion.md)
