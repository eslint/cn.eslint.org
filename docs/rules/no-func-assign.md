---
title: no-func-assign - Rules
layout: doc
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# disallow reassigning `function` declarations (no-func-assign)

# 禁止对 `function` 声明重新赋值 (no-func-assign)

(recommended) The `"extends": "eslint:recommended"` property in a configuration file enables this rule.

(recommended) 配置文件中的 `"extends": "eslint:recommended"` 属性启用了此规则。

JavaScript functions can be written as a FunctionDeclaration `function foo() { ... }` or as a FunctionExpression `var foo = function() { ... };`. While a JavaScript interpreter might tolerate it, overwriting/reassigning a function written as a FunctionDeclaration is often indicative of a mistake or issue.

JavaScript 函数有两种形式：函数声明 `function foo() { ... }` 或者函数表达式 `var foo = function() { ... }` 。虽然 JavaScript 解释器可以容忍对函数声明进行覆盖或重新赋值，但通常这是个错误或会导致问题出现。

```js
function foo() {}
foo = bar;
```

## Rule Details

This rule disallows reassigning `function` declarations.

该规则禁止对 `function` 声明重新赋值。

Examples of **incorrect** code for this rule:

**错误** 代码示例：

```js
/*eslint no-func-assign: "error"*/

function foo() {}
foo = bar;

function foo() {
    foo = bar;
}
```

Examples of **incorrect** code for this rule, unlike the corresponding rule in JSHint:

与 JSHint 中对应的规则不同，该规则的 **错误** 代码示例：

```js
/*eslint no-func-assign: "error"*/

foo = bar;
function foo() {}
```

Examples of **correct** code for this rule:

**正确** 代码示例：

```js
/*eslint no-func-assign: "error"*/

var foo = function () {}
foo = bar;

function foo(foo) { // `foo` is shadowed.
    foo = bar;
}

function foo() {
    var foo = bar;  // `foo` is shadowed.
}
```

## Version

This rule was introduced in ESLint 0.0.9.

该规则在 ESLint 0.0.9 中被引入。

## Resources

* [Rule source](https://github.com/eslint/eslint/tree/master/lib/rules/no-func-assign.js)
* [Documentation source](https://github.com/eslint/eslint/tree/master/docs/rules/no-func-assign.md)
