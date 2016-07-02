---
title: Rule max-params
layout: doc
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# enforce a maximum number of parameters in `function` definitions (max-params)

# 限制最大参数个数(max-params)

Functions that take numerous parameters can be difficult to read and write because it requires the memorization of what each parameter is, its type, and the order they should appear in. As a result, many coders adhere to a convention that caps the number of parameters a function can take.

函数如果有许多参数的话，会难以阅读和书写，因为要记住每个参数是什么，它的类型以及它们出现顺序。因此，许多程序员都约定一个函数中参数个数的上限。

```js
function foo (bar, baz, qux, qxx) { // four parameters, may be too many
    doSomething();
}
```

## Rule Details

This rule enforces a maximum number of parameters allowed in function definitions.

该规则强制函数定义中所允许的最大参数个数。

## Options

This rule has a number or object option:

该规则有一个数字或对象选项：

* `"max"` (default `3`) enforces a maximum number of parameters in function definitions
* `"max"` (默认 `3`) 强制函数定义中最大参数个数

**Deprecated:** The object property `maximum` is deprecated; please use the object property `max` instead.

**已弃用：** `maximum` 属性已弃用；请使用 `max` 属性。

### max

Examples of **incorrect** code for this rule with the default `{ "max": 3 }` option:

默认选 `{ "max": 3 }` 的 **错误** 代码示例：

```js
/*eslint max-params: ["error", 3]*/
/*eslint-env es6*/

function foo (bar, baz, qux, qxx) {
    doSomething();
}

let foo = (bar, baz, qux, qxx) => {
    doSomething();
};
```

Examples of **correct** code for this rule with the default `{ "max": 3 }` option:

默认选项 `{ "max": 3 }` 的 **正确** 代码示例：

```js
/*eslint max-params: ["error", 3]*/
/*eslint-env es6*/

function foo (bar, baz, qux) {
    doSomething();
}

let foo = (bar, baz, qux) => {
    doSomething();
};
```

## Related Rules

* [complexity](complexity)
* [max-depth](max-depth)
* [max-len](max-len)
* [max-nested-callbacks](max-nested-callbacks)
* [max-statements](max-statements)

## Version

This rule was introduced in ESLint 0.0.9.

该规则在 ESLint 0.0.9 中被引入。

## Resources

* [Rule source](https://github.com/eslint/eslint/tree/master/lib/rules/max-params.js)
* [Documentation source](https://github.com/eslint/eslint/tree/master/docs/rules/max-params.md)
