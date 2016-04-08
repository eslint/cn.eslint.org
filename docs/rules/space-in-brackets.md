---
title: Rule space-in-brackets
layout: doc
translator: yanggao40
proofreader: freeyiyi1993
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# Disallow or enforce spaces inside of brackets. (space-in-brackets)

# 在括号中禁止或强制空格。(space-in-brackets)

**Replacement notice**: This rule was removed in ESLint v1.0 and replaced by the [object-curly-spacing](object-curly-spacing), [computed-property-spacing](computed-property-spacing) and [array-bracket-spacing](array-bracket-spacing) rules.

**替换通知**: 该规则在 ESLint v1.0 中移除，被 [object-curly-spacing](object-curly-spacing), [computed-property-spacing](computed-property-spacing) 和[array-bracket-spacing](array-bracket-spacing) 规则替换.

While formatting preferences are very personal, a number of style guides require or disallow spaces between brackets:

格式化偏好设置是因人而异的，许多风格指南在括号中要求或禁止空格。

```js
var obj = { foo: 'bar' };
var arr = [ 'foo', 'bar' ];
foo[ 'bar' ];

var obj = {foo: 'bar'};
var arr = ['foo', 'bar'];
foo['bar'];
```

## Rule Details

This rule aims to maintain consistency around the spacing inside of square brackets, either by disallowing spaces inside of brackets between the brackets and other tokens or enforcing spaces. Brackets that are separated from the adjacent value by a new line are excepted from this rule, as this is a common pattern.  Object literals that are used as the first or last element in an array are also ignored.

该规则旨在在方括号中维持空格的一致性，在括号和其他标记之间禁止或强制空格。本规则对于通过换行分离相邻值的括号是个例外，因为这是个常见的模式。对象字面量作为数组的第一个或最后一个元素也被忽略。

## Options

There are two options for this rule:

该规则有两个选项：

* `"always"` enforces a space inside of object and array literals
* `"never"` enforces zero spaces inside of object and array literals (default)

* `"always"`在对象和数组字面量中强制一个空格
* `"never"` 在对象或者数组中强制无空格（默认）

Depending on your coding conventions, you can choose either option by specifying it in your configuration:

根据你的编码习惯，可以选择任何一个指定你的配置：

```json
"space-in-brackets": ["error", "always"]
```

### "never"

When `"never"` is set, the following patterns are considered problems:

当设置为`"never"`时，下面的模式被认为有问题的：

```js
/*eslint-env es6*/

foo[ 'bar' ];
foo['bar' ];

var arr = [ 'foo', 'bar' ];
var arr = ['foo', 'bar' ];
var arr = [ ['foo'], 'bar'];
var arr = [[ 'foo' ], 'bar'];
var arr = ['foo',
  'bar'
];

var obj = { 'foo': 'bar' };
var obj = {'foo': 'bar' };
var obj = { baz: {'foo': 'qux'}, bar};
var obj = {baz: { 'foo': 'qux' }, bar};
```

The following patterns are not considered problems:

下面的模式被认为是正确的：

```js
// When options are ["error", "never"]

foo['bar'];
foo[
  'bar'
];
foo[
  'bar'];

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

var obj = {'foo': 'bar'};

var obj = {'foo': {'bar': 'baz'}, 'qux': 'quxx'};

var obj = {
  'foo': 'bar'
};
var obj = {'foo': 'bar'
};
var obj = {
  'foo':'bar'};

var obj = {};
```

### "always"

When `"always"` is used, the following patterns are considered problems:

当设置为`"always"`时，下面的模式被认为有问题的：

```js
/*eslint-env es6*/

foo['bar'];
foo['bar' ];
foo[ 'bar'];

var arr = ['foo', 'bar'];
var arr = ['foo', 'bar' ];
var arr = [ ['foo'], 'bar' ];
var arr = ['foo',
  'bar'
];

var arr = [
  'foo',
  'bar'];

var obj = {'foo': 'bar'};
var obj = {'foo': 'bar' };
var obj = { baz: {'foo': 'qux'}, bar};
var obj = {baz: { 'foo': 'qux' }, bar};
var obj = {'foo': 'bar'
};

var obj = {
  'foo':'bar'};
```

The following patterns are not considered problems:

当设置为`"always"`时，下面的模式被认为是正确的：

```js
foo[ 'bar' ];
foo[
  'bar'
];

var arr = [];
var arr = [ 'foo', 'bar', 'baz' ];
var arr = [ [ 'foo' ], 'bar', 'baz' ];

var arr = [
  'foo',
  'bar',
  'baz'
];

var obj = {};
var obj = { 'foo': 'bar' };
var obj = { 'foo': { 'bar': 'baz' }, 'qux': 'quxx' };
var obj = {
  'foo': 'bar'
};
```

Note that `"always"` has a special case where `{}` and `[]` are not considered problems.

注意`"always"`有一种特殊情况，当没有考虑到`{}` 和 `[]`的问题。

### Exceptions

An object literal may be used as a third array item to specify spacing exceptions. These exceptions work in the context of the first option. That is, if `"always"` is set to enforce spacing and an exception is set to `false`, it will disallow spacing for cases matching the exception. Likewise, if `"never"` is set to disallow spacing and an exception is set to `true`, it will enforce spacing for cases matching the exception.

对象字面量可能被当做第三方数组元素来指定空格例外情况。这些例外在第一个选项的上下文中起作用。如果设置`"always"`来强制空格并且一个例外被设置为`false`,在匹配到例外的情况时将禁止空格。相似地，如果设置`"never"`来禁止空格并且一个例外被设置为`true`,在匹配到例外的情况时将强制空格。

