---
title: Rule generator-star
layout: doc
translator: yanggao40
proofreader: sunshiner
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# Enforce the position of the * in generators (generator-star)

# 强制 * 在 generator 函数中的位置 (generator-star)

**Replacement notice**: This rule was removed in ESLint v1.0 and replaced by the [generator-star-spacing](generator-star-spacing) rule.

**替换声明：**该规则在 ESLint v1.0 中移除并被[generator-star-spacing](generator-star-spacing)规则代替。

Generators are a new type of function in ECMAScript 6 that can return multiple values over time.

generator 函数在 ECMAScript 6 中是一种新类型的函数，随着时间的推移它可以返回多个值。

These special functions are indicated by placing an `*` after the `function` keyword.

这些特别的函数通过在`function`关键字后面放置一个`*`声明。

Here is an example of a generator function:

下面是 generator 函数的的一个例子：

```js
/*eslint-env es6*/

function* generator() {
    yield "44";
    yield "55";
}
```

This is also valid:

下面这样同样可用：

```js
/*eslint-env es6*/

function *generator() {
    yield "44";
    yield "55";
}
```

This is valid as well:

下面这样也是可用的：

```js
/*eslint-env es6*/

function * generator() {
    yield "44";
    yield "55";
}
```

To keep a sense of consistency when using generators this rule enforces a single position for the `*`.

为了保持使用 generator 函数时的一致性，该规则强制`*`的位置。

## Rule Details

This rule enforces that the `*` is either placed next to the `function` keyword or the name of the function. The single
option for this rule is a string specifying the placement of the asterisk. For this option you may pass
`"start"`, `"middle"` or `"end"`. The default is `"end"`.

该规则强制`*`挨着`function`关键字或者函数名称放置。此规则的单一选项是一个字符串，用来指定星号的位置。你可以选择`"start"`, `"middle"` 或者`"end"`。默认为`"end"`。

You can set the style in configuration like this:

你可以像下面这样在配置中设置样式:

```json
"generator-star": ["error", "start"]
```

When using `"start"` this placement will be enforced:

使用`"start"`时位置将被强制为:

```js
/*eslint-env es6*/

function* generator() {
}
```

When using `"middle"` this placement will be enforced:

使用`"middle"`时位置被强制为:

```js
/*eslint-env es6*/

function * generator() {
}
```

When using `"end"` this placement will be enforced:

使用`"end"`时位置被强制为:

```js
/*eslint-env es6*/

function *generator() {
}
```

When using the expression syntax `"start"` will be enforced here:

当使用表达式语法`"start"`时将像下面这样强制:

```js
/*eslint-env es6*/

var generator = function* () {
}
```

When using the expression syntax `"middle"` will be enforced here:

当使用表达式语法`"middle"`时将像下面这样强制:

```js
/*eslint-env es6*/

var generator = function * () {
}
```

When using the expression syntax `"end"` will be enforced here:

当使用表达式语法`"end"`时将像下面这样强制:

```js
/*eslint-env es6*/

var generator = function *() {
}
```

When using the expression syntax this is valid for both `"start"` and `"end"`:

使用表达式语法时`"start"`和`"end"`同样适用:

```js
/*eslint-env es6*/

var generator = function*() {
}
```

The shortened object literal syntax for generators is not affected by this rule.

对于 generator 函数缩短的对象字面量语法不会被此规则影响。

## When Not To Use It

If your project will not be using generators you do not need this rule.

如果你的项目中不会使用 generator 函数就不必使用该规则。

## Further Reading

* [Understanding ES6: Generators](https://leanpub.com/understandinges6/read/#leanpub-auto-generators)

## Version

This rule was introduced in ESLint 0.12.0 and removed in 1.0.0-rc-1.

该规则在 ESLint 0.12.0 中被引入，在 1.0.0-rc-1 版本中被移除。

## Resources

* [Documentation source](https://github.com/eslint/eslint/tree/master/docs/rules/generator-star.md)
