---
title: Rule no-comma-dangle
layout: doc
translator: yanggao40
proofreader: molee1905
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# Disallow Dangling Commas (no-comma-dangle)

# 禁止尾部逗号 (no-comma-dangle)

**Replacement notice**: This rule was removed in ESLint v1.0 and replaced by the [comma-dangle](comma-dangle) rule.

**替换声明：**该规则在 ESLint v1.0 中被移除，被[comma-dangle](comma-dangle)规则替换。

Trailing commas in object literals are valid according to the ECMAScript 5 (and ECMAScript 3!) spec, however IE8 (when not in IE8 document mode) and below will throw an error when it encounters trailing commas in JavaScript.

根据 ECMAScript 5 (和 ECMAScript 3!)规范，对象字面量中的尾部逗号是有效的，但是 IE8（非 IE8 文档模式）及以下版本，在 JavaScript 中遇到尾部逗号会抛出错误。

```js
var foo = {
    bar: "baz",
    qux: "quux",
};
```

## Rule Details

This rule is aimed at detecting trailing commas in object literals. As such, it will warn whenever it encounters a trailing comma in an object literal.

该规则旨在检测在对象字面量中的尾部逗号。这样，无论何时在对象字面量中遇到尾部逗号，该规则将会发出警告。

The following are considered problems:

以下模式被认为是有问题的：

```js
var foo = {
    bar: "baz",
    qux: "quux",
};

var arr = [1,2,];

foo({
  bar: "baz",
  qux: "quux",
});
```

The following patterns are not considered problems:

以下模式被认为是没有问题的：

```js
var foo = {
    bar: "baz",
    qux: "quux"
};

var arr = [1,2];

foo({
  bar: "baz",
  qux: "quux"
});
```

## When Not To Use It

If your code will not be run in IE8 or below (a Node.js application, for example) and you'd prefer to allow trailing commas, turn this rule off.

如果你的代码不会在 IE8 及以下版本中（例如 Node.js 应用）运行，并且你倾向于允许尾部逗号，关闭此规则即可。

## Version

This rule was introduced in ESLint 0.0.9 and removed in 1.0.0-rc-1.

该规则在 ESLint 0.0.9 中被引入，在 1.0.0-rc-1 中被移除。

## Resources

* [Documentation source](https://github.com/eslint/eslint/tree/master/docs/rules/no-comma-dangle.md)
