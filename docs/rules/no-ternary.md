---
title: Rule no-ternary
layout: doc
translator: molee1905
proofreader: xkf521
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# Disallow Ternary Operators (no-ternary)

# 不允许使用三元操作符 (no-ternary)

The ternary operator is used to conditionally assign a value to a variable. Some believe that the use of ternary operators leads to unclear code.

三元操作符通过条件操作为一个变量赋值。一些人认为使用三元操作符会导致代码不清晰。

```js
var foo = isBar ? baz : qux;
```

## Rule Details

The `no-ternary` rule aims to disallow the use of ternary operators.

该规则旨在不允许使用三元操作符。

The following patterns are considered problems:

以下模式被认为是有问题的：

```js
/*eslint no-ternary: "error"*/

var foo = isBar ? baz : qux;

foo ? bar() : baz();

function quux() {
  return foo ? bar : baz;
}
```

The following patterns are considered okay and could be used alternatively:

以下模式被认为是可以的，可替代使用：

```js
/*eslint no-ternary: "error"*/

var foo;

if (isBar) {
    foo = baz;
} else {
    foo = qux;
}

if (foo) {
    bar();
} else {
    baz();
}

function quux() {
    if (foo) {
        return bar;
    } else {
        return baz;
    }
}
```

## Related Rules

* [no-nested-ternary](no-nested-ternary)
* [no-unneeded-ternary](no-unneeded-ternary)

## Version

This rule was introduced in ESLint 0.0.9.

该规则在ESLint 0.0.9 中被引入。

## Resources

* [Rule source](https://github.com/eslint/eslint/tree/master/lib/rules/no-ternary.js)
* [Documentation source](https://github.com/eslint/eslint/tree/master/docs/rules/no-ternary.md)
