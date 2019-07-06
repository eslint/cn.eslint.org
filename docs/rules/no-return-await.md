---
title: no-return-await - Rules
layout: doc
edit_link: https://github.com/eslint/eslint/edit/master/docs/rules/no-return-await.md
rule_type: suggestion
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# Disallows unnecessary `return await` (no-return-await)

# 禁用不必要的 `return await` (no-return-await)

Inside an `async function`, `return await` is seldom useful. Since the return value of an `async function` is always wrapped in `Promise.resolve`, `return await` doesn’t actually do anything except add extra time before the overarching Promise resolves or rejects. The only valid exception is if `return await` is used in a try/catch statement to catch errors from another Promise-based function.

在 `async function`， `return await` 很少有用。因为 `async function` 的返回值总是封装在 `Promise.resolve`，`return await` 实际上并没有做任何事情，只是在 Promise resolve 或 reject 之前增加了额外的时间。唯一有效是，如果 try/catch 语句中使用 `return await` 来捕获另一个基于 Promise 的函数的错误，则会出现异常。


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
