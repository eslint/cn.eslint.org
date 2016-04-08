---
title: Rule spaced-line-comment
layout: doc
translator: yanggao40
proofreader: molee1905
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# Requires or disallows a whitespace (space or tab) beginning a single-line comment (spaced-line-comment)

# 要求或禁止单行注释时开始部分有一个空白 (空格或tab) (spaced-line-comment)

**Replacement notice**: This rule was removed in ESLint v1.0 and replaced by the [spaced-comment](spaced-comment) rule.

**替换声明：**该规则在 ESLint v1.0 中移除，被[spaced-comment](spaced-comment) 规则替代。

Some style guides require or disallow a whitespace immediately after the initial `//` of a line comment.

一些风格指南在行注释`//`后面紧接着要求或禁止一个空白。

Whitespace after the `//` makes it easier to read text in comments.
On the other hand, commenting out code is easier without having to put a whitespace right after the `//`.

`//`后的空白使注释的文本更易阅读。另一方面，`//`后面不加空白的话，给代码添加注释会变得更容易。


## Rule Details

This rule will enforce consistency of spacing after the start of a line comment `//`.

该规则强制行注释开始后空白的一致性。

This rule takes two arguments. If the first is `"always"` then the `//` must be followed by at least once whitespace.
If `"never"` then there should be no whitespace following.
The default is `"always"`.

该规则携带两个参数。如果第一个参数是 `"always"`，则`//`后面必须至少有一个空白。
如果是`"never"`则`//`后面不应该有空白。
默认为`"always"`。

The second argument is an object with one key, `"exceptions"`.
The value is an array of string patterns which are considered exceptions to the rule.
It is important to note that the exceptions are ignored if the first argument is `"never"`.
Exceptions cannot be mixed.

第二个参数是带有一个`"exceptions"`为键的对象。
该值是一个字符串的对象，该对象含有规则的例外。
需要注意的是，如果第一个参数设置为`"never"`，这些例外将被忽略。

The following patterns are considered problems:

以下模式被认为是有问题的：

```js
// When ["never"]
// This is a comment with a whitespace at the beginning
```

```js
//When ["always"]
//This is a comment with no whitespace at the beginning
var foo = 5;
```

```js
// When ["always",{"exceptions":["-","+"]}]
//------++++++++
// Comment block
//------++++++++
```

The following patterns are not considered problems:

以下模式被认为是没有问题的：

```js
// When ["always"]
// This is a comment with a whitespace at the beginning
var foo = 5;
```

```js
//When ["never"]
//This is a comment with no whitespace at the beginning
var foo = 5;
```

```js
// When ["always",{"exceptions":["-"]}]
//--------------
// Comment block
//--------------
```

```js
// When ["always",{"exceptions":["-+"]}]
//-+-+-+-+-+-+-+
// Comment block
//-+-+-+-+-+-+-+
```

## Related Rules

* [spaced-comment](spaced-comment)

## Version

This rule was introduced in ESLint 0.9.0 and removed in 1.0.0-rc-1.

该规则在 ESLint 0.9.0 中引入，在 1.0.0-rc-1 中移除。

## Resources

* [Documentation source](https://github.com/eslint/eslint/tree/master/docs/rules/spaced-line-comment.md)
