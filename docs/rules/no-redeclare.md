---
title: Rule no-redeclare
layout: doc
translator: fengnana
proofreader: yanggao40
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# Disallow Redeclaring Variables (no-redeclare)

# 禁止重新定义变量 (no-redeclare)

In JavaScript, it's possible to redeclare the same variable name using `var`. This can lead to confusion as to where the variable is actually declared and initialized.

在JavaScript中，使用`var`可以对同一个变量重定义。这会导致混乱变量在哪里和初始化。

## Rule Details

This rule is aimed at eliminating variables that have multiple declarations in the same scope.

此规则目旨在消除同一作用域中多次重定义变量。

The following patterns are considered problems:

以下模式被认为是有问题的：

```js
/*eslint no-redeclare: 2*/

var a = 3;
var a = 10;
```

The following patterns are not considered problems:

以下模式被认为是没有问题的：

```js
/*eslint no-redeclare: 2*/

var a = 3;
// ...
a = 10;
```

## Options

This rule takes one option, an object, with a property `"builtinGlobals"`.

此规则带有一个选项，属性是`"builtinGlobals"`的对象。

```json
{
    "no-redeclare": [2, {"builtinGlobals": true}]
}
```

### builtinGlobals

`false` by default.
If this is `true`, this rule checks with built-in global variables such as `Object`, `Array`, `Number`, ...

默认是`false`。如果为`true`，此规则检查内建全局变量如`Object`, `Array`, `Number`, ...

When `{"builtinGlobals": true}`, the following patterns are considered problems:

当 `{"builtinGlobals": true}`时，以下模式被认为是有问题的：

```js
/*eslint no-redeclare: [2, { "builtinGlobals": true }]*/

var Object = 0;
```

When `{"builtinGlobals": true}` and under `browser` environment, the following patterns are considered problems:

当`{"builtinGlobals": true}`并且在`browser`环境下，以下模式被认为是有问题的：

```js
/*eslint-env browser*/
/*eslint no-redeclare: [2, { "builtinGlobals": true }]*/

var top = 0;
```

* Note: The `browser` environment has many built-in global variables, `top` is one of them.
  Some of built-in global variables cannot be redeclared. It's a trap.
  
 * 注意：`browser`环境有许多内置全局变量，`top`是其中之一。一些内置全局变量不能被重定义。这是一个陷阱。

  ```js
  var top = 0;
  var left = 0;
  console.log(top + " " + left); // prints "[object Window] 0"
  console.log(top * left); // prints "NaN"
  ```

## Version

This rule was introduced in ESLint 0.0.9.

此规则在ESLint 0.0.9中被引入。

## Resources

* [Rule source](https://github.com/eslint/eslint/tree/master/lib/rules/no-redeclare.js)
* [Documentation source](https://github.com/eslint/eslint/tree/master/docs/rules/no-redeclare.md)
