---
title: Rule block-scoped-var
layout: doc
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# Treat var as Block Scoped (block-scoped-var)

# 把 var 语句看作是在块级作用域范围之内 (block-scoped-var)

The `block-scoped-var` rule generates warnings when variables are used outside of the block in which they were defined. This emulates C-style block scope.

当变量在其被定义的范围之外被使用时，会违反block-scoped-var规则，从而被警告。
这种解析方式模拟了c语言中的块级作用域。
 
```js
function doSomething() {
    if (true) {
        var build = true;
    }

    console.log(build);
}
```

## Rule Details

This rule aims to reduce the usage of variables outside of their binding context and emulate traditional block scope from other languages. This is to help newcomers to the language avoid difficult bugs with variable hoisting.

此规则借鉴其他语言的块级作用域概念，用来减少变量跨作用域使用情况的发生。

The following patterns are considered problems:

以下模式被认为是有问题的：

```js
/*eslint block-scoped-var: 2*/

function doSomething() {
    if (true) {
        var build = true;
    }

    console.log(build);
}
```

```js
/*eslint block-scoped-var: 2*/

function doSomething() {
    if (true) {
        var build = true;
    } else {
        var build = false;
    }
}
```

```js
/*eslint block-scoped-var: 2*/

function doAnother() {
    try {
        var build = 1;
    } catch (e) {
        var f = build;
    }
}
```

The following patterns are not considered problems:

以下模式被认为是没有问题的：

```js
/*eslint block-scoped-var: 2*/

function doSomething() {
    var build;

    if (true) {
        build = true;
    }

    console.log(build);
}
```

```js
/*eslint block-scoped-var: 2*/

function doSomething() {
    var build;

    if (true) {
        build = true;
    } else {
        build = false;
    }
}
```

## Further Reading

* [JavaScript Scoping and Hoisting](http://www.adequatelygood.com/JavaScript-Scoping-and-Hoisting.html)
* [var Hoisting](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/var#var_hoisting)

## Version

This rule was introduced in ESLint 0.1.0.

该规则在ESLint 0.1.0 中被引入。

## Resources

* [Rule source](https://github.com/eslint/eslint/tree/master/lib/rules/block-scoped-var.js)
* [Documentation source](https://github.com/eslint/eslint/tree/master/docs/rules/block-scoped-var.md)
