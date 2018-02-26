---
title: brace-style - Rules
layout: doc
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# Require Brace Style (brace-style)

# 大括号风格要求 (brace-style)

(fixable) The `--fix` option on the [command line](../user-guide/command-line-interface#fix) can automatically fix some of the problems reported by this rule.

(fixable) [命令行](../user-guide/command-line-interface#fix)中的 `--fix` 选项可以自动修复一些该规则报告的问题。

Brace style is closely related to [indent style](https://en.wikipedia.org/wiki/Indent_style) in programming and describes the placement of braces relative to their control statement and body. There are probably a dozen, if not more, brace styles in the world.

在编程过程中，大括号风格与[缩进风格](https://en.wikipedia.org/wiki/Indent_style)紧密联系，用来描述大括号相对控制语句和代码块的位置，少说也有十几种。

The *one true brace style* is one of the most common brace styles in JavaScript, in which the opening brace of a block is placed on the same line as its corresponding statement or declaration. For example:

在 Javascript 中，*one true brace style*也是最常见的一种，它将大括号放在控制语句或声明语句同一行的位置。例如：

```js
if (foo) {
  bar();
} else {
  baz();
}
```

One common variant of one true brace style is called Stroustrup, in which the `else` statements in an `if-else` construct, as well as `catch` and `finally`, must be on its own line after the preceding closing brace. For example:

*one true brace style*的一种常见的变体形式叫做 *Stroustrup*，`if-else`中的`else`语句，连同`catch` 和 `finally`，都必须在右括号后另起一行，如下面这个例子：

```js
if (foo) {
  bar();
}
else {
  baz();
}
```

Another style is called [Allman](https://en.wikipedia.org/wiki/Indent_style#Allman_style), in which all the braces are expected to be on their own lines without any extra indentation. For example:

另一种风格叫做[Allman](https://en.wikipedia.org/wiki/Indent_style#Allman_style)，
括号必须单独成行且没有任何缩进：

```js
if (foo)
{
  bar();
}
else
{
  baz();
}
```

While no style is considered better than the other, most developers agree that having a consistent style throughout a project is important for its long-term maintainability.

尽管没有哪种风格被认为会比另一种更好，但大多数开发者一致认为在同一项目中保持一致的风格对于长期的可维护性是很重要的。

## Rule Details

This rule enforces consistent brace style for blocks.

该规则旨在强制在Javascript中使用特定的括号风格。因此，如果某条语句或声明没有遵守该该风格，该规则将发出警告。

## Options

This rule has a string option:

该规则有一个字符串选项：

* `"1tbs"` (default) enforces one true brace style
* `"1tbs"` (默认) 强制 one true brace style
* `"stroustrup"` enforces Stroustrup style
* `"stroustrup"` 强制 Stroustrup style
* `"allman"` enforces Allman style
* `"allman"` 强制 Allman style

This rule has an object option for an exception:

该规则可以有例外情况，用对象表示：

* `"allowSingleLine": true` (default `false`) allows the opening and closing braces for a block to be on the *same* line
* `"allowSingleLine": true` (默认 `false`) 允许块的开括号和闭括号在 *同一行*

### 1tbs

Examples of **incorrect** code for this rule with the default `"1tbs"` option:

选项`"1tbs"`的 **错误** 代码示例：

```js
/*eslint brace-style: "error"*/

function foo()
{
  return true;
}

if (foo)
{
  bar();
}

try
{
  somethingRisky();
} catch(e)
{
  handleError();
}

if (foo) {
  bar();
}
else {
  baz();
}
```

Examples of **correct** code for this rule with the default `"1tbs"` option:

选项`"1tbs"`的 **正确** 代码示例：

```js
/*eslint brace-style: "error"*/

function foo() {
  return true;
}

if (foo) {
  bar();
}

if (foo) {
  bar();
} else {
  baz();
}

try {
  somethingRisky();
} catch(e) {
  handleError();
}

// when there are no braces, there are no problems
if (foo) bar();
else if (baz) boom();
```

Examples of **correct** code for this rule with the `"1tbs", { "allowSingleLine": true }` options:

选项`"1tbs", { "allowSingleLine": true }`的 **正确** 代码示例：

```js
/*eslint brace-style: ["error", "1tbs", { "allowSingleLine": true }]*/

function nop() { return; }

if (foo) { bar(); }

if (foo) { bar(); } else { baz(); }

try { somethingRisky(); } catch(e) { handleError(); }
```

### stroustrup

Examples of **incorrect** code for this rule with the `"stroustrup"` option:

选项`"stroustrup"`的 **错误** 代码示例：

```js
/*eslint brace-style: ["error", "stroustrup"]*/

function foo()
{
  return true;
}

if (foo)
{
  bar();
}

try
{
  somethingRisky();
} catch(e)
{
  handleError();
}

if (foo) {
  bar();
} else {
  baz();
}
```

Examples of **correct** code for this rule with the `"stroustrup"` option:

选项`"stroustrup"`的 **正确** 代码示例：

```js
/*eslint brace-style: ["error", "stroustrup"]*/

function foo() {
  return true;
}

if (foo) {
  bar();
}

if (foo) {
  bar();
}
else {
  baz();
}

try {
  somethingRisky();
}
catch(e) {
  handleError();
}

// when there are no braces, there are no problems
if (foo) bar();
else if (baz) boom();
```

Examples of **correct** code for this rule with the `"stroustrup", { "allowSingleLine": true }` options:

选项`"stroustrup", { "allowSingleLine": true }`的 **正确** 代码示例：

```js
/*eslint brace-style: ["error", "stroustrup", { "allowSingleLine": true }]*/

function nop() { return; }

if (foo) { bar(); }

if (foo) { bar(); }
else { baz(); }

try { somethingRisky(); }
catch(e) { handleError(); }
```

### allman

Examples of **incorrect** code for this rule with the `"allman"` option:

选项`"allman"`的 **错误** 代码示例：

```js
/*eslint brace-style: ["error", "allman"]*/

function foo() {
  return true;
}

if (foo)
{
  bar(); }

try
{
  somethingRisky();
} catch(e)
{
  handleError();
}

if (foo) {
  bar();
} else {
  baz();
}
```

Examples of **correct** code for this rule with the `"allman"` option:

选项`"allman"`的 **正确** 代码示例：

```js
/*eslint brace-style: ["error", "allman"]*/

function foo()
{
  return true;
}

if (foo)
{
  bar();
}

if (foo)
{
  bar();
}
else
{
  baz();
}

try
{
  somethingRisky();
}
catch(e)
{
  handleError();
}

// when there are no braces, there are no problems
if (foo) bar();
else if (baz) boom();
```

Examples of **correct** code for this rule with the `"allman", { "allowSingleLine": true }` options:

选项`"allman", { "allowSingleLine": true }`的 **正确** 代码示例：

```js
/*eslint brace-style: ["error", "allman", { "allowSingleLine": true }]*/

function nop() { return; }

if (foo) { bar(); }

if (foo) { bar(); }
else { baz(); }

try { somethingRisky(); }
catch(e) { handleError(); }
```

## When Not To Use It

If you don't want to enforce a particular brace style, don't enable this rule.

如果伱不想强制使用一种括号风格，关闭此规则即可。

## Further Reading

* [Indent style](https://en.wikipedia.org/wiki/Indent_style)

## Version

This rule was introduced in ESLint 0.0.7.

该规则在 ESLint 0.0.7 中被引入。

## Resources

* [Rule source](https://github.com/eslint/eslint/tree/master/lib/rules/brace-style.js)
* [Documentation source](https://github.com/eslint/eslint/tree/master/docs/rules/brace-style.md)
