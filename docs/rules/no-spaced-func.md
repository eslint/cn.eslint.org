---
title: Rule no-spaced-func
layout: doc
translator: molee1905
proofreader: xkf521
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# Disallow Spaces in Function Calls (no-spaced-func)

# 禁止在函数调用时使用空格 (no-spaced-func)

(fixable) The --fix option on the [command line](../user-guide/command-line-interface#fix) automatically fixes problems reported by this rule.

(fixable)[command line](../user-guide/command-line-interface#fix)中的`--fix`选项可以自动修复该规则报告的问题。

While it's possible to have whitespace between the name of a function and the parentheses that execute it, such patterns tend to look more like errors.

虽然在函数名和执行它的圆括号之间有空格是合理的，但这种模式往往看起来更像错误。

## Rule Details

This rule does not allow gaps between the function identifier and application.

该规则不允许函数标识符和应用程序之间有间隔。

```js
fn ()
```

The following patterns are considered problems:

以下模式被认为是有问题的：

```js
/*eslint no-spaced-func: "error"*/

fn ()

fn
()
```

The following patterns are not considered problems:

以下模式被认为是没有问题的：

```js
/*eslint no-spaced-func: "error"*/

fn()
```

## Version

This rule was introduced in ESLint 0.1.2.

该规则在 ESLint 0.1.2 中被引入。

## Resources

* [Rule source](https://github.com/eslint/eslint/tree/master/lib/rules/no-spaced-func.js)
* [Documentation source](https://github.com/eslint/eslint/tree/master/docs/rules/no-spaced-func.md)
