---
title: space-infix-ops - Rules
layout: doc
edit_link: https://github.com/eslint/eslint/edit/master/docs/rules/space-infix-ops.md
rule_type: layout
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# require spacing around infix operators (space-infix-ops)

# 要求中缀操作符周围有空格 (space-infix-ops)

(fixable) The `--fix` option on the [command line](../user-guide/command-line-interface#fixing-problems) can automatically fix some of the problems reported by this rule.

(fixable) [命令行](../user-guide/command-line-interface#fixing-problems)中的 `--fix` 选项可以自动修复一些该规则报告的问题。

While formatting preferences are very personal, a number of style guides require spaces around operators, such as:

虽然格式化首选项都非常个人化，但大量的风格指南要求运算符周围有空格，例如：

```js
var sum = 1 + 2;
```

The proponents of these extra spaces believe it make the code easier to read and can more easily highlight potential errors, such as:

这些额外空格的支持者认为它将使代码易于阅读，可以更轻易地突出潜在的错误，例如：

```js
var sum = i+++2;
```

While this is valid JavaScript syntax, it is hard to determine what the author intended.

虽然这是有效的 JavaScript 语法，但很难确定作者的意图。

## Rule Details

This rule is aimed at ensuring there are spaces around infix operators.

此规则旨在确保中缀运算符周围有空格。

## Options

This rule accepts a single options argument with the following defaults:

该规则接收唯一一个可选项参数，具有以下默认值：

```json
"space-infix-ops": ["error", {"int32Hint": false}]
```

### `int32Hint`

Set the `int32Hint` option to `true` (default is `false`) to allow write `a|0` without space.

设置 `int32Hint` 选项为 `true` (默认 `false`) 允许 `a|0` 不带空格.

```js
var foo = bar|0; // `foo` is forced to be signed 32 bit integer
```

Examples of **incorrect** code for this rule:

**错误** 代码示例：

```js
/*eslint space-infix-ops: "error"*/
/*eslint-env es6*/

a+b

a+ b

a +b

a?b:c

const a={b:1};

var {a=0}=bar;

function foo(a=0) { }
```

Examples of **correct** code for this rule:

**正确** 代码示例：

```js
/*eslint space-infix-ops: "error"*/
/*eslint-env es6*/

a + b

a       + b

a ? b : c

const a = {b:1};

var {a = 0} = bar;

function foo(a = 0) { }
```

## When Not To Use It

You can turn this rule off if you are not concerned with the consistency of spacing around infix operators.

如果不关心中缀运算符前后间距的一致性，可以关闭此规则。

## Version

This rule was introduced in ESLint 0.2.0.

该规则在 ESLint 0.2.0 中被引入。

## Resources

* [Rule source](https://github.com/eslint/eslint/tree/master/lib/rules/space-infix-ops.js)
* [Documentation source](https://github.com/eslint/eslint/tree/master/docs/rules/space-infix-ops.md)
