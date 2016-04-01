---
title: Rule space-after-function-name
layout: doc
translator: yanggao40
proofreader: maomaoking
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# Require or disallow spaces following function names (space-after-function-name)

# 要求或禁止函数名称后的空格 (space-after-function-name)

**Replacement notice**: This rule was removed in ESLint v1.0 and replaced by the [space-before-function-paren](space-before-function-paren) rule.

**替换声明**: 该规则在 ESLint v1.0 中移除，被[space-before-function-paren](space-before-function-paren) 规则替代。

Whitespace between a function name and its parameter list is optional.

在函数名称和参数列表之间的空白是可选的。

```js
function withoutSpace(x) {
    // ...
}

function withSpace (x) {
    // ...
}
```

Some style guides may require a consistent spacing for function names.

一些风格指南可能要求对函数名称使用一致的空格。

## Rule Details

This rule aims to enforce a consistent spacing after function names. It takes one argument. If it is `"always"` then all function names must be followed by at least one space. If `"never"` then there should be no spaces between the name and the parameter list. The default is `"never"`.

该规则旨在在函数名称后强制一致的空格。它带有一个参数。如果参数是`"always"`，所有的函数名称后必须跟随至少一个空格。若果是`"never"`，在函数名称和参数列表之间不应有空格。默认为`"never"`。


The following patterns are considered problems:

下面的模式被认为有问题的：

```js
function foo (x) {
    // ...
}

var x = function named (x) {};

// When [1, "always"]
function bar(x) {
    // ...
}
```

The following patterns are not considered problems:

下面的模式认为是正确的：

```js
function foo(x) {
    // ...
}

var x = function named(x) {};

// When [1, "always"]
function bar (x) {
    // ...
}
```

## Version

This rule was introduced in ESLint 0.11.0 and removed in 1.0.0-rc-1.

该规则在 ESLint 0.11.0 中引入， 在 1.0.0-rc-1 中移除。

## Resources

* [Documentation source](https://github.com/eslint/eslint/tree/master/docs/rules/space-after-function-name.md)
