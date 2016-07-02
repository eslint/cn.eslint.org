---
title: Rule new-cap
layout: doc
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# require constructor `function` names to begin with a capital letter (new-cap)

# 要求构造函数首字母大写 (new-cap)

The `new` operator in JavaScript creates a new instance of a particular type of object. That type of object is represented by a constructor function. Since constructor functions are just regular functions, the only defining characteristic is that `new` is being used as part of the call. Native JavaScript functions begin with an uppercase letter to distinguish those functions that are to be used as constructors from functions that are not. Many style guides recommend following this pattern to more easily determine which functions are to be used as constructors.

在 JavaScript 中 `new` 操作符用来创建某个特定类型的对象的一个实例。该类型的对象是由一个构造函数表示的。由于构造函数只是常规函数，唯一区别是使用 `new` 来调用。本地 JavaScript 函数以首字母大写来区分是否是构造函数。许多风格指南推荐以下模式，可以更容易的确定哪些函数被用作构造函数。

```js
var friend = new Person();
```

## Rule Details

This rule requires constructor names to begin with a capital letter. Certain built-in identifiers are exempt from this rule. These identifiers are:

该规则要求构造函数名首字母大写。特定内建标识符不适用于此规则。这些标识符是：

* `Array`
* `Array`
* `Boolean`
* `Boolean`
* `Date`
* `Date`
* `Error`
* `Error`
* `Function`
* `Function`
* `Number`
* `Number`
* `Object`
* `Object`
* `RegExp`
* `RegExp`
* `String`
* `String`
* `Symbol`
* `Symbol`

Examples of **correct** code for this rule:

**正确** 代码示例：

```js
/*eslint new-cap: "error"*/

function foo(arg) {
    return Boolean(arg);
}
```

## Options

This rule has an object option:

该规则有一个对象选项：

* `"newIsCap": true` (default) requires all `new` operators to be called with uppercase-started functions.
* `"newIsCap": true` (默认) 要求调用 `new` 操作符时有首字母大小的函数。
* `"newIsCap": false` allows `new` operators to be called with lowercase-started or uppercase-started functions.
* `"newIsCap": false` 允许调用 `new` 操作符有首字母小写或首字母大写的函数。
* `"capIsNew": true` (default) requires all uppercase-started functions to be called with `new` operators.
* `"capIsNew": true` (默认) 要求调用首字母大写的函数时有 `new` 操作符。
* `"capIsNew": false` allows uppercase-started functions to be called without `new` operators.
* `"capIsNew": false` 允许调用首字母大写的函数时没有 `new` 操作符。
* `"newIsCapExceptions"` allows specified lowercase-started function names to be called with the `new` operator.
* `"newIsCapExceptions"` 允许调用指定的首字母小写的函数时有 `new` 操作符。
* `"capIsNewExceptions"` allows specified uppercase-started function names to be called without the `new` operator.
* `"capIsNewExceptions"` 允许调用指定的首字母大写的函数时没有 `new` 操作符。
* `"properties": true` (default) enables checks on object properties
* `"properties": true` (默认) 检查对象属性。
* `"properties": false` disables checks on object properties
* `"properties": false` 禁止检查对象属性。

### newIsCap

Examples of **incorrect** code for this rule with the default `{ "newIsCap": true }` option:

默认选项 `{ "newIsCap": true }` 的 **错误** 代码示例：

```js
/*eslint new-cap: ["error", { "newIsCap": true }]*/

var friend = new person();
```

Examples of **correct** code for this rule with the default `{ "newIsCap": true }` option:

默认选项 `{ "newIsCap": true }` 的 **正确** 代码示例：

```js
/*eslint new-cap: ["error", { "newIsCap": true }]*/

var friend = new Person();
```

Examples of **correct** code for this rule with the `{ "newIsCap": false }` option:

选项 `{ "newIsCap": false }` 的 **正确** 代码示例：

```js
/*eslint new-cap: ["error", { "newIsCap": false }]*/

var friend = new person();
```

### capIsNew

Examples of **incorrect** code for this rule with the default `{ "capIsNew": true }` option:

默认选项 `{ "capIsNew": true }` 的 **错误** 代码示例：

```js
/*eslint new-cap: ["error", { "capIsNew": true }]*/

var colleague = Person();
```

Examples of **correct** code for this rule with the default `{ "capIsNew": true }` option:

默认选项 `{ "capIsNew": true }` 的 **正确** 代码示例：

```js
/*eslint new-cap: ["error", { "capIsNew": true }]*/

var colleague = new Person();
```

Examples of **correct** code for this rule with the `{ "capIsNew": false }` option:

选项 `{ "capIsNew": false }` 的 **正确** 代码示例：

```js
/*eslint new-cap: ["error", { "capIsNew": false }]*/

var colleague = Person();
```

### newIsCapExceptions

Examples of additional **correct** code for this rule with the `{ "newIsCapExceptions": ["events"] }` option:

选项 `{ "newIsCapExceptions": ["events"] }` 的 **正确** 代码示例：

```js
/*eslint new-cap: ["error", { "newIsCapExceptions": ["events"] }]*/

var events = require('events');

var emitter = new events();
```

### capIsNewExceptions

Examples of additional **correct** code for this rule with the `{ "capIsNewExceptions": ["Person"] }` option:

选项 `{ "capIsNewExceptions": ["Person"] }` 的 **正确** 代码示例：

```js
/*eslint new-cap: ["error", { "capIsNewExceptions": ["Person"] }]*/

function foo(arg) {
    return Person(arg);
}
```

### properties

Examples of **incorrect** code for this rule with the default `{ "properties": true }` option:

默认选项 `{ "properties": true }` 的 **错误** 代码示例：

```js
/*eslint new-cap: ["error", { "properties": true }]*/

var friend = new person.acquaintance();
```

Examples of **correct** code for this rule with the default `{ "properties": true }` option:

默认选项 `{ "properties": true }` 的 **正确** 代码示例：

```js
/*eslint new-cap: ["error", { "properties": true }]*/

var friend = new person.Acquaintance();
```

Examples of **correct** code for this rule with the `{ "properties": false }` option:

选项 `{ "properties": false }` 的 **正确** 代码示例：

```js
/*eslint new-cap: ["error", { "properties": false }]*/

var friend = new person.acquaintance();
```

## When Not To Use It

If you have conventions that don't require an uppercase letter for constructors, or don't require capitalized functions be only used as constructors, turn this rule off.

如果你有约定，不需要构造函数首字母大写，或不需要首字母大写的函数仅仅被用作构造函数，那么可以关闭此规则。

## Version

This rule was introduced in ESLint 0.0.3-0.

该规则在 ESLint 0.0.3-0 中被引入。

## Resources

* [Rule source](https://github.com/eslint/eslint/tree/master/lib/rules/new-cap.js)
* [Documentation source](https://github.com/eslint/eslint/tree/master/docs/rules/new-cap.md)
