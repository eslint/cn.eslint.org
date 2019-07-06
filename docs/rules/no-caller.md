---
title: no-caller - Rules
layout: doc
edit_link: https://github.com/eslint/eslint/edit/master/docs/rules/no-caller.md
rule_type: suggestion
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# Disallow Use of caller/callee (no-caller)

# 禁用 caller 或 callee (no-caller)

The use of `arguments.caller` and `arguments.callee` make several code optimizations impossible. They have been deprecated in future versions of JavaScript and their use is forbidden in ECMAScript 5 while in strict mode.

`arguments.caller` 和 `arguments.callee` 的使用使一些代码优化变得不可能。在 JavaScript 的新版本中它们已被弃用，同时在 ECMAScript 5 的严格模式下，它们也是被禁用的。

```js
function foo() {
    var callee = arguments.callee;
}
```

## Rule Details

This rule is aimed at discouraging the use of deprecated and sub-optimal code, but disallowing the use of `arguments.caller` and `arguments.callee`. As such, it will warn when `arguments.caller` and `arguments.callee` are used.

此规则目的在于阻止使用已弃用的代码和次优的代码，而且禁止使用 `arguments.caller` 和 `arguments.callee`。因此，当 `arguments.caller` 和 `arguments.callee` 被使用时，该规则将会发出警告。

Examples of **incorrect** code for this rule:

**错误** 代码示例：

```js
/*eslint no-caller: "error"*/

function foo(n) {
    if (n <= 0) {
        return;
    }

    arguments.callee(n - 1);
}

[1,2,3,4,5].map(function(n) {
    return !(n > 1) ? 1 : arguments.callee(n - 1) * n;
});
```

Examples of **correct** code for this rule:

**正确** 代码示例：

```js
/*eslint no-caller: "error"*/

function foo(n) {
    if (n <= 0) {
        return;
    }

    foo(n - 1);
}

[1,2,3,4,5].map(function factorial(n) {
    return !(n > 1) ? 1 : factorial(n - 1) * n;
});
```

## Version

This rule was introduced in ESLint 0.0.6.

该规则在 ESLint 0.0.6 中被引入。

## Resources

* [Rule source](https://github.com/eslint/eslint/tree/master/lib/rules/no-caller.js)
* [Documentation source](https://github.com/eslint/eslint/tree/master/docs/rules/no-caller.md)
