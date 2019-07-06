---
title: valid-typeof - Rules
layout: doc
edit_link: https://github.com/eslint/eslint/edit/master/docs/rules/valid-typeof.md
rule_type: problem
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# enforce comparing `typeof` expressions against valid strings (valid-typeof)

# 强制 `typeof` 表达式与有效的字符串进行比较 (valid-typeof)

(recommended) The `"extends": "eslint:recommended"` property in a configuration file enables this rule.

(recommended) 配置文件中的 `"extends": "eslint:recommended"` 属性启用了此规则。

For a vast majority of use cases, the result of the `typeof` operator is one of the following string literals: `"undefined"`, `"object"`, `"boolean"`, `"number"`, `"string"`, `"function"` and `"symbol"`. It is usually a typing mistake to compare the result of a `typeof` operator to other string literals.

对于绝大多数用例而言，`typeof` 操作符的结果是以下字符串字面量中的一个：`"undefined"`、`"object"`、`"boolean"`、`"number"`、`"string"`、`"function"` 和 `"symbol"`。把 `typeof` 操作符的结果与其它字符串进行比较，通常是个书写错误。

## Rule Details

This rule enforces comparing `typeof` expressions to valid string literals.

该规则强制 `typeof` 表达式与有效的字符串进行比较。

## Options

This rule has an object option:

该规则有一个对象选项：

* `"requireStringLiterals": true` requires `typeof` expressions to only be compared to string literals or other `typeof` expressions, and disallows comparisons to any other value.
* `"requireStringLiterals": true` 要求 `typeof` 表达式只与字符串字面量或其它 `typeof` 表达式 进行比较，禁止与其它值进行比较。

Examples of **incorrect** code for this rule:

**错误** 代码示例：

```js
/*eslint valid-typeof: "error"*/

typeof foo === "strnig"
typeof foo == "undefimed"
typeof bar != "nunber"
typeof bar !== "fucntion"
```

Examples of **correct** code for this rule:

**正确** 代码示例：

```js
/*eslint valid-typeof: "error"*/

typeof foo === "string"
typeof bar == "undefined"
typeof foo === baz
typeof bar === typeof qux
```

Examples of **incorrect** code with the `{ "requireStringLiterals": true }` option:

选项 `{ "requireStringLiterals": true }` 的 **错误** 代码示例：

```js
typeof foo === undefined
typeof bar == Object
typeof baz === "strnig"
typeof qux === "some invalid type"
typeof baz === anotherVariable
typeof foo == 5
```

Examples of **correct** code with the `{ "requireStringLiterals": true }` option:

选项 `{ "requireStringLiterals": true }` 的 **正确** 代码示例：

```js
typeof foo === "undefined"
typeof bar == "object"
typeof baz === "string"
typeof bar === typeof qux
```

## When Not To Use It

You may want to turn this rule off if you will be using the `typeof` operator on host objects.

如果你将在宿主对象上使用 `typeof` 操作符，你可以关闭此规则。

## Version

This rule was introduced in ESLint 0.5.0.

该规则在 ESLint 0.5.0 中被引入。

## Resources

* [Rule source](https://github.com/eslint/eslint/tree/master/lib/rules/valid-typeof.js)
* [Documentation source](https://github.com/eslint/eslint/tree/master/docs/rules/valid-typeof.md)
