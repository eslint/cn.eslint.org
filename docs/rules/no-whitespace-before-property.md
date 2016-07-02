---
title: Rule no-whitespace-before-property
layout: doc
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# Disallow whitespace before properties (no-whitespace-before-property)

# 禁止属性前有空白 (no-whitespace-before-property)

(fixable) The `--fix` option on the [command line](../user-guide/command-line-interface#fix) automatically fixes problems reported by this rule.

(fixable) [命令行](../user-guide/command-line-interface#fix)中的 `--fix` 选项可以自动修复该规则报告的问题。

JavaScript allows whitespace between objects and their properties. However, inconsistent spacing can make code harder to read and can lead to errors.

JavaScript 允许在对象和它们的属性中间存在空白。然而，不一致的空格会使代码难以阅读，而且可能导致出错。

```js
foo. bar .baz . quz
```

## Rule Details

This rule alerts for whitespace around the dot or before the opening bracket before properties of objects if they are on the same line. It does not alert for whitespace when the object and property are on separate lines, as it is common to add newlines to longer chains of properties:

该规则对点号周围或对象属性之前的左括号前的空白发出警告。如果对象和属性不在同一行上，这种情况的空白将不会被警告，因为对级联的属性增加新行是一种很普遍的行为。

```js
foo
  .bar()
  .baz()
  .qux()
```

The following patterns are considered problems when this rule is turned on:

以下模式被认为是有问题的：

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

And the following patterns are not considered problems:

以下模式被认为是没有问题的：

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
