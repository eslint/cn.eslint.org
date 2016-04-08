---
title: Rule no-magic-numbers
layout: doc
translator: fengnana
proofreader: maoshuyu
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# Disallow Magic Numbers (no-magic-numbers)

# 禁止使用魔术数字 (no-magic-numbers)

'Magic numbers' are numbers that occur multiple time in code without an explicit meaning.
They should preferably be replaced by named constants.

['魔术数字'](https://zh.wikipedia.org/zh-cn/%E9%AD%94%E8%A1%93%E6%95%B8%E5%AD%97)是在代码中多次出现的没有明确含义的数字。它最好由命名常量取代。

```js
var now = Date.now(),
    inOneHour = now + (60 * 60 * 1000);
```

## Rule Details

The `no-magic-numbers` rule aims to make code more readable and refactoring easier by ensuring that special numbers
are declared as constants to make their meaning explicit.

`no-magic-numbers`规则旨在确保将具体的数字声明为意义明确的常量从而使代码更加可读并且易于重构。

Examples of **incorrect** code for this rule:

**错误**代码示例：

```js
/*eslint no-magic-numbers: "error"*/

var dutyFreePrice = 100,
    finalPrice = dutyFreePrice + (dutyFreePrice * 0.25);
```

```js
/*eslint no-magic-numbers: "error"*/

var data = ['foo', 'bar', 'baz'];

var dataLast = data[2];
```

Examples of **correct** code for this rule:

**正确**代码示例：

```js
/*eslint no-magic-numbers: "error"*/

var TAX = 0.25;

var dutyFreePrice = 100,
    finalPrice = dutyFreePrice + (dutyFreePrice * TAX);
```

## Options

### ignore

An array of numbers to ignore. It's set to `[]` by default.
If provided, it must be an `Array`.

一个数字数组，指定检测中可以忽略的数字。默认为 `[]`。如果设置该选项，它必须是`Array`。

Examples of **correct** code for the sample `{ "ignore": [1] }` option:

`{ "ignore": [1] }`选项的 **错误**代码示例：

```js
/*eslint no-magic-numbers: ["error", { "ignore": [1] }]*/

var data = ['foo', 'bar', 'baz'];
var dataLast = data.length && data[data.length - 1];
```

### ignoreArrayIndexes

A boolean to specify if numbers used as array indexes are considered okay. `false` by default.

一个布尔值，指定数字用作数组的索引是否是可以的。默认为 `false`。

Examples of **correct** code for the `{ "ignoreArrayIndexes": true }` option:

`{ "ignoreArrayIndexes": true }`选项的 **正确**代码示例：

```js
/*eslint no-magic-numbers: ["error", { "ignoreArrayIndexes": true }]*/

var data = ['foo', 'bar', 'baz'];
var dataLast = data[2];
```

### enforceConst

A boolean to specify if we should check for the const keyword in variable declaration of numbers. `false` by default.

一个布尔值，指定是否应该在数字变量的声明中检测 const 关键字。默认为`false`。

Examples of **incorrect** code for the `{ "enforceConst": true }` option:

`{ "enforceConst": true }`选项的 **错误**代码示例：

```js
/*eslint no-magic-numbers: ["error", { "enforceConst": true }]*/

var TAX = 0.25;

var dutyFreePrice = 100,
    finalPrice = dutyFreePrice + (dutyFreePrice * TAX);
```

### detectObjects

A boolean to specify if we should detect numbers when setting object properties for example. `false` by default.

一个布尔值，指定是否应该在设置对象属性时检测数字。默认为 `false`。

Examples of **incorrect** code for the `{ "detectObjects": true }` option:

`{ "detectObjects": true }`选项的 **错误**代码示例：

```js
/*eslint no-magic-numbers: ["error", { "detectObjects": true }]*/

var magic = {
  tax: 0.25
};

var dutyFreePrice = 100,
    finalPrice = dutyFreePrice + (dutyFreePrice * magic.tax);
```

Examples of **correct** code for the { "detectObjects": true } option:

`{ "detectObjects": true }`选项的 **正确**代码示例：

```js
/*eslint no-magic-numbers: ["error", { "detectObjects": true }]*/

var TAX = 0.25;

var magic = {
  tax: TAX
};

var dutyFreePrice = 100,
    finalPrice = dutyFreePrice + (dutyFreePrice * magic.tax);
```

## Version

This rule was introduced in ESLint 1.7.0.

该规则在 ESLint 1.7.0 中被引入。

## Resources

* [Rule source](https://github.com/eslint/eslint/tree/master/lib/rules/no-magic-numbers.js)
* [Documentation source](https://github.com/eslint/eslint/tree/master/docs/rules/no-magic-numbers.md)
