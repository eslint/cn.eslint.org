---
title: Rule no-unused-expressions
layout: doc
translator: fengnana
proofreader: coocon 
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# Disallow Unused Expressions (no-unused-expressions)

# 禁止未使用的表达式(no-unused-expressions)

Unused expressions are those expressions that evaluate to a value but are never used. For example:

未使用的表达式是指那些计算结果为一个值但是从未被使用过的表达式。

```js
"Hello world";
```

This string is a valid JavaScript expression, but isn't actually used. Even though it's not a syntax error it is clearly a logic error and it has no effect on the code being executed.

上面的字符串是一个有效的 JavaScript 表达式，但是实际没有被使用过。即使它不是一个语法错误，很明显是一个逻辑错误并且对代码的执行没有影响。

## Rule Details

This rule aims to eliminate unused expressions. The value of an expression should always be used, except in the case of expressions that side effect: function calls, assignments, and the `new` operator.

此规则的目的在于消除未使用的表达式。一个表达式的值应该是被使用的，除了有副作用的表达式的情况：函数调用，赋值和 `new` 操作符。

**Note:** Sequence expressions (those using a comma, such as `a = 1, b = 2`) are always considered unused unless their return value is assigned or a function call is made with the sequence expression value.

**注意:** 连续的表达式（那些使用逗号如`a = 1, b = 2`）通常被认为是无用的，除非它们的返回值被使用或者是连续表达式的值被一个函数调用。

## Options

This rule, in it's default state, does not require any arguments. If you would like to enable one or more of the following you may pass an object with the options set as follows:

此规则在默认情况下，不需要任何参数。如果你想要开启一个或者更多的设置你可以通过一个如下所示的选项对象实现：

* `allowShortCircuit` set to `true` will allow you to use short circuit evaluations in your expressions (Default: `false`).

`allowShortCircuit` 设置为 `true` 将会允许你在表达式中使用逻辑短路求值。（默认为：`false`）

* `allowTernary` set to `true` will enable you use ternary operators in your expressions similarly to short circuit evaluations (Default: `false`).

`allowTernary` 设置为 `true` 将会允许你在表达式中使用类似逻辑短路求值的三元运算符。（默认为：`false`）

By default the following patterns are considered problems:

以下模式默认被认为是有问题的：

```js
/*eslint no-unused-expressions: 2*/

0

if(0) 0

{0}

f(0), {}

a && b()

a, b()

c = a, b;
```

The following patterns are not considered problems by default:

以下模式默认被认为是没有问题的：

```js
/*eslint no-unused-expressions: 2*/

{}

f()

a = 0

new C

delete a.b

void a
```

The following patterns are not considered problems if `allowShortCircuit` is enabled:

如果 `allowShortCircuit` 被启用，以下模式被认为是没有问题的：

```js
/*eslint no-unused-expressions: [2, { allowShortCircuit: true }]*/

a && b()

a() || (b = c)
```

If you enable the `allowTernary` the following patterns will be allowed:

如果启用 `allowTernary`，以下模式是允许的：

```js
/*eslint no-unused-expressions: [2, { allowTernary: true }]*/

a ? b() : c()

a ? (b = c) : d()
```

Enabling both options will allow a combination of both ternary and short circuit evaluation:

启用所有的选项将会同时允许三元运算和逻辑短路求值：

```js
/*eslint no-unused-expressions: [2, { allowShortCircuit: true, allowTernary: true }]*/

a ? b() || (c = d) : e()
```

The above options still will not allow expressions that have code paths without side effects such as the following:

以上选项依然不会允许使用存在没有副作用的代码路径的表达式:

```js
/*eslint no-unused-expressions: [2, { allowShortCircuit: true, allowTernary: true }]*/

a || b

a ? b : 0

a ? b : c()
```

## Version

This rule was introduced in ESLint 0.1.0.

此规则在 ESLint 0.1.0 中被引入。

## Resources

* [Rule source](https://github.com/eslint/eslint/tree/master/lib/rules/no-unused-expressions.js)
* [Documentation source](https://github.com/eslint/eslint/tree/master/docs/rules/no-unused-expressions.md)
