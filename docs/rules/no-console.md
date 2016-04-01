---
title: Rule no-console
layout: doc
translator: ybbjegj
proofreader: molee1905
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# Disallow Use of console (no-console)

# 禁用 console (no-console)

In JavaScript that is designed to be executed in the browser, it's considered a best practice to avoid using methods on `console`. Such messages are considered to be for debugging purposes and therefore not suitable to ship to the client. In general, calls using `console` should be stripped before being pushed to production.

在 JavaScript 中，console 被设计为在浏览器中运行，避免使用`console`的方法被认为是一种最佳实践。`console` 输出的消息被认为是用于调试的，因此不适合输出到客户端。通常,在发布到产品之前应该剔除 `console` 的调用。

```js
console.log("Made it here.");
console.error("That shouldn't have happened.");
```

## Rule Details

This rule is aimed at eliminating unwanted `console` references from your JavaScript. As such, it warns whenever it sees `console` used as an identifier in code.

该规则目的在于消除 JavaScript 代码中不需要的 `console` 引用。因此，在代码中只要发现 `console` 标识符，该规则就会发出警告。

Examples of **incorrect** code for this rule:

**错误**代码示例：

```js
/*eslint no-console: 2*/

console.log("Hello world!");
console.error("Something bad happened.");
```

Examples of **correct** code for this rule:

**正确**代码示例：

```js
/*eslint no-console: 2*/

// custom console
Console.log("Hello world!");
```

## Options

This rule supports the following options:

该规则支持以下选项：

`allow`: The list of console operations to be used as exceptions to the rule. 

`allow`: console操作的列表作为该规则的例外情况。 

For example:

例如: 

```js
/*eslint no-console: [2, { allow: ["warn", "error"] }] */

console.log("this will be considered a problem");
console.warn("this will not be considered a problem");
console.error("this will not be considered a problem");
```

## When Not To Use It

If you're using Node.js, however, `console` is used to output information to the user and so is not strictly used for debugging purposes. If you are developing for Node.js then you most likely do not want this rule enabled.

如果你正在使用 Node.js, `console` 主要用于向用户输出信息，而不是严格用于调试目的。如果你正在开发 Node.js ，最好不要启用该规则。

## Related Rules

* [no-alert](no-alert)
* [no-debugger](no-debugger)

## Version

This rule was introduced in ESLint 0.0.2.

该规则在 ESLint 0.0.2 中被引入。

## Resources

* [Rule source](https://github.com/eslint/eslint/tree/master/lib/rules/no-console.js)
* [Documentation source](https://github.com/eslint/eslint/tree/master/docs/rules/no-console.md)
