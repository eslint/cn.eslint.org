---
title: no-empty-pattern - Rules
layout: doc
edit_link: https://github.com/eslint/eslint/edit/master/docs/rules/no-empty-pattern.md
rule_type: problem
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# Disallow empty destructuring patterns (no-empty-pattern)

# 禁止使用空解构模式 (no-empty-pattern)

(recommended) The `"extends": "eslint:recommended"` property in a configuration file enables this rule.

(recommended) 配置文件中的 `"extends": "eslint:recommended"` 属性启用了此规则。

When using destructuring, it's possible to create a pattern that has no effect. This happens when empty curly braces are used to the right of an embedded object destructuring pattern, such as:

当使用解构赋值时，可能创建了一个不起作用的模式。把空的花括号放在嵌入的对象的解构模式右边时，就会产生这种情况，例如：

```js
// doesn't create any variables
var {a: {}} = foo;
```

In this code, no new variables are created because `a` is just a location helper while the `{}` is expected to contain the variables to create, such as:

在以上代码中，没有创建新的变量，因为 `a` 只是一个辅助位置，而 `{}` 将包含创建的变量，例如：

```js
// creates variable b
var {a: { b }} = foo;
```

In many cases, the empty object pattern is a mistake where the author intended to use a default value instead, such as:

在许多情况下，作者本来打算使用一个默认值，却错写成空对象，例如：

```js
// creates variable a
var {a = {}} = foo;
```

The difference between these two patterns is subtle, especially because the problematic empty pattern looks just like an object literal.

这两种模式直接的区别是微妙的，因为空模式看起来像是一个对象字面量。

## Rule Details

This rule aims to flag any empty patterns in destructured objects and arrays, and as such, will report a problem whenever one is encountered.

此规则目的在于标记出在解构对象和数组中的任何的空模式，每当遇到一个这样的空模式，该规则就会报告一个问题。

Examples of **incorrect** code for this rule:

**错误** 代码示例：

```js
/*eslint no-empty-pattern: "error"*/

var {} = foo;
var [] = foo;
var {a: {}} = foo;
var {a: []} = foo;
function foo({}) {}
function foo([]) {}
function foo({a: {}}) {}
function foo({a: []}) {}
```

Examples of **correct** code for this rule:

**正确** 代码示例：

```js
/*eslint no-empty-pattern: "error"*/

var {a = {}} = foo;
var {a = []} = foo;
function foo({a = {}}) {}
function foo({a = []}) {}
```

## Version

This rule was introduced in ESLint 1.7.0.

该规则在 ESLint 1.7.0 中被引入。

## Resources

* [Rule source](https://github.com/eslint/eslint/tree/master/lib/rules/no-empty-pattern.js)
* [Documentation source](https://github.com/eslint/eslint/tree/master/docs/rules/no-empty-pattern.md)
