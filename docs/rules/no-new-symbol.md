---
title: no-new-symbol - Rules
layout: doc
edit_link: https://github.com/eslint/eslint/edit/master/docs/rules/no-new-symbol.md
rule_type: problem
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# Disallow Symbol Constructor (no-new-symbol)

# 禁止 `Symbolnew` 操作符和 `new` 一起使用 (no-new-symbol)

(recommended) The `"extends": "eslint:recommended"` property in a configuration file enables this rule.

(recommended) 配置文件中的 `"extends": "eslint:recommended"` 属性启用了此规则。

`Symbol` is not intended to be used with the `new` operator, but to be called as a function.

`Symbol` 不和 `new` 操作符一起使用，而是作为函数调用。

```js
var foo = new Symbol("foo");
```

This throws a `TypeError` exception.

这会抛出 `TypeError` 异常。

## Rule Details

This rule is aimed at preventing the accidental calling of `Symbol` with the `new` operator.

该规则旨在阻止使用 `new` 操作符调用 `Symbol`。

## Examples

Examples of **incorrect** code for this rule:

**错误** 代码示例：

```js
/*eslint no-new-symbol: "error"*/
/*eslint-env es6*/

var foo = new Symbol('foo');
```

Examples of **correct** code for this rule:

**正确** 代码示例：

```js
/*eslint no-new-symbol: "error"*/
/*eslint-env es6*/

var foo = Symbol('foo');


// Ignores shadowed Symbol.
function bar(Symbol) {
    const baz = new Symbol("baz");
}

```

## When Not To Use It

This rule should not be used in ES3/5 environments.

该规则不应在 ES3/5 环境中使用。

## Further Reading

* [Symbol Objects specification](https://www.ecma-international.org/ecma-262/6.0/#sec-symbol-objects)

## Version

This rule was introduced in ESLint 2.0.0-beta.1.

该规则在 ESLint 2.0.0-beta.1 中被引入。

## Resources

* [Rule source](https://github.com/eslint/eslint/tree/master/lib/rules/no-new-symbol.js)
* [Documentation source](https://github.com/eslint/eslint/tree/master/docs/rules/no-new-symbol.md)
