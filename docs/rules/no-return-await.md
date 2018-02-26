---
title: no-return-await - Rules
layout: doc
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# Disallows unnecessary `return await` (no-return-await)

# 禁用不必要的 `return await` (no-return-await)

Inside an `async function`, `return await` is useless. Since the return value of an `async function` is always wrapped in `Promise.resolve`, `return await` doesn't actually do anything except add extra time before the overarching Promise resolves or rejects. This pattern is almost certainly due to programmer ignorance of the return semantics of `async function`s.

在 `async function`， `return await` 是没有用的 。因为 `async function` 的返回值总是包裹在 `Promise.resolve`，在 Promise resolve 或 reject 之前，`return await` 实际上不会做任何事情。这种模式几乎可以肯定是由于程序员不知道 `async function` 语法的返回值造成的。

## Rule Details

This rule aims to prevent a likely common performance hazard due to a lack of understanding of the semantics of `async function`.

该规则旨在防止由于缺乏对 `async function` 语法的理解而造成的常见的性能风险。

Examples of **incorrect** code for this rule:

**错误** 代码示例：

```js
async function foo() {
  return await bar();
}
```

Examples of **correct** code for this rule:

**正确的** 代码示例：

```js
async function foo() {
  return bar();
}

async function foo() {
  await bar();
  return;
}

async function foo() {
  const x = await bar();
  return x;
}

async function foo() {
  try {
    return await bar();
  } catch (error) {}
}
```

In the last example the `await` is necessary to be able to catch errors thrown from `bar()`.

在最后一个例子中，`await` 是必须的，可以捕获从 `bar()` 抛出的错误。

## When Not To Use It

If you want to use `await` to denote a value that is a thenable, even when it is not necessary; or if you do not want the performance benefit of avoiding `return await`, you can turn off this rule.

如果你使用 `await` 来表示一个 thenable 的值，即使是非必要的；或，如果你不想要因避免 `return await` 而带来的性能好处，你可以关闭此规则。

## Further Reading

[`async function` on MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function)

## Version

This rule was introduced in ESLint 3.10.0.

该规则在 ESLint 3.10.0 中被引入。

## Resources

* [Rule source](https://github.com/eslint/eslint/tree/master/lib/rules/no-return-await.js)
* [Documentation source](https://github.com/eslint/eslint/tree/master/docs/rules/no-return-await.md)
