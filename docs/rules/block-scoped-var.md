---
title: block-scoped-var - Rules
layout: doc
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# Treat var as Block Scoped (block-scoped-var)

# 把 var 语句看作是在块级作用域范围之内 (block-scoped-var)

The `block-scoped-var` rule generates warnings when variables are used outside of the block in which they were defined. This emulates C-style block scope.

当变量在其被定义的范围之外被使用时，该规则会发出警告。这种解析方式模拟了 C 语言中的块级作用域。
 
## Rule Details

This rule aims to reduce the usage of variables outside of their binding context and emulate traditional block scope from other languages. This is to help newcomers to the language avoid difficult bugs with variable hoisting.

此规则借鉴其他语言的块级作用域概念，旨在用来减少变量跨作用域使用情况的发生。此规则可帮助语言初学者避免因变量声明提升而产生的 bug。

Examples of **incorrect** code for this rule:

**错误** 代码示例：

```js
/*eslint block-scoped-var: "error"*/

function doIf() {
    if (true) {
        var build = true;
    }

    console.log(build);
}

function doIfElse() {
    if (true) {
        var build = true;
    } else {
        var build = false;
    }
}

function doTryCatch() {
    try {
        var build = 1;
    } catch (e) {
        var f = build;
    }
}
```

Examples of **correct** code for this rule:

**正确** 代码示例：

```js
/*eslint block-scoped-var: "error"*/

function doIf() {
    var build;

    if (true) {
        build = true;
    }

    console.log(build);
}

function doIfElse() {
    var build;

    if (true) {
        build = true;
    } else {
        build = false;
    }
}

function doTryCatch() {
    var build;
    var f;

    try {
        build = 1;
    } catch (e) {
        f = build;
    }
}
```

## Further Reading

* [JavaScript Scoping and Hoisting](http://www.adequatelygood.com/JavaScript-Scoping-and-Hoisting.html)
* [var Hoisting](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/var#var_hoisting)

## Version

This rule was introduced in ESLint 0.1.0.

该规则在 ESLint 0.1.0 中被引入。

## Resources

* [Rule source](https://github.com/eslint/eslint/tree/master/lib/rules/block-scoped-var.js)
* [Documentation source](https://github.com/eslint/eslint/tree/master/docs/rules/block-scoped-var.md)
