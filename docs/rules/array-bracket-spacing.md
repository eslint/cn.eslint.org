---
title: Rule array-bracket-spacing
layout: doc
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# Disallow or enforce spaces inside of brackets. (array-bracket-spacing)

# 禁止或强制在括号内使用空格。 (array-bracket-spacing)

A number of style guides require or disallow spaces between array brackets. This rule
applies to both array literals and destructuring assignment (EcmaScript 6) using arrays.

一些代码风格指南要求或禁止在数组的方括号内留有空格。该规则适用于数组和数组的解构赋值 (EcmaScript 6)。

```js
/*eslint-env es6*/

var arr = [ 'foo', 'bar' ];
var [ x, y ] = z;

var arr = ['foo', 'bar'];
var [x,y] = z;
```

**Fixable:** This rule is automatically fixable using the `--fix` flag on the command line.

**Fixable:** 该规则可以通过`--fix`命令行进行自动修复。

## Rule Details

This rule aims to maintain consistency around the spacing inside of array brackets, either by disallowing spaces inside of brackets between the brackets and other tokens or enforcing spaces. Brackets that are separated from the adjacent value by a new line are excepted from this rule, as this is a common pattern.Object literals that are used as the first or last element in an array are also ignored.

该规则旨在保持数组括号内间距的一致性， 要么不允许在括号和其他标记出现空格，要么强制使用空格。
括号内相邻的值出现折行的，不适用此规则，因为这是一种常见模式。数组中第一个或最后一个元素是对象的话，也不适用此规则。


## Options

There are two options for this rule:

该规则有两个可选项：

* `"always"` enforces a space inside of array brackets
* `"always"` 在数组括号内强制使用1个空格

* `"never"` enforces no space inside of array brackets (default)
* `"never"` 在数组括号内不允许出现空格 (默认)

Depending on your coding conventions, you can choose either option by specifying it in your configuration:

根据你的编码约定，你可以在你的配置中选择任一选项：

```json
"array-bracket-spacing": [2, "always"]
```

### "never"

When `"never"` is set, the following patterns are considered problems:

当设置了`"never"`，以下模式被认为是有问题的：

```js
/*eslint array-bracket-spacing: [2, "never"]*/
/*eslint-env es6*/

var arr = [ 'foo', 'bar' ];
var arr = ['foo', 'bar' ];
var arr = [ ['foo'], 'bar'];
var arr = [[ 'foo' ], 'bar'];
var arr = ['foo',
  'bar'
];
var [ x, y ] = z;
var [ x,y ] = z;
var [ x, ...y ] = z;
var [ ,,x, ] = z;
```

The following patterns are not considered problems:

以下模式被认为是没有问题的：

```js
/*eslint array-bracket-spacing: [2, "never"]*/
/*eslint-env es6*/

var arr = [];
var arr = ['foo', 'bar', 'baz'];
var arr = [['foo'], 'bar', 'baz'];
var arr = [
  'foo',
  'bar',
  'baz'
];
var arr = [
  'foo',
  'bar'];

var [x, y] = z;
var [x,y] = z;
var [x, ...y] = z;
var [,,x,] = z;
```

### "always"

When `"always"` is used, the following patterns are considered problems:

当设置了 `"always"`, 以下模式被认为是有问题的:

```js
/*eslint array-bracket-spacing: [2, "always"]*/
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

The following patterns are not considered problems:

以下模式被认为是没有问题的：

```js
/*eslint array-bracket-spacing: [2, "always"]*/
/*eslint-env es6*/

var arr = [];
var arr = [ 'foo', 'bar', 'baz' ];
var arr = [ [ 'foo' ], 'bar', 'baz' ];
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

Note that `"always"` has a special case where `{}` and `[]` are not considered problems.

### Exceptions

An object literal may be used as a third array item to specify spacing exceptions. These exceptions work in the context of the first option. That is, if `"always"` is set to enforce spacing and an exception is set to `false`, it will disallow spacing for cases matching the exception. Likewise, if `"never"` is set to disallow spacing and an exception is set to `true`, it will enforce spacing for cases matching the exception.

