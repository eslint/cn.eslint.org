---
title: no-whitespace-before-property - Rules
layout: doc
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# disallow whitespace before properties (no-whitespace-before-property)

# 禁止属性前有空白 (no-whitespace-before-property)

(fixable) The `--fix` option on the [command line](../user-guide/command-line-interface#fix) can automatically fix some of the problems reported by this rule.

(fixable) [命令行](../user-guide/command-line-interface#fix)中的 `--fix` 选项可以自动修复一些该规则报告的问题。

JavaScript allows whitespace between objects and their properties. However, inconsistent spacing can make code harder to read and can lead to errors.

JavaScript 允许在对象和它们的属性中间存在空白。然而，不一致的空格会使代码难以阅读，而且可能导致出错。

```js
foo. bar .baz . quz
```

## Rule Details

This rule disallows whitespace around the dot or before the opening bracket before properties of objects if they are on the same line. This rule allows whitespace when the object and property are on separate lines, as it is common to add newlines to longer chains of properties:

该规则禁止在点号周围或对象属性之前的左括号前出现空白。如果对象和属性不在同一行上，这种情况，该规则允许使用空白，因为对级联的属性增加新行是一种很普遍的行为。

```js
foo
  .bar()
  .baz()
  .qux()
```

Examples of **incorrect** code for this rule:

**错误** 代码示例：

```js
/*eslint no-whitespace-before-property: "error"*/

foo [bar]

foo. bar

foo .bar

foo. bar. baz

foo. bar()
  .baz()

foo
  .bar(). baz()
```

Examples of **correct** code for this rule:

**正确** 代码示例：

```js
/*eslint no-whitespace-before-property: "error"*/

foo.bar

foo[bar]

foo[ bar ]

foo.bar.baz

foo
  .bar().baz()

foo
  .bar()
  .baz()

foo.
  bar().
  baz()
```

## When Not To Use It

Turn this rule off if you do not care about allowing whitespace around the dot or before the opening bracket before properties of objects if they are on the same line.

如果你并不关心点号操作符周围的空白或者在与对象属性在同一行的左括号之前的空白，你可以关闭此规则。

## Version

This rule was introduced in ESLint 2.0.0-beta.1.

该规则在 ESLint 2.0.0-beta.1 中被引入。

## Resources

* [Rule source](https://github.com/eslint/eslint/tree/master/lib/rules/no-whitespace-before-property.js)
* [Documentation source](https://github.com/eslint/eslint/tree/master/docs/rules/no-whitespace-before-property.md)
