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

JavaScript 允许你在成员表达式中的点操作符的前面或者后面放置一个换行符

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

The rule takes one option, a string:

该规则只有一个选项，是个字符串：

* If it is `"object"`, the dot in a member expression should be on the same line as the object portion. The default is `"object"`.

* 如果它的值是`"object"`，表达式中的点号操作符应该和对象在同一行。默认是 `"object"`。

* If it is `"property"`, the dot in a member expression should be on the same line as the property portion.

* 如果它的值是`"property"`，表达式中的点号操作符应该和属性在同一行。

### object

The default `"object"` option requires the dot to be on the same line as the object.

这是默认选项，它需要点操作符和对象部分放在同一行。

Examples of **incorrect** code for the default `"object"` option:

默认选项`"object"`的 **错误**代码示例：

```js
/*eslint dot-location: ["error", "object"]*/

var foo = object
.property;
```

Examples of **correct** code for the default `"object"` option:

默认选项`"object"`的 **正确**代码示例：

```js
/*eslint dot-location: ["error", "object"]*/

var foo = object.
property;
var bar = object.property;
```

### property

The `"property"` option requires the dot to be on the same line as the property.

此选项需要点操作符和属性放在同一行。

Examples of **incorrect** code for the `"property"` option:

`"property"`选项的 **错误**代码示例：

```js
/*eslint dot-location: ["error", "property"]*/

var foo = object.
property;
```

Examples of **correct** code for the `"property"` option:

`"property"`选项的 **正确**代码示例：

```js
/*eslint dot-location: ["error", "property"]*/

var foo = object
.property;
var bar = object.property;
```

## When Not To Use It

You can turn this rule off if you are not concerned with the consistency of newlines before or after dots in member expressions.

如果你不关心成员表达式中点操作符换行符前后的一致性，可以关掉此规则。

## Related Rules

* [newline-after-var](newline-after-var)
* [dot-notation](dot-notation)

## Version

This rule was introduced in ESLint 0.21.0.

此规则在 ESLint 0.21.0 中被引入

## Resources

* [Rule source](https://github.com/eslint/eslint/tree/master/lib/rules/dot-location.js)
* [Documentation source](https://github.com/eslint/eslint/tree/master/docs/rules/dot-location.md)
