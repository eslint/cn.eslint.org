---
title: no-inline-comments - Rules
layout: doc
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# disallow inline comments after code (no-inline-comments)

# 禁止使用内联注释 (no-inline-comments)

Some style guides disallow comments on the same line as code. Code can become difficult to read if comments immediately follow the code on the same line.
On the other hand, it is sometimes faster and more obvious to put comments immediately following code.

一些风格指南禁止注释和代码出现在同一行。如果注释紧随代码，会使代码是变得难以阅读。另一方面，将注释放在代码后面会快更明显。

## Rule Details

This rule disallows comments on the same line as code.

该规则禁止注释和代码出现在同一行。

Examples of **incorrect** code for this rule:

**错误** 代码示例：

```js
/*eslint no-inline-comments: "error"*/

var a = 1; // declaring a to 1

function getRandomNumber(){
    return 4; // chosen by fair dice roll.
              // guaranteed to be random.
}

/* A block comment before code */ var b = 2;

var c = 3; /* A block comment after code */
```

Examples of **correct** code for this rule:

**正确** 代码示例：

```js
/*eslint no-inline-comments: "error"*/

// This is a comment above a line of code
var foo = 5;

var bar = 5;
//This is a comment below a line of code
```

## Version

This rule was introduced in ESLint 0.10.0.

该规则在 ESLint 0.10.0 中被引入。

## Resources

* [Rule source](https://github.com/eslint/eslint/tree/master/lib/rules/no-inline-comments.js)
* [Documentation source](https://github.com/eslint/eslint/tree/master/docs/rules/no-inline-comments.md)
