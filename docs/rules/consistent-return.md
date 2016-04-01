---
title: Rule consistent-return
layout: doc
translator: molee1905
proofreader: sunshiner
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# Require Consistent Returns (consistent-return)

# 需要一致的返回 (consistent-return)

One of the confusing aspects of JavaScript is that any function may or may not return a value at any point in time. When a function exits without any `return` statement executing, the function returns `undefined`. Similarly, calling `return` without specifying any value will cause the function to return `undefined`.Only when `return` is called with a value is there a change in the function's return value.

JavaScript代码容易让人混乱的一点就是任何函数在执行过程中都可能返回值或者不返回值。
当函数中没有任何`return`语句执行时，函数返回`undefined`。
同样的，调用没有指定任何返回值的`return`，函数也会返回`undefined`。
只有当调用带有返回值的`return`，才会改变函数的返回值。

Unlike statically-typed languages that will catch when a function doesn't return the type of data expected, JavaScript has no such checks, meaning that it's easy to make mistakes such as this:

对于静态类型语言来说，当函数没有返回期望的数据类型时程序会捕获到，但是JavaScript没有类似的检测，意味着它很容易引起如下的错误：

```js
function doSomething(condition) {

    if (condition) {
        return true;
    } else {
        return;
    }
}
```

Here, one branch of the function returns `true`, a Boolean value, while the other exits without specifying any value (and so returns `undefined`).

如上，函数的一个分支返回了`true`，一个布尔值，然而另一个分支则没有指定任何值（所以返回`undefined`）。

This may be an indicator of a coding error, especially if this pattern is found in larger functions.

这或许将成为代码的隐患，特别是在复杂的函数中存在这种情况的话。

## Rule Details

This rule is aimed at ensuring all `return` statements either specify a value or don't specify a value.

此规则目的在于，确保所有的`return`语句指定或者不指定一个值。

It excludes constructors which, when invoked with the `new` operator, return the instantiated object if another object is not explicitly returned.  This rule treats a function as a constructor if its name starts with an uppercase letter.


Examples of **incorrect** code for this rule:

**错误**代码示例：

```js
/*eslint consistent-return: 2*/

function doSomething(condition) {

    if (condition) {
        return true;
    } else {
        return;
    }
}

function doSomething(condition) {

    if (condition) {
        return;
    } else {
        return true;
    }
}

function doSomething(condition) {

    if (condition) {
        return true;
    }
}
```

Examples of **correct** code for this rule:

**正确**代码示例：

```js
/*eslint consistent-return: 2*/

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

## When Not To Use It

If you want to allow functions to have different `return` behavior depending on code branching, then it is safe to disable this rule.

如果你想要允许函数根据代码分支有不同的`return`行为，可以安全的禁用此规则。

## Version

This rule was introduced in ESLint 0.4.0.

此规则在ESLint 0.4.0中被引入。

## Resources

* [Rule source](https://github.com/eslint/eslint/tree/master/lib/rules/consistent-return.js)
* [Documentation source](https://github.com/eslint/eslint/tree/master/docs/rules/consistent-return.md)
