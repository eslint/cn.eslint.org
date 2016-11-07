---
title: no-bitwise - Rules
layout: doc
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# disallow bitwise operators (no-bitwise)

# 禁止使用按位操作符 (no-bitwise)

The use of bitwise operators in JavaScript is very rare and often `&` or `|` is simply a mistyped `&&` or `||`, which will lead to unexpected behavior.

在 JavaScript 是很少使用按位操作符，`&` 或 `|` 经常会错写为 `&&` 或 `||`，这将导致意外的情况出现。

```js
var x = y | z;
```

## Rule Details

This rule disallows bitwise operators.

该规则禁止使用按位操作符。

Examples of **incorrect** code for this rule:

**错误** 代码示例：

```js
/*eslint no-bitwise: "error"*/

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

Examples of **correct** code for this rule:

**正确** 代码示例：

```js
/*eslint no-bitwise: "error"*/

var x = y || z;

var x = y && z;

var x = y > z;

var x = y < z;

x += y;
```

## Options

This rule has an object option:

该规则有一个对象选项：

* `"allow"`: Allows a list of bitwise operators to be used as exceptions.
* `"allow"`: 允许作为例外情况出现的按位操作符列表。
* `"int32Hint"`: Allows the use of bitwise OR in `|0` pattern for type casting.
* `"int32Hint"`: 预习使用在 `|0` 模式中按位或进行类型转换。

### allow

Examples of **correct** code for this rule with the `{ "allow": ["~"] }` option:

选项 `{ "allow": ["~"] }` 的 **正确** 代码示例：

```js
/*eslint no-bitwise: ["error", { "allow": ["~"] }] */

~[1,2,3].indexOf(1) === -1;
```

### int32Hint

Examples of **correct** code for this rule with the `{ "int32Hint": true }` option:

选项 `{ "int32Hint": true }` 的 **正确** 代码示例：

```js
/*eslint no-bitwise: ["error", { "int32Hint": true }] */

var b = a|0;
```

## Version

This rule was introduced in ESLint 0.0.2.

该规则在 ESLint 0.0.2 中被引入。

## Resources

* [Rule source](https://github.com/eslint/eslint/tree/master/lib/rules/no-bitwise.js)
* [Documentation source](https://github.com/eslint/eslint/tree/master/docs/rules/no-bitwise.md)
