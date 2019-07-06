---
title: no-useless-computed-key - Rules
layout: doc
edit_link: https://github.com/eslint/eslint/edit/master/docs/rules/no-useless-computed-key.md
rule_type: suggestion
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# Disallow unnecessary computed property keys on objects (no-useless-computed-key)

# 禁止在对象中使用不必要的计算属性 (no-useless-computed-key)

(fixable) The `--fix` option on the [command line](../user-guide/command-line-interface#fixing-problems) can automatically fix some of the problems reported by this rule.

(fixable) [命令行](../user-guide/command-line-interface#fixing-problems)中的 `--fix` 选项可以自动修复一些该规则报告的问题。

It's unnecessary to use computed properties with literals such as:

使用不必要的计算属性是不必要的，例如：

```js
var foo = {["a"]: "b"};
```

The code can be rewritten as:

应被重写为：

```js
var foo = {"a": "b"};
```

## Rule Details

This rule disallows unnecessary usage of computed property keys.

这条规则禁止使用不必要的计算属性。

## Examples

Examples of **incorrect** code for this rule:

**错误** 代码示例：

```js
/*eslint no-useless-computed-key: "error"*/
/*eslint-env es6*/

var a = { ['0']: 0 };
var a = { ['0+1,234']: 0 };
var a = { [0]: 0 };
var a = { ['x']: 0 };
var a = { ['x']() {} };
```

Examples of **correct** code for this rule:

**正确** 代码示例：

```js
/*eslint no-useless-computed-key: "error"*/

var c = { 'a': 0 };
var c = { 0: 0 };
var a = { x() {} };
var c = { a: 0 };
var c = { '0+1,234': 0 };
```

## When Not To Use It

If you don't want to be notified about unnecessary computed property keys, you can safely disable this rule.

如果你不想被提示使用了不必要的计算属性，你可以禁用此规则。

## Version

This rule was introduced in ESLint 2.9.0.

该规则在 ESLint 2.9.0 中被引入。

## Resources

* [Rule source](https://github.com/eslint/eslint/tree/master/lib/rules/no-useless-computed-key.js)
* [Documentation source](https://github.com/eslint/eslint/tree/master/docs/rules/no-useless-computed-key.md)
