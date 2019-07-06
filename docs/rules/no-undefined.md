---
title: no-undefined - Rules
layout: doc
edit_link: https://github.com/eslint/eslint/edit/master/docs/rules/no-undefined.md
rule_type: suggestion
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# Disallow Use of `undefined` Variable (no-undefined)

# 不允许使用`undefined`变量 (no-undefined)

The `undefined` variable in JavaScript is actually a property of the global object. As such, in ECMAScript 3 it was possible to overwrite the value of `undefined`. While ECMAScript 5 disallows overwriting `undefined`, it's still possible to shadow `undefined`, such as:

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

Because `undefined` can be overwritten or shadowed, reading `undefined` can give an unexpected value. (This is not the case for `null`, which is a keyword that always produces the same value.) To guard against this, you can avoid all uses of `undefined`, which is what some style guides recommend and what this rule enforces. Those style guides then also recommend:

由于 `undefined` 会被覆盖和遮蔽，所以读取 `undefined` 会给你一个意想不到的值。（这种情况还不同于 `null`， `null` 会始终产生同一个值。）为了防止这种情况凡是，你可以避免对 `undefined` 的所有使用，这也是一项风格指南所推荐的，也是该规则强制的。那些风格指南也推荐：

* Variables that should be `undefined` are simply left uninitialized. (All uninitialized variables automatically get the value of `undefined` in JavaScript.)
* 要使变量值为 `undefined`，不初始化即可。 (在 JavaScript 中，所有未经初始化的变量会自动地获得值为 `undefined`)
* Checking if a value is `undefined` should be done with `typeof`.
* 应该使用 `typeof` 检测一个值是否是 `undefined`。
* Using the `void` operator to generate the value of `undefined` if necessary.
* 如果有必要，使用 `void` 操作符生成 `undefined`。

As an alternative, you can use the [no-global-assign](no-global-assign) and [no-shadow-restricted-names](no-shadow-restricted-names) rules to prevent `undefined` from being shadowed or assigned a different value. This ensures that `undefined` will always hold its original, expected value.

作为另外一种宣泄，你可以使用 [no-global-assign](no-global-assign) 和 [no-shadow-restricted-names](no-shadow-restricted-names) 规则来阻止遮蔽 `undefined` 或被赋值为一个不同的值。这会保证 `undefined` 将总是保持它的原始的和所期望的值。

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
* [Understanding JavaScript’s ‘undefined’ \| JavaScript, JavaScript...](https://javascriptweblog.wordpress.com/2010/08/16/understanding-undefined-and-preventing-referenceerrors/)
* [ECMA262 edition 5.1 &sect;15.1.1.3: undefined](https://es5.github.io/#x15.1.1.3)

## Related Rules

* [no-undef-init](no-undef-init)
* [no-void](no-void)
* [no-shadow-restricted-names](no-shadow-restricted-names)
* [no-global-assign](no-global-assign)

## Version

This rule was introduced in ESLint 0.7.1.

该规则在 ESLint 0.7.1 中被引入。

## Resources

* [Rule source](https://github.com/eslint/eslint/tree/master/lib/rules/no-undefined.js)
* [Documentation source](https://github.com/eslint/eslint/tree/master/docs/rules/no-undefined.md)
