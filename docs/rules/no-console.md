---
title: no-console - Rules
layout: doc
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# disallow the use of `console` (no-console)

# 禁用 `console` (no-console)

In JavaScript that is designed to be executed in the browser, it's considered a best practice to avoid using methods on `console`. Such messages are considered to be for debugging purposes and therefore not suitable to ship to the client. In general, calls using `console` should be stripped before being pushed to production.

在 JavaScript，虽然`console` 被设计为在浏览器中执行的，但避免使用 `console` 的方法被认为是一种最佳实践。这样的消息被认为是用于调试的，因此不适合输出到客户端。通常，在发布到产品之前应该剔除 `console` 的调用。

```js
console.log("Made it here.");
console.error("That shouldn't have happened.");
```

## Rule Details

This rule disallows calls to methods of the `console` object.

该规则禁止调用 `console` 对象的方法。

Examples of **incorrect** code for this rule:

**错误** 代码示例：

```js
/*eslint no-console: "error"*/



console.log("Log a debug level message.");
console.warn("Log a warn level message.");
console.error("Log an error level message.");
```

Examples of **correct** code for this rule:

**正确** 代码示例：

```js
/*eslint no-console: "error"*/

// custom console
Console.log("Hello world!");
```

## Options

This rule has an object option for exceptions:

该规则有例外情况，是个对象：

* `"allow"` has an array of strings which are allowed methods of the `console` object
* `"allow"` 是个字符串数组，包含允许使用的`console` 对象的方法

Examples of additional **correct** code for this rule with a sample `{ "allow": ["warn", "error"] }` option:

选项 `{ "allow": ["warn", "error"] }` 的 **正确** 代码示例：

```js
/*eslint no-console: ["error", { allow: ["warn", "error"] }] */

console.warn("Log a warn level message.");
console.error("Log an error level message.");
```

## When Not To Use It

If you're using Node.js, however, `console` is used to output information to the user and so is not strictly used for debugging purposes. If you are developing for Node.js then you most likely do not want this rule enabled.

如果你在使用 Node.js，然后，`console` 主要用来向用户输出信息，所以不是严格用于调试目的。如果你正在做 Node.js 开发，那么你很可能不想启用此规则。

## Related Rules

* [no-alert](no-alert)
* [no-debugger](no-debugger)

## Version

This rule was introduced in ESLint 0.0.2.

该规则在 ESLint 0.0.2 中被引入。

## Resources

* [Rule source](https://github.com/eslint/eslint/tree/master/lib/rules/no-console.js)
* [Documentation source](https://github.com/eslint/eslint/tree/master/docs/rules/no-console.md)
