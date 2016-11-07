---
title: array-bracket-spacing - Rules
layout: doc
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# Disallow or enforce spaces inside of brackets (array-bracket-spacing)

# 禁止或强制在括号内使用空格 (array-bracket-spacing)

(fixable) The `--fix` option on the [command line](../user-guide/command-line-interface#fix) automatically fixes problems reported by this rule.

(fixable) [命令行](../user-guide/command-line-interface#fix)中的 `--fix` 选项可以自动修复该规则报告的问题。

A number of style guides require or disallow spaces between array brackets and other tokens. This rule
applies to both array literals and destructuring assignments (ECMAScript 6).

一些代码风格指南要求或禁止在数组的方括号内留有空格。该规则适用于数组和数组的解构赋值 (EcmaScript 6)。

```js
/*eslint-env es6*/

var arr = [ 'foo', 'bar' ];
var [ x, y ] = z;

var arr = ['foo', 'bar'];
var [x,y] = z;
```

## Rule Details

This rule enforces consistent spacing inside array brackets.

该规则强制数组括号内的空格的一致性。

## Options

This rule has a string option:

该规则有一个字符串选项：

* `"never"` (default) disallows spaces inside array brackets
* `"never"` (默认) 禁止在数组括号内出现空格
* `"always"` requires one or more spaces or newlines inside array brackets
* `"always"` 要求在数组括号内使用一个或多个空格、或折行

This rule has an object option for exceptions to the `"never"` option:

对于`"never"`选项，可以有例外情况，用一个对象表示：

* `"singleValue": true` requires one or more spaces or newlines inside brackets of array literals that contain a single element
* `"singleValue": true` 要求在只包含一个元素的数组的括号内使用一个或多个空格、或折行
* `"objectsInArrays": true` requires one or more spaces or newlines between brackets of array literals and braces of their object literal elements `[ {` or `} ]`
* `"objectsInArrays": true` 要求在数组的方括号和数组内的对象元素的大括号之间，即`[ {` 或 `} ]`，使用一个或多个空格、或折行
* `"arraysInArrays": true` requires one or more spaces or newlines between brackets of array literals and brackets of their array literal elements `[ [` or `] ]`
* `"arraysInArrays": true` 要求在数组的方括号和数组内的数组元素的方括号之间，即`[ [` 或 `] ]`，使用一个或多个空格、或折行

This rule has an object option for exceptions to the `"always"` option:

对于`"always"`选项，可以有例外情况，用一个对象表示：

* `"singleValue": false` disallows spaces inside brackets of array literals that contain a single element
* `"singleValue": false` 禁止在只包含一个元素的数组的括号内使用空格
* `"objectsInArrays": false` disallows spaces between brackets of array literals and braces of their object literal elements `[{` or `}]`
* `"objectsInArrays": false` 禁止在数组的方括号和数组内的对象元素的大括号之间，即 `[{` 或 `}]`出现空格
* `"arraysInArrays": false` disallows spaces between brackets of array literals and brackets of their array literal elements `[[` or `]]`
* `"arraysInArrays": false` 禁止在数组的方括号和数组内的数组元素的方括号之间，即 `[[` 或 `]]`出现空格

This rule has built-in exceptions:

该规则有两个内置的例外情况：

* `"never"` (and also the exceptions to the `"always"` option) allows newlines inside array brackets, because this is a common pattern
* `"never"` (和 `"always"` 选项的例外情况) 允许在数组内出现折行，因为这是一种常见的模式
* `"always"` does not require spaces or newlines in empty array literals `[]`
* `"always"` 在空数组中`[]`不要求出现空格或折行

### never

Examples of **incorrect** code for this rule with the default `"never"` option:

默认选项`"never"`的 **错误** 代码示例：

```js
/*eslint array-bracket-spacing: ["error", "never"]*/
/*eslint-env es6*/

var arr = [ 'foo', 'bar' ];
var arr = ['foo', 'bar' ];
var arr = [ ['foo'], 'bar'];
var arr = [[ 'foo' ], 'bar'];
var arr = [ 'foo',
  'bar'
];
var [ x, y ] = z;
var [ x,y ] = z;
var [ x, ...y ] = z;
var [ ,,x, ] = z;
```

Examples of **correct** code for this rule with the default `"never"` option:

默认选项`"never"`的 **正确**代码示例：

```js
/*eslint array-bracket-spacing: ["error", "never"]*/
/*eslint-env es6*/

var arr = [];
var arr = ['foo', 'bar', 'baz'];
var arr = [['foo'], 'bar', 'baz'];
var arr = [
  'foo',
  'bar',
  'baz'
];
var arr = ['foo',
  'bar'
];
var arr = [
  'foo',
  'bar'];

var [x, y] = z;
var [x,y] = z;
var [x, ...y] = z;
var [,,x,] = z;
```

### always

Examples of **incorrect** code for this rule with the `"always"` option:

选项 `"always"` 的 **错误** 代码示例：

```js
/*eslint array-bracket-spacing: ["error", "always"]*/
/*eslint-env es6*/

var arr = ['foo', 'bar'];
var arr = ['foo', 'bar' ];
var arr = [ ['foo'], 'bar' ];
var arr = ['foo',
  'bar'
];
var arr = [
  'foo',
  'bar'];

var [x, y] = z;
var [x,y] = z;
var [x, ...y] = z;
var [,,x,] = z;
```

Examples of **correct** code for this rule with the `"always"` option:

选项 `"always"` 的 **正确** 代码示例：

```js
/*eslint array-bracket-spacing: ["error", "always"]*/
/*eslint-env es6*/

var arr = [];
var arr = [ 'foo', 'bar', 'baz' ];
var arr = [ [ 'foo' ], 'bar', 'baz' ];
var arr = [ 'foo',
  'bar'
];
var arr = [
  'foo',
  'bar' ];
var arr = [
  'foo',
  'bar',
  'baz'
];

var [ x, y ] = z;
var [ x,y ] = z;
var [ x, ...y ] = z;
var [ ,,x, ] = z;
```

### singleValue

Examples of **incorrect** code for this rule with the `"always", { "singleValue": false }` options:

选项 `"always", { "singleValue": false }` 的 **错误** 代码示例：

```js
/*eslint array-bracket-spacing: ["error", "always", { "singleValue": false }]*/

var foo = [ 'foo' ];
var foo = [ 'foo'];
var foo = ['foo' ];
var foo = [ 1 ];
var foo = [ 1];
var foo = [1 ];
var foo = [ [ 1, 2 ] ];
var foo = [ { 'foo': 'bar' } ];
```

Examples of **correct** code for this rule with the `"always", { "singleValue": false }` options:

选项 `"always", { "singleValue": false }` 的 **正确** 代码示例：

```js
/*eslint array-bracket-spacing: ["error", "always", { "singleValue": false }]*/

var foo = ['foo'];
var foo = [1];
var foo = [[ 1, 1 ]];
var foo = [{ 'foo': 'bar' }];
```

### objectsInArrays

Examples of **incorrect**  this rule with the `"always", { "objectsInArrays": false }` options:

选项 `"always", { "objectsInArrays": false }` 的 **错误** 代码示例：

```js
/*eslint array-bracket-spacing: ["error", "always", { "objectsInArrays": false }]*/

var arr = [ { 'foo': 'bar' } ];
var arr = [ {
  'foo': 'bar'
} ]
```

Examples of **correct** code for this rule with the `"always", { "objectsInArrays": false }` options:

选项 `"always", { "objectsInArrays": false }` 的 **正确** 代码示例：

```js
/*eslint array-bracket-spacing: ["error", "always", { "objectsInArrays": false }]*/

var arr = [{ 'foo': 'bar' }];
var arr = [{
  'foo': 'bar'
}];
```

### arraysInArrays

Examples of **incorrect** code for this rule with the `"always", { "arraysInArrays": false }` options:

选项 `"always", { "arraysInArrays": false }` 的 **错误** 代码示例：

```js
/*eslint array-bracket-spacing: ["error", "always", { "arraysInArrays": false }]*/

var arr = [ [ 1, 2 ], 2, 3, 4 ];
var arr = [ [ 1, 2 ], 2, [ 3, 4 ] ];
```

Examples of **correct** code for this rule with the `"always", { "arraysInArrays": false }` options:

选项 `"always", { "arraysInArrays": false }` 的 **正确** 代码示例：

```js
/*eslint array-bracket-spacing: ["error", "always", { "arraysInArrays": false }]*/

var arr = [[ 1, 2 ], 2, 3, 4 ];
var arr = [[ 1, 2 ], 2, [ 3, 4 ]];
```

## When Not To Use It

You can turn this rule off if you are not concerned with the consistency of spacing between array brackets.

如果你并不关心数组括号内间距的一致性，可以关闭此规则。

## Related Rules

* [space-in-parens](space-in-parens)
* [object-curly-spacing](object-curly-spacing)
* [computed-property-spacing](computed-property-spacing)

## Version

This rule was introduced in ESLint 0.24.0.

该规则在 ESLint 0.24.0 被引入。

## Resources

* [Rule source](https://github.com/eslint/eslint/tree/master/lib/rules/array-bracket-spacing.js)
* [Documentation source](https://github.com/eslint/eslint/tree/master/docs/rules/array-bracket-spacing.md)
