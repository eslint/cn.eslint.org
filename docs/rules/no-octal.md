---
title: Rule no-octal
layout: doc
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# disallow octal literals (no-octal)

# 禁用八进制字面量 (no-octal)

Octal literals are numerals that begin with a leading zero, such as:

八进制自面量是指那些以 0 开始的数字，比如：

```js
var num = 071;      // 57
```

Because the leading zero which identifies an octal literal has been a source of confusion and error in JavaScript code, ECMAScript 5 deprecates the use of octal numeric literals.

在 JavaScript 代码中，八进制的前导数字零作为其标示一致是导致混淆和错误的来源，ECMAScript 5 已经弃用了八进制字面量。

## Rule Details

The rule disallows octal literals.

该规则禁用八进制字面量。

If ESLint parses code in strict mode, the parser (instead of this rule) reports the error.

如果 ESLint 是在严格模式下解析代码，解析器（而不是该规则）会报告错误。

Examples of **incorrect** code for this rule:

**错误** 代码示例：

```js
/*eslint no-octal: "error"*/

var num = 071;
var result = 5 + 07;
```

Examples of **correct** code for this rule:

**正确** 代码示例：

```js
/*eslint no-octal: "error"*/

var num  = "071";
```

## Compatibility

* **JSHint**: W115

## Further Reading

* [Octal literals not allowed in strict mode](http://jslinterrors.com/octal-literals-are-not-allowed-in-strict-mode)

## Version

This rule was introduced in ESLint 0.0.6.

该规则在 ESLint 0.0.6 中被引入。

## Resources

* [Rule source](https://github.com/eslint/eslint/tree/master/lib/rules/no-octal.js)
* [Documentation source](https://github.com/eslint/eslint/tree/master/docs/rules/no-octal.md)
