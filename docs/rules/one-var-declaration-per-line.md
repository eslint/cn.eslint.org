---
title: one-var-declaration-per-line
layout: doc
edit_link: https://github.com/eslint/eslint/edit/main/docs/src/rules/one-var-declaration-per-line.md
rule_type: suggestion
related_rules:
- one-var
---



(fixable) The `--fix` option on the [command line](../user-guide/command-line-interface#fixing-problems) can automatically fix some of the problems reported by this rule.

Requires or disallows newlines around variable declarations.

Some developers declare multiple var statements on the same line:

```js
var foo, bar, baz;
```

Others prefer to declare one var per line.

```js
var foo,
    bar,
    baz;
```

Keeping to one of these styles across a project's codebase can help with maintaining code consistency.

## Rule Details

This rule enforces a consistent newlines around variable declarations. This rule ignores variable declarations inside `for` loop conditionals.

## Options

This rule has a single string option:

* `"initializations"` (default) enforces a newline around variable initializations
* `"always"` enforces a newline around variable declarations

### initializations

Examples of **incorrect** code for this rule with the default `"initializations"` option:

```js
/*eslint one-var-declaration-per-line: ["error", "initializations"]*/
/*eslint-env es6*/

var a, b, c = 0;

let a,
    b = 0, c;
```

Examples of **correct** code for this rule with the default `"initializations"` option:

```js
/*eslint one-var-declaration-per-line: ["error", "initializations"]*/
/*eslint-env es6*/

var a, b;

let a,
    b;

let a,
    b = 0;
```

### always

Examples of **incorrect** code for this rule with the `"always"` option:

```js
/*eslint one-var-declaration-per-line: ["error", "always"]*/
/*eslint-env es6*/

var a, b;

let a, b = 0;

const a = 0, b = 0;
```

Examples of **correct** code for this rule with the `"always"` option:

```js
/*eslint one-var-declaration-per-line: ["error", "always"]*/
/*eslint-env es6*/

var a,
    b;

let a,
    b = 0;
```

## Version

This rule was introduced in ESLint 2.0.0-beta.3.

## Resources

* [Rule source](https://github.com/eslint/eslint/tree/HEAD/lib/rules/one-var-declaration-per-line.js)
* [Test source](https://github.com/eslint/eslint/tree/HEAD/tests/lib/rules/one-var-declaration-per-line.js)
* [Documentation source](https://github.com/eslint/eslint/tree/HEAD/docs/src/rules/one-var-declaration-per-line.md)
