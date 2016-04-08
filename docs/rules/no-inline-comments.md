---
title: Rule no-inline-comments
layout: doc
translator: molee1905
proofreader: molee1905
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# Disallows comments after code. Comments must come on their own lines (no-inline-comments)

# 代码后面不允许有注释。注释必须单独成行 (no-inline-comments)

Some style guides disallow a comments on the same line as code.
If there are comments immediately following code, it can make it harder to read the code.
On the other hand, it is sometimes faster and more obvious to put comments immediately following code.

一些风格指南禁止注释和代码在同一行。如果注释紧随代码，会造成代码难以阅读。在另一方面，将注释放在代码后面，有时会很快和更明显。

## Rule Details

This rule will disallow comments on the same line as code.

该规则不允许注释和代码在同一行。

This rule takes no arguments.

该规则没有任何参数。

The following patterns are considered problems:

以下模式被认为是有问题的：

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

The following patterns are not considered problems:

以下模式被认为是没有问题的：

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
