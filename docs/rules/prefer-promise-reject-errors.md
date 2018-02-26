---
title: prefer-promise-reject-errors - Rules
layout: doc
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# require using Error objects as Promise rejection reasons (prefer-promise-reject-errors)

# 要求使用 Error 对象作为 Promise 拒绝的原因 (prefer-promise-reject-errors)

It is considered good practice to only pass instances of the built-in `Error` object to the `reject()` function for user-defined errors in Promises. `Error` objects automatically store a stack trace, which can be used to debug an error by determining where it came from. If a Promise is rejected with a non-`Error` value, it can be difficult to determine where the rejection occurred.

在 Promise 中只传递内置的 `Error` 对象实例给 `reject()` 函数作为自定义错误，被认为是个很好的实践。`Error` 对象会自动存储堆栈跟踪，在调试时，通过它可以用来确定错误是从哪里来的。如果 Promise 使用了非 `Error` 的值作为拒绝原因，那么就很难确定 `reject` 在哪里产生。

## Rule Details

This rule aims to ensure that Promises are only rejected with `Error` objects.

该规则旨在确保 Promise 只使用 `Error` 对象拒绝。

## Options

This rule takes one optional object argument:

该规则有一个可选的对象参数：

* `allowEmptyReject: true` (`false` by default) allows calls to `Promise.reject()` with no arguments.
* `allowEmptyReject: true` (默认为 `false`) 允许调用不带参数的 `Promise.reject()`。

Examples of **incorrect** code for this rule:

**错误** 代码示例：

```js
/*eslint prefer-promise-reject-errors: "error"*/

Promise.reject("something bad happened");

Promise.reject(5);

Promise.reject();

new Promise(function(resolve, reject) {
  reject("something bad happened");
});

new Promise(function(resolve, reject) {
  reject();
});

```

Examples of **correct** code for this rule:

**正确** 代码示例：

```js
/*eslint prefer-promise-reject-errors: "error"*/

Promise.reject(new Error("something bad happened"));

Promise.reject(new TypeError("something bad happened"));

new Promise(function(resolve, reject) {
  reject(new Error("something bad happened"));
});

var foo = getUnknownValue();
Promise.reject(foo);
```

Examples of **correct** code for this rule with the `allowEmptyReject: true` option:

选项 `allowEmptyReject: true` 的 **正确** 代码示例：

```js
/*eslint prefer-promise-reject-errors: ["error", {"allowEmptyReject": true}]*/

Promise.reject();

new Promise(function(resolve, reject) {
  reject();
});
```

## Known Limitations

Due to the limits of static analysis, this rule cannot guarantee that you will only reject Promises with `Error` objects. While the rule will report cases where it can guarantee that the rejection reason is clearly not an `Error`, it will not report cases where there is uncertainty about whether a given reason is an `Error`. For more information on this caveat, see the [similar limitations](/docs/rules/no-throw-literal) in the `no-throw-literal` rule.

由于静态分析的限制，该规则不能保证你只使用 `Error` 对象作为 Promise 拒绝的原因。虽然该规则可以报告拒绝的原因明显不是一个 `Error`，但它不能报告那些不确定给定的原因是否是一个 `Error` 对象的情况。更多信息请查看 `no-throw-literal` 规则中的 [similar limitations](/docs/rules/no-throw-literal)

To avoid conflicts between rules, this rule does not report non-error values used in `throw` statements in async functions, even though these lead to Promise rejections. To lint for these cases, use the [`no-throw-literal`](/docs/rules/no-throw-literal) rule.

为了避免规则之间的冲突，该规则不会报告在异步函数的 `throw` 语句中的非 `Error` 值，即使这些值会导致 Promise 拒绝。检测这些情况，请使用 [`no-throw-literal`](/docs/rules/no-throw-literal) 规则。

## When Not To Use It

If you're using custom non-error values as Promise rejection reasons, you can turn off this rule.

如果你使用自定义的非错误值作为 Promise 拒绝的原因，你可以关闭此规则。

## Further Reading

* [`no-throw-literal`](https://eslint.org/docs/rules/no-throw-literal)
* [Warning: a promise was rejected with a non-error](http://bluebirdjs.com/docs/warning-explanations.html#warning-a-promise-was-rejected-with-a-non-error)

## Version

This rule was introduced in ESLint 3.14.0.

该规则在 ESLint 3.14.0 中被引入。

## Resources

* [Rule source](https://github.com/eslint/eslint/tree/master/lib/rules/prefer-promise-reject-errors.js)
* [Documentation source](https://github.com/eslint/eslint/tree/master/docs/rules/prefer-promise-reject-errors.md)
