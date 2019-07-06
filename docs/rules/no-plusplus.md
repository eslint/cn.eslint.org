---
title: no-plusplus - Rules
layout: doc
edit_link: https://github.com/eslint/eslint/edit/master/docs/rules/no-plusplus.md
rule_type: suggestion
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# disallow the unary operators `++` and `--` (no-plusplus)

# 禁止使用一元操作符 `++` 和 `--` (no-plusplus)

Because the unary `++` and `--` operators are subject to automatic semicolon insertion, differences in whitespace can change semantics of source code.

因为一元操作符 `++` 和 `--` 会自动添加分号，不同的空白可能会改变源代码的语义。

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

This rule disallows the unary operators `++` and `--`.

该规则禁止使用一元操作符 `++` 和 `--`。

Examples of **incorrect** code for this rule:

**错误** 代码示例：

```js
/*eslint no-plusplus: "error"*/

var foo = 0;
foo++;

var bar = 42;
bar--;

for (i = 0; i < l; i++) {
    return;
}
```

Examples of **correct** code for this rule:

**正确** 代码示例：

```js
/*eslint no-plusplus: "error"*/

var foo = 0;
foo += 1;

var bar = 42;
bar -= 1;

for (i = 0; i < l; i += 1) {
    return;
}
```

## Options

This rule has an object option.

该规则有一个对象选项。

* `"allowForLoopAfterthoughts": true` allows unary operators `++` and `--` in the afterthought (final expression) of a `for` loop.
* `"allowForLoopAfterthoughts": true` 允许在 `for` 循环的最后一个表达式中使用 `++` 和 `--` 。

### allowForLoopAfterthoughts

Examples of **correct** code for this rule with the `{ "allowForLoopAfterthoughts": true }` option:

选项 `{ "allowForLoopAfterthoughts": true }` 的 **正确** 代码示例：

```js
/*eslint no-plusplus: ["error", { "allowForLoopAfterthoughts": true }]*/

for (i = 0; i < l; i++) {
    return;
}

for (i = 0; i < l; i--) {
    return;
}
```

## Version

This rule was introduced in ESLint 0.0.9.

该规则在 ESLint 0.0.9 中被引入。

## Resources

* [Rule source](https://github.com/eslint/eslint/tree/master/lib/rules/no-plusplus.js)
* [Documentation source](https://github.com/eslint/eslint/tree/master/docs/rules/no-plusplus.md)
