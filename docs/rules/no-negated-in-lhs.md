---
title: Rule no-negated-in-lhs
layout: doc
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# disallow negating the left operand in `in` expressions (no-negated-in-lhs)

# 禁止在 `in` 表达式中出现否定的左操作数 (no-negated-in-lhs)

## Rule Details

Just as developers might type `-a + b` when they mean `-(a + b)` for the negative of a sum, they might type `!key in object` by mistake when they almost certainly mean `!(key in object)` to test that a key is not in an object.

正如开发者可能会将负数加法 `-(a + b)` 错写成 `-a + b`，他们可能也会将 `!(key in object)` 错写成 `!key in object` 来验证某个 key 是否在对象中。 

## Rule Details

This rule disallows negating the left operand in `in` expressions.

该规则禁止在 `in` 表达式中出现否定的左操作数。

Examples of **incorrect** code for this rule:

**错误** 代码示例：

```js
/*eslint no-negated-in-lhs: "error"*/

if(!key in object) {
    // operator precedence makes it equivalent to (!key) in object
    // and type conversion makes it equivalent to (key ? "false" : "true") in object
}
```

Examples of **correct** code for this rule:

**正确** 代码示例：

```js
/*eslint no-negated-in-lhs: "error"*/

if(!(key in object)) {
    // key is not in object
}

if(('' + !key) in object) {
    // make operator precedence and type conversion explicit
    // in a rare situation when that is the intended meaning
}
```

## When Not To Use It

Never.

## Version

This rule was introduced in ESLint 0.1.2.

该规则在 ESLint 0.1.2 中被引入。

## Resources

* [Rule source](https://github.com/eslint/eslint/tree/master/lib/rules/no-negated-in-lhs.js)
* [Documentation source](https://github.com/eslint/eslint/tree/master/docs/rules/no-negated-in-lhs.md)
