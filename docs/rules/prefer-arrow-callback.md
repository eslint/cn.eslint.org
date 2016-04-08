---
title: Rule prefer-arrow-callback
layout: doc
translator: molee1905
proofreader: molee1905
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# Suggest using arrow functions as callbacks. (prefer-arrow-callback)

# 推荐使用箭头函数作为回调。 (prefer-arrow-callback)

Arrow functions are suited to callbacks, because:

箭头函数适合做回调函数，因为：

- `this` keywords in arrow functions bind to the upper scope's.

- `this` 关键字再箭头函数中绑定到了外层的作用域的this。

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
