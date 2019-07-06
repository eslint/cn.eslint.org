---
title: no-with - Rules
layout: doc
edit_link: https://github.com/eslint/eslint/edit/master/docs/rules/no-with.md
rule_type: suggestion
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# disallow `with` statements (no-with)

# 禁用 `with` 语句 (no-with)

(recommended) The `"extends": "eslint:recommended"` property in a configuration file enables this rule.

(recommended) 配置文件中的 `"extends": "eslint:recommended"` 属性启用了此规则。

The `with` statement is potentially problematic because it adds members of an object to the current scope, making it impossible to tell what a variable inside the block actually refers to.

`with` 是潜在的问题，因为它会在当前的域中增加对象成员，使得区分实际块中的变量指的是什么变的不可能。

## Rule Details

This rule disallows `with` statements.

此规则目的在于排除 `with` 语句。

If ESLint parses code in strict mode, the parser (instead of this rule) reports the error.

如果 ESLint 在严格模式下解析代码，解析器（不是该规则）将报告这样的错误。

Examples of **incorrect** code for this rule:

**错误** 代码示例：

```js
/*eslint no-with: "error"*/

with (point) {
    r = Math.sqrt(x * x + y * y); // is r a member of point?
}
```

Examples of **correct** code for this rule:

**正确** 代码示例：

```js
/*eslint no-with: "error"*/
/*eslint-env es6*/

const r = ({x, y}) => Math.sqrt(x * x + y * y);
```

## When Not To Use It

If you intentionally use `with` statements then you can disable this rule.

如果你有意要使用 `with` 语句，可以禁用此规则。

## Further Reading

* [with Statement Considered Harmful](https://yuiblog.com/blog/2006/04/11/with-statement-considered-harmful/)

## Version

This rule was introduced in ESLint 0.0.2.

该规则在 ESLint 0.0.2 中被引入。

## Resources

* [Rule source](https://github.com/eslint/eslint/tree/master/lib/rules/no-with.js)
* [Documentation source](https://github.com/eslint/eslint/tree/master/docs/rules/no-with.md)
