---
title: operator-assignment - Rules
layout: doc
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# require or disallow assignment operator shorthand where possible (operator-assignment)

# 要求或禁止尽可能地简化赋值操作 (operator-assignment)

(fixable) The `--fix` option on the [command line](../user-guide/command-line-interface#fix) can automatically fix some of the problems reported by this rule.

(fixable) [命令行](../user-guide/command-line-interface#fix)中的 `--fix` 选项可以自动修复一些该规则报告的问题。

JavaScript provides shorthand operators that combine variable assignment and some simple mathematical operations. For example, `x = x + 4` can be shortened to `x += 4`. The supported shorthand forms are as follows:

JavaScript 为变量赋值和一些简单的数学运算提供了速记运算符。例如，`x = x + 4` 可以简化为 `x += 4`。支持的简化形式如下：

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

This rule requires or disallows assignment operator shorthand where possible.

该规则要求或禁止尽可能地简化赋值操作

## Options

This rule has a single string option:

该规则有一个字符串选项：

* `"always"` (default)  requires assignment operator shorthand where possible
* `"always"` (默认)  要求尽可能地简化赋值操作
* `"never"` disallows assignment operator shorthand
* `"never"` 禁止简化赋值操作

### always

Examples of **incorrect** code for this rule with the default `"always"` option:

默认选项 `"always"` 的 **错误** 代码示例：

```js
/*eslint operator-assignment: ["error", "always"]*/

x = x + y;
x = y * x;
x[0] = x[0] / y;
x.y = x.y << z;
```

Examples of **correct** code for this rule with the default `"always"` option:

默认选项 `"always"` 的 **正确** 代码示例：

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

### never

Examples of **incorrect** code for this rule with the `"never"` option:

选项 `"never"` 的 **错误** 代码示例：

```js
/*eslint operator-assignment: ["error", "never"]*/

x *= y;
x ^= (y + z) / foo();
```

Examples of **correct** code for this rule with the `"never"` option:

选项 `"never"` 的 **正确** 代码示例：

```js
/*eslint operator-assignment: ["error", "never"]*/

x = x + y;
x.y = x.y / a.b;
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
