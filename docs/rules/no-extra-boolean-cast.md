---
title: no-extra-boolean-cast - Rules
layout: doc
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# disallow unnecessary boolean casts (no-extra-boolean-cast)

# 禁止不必要的布尔类型转换（no-extra-boolean-cast）

In contexts such as an `if` statement's test where the result of the expression will already be coerced to a Boolean, casting to a Boolean via double negation (`!!`) or a `Boolean` call is unnecessary. For example, these `if` statements are equivalent:

在上下文中比如 `if` 语句的测试表达式的结果已经被强制转化成了一个布尔值，再通过双重否定（`!!`）或 `Boolean` 转化是不必要的。例如，这些 `if` 语句是等价的：

```js
if (!!foo) {
    // ...
}

if (Boolean(foo)) {
    // ...
}

if (foo) {
    // ...
}
```

## Rule Details

This rule disallows unnecessary boolean casts.

该规则禁止不必要的布尔类型转换。

Examples of **incorrect** code for this rule:

**错误** 代码示例：

```js
/*eslint no-extra-boolean-cast: "error"*/

var foo = !!!bar;

var foo = !!bar ? baz : bat;

var foo = Boolean(!!bar);

var foo = new Boolean(!!bar);

if (!!foo) {
    // ...
}

if (Boolean(foo)) {
    // ...
}

while (!!foo) {
    // ...
}

do {
    // ...
} while (Boolean(foo));

for (; !!foo; ) {
    // ...
}
```

Examples of **correct** code for this rule:

**正确** 代码示例：

```js
/*eslint no-extra-boolean-cast: "error"*/

var foo = !!bar;
var foo = Boolean(bar);

function foo() {
    return !!bar;
}

var foo = bar ? !!baz : !!bat;
```

## Version

This rule was introduced in ESLint 0.4.0.

该规则在 ESLint 0.4.0 中被引入。

## Resources

* [Rule source](https://github.com/eslint/eslint/tree/master/lib/rules/no-extra-boolean-cast.js)
* [Documentation source](https://github.com/eslint/eslint/tree/master/docs/rules/no-extra-boolean-cast.md)
