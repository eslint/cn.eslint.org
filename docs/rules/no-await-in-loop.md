---
title: no-await-in-loop - Rules
layout: doc
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# Disallow `await` inside of loops (no-await-in-loop)

# 禁止在循环中 出现 `await` (no-await-in-loop)

Performing an operation on each element of an iterable is a common task. However, performing an
`await` as part of each operation is an indication that the program is not taking full advantage of
the parallelization benefits of `async`/`await`.

在迭代器的每个元素上执行运算是个常见的任务。然而，每次运算都执行 `await`，意味着该程序并没有充分利用 `async`/`await` 并行的好处。

Usually, the code should be refactored to create all the promises at once, then get access to the
results using `Promise.all()`. Otherwise, each successive operation will not start until the
previous one has completed.

通常，代码应该重构为立即创建所有 promise，然后通过 `Promise.all()` 访问结果。否则，每个后续的操作将不会执行，直到前一个操作执行完毕。

Concretely, the following function should be refactored as shown:

具体来说，以下函数需要重构为：

```js
async function foo(things) {
  const results = [];
  for (const thing of things) {
    // Bad: each loop iteration is delayed until the entire asynchronous operation completes
    results.push(await bar(thing));
  }
  return baz(results);
}
```

```js
async function foo(things) {
  const results = [];
  for (const thing of things) {
    // Good: all asynchronous operations are immediately started.
    results.push(bar(thing));
  }
  // Now that all the asynchronous operations are running, here we wait until they all complete.
  return baz(await Promise.all(results));
}
```

## Rule Details

This rule disallows the use of `await` within loop bodies.

该规则禁止在循环体中使用 `await`。

## Examples

Examples of **correct** code for this rule:

**正确** 代码示例：

```js
async function foo(things) {
  const results = [];
  for (const thing of things) {
    // Good: all asynchronous operations are immediately started.
    results.push(bar(thing));
  }
  // Now that all the asynchronous operations are running, here we wait until they all complete.
  return baz(await Promise.all(results));
}
```

Examples of **incorrect** code for this rule:

**错误** 代码示例：

```js
async function foo(things) {
  const results = [];
  for (const thing of things) {
    // Bad: each loop iteration is delayed until the entire asynchronous operation completes
    results.push(await bar(thing));
  }
  return baz(results);
}
```

## When Not To Use It

In many cases the iterations of a loop are not actually independent of each other. For example, the
output of one iteration might be used as the input to another. Or, loops may be used to retry
asynchronous operations that were unsuccessful. In such cases it makes sense to use `await` within a
loop and it is recommended to disable the rule via a standard ESLint disable comment.

在许多情况下，一个循环的迭代实际上并不是相互独立的。例如，一次迭代的输出可能是另一次迭代的输入。或者，循环可以重试不成功的异步操作。在这种情况下，在循环中使用 `await` 是有意义的，并建议使用标准的 ESLint 禁用注释禁用规则。

## Version

This rule was introduced in ESLint 3.12.0.

该规则在 ESLint 3.12.0 中被引入。

## Resources

* [Rule source](https://github.com/eslint/eslint/tree/master/lib/rules/no-await-in-loop.js)
* [Documentation source](https://github.com/eslint/eslint/tree/master/docs/rules/no-await-in-loop.md)
