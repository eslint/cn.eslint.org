---
title: no-undefined - Rules
layout: doc
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# Disallow Use of `undefined` Variable (no-undefined)

# 不允许使用`undefined`变量 (no-undefined)

The `undefined` variable is unique in JavaScript because it is actually a property of the global object. As such, in ECMAScript 3 it was possible to overwrite the value of `undefined`. While ECMAScript 5 disallows overwriting `undefined`, it's still possible to shadow `undefined`, such as:

`undefined` 变量在 JavaScript 中是独一无二的，因为它实际上是一个全局对象属性。在 ECMAScript 3 中，可重写 `undefined` 的值，然而 ECMAScript 5 不允许重写 `undefined` ，但仍然可能遮盖原来的 `undefined`，例如：

```js
function doSomething(data) {
    var undefined = "hi";

    // doesn't do what you think it does
    if (data === undefined) {
        // ...
    }

}
```

This represents a problem for `undefined` that doesn't exist for `null`, which is a keyword and primitive value that can neither be overwritten nor shadowed.

这表明 `undefined` 存在一个问题，这个问题在 `null` 中不存在，`null` 是一个关键字，也是一个原始属性值，既不能被重写也不可被覆盖。

All uninitialized variables automatically get the value of `undefined`:

所有未初始化的变量自动获得 `undefined` 为值。

```js
var foo;

console.log(foo === undefined);     // true (assuming no shadowing)
```

For this reason, it's not necessary to explicitly initialize a variable to `undefined`.

这是此因，我们没有必要初始化一个变量为 `undefined`。

Taking all of this into account, some style guides forbid the use of `undefined`, recommending instead:

综合所有，一些编码风格指南禁止使用 `undefined` 为值，建议改为：

* Variables that should be `undefined` are simply left uninitialized.
* 要使变量值为 `undefined`，不初始化即可。
* Checking if a value is `undefined` should be done with `typeof`.
* 应该使用 `typeof` 检测一个值是否是 `undefined`。
* Using the `void` operator to generate the value of `undefined` if necessary.
* 如果有必要，使用 `void` 操作符生成 `undefined`。

## Rule Details

This rule aims to eliminate the use of `undefined`, and as such, generates a warning whenever it is used.

此规则的目的在于消除使用 `undefined`，使用 `undefined` 会产生一个警告。

Examples of **incorrect** code for this rule:

**错误** 代码示例：

```js
/*eslint no-undefined: "error"*/

var foo = undefined;

var undefined = "foo";

if (foo === undefined) {
    // ...
}

function foo(undefined) {
    // ...
}
```

Examples of **correct** code for this rule:

**正确** 代码示例：

```js
/*eslint no-undefined: "error"*/

var foo = void 0;

var Undefined = "foo";

if (typeof foo === "undefined") {
    // ...
}

global.undefined = "foo";
```

## When Not To Use It

If you want to allow the use of `undefined` in your code, then you can safely turn this rule off.

如果想在代码中使用 `undefined`，应关闭此规则。

## Further Reading

* [undefined - JavaScript \| MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined)
* [Understanding JavaScript’s ‘undefined’ \| JavaScript, JavaScript...](http://javascriptweblog.wordpress.com/2010/08/16/understanding-undefined-and-preventing-referenceerrors/)
* [ECMA262 edition 5.1 &sect;15.1.1.3: undefined](https://es5.github.io/#x15.1.1.3)

## Related Rules

* [no-undef-init](no-undef-init)
* [no-void](no-void)

## Version

This rule was introduced in ESLint 0.7.1.

该规则在 ESLint 0.7.1 中被引入。

## Resources

* [Rule source](https://github.com/eslint/eslint/tree/master/lib/rules/no-undefined.js)
* [Documentation source](https://github.com/eslint/eslint/tree/master/docs/rules/no-undefined.md)
