---
title: Rule newline-after-var
layout: doc
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# require or disallow an empty line after `var` declarations (newline-after-var)

# 要求或禁止变量声明语句后有一行空行 (newline-after-var)

As of today there is no consistency in separating variable declarations from the rest of the code. Some developers leave an empty line between var statements and the rest of the code like:

目前，变量声明和其余代码如何分开并没有一致性。一些开发者在两者之间保留一行空行：

```js
var foo;

// do something with foo
```

Whereas others don't leave any empty newlines at all.

然而其他人并不这样做。

```js
var foo;
// do something with foo
```

The problem is when these developers work together in a project. This rule enforces a coding style where empty newlines are allowed or disallowed after `var`, `let`, or `const` statements. It helps the code to look consistent across the entire project.

在一个项目中，这些开发者在一起工作时就成了问题。该规则强制使用一种代码风格，即 `var`、`let` 或 `const` 语句之后是否允许有空行。它有助于整个项目的代码看起来是一致的。

## Rule Details

This rule enforces a coding style where empty lines are required or disallowed after `var`, `let`, or `const` statements to achieve a consistent coding style across the project.

该规则强制一种代码风格，即在 `var`、`let` 或 `const` 之后要求或禁止有空行，以此在整个项目中达到一致的代码风格。

## Options

This rule has a string option:

该规则有一个字符串选项：

* `"always"` (default) requires an empty line after `var`, `let`, or `const`
  Comments on a line directly after var statements are treated like additional var statements.

* `"always"` (默认) 要求在 `var`、`let` 或 `const` 之后有空行。声明语句后紧随的注释被当作类似于声明语句
    
* `"never"` disallows empty lines after `var`, `let`, or `const`
* `"never"` 禁止在 `var`、`let` 或 `const` 之后有空行

### always

Examples of **incorrect** code for this rule with the default `"always"` option:

默认选项 `"always"` 的 **错误** 代码示例：

```js
/*eslint newline-after-var: ["error", "always"]*/
/*eslint-env es6*/

var greet = "hello,",
    name = "world";
console.log(greet, name);

let greet = "hello,",
    name = "world";
console.log(greet, name);

var greet = "hello,";
const NAME = "world";
console.log(greet, NAME);

var greet = "hello,";
var name = "world";
// var name = require("world");
console.log(greet, name);
```

Examples of **correct** code for this rule with the default `"always"` option:

默认选项 `"always"` 的 **正确** 代码示例：

```js
/*eslint newline-after-var: ["error", "always"]*/
/*eslint-env es6*/

var greet = "hello,",
    name = "world";

console.log(greet, name);

let greet = "hello,",
    name = "world";

console.log(greet, name);

var greet = "hello,";
const NAME = "world";

console.log(greet, NAME);

var greet = "hello,";
var name = "world";
// var name = require("world");

console.log(greet, name);
```

### never

Examples of **incorrect** code for this rule with the `"never"` option:

默认选项 `"never"` 的 **错误** 代码示例：  

```js
/*eslint newline-after-var: ["error", "never"]*/
/*eslint-env es6*/

var greet = "hello,",
    name = "world";

console.log(greet, name);

let greet = "hello,",
    name = "world";

console.log(greet, name);

var greet = "hello,";
const NAME = "world";

console.log(greet, NAME);

var greet = "hello,";
var name = "world";
// var name = require("world");

console.log(greet, name);
```

Examples of **correct** code for this rule with the `"never"` option:

选项 `"never"` 的 **正确** 代码示例：

```js
/*eslint newline-after-var: ["error", "never"]*/
/*eslint-env es6*/

var greet = "hello,",
    name = "world";
console.log(greet, name);

let greet = "hello,",
    name = "world";
console.log(greet, name);

var greet = "hello,";
const NAME = "world";
console.log(greet, NAME);

var greet = "hello,";
var name = "world";
// var name = require("world");
console.log(greet, name);
```

## Version

This rule was introduced in ESLint 0.18.0.

该规则在 ESLint 0.18.0 中被引入。

## Resources

* [Rule source](https://github.com/eslint/eslint/tree/master/lib/rules/newline-after-var.js)
* [Documentation source](https://github.com/eslint/eslint/tree/master/docs/rules/newline-after-var.md)
