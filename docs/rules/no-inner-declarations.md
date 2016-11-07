---
title: no-inner-declarations - Rules
layout: doc
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# disallow variable or `function` declarations in nested blocks  (no-inner-declarations)

# 禁止在嵌套的语句块中出现变量或 `function` 声明 (no-inner-declarations)

In JavaScript, prior to ES6, a function declaration is only allowed in the first level of a program or the body of another function, though parsers sometimes [erroneously accept them elsewhere](https://code.google.com/p/esprima/issues/detail?id=422). This only applies to function declarations; named or anonymous function expressions can occur anywhere an expression is permitted.

在 ES6 之前的 JavaScript 中，函数声明只能在程序或另一个函数体的顶层，尽管解析器有时会[错误地接受它们](https://code.google.com/p/esprima/issues/detail?id=422)。这只适用于函数声明；命名的或匿名的函数表达式是可以出现在任何允许的地方。

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

可以在任何地方声明变量，甚至是在深层嵌套的语句块中。由于变量声明提升，把声明放在程序或函数体的顶部会使代码更清晰，在任何地方随意声明变量的做法通常是不可取的。注意 [block bindings](https://leanpub.com/understandinges6/read#leanpub-auto-block-bindings) 中提到的 `let` 和 `const` 不会被提升，因此它们不受此规则影响。

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

This rule has a string option:

该规则有一个字符串选项：

* `"functions"` (default) disallows `function` declarations in nested blocks
* `"functions"` (默认) 禁止 `function` 声明出现在嵌套的语句块中
* `"both"` disallows `function` and `var` declarations in nested blocks
* `"both"` 禁止 `function` 和 `var` 声明出现在嵌套的语句块中

### functions

Examples of **incorrect** code for this rule with the default `"functions"` option:

默认选项 `"functions"` 的 **错误** 代码示例：

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

Examples of **correct** code for this rule with the default `"functions"` option:

默认选项 `"functions"` 的 **正确** 代码示例：

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

Examples of **incorrect** code for this rule with the `"both"` option:

选项 `"both"` 的 **错误** 代码示例：

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

Examples of **correct** code for this rule with the `"both"` option:

选项 `"both"` 的 **正确** 代码示例：

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

当 [block-scoped functions](https://bugzilla.mozilla.org/show_bug.cgi?id=585536) 出现在 ES6 中时，函数声明的部分规则将被废弃，但在那之前，它应该是行之有效的。当使用 [block-scoped-var](block-scoped-var) 规则时或者在嵌套块中声明变量是可以接受的（尽管有变量声明提升）时候，可以不再检测变量声明。

## Version

This rule was introduced in ESLint 0.6.0.

该规则在 ESLint 0.6.0 中被引入。

## Resources

* [Rule source](https://github.com/eslint/eslint/tree/master/lib/rules/no-inner-declarations.js)
* [Documentation source](https://github.com/eslint/eslint/tree/master/docs/rules/no-inner-declarations.md)
