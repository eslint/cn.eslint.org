---
title: Rule max-statements-per-line
layout: doc
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# enforce a maximum number of statements allowed per line (max-statements-per-line)

# 强制每一行中所允许的最大语句数量 (max-statements-per-line)

A line of code containing too many statements can be difficult to read. Code is generally read from the top down, especially when scanning, so limiting the number of statements allowed on a single line can be very beneficial for readability and maintainability.

一行代码中包含太多的语句会很难阅读。代码通常是从上往下阅读，尤其是浏览时，所以，限制单行中所允许的语句数量可以提高可读性和维护性。

```js
function () { var bar; if (condition) { bar = 1; } else { bar = 2; } return true; } // too many statements
```

## Rule Details

This rule enforces a maximum number of statements allowed per line.

该规则强制每一行中所允许的最大语句数量。

## Options

### max

The `"max"` object property is optional (default: 1).

`"max"` 属性书可选的（默认为 `1`)。

Examples of **incorrect** code for this rule with the default `{ "max": 1 }` option:

默认选项 `{ "max": 1 }` 的 **错误** 代码示例：

```js
/*eslint max-statements-per-line: ["error", { "max": 1 }]*/

var bar; var baz;
if (condition) { bar = 1; }
for (var i = 0; i < length; ++i) { bar = 1; }
switch (discriminant) { default: break; }
function foo() { bar = 1; }
var foo = function foo() { bar = 1; };
(function foo() { bar = 1; })();
```

Examples of **correct** code for this rule with the default `{ "max": 1 }` option:

默认选项 `{ "max": 1 }` 的 **正确** 代码示例：

```js
/*eslint max-statements-per-line: ["error", { "max": 1 }]*/

var bar, baz;
if (condition) bar = 1;
for (var i = 0; i < length; ++i);
switch (discriminant) { default: }
function foo() { }
var foo = function foo() { };
(function foo() { })();
```

Examples of **incorrect** code for this rule with the `{ "max": 2 }` option:

选项 `{ "max": 2 }` 的 **错误** 代码示例：

```js
/*eslint max-statements-per-line: ["error", { "max": 2 }]*/

var bar; var baz; var qux;
if (condition) { bar = 1; } else { baz = 2; }
for (var i = 0; i < length; ++i) { bar = 1; baz = 2; }
switch (discriminant) { case 'test': break; default: break; }
function foo() { bar = 1; baz = 2; }
var foo = function foo() { bar = 1; };
(function foo() { bar = 1; baz = 2; })();
```

Examples of **correct** code for this rule with the `{ "max": 2 }` option:

选项 `{ "max": 2 }` 的 **正确** 代码示例：

```js
/*eslint max-statements-per-line: ["error", { "max": 2 }]*/

var bar; var baz;
if (condition) bar = 1; if (condition) baz = 2;
for (var i = 0; i < length; ++i) { bar = 1; }
switch (discriminant) { default: break; }
function foo() { bar = 1; }
var foo = function foo() { bar = 1; };
(function foo() { var bar = 1; })();
```

## When Not To Use It

You can turn this rule off if you are not concerned with the number of statements on each line.

如果你并不关心每一行的语句数量，你可以关闭此规则。

## Related Rules

* [max-depth](max-depth)
* [max-len](max-len)
* [max-nested-callbacks](max-nested-callbacks)
* [max-params](max-params)
* [max-statements](max-statements)

## Version

This rule was introduced in ESLint 2.5.0.

该规则在 ESLint 2.5.0 中被引入。

## Resources

* [Rule source](https://github.com/eslint/eslint/tree/master/lib/rules/max-statements-per-line.js)
* [Documentation source](https://github.com/eslint/eslint/tree/master/docs/rules/max-statements-per-line.md)
