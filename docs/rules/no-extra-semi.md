---
title: Rule no-extra-semi
layout: doc
translator: ybbjegj
proofreader: molee1905
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# Disallow Extra Semicolons (no-extra-semi)

# 禁止冗余分号（no-extra-semi）

JavaScript will more or less let you put semicolons after any statement without complaining. Typos and misunderstandings about where semicolons are required can lead to extra semicolons that are unnecessary.

JavaScript中，任何语句后有无分号都不会出错。书写错误和对哪里需要有分号的误解会导致额外的不必要的分号出现。

**Fixable:** This rule is automatically fixable using the `--fix` flag on the command line.

**Fixable:** 在命令行中使用 `--fix` 标志可以进行自动修复。

## Rule Details

This rule is aimed at eliminating extra unnecessary semicolons. While not technically an error, extra semicolons can be a source of confusion when reading code.

该规则旨在消除冗余的分号。尽管不是技术错误,但冗余分号是阅读代码时困惑的根源

Examples of **incorrect** code for this rule:

**错误**代码示例：

```js
/*eslint no-extra-semi: 2*/

var x = 5;;

function foo() {
    // code
};

```

Examples of **correct** code for this rule:

**正确**代码示例：

```js
/*eslint no-extra-semi: 2*/

var x = 5;

var foo = function() {
    // code
};

```

## When Not To Use It

If you intentionally use extra semicolons then you can disable this rule.

如果你有意使用空语句，你可以禁用该规则。

## Related Rules

* [semi](semi)
* [semi-spacing](semi-spacing)

## Version

This rule was introduced in ESLint 0.0.9.

该规则是在 ESLint 0.0.9 中被引入的。

## Resources

* [Rule source](https://github.com/eslint/eslint/tree/master/lib/rules/no-extra-semi.js)
* [Documentation source](https://github.com/eslint/eslint/tree/master/docs/rules/no-extra-semi.md)
