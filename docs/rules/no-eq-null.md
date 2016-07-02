---
title: Rule no-eq-null
layout: doc
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# Disallow Null Comparisons (no-eq-null)

# 禁止与 null 进行比较 (no-eq-null)

Comparing to `null` with a type-checking operator (`==` or `!=`), can have unintended results as the comparison will evaluate to true when comparing to not just a `null`, but also an `undefined` value.

使用类型检测操作符（`==` 或 `!=`）与 `null` 进行比较，可能得意想不到的的结果，因为 `null`其本身以及 `null` 与 `undefined` 比较结果都为 true。

```js
if (foo == null) {
  bar();
}
```

## Rule Details

The `no-eq-null` rule aims reduce potential bug and unwanted behavior by ensuring that comparisons to `null` only match `null`, and not also `undefined`. As such it will flag comparisons to null when using `==` and `!=`.

该规则旨在通过确保与 `null` 比较时只等于 `null`，而不同时等于 `undefined`， 来减少潜在的 bug 和 意外行为。因此，它也将标记使用 `==` 和 `!=` 与 `null`比较的情况。

Examples of **incorrect** code for this rule:

**错误** 代码示例：

```js
/*eslint no-eq-null: "error"*/

if (foo == null) {
  bar();
}

while (qux != null) {
  baz();
}
```

Examples of **correct** code for this rule:

**正确** 代码示例：

```js
/*eslint no-eq-null: "error"*/

if (foo === null) {
  bar();
}

while (qux !== null) {
  baz();
}
```

## Version

This rule was introduced in ESLint 0.0.9.

该规则在 ESLint 0.0.9 中被引入。

## Resources

* [Rule source](https://github.com/eslint/eslint/tree/master/lib/rules/no-eq-null.js)
* [Documentation source](https://github.com/eslint/eslint/tree/master/docs/rules/no-eq-null.md)
