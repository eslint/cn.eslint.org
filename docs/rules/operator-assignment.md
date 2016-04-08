---
title: Rule operator-assignment
layout: doc
translator: molee1905
proofreader: molee1905
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# Operator Assignment Shorthand (operator-assignment)

# 简化赋值操作 (operator-assignment)

JavaScript provides shorthand operators that combine variable assignment and some simple mathematical operations. For example, `x = x + 4` can be shortened to `x += 4`. The supported shorthand forms are as follows:

Javascript 为变量赋值和一些简单的数学运算提供了速记运算符。例如，`x = x + 4`可以简化为`x += 4`。支持的简化形式如下：

```text
 Shorthand | Separate
-----------|------------
 x += y    | x = x + y
 x -= y    | x = x - y
 x *= y    | x = x * y
 x /= y    | x = x / y
 x %= y    | x = x % y
 x <<= y   | x = x << y
 x >>= y   | x = x >> y
 x >>>= y  | x = x >>> y
 x &= y    | x = x & y
 x ^= y    | x = x ^ y
 x |= y    | x = x | y
```

## Rule Details

This rule enforces use of the shorthand assignment operators by requiring them where possible or prohibiting them entirely.

该规则强制简化的赋值操作符在可能的地方的使用或完全禁止它们。

## Options

This rule has two options: `always` and `never`. The default is `always`.

该规则有两个可选项：`always` 和 `never`。默认是`always`。

### "always"

`"operator-assignment": ["error", "always"]`

This mode enforces use of operator assignment shorthand where possible.

该模式在任何可能的情况下强制使用简化的赋值操作符。

The following are examples of valid patterns:

以下示例为有效模式：

```js
/*eslint operator-assignment: ["error", "always"]*/

x = y;
x += y;
x = y * z;
x = (x * y) * z;
x[0] /= y;
x[foo()] = x[foo()] % 2;
x = y + x; // `+` is not always commutative (e.g. x = "abc")
```

The following patterns are considered problems and should be replaced by their shorthand equivalents:

以下模式被认为是有问题的，应该使用它们的简化版：

```js
/*eslint operator-assignment: ["error", "always"]*/

x = x + y;
x = y * x;
x[0] = x[0] / y;
x.y = x.y << z;
```

### "never"

`"operator-assignment": ["error", "never"]`

This mode warns on any use of operator assignment shorthand.

该模式对任何简化的赋值操作符的使用发出警告。

The following are examples of valid patterns:

以下示例为有效模式：

```js
/*eslint operator-assignment: ["error", "never"]*/

x = x + y;
x.y = x.y / a.b;
```

The following patterns are considered problems and should be written out fully without the shorthand assignments:

以下模式被认为是有问题的，不应该使用它们的简写：

```js
/*eslint operator-assignment: ["error", "never"]*/

x *= y;
x ^= (y + z) / foo();
```

## When Not To Use It

Use of operator assignment shorthand is a stylistic choice. Leaving this rule turned off would allow developers to choose which style is more readable on a case-by-case basis.

使用简化的赋值操作符是一个格式上的选择。关闭此规则将允许开发者在个案的基础上选择哪种风格更具可读性。

## Version

This rule was introduced in ESLint 0.10.0.

该规则在 ESLint 0.10.0 中被引入。

## Resources

* [Rule source](https://github.com/eslint/eslint/tree/master/lib/rules/operator-assignment.js)
* [Documentation source](https://github.com/eslint/eslint/tree/master/docs/rules/operator-assignment.md)
