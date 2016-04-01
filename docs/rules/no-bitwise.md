---
title: Rule no-bitwise
layout: doc
translator: molee1905
proofreader: molee1905
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# Disallow Bitwise Operators (no-bitwise)

# 禁用按位操作符 (no-bitwise)

The use of bitwise operators in JavaScript is very rare and often `&` or `|` is simply a mistyped `&&` or `||`, which will lead to unexpected behavior.

在 Javascript 是很少使用按位操作符，`&` 或 `|`经常会错写为`&&` 或 `||`，这将导致意外的情况出现。

```js
var x = y | z;
```

## Rule Details

This rule is aimed at catching typos that end up as bitwise operators, but are meant to be the much more common `&&`, '||', `<`, `>` operators. As such, it will warn whenever it encounters a bitwise operator:

该规则旨在捕获原本打算使用更普通的`&&`, '||', `<`, `>`操作符，却错写为按位操作符这样的书写错误。因此，当遇到按位操作符时，该规则将发出警告。

The following patterns are considered problems:

以下模式被认为是有问题的：

```js
/*eslint no-bitwise: 2*/

var x = y | z;

var x = y & z;

var x = y ^ z;

var x = ~ z;

var x = y << z;

var x = y >> z;

var x = y >>> z;

x |= y;

x &= y;

x ^= y;

x <<= y;

x >>= y;

x >>>= y;
```

The following patterns are not considered problems:

以下模式被认为是没有问题的：

```js
/*eslint no-bitwise: 2*/

var x = y || z;

var x = y && z;

var x = y > z;

var x = y < z;

x += y;
```

## Options

This rule supports the following options:

该规则支持以下选项：

`allow`: The list of bitwise operators to be used as exceptions to the rule. For example:

`allow`: 允许使用的按位操作符列表。例如：

```js
/*eslint no-bitwise: [2, { allow: ["~"] }] */

~[1,2,3].indexOf(1) === -1;
```

`int32Hint`: Allows the use of bitwise OR in `|0` pattern for type casting:

`int32Hint`: 允许在`|0`模式中使用按位或进行类型转换：

```js
/*eslint no-bitwise: [2, { int32Hint: true }] */

var b = a|0;
```

## Version

This rule was introduced in ESLint 0.0.2.

该规则在 ESLint 0.0.2 中被引入。

## Resources

* [Rule source](https://github.com/eslint/eslint/tree/master/lib/rules/no-bitwise.js)
* [Documentation source](https://github.com/eslint/eslint/tree/master/docs/rules/no-bitwise.md)
