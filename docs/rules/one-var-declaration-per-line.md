---
title: one-var-declaration-per-line - Rules
layout: doc
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# require or disallow newlines around variable declarations (one-var-declaration-per-line)

# 要求或禁止在变量声明周围换行 (one-var-declaration-per-line)

(fixable) The `--fix` option on the [command line](../user-guide/command-line-interface#fix) automatically fixes problems reported by this rule.

(fixable) [命令行](../user-guide/command-line-interface#fix)中的 `--fix` 选项可以自动修复该规则报告的问题。

Some developers declare multiple var statements on the same line:

一些开发者在同一行上声明多个变量：

```js
var foo, bar, baz;
```

Others prefer to declare one var per line.

另一些人更喜欢声明每个变量单独成行。

```js
var foo,
    bar,
    baz;
```

Keeping to one of these styles across a project's codebase can help with maintaining code consistency.

在整个项目中保持使用一种风格有利于保持代码一致性。

## Rule Details

This rule enforces a consistent newlines around variable declarations. This rule ignores variable declarations inside `for` loop conditionals.

该规则强制变量声明使用一致的的换行。该规则忽略 `for` 循环语句中的变量声明。

## Options

This rule has a single string option:

该规则有一个字符串选项，可以是：

* `"initializations"` (default) enforces a newline around variable initializations
* `"initializations"` (默认) 强制每个变量初始化语句换行
* `"always"` enforces a newline around variable declarations
* `"always"` 强制每个变量声明都换行

### initializations

Examples of **incorrect** code for this rule with the default `"initializations"` option:

默认选项 `"initializations"` 的 **错误** 代码示例：

```js
/*eslint one-var-declaration-per-line: ["error", "initializations"]*/
/*eslint-env es6*/

var a, b, c = 0;

let a,
    b = 0, c;
```

Examples of **correct** code for this rule with the default `"initializations"` option:

默认选项 `"initializations"` 的 **正确** 代码示例：

```js
/*eslint one-var-declaration-per-line: ["error", "initializations"]*/
/*eslint-env es6*/

var a, b;

let a,
    b;

let a,
    b = 0;
```

### always

Examples of **incorrect** code for this rule with the `"always"` option:

选项 `"always"` 的 **错误** 代码示例：

```js
/*eslint one-var-declaration-per-line: ["error", "always"]*/
/*eslint-env es6*/

var a, b;

let a, b = 0;

const a = 0, b = 0;
```

Examples of **correct** code for this rule with the `"always"` option:

选项 `"always"` 的 **正确** 代码示例：

```js
/*eslint one-var-declaration-per-line: ["error", "always"]*/
/*eslint-env es6*/

var a,
    b;

let a,
    b = 0;
```

## Related Rules

* [one-var](one-var)

## Version

This rule was introduced in ESLint 2.0.0-beta.3.

该规则在 ESLint 2.0.0-beta.3 中被引入。

## Resources

* [Rule source](https://github.com/eslint/eslint/tree/master/lib/rules/one-var-declaration-per-line.js)
* [Documentation source](https://github.com/eslint/eslint/tree/master/docs/rules/one-var-declaration-per-line.md)
