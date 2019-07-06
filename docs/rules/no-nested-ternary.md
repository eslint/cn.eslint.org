---
title: no-nested-ternary - Rules
layout: doc
edit_link: https://github.com/eslint/eslint/edit/master/docs/rules/no-nested-ternary.md
rule_type: suggestion
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# disallow nested ternary expressions (no-nested-ternary)

# 禁止使用嵌套的三元表达式 (no-nested-ternary)

Nesting ternary expressions can make code more difficult to understand.

嵌套的三元表达式使代码更加难以理解。

```js
var foo = bar ? baz : qux === quxx ? bing : bam;
```

## Rule Details

The `no-nested-ternary` rule disallows nested ternary expressions.

该规则禁止使用嵌套的三元表达式。

Examples of **incorrect** code for this rule:

**错误** 代码示例：

```js
/*eslint no-nested-ternary: "error"*/

var thing = foo ? bar : baz === qux ? quxx : foobar;

foo ? baz === qux ? quxx() : foobar() : bar();
```

Examples of **correct** code for this rule:

**正确** 代码示例：

```js
/*eslint no-nested-ternary: "error"*/

var thing = foo ? bar : foobar;

var thing;

if (foo) {
  thing = bar;
} else if (baz === qux) {
  thing = quxx;
} else {
  thing = foobar;
}
```

## Related Rules

* [no-ternary](no-ternary)
* [no-unneeded-ternary](no-unneeded-ternary)

## Version

This rule was introduced in ESLint 0.2.0.

该规则在 ESLint 0.2.0 中被引入。

## Resources

* [Rule source](https://github.com/eslint/eslint/tree/master/lib/rules/no-nested-ternary.js)
* [Documentation source](https://github.com/eslint/eslint/tree/master/docs/rules/no-nested-ternary.md)
