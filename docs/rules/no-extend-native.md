---
title: no-extend-native - Rules
layout: doc
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# Disallow Extending of Native Objects (no-extend-native)

# 禁止扩展原生对象 (no-extend-native)

In JavaScript, you can extend any object, including builtin or "native" objects. Sometimes people change the behavior of these native objects in ways that break the assumptions made about them in other parts of the code.

在 JavaScript 中，你可以扩展任何对象，包括内置或者”原生”对象。有时人们改变这些原生对象的行为，会影响到代码中的其它部分。

For example here we are overriding a builtin method that will then affect all Objects, even other builtins.

例如我们重写了一个内建的方法，将会影响到所有对象，甚至是其它内建对象。

```js
// seems harmless
Object.prototype.extra = 55;

// loop through some userIds
var users = {
    "123": "Stan",
    "456": "David"
};

// not what you'd expect
for (var id in users) {
    console.log(id); // "123", "456", "extra"
}
```

A common suggestion to avoid this problem would be to wrap the inside of the `for` loop with `users.hasOwnProperty(id)`. However, if this rule is strictly enforced throughout your codebase you won't need to take that step.

建议在 `for` 循环里使用 `users.hasOwnProperty(id)`来避免此问题出现。然而，如果你的代码库强制执行此规则，你会需要这么做。

## Rule Details

Disallows directly modifying the prototype of builtin objects.

禁止直接修改内建对象的属性。

Examples of **incorrect** code for this rule:

**错误** 代码示例：

```js
/*eslint no-extend-native: "error"*/

Object.prototype.a = "a";
Object.defineProperty(Array.prototype, "times", { value: 999 });
```

## Options

This rule accepts an `exceptions` option, which can be used to specify a list of builtins for which extensions will be allowed.

此规则接受一个 `exceptions` 选项，可以用来指定允许扩展的内建列表。

### exceptions

Examples of **correct** code for the sample `{ "exceptions": ["Object"] }` option:

选项 `{ "exceptions": ["Object"] }` 的 **正确** 代码示例：

```js
/*eslint no-extend-native: ["error", { "exceptions": ["Object"] }]*/

Object.prototype.a = "a";
```

## Known Limitations

This rule *does not* report any of the following less obvious approaches to modify the prototype of builtin objects:

该规则不会报告对内建对象不太明显的修改情况：

```js
var x = Object;
x.prototype.thing = a;

eval("Array.prototype.forEach = 'muhahaha'");

with(Array) {
    prototype.thing = 'thing';
};

window.Function.prototype.bind = 'tight';
```

## When Not To Use It

You may want to disable this rule when working with polyfills that try to patch older versions of JavaScript with the latest spec, such as those that might `Function.prototype.bind` or `Array.prototype.forEach` in a future-friendly way.

当你要兼容旧版 JavaScript 时，比如使用在未来会得到友好支持的 `Function.prototype.bind` 或 `Array.prototype.forEach`，你可以禁用此规则。

## Related Rules

* [no-global-assign](no-global-assign)

## Version

This rule was introduced in ESLint 0.1.4.

该规则在 ESLint 0.1.4 中被引入。

## Resources

* [Rule source](https://github.com/eslint/eslint/tree/master/lib/rules/no-extend-native.js)
* [Documentation source](https://github.com/eslint/eslint/tree/master/docs/rules/no-extend-native.md)
