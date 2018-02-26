---
title: no-multi-assign - Rules
layout: doc
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# Disallow Use of Chained Assignment Expressions (no-multi-assign)

# 禁止连续赋值 (no-multi-assign)

Chaining the assignment of variables can lead to unexpected results and be difficult to read.

对变量连续赋值可能会导致意想不到的结果，而且难以阅读。

```js
a = b = c = d;
```

## Rule Details

This rule disallows using multiple assignments within a single statement.

该规则禁止在单行语句中使用多个赋值。

Examples of **incorrect** code for this rule:

**错误** 代码示例：

```js
/*eslint no-multi-assign: "error"*/

var a = b = c = 5;

var foo = bar = "baz";

var a =
    b =
    c;
```

Examples of **correct** code for this rule:

**正确** 代码示例：

```js
/*eslint no-multi-assign: "error"*/
var a = 5;
var b = 5;
var c = 5;

var foo = "baz";
var bar = "baz";

var a = c;
var b = c;
```

## Related Rules

* [max-statements-per-line](max-statements-per-line)

## Version

This rule was introduced in ESLint 3.14.0.

该规则在 ESLint 3.14.0 中被引入。

## Resources

* [Rule source](https://github.com/eslint/eslint/tree/master/lib/rules/no-multi-assign.js)
* [Documentation source](https://github.com/eslint/eslint/tree/master/docs/rules/no-multi-assign.md)
