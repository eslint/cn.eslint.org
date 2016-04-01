---
title: Rule no-new-require
layout: doc
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# Disallow new require (no-new-require)

# 不允许new require (no-new-require)

The `require` function is used to include modules that exist in separate files, such as:

`require`方法被用来引入存在单独文件中模块，例如：

```js
var appHeader = require('app-header');
```

Some modules return a constructor which can potentially lead to code such as:

某些模块返回一个构造函数，可能会导致如下代码的写法：

```js
var appHeader = new require('app-header');
```

Unfortunately, this introduces a high potential for confusion since the code author likely meant to write:

不幸，此写法引入巨大疑惑，后来的编码者可能会这样写：

```js
var appHeader = new (require('app-header'));
```

For this reason, it is usually best to disallow this particular expression.

因为这个原因，最好不允许这种特殊的表达。

## Rule Details

This rule aims to eliminate use of the `new require` expression. As such, it warns whenever `new require` is found in code.

此规则旨在消除使用`new require`的表达方式。正因为此，当在代码里发现`new require`即警告。

The following pattern is considered a warning:

以下模式被认为警告：

```js
/*eslint no-new-require: 2*/

var appHeader = new require('app-header');
```

The following pattern is not a warning:

以下模式被认为没警告：

```js
/*eslint no-new-require: 2*/

var AppHeader = require('app-header');
```

## When Not To Use It

If you are using a custom implementation of `require` and your code will never be used in projects where a standard `require` (CommonJS, Node.js, AMD) is expected, you can safely turn this rule off.

如果你使用的是自定义的`require`方法，且你的代码不会在期望使用标准`require`的工程里出现，关闭这个规则是安全的。

## Version

This rule was introduced in ESLint 0.6.0.

此规则在ESLint 0.6.0被引入。

## Resources

* [Rule source](https://github.com/eslint/eslint/tree/master/lib/rules/no-new-require.js)
* [Documentation source](https://github.com/eslint/eslint/tree/master/docs/rules/no-new-require.md)
