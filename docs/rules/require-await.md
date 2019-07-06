---
title: require-await - Rules
layout: doc
edit_link: https://github.com/eslint/eslint/edit/master/docs/rules/require-await.md
rule_type: suggestion
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# Disallow async functions which have no `await` expression (require-await)

# 禁止使用不带 `await` 表达式的 async 函数 (require-await)

Asynchronous functions in JavaScript behave differently than other functions in two important ways:

JavaScript 中的异步函数与其他函数在两个重要方面表现不同:

1. The return value is always a `Promise`.
1. 返回值总是一个 `Promise`。
2. You can use the `await` operator inside of them.
2. 你可以使用其中的 `await` 操作符。

The primary reason to use asynchronous functions is typically to use the `await` operator, such as this:

使用异步函数的主要原因通常是使用 `await` 操作符，例如:

```js
async function fetchData(processDataItem) {
    const response = await fetch(DATA_URL);
    const data = await response.json();

    return data.map(processDataItem);
}
```

Asynchronous functions that don't use `await` might not need to be asynchronous functions and could be the unintentional result of refactoring.

不使用 `await` 的异步函数可能不需要是异步函数，也可能是重构的意外结果。

## Rule Details

This rule warns async functions which have no `await` expression.

该规则对不包含 `await` 表达式的 async 函数发出警告。

Examples of **incorrect** code for this rule:

**错误** 代码示例：

```js
/*eslint require-await: "error"*/

async function foo() {
    doSomething();
}

bar(async () => {
    doSomething();
});
```

Examples of **correct** code for this rule:

**正确** 代码示例：

```js
/*eslint require-await: "error"*/

async function foo() {
    await doSomething();
}

bar(async () => {
    await doSomething();
});

function foo() {
    doSomething();
}

bar(() => {
    doSomething();
});

// Allow empty functions.
async function noop() {}
```

## When Not To Use It

Asynchronous functions are designed to work with promises such that throwing an error will cause a promise's rejection handler (such as `catch()`) to be called. For example:

异步函数被设计用来处理 Promise ，这样抛出错误将导致调用 Promise 的拒绝处理程序(如 `catch()` )。例如:

```js
async function fail() {
    throw new Error("Failure!");
}

fail().catch(error => {
    console.log(error.message);
});
```

In this case, the `fail()` function throws an error that is intended to be caught by the `catch()` handler assigned later. Converting the `fail()` function into a synchronous function would require the call to `fail()` to be refactored to use a `try-catch` statement instead of a promise.

在本例中，`fail()` 函数抛出一个错误，该错误将被稍后分配的 `catch()` 处理程序捕获。将 `fail()` 函数转换为同步函数需要对 `fail()` 调用进行重构，以使用 `try-catch` 语句而不是 promise。

If you are throwing an error inside of an asynchronous function for this purpose, then you may want to disable this rule.

如果为此目的在异步函数中抛出错误，则可能需要禁用此规则。

## Related Rules

* [require-yield](require-yield)

## Version

This rule was introduced in ESLint 3.11.0.

该规则在 ESLint 3.11.0 中被引入。

## Resources

* [Rule source](https://github.com/eslint/eslint/tree/master/lib/rules/require-await.js)
* [Documentation source](https://github.com/eslint/eslint/tree/master/docs/rules/require-await.md)
