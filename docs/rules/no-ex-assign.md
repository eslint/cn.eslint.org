---
title: Rule no-ex-assign
layout: doc
translator: ybbjegj
proofreader: molee1905
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# Disallow Assignment of the Exception Parameter (no-ex-assign)

# 禁止为异常参数赋值（no-ex-assign）

When an error is caught using a `catch` block, it's possible to accidentally (or purposely) overwrite the reference to the error. Such as:

使用 `catch` 捕获到一个错误时，有可能意外地(或故意)覆盖错误的引用。比如:

```js
try {
    // code
} catch (e) {
    e = 10;
}
```

This makes it impossible to track the error from that point on.

这将导致不能再跟踪错误。

## Rule Details

This rule's purpose is to enforce a convention. Assigning a value to the exception parameter wipes out all the valuable data contained therein and thus should be avoided. Since there is no `arguments` object to offer alternative access to this data, assignment of the parameter is absolutely destructive.

该规则的目的是强制一种约定。为异常参数赋值，其中所包含的所有有价值的数据会丢失，因此应该避免。由于没有 `arguments` 对象来提供替代的选择去访问这些数据，给该参数赋值绝对是毁灭性的。

Examples of **incorrect** code for this rule:

**错误**代码示例：

```js
/*eslint no-ex-assign: "error"*/

try {
    // code
} catch (e) {
    e = 10;
}
```

Examples of **correct** code for this rule:

**正确**代码示例：

```js
/*eslint no-ex-assign: "error"*/

try {
    // code
} catch (e) {
    var foo = 'bar';
}
```

## Further Reading

* [Do not assign to the exception parameter](http://jslinterrors.com/do-not-assign-to-the-exception-parameter/)
* [The "catch" with try...catch](http://weblog.bocoup.com/the-catch-with-try-catch/) by Ben Alman explains how the exception identifier can leak into the outer scope in IE 6-8

## Version

This rule was introduced in ESLint 0.0.9.

该规则在 ESLint 0.0.9 中被引入。

## Resources

* [Rule source](https://github.com/eslint/eslint/tree/master/lib/rules/no-ex-assign.js)
* [Documentation source](https://github.com/eslint/eslint/tree/master/docs/rules/no-ex-assign.md)
