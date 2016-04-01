---
title: Rule no-eq-null
layout: doc
translator: fengnana
proofreader: molee1905
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# Disallow Null Comparisons (no-eq-null)

# 禁止Null比较 (no-eq-null)

Comparing to `null` without a type-checking operator (`==` or `!=`), can have unintended results as the comparison will evaluate to true when comparing to not just a `null`, but also an `undefined` value.

不使用类型检测操作符(`==` or `!=`)就与`null`进行比较可能会导致意想不到的结果，因为当与`null`还和`undefined`值进行比较时，会被解析为 true。

```js
if (foo == null) {
  bar();
}
```

## Rule Details

The `no-eq-null` rule aims reduce potential bug and unwanted behavior by ensuring that comparisons to `null` only match `null`, and not also `undefined`. As such it will flag comparisons to null when using `==` and `!=`.

该规则目的在于通过确保与`null`的比较只匹配`null`，而不是匹配值`undefined`来减少潜在的 bug 和不想要的行为。它将标记使用`==` 和 `!=`对 `null`的比较。

The following patterns are considered problems:

以下模式被认为是有问题的：

```js
/*eslint no-eq-null: 2*/

if (foo == null) {
  bar();
}

while (qux != null) {
  baz();
}
```

The following patterns are considered okay:

以下模式被认为是没有问题的：

```js
/*eslint no-eq-null: 2*/

if (foo === null) {
  bar();
}

while (qux !== null) {
  baz();
}
```

## Version

This rule was introduced in ESLint 0.0.9.

此规则在 ESLint 0.0.9 中被引入。

## Resources

* [Rule source](https://github.com/eslint/eslint/tree/master/lib/rules/no-eq-null.js)
* [Documentation source](https://github.com/eslint/eslint/tree/master/docs/rules/no-eq-null.md)
