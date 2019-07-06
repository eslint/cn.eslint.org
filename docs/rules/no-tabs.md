---
title: no-tabs - Rules
layout: doc
edit_link: https://github.com/eslint/eslint/edit/master/docs/rules/no-tabs.md
rule_type: layout
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# disallow all tabs (no-tabs)

# 禁用 tab (no-tabs)

Some style guides don't allow the use of tab characters at all, including within comments.

一些风格指南不允许使用 tab 字符，包括在注释内。

## Rule Details

This rule looks for tabs anywhere inside a file: code, comments or anything else.

该规则查找文件中任何位置的 tab：代码，注释或其他。

Examples of **incorrect** code for this rule:

**错误** 代码示例：

```js
var a \t= 2;

/**
* \t\t it's a test function
*/
function test(){}

var x = 1; // \t test
```

Examples of **correct** code for this rule:

**正确** 代码示例：

```js
var a = 2;

/**
* it's a test function
*/
function test(){}

var x = 1; // test
```

### Options

This rule has an optional object option with the following properties:

该规则有一个可选的对象选项，具有以下属性:

* `allowIndentationTabs` (default: false): If this is set to true, then the rule will not report tabs used for indentation.
* `allowIndentationTabs` (默认: false)：如果将此设置为 true，则规则将不报告用于缩进的 tab。

#### allowIndentationTabs

Examples of **correct** code for this rule with the `allowIndentationTabs: true` option:

选项 `allowIndentationTabs: true` 的 **正确** 代码示例：

```js
/* eslint no-tabs: ["error", { allowIndentationTabs: true }] */

function test() {
\tdoSomething();
}

\t// comment with leading indentation tab
```

## When Not To Use It

If you have established a standard where having tabs is fine, then you can disable this rule.

如果你已经建立了好的使用 tab 的标准，可以不启用此规则。

## Compatibility

* **JSCS**: [disallowTabs](https://jscs-dev.github.io/rule/disallowTabs)

## Version

This rule was introduced in ESLint 3.2.0.

该规则在 ESLint 3.2.0 中被引入。

## Resources

* [Rule source](https://github.com/eslint/eslint/tree/master/lib/rules/no-tabs.js)
* [Documentation source](https://github.com/eslint/eslint/tree/master/docs/rules/no-tabs.md)
