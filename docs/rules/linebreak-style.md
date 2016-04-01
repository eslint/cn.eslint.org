---
title: Rule linebreak-style
layout: doc
translator: molee1905
proofreader: molee1905
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# Disallow mixing CRLF and LF linebreaks (linebreak-style)

# 禁止混合使用回车换行和换行 (linebreak-style)

When developing with a lot of people all having different editors, VCS applications and operating systems it may occur that
different line endings are written by either of the mentioned (might especially happen when using the windows and mac versions of SourceTree together).

当很多人协同开发时，会用到不同的编辑器，在 VCS 应用程序和操作系统中可能会出现不同的编辑器行结束方式也不同(尤其是同时使用 windows 和 mac 版本的源码)。

The linebreaks (new lines) used in windows operating system are usually _carriage returns_ (CR) followed by a _line feed_ (LF) making it a _carriage return line feed_ (CRLF)
whereas Linux and Unix use a simple _line feed_ (LF). The corresponding _control sequences_ are `"\n"` (for LF) and `"\r\n"` for (CRLF).

在 windows 操作系统中换行(新行)通常是回车(CR)加换行分隔符(LF)，也就是回车换行(CRLF)，然而在Linux和Unix中只使用简单的换行分隔符(LF)。对应的控制字符为`"\n"` (LF) 和 `"\r\n"`(CRLF)。

Many versioning systems (like git and subversion) can automatically ensure the correct ending. However to cover all contingencies you can activate this rule.

很多版本控制系统（如git和subversion）可以自动的保证正确的结尾。然而如果要涵盖所有情况，你可以激活此规则。

## Rule Details

This rule aims to ensure having consistent line endings independent of operating system, VCS or editor used.

该规则旨在保证不论是在操作系统，VCS 还是编辑器，都使用一致的行尾。

The following patterns are considered problems:

以下模式被认为是有问题的：

```js
/*eslint linebreak-style: 2*/

var a = 'a', // \r\n
    b = 'b'; // \n
```

```js
/*eslint linebreak-style: [2, "unix"]*/

var a = 'a'; // \r\n

```

```js
/*eslint linebreak-style: [2, "windows"]*/

var a = 'a';// \n

```

The following patterns are not considered problems:

以下模式被认为是没有问题的：

```js
/*eslint linebreak-style: [2, "unix"]*/

var a = 'a', // \n
    b = 'b'; // \n
// \n
function foo(params) {// \n
    // do stuff \n
}// \n
```

```js
/*eslint linebreak-style: [2, "windows"]*/

var a = 'a', // \r\n
    b = 'b'; // \r\n
// \r\n
function foo(params) { // \r\n
    // do stuff \r\n
} // \r\n
```

## Options

This rule may take one option which is either `unix` (LF) or `windows` (CRLF). When omitted `unix` is assumed.

该规则可以有一个可选项`unix` (LF) 或 `windows` (CRLF)。当省略时，默认为`unix`。

## When Not To Use It

If you aren't concerned about having different line endings within you code, then you can safely turn this rule off.

如果你不关系你的代码中是否有不同的行尾，你可以关闭此规则。

## Compatibility

* **JSCS**: `validateLineBreaks`

## Version

This rule was introduced in ESLint 0.21.0.

该规则在 ESLint 0.21.0 中被引入。

## Resources

* [Rule source](https://github.com/eslint/eslint/tree/master/lib/rules/linebreak-style.js)
* [Documentation source](https://github.com/eslint/eslint/tree/master/docs/rules/linebreak-style.md)
