---
title: Rule spaced-comment
layout: doc
translator: molee1905
proofreader: molee1905
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# Requires or disallows a whitespace (space or tab) beginning a comment (spaced-comment)

# 要求或禁止在注释前有空白 (space 或 tab)

Some style guides require or disallow a whitespace immediately after the initial `//` or `/*` of a comment.

一些风格指南要求或禁止注释`//` 或 `/*`后的空白。

Whitespace after the `//` or `/*` makes it easier to read text in comments.
On the other hand, commenting out code is easier without having to put a whitespace right after the `//` or `/*`.

`//` 或 `/*`后的空白使注释中的文本更容易阅读。另一方面，`//` 或 `/*`后面不加空白的话，给代码添加注释会变得更容易。

**Fixable:** This rule is automatically fixable using the `--fix` flag on the command line.

**Fixable:** 该规则可以通过`--fix`命令行进行自动修复。

## Rule Details

This rule will enforce consistency of spacing after the start of a comment `//` or `/*`. It also provides several exceptions for various documentation styles.

该规则强制注释中`//` 或 `/*`后空格的一致性。它还为各种文档风格提供了一些例外情况。

## Options

The rule takes two options.

该规则有两个可选项。

* The first is a string which be either `"always"` or `"never"`. The default is `"always"`.

* 第一个是个字符串，值为`"always"`或 `"never"`。默认是`"always"`。

    * If `"always"` then the `//` or `/*` must be followed by at least one whitespace.

    * 如果是`"always"`，`//` 或 `/*`必须跟随至少一个空白。

    * If `"never"` then there should be no whitespace following.

    * 如果是`"never"`，其后不允许有空白。

* This rule can also take a 2nd option, an object with either of the following keys: `"exceptions"` and `"markers"`.

* 该规则可以设置第二个选项，是一个对象，其属性的键为`"exceptions"` 和 `"markers"`。

    * The `"exceptions"` value is an array of string patterns which are considered exceptions to the rule. Please note that exceptions are ignored if the first argument is `"never"`.
    
    * `"exceptions"`的值是一个字符串形式的数组，这些字符串也就是该规则的例外。
    请注意，如果第一个参数是`"never"`，例外情况会被忽略。

    ```json
    "spaced-comment": [2, "always", { "exceptions": ["-", "+"] }]
    ```

    * The `"markers"` value is an array of string patterns which are considered markers for docblock-style comments,such as an additional `/`, used to denote documentation read by doxygen, vsdoc, etc. which must have additional characters.The `"markers"` array will apply regardless of the value of the first argument, e.g. `"always"` or `"never"`.
   
    * `"markers"`的值是一个字符串形式的数组，这些字符串也就是块级注释的标记，例如一个额外的`/`，被用来表示是由 doxygen、vsdoc 等系统读取的文档，这些系统必须有额外的字符。不管第一个参数是`"always"` 还是 `"never"`，`"markers"`数组都会起作用。

    ```json
    "spaced-comment": [2, "always", { "markers": ["/"] }]
    ```

The difference between a marker and an exception is that a marker only appears at the beginning of the comment whereas
exceptions can occur anywhere in the comment string.

标记和例外的区别是，标记值只出现在注释的开头，而例外是可以出现在注释中任何地方。

You can also define separate exceptions and markers for block and line comments:

你可以为块级注释和单行注释定义不同的例外和标记：

```json
"spaced-comment": [2, "always", {
    "line": {
        "markers": ["/"],
        "exceptions": ["-", "+"]
    },
    "block": {
        "markers": ["!"],
        "exceptions": ["*"]
    }
}]
```

### always

The following patterns are considered problems:

以下模式被认为是有问题的：

```js
/*eslint spaced-comment: [2, "always"]*/

//This is a comment with no whitespace at the beginning

/*This is a comment with no whitespace at the beginning */
```

The following patterns are not considered problems:

以下模式被认为是没有问题的：

