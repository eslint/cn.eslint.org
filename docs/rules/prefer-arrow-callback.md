---
title: Rule prefer-arrow-callback
layout: doc
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# Suggest using arrow functions as callbacks. (prefer-arrow-callback)

# 推荐使用箭头函数作为回调。 (prefer-arrow-callback)

Arrow functions are suited to callbacks, because:

箭头函数适合做回调函数，因为：

- `this` keywords in arrow functions bind to the upper scope's.
- `this` 关键字再箭头函数中绑定到了外层的作用域的 this。
- The notation of the arrow function is shorter than function expression's.
- 箭头函数的符号比函数表达式的短。

## Rule Details

This rule is aimed to flag usage of function expressions in an argument list.

该规则旨在标记函数表达式在参数列表中的用法。

The following patterns are considered problems:

以下模式被认为是有问题的：

```js
/*eslint prefer-arrow-callback: "error"*/

foo(function(a) { return a; });
foo(function() { return this.a; }.bind(this));
```

The following patterns are not considered problems:

以下模式本认为是没有问题的：

```js
/*eslint prefer-arrow-callback: "error"*/
/*eslint-env es6*/

foo(a => a);
foo(function*() { yield; });

// this is not a callback.
var foo = function foo(a) { return a; };

// using `this` without `.bind(this)`.
foo(function() { return this.a; });

// recursively.
foo(function bar(n) { return n && n + bar(n - 1); });
```

## Options

This rule takes one optional argument, an object which is an options object.

该规则有个对象选项。

### allowNamedFunctions

This is a `boolean` option and it is `false` by default. When set to `true`, the rule doesn't warn on named functions used as callbacks.

这是一个布尔选项，默认为 `false`。当设置为 `true`，该规则不对作为回调函数的命名函数发出警告。

Examples of **correct** code for the `{ "allowNamedFunctions": true }` option:

选项 `{ "allowNamedFunctions": true }` 的 **正确** 代码示例：

```js
/*eslint prefer-arrow-callback: ["error", { "allowNamedFunctions": true }]*/

foo(function bar() {});
```

### allowUnboundThis

This is a `boolean` option and it is `true` by default. When set to `false`, this option allows the use of `this` without restriction and checks for dynamically assigned `this` values such as when using `Array.prototype.map` with a `context` argument. Normally, the rule will flag the use of `this` whenever a function does not use `bind()` to specify the value of `this` constantly.

这是一个布尔选项，默认为 `true`。当设置为 `false`，该选项允许不受限制地使用 `this`，检测动态地分配 `this`，比如使用带有 `context` 的 `Array.prototype.map`。通常，该规则将标记 `this` 的使用，只要函数不使用 `bind()` 指定 `this` 的值。

Examples of **incorrect** code for the `{ "allowUnboundThis": false }` option:

选项 `{ "allowUnboundThis": false }` 的 **错误** 代码示例：

```js
/*eslint prefer-arrow-callback: ["error", { "allowUnboundThis": false }]*/
/*eslint-env es6*/

foo(function() { this.a; });

foo(function() { (() => this); });

someArray.map(function (itm) { return this.doSomething(itm); }, someObject);
```

## When Not To Use It

This rule should not be used in ES3/5 environments.

此规则不应在 ES3/5 环境中使用。

In ES2015 (ES6) or later, if you don't want to be notified about function expressions in an argument list, you can safely disable this rule.

在 ES2015 (ES6) 或以后的版本中，如果你不希望收到关于函数表达式出现在参数列表中通知，关闭此规则即可。

## Version

This rule was introduced in ESLint 1.2.0.

该规则在 ESLint 1.2.0 中被引入。

## Resources

* [Rule source](https://github.com/eslint/eslint/tree/master/lib/rules/prefer-arrow-callback.js)
* [Documentation source](https://github.com/eslint/eslint/tree/master/docs/rules/prefer-arrow-callback.md)
