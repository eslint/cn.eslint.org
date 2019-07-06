---
title: no-async-promise-executor - Rules
layout: doc
edit_link: https://github.com/eslint/eslint/edit/master/docs/rules/no-async-promise-executor.md
rule_type: problem
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# disallow using an async function as a Promise executor (no-async-promise-executor)

# 禁止使用异步函数作为 Promise executor (no-async-promise-executor)

The `new Promise` constructor accepts an *executor* function as an argument, which has `resolve` and `reject` parameters that can be used to control the state of the created Promise. For example:

`new Promise` 构造函数接收一个 *executor* 函数作为参数，该函数具有 `resolve` 和 `reject` 两个参数，可用于控制创建的 Promise 的状态。例如:

```js
const result = new Promise(function executor(resolve, reject) {
  readFile('foo.txt', function(err, result) {
    if (err) {
      reject(err);
    } else {
      resolve(result);
    }
  });
});
```

The executor function can also be an `async function`. However, this is usually a mistake, for a few reasons:

executor 函数也可以是 `async function`。然而，这通常是一个错误，原因如下:

* If an async executor function throws an error, the error will be lost and won't cause the newly-constructed `Promise` to reject. This could make it difficult to debug and handle some errors.
* 如果异步 executor 函数抛出一个错误，这个错误将会丢失，并且不会导致新构造的 `Promise` 被拒绝。这可能使会调试和处理一些错误变得困难。
* If a Promise executor function is using `await`, this is usually a sign that it is not actually necessary to use the `new Promise` constructor, or the scope of the `new Promise` constructor can be reduced.
* 如果一个 Promise executor 函数使用了 `await`，这通常表示实际上没有必要使用 `new Promise` 构造函数，或者可以减少 `new Promise` 构造函数的范围。

## Rule Details

This rule aims to disallow async Promise executor functions.

此规则旨在禁止使用异步的 Promise executor 函数。

Examples of **incorrect** code for this rule:

**错误** 代码示例：

```js
const foo = new Promise(async (resolve, reject) => {
  readFile('foo.txt', function(err, result) {
    if (err) {
      reject(err);
    } else {
      resolve(result);
    }
  });
});

const result = new Promise(async (resolve, reject) => {
  resolve(await foo);
});
```

Examples of **correct** code for this rule:

**正确** 代码示例：

```js
const foo = new Promise((resolve, reject) => {
  readFile('foo.txt', function(err, result) {
    if (err) {
      reject(err);
    } else {
      resolve(result);
    }
  });
});

const result = Promise.resolve(foo);
```

## When Not To Use It

If your codebase doesn't support async function syntax, there's no need to enable this rule.

如果你的代码库不支持异步函数语法，则不需要启用此规则。

## Version

This rule was introduced in ESLint 5.3.0.

该规则在 ESLint 5.3.0 中被引入。

## Resources

* [Rule source](https://github.com/eslint/eslint/tree/master/lib/rules/no-async-promise-executor.js)
* [Documentation source](https://github.com/eslint/eslint/tree/master/docs/rules/no-async-promise-executor.md)
