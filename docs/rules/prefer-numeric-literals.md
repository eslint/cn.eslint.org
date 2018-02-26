---
title: prefer-numeric-literals - Rules
layout: doc
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# disallow `parseInt()` and `Number.parseInt()` in favor of binary, octal, and hexadecimal literals (prefer-numeric-literals)

# 禁用 `parseInt()` 和 `Number.parseInt()`，使用二进制，八进制和十六进制字面量 (prefer-numeric-literals)

(fixable) The `--fix` option on the [command line](../user-guide/command-line-interface#fix) can automatically fix some of the problems reported by this rule.

（可修复的）`--fix` [命令行](../user-guide/command-line-interface#fix)选项可自动修复一些该规则反映的问题。

The `parseInt()` and `Number.parseInt()` functions can be used to turn binary, octal, and hexadecimal strings into integers. As binary, octal, and hexadecimal literals are supported in ES6, this rule encourages use of those numeric literals instead of `parseInt()` or `Number.parseInt()`.

`parseInt()` 和 `Number.parseInt()` 函数可用于将二进制，八进制和十六进制的字符串转为整数。由于 ES6 支持二进制，八进制，和十六进制字面量，所以该规则鼓励使用这些数字字面量而不是 `parseInt()`。

```js
0b111110111 === 503;
0o767 === 503;
```

## Rule Details

This rule disallows calls to `parseInt()` or `Number.parseInt()` if called with two arguments: a string; and a radix option of 2 (binary), 8 (octal), or 16 (hexadecimal).

该规则不允许调用有两个参数的 `parseInt()` 或 `Number.parseInt()`：一个字符串和一个2（进制），8（进制），或16（进制）的基数选项。

Examples of **incorrect** code for this rule:

**错误** 代码示例：

```js
/*eslint prefer-numeric-literals: "error"*/

parseInt("111110111", 2) === 503;
parseInt("767", 8) === 503;
parseInt("1F7", 16) === 503;
Number.parseInt("111110111", 2) === 503;
Number.parseInt("767", 8) === 503;
Number.parseInt("1F7", 16) === 503;
```

Examples of **correct** code for this rule:

**正确** 代码示例：

```js
/*eslint prefer-numeric-literals: "error"*/
/*eslint-env es6*/

parseInt(1);
parseInt(1, 3);
Number.parseInt(1);
Number.parseInt(1, 3);

0b111110111 === 503;
0o767 === 503;
0x1F7 === 503;

a[parseInt](1,2);

parseInt(foo);
parseInt(foo, 2);
Number.parseInt(foo);
Number.parseInt(foo, 2);
```

## When Not To Use It

If you want to allow use of `parseInt()` or `Number.parseInt()` for binary, octal, or hexadecimal integers, or if you are not using ES6 (because binary and octal literals are not supported in ES5 and below), you may wish to disable this rule.

如果你想允许使用 `parseInt()` 或 `Number.parseInt()` 处理二进制，八进制，或十六进制整数。如果你不使用 ES6 （因为 ES5 及以下版本不支持二进制和八进制字面量）可以不启用该规则。

## Compatibility

* **JSCS**: [requireNumericLiterals](http://jscs.info/rule/requireNumericLiterals)

## Version

This rule was introduced in ESLint 3.5.0.

该规则在 ESLint 3.5.0 中被引入。

## Resources

* [Rule source](https://github.com/eslint/eslint/tree/master/lib/rules/prefer-numeric-literals.js)
* [Documentation source](https://github.com/eslint/eslint/tree/master/docs/rules/prefer-numeric-literals.md)
