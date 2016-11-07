---
title: linebreak-style - Rules
layout: doc
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# enforce consistent linebreak style (linebreak-style)

# 强制使用一致的换行符风格 (linebreak-style)

(fixable) The `--fix` option on the [command line](../user-guide/command-line-interface#fix) automatically fixes problems reported by this rule.

(fixable) [命令行](../user-guide/command-line-interface#fix)中的 `--fix` 选项可以自动修复该规则报告的问题。

When developing with a lot of people all having different editors, VCS applications and operating systems it may occur that
different line endings are written by either of the mentioned (might especially happen when using the windows and mac versions of SourceTree together).

当很多人协同开发时，会用到不同的编辑器，在 VCS 应用程序和操作系统中可能会出现不同的编辑器行结束方式也不同(尤其是同时使用 windows 和 mac 版本的源码)。

The linebreaks (new lines) used in windows operating system are usually _carriage returns_ (CR) followed by a _line feed_ (LF) making it a _carriage return line feed_ (CRLF)
whereas Linux and Unix use a simple _line feed_ (LF). The corresponding _control sequences_ are `"\n"` (for LF) and `"\r\n"` for (CRLF).

在 windows 操作系统中换行符通常是回车 (CR) 加换行分隔符 (LF)，也就是回车换行(CRLF)，然而在 Linux 和 Unix 中只使用简单的换行分隔符 (LF)。对应的控制字符为 `"\n"` (LF) 和 `"\r\n"`(CRLF)。

Many versioning systems (like git and subversion) can automatically ensure the correct ending. However to cover all contingencies, you can activate this rule.

很多版本控制系统（如 git 和 subversion）可以自动的保证正确的结尾。然而如果要涵盖所有情况，你可以激活此规则。

## Rule Details

This rule enforces consistent line endings independent of operating system, VCS, or editor used across your codebase.

该规则强制在独立的开源系统、VCS 或 你使用的编辑器中使用一致的换行符。

### Options

This rule has a string option:

该规则有一个字符串选项：

* `"unix"` (default) enforces the usage of Unix line endings: `\n` for LF.
* `"unix"` (默认) 强制使用 Unix 换行符： `\n`。
* `"windows"` enforces the usage of Windows line endings: `\r\n` for CRLF.
* `"windows"` 强制使用 Windows 换行符： `\r\n`。


### unix

Examples of **incorrect** code for this rule with the default `"unix"` option:

默认选项 `"unix"` 的 **错误** 代码示例：

```js
/*eslint linebreak-style: ["error", "unix"]*/

var a = 'a'; // \r\n

```

Examples of **correct** code for this rule with the default `"unix"` option:

默认选项 `"unix"` 的 **正确** 代码示例：

```js
/*eslint linebreak-style: ["error", "unix"]*/

var a = 'a', // \n
    b = 'b'; // \n
// \n
function foo(params) { // \n
    // do stuff \n
}// \n
```

### windows

Examples of **incorrect** code for this rule with the `"windows"` option:

选项 `"windows"` 的 **错误** 代码示例：

```js
/*eslint linebreak-style: ["error", "windows"]*/

var a = 'a'; // \n
```

Examples of **correct** code for this rule with the `"windows"` option:

选项 `"windows"` 的 **正确** 代码示例：

```js
/*eslint linebreak-style: ["error", "windows"]*/

var a = 'a', // \r\n
    b = 'b'; // \r\n
// \r\n
function foo(params) { // \r\n
    // do stuff \r\n
} // \r\n
```

## When Not To Use It

If you aren't concerned about having different line endings within you code, then you can safely turn this rule off.

如果你不关心你的代码中是否以不同的换行符结尾，你可以关闭此规则。

## Compatibility

* **JSCS**: [validateLineBreaks](http://jscs.info/rule/validateLineBreaks)

## Version

This rule was introduced in ESLint 0.21.0.

该规则在 ESLint 0.21.0 中被引入。

## Resources

* [Rule source](https://github.com/eslint/eslint/tree/master/lib/rules/linebreak-style.js)
* [Documentation source](https://github.com/eslint/eslint/tree/master/docs/rules/linebreak-style.md)
