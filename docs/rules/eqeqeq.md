---
title: eqeqeq - Rules
layout: doc
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# Require === and !== (eqeqeq)

# 要求使用 === 和 !== (eqeqeq)

(fixable) The `--fix` option on the [command line](../user-guide/command-line-interface#fix) can automatically fix some of the problems reported by this rule.

(fixable) [命令行](../user-guide/command-line-interface#fix)中的 `--fix` 选项可以自动修复一些该规则报告的问题。

It is considered good practice to use the type-safe equality operators `===` and `!==` instead of their regular counterparts `==` and `!=`.

使用类型安全的 `===` 和 `!==` 操作符代替 `==` 和 `!=` 操作符是一个很好的实践。

The reason for this is that `==` and `!=` do type coercion which follows the rather obscure [Abstract Equality Comparison Algorithm](https://www.ecma-international.org/ecma-262/5.1/#sec-11.9.3).
For instance, the following statements are all considered `true`:

这样做的原因是，`==` 和 `!=` 遵循 [Abstract Equality Comparison Algorithm](https://www.ecma-international.org/ecma-262/5.1/#sec-11.9.3) 作强制转型。例如，以下语句被认为是 `true`。

* `[] == false`
* `[] == false`
* `[] == ![]`
* `[] == ![]`
* `3 == "03"`
* `3 == "03"`

If one of those occurs in an innocent-looking statement such as `a == b` the actual problem is very difficult to spot.

如果它们中的任何一个出现在一个看上去无害的语句中，比如 `a == b` ，那么实际的问题是很难被发现的。

## Rule Details

This rule is aimed at eliminating the type-unsafe equality operators.

该规则旨在消除非类型安全的相等操作符。

Examples of **incorrect** code for this rule:

**错误** 代码示例：

```js
/*eslint eqeqeq: "error"*/

if (x == 42) { }

if ("" == text) { }

if (obj.getStuff() != undefined) { }
```

The `--fix` option on the command line automatically fixes some problems reported by this rule. A problem is only fixed if one of the operands is a `typeof` expression, or if both operands are literals with the same type.

[命令行](../user-guide/command-line-interface#fix)中的 `--fix` 选项可以自动修复该规则报告的一些问题。该规则唯一问题是只修复操作数之一是 `typeof` 表达式的或操作数是相同类型的字面量。

## Options

### always

The `"always"` option (default) enforces the use of `===` and `!==` in every situation (except when you opt-in to more specific handling of `null` [see below]).

选项 `"always"`（默认）强制在任何情况下都使用 `===` 和 `!==` （除非你选择对 `null` 有更具体的处理[见下文]）。

Examples of **incorrect** code for the `"always"` option:

选项 `"always"` 的 **错误** 代码示例：

```js
/*eslint eqeqeq: ["error", "always"]*/

a == b
foo == true
bananas != 1
value == undefined
typeof foo == 'undefined'
'hello' != 'world'
0 == 0
true == true
foo == null

```

Examples of **correct** code for the `"always"` option:

选项 `"always"` 的 **正确** 代码示例：

```js
/*eslint eqeqeq: ["error", "always"]*/

a === b
foo === true
bananas !== 1
value === undefined
typeof foo === 'undefined'
'hello' !== 'world'
0 === 0
true === true
foo === null

```

This rule optionally takes a second argument, which should be an object with the following supported properties:

该规则可以有第二个参数，是个对象，支持以下属性：

* `"null"`: Customize how this rule treats `null` literals. Possible values:
* `"null"`: 自定义如何对待 `null` 字面量。可能的值：
    * `always` (default) - Always use === or !==.
    * `always` (默认) - 总是使用 === 或 !==.
    * `never` - Never use === or !== with `null`.
    * `never` - 从不和 `null` 一起使用 === 或 !==。
    * `ignore` - Do not apply this rule to `null`.
    * `ignore` - 不要对 `null` 应用此规则。

### smart

The `"smart"` option enforces the use of `===` and `!==` except for these cases:

选项 `"smart"` 除了以下这些情况外，强制使用 `===` 和 `!==`：

* Comparing two literal values
* 比较两个字面量的值
* Evaluating the value of `typeof`
* 比较 `typeof` 的值
* Comparing against `null`
* 与 `null` 进行比较

Examples of **incorrect** code for the `"smart"` option:

选项 `"always"` 的 **错误** 代码示例：

```js
/*eslint eqeqeq: ["error", "smart"]*/

// comparing two variables requires ===
a == b

// only one side is a literal
foo == true
bananas != 1

// comparing to undefined requires ===
value == undefined
```

Examples of **correct** code for the `"smart"` option:

选项 `"smart"` 的 **正确** 代码示例：

```js
/*eslint eqeqeq: ["error", "smart"]*/

typeof foo == 'undefined'
'hello' != 'world'
0 == 0
true == true
foo == null
```

### allow-null

**Deprecated:** Instead of using this option use "always" and pass a "null" option property with value "ignore". This will tell ESLint to always enforce strict equality except when comparing with the `null` literal.

**弃用：** 使用 "always"，然后传一个 "null" 选项，属性值为 "ignore" 代替。这将告诉 ESLint 除了与 `null` 字面量进行比较时，总是强制使用绝对相等。

```js
["error", "always", {"null": "ignore"}]
```

## When Not To Use It

If you don't want to enforce a style for using equality operators, then it's safe to disable this rule.

如果你不想强制使用相等操作符，可以禁用此规则。

## Version

This rule was introduced in ESLint 0.0.2.

该规则在 ESLint 0.0.2 中被引入。

## Resources

* [Rule source](https://github.com/eslint/eslint/tree/master/lib/rules/eqeqeq.js)
* [Documentation source](https://github.com/eslint/eslint/tree/master/docs/rules/eqeqeq.md)
