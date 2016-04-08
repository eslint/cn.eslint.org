---
title: Rule no-use-before-define
layout: doc
translator: ILFront-End
proofreader: coocon 
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# Disallow Early Use (no-use-before-define)

# 不允许定义前使用 (no-use-before-define)

In JavaScript, prior to ES6, variable and function declarations are hoisted to the top of a scope, so it's possible to use identifiers before their formal declarations in code. This can be confusing and some believe it is best to always declare variables and functions before using them.

在 ES6 标准之前的 JavaScript 中，某个作用域中变量和函数的声明会被提前到作用域顶部，所以可能存在这种情况：此变量在声明前被使用。这会扰乱读者，部分人认为最好的做法是使用变量之前先声明变量。

In ES6, block-level bindings (`let` and `const`) introduce a "temporal dead zone" where a `ReferenceError` will be thrown with any attempt to access the variable before its declaration.

在 ES6 中，块级绑定(`let` and `const`)引入 "temporal dead zone"，当企图使用未声明的变量会抛出 `ReferenceError`。

## Rule Details

This rule will warn when it encounters a reference to an identifier that has not yet been declared.

当使用一个还未声明的标示符是会报警告。

Examples of **incorrect** code for this rule:

**错误**代码示例：

```js
/*eslint no-use-before-define: "error"*/
/*eslint-env es6*/

alert(a);
var a = 10;

f();
function f() {}

function g() {
    return b;
}
var b = 1;

// With blockBindings: true
{
    alert(c);
    let c = 1;
}
```

Examples of **correct** code for this rule:

**正确**代码示例：

```js
/*eslint no-use-before-define: "error"*/
/*eslint-env es6*/

var a;
a = 10;
alert(a);

function f() {}
f(1);

var b = 1;
function g() {
    return b;
}

// With blockBindings: true
{
    let C;
    c++;
}
```

## Options

```json
{
    "no-use-before-define": ["error", { "functions": true, "classes": true }]
}
```

* `functions` (`boolean`) -
  The flag which shows whether or not this rule checks function declarations.
  If this is `true`, this rule warns every reference to a function before the function declaration.
  Otherwise, ignores those references.
  Function declarations are hoisted, so it's safe.
  Default is `true`.
  
  这个参数表示该规则是否要检测函数的声明。
  如果参数是 `true`，该规则会在引用一个未提前声明的函数时发出警报。
  如果参数是 `false`, 忽略这些引用。
  因为函数声明作用域会被提升，所以这样做是安全的。
  参数默认值是 `true`。

* `classes` (`boolean`) -
  The flag which shows whether or not this rule checks class declarations of upper scopes.
  If this is `true`, this rule warns every reference to a class before the class declaration.
  Otherwise, ignores those references if the declaration is in upper function scopes.
  Class declarations are not hoisted, so it might be danger.
  Default is `true`.
  
  这个参数表示是否要检测作用域中顶部的类声明。
  如果参数是 `true`，该规则会在引用一个未提前声明的类时发出警报。
  如果参数是 `false`，该规则会忽略在函数声明前的引用。
  因为类声明作用域会被提升，所以这样做可能是危险的。
  参数默认是 `true`。

This rule accepts `"nofunc"` string as a option.
`"nofunc"` is the same as `{ "functions": false, "classes": true }`.

该规则接受 `"nofunc"` 字符串作为一个选项。
`"nofunc"` 和 `{ "functions": false, "classes": true }` 的效果相同。

### functions

Examples of **correct** code for the `{ "functions": false }` option:

选项`{ "functions": false }`的 **正确**代码示例：

```js
/*eslint no-use-before-define: ["error", { "functions": false }]*/

f();
function f() {}
```

### classes

Examples of **incorrect** code for the `{ "classes": false }` option:

选项`{ "classes": false }`的 **错误**代码示例：

```js
/*eslint no-use-before-define: ["error", { "classes": false }]*/
/*eslint-env es6*/

new A();
class A {
}
```

Examples of **correct** code for the `{ "classes": false }` option:

选项`{ "classes": false }`的 **正确**代码示例：

```js
/*eslint no-use-before-define: ["error", { "classes": false }]*/
/*eslint-env es6*/

function foo() {
    return new A();
}

class A {
}
```

## Version

This rule was introduced in ESLint 0.0.9.

此规则在 ESLint 0.0.9 中被引入。

## Resources

* [Rule source](https://github.com/eslint/eslint/tree/master/lib/rules/no-use-before-define.js)
* [Documentation source](https://github.com/eslint/eslint/tree/master/docs/rules/no-use-before-define.md)
