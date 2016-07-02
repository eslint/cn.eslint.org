---
title: Rule global-require
layout: doc
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# Enforce require() on the top-level module scope (global-require)

# 强制在模块顶部调用 require() (global-require)

In Node.js, module dependencies are included using the `require()` function, such as:

在 Node.js 中，使用 `require()` 函数引入依赖的模块，例如：

```js
var fs = require("fs");
```

While `require()` may be called anywhere in code, some style guides prescribe that it should be called only in the top level of a module to make it easier to identify dependencies. For instance, it's arguably harder to identify dependencies when they are deeply nested inside of functions and other statements:

虽然 `require()` 可以在代码的任何地方被调用，一些风格指南规定，它只能在模块顶层被调用，这样更容易识别依赖关系。例如，当它们在深层次嵌套在函数和其它语句时，就很难识别依赖：

```js
function foo() {

    if (condition) {
        var fs = require("fs");
    }
}
```

Since `require()` does a synchronous load, it can cause performance problems when used in other locations.

因为 `require()` 是同步加载的，在其它地方使用时，会导致性能问题。

Further, ES6 modules mandate that `import` and `export` statements can only occur in the top level of the module's body.

此外，ES6 模块要求 `import` 和 `export` 语句只能放在模块顶部。

## Rule Details

This rule requires all calls to `require()` to be at the top level of the module, similar to ES6 `import` and `export` statements, which also can occur only at the top level.

此规则要求所有调用 `require()` 必须在模块顶部，与 ES6 中 `import` 和 `export`  语句（只能放在顶部）相同。

Examples of **incorrect** code for this rule:

**错误** 代码示例：

```js
/*eslint global-require: "error"*/
/*eslint-env es6*/

// calling require() inside of a function is not allowed
function readFile(filename, callback) {
    var fs = require('fs');
    fs.readFile(filename, callback)
}

// conditional requires like this are also not allowed
if (DEBUG) { require('debug'); }

// a require() in a switch statement is also flagged
switch(x) { case '1': require('1'); break; }

// you may not require() inside an arrow function body
var getModule = (name) => require(name);

// you may not require() inside of a function body as well
function getModule(name) { return require(name); }

// you may not require() inside of a try/catch block
try {
    require(unsafeModule);
} catch(e) {
    console.log(e);
}
```

Examples of **correct** code for this rule:

**正确** 代码示例：

```js
/*eslint global-require: "error"*/

// all these variations of require() are ok
require('x');
var y = require('y');
var z;
z = require('z').initialize();

// requiring a module and using it in a function is ok
var fs = require('fs');
function readFile(filename, callback) {
    fs.readFile(filename, callback)
}

// you can use a ternary to determine which module to require
var logger = DEBUG ? require('dev-logger') : require('logger');

// if you want you can require() at the end of your module
function doSomethingA() {}
function doSomethingB() {}
var x = require("x"),
    z = require("z");
```

## When Not To Use It

If you have a module that must be initialized with information that comes from the file-system or if a module is only used in very rare situations and will cause significant overhead to load it may make sense to disable the rule. If you need to `require()` an optional dependency inside of a `try`/`catch`, you can disable this rule for just that dependency using the `// eslint-disable-line global-require` comment.

如果一个模块必须使用来至于系统文件的信息初始化或者一个模块仅仅在非常稀少的情况下使用，将导致重大开销去加载模块，禁用此规则将是有意义的。如果你需要在 `try`/`catch` 内部使用 `require()` 一个可选依赖，你可以使用 `// eslint-disable-line global-require` 注释只对此依赖禁用此规则。

## Version

This rule was introduced in ESLint 1.4.0.

该规则在 ESLint 1.4.0 中被引入。

## Resources

* [Rule source](https://github.com/eslint/eslint/tree/master/lib/rules/global-require.js)
* [Documentation source](https://github.com/eslint/eslint/tree/master/docs/rules/global-require.md)
