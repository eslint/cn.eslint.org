---
title: object-curly-spacing - Rules
layout: doc
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# enforce consistent spacing inside braces (object-curly-spacing)

# 强制在花括号中使用一致的空格 (object-curly-spacing)

(fixable) The `--fix` option on the [command line](../user-guide/command-line-interface#fix) can automatically fix some of the problems reported by this rule.

(fixable) [命令行](../user-guide/command-line-interface#fix)中的 `--fix` 选项可以自动修复一些该规则报告的问题。

While formatting preferences are very personal, a number of style guides require
or disallow spaces between curly braces in the following situations:

虽然格式化首选项都非常个人化，大量的风格指南要求或禁止在下列情况下的花括号之间有空格：

```js
// simple object literals
var obj = { foo: "bar" };

// nested object literals
var obj = { foo: { zoo: "bar" } };

// destructuring assignment (EcmaScript 6)
var { x, y } = y;

// import/export declarations (EcmaScript 6)
import { foo } from "bar";
export { foo };
```

## Rule Details

This rule enforce consistent spacing inside braces of object literals, destructuring assignments, and import/export specifiers.

该规则强制在对象字面量、解构赋值 和 import/export 说明符的花括号中使用一致的空格。

## Options

This rule has two options, a string option and an object option.

该规则有两个选项，一个是字符串，一个是对象。

String option:

字符串选项：

* `"never"` (default) disallows spacing inside of braces
* `"never"` (默认) 不允许花括号中有空格
* `"always"` requires spacing inside of braces (except `{}`)
* `"always"` 要求花括号内有空格 (除了 `{}`)

Object option:

对象选项：

* `"arraysInObjects": true` requires spacing inside of braces of objects beginning and/or ending with an array element (applies when the first option is set to `never`)
* `"arraysInObjects": true` 要求以数组元素开始或结尾的对象的花括号中有空格 (当第一个选项为 `never` 时生效)
* `"arraysInObjects": false` disallows spacing inside of braces of objects beginning and/or ending with an array element (applies when the first option is set to `always`)
* `"arraysInObjects": false` 禁止以数组元素开始或结尾的对象的花括号中有空格 (当第一个选项为 `always` 时生效)
* `"objectsInObjects": true` requires spacing inside of braces of objects beginning and/or ending with an object element (applies when the first option is set to `never`)
* `"objectsInObjects": true` 要求以对象元素开始或结尾的对象的花括号中有空格 (当第一个选项为 `never` 时生效)
* `"objectsInObjects": false` disallows spacing inside of braces of objects beginning and/or ending with an object element (applies when the first option is set to `always`)
* `"objectsInObjects": false` 禁止以对象元素开始或结尾的对象的花括号中有空格 (当第一个选项为 `always` 时生效)

### never

Examples of **incorrect** code for this rule with the default `"never"` option:

默认选项 `"never"` 的 **错误** 代码示例：

```js
/*eslint object-curly-spacing: ["error", "never"]*/

var obj = { 'foo': 'bar' };
var obj = {'foo': 'bar' };
var obj = { baz: {'foo': 'qux'}, bar};
var obj = {baz: { 'foo': 'qux'}, bar};
var {x } = y;
import { foo } from 'bar';
```

Examples of **correct** code for this rule with the default `"never"` option:

默认选项 `"never"` 的 **正确** 代码示例：

```js
/*eslint object-curly-spacing: ["error", "never"]*/

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
var {x} = y;
import {foo} from 'bar';
```

### always

Examples of **incorrect** code for this rule with the `"always"` option:

选项 `"always"` 的 **错误** 代码示例：

```js
/*eslint object-curly-spacing: ["error", "always"]*/

var obj = {'foo': 'bar'};
var obj = {'foo': 'bar' };
var obj = { baz: {'foo': 'qux'}, bar};
var obj = {baz: { 'foo': 'qux' }, bar};
var obj = {'foo': 'bar'
};
var obj = {
  'foo':'bar'};
var {x} = y;
import {foo } from 'bar';
```

Examples of **correct** code for this rule with the `"always"` option:

选项 `"always"` 的 **正确** 代码示例：

```js
/*eslint object-curly-spacing: ["error", "always"]*/

var obj = {};
var obj = { 'foo': 'bar' };
var obj = { 'foo': { 'bar': 'baz' }, 'qux': 'quxx' };
var obj = {
  'foo': 'bar'
};
var { x } = y;
import { foo } from 'bar';
```

#### arraysInObjects

Examples of additional **correct** code for this rule with the `"never", { "arraysInObjects": true }` options:

选项 `"never", { "arraysInObjects": true }` 的 **正确** 代码示例：

```js
/*eslint object-curly-spacing: ["error", "never", { "arraysInObjects": true }]*/

var obj = {"foo": [ 1, 2 ] };
var obj = {"foo": [ "baz", "bar" ] };
```

Examples of additional **correct** code for this rule with the `"always", { "arraysInObjects": false }` options:

选项 `"always", { "arraysInObjects": false }` 的 **正确** 代码示例：

```js
/*eslint object-curly-spacing: ["error", "always", { "arraysInObjects": false }]*/

var obj = { "foo": [ 1, 2 ]};
var obj = { "foo": [ "baz", "bar" ]};
```


#### objectsInObjects

Examples of additional **correct** code for this rule with the `"never", { "objectsInObjects": true }` options:

选项 `"never", { "objectsInObjects": true }` 的 **正确** 代码示例：

```js
/*eslint object-curly-spacing: ["error", "never", { "objectsInObjects": true }]*/

var obj = {"foo": {"baz": 1, "bar": 2} };
```

Examples of additional **correct** code for this rule with the `"always", { "objectsInObjects": false }` options:

选项 `"always", { "objectsInObjects": false }` 的 **正确** 代码示例：

```js
/*eslint object-curly-spacing: ["error", "always", { "objectsInObjects": false }]*/

var obj = { "foo": { "baz": 1, "bar": 2 }};
```

## When Not To Use It

You can turn this rule off if you are not concerned with the consistency of spacing between curly braces.

如果你并不关心花括号之间空格的一致性，可以关闭此规则。

## Related Rules

* [comma-spacing](comma-spacing)
* [space-in-parens](space-in-parens)
* [space-in-brackets](space-in-brackets) (deprecated)

## Version

This rule was introduced in ESLint 0.22.0.

该规则在 ESLint 0.22.0 中被引入。

## Resources

* [Rule source](https://github.com/eslint/eslint/tree/master/lib/rules/object-curly-spacing.js)
* [Documentation source](https://github.com/eslint/eslint/tree/master/docs/rules/object-curly-spacing.md)
