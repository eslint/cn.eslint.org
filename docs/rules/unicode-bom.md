---
title: unicode-bom - Rules
layout: doc
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# Require or disallow the Unicode Byte Order Mark (BOM) (unicode-bom)

# 要求或禁止使用 Unicode 字节顺序标记 (BOM) (unicode-bom)

(fixable) The `--fix` option on the [command line](../user-guide/command-line-interface#fix) automatically fixes problems reported by this rule.

(fixable) [命令行](../user-guide/command-line-interface#fix)中的 `--fix` 选项可以自动修复该规则报告的问题。

The Unicode Byte Order Mark (BOM) is used to specify whether code units are big
endian or little endian. That is, whether the most significant or least
significant bytes come first. UTF-8 does not require a BOM because byte ordering
does not matter when characters are a single byte. Since UTF-8 is the dominant
encoding of the web, we make `"never"` the default option.

 Unicode 字节顺序标记 (BOM) 用来指定代码单元是高字节序还是低字节序。也就是说，是高位在前还是低位在前。UTF-8 不需要 BOM 来表明字节顺序，因为单个字节并不影响字节顺序。因为 UTF-8 在网络编码中占有重要位置，我们设置 `"never"` 作为其默认选项。

## Rule Details

If the `"always"` option is used, this rule requires that files always begin
with the Unicode BOM character U+FEFF. If `"never"` is used, files must never
begin with U+FEFF.

如果使用了 `"always"` 选项，该规则要求文件始终以 Unicode BOM 字符 U+FEFF 开头。如果是 `"never"`，文件决不能以 U+FEFF 开始。

## Options

This rule has a string option:

该规则有一个字符串选项：

* `"always"` files must begin with the Unicode BOM
* `"always"` 文件必须以 Unicode BOM 开头
* `"never"` (default) files must not begin with the Unicode BOM
* `"never"` (默认) 文件不能以 Unicode BOM 开头

### always

Example of **correct** code for this rule with the `"always"` option:

选项 `"always"` 的 **正确** 代码示例：

```js
/*eslint unicode-bom: "error"*/

U+FEFF
var abc;
```

Example of **incorrect** code for this rule with the `"always"` option:

选项 `"always"` 的 **错误** 代码示例：

```js
/*eslint unicode-bom: "error"*/

var abc;
```

### never

Example of **correct** code for this rule with the default `"never"` option:

选项 `"never"` 的 **正确** 代码示例：

```js
/*eslint unicode-bom: ["error", "never"]*/

var abc;
```

Example of **incorrect** code for this rule with the `"never"` option:

选项 `"never"` 的 **错误** 代码示例：

```js
/*eslint unicode-bom: ["error", "never"]*/

U+FEFF
var abc;
```

## When Not To Use It

If you use some UTF-16 or UTF-32 files and you want to allow a file to
optionally begin with a Unicode BOM, you should turn this rule off.

如果你使用 UTF-16 或 UTF-32 文件，而且你想允许文件以 Unicode BOM 开始，你应该关闭此规则。

## Version

This rule was introduced in ESLint 2.11.0.

该规则在 ESLint 2.11.0 中被引入。

## Resources

* [Rule source](https://github.com/eslint/eslint/tree/master/lib/rules/unicode-bom.js)
* [Documentation source](https://github.com/eslint/eslint/tree/master/docs/rules/unicode-bom.md)
