---
title: Rule eqeqeq
layout: doc
translator: fengnana
proofreader: molee1905
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# Require === and !== (eqeqeq)

# 要求使用 === 和 !== (eqeqeq)

It is considered good practice to use the type-safe equality operators `===` and `!==` instead of their regular counterparts `==` and `!=`.

使用类型安全的`===`和`!==`操作符代替`==`和`!=`操作符是一个很好的实践。

The reason for this is that `==` and `!=` do type coercion which follows the rather obscure [Abstract Equality Comparison Algorithm](http://www.ecma-international.org/ecma-262/5.1/#sec-11.9.3).
For instance, the following statements are all considered `true`:

这样做的原因是，`==` 和 `!=` 遵循[Abstract Equality Comparison Algorithm](http://www.ecma-international.org/ecma-262/5.1/#sec-11.9.3)作强制转型。例如，以下语句被认为是`true`。

* `[] == false`
* `[] == ![]`
* `3 == "03"`

If one of those occurs in an innocent-looking statement such as `a == b` the actual problem is very difficult to spot.

如果它们中的任何一个出现在一个看上去无害的语句中，比如`a == b`，那么实际的问题是很难被发现的。

## Rule Details

This rule is aimed at eliminating the type-unsafe equality operators.

该规则旨在消除非类型安全的相等操作符。

Examples of **incorrect** code for this rule:

**错误**代码示例：

```js
/*eslint eqeqeq: "error"*/

if (x == 42) { }

if ("" == text) { }

if (obj.getStuff() != undefined) { }
```

## Options

### smart

The `"smart"` option enforces the use of `===` and `!==` except for these cases:

该选项强制使用`===` 和 `!==`，以下情况除外：

* Comparing two literal values

* 比较两个字面量的值

* Evaluating the value of `typeof`

* 比较`typeof`的值

* Comparing against `null`

* 与`null`进行比较

Examples of **incorrect** code for the `"smart"` option:

`"smart"`选项的 **错误**代码示例：

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

`"smart"`选项的 **正确**代码示例：

```js
/*eslint eqeqeq: ["error", "smart"]*/

typeof foo == 'undefined'
'hello' != 'world'
0 == 0
true == true
foo == null
```

### allow-null

The `"allow-null"` option will enforce `===` and `!==` in your code with one exception - it permits comparing to `null` to check for `null` or `undefined` in a single expression.

该选项会强制要求在你的代码中使用`===` 和 `!==`，有一个例外，它允许`null`和`null`或者`undefined`在表达式中做比较。

Examples of **incorrect** code for the `"allow-null"` option:

`"allow-null"`选项的 **错误**代码示例：

```js
/*eslint eqeqeq: ["error", "allow-null"]*/

bananas != 1
typeof foo == 'undefined'
'hello' != 'world'
0 == 0
foo == undefined
```

Examples of **correct** code for the `"allow-null"` option:

`"allow-null"`选项的 **正确**代码示例：

```js
/*eslint eqeqeq: ["error", "allow-null"]*/

foo == null
```

## When Not To Use It

If you don't want to enforce a style for using equality operators, then it's safe to disable this rule.

如果你不想强制使用相等操作符，可以禁用此规则。

## Version

This rule was introduced in ESLint 0.0.2.

此规则在 ESLint 0.0.2 中被引入。

## Resources

* [Rule source](https://github.com/eslint/eslint/tree/master/lib/rules/eqeqeq.js)
* [Documentation source](https://github.com/eslint/eslint/tree/master/docs/rules/eqeqeq.md)
