---
title: Rule valid-typeof
layout: doc
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# Ensures that the results of typeof are compared against a valid string (valid-typeof)

# 确保typeof的结果和一个有效的字符串相比较 (valid-typeof)

 
For a vast majority of use-cases, the only valid results of the `typeof` operator will be one of the following: `"undefined"`, `"object"`, `"boolean"`, `"number"`, `"string"`, `"function"` and `"symbol"`. When the result of a `typeof` operation is compared against a string that is not one of these strings, it is usually a typo. This rule ensures that when the result of a `typeof` operation is compared against a string, that string is in the aforementioned set.

对于大多数用例，`typeof`操作唯一有效的结果将是下列之一：`"undefined"`， `"object"`， `"boolean"`， `"number"`， `"string"`， `"function"`和`"symbol"`。当`typeof`操作结果不是这些字符串中的一个相比较，通常是个书写错误。该规则确保当`typeof`操作的结果与一个字符串比较，这个字符串是在前面提及的字符串之一。

## Rule Details

This rule aims to prevent errors from likely typos by ensuring that when the result of a `typeof` operation is compared against a string, that the string is a valid value.

这条规则旨在通过确保当typeof的操作结果是与一个有效的字符串相比较，防止可能的书写错误。

Examples of **incorrect** code for this rule:

**错误**代码示例：

```js
/*eslint valid-typeof: 2*/

typeof foo === "strnig"
typeof foo == "undefimed"
typeof bar != "nunber"
typeof bar !== "fucntion"
```

Examples of **correct** code for this rule:

**正确**代码示例：

```js
/*eslint valid-typeof: 2*/

typeof foo === "string"
typeof bar == "undefined"
typeof foo === baz
typeof bar === typeof qux
```

## When Not To Use It

You may want to turn this rule off if you will be using the `typeof` operator on host objects.

如果你将使用`typeof`操作符on host objects，你可以关闭此规则。

## Version

This rule was introduced in ESLint 0.5.0.

该规则在ESLint 0.5.0中被引入。

## Resources

* [Rule source](https://github.com/eslint/eslint/tree/master/lib/rules/valid-typeof.js)
* [Documentation source](https://github.com/eslint/eslint/tree/master/docs/rules/valid-typeof.md)
