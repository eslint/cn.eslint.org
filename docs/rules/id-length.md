---
title: id-length - Rules
layout: doc
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# enforce minimum and maximum identifier lengths (id-length)

# 强制标识符的最大和最小长度 (id-length)

Very short identifier names like `e`, `x`, `_t` or very long ones like `hashGeneratorResultOutputContainerObject` can make code harder to read and potentially less maintainable. To prevent this, one may enforce a minimum and/or maximum identifier length.

非常短的标识符名称像 `e`，`x`，`_t` 或非常长的名称像 `hashGeneratorResultOutputContainerObject` 使代码难以阅读和潜在的不可维护性。为了防止这种情况出现，应该限制标识符的最大和/或最小长度。

```js
var x = 5; // too short; difficult to understand its purpose without context
```

## Rule Details

This rule enforces a minimum and/or maximum identifier length convention.

该规则旨在通过限制标识符的长度来提高代码的可读性和可维护性。对不符合长度限制(上限和下限)的任何类型的标识符，它将发出警告。

It allows the programmers to silently by-pass this check by using `"quoted"` property names or calculated property access to allow potential server-side data requirements.

它允许程序员使用带引号的属性或计算的属性访问允许潜在的服务端数据请求来通过该规则的检查。

## Options

Examples of **incorrect** code for this rule with the default options:

默认选项的 **错误** 代码示例：

```js
/*eslint id-length: "error"*/     // default is minimum 2-chars ({ "min": 2 })
/*eslint-env es6*/

var x = 5;
obj.e = document.body;
var foo = function (e) { };
try {
    dangerousStuff();
} catch (e) {
    // ignore as many do
}
var myObj = { a: 1 };
(a) => { a * a };
class x { }
class Foo { x() {} }
function foo(...x) { }
var { x } = {};
var { x: a} = {};
var { a: [x]} = {};
({ prop: obj.x }) = {};
```

Examples of **correct** code for this rule with the default options:

默认选项的 **正确** 代码示例：

```js
/*eslint id-length: "error"*/     // default is minimum 2-chars ({ "min": 2 })
/*eslint-env es6*/

var num = 5;
function _f() { return 42; }
function _func() { return 42; }
obj.el = document.body;
var foo = function (evt) { /* do stuff */ };
try {
    dangerousStuff();
} catch (error) {
    // ignore as many do
}
var myObj = { apple: 1 };
(num) => { num * num };
function foo(num = 0) { }
class MyClass { }
class Foo { method() {} }
function foo(...args) { }
var { prop } = {};
var { prop: a } = {};
var { prop: [x] } = {};
({ prop: obj.longName }) = {};
var data = { "x": 1 };  // excused because of quotes
data["y"] = 3;  // excused because of calculated property access
```

This rule has a shorthand integer option for the `"min"` object property.

该规则中 `"min"` 属性可以简写为数字。

Examples of **incorrect** code for this rule with a minimum of 4:

最小值为 4 的 **错误** 代码示例：

```js
/*eslint id-length: ["error", 4]*/
/*eslint-env es6*/

var val = 5;
obj.e = document.body;
function (e) { };
try {
    dangerousStuff();
} catch (e) {
    // ignore as many do
}
var myObj = { a: 1 };
(val) => { val * val };
class x { }
class Foo { x() {} }
function foo(...x) { }
var { x } = {};
var { x: a} = {};
var { a: [x]} = {};
({ prop: obj.x }) = {};
```

Examples of **correct** code for this rule with a minimum of 4:

最小值为 4 的 **正确** 代码示例：

```js
/*eslint id-length: ["error", 4]*/
/*eslint-env es6*/

var value = 5;
function func() { return 42; }
obj.element = document.body;
var foo = function (event) { /* do stuff */ };
try {
    dangerousStuff();
} catch (error) {
    // ignore as many do
}
var myObj = { apple: 1 };
(value) => { value * value };
function foobar(value = 0) { }
class MyClass { }
class Foobar { method() {} }
function foobar(...args) { }
var { prop } = {};
var { prop: a } = {};
var { prop: [x] } = {};
({ prop: obj.name }) = {};
var data = { "x": 1 };  // excused because of quotes
data["y"] = 3;  // excused because of calculated property access
```

This rule has an object option:

该规则有个对象选项：