You can add exceptions like so:

可以像下面这样添加例外：

In case of `"always"` option, set an exception to `false` to enable it:

在`"always"`选项时，设置例外为`false`来启用它:

```json
"space-in-brackets": ["error", "always", {
  "singleValue": false,
  "objectsInArrays": false,
  "arraysInArrays": false,
  "arraysInObjects": false,
  "objectsInObjects": false,
  "propertyName": false
}]
```

In case of `"never"` option, set an exception to `true` to enable it:

在`"never"`选项时，设置例外为`true`来启用它:

```json
"space-in-brackets": ["error", "never", {
  "singleValue": true,
  "objectsInArrays": true,
  "arraysInArrays": true,
  "arraysInObjects": true,
  "objectsInObjects": true,
  "propertyName": true
}]
```

The following exceptions are available:

下面的这些例外是可用的：

* `singleValue` sets the spacing of a single value inside of square brackets of an array.
* `singleValue` 设置数组的方括号中单个值的空格。
* `objectsInArrays` sets the spacings between the curly braces and square brackets of object literals that are the first or last element in an array.
* `objectsInArrays` 设置对象字面量的花括号和数组的方括号与其中第一个或最后一个元素之间的空格。
* `arraysInArrays` sets the spacing between the square brackets of array literals that are the first or last element in an array.
* `arraysInArrays` 设置作为数组中第一个或最后一个元素的数组字面量方括号间的空格。
* `arraysInObjects` sets the spacing between the square bracket and the curly brace of an array literal that is the last element in an object.
* `arraysInObjects` 设置方括号和作为一个对象最后一个元素的数组字面量的大括号间的空格
* `objectsInObjects` sets the spacing between the curly brace of an object literal that is the last element in an object and the curly brace of the containing object.
* `objectsInObjects` 设置一个对象中最后一个对象的大括号和包含对象大括号间的空格。
* `propertyName` sets the spacing in square brackets of computed member expressions.
* `propertyName`设置方括号中计算表达式成员的间距。

In each of the following examples, the `"always"` option is assumed.

在下面的每个例子中，假设设置了`"always"`选项

When `"singleValue"` is set to `false`, the following patterns are considered problems:

当设置为`"singleValue"` ，下面的模式被认为是有问题的：

```js
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

下面的模式被认为是正确的：

```js
var foo = ['foo'];
var foo = [1];
var foo = [[ 1, 1 ]];
var foo = [{ 'foo': 'bar' }];
```

When `"objectsInArrays"` is set to `false`, the following patterns are considered problems:

当`"objectsInArrays"`设置为`false` ，下面的模式被认为是有问题的：

```js
var arr = [ { 'foo': 'bar' } ];
var arr = [ {
  'foo': 'bar'
} ]
```

The following patterns are not considered problems:

下面的模式被认为是正确的：

```js
var arr = [{ 'foo': 'bar' }];
var arr = [{
  'foo': 'bar'
}];
```

When `"arraysInArrays"` is set to `false`, the following patterns are considered problems:

当`"arraysInArrays"`设置为`false` ，下面的模式被认为是有问题的：

```js
var arr = [ [ 1, 2 ], 2, 3, 4 ];
var arr = [ [ 1, 2 ], 2, [ 3, 4 ] ];
```

The following patterns are not considered problems:

下面的模式被认为是正确的：

```js
var arr = [[ 1, 2 ], 2, 3, 4 ];
var arr = [[ 1, 2 ], 2, [ 3, 4 ]];
```

When `"arraysInObjects"` is set to `false`, the following patterns are considered problems:

当`"arraysInObjects"`设置为`false` ，下面的模式被认为是有问题的：

```js
var obj = { "foo": [ 1, 2 ] };
var obj = { "foo": [ "baz", "bar" ] };
```

The following patterns are not considered problems:

下面的模式被认为是正确的：

```js
var obj = { "foo": [ 1, 2 ]};
var obj = { "foo": [ "baz", "bar" ]};
```

When `"objectsInObjects"` is set to `false`, the following patterns are considered problems:

当`"objectsInObjects"`设置为`false` ，下面的模式被认为是有问题的：

```js
var obj = { "foo": { "baz": 1, "bar": 2 } };
var obj = { "foo": [ "baz", "bar" ], "qux": { "baz": 1, "bar": 2 } };
```

The following patterns are not considered problems:

下面的模式被认为是正确的：

```js
var obj = { "foo": { "baz": 1, "bar": 2 }};
var obj = { "foo": [ "baz", "bar" ], "qux": { "baz": 1, "bar": 2 }};
```

When `"propertyName"` is set to `false`, the following patterns are considered problems:

当`"propertyName"`设置为`false` ，下面的模式被认为是有问题的：

```js
var foo = obj[ 1 ];
var foo = obj[ bar ];
```

The following patterns are not considered problems:

下面的模式被认为是正确的：

```js
var foo = obj[bar];
var foo = obj[0, 1];
```

## When Not To Use It

You can turn this rule off if you are not concerned with the consistency of spacing between brackets.

如果你不关心括号间空格的一致性，可以将该规则关闭。

## Related Rules

* [array-bracket-spacing](array-bracket-spacing)
* [object-curly-spacing](object-curly-spacing)
* [space-in-parens](space-in-parens)
* [computed-property-spacing](computed-property-spacing)

## Version

This rule was introduced in ESLint 0.4.1 and removed in 1.0.0-rc-1.

该规则在 ESLint 0.4.1 中被引入，在 1.0.0-rc-1 中被移除。

## Resources

* [Documentation source](https://github.com/eslint/eslint/tree/master/docs/rules/space-in-brackets.md)
