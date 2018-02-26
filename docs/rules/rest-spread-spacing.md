---
title: rest-spread-spacing - Rules
layout: doc
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# Enforce spacing between rest and spread operators and their expressions (rest-spread-spacing)

# 强制剩余和扩展运算符及其表达式之间有空格 (rest-spread-spacing)

(fixable) The `--fix` option on the [command line](../user-guide/command-line-interface#fix) can automatically fix some of the problems reported by this rule.

(fixable) [命令行](../user-guide/command-line-interface#fix)中的 `--fix` 选项可以自动修复一些该规则报告的问题。

ES2015 introduced the rest and spread operators, which expand an iterable structure into its individual parts. Some examples of their usage are as follows:

ES2015 引入了剩余和扩展运算符，用于将可遍历结构扩展为单个个体。其用法举例如下：

```js
let numArr = [1, 2, 3];
function add(a, b, c) {
    return a + b + c;
}
add(...numArr); // -> 6

let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
arr1.push(...arr2); // -> [1, 2, 3, 4, 5, 6]

let [a, b, ...arr] = [1, 2, 3, 4, 5];
a; // -> 1
b // -> 2
arr; // ->  [3, 4, 5]

function numArgs(...args) {
  return args.length;
}
numArgs(a, b, c); // -> 3
```

In addition to the above, there is currently a proposal to add object rest and spread properties to the spec. They can be used as follows:

除上述之外，目前人们建议将对象的剩余和扩展属性添加到规范。使用如下：

```js

let { x, y, ...z } = { x: 1, y: 2, a: 3, b: 4 };
x; // -> 1
y; // -> 2
z; // -> { a: 3, b: 4 }

let n = { x, y, ...z };
n; // -> { x: 1, y: 2, a: 3, b: 4 }
```

As with other operators, whitespace is allowed between the rest or spread operator and the expression it is operating on, which can lead to inconsistent spacing within a codebase.

和其他运算符一样，若允许在剩余和扩展运算符及其运算表达式之间有空格，可能导致同一个代码库的空格不一致。

## Rule Details

This rule aims to enforce consistent spacing between rest and spread operators and their expressions. The rule also supports the currently experimental object rest and spread properties when enabled:

该规则旨在强制剩余和扩展运算符及其表达式之间的空格一致。该规则被启用时还支持仍在实验中的对象的剩余和扩展属性：

```json
{
    "parserOptions": {
        "ecmaVersion": 6,
        "ecmaFeatures": {
            "experimentalObjectRestSpread": true
        }
    }
}
```

Please read the user guide's section on [configuring parser options](/docs/user-guide/configuring#specifying-parser-options) to learn more.

请阅读用户指南章节 [configuring parser options](/docs/user-guide/configuring#specifying-parser-options) 了解更多。

## Options

This rule takes one option: a string with the value of `"never"` or `"always"`. The default value is `"never"`.

该规则有一个参数：值为 `"never"` 或 `"always"` 的字符串。默认值为 `"never"` 。

### "never"

When using the default `"never"` option, whitespace is not allowed between spread operators and their expressions.

参数为默认值 `"never"` 时，扩展运算符及其表达式之间不允许有空格。

```json
rest-spread-spacing: ["error"]
```

or

或者

```json
rest-spread-spacing: ["error", "never"]
```

Examples of **incorrect** code for this rule with `"never"`:

选项 `"never"` 的 **错误** 代码示例：

```js
/*eslint rest-spread-spacing: ["error", "never"]*/

fn(... args)
[... arr, 4, 5, 6]
let [a, b, ... arr] = [1, 2, 3, 4, 5];
function fn(... args) { console.log(args); }
let { x, y, ... z } = { x: 1, y: 2, a: 3, b: 4 };
let n = { x, y, ... z };
```

Examples of **correct** code for this rule with `"never"`:

选项 `"never"` 的 **正确** 代码示例：

```js
/*eslint rest-spread-spacing: ["error", "never"]*/

fn(...args)
[...arr, 4, 5, 6]
let [a, b, ...arr] = [1, 2, 3, 4, 5];
function fn(...args) { console.log(args); }
let { x, y, ...z } = { x: 1, y: 2, a: 3, b: 4 };
let n = { x, y, ...z };
```

### "always"

When using the `"always"` option, whitespace is required between spread operators and their expressions.

参数值为 `"always"` 时，扩展运算符及其表达式之间要求有空格。

```json
rest-spread-spacing: ["error", "always"]
```

Examples of **incorrect** code for this rule with `"always"`:

选项 `"always"` 的 **错误** 代码示例：

```js
/*eslint rest-spread-spacing:["error", "always"]*/

fn(...args)
[...arr, 4, 5, 6]
let [a, b, ...arr] = [1, 2, 3, 4, 5];
function fn(...args) { console.log(args); }
let { x, y, ...z } = { x: 1, y: 2, a: 3, b: 4 };
let n = { x, y, ...z };
```

Examples of **correct** code for this rule with `"always"`:

选项 `"always"` 的 **正确** 代码示例：

```js
/*eslint rest-spread-spacing: ["error", "always"]*/

fn(... args)
[... arr, 4, 5, 6]
let [a, b, ... arr] = [1, 2, 3, 4, 5];
function fn(... args) { console.log(args); }
let { x, y, ... z } = { x: 1, y: 2, a: 3, b: 4 };
let n = { x, y, ... z };
```

## When Not To Use It

You can safely disable this rule if you do not care about enforcing consistent spacing between spread operators and their expressions.

另外，如果你不关心在剩余和扩展运算符及其表达式之间强制空格一致，可以安全地禁用该规则。

## Further Reading

* [Object Rest/Spread Properties for ECMAScript](https://github.com/tc39/proposal-object-rest-spread)

## Version

This rule was introduced in ESLint 2.12.0.

该规则在 ESLint 2.12.0 中被引入。

## Resources

* [Rule source](https://github.com/eslint/eslint/tree/master/lib/rules/rest-spread-spacing.js)
* [Documentation source](https://github.com/eslint/eslint/tree/master/docs/rules/rest-spread-spacing.md)
