---
title: Rule no-octal-escape
layout: doc
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# disallow octal escape sequences in string literals (no-octal-escape)

# 禁止在字符串字面量中使用八进制转义序列 (no-octal-escape)

As of the ECMAScript 5 specification, octal escape sequences in string literals are deprecated and should not be used. Unicode escape sequences should be used instead.

自 ECMAScript 规范第5版起，字符串字面量中的八进制转义序列已经被弃用，不应该被使用。应该使用 Unicode 转义序列。

```js
var foo = "Copyright \251";
```

## Rule Details

This rule disallows octal escape sequences in string literals.

该规则禁止在字符串字面量中使用八进制转义序列。

If ESLint parses code in strict mode, the parser (instead of this rule) reports the error.

如果 ESLint 是在严格模式下解析代码，解析器（而不是该规则）会报告错误。

Examples of **incorrect** code for this rule:

**错误** 代码示例：

```js
/*eslint no-octal-escape: "error"*/

var foo = "Copyright \251";
```

Examples of **correct** code for this rule:

**正确** 代码示例：

```js
/*eslint no-octal-escape: "error"*/

var foo = "Copyright \u00A9";   // unicode

var foo = "Copyright \xA9";     // hexadecimal
```

## Version

This rule was introduced in ESLint 0.0.9.

该规则在 ESLint 0.0.9 中被引入。

## Resources

* [Rule source](https://github.com/eslint/eslint/tree/master/lib/rules/no-octal-escape.js)
* [Documentation source](https://github.com/eslint/eslint/tree/master/docs/rules/no-octal-escape.md)
