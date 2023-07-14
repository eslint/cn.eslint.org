---
title: no-new-symbol
layout: doc
edit_link: https://github.com/eslint/eslint/edit/main/docs/src/rules/no-new-symbol.md
rule_type: problem
further_reading:
- https://www.ecma-international.org/ecma-262/6.0/#sec-symbol-objects
---



(recommended) The `"extends": "eslint:recommended"` property in a configuration file enables this rule.

Disallows `new` operators with the `Symbol` object.

`Symbol` is not intended to be used with the `new` operator, but to be called as a function.

```js
var foo = new Symbol("foo");
```

This throws a `TypeError` exception.

## Rule Details

This rule is aimed at preventing the accidental calling of `Symbol` with the `new` operator.

## Examples

Examples of **incorrect** code for this rule:

```js
/*eslint no-new-symbol: "error"*/
/*eslint-env es6*/

var foo = new Symbol('foo');
```

Examples of **correct** code for this rule:

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

## Version

This rule was introduced in ESLint 2.0.0-beta.1.

## Resources

* [Rule source](https://github.com/eslint/eslint/tree/HEAD/lib/rules/no-new-symbol.js)
* [Test source](https://github.com/eslint/eslint/tree/HEAD/tests/lib/rules/no-new-symbol.js)
* [Documentation source](https://github.com/eslint/eslint/tree/HEAD/docs/src/rules/no-new-symbol.md)
