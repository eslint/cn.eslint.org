---
title: prefer-named-capture-group - Rules
layout: doc
edit_link: https://github.com/eslint/eslint/edit/master/docs/rules/prefer-named-capture-group.md
rule_type: suggestion
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# Suggest using named capture group in regular expression (prefer-named-capture-group)

# 建议在正则表达式中使用命名捕获组 (prefer-named-capture-group)

With the landing of ECMAScript 2018, named capture groups can be used in regular expressions, which can improve their readability.

随着 ECMAScript 2018 的发布，命名捕获组可以用于正则表达式中，这可以提高正则表达式的可读性。

```js
const regex = /(?<year>[0-9]{4})/;
```

## Rule Details

This rule is aimed at using named capture groups instead of numbered capture groups in regular expressions.

此规则的目的是在正则表达式中使用命名捕获组而不是编号捕获组。

Examples of **incorrect** code for this rule:

**错误** 代码示例：

```js
/*eslint prefer-named-capture-group: "error"*/

const foo = /(ba[rz])/;
const bar = new RegExp('(ba[rz])');
const baz = RegExp('(ba[rz])');

foo.exec('bar')[1]; // Retrieve the group result.
```

Examples of **correct** code for this rule:

**正确** 代码示例：

```js
/*eslint prefer-named-capture-group: "error"*/

const foo = /(?<id>ba[rz])/;
const bar = new RegExp('(?<id>ba[rz])');
const baz = RegExp('(?<id>ba[rz])');

foo.exec('bar').groups.id; // Retrieve the group result.
```

## When Not To Use It

If you are targeting ECMAScript 2017 and/or older environments, you can disable this rule, because this ECMAScript feature is only supported in ECMAScript 2018 and/or newer environments.

如果您的目标是 ECMAScript 2017 和/或 更旧的环境，你可以禁用这个规则，因为这个 ECMAScript 特性只在ECMAScript 2018 和/或 更新的环境中受支持。

## Related Rules

* [no-invalid-regexp](./no-invalid-regexp)

## Version

This rule was introduced in ESLint 5.15.0.

该规则在 ESLint 5.15.0 中被引入。

## Resources

* [Rule source](https://github.com/eslint/eslint/tree/master/lib/rules/prefer-named-capture-group.js)
* [Documentation source](https://github.com/eslint/eslint/tree/master/docs/rules/prefer-named-capture-group.md)
