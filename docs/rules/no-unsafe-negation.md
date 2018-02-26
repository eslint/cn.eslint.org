---
title: no-unsafe-negation - Rules
layout: doc
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# disallow negating the left operand of relational operators (no-unsafe-negation)

# 禁止对关系运算符的左操作数使用否定操作符 (no-unsafe-negation)

(recommended) The `"extends": "eslint:recommended"` property in a configuration file enables this rule.

(recommended) 配置文件中的 `"extends": "eslint:recommended"` 属性启用了此规则。

(fixable) The `--fix` option on the [command line](../user-guide/command-line-interface#fix) can automatically fix some of the problems reported by this rule.

(fixable) [命令行](../user-guide/command-line-interface#fix)中的 `--fix` 选项可以自动修复一些该规则报告的问题。

Just as developers might type `-a + b` when they mean `-(a + b)` for the negative of a sum, they might type `!key in object` by mistake when they almost certainly mean `!(key in object)` to test that a key is not in an object. `!obj instanceof Ctor` is similar.

开发人员可能会把 `-(a + b)` 写错成 `-a + b` 来表示一个负数，也可能会把 `!(key in object)` 错写成 `!key in object` 来测试一个键是否在对象中。类似的情况也有 `!obj instanceof Ctor`。


## Rule Details

This rule disallows negating the left operand of [Relational Operators](https://developer.mozilla.org/en/docs/Web/JavaScript/Guide/Expressions_and_Operators#Relational_operators).

该规则禁止对[关系运算符](https://developer.mozilla.org/en/docs/Web/JavaScript/Guide/Expressions_and_Operators#Relational_operators)的左操作数使用否定操作符。

Relational Operators are:

关系运算符有：

- `in` operator.
- `in` 运算符.
- `instanceof` operator.
- `instanceof` 运算符.

Examples of **incorrect** code for this rule:

**错误** 代码示例：

```js
/*eslint no-unsafe-negation: "error"*/

if (!key in object) {
    // operator precedence makes it equivalent to (!key) in object
    // and type conversion makes it equivalent to (key ? "false" : "true") in object
}

if (!obj instanceof Ctor) {
    // operator precedence makes it equivalent to (!obj) instanceof Ctor
    // and it equivalent to always false since boolean values are not objects.
}
```

Examples of **correct** code for this rule:

**正确** 代码示例：

```js
/*eslint no-unsafe-negation: "error"*/

if (!(key in object)) {
    // key is not in object
}

if (!(obj instanceof Ctor)) {
    // obj is not an instance of Ctor
}

if(("" + !key) in object) {
    // make operator precedence and type conversion explicit
    // in a rare situation when that is the intended meaning
}
```

## Options

Nothing.

无。

## When Not To Use It

If you don't want to notify unsafe logical negations, then it's safe to disable this rule.

如果你不想收到不安全的逻辑否，可以不使用此规则。

## Version

This rule was introduced in ESLint 3.3.0.

该规则在 ESLint 3.3.0 中被引入。

## Resources

* [Rule source](https://github.com/eslint/eslint/tree/master/lib/rules/no-unsafe-negation.js)
* [Documentation source](https://github.com/eslint/eslint/tree/master/docs/rules/no-unsafe-negation.md)
