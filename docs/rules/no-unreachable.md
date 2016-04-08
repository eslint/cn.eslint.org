---
title: Rule no-unreachable
layout: doc
translator: molee1905
proofreader: coocon 
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# Disallow Unreachable Code (no-unreachable)

# 禁止不可达代码 (no-unreachable)

A number of statements unconditionally exit a block of code. Any statements after that will not be executed and may be an error. The presence of unreachable code is usually a sign of a coding error.

很多语句无条件的退出代码块。它们之后的任何语句将不会被执行，可能是个错误。出现不可达代码通常是一个编码错误的标志。

```js
function fn() {
    x = 1;
    return x;
    x = 3; // this will never execute
}
```

## Rule Details

This rule is aimed at detecting unreachable code. It produces an error when a statements exist after a `return`, `throw`, `break`, or `continue` statement.

该规则旨在检测不可达代码。当一个块中某个语句出现在 `return`，`throw`，`break`，或 `continue` 语句之后，它将产生一个错误。 
 
Examples of **incorrect** code for this rule:

**错误**代码示例：

```js
/*eslint no-unreachable: "error"*/

function foo() {
    return true;
    console.log("done");
}

function bar() {
    throw new Error("Oops!");
    console.log("done");
}

while(value) {
    break;
    console.log("done");
}

throw new Error("Oops!");
console.log("done");

function baz() {
    if (Math.random() < 0.5) {
        return;
    } else {
        throw new Error();
    }
    console.log("done");
}

for (;;) {}
console.log("done");
```

Examples of **correct** code for this rule, because of JavaScript function and variable hoisting:

**正确**代码示例，由于 Javascript 函数和变量提升：

```js
/*eslint no-unreachable: "error"*/

function foo() {
    return bar();
    function bar() {
        return 1;
    }
}

function bar() {
    return x;
    var x;
}

switch (foo) {
    case 1:
        break;
        var x;
}
```

## Version

This rule was introduced in ESLint 0.0.6.

该规则在 ESLint 0.0.6 中被引入。

## Resources

* [Rule source](https://github.com/eslint/eslint/tree/master/lib/rules/no-unreachable.js)
* [Documentation source](https://github.com/eslint/eslint/tree/master/docs/rules/no-unreachable.md)
