---
title: no-global-assign - Rules
layout: doc
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# Disallow assignment to native objects or read-only global variables (no-global-assign)

# 禁止对原生对象或只读的全局对象进行赋值 (no-global-assign)

(recommended) The `"extends": "eslint:recommended"` property in a configuration file enables this rule.

(recommended) 配置文件中的 `"extends": "eslint:recommended"` 属性启用了此规则。

JavaScript environments contain a number of built-in global variables, such as `window` in browsers and `process` in Node.js. In almost all cases, you don't want to assign a value to these global variables as doing so could result in losing access to important functionality. For example, you probably don't want to do this in browser code:

JavaScript 环境包含很多内置的全局变量，比如浏览器环境的 `window` 和 Node.js 中的 `process`。在几乎所有情况下，你都不希望给全局变量赋值，因为这样做可能会到导致无法访问到重要的功能。例如，你可能不想在浏览器代码中这样做：

```js
window = {};
```

While examples such as `window` are obvious, there are often hundreds of built-in global objects provided by JavaScript environments. It can be hard to know if you're assigning to a global variable or not.

虽然像 `window` 这样的例子很明显，但是 JavaScript 环境还提供了数百个内置全局对象。很难知道你是否对一个去全局变量进行了赋值。

## Rule Details

This rule disallows modifications to read-only global variables.

该规则禁止修改只读的全局变量。

ESLint has the capability to configure global variables as read-only.

ESLint 可以配置全局变量为只读。

* [Specifying Environments](../user-guide/configuring#specifying-environments)
* [Specifying Environments](../user-guide/configuring#specifying-environments)
* [Specifying Globals](../user-guide/configuring#specifying-globals)
* [Specifying Globals](../user-guide/configuring#specifying-globals)

Examples of **incorrect** code for this rule:

**错误** 代码示例：

```js
/*eslint no-global-assign: "error"*/

Object = null
undefined = 1
```

```js
/*eslint no-global-assign: "error"*/
/*eslint-env browser*/

window = {}
length = 1
top = 1
```

```js
/*eslint no-global-assign: "error"*/
/*globals a:false*/

a = 1
```

Examples of **correct** code for this rule:

**正确** 示例：

```js
/*eslint no-global-assign: "error"*/

a = 1
var b = 1
b = 2
```

```js
/*eslint no-global-assign: "error"*/
/*eslint-env browser*/

onload = function() {}
```

```js
/*eslint no-global-assign: "error"*/
/*globals a:true*/

a = 1
```

## Options

This rule accepts an `exceptions` option, which can be used to specify a list of builtins for which reassignments will be allowed:

该规则接受一个 `exceptions` 选项，可以用来指定允许进行赋值的内置对象列表：

```json
{
    "rules": {
        "no-global-assign": ["error", {"exceptions": ["Object"]}]
    }
}
```

## When Not To Use It

If you are trying to override one of the native objects.

如果你打算覆盖一个原生对象，你可以不使用此规则。

## Related Rules

* [no-extend-native](no-extend-native)
* [no-redeclare](no-redeclare)
* [no-shadow](no-shadow)

## Version

This rule was introduced in ESLint 3.3.0.

该规则在 ESLint 3.3.0 中被引入。

## Resources

* [Rule source](https://github.com/eslint/eslint/tree/master/lib/rules/no-global-assign.js)
* [Documentation source](https://github.com/eslint/eslint/tree/master/docs/rules/no-global-assign.md)
