---
title: require-await - Rules
layout: doc
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# Disallow async functions which have no `await` expression (require-await)

# 禁止使用不带 `await` 表达式的 async 函数 (require-await)

Async functions which have no `await` expression may be the unintentional result of refactoring.

Async 函数不包含 `await` 函数可能不是重构想要的结果。

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

If you don't want to notify async functions which have no `await` expression, then it's safe to disable this rule.

如果你不想收到 async 函数不包含 `await` 表达式的通知，可以禁用此规则。

## Related Rules

* [require-yield](require-yield)

## Version

This rule was introduced in ESLint 3.11.0.

该规则在 ESLint 3.11.0 中被引入。

## Resources

* [Rule source](https://github.com/eslint/eslint/tree/master/lib/rules/require-await.js)
* [Documentation source](https://github.com/eslint/eslint/tree/master/docs/rules/require-await.md)
