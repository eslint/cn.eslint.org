---
title: no-self-compare - Rules
layout: doc
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# Disallow Self Compare (no-self-compare)

# 禁止自身比较（no-self-compare）

Comparing a variable against itself is usually an error, either a typo or refactoring error. It is confusing to the reader and may potentially introduce a runtime error.

变量与其自身进行比较通常来说是一个错误，要么是打字错误要么是重构错误。它都会给读者造成困扰并且可能会引入运行错误。

The only time you would compare a variable against itself is when you are testing for `NaN`. However, it is far more appropriate to use `typeof x === 'number' && isNaN(x)` or the [Number.isNaN ES2015 function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isNaN) for that use case rather than leaving the reader of the code to determine the intent of self comparison.

唯一肯能会对变量自身做比较时候是当你在测试变量是否是 `NaN`。然而，在这种情况下，更适合使用 `typeof x === 'number' && isNaN(x)` 或者 [Number.isNaN ES2015 函数](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isNaN) 而不是变量自身比较。

## Rule Details

This error is raised to highlight a potentially confusing and potentially pointless piece of code. There are almost no situations in which you would need to compare something to itself.

该规则为了突出一个潜在的令人困惑的、无意义的代码。几乎没有场景需要你比较变量本身。

Examples of **incorrect** code for this rule:

**错误** 代码示例：

```js
/*eslint no-self-compare: "error"*/

var x = 10;
if (x === x) {
    x = 20;
}
```

## Further Reading

* [Weird Relation](http://jslinterrors.com/weird-relation/)

## Version

This rule was introduced in ESLint 0.0.9.

该规则在 ESLint 0.0.9 中被引入。

## Resources

* [Rule source](https://github.com/eslint/eslint/tree/master/lib/rules/no-self-compare.js)
* [Documentation source](https://github.com/eslint/eslint/tree/master/docs/rules/no-self-compare.md)
