---
title: Rule dot-location
layout: doc
translator: fengnana
proofreader: sunshiner
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# Enforce newline before and after dot (dot-location)

# 在点号之前或之后强制换行 (dot-location)

JavaScript allows you to place newlines before or after a dot in a member expression.

JavaScript允许你在成员表达式中的点操作符的前面或者后面放置一个换行符

Consistency in placing a newline before or after the dot can greatly increase readability.

点操作符前面或者后面放置统一的换行符，能增强代码可读性。

```js
var a = universe.
        galaxy;

var b = universe
       .galaxy;
```

## Rule Details

This rule aims to enforce newline consistency in member expressions. This rule prevents the use of mixed newlines around the dot in a member expression.

此规则目的在于规范成员表达式中强制换行的一致性。此规则防止在成员表达式中点操作符周围使用不同风格的换行风格。

## Options

The rule takes one option, a string, which can be either `object` or `property`.
If it is `object`, the dot in a member expression should be on the same line as the object portion.
If it is `property`, the dot in a member expression should be on the same line as the property portion.

规则中带有一个字符类型选项，该选项的值可以是`object` 或者 `property`。

如果是`object`，成员表达式中的点操作符应该和对象部分放在同一行。如果是`property`，成员表达式中的点操作符应该和属性部分放在同一行。

If unset, the default behavior is `"object"`.

如果不设置，默认值为`"object"`。

```json
    "dot-location": [2, "object"]
```

### "object"

This is the default option. It requires the dot to be on the same line as the object.

这是默认选项，它需要点操作符和对象部分放在同一行.

The following patterns are considered problems:

以下模式被认为是有问题的：

```js
/*eslint dot-location: [2, "object"]*/

var foo = object
.property;
```

The following patterns are not considered problems:

以下模式被认为是没有问题的：

```js
/*eslint dot-location: [2, "object"]*/

var foo = object.
property;
var bar = object.property;
```

### "property"

This option requires the dot to be on the same line as the property.

此选项需要点操作符和属性放在同一行。

The following patterns are considered problems:

以下模式被认为是有问题的：

```js
/*eslint dot-location: [2, "property"]*/

var foo = object.
property;
```

The following patterns are not considered problems:

以下模式被认为是没有问题的：

```js
/*eslint dot-location: [2, "property"]*/

var foo = object
.property;
var bar = object.property;
```

## When Not To Use It

You can turn this rule off if you are not concerned with the consistency of newlines before or after dots in member expressions.

如果你不关心成员表达式中点操作符换行符前后的一致性，可以关掉此规则

## Related Rules

* [newline-after-var](newline-after-var)
* [dot-notation](dot-notation)

## Version

This rule was introduced in ESLint 0.21.0.

此规则在 ESLint 0.21.0 中被引入

## Resources

* [Rule source](https://github.com/eslint/eslint/tree/master/lib/rules/dot-location.js)
* [Documentation source](https://github.com/eslint/eslint/tree/master/docs/rules/dot-location.md)
