---
title: no-return-assign - Rules
layout: doc
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# Disallow Assignment in return Statement (no-return-assign)

# 禁止在返回语句中赋值 (no-return-assign)

One of the interesting, and sometimes confusing, aspects of JavaScript is that assignment can happen at almost any point. Because of this, an errant equals sign can end up causing assignment when the true intent was to do a comparison. This is especially true when using a `return` statement. For example:

在 JavaScript 中一个有趣有时有令人感到困惑的是几乎可以在任何位置进行赋值操作。正因为如此，本想进行比较操作，结果由于手误，变成了赋值操作。这种情况常见于 `return` 语句。例如：

```js
function doSomething() {
    return foo = bar + 2;
}
```

It is difficult to tell the intent of the `return` statement here. It's possible that the function is meant to return the result of `bar + 2`, but then why is it assigning to `foo`? It's also possible that the intent was to use a comparison operator such as `==` and that this code is an error.

在这个例子中，很难断定 `return` 语句的意图。很有可能这个函数是为了返回 `bar + 2`，但是如果是这样的话，为什么赋值给 `foo` 呢？也很有可能使用比较运算符比如 `==`，如果是这样的话代码是错误的。

Because of this ambiguity, it's considered a best practice to not use assignment in `return` statements.

正是由于这种模棱两可，在 `return` 语句中不使用赋值，被认为是一个最佳实践。

## Rule Details

This rule aims to eliminate assignments from `return` statements. As such, it will warn whenever an assignment is found as part of `return`.

此规则目的在于移除 `return` 语句中的赋值语句。因此，当在`return`中发现赋值，该规则将发出警告。

## Options

The rule takes one option, a string, which must contain one of the following values:

此规则带有一个字符串选项，它必须包含下列值之一：

* `except-parens` (default): Disallow assignments unless they are enclosed in parentheses.
* `except-parens`（默认）：禁止出现赋值语句，除非使用括号把它们括起来。
* `always`: Disallow all assignments.
* `always`：禁止所有赋值

### except-parens

This is the default option.
It disallows assignments unless they are enclosed in parentheses.

这是默认的选项。除非赋值语句是在圆括号中，否则不允许在返回语句中出现赋值语句。

Examples of **incorrect** code for the default `"except-parens"` option:

默认选项 `"except-parens"` 的 **错误** 代码示例：

```js
/*eslint no-return-assign: "error"*/

function doSomething() {
    return foo = bar + 2;
}

function doSomething() {
    return foo += 2;
}
```

Examples of **correct** code for the default `"except-parens"` option:

默认选项 `"except-parens"` 的 **正确** 代码示例：

```js
/*eslint no-return-assign: "error"*/

function doSomething() {
    return foo == bar + 2;
}

function doSomething() {
    return foo === bar + 2;
}

function doSomething() {
    return (foo = bar + 2);
}
```

### always

This option disallows all assignments in `return` statements.
All assignments are treated as problems.

此选项禁止 `return` 中所有的赋值。所有的赋值均被认为是有问题的。

Examples of **incorrect** code for the `"always"` option:

选项 `"always"` 的 **错误** 代码示例：

```js
/*eslint no-return-assign: ["error", "always"]*/

function doSomething() {
    return foo = bar + 2;
}

function doSomething() {
    return foo += 2;
}

function doSomething() {
    return (foo = bar + 2);
}
```

Examples of **correct** code for the `"always"` option:

选项 `"always"` 的 **正确** 代码示例：

```js
/*eslint no-return-assign: ["error", "always"]*/

function doSomething() {
    return foo == bar + 2;
}

function doSomething() {
    return foo === bar + 2;
}
```

## When Not To Use It

If you want to allow the use of assignment operators in a `return` statement, then you can safely disable this rule.

如果你想允许 `return` 语句中赋值操作符的使用，你可以关闭此规则。

## Version

This rule was introduced in ESLint 0.0.9.

该规则在 ESLint 0.0.9 中被引入。

## Resources

* [Rule source](https://github.com/eslint/eslint/tree/master/lib/rules/no-return-assign.js)
* [Documentation source](https://github.com/eslint/eslint/tree/master/docs/rules/no-return-assign.md)
