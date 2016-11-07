---
title: consistent-return - Rules
layout: doc
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# require `return` statements to either always or never specify values (consistent-return)

# 要求使用一致的 `return` 语句 (consistent-return)

Unlike statically-typed languages which enforce that a function returns a specified type of value, JavaScript allows different code paths in a function to return different types of values.

不像静态类型语言强制要求函数返回一个指定类型的值，JavaScript 允许在一个函数中不同的代码路径返回不同类的值。

A confusing aspect of JavaScript is that a function returns `undefined` if any of the following are true:

JavaScript 中令人感到困惑的一面是：在以下情况下函数返回 `undefined` ：

* it does not execute a `return` statement before it exits
* 在退出之前没有执行 `return` 语句
* it executes `return` which does not specify a value explicitly
* 执行 `return` 语句，但没有显式地指定一个值
* it executes `return undefined`
* 执行 `return undefined`
* it executes `return void` followed by an expression (for example, a function call)
* 执行 `return void`，其后跟着一个表达式 (例如，一个函数调用)
* it executes `return` followed by any other expression which evaluates to `undefined`
* 执行 `return`，其后跟着其它等于 `undefined` 的表达式

If any code paths in a function return a value explicitly but some code path do not return a value explicitly, it might be a typing mistake, especially in a large function. In the following example:

在一个函数中，如果任何代码路径显式的返回一个值，但一些代码路径不显式返回一个值，那么这种情况可能是个书写错误，尤其是在一个较大的函数里。例如下面的例子：

* a code path through the function returns a Boolean value `true`
* 函数中的某个代码路径返回一个布尔值 `true`
* another code path does not return a value explicitly, therefore returns `undefined` implicitly
* 另一个代码路径并不显式地返回一个值，因此隐式地返回 `undefined`

```js
function doSomething(condition) {
    if (condition) {
        return true;
    } else {
        return;
    }
}
```

## Rule Details

This rule requires `return` statements to either always or never specify values. This rule ignores function definitions where the name begins with an uppercase letter, because constructors (when invoked with the `new` operator) return the instantiated object implicitly if they do not return another object explicitly.

该规则要求 `return` 语句要么总是要么从不指定值。该规则忽略名称首字母大写的函数定义，因为构造函数（当使用 `new` 操作符调用时）如果不显式地返回另一对象，则会隐式地返回实例化的对象。

Examples of **incorrect** code for this rule:

**错误** 的代码示例：

```js
/*eslint consistent-return: "error"*/

function doSomething(condition) {
    if (condition) {
        return true;
    } else {
        return;
    }
}

function doSomething(condition) {
    if (condition) {
        return true;
    }
}
```

Examples of **correct** code for this rule:

**正确** 的代码示例：

```js
/*eslint consistent-return: "error"*/

function doSomething(condition) {
    if (condition) {
        return true;
    } else {
        return false;
    }
}

function Foo() {
    if (!(this instanceof Foo)) {
        return new Foo();
    }

    this.a = 0;
}
```

## Options

This rule has an object option:

该规则有一个对象选项：

* `"treatUndefinedAsUnspecified": false` (default) always either specify values or return `undefined` implicitly only.
* `"treatUndefinedAsUnspecified": false` (默认) 总是指定返回值或隐式返回 `undefined` 。
* `"treatUndefinedAsUnspecified": true` always either specify values or return `undefined` explicitly or implicitly.
* `"treatUndefinedAsUnspecified": true` 总是指定返回值或返回 `undefined` 无论是隐式或显式。

### treatUndefinedAsUnspecified

Examples of **incorrect** code for this rule with the default `{ "treatUndefinedAsUnspecified": false }` option:

默认选项 `{ "treatUndefinedAsUnspecified": false }` 的 **错误** 代码示例：

```js
/*eslint consistent-return: ["error", { "treatUndefinedAsUnspecified": false }]*/

function foo(callback) {
    if (callback) {
        return void callback();
    }
    // no return statement
}

function bar(condition) {
    if (condition) {
        return undefined;
    }
    // no return statement
}
```

Examples of **incorrect** code for this rule with the `{ "treatUndefinedAsUnspecified": true }` option:

选项 `{ "treatUndefinedAsUnspecified": true }` 的 **错误** 代码示例：

```js
/*eslint consistent-return: ["error", { "treatUndefinedAsUnspecified": true }]*/

function foo(callback) {
    if (callback) {
        return void callback();
    }
    return true;
}

function bar(condition) {
    if (condition) {
        return undefined;
    }
    return true;
}
```

Examples of **correct** code for this rule with the `{ "treatUndefinedAsUnspecified": true }` option:

选项 `{ "treatUndefinedAsUnspecified": true }` 的 **正确** 代码示例：

```js
/*eslint consistent-return: ["error", { "treatUndefinedAsUnspecified": true }]*/

function foo(callback) {
    if (callback) {
        return void callback();
    }
    // no return statement
}

function bar(condition) {
    if (condition) {
        return undefined;
    }
    // no return statement
}
```

## When Not To Use It

If you want to allow functions to have different `return` behavior depending on code branching, then it is safe to disable this rule.

如果你想要允许函数根据代码分支有不同的`return`行为，可以禁用此规则。

## Version

This rule was introduced in ESLint 0.4.0.

该规则在 ESLint 0.4.0 中被引入。

## Resources

* [Rule source](https://github.com/eslint/eslint/tree/master/lib/rules/consistent-return.js)
* [Documentation source](https://github.com/eslint/eslint/tree/master/docs/rules/consistent-return.md)
