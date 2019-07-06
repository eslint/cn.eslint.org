---
title: no-lone-blocks - Rules
layout: doc
edit_link: https://github.com/eslint/eslint/edit/master/docs/rules/no-lone-blocks.md
rule_type: suggestion
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# Disallow Unnecessary Nested Blocks (no-lone-blocks)

# 禁用不必要的嵌套块 (no-lone-blocks)

In JavaScript, prior to ES6, standalone code blocks delimited by curly braces do not create a new scope and have no use. For example, these curly braces do nothing to `foo`:

在 JavaScript 中，ES6 之前，由花括号分隔开的独立代码块不会创建新的作用域，也就不起什么作用。例如，这些花括号对 `foo` 不起任何作用：

```js
{
    var foo = bar();
}
```

In ES6, code blocks may create a new scope if a block-level binding (`let` and `const`), a class declaration or a function declaration (in strict mode) are present. A block is not considered redundant in these cases.

在 ES6 中，如果出现一个块级绑定 (`let` 和 `const`)，类声明或函数声明（在严格模式下），代码块就会创建一个新的作用域。在这些情况下，代码块不会被认为是多余的。

## Rule Details

This rule aims to eliminate unnecessary and potentially confusing blocks at the top level of a script or within other blocks.

该规则旨在消除脚本顶部或其它块中不必要的和潜在的令人困惑的代码块。

Examples of **incorrect** code for this rule:

**错误** 代码示例：

```js
/*eslint no-lone-blocks: "error"*/

{}

if (foo) {
    bar();
    {
        baz();
    }
}

function bar() {
    {
        baz();
    }
}

{
    function foo() {}
}

{
    aLabel: {
    }
}
```

Examples of **correct** code for this rule with ES6 environment:

ES6 环境下 **正确** 代码示例：

```js
/*eslint no-lone-blocks: "error"*/
/*eslint-env es6*/

while (foo) {
    bar();
}

if (foo) {
    if (bar) {
        baz();
    }
}

function bar() {
    baz();
}

{
    let x = 1;
}

{
    const y = 1;
}

{
    class Foo {}
}

aLabel: {
}
```

Examples of **correct** code for this rule with ES6 environment and strict mode via `"parserOptions": { "sourceType": "module" }` in the ESLint configuration or `"use strict"` directive in the code:

在 ES6 环境和严格模式下，设置 `ecmaFeatures: { blockBindings: true }` 或在代码中使用 `"use strict"` 指令的 **正确** 代码示例：

```js
/*eslint no-lone-blocks: "error"*/
/*eslint-env es6*/

"use strict";

{
    function foo() {}
}
```

## Version

This rule was introduced in ESLint 0.4.0.

该规则在 ESLint 0.4.0 中被引入。

## Resources

* [Rule source](https://github.com/eslint/eslint/tree/master/lib/rules/no-lone-blocks.js)
* [Documentation source](https://github.com/eslint/eslint/tree/master/docs/rules/no-lone-blocks.md)
