---
title: Rule yoda
layout: doc
translator: fengnana
proofreader: qifeigit
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# Require or disallow Yoda Conditions (yoda)

# 要求或者禁止Yoda条件 (yoda)

Yoda conditions are so named because the literal value of the condition comes first while the variable comes second. For example, the following is a Yoda condition:

Yoda 条件被如此命名，是因为在条件判断中字面量在先而变量在第二的位置。例如，以下是Yoda条件：

```js
if ("red" === color) {
    // ...
}
```

This is called a Yoda condition because it reads as, "red is the color", similar to the way the Star Wars character Yoda speaks. Compare to the other way of arranging the operands:

它被叫做 Yoda 条件是因为它这样读："红色是颜色"，类似于星球大战中 Yoda 的讲话方式。对比另一种操作数的排序方式：

```js
if (color === "red") {
    // ...
}
```

This typically reads, "color is red", which is arguably a more natural way to describe the comparison.

这通常读作，"颜色是红的"，这是一种更自然的方式去描述对比。

Proponents of Yoda conditions highlight that it is impossible to mistakenly use `=` instead of `==` because you cannot assign to a literal value. Doing so will cause a syntax error and you will be informed of the mistake early on. This practice was therefore very common in early programming where tools were not yet available.

Yoda 条件的支持者强调，错误地使用`=`代替`==`是不可能的，因为你不能分配给一个文本值。这样做将导致一个语法错误，并且你会被提早告知。因此在工具尚不可用的早期编程中，这种做法是非常常见的。

Opponents of Yoda conditions point out that tooling has made us better programmers because tools will catch the mistaken use of `=` instead of `==` (ESLint will catch this for you). Therefore, they argue, the utility of the pattern doesn't outweigh the readability hit the code takes while using Yoda conditions.

Yoda 条件的反对者指出工具使我们成为更好的程序员，因为工具将捕获使用`=`代替`==`的错误(ESLint将为您捕获这个错误)。因此,他们认为当使用 Yoda 条件时，该模式的实用性并不高于代码的可读性。

## Rule Details

This rule aims to enforce consistent style of conditions which compare a variable to a literal value.

这条规则需要一个参数。如果是`"never"`那么比较绝不能是一个 Yoda 条件。

## Options

This rule can take a string option:

该规则只有一个字符串选项：

* If it is the default `"never"`, then comparisons must never be Yoda conditions.

* 如果是默认的`"never"`，则比较绝不能是 Yoda 条件。

* If it is `"always"`, then the literal value must always come first.

* 如果是`"always"`，那么字面量值必须放在首位。

The default `"never"` option can have exception options in an object literal:

默认选项`"never"`可以有例外情况，这些例外情况以对象字面量的形式展现：

* If the `"exceptRange"` property is `true`, the rule *allows* yoda conditions in range comparisons which are wrapped directly in parentheses, including the parentheses of an `if` or `while` condition. The default value is `false`. A *range* comparison tests whether a variable is inside or outside the range between two literal values.

* If the `"onlyEquality"` property is `true`, the rule reports yoda conditions *only* for the equality operators `==` and `===`. The default value is `false`.

The `onlyEquality` option allows a superset of the exceptions which `exceptRange` allows, thus both options are not useful together.

### never

Examples of **incorrect** code for the default `"never"` option:

默认选项`"never"`的 **错误**代码示例：

```js
/*eslint yoda: "error"*/

if ("red" === color) {
    // ...
}

if (true == flag) {
    // ...
}

if (5 > count) {
    // ...
}

if (-1 < str.indexOf(substr)) {
    // ...
}

if (0 <= x && x < 1) {
    // ...
}
```

Examples of **correct** code for the default `"never"` option:

默认选项`"never"`的 **正确**代码示例：

```js
/*eslint yoda: "error"*/

if (5 & value) {
    // ...
}

if (value === "red") {
    // ...
}
```

### exceptRange

Examples of **correct** code for the `"never", { "exceptRange": true }` options:

`"never", { "exceptRange": true }`选项的 **正确**代码示例：

```js
/*eslint yoda: ["error", "never", { "exceptRange": true }]*/

function isReddish(color) {
    return (color.hue < 60 || 300 < color.hue);
}

if (x < -1 || 1 < x) {
    // ...
}

if (count < 10 && (0 <= rand && rand < 1)) {
    // ...
}

function howLong(arr) {
    return (0 <= arr.length && arr.length < 10) ? "short" : "long";
}
```

### onlyEquality

Examples of **correct** code for the `"never", { "onlyEquality": true }` options:

`"never", { "onlyEquality": true }`选项的 **正确**代码示例：

```js
/*eslint yoda: ["error", "never", { "onlyEquality": true }]*/

if (x < -1 || 9 < x) {
}

if (x !== 'foo' && 'bar' != x) {
}
```

### always

Examples of **incorrect** code for the `"always"` option:

`"always"`选项的 **错误**代码示例：

```js
/*eslint yoda: ["error", "always"]*/

if (color == "blue") {
    // ...
}
```

Examples of **correct** code for the `"always"` option:

`"always"`选项的 **正确**代码示例：

```js
/*eslint yoda: ["error", "always"]*/

if ("blue" == value) {
    // ...
}

if (-1 < str.indexOf(substr)) {
    // ...
}
```

## Further Reading

* [Yoda Conditions](http://en.wikipedia.org/wiki/Yoda_conditions)
* [Yoda Notation and Safe Switching](http://thomas.tuerke.net/on/design/?with=1249091668#msg1146181680)

## Version

This rule was introduced in ESLint 0.7.1.

此规则在 ESLint 0.7.1 中被引入。

## Resources

* [Rule source](https://github.com/eslint/eslint/tree/master/lib/rules/yoda.js)
* [Documentation source](https://github.com/eslint/eslint/tree/master/docs/rules/yoda.md)