数组的第三个参数是个对象，用来指定例外情况。这些例外作用在第一个选项的基础上。如果`"always"`设置为强制使用空格但例外情况被设置为`false`，那么符合这个例外的将禁止使用空格。同样的，如果`"never"`设置为禁止使用空格但例外情况被设为`true`，那么符合这个例外的将强制使用空格。

You can add exceptions like so:

你可以像这样添加例外情况：

In case of `"always"` option, set an exception to `false` to enable it:

在`"always"`选项的情况下，设置例外为`false`来启用该规则：

```json
"array-bracket-spacing": [2, "always", {
  "singleValue": false,
  "objectsInArrays": false,
  "arraysInArrays": false
}]
```

In case of `"never"` option, set an exception to `true` to enable it:

在`"never"`选项的情况下，设置例外为`true`来启用该规则：

```json
"array-bracket-spacing": [2, "never", {
  "singleValue": true,
  "objectsInArrays": true,
  "arraysInArrays": true
}]
```

The following exceptions are available:

以下例外都可用：

* `singleValue` sets the spacing of a single value inside of square brackets of an array.

* `singleValue` 为数组内单一元素添加空格。

* `objectsInArrays` sets the spacings between the curly braces and square brackets of object literals that are the first or last element in an array.

* `objectsInArrays` 数组中第一个元素或最后一个元素是对象的，在方括号和、
                    大括号之间设置空格。

* `arraysInArrays` sets the spacing between the square brackets of array literals that are the first or last element in an array.

* `arraysInArrays` 数组中第一个元素或最后一个元素是数组的，在方括号之间设置空格

In each of the following examples, the `"always"` option is assumed.

下面的例子中，假定是`"always"`选项。

When `"singleValue"` is set to `false`, the following patterns are considered problems:

当`"singleValue"`被设置为`false`，以下模式被认为是有问题的：

```js
/*eslint array-bracket-spacing: [2, "always", { singleValue: false }]*/

var foo = [ 'foo' ];
var foo = [ 'foo'];
var foo = ['foo' ];
var foo = [ 1 ];
var foo = [ 1];
var foo = [1 ];
var foo = [ [ 1, 2 ] ];
var foo = [ { 'foo': 'bar' } ];
```

The following patterns are not considered problems:

以下模式被认为是没有问题的：

```js
/*eslint array-bracket-spacing: [2, "always", { singleValue: false }]*/

var foo = ['foo'];
var foo = [1];
var foo = [[ 1, 1 ]];
var foo = [{ 'foo': 'bar' }];
```

When `"objectsInArrays"` is set to `false`, the following patterns are considered problems:

当`"objectsInArrays"`被设置为`false`时，以下模式被认为是有问题的：

```js
/*eslint array-bracket-spacing: [2, "always", { objectsInArrays: false }]*/

var arr = [ { 'foo': 'bar' } ];
var arr = [ {
  'foo': 'bar'
} ]
```

The following patterns are not considered problems:

以下模式被认为是没有问题的：

```js
/*eslint array-bracket-spacing: [2, "always", { objectsInArrays: false }]*/

var arr = [{ 'foo': 'bar' }];
var arr = [{
  'foo': 'bar'
}];
```

When `"arraysInArrays"` is set to `false`, the following patterns are considered problems:

当设置`"arraysInArrays"`为`false`时，以下模式被认为是有问题的：

```js
/*eslint array-bracket-spacing: [2, "always", { arraysInArrays: false }]*/

var arr = [ [ 1, 2 ], 2, 3, 4 ];
var arr = [ [ 1, 2 ], 2, [ 3, 4 ] ];
```

The following patterns are not considered problems:

以下模式被认为是没有问题的：

```js
/*eslint array-bracket-spacing: [2, "always", { arraysInArrays: false }]*/

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

该规则在ESLint 0.24.0 被引入。

## Resources

* [Rule source](https://github.com/eslint/eslint/tree/master/lib/rules/array-bracket-spacing.js)
* [Documentation source](https://github.com/eslint/eslint/tree/master/docs/rules/array-bracket-spacing.md)
