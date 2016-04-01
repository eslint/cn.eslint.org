---
title: Rule no-catch-shadow
layout: doc
translator: ILFront-End
proofreader: molee1905
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# Disallow Shadowing of Variables Inside of catch (no-catch-shadow)

# 不允许在catch语句中遮盖变量 (no-catch-shadow)

In IE 8 and earlier, the catch clause parameter can overwrite the value of a variable in the outer scope, if that variable has the same name as the catch clause parameter.

在 IE 8 及更早的版本，catch 子句的参数可以覆盖一个外部的同名变量的值。

```js
var err = "x";

try {
    throw "problem";
} catch (err) {

}

console.log(err)    // err is 'problem', not 'x'
```

## Rule Details

This rule is aimed at preventing unexpected behavior in your program that may arise from a bug in IE 8 and earlier, in which the catch clause parameter can leak into outer scopes. This rule will warn whenever it encounters a catch clause parameter that has the same name as a variable in an outer scope.

该规则旨在避免可能由 IE 8 及更早版本中的 bug 导致的意外

在 IE 8 及更早版本中，catch 子句的参数会泄露到外部范围，该规则的目的就是避免这种 bug 导致的意外行为。但 catch 子句中的参数与外部范围的变量同名时，该规则将发出警告。

Examples of **incorrect** code for this rule:

**错误**代码示例：

```js
/*eslint no-catch-shadow: 2*/

var err = "x";

try {
    throw "problem";
} catch (err) {

}

function err() {
    // ...
};

try {
    throw "problem";
} catch (err) {

}
```

Examples of **correct** code for this rule:

**正确**代码示例：

```js
/*eslint no-catch-shadow: 2*/

var err = "x";

try {
    throw "problem";
} catch (e) {

}

function err() {
    // ...
};

try {
    throw "problem";
} catch (e) {

}
```

## When Not To Use It

If you do not need to support IE 8 and earlier, you should turn this rule off.

如果你并不需要支持 IE 8 及更早的版本，你应该关闭此规则。

## Version

This rule was introduced in ESLint 0.0.9.

此规则在 ESLint 0.0.9 中被引入。

## Resources

* [Rule source](https://github.com/eslint/eslint/tree/master/lib/rules/no-catch-shadow.js)
* [Documentation source](https://github.com/eslint/eslint/tree/master/docs/rules/no-catch-shadow.md)
