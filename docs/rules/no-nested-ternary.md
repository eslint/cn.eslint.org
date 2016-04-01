---
title: Rule no-nested-ternary
layout: doc
translator: molee1905
proofreader: molee1905
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# Disallow Nested Ternaries (no-nested-ternary)

# 禁用嵌套的三元表达式  (no-nested-ternary)

Nesting ternary expressions makes code unclear. The `no-nested-ternary` rule disallows the use of nested ternary expressions.

嵌套的三元表达式使代码不清晰。该规则不允许使用嵌套的三元表达式。

```js
var foo = bar ? baz : qux === quxx ? bing : bam;
```

## Rule Details

The `no-nested-ternary` rule aims to increase the clarity and readability of code by disallowing the use of nested ternary expressions.

该规则旨在通过禁用嵌套的三元表达式，提高代码的清晰度和可读性。

The following patterns are considered problems:

以下模式被认为是有问题的：

```js
/*eslint no-nested-ternary: 2*/

var thing = foo ? bar : baz === qux ? quxx : foobar;

foo ? baz === qux ? quxx() : foobar() : bar();
```

The following patterns are considered okay and could be used alternatively:

以下模式被认为是可以的，可以替代使用：

```js
/*eslint no-nested-ternary: 2*/

var thing;

if (foo) {
  thing = bar;
} else if (baz === qux) {
  thing = quxx;
} else {
  thing = foobar;
}
```

## Related Rules

* [no-ternary](no-ternary)
* [no-unneeded-ternary](no-unneeded-ternary)

## Version

This rule was introduced in ESLint 0.2.0.

该规则在 ESLint 0.2.0 中被引入。

## Resources

* [Rule source](https://github.com/eslint/eslint/tree/master/lib/rules/no-nested-ternary.js)
* [Documentation source](https://github.com/eslint/eslint/tree/master/docs/rules/no-nested-ternary.md)
