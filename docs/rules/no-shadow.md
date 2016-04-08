---
title: Rule no-shadow
layout: doc
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# Disallow Shadowing (no-shadow)

# 不允许覆盖 (no-shadow)

Shadowing is the process by which a local variable shares the same name as a variable in its containing scope. For example:

覆盖是指在同一作用域里局部变量和全局变量同名，比如：

```js
var a = 3;
function b() {
    var a = 10;
}
```

In this case, the variable `a` inside of `b()` is shadowing the variable `a` in the global scope. This can cause confusion while reading the code and it's impossible to access the global variable.

在这种情况中，`b()`作用域中的`a`覆盖了全局环境中的`a`。这会混淆读者并且在`b`中不能获取全局变量。

## Rule Details

This rule aims to eliminate shadowed variable declarations.

此规则旨在消除变量声明覆盖。

Examples of **incorrect** code for this rule:

**错误**代码示例：

```js
/*eslint no-shadow: "error"*/
/*eslint-env es6*/

var a = 3;
function b() {
    var a = 10;
}

var b = function () {
    var a = 10;
}

function b(a) {
    a = 10;
}
b(a);

if (true) {
    let a = 5;
}
```

## Options

This rule takes one option, an object, with properties `"builtinGlobals"`, `"hoist"` and `"allow"`.

对象配置项，包含属性`"builtinGlobals"`,`"hoist"` 和`"allow"`.

```json
{
    "no-shadow": ["error", { "builtinGlobals": false, "hoist": "functions", "allow": [] }]
}
```

### builtinGlobals

The `builtinGlobals` option is `false` by default.
If it is `true`, the rule prevents shadowing of built-in global variables: `Object`, `Array`, `Number`, and so on.

默认值是`false`，如果builtinGlobals是`true`，会检测内置对象如`Object`，`Array`，`Number`等等。

Examples of **incorrect** code for the `{ "builtinGlobals": true }` option:

选项`{"builtinGlobals": true}`的 **错误**代码示例：

```js
/*eslint no-shadow: ["error", { "builtinGlobals": true }]*/

function foo() {
    var Object = 0;
}
```

### hoist

The `hoist` option has three settings:

此配置项有三个值：

* `functions` (by default) - reports shadowing before the outer functions are defined.
* `functions`(默认值)-在被覆盖前呈报函数覆盖错误。
* `all` - reports all shadowing before the outer variables/functions are defined.
* `all`-在被覆盖之前呈报函数和变量的覆盖错误。
* `never` - never report shadowing before the outer variables/functions are defined.
* `never`-不呈报覆盖错误。

#### hoist: functions

Examples of **incorrect** code for the default `{ "hoist": "functions" }` option:

当`"hoist"`配置项为`"all"`，在条件语句中`let a`和`let b`是不恰当的。

```js
/*eslint no-shadow: ["error", { "hoist": "functions" }]*/
/*eslint-env es6*/

if (true) {
    let b = 6;
}

function b() {}
```

Although `let b` in the `if` statement is before the *function* declaration in the outer scope, it is incorrect.

虽然`if`语句中的`let b`在 *function*声明之前，该示例是正确的。

Examples of **correct** code for the default `{ "hoist": "functions" }` option:

默认选项`{ "hoist": "functions" }`的 **正确**代码示例：

```js
/*eslint no-shadow: ["error", { "hoist": "functions" }]*/
/*eslint-env es6*/

if (true) {
    let a = 3;
}

let a = 5;
```

Because `let a` in the `if` statement is before the *variable* declaration in the outer scope, it is correct.

#### hoist: all

Examples of **incorrect** code for the `{ "hoist": "all" }` option:

`{ "hoist": "all" }`选项的 **错误**代码示例：

```js
/*eslint no-shadow: ["error", { "hoist": "all" }]*/
/*eslint-env es6*/

if (true) {
    let a = 3;
    let b = 6;
}

let a = 5;
function b() {}
```

#### hoist: never

Examples of **correct** code for the `{ "hoist": "never" }` option:

此配置项是一个数组,数组里的标示被允许覆盖

```js
/*eslint no-shadow: ["error", { "hoist": "never" }]*/
/*eslint-env es6*/

if (true) {
    let a = 3;
    let b = 6;
}

let a = 5;
function b() {}
```

Because `let a` and `let b` in the `if` statement are before the declarations in the outer scope, they are correct.

因为在`if`语句中`let a` 和 `let b` 在外层作用域声明语句之前，所以是正确的。

### allow

The `allow` option is an array of identifier names for which shadowing is allowed. For example, `"resolve"`, `"reject"`, `"done"`, `"cb"`.

`allow`选项是个标识符名称的数组，以允许他们被重写。例如：`"resolve"`， `"reject"`， `"done"`， `"cb"`。

Examples of **correct** code for the `{ "allow": ["done"] }` option:

选项`{ "allow": ["done"] }`的 **正确**代码示例：

```js
/*eslint no-shadow: ["error", { "allow": ["done"] }]*/
/*eslint-env es6*/

import async from 'async';

function foo(done) {
  async.map([1, 2], function (e, done) {
    done(null, e * 2)
  }, done);
}

foo(function (err, result) {
  console.log({ err, result });
});
```

## Further Reading

* [Variable Shadowing](http://en.wikipedia.org/wiki/Variable_shadowing)

## Related Rules

* [no-shadow-restricted-names](no-shadow-restricted-names)

## Version

This rule was introduced in ESLint 0.0.9.

此规则在 ESLint 0.0.9 中被引入。

## Resources

* [Rule source](https://github.com/eslint/eslint/tree/master/lib/rules/no-shadow.js)
* [Documentation source](https://github.com/eslint/eslint/tree/master/docs/rules/no-shadow.md)
