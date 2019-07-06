---
title: no-prototype-builtins - Rules
layout: doc
edit_link: https://github.com/eslint/eslint/edit/master/docs/rules/no-prototype-builtins.md
rule_type: problem
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# Disallow use of Object.prototypes builtins directly (no-prototype-builtins)

# 禁止直接使用 Object.prototypes 的内置属性 (no-prototype-builtins)

(recommended) The `"extends": "eslint:recommended"` property in a configuration file enables this rule.

(recommended) 配置文件中的 `"extends": "eslint:recommended"` 属性启用了此规则。

In ECMAScript 5.1, `Object.create` was added, which enables the creation of objects with a specified `[[Prototype]]`. `Object.create(null)` is a common pattern used to create objects that will be used as a Map. This can lead to errors when it is assumed that objects will have properties from `Object.prototype`. This rule prevents calling some `Object.prototype` methods directly from an object.

在ECMAScript 5.1中，新增了 `Object.create`，它支持使用指定的 `[[Prototype]]` 创建对象。`Object.create(null)` 是一种常见的模式，用于创建将用作映射的对象。当假定对象将包含来自`Object.prototype` 的属性时，这可能会导致错误。该规则防止直接从一个对象调用某些 `Object.prototype` 的方法。


Additionally, objects can have properties that shadow the builtins on `Object.prototype`, potentially causing unintended behavior or denial-of-service security vulnerabilities. For example, it would be unsafe for a webserver to parse JSON input from a client and call `hasOwnProperty` directly on the resulting object, because a malicious client could send a JSON value like `{"hasOwnProperty": 1}` and cause the server to crash.

此外，对象可以具有属性，这些属性可以将 `Object.prototype` 的内建函数隐藏，可能导致意外行为或拒绝服务安全漏洞。例如，web 服务器解析来自客户机的 JSON 输入并直接在结果对象上调用 `hasOwnProperty` 是不安全的，因为恶意客户机可能发送一个JSON值，如 `{"hasOwnProperty": 1}`，并导致服务器崩溃。

To avoid subtle bugs like this, it's better to always call these methods from `Object.prototype`. For example, `foo.hasOwnProperty("bar")` should be replaced with `Object.prototype.hasOwnProperty.call(foo, "bar")`.

为了避免这种细微的 bug，最好总是从 `Object.prototype` 调用这些方法。例如，`foo.hasOwnProperty("bar")` 应该替换为 `Object.prototype.hasOwnProperty.call(foo, "bar")`。


## Rule Details

This rule disallows calling some `Object.prototype` methods directly on object instances.

该规则禁止直接在对象实例上调用 `Object.prototype` 的一些方法。

Examples of **incorrect** code for this rule:

**错误** 代码示例：

```js
/*eslint no-prototype-builtins: "error"*/

var hasBarProperty = foo.hasOwnProperty("bar");

var isPrototypeOfBar = foo.isPrototypeOf(bar);

var barIsEnumerable = foo.propertyIsEnumerable("bar");
```

Examples of **correct** code for this rule:

**正确** 代码示例：

```js
/*eslint no-prototype-builtins: "error"*/

var hasBarProperty = Object.prototype.hasOwnProperty.call(foo, "bar");

var isPrototypeOfBar = Object.prototype.isPrototypeOf.call(foo, bar);

var barIsEnumerable = {}.propertyIsEnumerable.call(foo, "bar");
```

## When Not To Use It

You may want to turn this rule off if you will never use an object that shadows an `Object.prototype` method or which does not inherit from `Object.prototype`.

You may want to turn this rule off if your code only touches objects with hardcoded keys, and you will never use an object that shadows an `Object.prototype` method or which does not inherit from `Object.prototype`.

如果你的代码只接触带有硬编码键的对象，并且你永远不会使用遮蔽 `Object.prototype` 的方法或者不是继承自 `Object.prototype` 的方法，那么你可能想要关闭此规则。

## Version

This rule was introduced in ESLint 2.11.0.

该规则在 ESLint 2.11.0 中被引入。

## Resources

* [Rule source](https://github.com/eslint/eslint/tree/master/lib/rules/no-prototype-builtins.js)
* [Documentation source](https://github.com/eslint/eslint/tree/master/docs/rules/no-prototype-builtins.md)
