---
title: require-atomic-updates - Rules
layout: doc
edit_link: https://github.com/eslint/eslint/edit/master/docs/rules/require-atomic-updates.md
rule_type: problem
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# Disallow assignments that can lead to race conditions due to usage of `await` or `yield` (require-atomic-updates)
# 禁止由于 `await` 或 `yield`的使用而可能导致出现竞态条件的赋值。(require-atomic-updates)

When writing asynchronous code, it is possible to create subtle race condition bugs. Consider the following example:

在编写异步代码时，可能会产生细微的竞争条件错误。考虑下面的例子：

```js
let totalLength = 0;

async function addLengthOfSinglePage(pageNum) {
  totalLength += await getPageLength(pageNum);
}

Promise.all([addLengthOfSinglePage(1), addLengthOfSinglePage(2)]).then(() => {
  console.log('The combined length of both pages is', totalLength);
});
```

This code looks like it will sum the results of calling `getPageLength(1)` and `getPageLength(2)`, but in reality the final value of `totalLength` will only be the length of one of the two pages. The bug is in the statement `totalLength += await getPageLength(pageNum);`. This statement first reads an initial value of `totalLength`, then calls `getPageLength(pageNum)` and waits for that Promise to fulfill. Finally, it sets the value of `totalLength` to the sum of `await getPageLength(pageNum)` and the *initial* value of `totalLength`. If the `totalLength` variable is updated in a separate function call during the time that the `getPageLength(pageNum)` Promise is pending, that update will be lost because the new value is overwritten without being read.

这段代码看起来将对调用 `getPageLength(1)` 和 `getPageLength(2)` 的结果进行求和，但实际上，`totalLength`的最终值仅为两个页面中的一个页面的长度。错误在语句 `totalLength += await getPageLength(pageNum);` 中。该语句首先读取 `totalLength` 的初始值，然后调用 `getPageLength(pageNum)` ，并等待该 Promise 完成。最后，它将 `totalLength` 的值设置为 `waiting getPageLength(pageNum)` 和 `totalLength` 的 *初始* 值的和。如果在 `getPageLength(pageNum)` Promise 处于 pending 状态期间，在单独的函数调用中更新了 `totalLength` 变量，那么更新将会丢失，因为新值被覆盖而不被读取。

One way to fix this issue would be to ensure that `totalLength` is read at the same time as it's updated, like this:

解决这个问题的一种方法是确保 `totalLength` 在更新的同时被读取，如下所示:

```js
async function addLengthOfSinglePage(pageNum) {
  const lengthOfThisPage = await getPageLength(pageNum);

  totalLength += lengthOfThisPage;
}
```

Another solution would be to avoid using a mutable variable reference at all:

另一个解决方案是完全避免使用可变变量引用：

```js
Promise.all([getPageLength(1), getPageLength(2)]).then(pageLengths => {
  const totalLength = pageLengths.reduce((accumulator, length) => accumulator + length, 0);

  console.log('The combined length of both pages is', totalLength);
});
```

## Rule Details

This rule aims to report assignments to variables or properties where all of the following are true:

这条规则的目的是报告满足下列所有条件的给变量或属性赋值的情况：

* A variable or property is reassigned to a new value which is based on its old value.
* 变量或属性根据其旧值重新分配到新值。
* A `yield` or `await` expression interrupts the assignment after the old value is read, and before the new value is set.
* `yield` 或 `await` 表达式在读取旧值和设置新值之前中断赋值。
* The rule cannot easily verify that the assignment is safe (e.g. if an assigned variable is local and would not be readable from anywhere else while the function is paused).
* 规则不能很容易地验证赋值是否安全（例如，如果赋值的变量是本地的，并且在函数暂停时不能从其他任何地方读取）。

Examples of **incorrect** code for this rule:

**错误** 代码示例：

```js
/* eslint require-atomic-updates: error */

let result;
async function foo() {
  result += await somethingElse;

  result = result + await somethingElse;

  result = result + doSomething(await somethingElse);
}

function* bar() {
  result += yield;

  result = result + (yield somethingElse);

  result = result + doSomething(yield somethingElse);
}
```

Examples of **correct** code for this rule:

**正确** 代码示例：

```js
/* eslint require-atomic-updates: error */

let result;
async function foo() {
  result = await somethingElse + result;

  let tmp = await somethingElse;
  result += tmp;

  let localVariable = 0;
  localVariable += await somethingElse;
}

function* bar() {
  result += yield;

  result = (yield somethingElse) + result;

  result = doSomething(yield somethingElse, result);
}
```

## When Not To Use It

If you don't use async or generator functions, you don't need to enable this rule.

如果你不使用异步或生成器函数，则不需要启用此规则。

## Version

This rule was introduced in ESLint 5.3.0.

该规则在 ESLint 5.3.0 中被引入。

## Resources

* [Rule source](https://github.com/eslint/eslint/tree/master/lib/rules/require-atomic-updates.js)
* [Documentation source](https://github.com/eslint/eslint/tree/master/docs/rules/require-atomic-updates.md)
