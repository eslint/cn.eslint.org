---
title: Rule no-inner-declarations
layout: doc
translator: ybbjegj
proofreader: molee1905
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# Declarations in Program or Function Body (no-inner-declarations)

# 在程序或函数中声明（no-inner-declarations）

In JavaScript, prior to ES6, a function declaration is only allowed in the first level of a program or the body of another function, though parsers sometimes [erroneously accept them elsewhere](https://code.google.com/p/esprima/issues/detail?id=422). This only applies to function declarations; named or anonymous function expressions can occur anywhere an expression is permitted.

在ES6之前的Javascript中，函数声明只能在程序的第一级或另一个函数体中使用，尽管解析器[错误地接受来自任何地方的声明](https://code.google.com/p/esprima/issues/detail?id=422)。这只适用于函数声明；命名的或匿名的函数表达式是可以出现在一个表达式所允许出现的任何位置。

```js
// Good
function doSomething() { }

// Bad
if (test) {
    function doSomethingElse () { }
}

function anotherThing() {
    var fn;

    if (test) {

        // Good
        fn = function expression() { };

        // Bad
        function declaration() { }
    }
}
```

A variable declaration is permitted anywhere a statement can go, even nested deeply inside other blocks. This is often undesirable due to variable hoisting, and moving declarations to the root of the program or function body can increase clarity. Note that [block bindings](https://leanpub.com/understandinges6/read#leanpub-auto-block-bindings) (`let`, `const`) are not hoisted and therefore they are not affected by this rule.

只要语句所允许，可以在任何地方声明变量，甚至嵌套很深的其他块中。由于变量提升，这种做法通常是不可取的，把变量声明放在程序或函数体的顶部可以提高代码清晰度。注意 [block bindings](https://leanpub.com/understandinges6/read#leanpub-auto-block-bindings) (`let`, `const`)不会声明提前，所以不受该规则影响。

```js
/*eslint-env es6*/

// Good
var foo = 42;

// Good
if (foo) {
    let bar1;
}

// Bad
while (test) {
    var bar2;
}

function doSomething() {
    // Good
    var baz = true;

    // Bad
    if (baz) {
        var quux;
    }
}
```

## Rule Details

This rule requires that function declarations and, optionally, variable declarations be in the root of a program or the body of a function.

该规则要求函数声明和变量声明（可选的）在程序或函数体的顶部。

## Options

This rule takes a single option to specify whether it should check just function declarations or both function and variable declarations. The default is `"functions"`. Setting it to `"both"` will apply the same rules to both types of declarations.

该规则只有一个选项，用来指定是只检测函数声明还是函数和变量声明都检测。默认值是 `"functions"`。设定为 `"both"` 同样的规则适用于两种类型的声明

You can set the option in configuration like this:

你可以像这样设置选项的配置:

```json
"no-inner-declarations": [2, "both"]
```

### functions

Examples of **incorrect** code for the default `"functions"` option:

默认选项`"functions"`的 **错误**代码示例：

```js
/*eslint no-inner-declarations: "error"*/

if (test) {
    function doSomething() { }
}

function doSomethingElse() {
    if (test) {
        function doAnotherThing() { }
    }
}
```

Examples of **correct** code for the default `"functions"` option:

默认选项`"functions"`的 **正确**代码示例：

```js
/*eslint no-inner-declarations: "error"*/

function doSomething() { }

function doSomethingElse() {
    function doAnotherThing() { }
}

if (test) {
    asyncCall(id, function (err, data) { });
}

var fn;
if (test) {
    fn = function fnExpression() { };
}
```

### both

Examples of **incorrect** code for the `"both"` option:

选项`"both"`的 **错误**代码示例：

```js
/*eslint no-inner-declarations: ["error", "both"]*/

if (test) {
    var foo = 42;
}

function doAnotherThing() {
    if (test) {
        var bar = 81;
    }
}
```

Examples of **correct** code for the `"both"` option:

选项`"both"`的 **错误**代码示例：

```js
/*eslint no-inner-declarations: "error"*/
/*eslint-env es6*/

var bar = 42;

if (test) {
    let baz = 43;
}

function doAnotherThing() {
    var baz = 81;
}
```

## When Not To Use It

The function declaration portion rule will be rendered obsolete when [block-scoped functions](https://bugzilla.mozilla.org/show_bug.cgi?id=585536) land in ES6, but until then, it should be left on to enforce valid constructions. Disable checking variable declarations when using [block-scoped-var](block-scoped-var) or if declaring variables in nested blocks is acceptable despite hoisting.

函数声明的部分规则在ES6上是过时的[block-scoped functions](https://bugzilla.mozilla.org/show_bug.cgi?id=585536)，但在此之前，它应该是行之有效的。当使用[block-scoped-var](block-scoped-var)时，或者如果在嵌套块中声明变量是可以接受的，禁用检查变量声明。

## Version

This rule was introduced in ESLint 0.6.0.

该规则是在 ESLint 0.6.0 中引进的。

## Resources

* [Rule source](https://github.com/eslint/eslint/tree/master/lib/rules/no-inner-declarations.js)
* [Documentation source](https://github.com/eslint/eslint/tree/master/docs/rules/no-inner-declarations.md)
