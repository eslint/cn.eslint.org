---
title: init-declarations - Rules
layout: doc
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# require or disallow initialization in variable declarations (init-declarations)

# 强制或禁止变量声明语句中初始化 (init-declarations)

In JavaScript, variables can be assigned during declaration, or at any point afterwards using an assignment statement. For example, in the following code, `foo` is initialized during declaration, while `bar` is initialized later.

在 JavaScript 中，变量可在声明时初始化，或者在赋值语句中初始化。例如，在下面的代码中，`foo` 在声明时被初始化，而 `bar` 在之后被初始化。

```js
var foo = 1;
var bar;

if (foo) {
    bar = 1;
} else {
    bar = 2;
}
```

## Rule Details

This rule is aimed at enforcing or eliminating variable initializations during declaration. For example, in the following code, `foo` is initialized during declaration, while `bar` is not.

此规则旨在声明的过程中强制或消除变量在声明时进行初始化。例如，在下面的代码，`foo` 在声明过程中初始化，而 `bar` 不是。

```js
var foo = 1;
var bar;

bar = 2;
```

This rule aims to bring consistency to variable initializations and declarations.

这一规则的目的是保持一致的变量初始化和声明。

## Options

The rule takes two options:

该规则有两个选项：

1. A string which must be either `"always"` (the default), to enforce initialization at declaration, or `"never"` to disallow initialization during declaration. This rule applies to `var`, `let`, and `const` variables, however `"never"` is ignored for `const` variables, as unassigned `const`s generate a parse error.
1. 一个字符串，值为 `"always"`（默认）强制在声明时进行初始化，或 `"never"` 禁止在声明时进行初始化。该规则适用于`var`、`let` 和`const` 变量，然而，`const` 变量会忽略 `"never"`，因为未赋值的常量（`const`）会生成一个解析错误。
2. An object that further controls the behavior of this rule. Currently, the only available parameter is `ignoreForLoopInit`, which indicates if initialization at declaration is allowed in `for` loops when `"never"` is set, since it is a very typical use case.
2. 一个对象，进一步控制该规则的行为。目前，唯一可以的参数是 `ignoreForLoopInit` ，用来表明在设置了 `"never"` 之后，是否允许在 `for` 循环中变量声明时进行初始化，这是一个典型的用例。

You can configure the rule as follows:

你可以配置规则如下：

Variables must be initialized at declaration (default)

变量必须在声明时初始化（默认）

```json
{
    "init-declarations": ["error", "always"],
}
```

Variables must not be initialized at declaration

变量不能在声明时初始化

```json
{
    "init-declarations": ["error", "never"]
}
```

Variables must not be initialized at declaration, except in for loops, where it is allowed

除了 for 循环外，变量不能在声明时初始化

```json
{
    "init-declarations": ["error", "never", { "ignoreForLoopInit": true }]
}
```

### always

Examples of **incorrect** code for the default `"always"` option:

默认选项 `"always"` 的 **错误** 代码示例：

```js
/*eslint init-declarations: ["error", "always"]*/
/*eslint-env es6*/

function foo() {
    var bar;
    let baz;
}
```

Examples of **correct** code for the default `"always"` option:

默认选项 `"always"` 的 **正确** 代码示例：

```js
/*eslint init-declarations: ["error", "always"]*/
/*eslint-env es6*/

function foo() {
    var bar = 1;
    let baz = 2;
    const qux = 3;
}
```

### never

Examples of **incorrect** code for the `"never"` option:

选项 `"never"` 的 **错误** 代码示例：

```js
/*eslint init-declarations: ["error", "never"]*/
/*eslint-env es6*/

function foo() {
    var bar = 1;
    let baz = 2;

    for (var i = 0; i < 1; i++) {}
}
```

Examples of **correct** code for the `"never"` option:

选项 `"never"` 的 **正确** 代码示例：

```js
/*eslint init-declarations: ["error", "never"]*/
/*eslint-env es6*/

function foo() {
    var bar;
    let baz;
    const buzz = 1;
}
```

The `"never"` option ignores `const` variable initializations.

选项 `"never"` 忽略 `const` 变量的初始化。

### ignoreForLoopInit

Examples of **correct** code for the `"never", { "ignoreForLoopInit": true }` options:

选项 `"never", { "ignoreForLoopInit": true }` 的 **正确** 代码示例：

```js
/*eslint init-declarations: ["error", "never", { "ignoreForLoopInit": true }]*/
for (var i = 0; i < 1; i++) {}
```

## When Not To Use It

When you are indifferent as to how your variables are initialized.

如果你不关心变量如何初始化，可以关闭此规则。

## Version

This rule was introduced in ESLint 1.0.0-rc-1.

该规则在 ESLint 1.0.0-rc-1 中被引入。

## Resources

* [Rule source](https://github.com/eslint/eslint/tree/master/lib/rules/init-declarations.js)
* [Documentation source](https://github.com/eslint/eslint/tree/master/docs/rules/init-declarations.md)