```js
/* eslint spaced-comment: [2, "always"] */

// This is a comment with a whitespace at the beginning

/* This is a comment with a whitespace at the beginning */

/*
 * This is a comment with a whitespace at the beginning
 */

/*
This comment has a newline
*/
```

```js
/* eslint spaced-comment: [2, "always"] */

/**
* I am jsdoc
*/
```

### never

The following patterns are considered problems:

以下模式被认为是有问题的：

```js
/*eslint spaced-comment: [2, "never"]*/

// This is a comment with a whitespace at the beginning

/* This is a comment with a whitespace at the beginning */

/* \nThis is a comment with a whitespace at the beginning */
```

The following patterns are not considered problems:

以下模式被认为是没有问题的：

```js
/*eslint spaced-comment: [2, "never"]*/

/*This is a comment with no whitespace at the beginning */
```

```js
/*eslint spaced-comment: [2, "never"]*/

/**
* I am jsdoc
*/
```

### exceptions

The following patterns are considered problems:

以下模式被认为是有问题的：

```js
/* eslint spaced-comment: [2, "always", { "block": { "exceptions": ["-"] } }] */

//--------------
// Comment block
//--------------
```

```js
/* eslint spaced-comment: [2, "always", { "exceptions": ["-", "+"] }] */

//------++++++++
// Comment block
//------++++++++
```

```js
/* eslint spaced-comment: [2, "always", { "exceptions": ["-", "+"] }] */

/*------++++++++*/
/* Comment block */
/*------++++++++*/
```

```js
/* eslint spaced-comment: [2, "always", { "line": { "exceptions": ["-+"] } }] */

/*-+-+-+-+-+-+-+*/
// Comment block
/*-+-+-+-+-+-+-+*/
```

The following patterns are not considered problems:

以下模式被认为是没有问题的：

```js
/* eslint spaced-comment: [2, "always", { "exceptions": ["-"] }] */

//--------------
// Comment block
//--------------
```

```js
/* eslint spaced-comment: [2, "always", { "line": { "exceptions": ["-"] } }] */

//--------------
// Comment block
//--------------
```

```js
/* eslint spaced-comment: [2, "always", { "exceptions": ["*"] }] */

/****************
 * Comment block
 ****************/
```

```js
/* eslint spaced-comment: [2, "always", { "exceptions": ["-+"] }] */

//-+-+-+-+-+-+-+
// Comment block
//-+-+-+-+-+-+-+

/*-+-+-+-+-+-+-+*/
// Comment block
/*-+-+-+-+-+-+-+*/
```

```js
/* eslint spaced-comment: [2, "always", { "block": { "exceptions": ["-+"] } }] */

/*-+-+-+-+-+-+-+*/
// Comment block
/*-+-+-+-+-+-+-+*/
```

### markers

The following patterns are considered problems:

以下模式被认为是有问题的：

```js
/* eslint spaced-comment: [2, "always", { "markers": ["/"] }] */

///This is a comment with a marker but without whitespace
```

The following patterns are not considered problems:

以下模式被认为是没有问题的：

```js
/* eslint spaced-comment: [2, "always", { "markers": ["/"] }] */

/// This is a comment with a marker
```

```js
/*eslint spaced-comment: [2, "never", { "markers": ["!<"] }]*/

//!<This is a line comment with a marker

/*!<this is a block comment with a marker
subsequent lines are ignored
*/
```

```js
/* eslint spaced-comment: [2, "always", { "markers": ["global"] }] */

/*global ABC*/
```


## Related Rules

* [spaced-line-comment](spaced-line-comment)

## Version

This rule was introduced in ESLint 0.23.0.

该规则在 ESLint 0.23.0 中被引入。

## Resources

* [Rule source](https://github.com/eslint/eslint/tree/master/lib/rules/spaced-comment.js)
* [Documentation source](https://github.com/eslint/eslint/tree/master/docs/rules/spaced-comment.md)
