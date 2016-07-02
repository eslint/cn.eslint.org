---
title: Rule no-dupe-args
layout: doc
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# disallow duplicate arguments in `function` definitions (no-dupe-args)

# 禁止在 `function` 定义中出现重复的参数 (no-dupe-args)

If more than one parameter has the same name in a function definition, the last occurrence "shadows" the preceding occurrences. A duplicated name might be a typing error.

如果在一个函数定义中出现多个同名的参数，后面出现的会覆盖前面出现的参数。重复的名称可能是一个打字错误。

## Rule Details

This rule disallows duplicate parameter names in function declarations or expressions. It does not apply to arrow functions or class methods, because the parser reports the error.

该规则禁止在函数定义或表达中出现重名参数。该规则并不适用于箭头函数或类方法，因为解析器会报告这样的错误。

If ESLint parses code in strict mode, the parser (instead of this rule) reports the error.

如果 ESLint 在严格模式下解析代码，解析器（不是该规则）将报告这样的错误。

Examples of **incorrect** code for this rule:

**错误** 代码示例：

```js
/*eslint no-dupe-args: "error"*/

function foo(a, b, a) {
    console.log("value of the second a:", a);
}

var bar = function (a, b, a) {
    console.log("value of the second a:", a);
};
```

Examples of **correct** code for this rule:

**正确** 代码示例：

```js
/*eslint no-dupe-args: "error"*/

function foo(a, b, c) {
    console.log(a, b, c);
}

var bar = function (a, b, c) {
    console.log(a, b, c);
};
```

## Version

This rule was introduced in ESLint 0.16.0.

该规则在 ESLint 0.16.0 中被引入。

## Resources

* [Rule source](https://github.com/eslint/eslint/tree/master/lib/rules/no-dupe-args.js)
* [Documentation source](https://github.com/eslint/eslint/tree/master/docs/rules/no-dupe-args.md)
