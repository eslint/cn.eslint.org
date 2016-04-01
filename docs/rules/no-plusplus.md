---
title: Rule no-plusplus
layout: doc
translator: molee1905
proofreader: yanggao40
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# Disallow ++ and -- (no-plusplus)

# 不允许使用 ++ 和 -- (no-plusplus)

The `no-plusplus` rule flags the use of unary operators, `++` and `--`.

该规则标记一元操作符 ++ 和 -- 的使用。

```js
var foo = 0;
foo++;
```

The `++` and `--` operators are subject to automatic semicolon insertion. When their use is allowed, introducing whitespace may change semantics of source code. Enabling the rule may prevent this kind of errors.

`++` 和 `--`操作符会自动添加分号。当允许使用它们时，引入空格可能会改变源代码的语义。启用该规则, 可以防止类此错误的出现。

```js
var i = 10;
var j = 20;

i ++
j
// i = 11, j = 20
```

```js
var i = 10;
var j = 20;

i
++
j
// i = 10, j = 21
```

## Rule Details

This rule is aimed at flagging the use of `++` and `--`. Some believe that the use of these unary operators reduces code quality and clarity. There are some programming languages that completely exclude these operators.

该规则旨在标记一元操作符`++` 和 `--`的使用。有些人认为这些一元操作符降低了代码的质量和清晰度。也有一些编程语言完全排除这些操作符。

## Options

This rule, in its default state, does not require any arguments. If you would like to enable one or more of the following you may pass an object with the options set as follows:

该规则，默认情况下，不需要任何参数。如果你想启用下面的一个或多个，你可以传递一个对象，作为可选项，按如下所示进行设置：

* `allowForLoopAfterthoughts` set to `true` will allow you to use the unary operators `++` and `--` in the afterthought (final expression) of a `for` loop.

* `allowForLoopAfterthoughts` 设置为 `true` 将允许你在`for`循环的中(最后面的表达式)使用一元操作符 `++` 和 `--`。

The following patterns are considered problems:

以下模式被认为是有问题的：

```js
/*eslint no-plusplus: 2*/

var foo = 0;
foo++;

var bar = 42;
bar--;

for (i = 0; i < l; i++) {
    return;
}
```

The following patterns are not considered problems:

以下模式被认为是没有问题的：

```js
/*eslint no-plusplus: 2*/

var foo = 0;
foo += 1;

var bar = 42;
bar -= 1;

for (i = 0; i < l; i += 1) {
    return;
}
```

The following patterns are not considered problems if `allowForLoopAfterthoughts` is set to true:

如果 `allowForLoopAfterthoughts` 设置为true, 以下模式被认为是没有问题的：

```js
/*eslint no-plusplus: [2, { allowForLoopAfterthoughts: true }]*/

for (i = 0; i < l; i++) {
    return;
}

for (i = 0; i < l; i--) {
    return;
}
```

## Version

This rule was introduced in ESLint 0.0.9.

该规则在ESLint 0.0.9 中被引入。

## Resources

* [Rule source](https://github.com/eslint/eslint/tree/master/lib/rules/no-plusplus.js)
* [Documentation source](https://github.com/eslint/eslint/tree/master/docs/rules/no-plusplus.md)
