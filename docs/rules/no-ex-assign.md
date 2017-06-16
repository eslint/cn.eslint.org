---
title: no-ex-assign - Rules
layout: doc
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# disallow reassigning exceptions in `catch` clauses (no-ex-assign)

# 禁止对 `catch` 子句中的异常重新赋值 (no-ex-assign)

(recommended) The `"extends": "eslint:recommended"` property in a configuration file enables this rule.

(recommended) 配置文件中的 `"extends": "eslint:recommended"` 属性启用了此规则。

If a `catch` clause in a `try` statement accidentally (or purposely) assigns another value to the exception parameter, it impossible to refer to the error from that point on.
Since there is no `arguments` object to offer alternative access to this data, assignment of the parameter is absolutely destructive.

在 `try` 语句中的 `catch` 子句中，如果意外地（或故意地）给异常参数赋值，是不可能引用那个位置的错误的。由于没有 `arguments` 对象提供额外的方式访问这个异常，对它进行赋值绝对是毁灭性的。

## Rule Details

This rule disallows reassigning exceptions in `catch` clauses.

该规则禁止对 `catch` 子句中的异常重新赋值。

Examples of **incorrect** code for this rule:

**错误** 代码示例：

```js
/*eslint no-ex-assign: "error"*/

try {
    // code
} catch (e) {
    e = 10;
}
```

Examples of **correct** code for this rule:

**正确** 代码示例：

```js
/*eslint no-ex-assign: "error"*/

try {
    // code
} catch (e) {
    var foo = 10;
}
```

## Further Reading

* [The "catch" with try...catch](http://weblog.bocoup.com/the-catch-with-try-catch/) by Ben Alman explains how the exception identifier can leak into the outer scope in IE 6-8

## Version

This rule was introduced in ESLint 0.0.9.

该规则在 ESLint 0.0.9 中被引入。

## Resources

* [Rule source](https://github.com/eslint/eslint/tree/master/lib/rules/no-ex-assign.js)
* [Documentation source](https://github.com/eslint/eslint/tree/master/docs/rules/no-ex-assign.md)
