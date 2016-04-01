---
title: Rule no-func-assign
layout: doc
translator: ybbjegj
proofreader: molee1905
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# Disallow Function Assignment (no-func-assign)

# 禁止函数赋值（no-func-assign）

JavaScript functions can be written as a FunctionDeclaration `function foo() { ... }` or as a FunctionExpression `var foo = function() { ... };`. While a JavaScript interpreter might tolerate it, overwriting/reassigning a function written as a FunctionDeclaration is often indicative of a mistake or issue.

Javascript函数能以函数声明 `function foo() { ... }` 或者函数表达式 `var foo = function() { ... }`的形式书写。对一个函数进行覆盖或再指定，尽管Javascript解释器可以接受，但通常是个错误或问题。

```js
function foo() {}
foo = bar;
```

## Rule Details

This rule is aimed at flagging probable mistakes and issues in the form of overwriting a function that was written as a FunctionDeclaration. As such it will warn when this issue is encountered.

该规则旨在消除对函数重写带来的错误和问题。因此遇到这个问题时将发出警告。

Examples of **incorrect** code for this rule:

**错误**代码示例：

```js
/*eslint no-func-assign: 2*/

function foo() {}
foo = bar;

function foo() {
    foo = bar;
}
```

Examples of **incorrect** code for this rule, unlike the corresponding rule in JSHint:

**错误**代码示例，与JSHint中的规则不同：

```js
/*eslint no-func-assign: 2*/

foo = bar;
function foo() {}
```

Examples of **correct** code for this rule:

**正确**代码示例：

```js
/*eslint no-func-assign: 2*/

var foo = function () {}
foo = bar;

function foo(foo) { // `foo` is shadowed.
    foo = bar;
}

function foo() {
    var foo = bar;  // `foo` is shadowed.
}
```

## Version

This rule was introduced in ESLint 0.0.9.

该规则是在 ESLint 0.0.9 中被引入的。

## Resources

* [Rule source](https://github.com/eslint/eslint/tree/master/lib/rules/no-func-assign.js)
* [Documentation source](https://github.com/eslint/eslint/tree/master/docs/rules/no-func-assign.md)
