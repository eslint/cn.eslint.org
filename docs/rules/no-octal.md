---
title: Rule no-octal
layout: doc
translator: fengnana
proofreader: yanggao40
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# Disallow Octal Literals (no-octal)

# 禁用八进制字面量 (no-octal)

Octal literals are numerals that begin with a leading zero, such as:

八进制自面量是指那些以 0 开始的数字，比如：

```js
var num = 071;      // 57
```

The leading zero to identify an octal literal has been a source of confusion and error in JavaScript. ECMAScript 5 deprecates the use of octal numeric literals in JavaScript and octal literals cause syntax errors in strict mode.

在 JavaScript 中，前导数字 0 来识别八进制字面量已经成为困惑和错误。ECMAScript 5 弃用了在 JavaScript 中使用八进制字面量，并且八进制字面量在严格模式下会导致语法错误。

It's therefore recommended to avoid using octal literals in JavaScript code.

因此建议避免在 JavaScript 代码中使用八进制字面量。

## Rule Details

The rule is aimed at preventing the use of a deprecated JavaScript feature, the use of octal literals. As such it will warn whenever an octal literal is found.

此规则目旨在防止使用弃用的 JavaScript 特性，使用八进制字面量。因此当发现八进制字面量时会发出警告。

Examples of **incorrect** code for this rule:

**错误**代码示例：

```js
/*eslint no-octal: "error"*/

var num = 071;
var result = 5 + 07;
```

Examples of **correct** code for this rule:

**正确**代码示例：

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

此规则在 ESLint 0.0.6 中被引入。

## Resources

* [Rule source](https://github.com/eslint/eslint/tree/master/lib/rules/no-octal.js)
* [Documentation source](https://github.com/eslint/eslint/tree/master/docs/rules/no-octal.md)