* `"min"` (default: 2) enforces a minimum identifier length
* `"min"` (默认为 2) 强制最小标识符长度
* `"max"` (default: Infinity) enforces a maximum identifier length
* `"max"` (默认无穷大) 强制最大标识符长度
* `"properties": always` (default) enforces identifier length convention for property names
* `"properties": always` (默认) 强制属性名称的标识符长度约定
* `"properties": never` ignores identifier length convention for property names
* `"properties": never` 忽略属性名称的标识符长度约定
* `"exceptions"` allows an array of specified identifier names
* `"exceptions"` 所允许的特定的标识符名称数组

### min

Examples of **incorrect** code for this rule with the `{ "min": 4 }` option:

选项 `{ "min": 4 }` 的 **错误** 代码示例：

```js
/*eslint id-length: ["error", { "min": 4 }]*/
/*eslint-env es6*/

var val = 5;
obj.e = document.body;
function (e) { };
try {
    dangerousStuff();
} catch (e) {
    // ignore as many do
}
var myObj = { a: 1 };
(val) => { val * val };
class x { }
class Foo { x() {} }
function foo(...x) { }
var { x } = {};
var { x: a} = {};
var { a: [x]} = {};
({ prop: obj.x }) = {};
```

Examples of **correct** code for this rule with the `{ "min": 4 }` option:

选项 `{ "min": 4 }` 的 **正确** 代码示例：

```js
/*eslint id-length: ["error", { "min": 4 }]*/
/*eslint-env es6*/

var value = 5;
function func() { return 42; }
obj.element = document.body;
var foo = function (event) { /* do stuff */ };
try {
    dangerousStuff();
} catch (error) {
    // ignore as many do
}
var myObj = { apple: 1 };
(value) => { value * value };
function foobar(value = 0) { }
class MyClass { }
class Foobar { method() {} }
function foobar(...args) { }
var { prop } = {};
var { prop: a } = {};
var { prop: [x] } = {};
({ prop: obj.name }) = {};
var data = { "x": 1 };  // excused because of quotes
data["y"] = 3;  // excused because of calculated property access
```

### max

Examples of **incorrect** code for this rule with the `{ "max": 10 }` option:

选项 `{ "max": 10 }` 的 **错误** 代码示例：

```js
/*eslint id-length: ["error", { "max": "10" }]*/
/*eslint-env es6*/

var reallyLongVarName = 5;
function reallyLongFuncName() { return 42; }
obj.reallyLongPropName = document.body;
var foo = function (reallyLongArgName) { /* do stuff */ };
try {
    dangerousStuff();
} catch (reallyLongErrorName) {
    // ignore as many do
}
(reallyLongArgName) => { return !reallyLongArgName; };
```

Examples of **correct** code for this rule with the `{ "max": 10 }` option:

选项 `{ "max": 10 }` 的 **正确** 代码示例：

```js
/*eslint id-length: ["error", { "max": "10" }]*/
/*eslint-env es6*/

var varName = 5;
function funcName() { return 42; }
obj.propName = document.body;
var foo = function (arg) { /* do stuff */ };
try {
    dangerousStuff();
} catch (error) {
    // ignore as many do
}
(arg) => { return !arg; };
```

### properties

Examples of **correct** code for this rule with the `{ "properties": "never" }` option:

选项 `{ "properties": "never" }` 的 **正确** 代码示例：

```js
/*eslint id-length: ["error", { "properties": "never" }]*/
/*eslint-env es6*/

var myObj = { a: 1 };
({ a: obj.x.y.z }) = {};
({ prop: obj.i }) = {};
```

### exceptions

Examples of additional **correct** code for this rule with the `{ "exceptions": ["x"] }` option:

选项 `{ "exceptions": ["x"] }` 的 **正确** 代码示例：

```js
/*eslint id-length: ["error", { "exceptions": ["x"] }]*/
/*eslint-env es6*/

var x = 5;
function x() { return 42; }
obj.x = document.body;
var foo = function (x) { /* do stuff */ };
try {
    dangerousStuff();
} catch (x) {
    // ignore as many do
}
(x) => { return x * x; };
```

## Related Rules

* [max-len](max-len)
* [new-cap](new-cap)
* [func-names](func-names)
* [camelcase](camelcase)

## Version

This rule was introduced in ESLint 1.0.0.

该规则在 ESLint 1.0.0 被引入。

## Resources

* [Rule source](https://github.com/eslint/eslint/tree/master/lib/rules/id-length.js)
* [Documentation source](https://github.com/eslint/eslint/tree/master/docs/rules/id-length.md)
