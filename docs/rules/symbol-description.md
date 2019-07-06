---
title: symbol-description - Rules
layout: doc
edit_link: https://github.com/eslint/eslint/edit/master/docs/rules/symbol-description.md
rule_type: suggestion
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# require symbol description (symbol-description)

# 要求 symbol 描述 (symbol-description)

The `Symbol` function may have optional description:

`Symbol` 可以有可选的描述：

```js
var foo = Symbol("some description");

var someString = "some description";
var bar = Symbol(someString);
```


Using `description` promotes easier debugging: when a symbol is logged the description is used:

使用 `描述` 更容易促进调试：当生成一个 symbol 实例时，使用描述。

```js
var foo = Symbol("some description");

> console.log(foo);
// Symbol(some description)
```

It may facilitate identifying symbols when one is observed during debugging.

以便在调试过程中观察时区分不同的 symbol 。

## Rule Details

This rules requires a description when creating symbols.

该规则要求创建 symbol 时带有描述。

## Examples

Examples of **incorrect** code for this rule:

**错误** 代码示例：

```js
/*eslint symbol-description: "error"*/
/*eslint-env es6*/

var foo = Symbol();
```

Examples of **correct** code for this rule:

**正确** 代码示例：


```js
/*eslint symbol-description: "error"*/
/*eslint-env es6*/

var foo = Symbol("some description");

var someString = "some description";
var bar = Symbol(someString);
```


## When Not To Use It

This rule should not be used in ES3/5 environments.

该规则不应该在 ES3/5 环境中使用。

In addition, this rule can be safely turned off if you don't want to enforce presence of `description` when creating Symbols.

另外，如果你不想在创建 Symbol 时强制出现`描述`，可以安全地关闭该规则。

## Further Reading

* [Symbol Objects specification: Symbol description](https://www.ecma-international.org/ecma-262/6.0/#sec-symbol-description)

## Version

This rule was introduced in ESLint 3.4.0.

该规则是在 ESLint 3.4.0 中被引入。

## Resources

* [Rule source](https://github.com/eslint/eslint/tree/master/lib/rules/symbol-description.js)
* [Documentation source](https://github.com/eslint/eslint/tree/master/docs/rules/symbol-description.md)
