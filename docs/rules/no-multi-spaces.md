---
title: Rule no-multi-spaces
layout: doc
translator: fengnana
proofreader: molee1905
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# Disallow multiple spaces (no-multi-spaces)

# 禁止出现多个空格 (no-multi-spaces)

Multiple spaces in a row that are not used for indentation are typically mistakes. For example:

在某行中，出现多个空格而且不是用来作缩进的，通常是个错误。例如：

```js

if(foo  === "bar") {}

```

It's hard to tell, but there are two spaces between `foo` and `===`. Multiple spaces such as this are generally frowned upon in favor of single space:

很难说，但是在`foo`和`===`之间有两个空格。支持使用单一空格的，是不赞成使用像这样的多个空格的。

```js

if(foo === "bar") {}

```

**Fixable:** This rule is automatically fixable using the `--fix` flag on the command line.

**Fixable:** 该规则可以通过`--fix`命令行进行自动修复。

## Rule Details

This rule aims to disallow multiple whitespace around logical expressions, conditional expressions, declarations, array elements, object properties, sequences and function parameters.

此规则目的在于禁止在逻辑表达式、 条件表达式、 声明、 数组元素、 对象属性、 序列和函数参数周围使用多个空格。

The following patterns are considered problems:

以下模式被认为是有问题的：

```js
/*eslint no-multi-spaces: 2*/

var a =  1;

if(foo   === "bar") {}

a <<  b

var arr = [1,  2];

a ?  b: c
```

The following patterns are not considered problems:

以下模式被认为是没有问题的：

```js
/*eslint no-multi-spaces: 2*/

var a = 1;

if(foo === "bar") {}

a << b

var arr = [1, 2];

a ? b: c
```

## Options

Some rules, like `key-spacing` in one of its alignment modes, might require multiple spaces in some instances. To support this case, this rule accepts an options object with a property named `exceptions`. The `exceptions` object expects property names to be AST node types as defined by [ESTree](https://github.com/estree/estree). The easiest way to determine the node types for `exceptions` is to use the [online demo](http://eslint.org/parser).

有些规则，像`key-spacing`在它的一个对齐模式中，在某些情况下也许会需要多个空格。为了支持这种情况，此规则接受一个属性名为`exceptions`的选项对象。`exceptions`对象期望的属性名是[ESTree](https://github.com/estree/estree) 定义的AST节点类型。为`exceptions`确定节点类型的最简单的方法是使用[online demo](http://eslint.org/parser)。

You can ignore certain parts of your code by setting node types as properties on the `exceptions` object with a value of `true`. By default, all node types are `false` except for `Property`, which is `true` by default in order to skip properties.

你可以通过在`exceptions`对象中设置节点类型的值为`true`来忽略某部分的代码。默认情况下，所有的节点类型除了`Property`都为`false`，`Property`默认为`true`是为了跳过属性检测。

### exceptions

With this option, The following patterns are not considered problems:

在此选项下，以下模式被认为是没有问题的：

```js
/* eslint no-multi-spaces: 2 */
/* eslint key-spacing: [2, { align: "value" }] */

var obj = {
    first:  "first",
    second: "second"
};
```

```js
/* eslint no-multi-spaces: [2, { exceptions: { "BinaryExpression": true } }] */
var a = 1  *  2;
```

The default `Property` exception can be disabled by setting it to `false`, so the following pattern is considered a warning:

默认的`Property`例外可以通过设置为`false`被禁用，所以以下模式被认为是一个警告：

```js
/* eslint no-multi-spaces: [2, { exceptions: { "Property": false } }] */
/* eslint key-spacing: [2, { align: "value" }] */

var obj = {
    first:  "first",
    second: "second"
};
```

You may wish to align variable declarations or import declarations with spaces. You can add exceptions for these cases:

你可能希望使用空格对齐变量声明或者导入声明。你可以添加为这些情况添加例外：

```js
/* eslint no-multi-spaces: [2, { exceptions: { "VariableDeclarator": true } }] */

var someVar      = 'foo';
var someOtherVar = 'barBaz';
```

```
/* eslint no-multi-spaces: [2, { exceptions: { "ImportDeclaration": true } }] */

import mod          from 'mod';
import someOtherMod from 'some-other-mod';
```

## When Not To Use It

If you don't want to check and disallow multiple spaces, then you should turn this rule off.

如果你不想检查或禁止出现多个空格，你可以关闭此规则。

## Related Rules

* [key-spacing](key-spacing)
* [space-infix-ops](space-infix-ops)
* [space-in-brackets](space-in-brackets) (deprecated)
* [space-in-parens](space-in-parens)
* [space-after-keywords](space-after-keywords)
* [space-unary-ops](space-unary-ops)
* [space-return-throw-case](space-return-throw-case)

## Version

This rule was introduced in ESLint 0.9.0.

此规则在 ESLint 0.9.0 中被引入。

## Resources

* [Rule source](https://github.com/eslint/eslint/tree/master/lib/rules/no-multi-spaces.js)
* [Documentation source](https://github.com/eslint/eslint/tree/master/docs/rules/no-multi-spaces.md)
