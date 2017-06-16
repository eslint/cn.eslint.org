---
title: padded-blocks - Rules
layout: doc
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# require or disallow padding within blocks (padded-blocks)

# 要求或禁止块内填充 (padded-blocks)

(fixable) The `--fix` option on the [command line](../user-guide/command-line-interface#fix) can automatically fix some of the problems reported by this rule.

(fixable) [命令行](../user-guide/command-line-interface#fix)中的 `--fix` 选项可以自动修复一些该规则报告的问题。

Some style guides require block statements to start and end with blank lines. The goal is
to improve readability by visually separating the block content and the surrounding code.

一些风格指南要求块语句以空行开始并且以空行结束。目标是通过块内容和周围代码视觉上地分离来提高可读性。

```js
if (a) {

    b();

}
```

Since it's good to have a consistent code style, you should either always write
padded blocks or never do it.

代码风格统一是非常有好处的，你应总是写填充的块或永远不这么做。

## Rule Details

This rule enforces consistent empty line padding within blocks.

该规则强制块内空行填充的一致性。

## Options

This rule has one option, which can be a string option or an object option.

该规则有一个选项，可以是字符串或对象。

String option:

字符串选项：

* `"always"` (default) requires empty lines at the beginning and ending of block statements (except `switch` statements and classes)
* `"always"` (默认) 要求块语句开始或末尾有空行 (除了 `switch` 语句和类)
* `"never"` disallows empty lines at the beginning and ending of block statements (except `switch` statements and classes)
* `"never"` 禁止块语句开始或末尾有空行 (除了 `switch` 语句和类)

Object option:

对象选项：

* `"blocks"` require or disallow padding within block statements
* `"blocks"` 要求或禁止块内填充
* `"classes"` require or disallow padding within classes
* `"classes"` 要求或禁止类内填充
* `"switches"` require or disallow padding within `switch` statements
* `"switches"` 要求或禁止在 `switch` 语句中填充

### always

Examples of **incorrect** code for this rule with the default `"always"` option:

默认选项 `"always"` 的 **错误** 代码示例：

```js
/*eslint padded-blocks: ["error", "always"]*/

if (a) {
    b();
}

if (a) { b(); }

if (a)
{
    b();
}

if (a) {

    b();
}

if (a) {
    b();

}

if (a) {
    // comment
    b();

}
```

Examples of **correct** code for this rule with the default `"always"` option:

默认选项 `"always"` 的 **正确** 代码示例：

```js
/*eslint padded-blocks: ["error", "always"]*/

if (a) {

    b();

}

if (a)
{

    b();

}

if (a) {

    // comment
    b();

}
```

### never

Examples of **incorrect** code for this rule with the `"never"` option:

选项 `"never"` 的 **错误** 代码示例：

```js
/*eslint padded-blocks: ["error", "never"]*/

if (a) {

    b();

}

if (a)
{

    b();

}

if (a) {

    b();
}

if (a) {
    b();

}
```

Examples of **correct** code for this rule with the `"never"` option:

选项 `"never"` 的 **正确** 代码示例：

```js
/*eslint padded-blocks: ["error", "never"]*/

if (a) {
    b();
}

if (a)
{
    b();
}
```

### blocks

Examples of **incorrect** code for this rule with the `{ "blocks": "always" }` option:

选项 `{ "blocks": "always" }` 的 **错误** 代码示例：

```js
/*eslint padded-blocks: ["error", { "blocks": "always" }]*/

if (a) {
    b();
}

if (a) { b(); }

if (a)
{
    b();
}

if (a) {

    b();
}

if (a) {
    b();

}

if (a) {
    // comment
    b();

}
```

Examples of **correct** code for this rule with the `{ "blocks": "always" }` option:

选项  `{ "blocks": "always" }` 的 **正确** 代码示例：

```js
/*eslint padded-blocks: ["error", { "blocks": "always" }]*/

if (a) {

    b();

}

if (a)
{

    b();

}

if (a) {

    // comment
    b();

}
```

Examples of **incorrect** code for this rule with the `{ "blocks": "never" }` option:

选项 `{ "blocks": "never" }` 的 **错误** 代码示例：

```js
/*eslint padded-blocks: ["error", { "blocks": "never" }]*/

if (a) {

    b();

}

if (a)
{

    b();

}

if (a) {

    b();
}

if (a) {
    b();

}
```

Examples of **correct** code for this rule with the `{ "blocks": "never" }` option:

选项 `{ "blocks": "never" }` 的 **正确** 代码示例：

```js
/*eslint padded-blocks: ["error", { "blocks": "never" }]*/

if (a) {
    b();
}

if (a)
{
    b();
}
```

### classes

Examples of **incorrect** code for this rule with the `{ "classes": "always" }` option:

选项 `{ "classes": "always" }` 的 **错误** 代码示例：

```js
/*eslint padded-blocks: ["error", { "classes": "always" }]*/

class  A {
    constructor(){
    }
}
```

Examples of **correct** code for this rule with the `{ "classes": "always" }` option:

选项 `{ "classes": "always" }` 的 **正确** 代码示例：

```js
/*eslint padded-blocks: ["error", { "classes": "always" }]*/

class  A {

    constructor(){
    }

}
```

Examples of **incorrect** code for this rule with the `{ "classes": "never" }` option:

选项 `{ "classes": "never" }` 的 **错误** 代码示例：

```js
/*eslint padded-blocks: ["error", { "classes": "never" }]*/

class  A {

    constructor(){
    }

}
```

Examples of **correct** code for this rule with the `{ "classes": "never" }` option:

选项 `{ "classes": "never" }` 的 **正确** 代码示例：

```js
/*eslint padded-blocks: ["error", { "classes": "never" }]*/

class  A {
    constructor(){
    }
}
```

### switches

Examples of **incorrect** code for this rule with the `{ "switches": "always" }` option:

选项 `{ "switches": "always" }` 的 **错误** 代码示例：

```js
/*eslint padded-blocks: ["error", { "switches": "always" }]*/

switch (a) {
    case 0: foo();
}
```

Examples of **correct** code for this rule with the `{ "switches": "always" }` option:

选项 `{ "switches": "always" }` 的 **正确** 代码示例：

```js
/*eslint padded-blocks: ["error", { "switches": "always" }]*/

switch (a) {

    case 0: foo();

}

if (a) {
    b();
}
```

Examples of **incorrect** code for this rule with the `{ "switches": "never" }` option:

选项 `{ "switches": "never" }` 的 **错误** 代码示例：

```js
/*eslint padded-blocks: ["error", { "switches": "never" }]*/

switch (a) {

    case 0: foo();

}
```

Examples of **correct** code for this rule with the `{ "switches": "never" }` option:

选项 `{ "switches": "never" }` 的 **正确** 代码示例：

```js
/*eslint padded-blocks: ["error", { "switches": "never" }]*/

switch (a) {
    case 0: foo();
}

if (a) {

    b();

}
```

## When Not To Use It

You can turn this rule off if you are not concerned with the consistency of padding within blocks.

如果你并不关心块内填充的一致性，你可以关闭此规则。

## Version

This rule was introduced in ESLint 0.9.0.

该规则在 ESLint 0.9.0 中被引入。

## Resources

* [Rule source](https://github.com/eslint/eslint/tree/master/lib/rules/padded-blocks.js)
* [Documentation source](https://github.com/eslint/eslint/tree/master/docs/rules/padded-blocks.md)
