---
title: generator-star-spacing - Rules
layout: doc
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# Enforce spacing around the * in generator functions (generator-star-spacing)

# 强制 generator 函数中 * 号周围有空格 (generator-star-spacing)

(fixable) The `--fix` option on the [command line](../user-guide/command-line-interface#fix) automatically fixes problems reported by this rule.

(fixable) [命令行](../user-guide/command-line-interface#fix)中的 `--fix` 选项可以自动修复该规则报告的问题。

Generators are a new type of function in ECMAScript 6 that can return multiple values over time.
These special functions are indicated by placing an `*` after the `function` keyword.

在 ECMAScript 6 中，Generators 是一个新的函数类型，随着时间的推移可以返回多个值。这些特殊的函数是在 `function` 关键字后放置一个 `*`。

Here is an example of a generator function:

以下是个 generator 函数的示例：

```js
/*eslint-env es6*/

function* generator() {
    yield "44";
    yield "55";
}
```

This is also valid:

这个同样有效：

```js
/*eslint-env es6*/

function *generator() {
    yield "44";
    yield "55";
}
```

This is valid as well:

这个也是有效的：

```js
/*eslint-env es6*/

function * generator() {
    yield "44";
    yield "55";
}
```

To keep a sense of consistency when using generators this rule enforces a single position for the `*`.

为了保持使用 generators 函数的一致性，该规则对 `*` 强制设置一个单独的位置。

## Rule Details

This rule aims to enforce spacing around the `*` of generator functions.

该规则旨在约束 generator 函数的 `*` 周围的空格。

## Options

The rule takes one option, an object, which has two keys `before` and `after` having boolean values `true` or `false`.

该规则只有一个可选项，是个对象，有两个键`before` 和 `after`对应的值可以为`true`或`false`。

* `before` enforces spacing between the `*` and the `function` keyword.
  If it is `true`, a space is required, otherwise spaces are disallowed.
  In object literal shorthand methods, spacing before the `*` is not checked, as they lack a `function` keyword.

* `before` 强制在 `*` 和 `function` 关键字之间有空格。如果设置为 `true` ，要求有空格，否则不允许有空格。在对象文本的缩写方法中，`*`之前的空格不会被检查，因为它们缺少 `function` 关键字。

* `after` enforces spacing between the `*` and the function name (or the opening parenthesis for anonymous generator functions).
  If it is `true`, a space is required, otherwise spaces are disallowed.

* `after` 强制在 `*` 和函数名之间有空格 (或匿名 generator 函数的左括号)。如果设置为 `true`，要求有空格，否则不允许有空格。
 
The default is `{"before": true, "after": false}`.

默认为 `{"before": true, "after": false}`。

```json
"generator-star-spacing": ["error", {"before": false, "after": true}]
```

And the option has shorthand as a string keyword:

这些选项可缩写为一个字符串关键字：

* `{"before": true, "after": false}` → `"before"`
* `{"before": true, "after": false}` → `"before"`
* `{"before": false, "after": true}` → `"after"`
* `{"before": false, "after": true}` → `"after"`
* `{"before": true, "after": true}` → `"both"`
* `{"before": true, "after": true}` → `"both"`
* `{"before": false, "after": false}` → `"neither"`
* `{"before": false, "after": false}` → `"neither"`

```json
"generator-star-spacing": ["error", "after"]
```

## Examples

### before

Examples of **correct** code for this rule with the `"before"` option:

选项 `"before"` 的 **正确** 代码示例：

```js
/*eslint generator-star-spacing: ["error", {"before": true, "after": false}]*/
/*eslint-env es6*/

function *generator() {}

var anonymous = function *() {};

var shorthand = { *generator() {} };
```

### after

Examples of **correct** code for this rule with the `"after"` option:

选项 `"after"` 的 **正确** 代码示例：

```js
/*eslint generator-star-spacing: ["error", {"before": false, "after": true}]*/
/*eslint-env es6*/

function* generator() {}

var anonymous = function* () {};

var shorthand = { * generator() {} };
```

### both

Examples of **correct** code for this rule with the `"both"` option:

选项 `"both"` 的 **正确** 代码示例：

```js
/*eslint generator-star-spacing: ["error", {"before": true, "after": true}]*/
/*eslint-env es6*/

function * generator() {}

var anonymous = function * () {};

var shorthand = { * generator() {} };
```

### neither

Examples of **correct** code for this rule with the `"neither"` option:

选项 `"neither"` 的 **正确** 代码示例：

```js
/*eslint generator-star-spacing: ["error", {"before": false, "after": false}]*/
/*eslint-env es6*/

function*generator() {}

var anonymous = function*() {};

var shorthand = { *generator() {} };
```

## When Not To Use It

If your project will not be using generators or you are not concerned with spacing consistency, you do not need this rule.

如果你的项目不使用 generators 或者你不关心空格的一致性，可以关闭此规则。

## Further Reading

* [Understanding ES6: Generators](https://leanpub.com/understandinges6/read/#leanpub-auto-generators)

## Version

This rule was introduced in ESLint 0.17.0.

该规则在 ESLint 0.17.0 中被引入。

## Resources

* [Rule source](https://github.com/eslint/eslint/tree/master/lib/rules/generator-star-spacing.js)
* [Documentation source](https://github.com/eslint/eslint/tree/master/docs/rules/generator-star-spacing.md)
