---
title: one-var - Rules
layout: doc
edit_link: https://github.com/eslint/eslint/edit/master/docs/rules/one-var.md
rule_type: suggestion
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# enforce variables to be declared either together or separately in functions (one-var)

# 强制函数中的变量在一起声明或分开声明 (one-var)

(fixable) The `--fix` option on the [command line](../user-guide/command-line-interface#fixing-problems) can automatically fix some of the problems reported by this rule.

(fixable) [命令行](../user-guide/command-line-interface#fixing-problems)中的 `--fix` 选项可以自动修复一些该规则报告的问题。

Variables can be declared at any point in JavaScript code using `var`, `let`, or `const`. There are many styles and preferences related to the declaration of variables, and one of those is deciding on how many variable declarations should be allowed in a single function.

变量可以在 JavaScript 的任何地方通过使用 `var`、`let` 或 `const` 进行声明。有很多风格和首选项都与变量声明有关，其中之一就是决定在一个方法中应该允许多少个变量声明。

There are two schools of thought in this regard:

在这个方面有两个思想流派：

1. There should be just one variable declaration for all variables in the function. That declaration typically appears at the top of the function.
1. 在方法中所有的变量应该只有一个声明。这个声明通常出现在方法顶部。
1. You should use one variable declaration for each variable you want to define.
1. 你应该为每个你想定义的变量进行声明。

For instance:

例如：

```js
// one variable declaration per function
function foo() {
    var bar, baz;
}

// multiple variable declarations per function
function foo() {
    var bar;
    var baz;
}
```

The single-declaration school of thought is based in pre-ECMAScript 6 behaviors, where there was no such thing as block scope, only function scope. Since all `var` statements are hoisted to the top of the function anyway, some believe that declaring all variables in a single declaration at the top of the function removes confusion around scoping rules.

单一声明的思想流派是基于 ECMAScript 6 之前版本的行为，没有块作用域，只有方法作用域。由于所有的 `var` 语句都会被提升到函数顶部，有些人认为将所有的变量一一条语句声明在函数顶部，避免了函数范围内的混乱。

## Rule Details

This rule enforces variables to be declared either together or separately per function ( for `var`) or block (for `let` and `const`) scope.

该规则旨在强制在函数 (`var`) 或块 (`let` 和 `const`) 范围使用单一声明还是多条声明。

## Options

This rule has one option, which can be a string option or an object option.

该规则有一个选项，可以是字符串或对象。

String option:

字符串选项：

* `"always"` (default) requires one variable declaration per scope
* `"always"` (默认) 要求每个作用域有一个变量声明
* `"never"` requires multiple variable declarations per scope
* `"never"` 要求每个作用域有多个变量声明
* `"consecutive"` allows multiple variable declarations per scope but requires consecutive variable declarations to be combined into a single declaration
* `"consecutive"` 每个作用域允许出现多个变量声明，但对连续的变量声明要求合并为单个声明

Object option:

对象选项：

* `"var": "always"` requires one `var` declaration per function
* `"var": "always"` 要求每个函数有一个 `var` 声明
* `"var": "never"` requires multiple `var` declarations per function
* `"var": "never"` 要求每个函数有多个 `var` 声明
* `"var": "consecutive"` requires consecutive `var` declarations to be a single declaration
* `"var": "consecutive"` 要求连续的 `var` 声明合并为一个
* `"let": "always"` requires one `let` declaration per block
* `"let": "always"` 要求每个块有一个 `let` 声明
* `"let": "never"` requires multiple `let` declarations per block
* `"let": "never"` 要求每个块有多个 `let` 声明
* `"let": "consecutive"` requires consecutive `let` declarations to be a single declaration
* `"let": "consecutive"` 要求连续的 `let` 声明合并为一个
* `"const": "always"` requires one `const` declaration per block
* `"const": "always"` 要求每个块有一个 `const` 声明
* `"const": "never"` requires multiple `const` declarations per block
* `"const": "never"` 要求每个块有多个 `const` 声明
* `"const": "consecutive"` requires consecutive `const` declarations to be a single declaration
* `"const": "consecutive"` 要求连续的 `const` 声明合并为一个
* `"separateRequires": true` enforces `requires` to be separate from declarations
* `"separateRequires": true` 强制 `requires` 分开声明


Alternate object option:

对象选项：

* `"initialized": "always"` requires one variable declaration for initialized variables per scope
* `"initialized": "always"` 要求每个作用域的初始化的变量有一个变量声明
* `"initialized": "never"` requires multiple variable declarations for initialized variables per scope
* `"initialized": "never"` 要求每个作用域的初始化的变量有多个变量声明
* `"initialized": "consecutive"` requires consecutive variable declarations for initialized variables to be a single declaration
* `"initialized": "consecutive"` 对已经初始化的变量，要求其连续的变量声明合并为一个声明
* `"uninitialized": "always"` requires one variable declaration for uninitialized variables per scope
* `"uninitialized": "always"` 要求每个作用域的未初始化的变量有一个变量声明
* `"uninitialized": "never"` requires multiple variable declarations for uninitialized variables per scope
* `"uninitialized": "never"` 要求每个作用域的未初始化的变量有多个变量声明
* `"uninitialized": "consecutive"` requires consecutive variable declarations for uninitialized variables to be a single declaration
* `"uninitialized": "consecutive"` 对未初始化的变量，要求其连续的变量声明合并为一个声明

### always

Examples of **incorrect** code for this rule with the default `"always"` option:

默认选项 `"always"` 的 **错误** 代码示例：

```js
/*eslint one-var: ["error", "always"]*/
/*eslint-env es6*/

function foo() {
    var bar;
    var baz;
    let qux;
    let norf;
}

function foo(){
    const bar = false;
    const baz = true;
    let qux;
    let norf;
}

function foo() {
    var bar;

    if (baz) {
        var qux = true;
    }
}
```

Examples of **correct** code for this rule with the default `"always"` option:

默认选项 `"always"` 的 **正确** 代码示例：

```js
/*eslint one-var: ["error", "always"]*/
/*eslint-env es6*/

function foo() {
    var bar,
        baz;
    let qux,
        norf;
}

function foo(){
    const bar = true,
        baz = false;
    let qux,
        norf;
}

function foo() {
    var bar,
        qux;

    if (baz) {
        qux = true;
    }
}

function foo(){
    let bar;

    if (baz) {
        let qux;
    }
}
```

### never

Examples of **incorrect** code for this rule with the `"never"` option:

选项 `"never"` 的 **错误** 代码示例：

```js
/*eslint one-var: ["error", "never"]*/
/*eslint-env es6*/

function foo() {
    var bar,
        baz;
    const bar = true,
        baz = false;
}

function foo() {
    var bar,
        qux;

    if (baz) {
        qux = true;
    }
}

function foo(){
    let bar = true,
        baz = false;
}
```

Examples of **correct** code for this rule with the `"never"` option:

选项 `"never"` 的 **正确** 代码示例：

```js
/*eslint one-var: ["error", "never"]*/
/*eslint-env es6*/

function foo() {
    var bar;
    var baz;
}

function foo() {
    var bar;

    if (baz) {
        var qux = true;
    }
}

function foo() {
    let bar;

    if (baz) {
        let qux = true;
    }
}
```

### consecutive

Examples of **incorrect** code for this rule with the `"consecutive"` option:

选项 `"consecutive"` 的 **错误** 代码示例：

```js
/*eslint one-var: ["error", "consecutive"]*/
/*eslint-env es6*/

function foo() {
    var bar;
    var baz;
}

function foo(){
    var bar = 1;
    var baz = 2;

    qux();

    var qux = 3;
    var quux;
}
```

Examples of **correct** code for this rule with the `"consecutive"` option:

选项 `"consecutive"` 的 **正确** 代码示例：

```js
/*eslint one-var: ["error", "consecutive"]*/
/*eslint-env es6*/


function foo() {
    var bar,
        baz;
}

function foo(){
    var bar = 1,
        baz = 2;

    qux();

    var qux = 3,
        quux;
}
```

### var, let, and const

Examples of **incorrect** code for this rule with the `{ var: "always", let: "never", const: "never" }` option:

选项 `{ var: "always", let: "never", const: "never" }` 的 **错误** 代码示例：

```js
/*eslint one-var: ["error", { var: "always", let: "never", const: "never" }]*/
/*eslint-env es6*/

function foo() {
    var bar;
    var baz;
    let qux,
        norf;
}

function foo() {
    const bar = 1,
          baz = 2;
    let qux,
        norf;
}
```

Examples of **correct** code for this rule with the `{ var: "always", let: "never", const: "never" }` option:

选项 `{ var: "always", let: "never", const: "never" }` 的 **正确** 代码示例：

```js
/*eslint one-var: ["error", { var: "always", let: "never", const: "never" }]*/
/*eslint-env es6*/

function foo() {
    var bar,
        baz;
    let qux;
    let norf;
}

function foo() {
    const bar = 1;
    const baz = 2;
    let qux;
    let norf;
}
```

Examples of **incorrect** code for this rule with the `{ var: "never" }` option:

选项 `{ var: "never" }` 的 **错误** 代码示例：

```js
/*eslint one-var: ["error", { var: "never" }]*/
/*eslint-env es6*/

function foo() {
    var bar,
        baz;
}
```

Examples of **correct** code for this rule with the `{ var: "never" }` option:

选项 `{ var: "never" }` 的 **正确** 代码示例：

```js
/*eslint one-var: ["error", { var: "never" }]*/
/*eslint-env es6*/

function foo() {
    var bar,
        baz;
    const bar = 1; // `const` and `let` declarations are ignored if they are not specified
    const baz = 2;
    let qux;
    let norf;
}
```

Examples of **incorrect** code for this rule with the `{ separateRequires: true }` option:

选项 `{ separateRequires: true }` 的 **错误** 代码示例：

```js
/*eslint one-var: ["error", { separateRequires: true, var: "always" }]*/
/*eslint-env node*/

var foo = require("foo"),
    bar = "bar";
```

Examples of **correct** code for this rule with the `{ separateRequires: true }` option:

选项 `{ separateRequires: true }` 的 **正确** 代码示例：

```js
/*eslint one-var: ["error", { separateRequires: true, var: "always" }]*/
/*eslint-env node*/

var foo = require("foo");
var bar = "bar";
```

```js
var foo = require("foo"),
    bar = require("bar");
```

Examples of **incorrect** code for this rule with the `{ var: "never", let: "consecutive", const: "consecutive" }` option:

选项 `{ var: "never", let: "consecutive", const: "consecutive" }` 的 **错误** 代码示例：

```js
/*eslint one-var: ["error", { var: "never", let: "consecutive", const: "consecutive" }]*/
/*eslint-env es6*/

function foo() {
    let a,
        b;
    let c;

    var d,
        e;
}

function foo() {
    const a = 1,
        b = 2;
    const c = 3;

    var d,
        e;
}
```

Examples of **correct** code for this rule with the `{ var: "never", let: "consecutive", const: "consecutive" }` option:

选项 `{ var: "never", let: "consecutive", const: "consecutive" }` 的 **正确** 代码示例：

```js
/*eslint one-var: ["error", { var: "never", let: "consecutive", const: "consecutive" }]*/
/*eslint-env es6*/

function foo() {
    let a,
        b;

    var d;
    var e;

    let f;
}

function foo() {
    const a = 1,
          b = 2;

    var c;
    var d;

    const e = 3;
}
```

Examples of **incorrect** code for this rule with the `{ var: "consecutive" }` option:

选项 `{ var: "consecutive" }` 的 **错误** 代码示例：

```js
/*eslint one-var: ["error", { var: "consecutive" }]*/
/*eslint-env es6*/

function foo() {
    var a;
    var b;
}
```

Examples of **correct** code for this rule with the `{ var: "consecutive" }` option:

选项 `{ var: "consecutive" }` 的 **正确** 代码示例：

```js
/*eslint one-var: ["error", { var: "consecutive" }]*/
/*eslint-env es6*/

function foo() {
    var a,
        b;
    const c = 1; // `const` and `let` declarations are ignored if they are not specified
    const d = 2;
    let e;
    let f;
}
```

### initialized and uninitialized

Examples of **incorrect** code for this rule with the `{ "initialized": "always", "uninitialized": "never" }` option:

选项 `{ "initialized": "always", "uninitialized": "never" }` 的 **错误** 代码示例：

```js
/*eslint one-var: ["error", { "initialized": "always", "uninitialized": "never" }]*/
/*eslint-env es6*/

function foo() {
    var a, b, c;
    var foo = true;
    var bar = false;
}
```

Examples of **correct** code for this rule with the `{ "initialized": "always", "uninitialized": "never" }` option:

选项 `{ "initialized": "always", "uninitialized": "never" }` 的 **正确** 代码示例：

```js
/*eslint one-var: ["error", { "initialized": "always", "uninitialized": "never" }]*/

function foo() {
    var a;
    var b;
    var c;
    var foo = true,
        bar = false;
}

for (let z of foo) {
    doSomething(z);
}

let z;
for (z of foo) {
    doSomething(z);
}
```

Examples of **incorrect** code for this rule with the `{ "initialized": "never" }` option:

选项 `{ "initialized": "never" }` 的 **错误** 代码示例：

```js
/*eslint one-var: ["error", { "initialized": "never" }]*/
/*eslint-env es6*/

function foo() {
    var foo = true,
        bar = false;
}
```

Examples of **correct** code for this rule with the `{ "initialized": "never" }` option:

选项 `{ "initialized": "never" }` 的 **正确** 代码示例：

```js
/*eslint one-var: ["error", { "initialized": "never" }]*/

function foo() {
    var foo = true;
    var bar = false;
    var a, b, c; // Uninitialized variables are ignored
}
```

Examples of **incorrect** code for this rule with the `{ "initialized": "consecutive", "uninitialized": "never" }` option:

选项 `{ "initialized": "consecutive", "uninitialized": "never" }` 的 **错误** 代码示例：

```js
/*eslint one-var: ["error", { "initialized": "consecutive", "uninitialized": "never" }]*/

function foo() {
    var a = 1;
    var b = 2;
    var c,
        d;
    var e = 3;
    var f = 4;
}
```

Examples of **correct** code for this rule with the `{ "initialized": "consecutive", "uninitialized": "never" }` option:

选项 `{ "initialized": "consecutive", "uninitialized": "never" }` 的 **正确** 代码示例：

```js
/*eslint one-var: ["error", { "initialized": "consecutive", "uninitialized": "never" }]*/

function foo() {
    var a = 1,
        b = 2;
    var c;
    var d;
    var e = 3,
        f = 4;
}
```

Examples of **incorrect** code for this rule with the `{ "initialized": "consecutive" }` option:

选项 `{ "initialized": "consecutive" }` 的 **错误** 代码示例：

```js
/*eslint one-var: ["error", { "initialized": "consecutive" }]*/

function foo() {
    var a = 1;
    var b = 2;

    foo();

    var c = 3;
    var d = 4;
}
```

Examples of **correct** code for this rule with the `{ "initialized": "consecutive" }` option:

选项 `{ "initialized": "consecutive" }` 的 **正确** 代码示例：

```js
/*eslint one-var: ["error", { "initialized": "consecutive" }]*/

function foo() {
    var a = 1,
        b = 2;

    foo();

    var c = 3,
        d = 4;
}
```

## Compatibility

* **JSHint**: This rule maps to the `onevar` JSHint rule, but allows `let` and `const` to be configured separately.
* **JSCS**: This rule roughly maps to [disallowMultipleVarDecl](https://jscs-dev.github.io/rule/disallowMultipleVarDecl).
* **JSCS**: This rule option `separateRequires` roughly maps to [requireMultipleVarDecl](https://jscs-dev.github.io/rule/requireMultipleVarDecl).

## Version

This rule was introduced in ESLint 0.0.9.

该规则在 ESLint 0.0.9 被引入。

## Resources

* [Rule source](https://github.com/eslint/eslint/tree/master/lib/rules/one-var.js)
* [Documentation source](https://github.com/eslint/eslint/tree/master/docs/rules/one-var.md)
