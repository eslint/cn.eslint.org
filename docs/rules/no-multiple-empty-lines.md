---
title: Rule no-multiple-empty-lines
layout: doc
translator: molee1905
proofreader: molee1905
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# Disallows multiple blank lines (no-multiple-empty-lines)

# 不允许多个空行 (no-multiple-empty-lines)

Some developers prefer to have multiple blank lines removed, while others feel that it helps improve readability. Whitespace is useful for separating logical sections of code, but excess whitespace takes up more of the screen.

一些开发者喜欢删除多个空行，然而其他人认为多个空行可以提高可读性。空白对于分离代码代码段逻辑是有帮助的，但过量的空白会占用更多的屏幕。

## Rule Details

This rule aims to reduce the scrolling required when reading through your code. It will warn when the maximum amount of empty lines has been exceeded.

该规则目的在于，当你读代码时，减少滚动。当超过最大空行数，该规则将发出警告。

## Options

The second argument can be used to configure this rule:

第二个参数被用来配置该规则：

* `max` sets the maximum number of consecutive blank lines.

* `max` 设置最大连续的空行数。

* `maxEOF` can be used to set a different number for the end of file. The last
  blank lines will then be treated differently. If omitted, the `max` option is
  applied at the end of the file.

* `maxEOF` 用来设置文件末尾空行数。最后的空行将被区分对待。如果省略，`max`选项被应用到文件末尾。

* `maxBOF` can be used to set a different number for the beginning of the file.
  If omitted, the 'max' option is applied at the beginning of the file.

* `maxBOF` 用来设置文件开始空行数。如果省略，`max`选项被应用到文件开始。

### max

In the following example, the first 2 is the code for an error
and the second 2 is the maximum number of empty lines:

例如：设置规则为错误级别 2，最大空行数为 2：

```json
"no-multiple-empty-lines": [2, {"max": 2}]
```

The following patterns are considered problems:

以下模式被认为是有问题的：

```js
/*eslint no-multiple-empty-lines: [2, {max: 2}]*/


var foo = 5;



var bar = 3;


```

The following patterns are not considered problems:

以下模式被认为是没有问题的：

```js
/*eslint no-multiple-empty-lines: [2, {max: 2}]*/


var foo = 5;


var bar = 3;


```

### maxEOF

```json
"no-multiple-empty-lines": [2, {"max": 2, "maxEOF": 1}]
```

The following patterns are considered problems:

以下模式被认为是有问题的：

```js
/*eslint no-multiple-empty-lines: [2, {max: 2, maxEOF: 1}]*/


var foo = 5;


var bar = 3;


```

The following patterns are not considered problems:

以下模式被认为是没有问题的：

```js
/*eslint no-multiple-empty-lines: [2, {max: 2, maxEOF: 1}]*/


var foo = 5;


var bar = 3;

```

### maxBOF

```json
"no-multiple-empty-lines": [2, {"max": 2, "maxBOF": 0}]
```

The following patterns are considered problems:

以下模式被认为是有问题的：

```js
/*eslint no-multiple-empty-lines: [2, {max: 2, maxBOF: 0}]*/


var foo = 5;


var bar = 3;


```

The following patterns are not considered problems:

以下模式被认为是没有问题的：

```js
/*eslint no-multiple-empty-lines: [2, {max: 2, maxBOF: 0}]*/
var foo = 5;


var bar = 3;


```

## When Not To Use It

If you do not care about extra blank lines, turn this off.

如果你不关心额外的空行，关闭此规则即可。

## Version

This rule was introduced in ESLint 0.9.0.

该规则在 ESLint 0.9.0 中被引入。

## Resources

* [Rule source](https://github.com/eslint/eslint/tree/master/lib/rules/no-multiple-empty-lines.js)
* [Documentation source](https://github.com/eslint/eslint/tree/master/docs/rules/no-multiple-empty-lines.md)
