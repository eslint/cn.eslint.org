---
title: Rule no-with
layout: doc
translator: fengnana
proofreader: coocon 
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# No with Statements (no-with)

# 禁用 with 语句 (no-with)

The `with` statement is potentially problematic because it adds members of an object to the current scope, making it impossible to tell what a variable inside the block actually refers to. Additionally, the `with` statement cannot be used in strict mode.

`with` 是潜在的问题，因为它会在当前的域中增加对象成员，使得区分实际块中的变量指的是什么变的不可能。此外, `with` 语句再严格模式下不可用。

## Rule Details

This rule is aimed at eliminating `with` statements.

此规则目的在于排除 `with` 语句。

The following patterns are considered problems:

以下模式被认为是有问题的：

```js
/*eslint no-with: 2*/
with (foo) {
    // ...
}
```

## When Not To Use It

If you intentionally use `with` statements then you can disable this rule.

如果你有意要使用 `with` 语句，可以禁用此规则。

## Further Reading

* [with Statement Considered Harmful](http://www.yuiblog.com/blog/2006/04/11/with-statement-considered-harmful/)

## Version

This rule was introduced in ESLint 0.0.2.

此规则在 ESLint 0.0.2 中被引入。

## Resources

* [Rule source](https://github.com/eslint/eslint/tree/master/lib/rules/no-with.js)
* [Documentation source](https://github.com/eslint/eslint/tree/master/docs/rules/no-with.md)
