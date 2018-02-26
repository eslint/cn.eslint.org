---
title: no-delete-var - Rules
layout: doc
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# disallow deleting variables (no-delete-var)

# 禁止删除变量 (no-delete-var)

(recommended) The `"extends": "eslint:recommended"` property in a configuration file enables this rule.

(recommended) 配置文件中的 `"extends": "eslint:recommended"` 属性启用了此规则。

The purpose of the `delete` operator is to remove a property from an object. Using the `delete` operator on a variable might lead to unexpected behavior.

`delete` 的目的是删除对象的属性。使用 `delete` 操作删除一个变量可能会导致意外情况发生。

## Rule Details

This rule disallows the use of the `delete` operator on variables.

该规则禁止对变量使用 `delete` 操作符。

If ESLint parses code in strict mode, the parser (instead of this rule) reports the error.

如果 ESLint 是在严格模式下解析代码，解析器（而不是该规则）会报告错误。

Examples of **incorrect** code for this rule:

**错误** 代码示例：

```js
/*eslint no-delete-var: "error"*/

var x;
delete x;
```

## Version

This rule was introduced in ESLint 0.0.9.

该规则在 ESLint 0.0.9 中被引入。

## Resources

* [Rule source](https://github.com/eslint/eslint/tree/master/lib/rules/no-delete-var.js)
* [Documentation source](https://github.com/eslint/eslint/tree/master/docs/rules/no-delete-var.md)
