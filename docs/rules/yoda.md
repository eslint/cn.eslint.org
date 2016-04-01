---
title: Rule yoda
layout: doc
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# Require or disallow Yoda Conditions (yoda)

# 需要或者禁止Yoda条件 (yoda)

Yoda conditions are so named because the literal value of the condition comes first while the variable comes second. For example, the following is a Yoda condition:

Yoda条件被如此命名，因为文字条件在先而变量在第二的位置。例如，以下是Yoda条件：

```js
if ("red" === color) {
    // ...
}
```

This is called a Yoda condition because it reads as, "red is the color", similar to the way the Star Wars character Yoda speaks. Compare to the other way of arranging the operands:

它被叫做Yoda条件是因为它这样读："红色是颜色"，类似于星球大战中Yoda的讲话方式。比较其他安排操作数的方法：

```js
if (color === "red") {
    // ...
}
```

This typically reads, "color is red", which is arguably a more natural way to describe the comparison.

这通常读作，"颜色是红的"，这是一种更自然的方式去描述对比。

Proponents of Yoda conditions highlight that it is impossible to mistakenly use `=` instead of `==` because you cannot assign to a literal value. Doing so will cause a syntax error and you will be informed of the mistake early on. This practice was therefore very common in early programming where tools were not yet available.

尤达条件的支持者突出,是不可能错误地使用`=`代替`==`,因为你不能分配给一个文本值。这样做将导致一个语法错误,并且你会在早期被告知。因此这种做法是非常常见的在早期的编程工具尚未提供的时候。

Opponents of Yoda conditions point out that tooling has made us better programmers because tools will catch the mistaken use of `=` instead of `==` (ESLint will catch this for you). Therefore, they argue, the utility of the pattern doesn't outweigh the readability hit the code takes while using Yoda conditions.

尤达条件的反对者指出工具使我们成为更好的程序员,因为工具将捕获使用`=`代替`==`的错误(ESLint将为您捕获这个)。因此,他们认为,模式的效用不高于代码的可读性需求当使用尤达条件时。

## Rule Details

This rule takes one argument. If it is `"never"` then comparisons must never be a Yoda condition. If `"always"`, then the literal must always come first. The default is `"never"`.

这条规则需要一个参数。如果是`"never"`那么比较绝不能是一个尤达条件。如果是`"always"`,那么文字永远是第一位。默认值是`"never"`。

The following patterns are considered problems:

以下模式被认为是有问题的：

```js
/*eslint yoda: 2*/

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

```js
/*eslint yoda: [2, "always"]*/

if (color == "blue") {
    // ...
}
```


The following patterns are not considered problems:

以下模式被认为是没有问题的：

```js
/*eslint yoda: 2*/

if (5 & value) {
    // ...
}

if (value === "red") {
    // ...
}
```

```js
/*eslint yoda: [2, "always"]*/

if ("blue" == value) {
    // ...
}

if (-1 < str.indexOf(substr)) {
    // ...
}
```

## Options

There are a few options to the rule:

此规则有几个选项：

```json
"yoda": [2, "never", {
    "exceptRange": false,
    "onlyEquality": false
}]
```

The `onlyEquality` option is a superset of `exceptRange`, thus both options are hardly useful together.

`onlyEquality`选项是`exceptRange`的超集,因此这两种选择几乎是同时使用。

### Range Tests

"Range" comparisons test whether a variable is inside or outside the range between two literals. When configured with the `exceptRange` option, range tests are allowed when the comparison itself is wrapped directly in parentheses, such as those of an `if` or `while` condition.

"Range"比较测试一个变量是否在内部或外部两个文本之间的范围。当配置了`exceptRange`选项时,当直接比较包裹在括号中的自己时，允许范围测试,如这些中的`if`或`while`条件。

```json
"yoda": [2, "never", { "exceptRange": true }]
```

With the `exceptRange` option enabled, the following patterns become valid:

`exceptRange`选项被启用时，以下模式变的有效：

```js
/*eslint yoda: [2, "never", { "exceptRange": true }]*/

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

### Apply only to equality, but not other operators

Some developers might prefer to only enforce the rule for the equality operators `==` and `===`, and not showing any warnings for any code around other operators. With `onlyEquality` option, these patterns will not be considered problems:

一些开发者可能只喜欢对判等运算符`==` 和 `===`强制规则,而不会显示任何代码的任何警告在其他操作符周围。在`onlyEquality`选项下，以下模式被认为是没有问题的：

```js
/*eslint yoda: [2, "never", { "onlyEquality": true }]*/

if (x < -1 || 9 < x) {
}

if (x !== 'foo' && 'bar' != x) {
}
```

## Further Reading

* [Yoda Conditions](http://en.wikipedia.org/wiki/Yoda_conditions)
* [Yoda Notation and Safe Switching](http://thomas.tuerke.net/on/design/?with=1249091668#msg1146181680)

## Version

This rule was introduced in ESLint 0.7.1.

此规则在ESLint 0.7.1中被引入。

## Resources

* [Rule source](https://github.com/eslint/eslint/tree/master/lib/rules/yoda.js)
* [Documentation source](https://github.com/eslint/eslint/tree/master/docs/rules/yoda.md)
