---
title: Rule no-spaced-func
layout: doc
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# disallow spacing between `function` identifiers and their applications (no-spaced-func)

# 禁止 `function` 标识符和应用程序之间有空格。 (no-spaced-func)

(fixable) The `--fix` option on the [command line](../user-guide/command-line-interface#fix) automatically fixes problems reported by this rule.

(fixable) [命令行](../user-guide/command-line-interface#fix)中的 `--fix` 选项可以自动修复该规则报告的问题。

While it's possible to have whitespace between the name of a function and the parentheses that execute it, such patterns tend to look more like errors.

虽然在函数名和执行它的圆括号之间有空白是合理的，但这种模式往往看起来更像错误。

## Rule Details

This rule disallows spacing between function identifiers and their applications.

该规则禁止函数标识符和应用程序之间有空格隔。

Examples of **incorrect** code for this rule:

**错误** 代码示例：

```js
/*eslint no-spaced-func: "error"*/

fn ()

fn
()
```

Examples of **correct** code for this rule:

**正确** 代码示例：

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
