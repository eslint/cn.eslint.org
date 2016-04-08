---
title: Rule new-cap
layout: doc
translator: molee1905
proofreader: molee1905
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# Require Constructors to Use Initial Caps (new-cap)

# 要求构造函数首字母大写 (new-cap)

The `new` operator in JavaScript creates a new instance of a particular type of object. That type of object is represented by a constructor function. Since constructor functions are just regular functions, the only defining characteristic is that `new` is being used as part of the call. Native JavaScript functions begin with an uppercase letter to distinguish those functions that are to be used as constructors from functions that are not. Many style guides recommend following this pattern to more easily determine which functions are to be used as constructors.

在 Javascript 中`new`操作符用来创建特定类型的对象的一个实例。该类型的对象是由一个构造函数表示的。由于构造函数只是常规函数，唯一区别是使用`new`来调用。本地 Javascript 函数以首字母大写来区分是否是构造函数。许多风格指南推荐以下模式，可以更容易的确定那些函数被用作构造函数。

```js
var friend = new Person();
```

## Rule Details

This rule is aimed at helping to distinguish regular functions from constructor functions. As such, it warns whenever it sees `new` followed by an identifier that isn't capitalized or whenever it sees capitalized function called directly without `new` operator.

该规则旨在帮助区分常规函数和构造函数。因此，当`new`后的标识符不是首字母大写的或者首字母大写的函数被调用时没有`new`操作符，该规则将发出警告。

The following patterns are considered problems:

以下模式被认为是有问题的：

```js
/*eslint new-cap: "error"*/

var friend = new person();
var colleague = Person();
```

The following patterns are not considered problems:

以下模式被认为是没有问题的：

```js
/*eslint new-cap: "error"*/

var friend = new Person();
var colleague = person();
```

```js
/*eslint new-cap: ["error", {"capIsNewExceptions": ["Person"]}]*/

var colleague = Person();
var colleague = foo.Person();
var colleague = foo.bar.Person();
```

```js
/*eslint new-cap: ["error", {"capIsNewExceptions": ["foo.Person"]}]*/

var colleague = foo.Person();
```

## Options

By default both `newIsCap` and `capIsNew` options are set to `true`.

默认情况下，`newIsCap` 和 `capIsNew`选项都为`true`。

### newIsCap

When `true`, rule checks if all `new` operators are called only with uppercase-started functions.

当为`true`时，该规则检查所有的`new`操作符被调用时，后面的函数是否都是首字母大写。

### capIsNew

When `true`, rule checks if all uppercase-started functions are called only with `new` operator.

当为`true`时，该规则检查所有的首字母大写的函数被调用时，前面的方法是否都有`new`操作符。

### newIsCapExceptions

Array of lowercase function names that are permitted to be used with the `new` operator.
If provided, it must be an `Array`.

允许和`new`操作符一起使用的小写的函数名称的数组。如果提供了该选项，它必须是个`数组`。

### capIsNewExceptions

Array of uppercase-starting function names that are permitted to be used without the `new` operator. If not provided, `capIsNewExceptions` defaults to the following:

允许不和`new`操作符一起使用的大写的函数名称的数组。如果没有提供该选项，`capIsNewExceptions` 默认包含以下元素：

* `Array`
* `Boolean`
* `Date`
* `Error`
* `Function`
* `Number`
* `Object`
* `RegExp`
* `String`
* `Symbol`

If provided, it must be an `Array`. The default values will continue to be excluded when `capIsNewExceptions` is provided.

如果提供了该选项，它必须是个`数组`。当提供了`capIsNewExceptions` 选项时，默认值将被排除在外。

### properties

By default, this rule will check properties such as `object.Property` using the other options (default value is `true`). When set to `false`, this rule will not check properties so `new object.property()` is valid even when `newIsCap` is `true`.

默认情况下，该规则将使用其它选项(默认值为`true`)检查所有属性，比如`object.Property`。当设置为`false`时，该规则将不检查属性，这样，即使`newIsCap` 为 `true`，`new object.property()`也是有效的。

## When Not To Use It

If you have conventions that don't require an uppercase letter for constructors, or don't require capitalized functions be only used as constructors, turn this rule off.

如果你有约定，不需要构造函数首字母大写，或不需要首字母大写的函数仅仅被用作构造函数，那么可以关闭此规则。

## Version

This rule was introduced in ESLint 0.0.3-0.

该规则在 ESLint 0.0.3-0 中被引入。

## Resources

* [Rule source](https://github.com/eslint/eslint/tree/master/lib/rules/new-cap.js)
* [Documentation source](https://github.com/eslint/eslint/tree/master/docs/rules/new-cap.md)
