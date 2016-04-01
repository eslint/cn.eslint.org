---
title: Rule vars-on-top
layout: doc
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# Require Variable Declarations to be at the top of their scope (vars-on-top)

# 要求将变量声明放在它们作用域的顶部 (vars-on-top)

The `vars-on-top` rule generates warnings when variable declarations are not used serially at the top of a function scope or the top of a program.
By default variable declarations are always moved (“hoisted”) invisibly to the top of their containing scope by the JavaScript interpreter.
This rule forces the programmer to represent that behaviour by manually moving the variable declaration to the top of its containing scope.

`vars-on-top`规则会生成警告，当变量的声明不是在函数作用域顶部或者项目顶部被连续使用时。默认的，JavaScript的解析器会隐式的将变量的声明移到它们所在作用域的顶部。这个规则迫使程序员通过手动移动变量声明到其作用域的顶部来实现这个行为。

## Rule Details

This rule aims to keep all variable declarations in the leading series of statements.
Allowing multiple declarations helps promote maintainability and is thus allowed.

此规则目的在于保持所有的变量声明在一系列的语句中处于前导地位。允许多行声明有助于提高可维护性因此是被允许的。

The following patterns are considered problems:

以下模式被认为是有问题的：

```js
/*eslint vars-on-top: 2*/

// Variable declarations in a block:
function doSomething() {
    var first;
    if (true) {
        first = true;
    }
    var second;
}

// Variable declaration in for initializer:
function doSomething() {
    for (var i=0; i<10; i++) {}
}

// Variables after other statements:
f();
var a;
```

The following patterns are not considered problems:

以下模式被认为是没有问题的：

```js
/*eslint vars-on-top: 2*/

function doSomething() {
    var first;
    var second; //multiple declarations are allowed at the top
    if (true) {
        first = true;
    }
}

function doSomething() {
    var i;
    for (i=0; i<10; i++) {}
}
```

```js
/*eslint vars-on-top: 2*/

var a;
f();
```

```js
/*eslint vars-on-top: 2*/

// Directives may precede variable declarations.
"use strict";
var a;
f();

// Comments can describe variables.
function doSomething() {
    // this is the first var.
    var first;
    // this is the second var.
    var second
}
```

## Further Reading

* [JavaScript Scoping and Hoisting](http://www.adequatelygood.com/JavaScript-Scoping-and-Hoisting.html)
* [var Hoisting](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/var#var_hoisting)
* [A criticism of the Single Var Pattern in JavaScript, and a simple alternative](http://danielhough.co.uk/blog/single-var-pattern-rant/)
* [Multiple var statements in JavaScript, not superfluous](http://benalman.com/news/2012/05/multiple-var-statements-javascript/)

## Version

This rule was introduced in ESLint 0.8.0.

此规则在ESLint 0.8.0中被引入。

## Resources

* [Rule source](https://github.com/eslint/eslint/tree/master/lib/rules/vars-on-top.js)
* [Documentation source](https://github.com/eslint/eslint/tree/master/docs/rules/vars-on-top.md)
