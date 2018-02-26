---
title: template-tag-spacing - Rules
layout: doc
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# Require or disallow spacing between template tags and their literals (template-tag-spacing)

# 要求或禁止在模板标记和它们的字面量之间有空格 (template-tag-spacing)

(fixable) The `--fix` option on the [command line](../user-guide/command-line-interface#fix) can automatically fix some of the problems reported by this rule.

(fixable) [命令行](../user-guide/command-line-interface#fix)中的 `--fix` 选项可以自动修复一些该规则报告的问题。

With ES6, it's possible to create functions called [tagged template literals](#further-reading) where the function parameters consist of a template literal's strings and expressions.

使用 ES6，可以在函数参数中包含模板字面量字符串和表达式的地方使用[标记的模板字面量](#further-reading)创建函数。

When using tagged template literals, it's possible to insert whitespace between the tag function and the template literal. Since this whitespace is optional, the following lines are equivalent:

当使用标记的模板字面量，可以在标记的函数和模板字面量之间插入空格。由于这个空格是可选的，下面几行是等价的：


```js
let hello = func`Hello world`;
let hello = func `Hello world`;
```

## Rule Details

This rule aims to maintain consistency around the spacing between template tag functions and their template literals.

该规则旨在维持模板标记函数和它们的模板字面量直接的空格的一致性。

## Options

```json
{
    "template-tag-spacing": ["error", "never"]
}
```

This rule has one option whose value can be set to `"never"` or `"always"`

该规则有一个选项，可以设置为 `"never"` 或 `"always"`

* `"never"` (default) - Disallows spaces between a tag function and its template literal.
* `"never"` (默认) - 禁止在一个标记的函数和它的模板字面量之间有空格。
* `"always"` - Requires one or more spaces between a tag function and its template literal.
* `"always"` - 要求一个标记的函数和它的模板字面量之间有一个或多个空格。

## Examples

### never

Examples of **incorrect** code for this rule with the default `"never"` option:

默认选项 `"never"` 的 **错误** 代码示例：

```js
/*eslint template-tag-spacing: "error"*/

func `Hello world`;
```

Examples of **correct** code for this rule with the default `"never"` option:

默认选项 `"never"` 的 **正确** 代码示例：

```js
/*eslint template-tag-spacing: "error"*/

func`Hello world`;
```

### always

Examples of **incorrect** code for this rule with the `"always"` option:

选项 `"always"` 的 **错误** 代码示例：

```js
/*eslint template-tag-spacing: ["error", "always"]*/

func`Hello world`;
```

Examples of **correct** code for this rule with the `"always"` option:

选项 `"always"` 的 **正确** 代码示例：

```js
/*eslint template-tag-spacing: ["error", "always"]*/

func `Hello world`;
```

## When Not To Use It

If you don't want to be notified about usage of spacing between tag functions and their template literals, then it's safe to disable this rule.

如果不想被通知在标记函数和它们的模板字面量之间有空格，就禁用此规则。

## Further Reading

If you want to learn more about tagged template literals, check out the links below:

如果你想了解更多标记的模板字面量，请参阅下面的链接：

* [Template literals (MDN)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#Tagged_template_literals)
* [Examples of using tagged template literals (Exploring ES6)](http://exploringjs.com/es6/ch_template-literals.html#_examples-of-using-tagged-template-literals)

## Version

This rule was introduced in ESLint 3.15.0.

该规则在 ESLint 3.15.0 中被引入。

## Resources

* [Rule source](https://github.com/eslint/eslint/tree/master/lib/rules/template-tag-spacing.js)
* [Documentation source](https://github.com/eslint/eslint/tree/master/docs/rules/template-tag-spacing.md)
