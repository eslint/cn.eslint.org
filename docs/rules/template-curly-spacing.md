---
title: template-curly-spacing - Rules
layout: doc
edit_link: https://github.com/eslint/eslint/edit/master/docs/rules/template-curly-spacing.md
rule_type: layout
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# Enforce Usage of Spacing in Template Strings (template-curly-spacing)

# 强制模板字符串中空格的使用 (template-curly-spacing)

(fixable) The `--fix` option on the [command line](../user-guide/command-line-interface#fixing-problems) can automatically fix some of the problems reported by this rule.

(fixable) [命令行](../user-guide/command-line-interface#fixing-problems)中的 `--fix` 选项可以自动修复一些该规则报告的问题。

We can embed expressions in template strings with using a pair of `${` and `}`.

我们可以在模板字符串中使用 `${` 和 `}` 嵌入表达式。

This rule can force usage of spacing _within_ the curly brace pair according to style guides.

该规则可以根据风格指南强制花括号内空格的使用。

```js
let hello = `hello, ${people.name}!`;
```

## Rule Details

This rule aims to maintain consistency around the spacing inside of template literals.

该规则只在维护模板字面量中空格的一致性。

## Options

```json
{
    "template-curly-spacing": ["error", "never"]
}
```

This rule has one option which has either `"never"` or `"always"` as value.

该规则有一个选项：

* `"never"` (by default) - Disallows spaces inside of the curly brace pair.
* `"never"` (默认) - 禁止花括号内出现空格。
* `"always"` - Requires one or more spaces inside of the curly brace pair.
* `"always"` - 要求花括号内有一个或多个空格。

## Examples

### never

Examples of **incorrect** code for this rule with the default `"never"` option:

默认选项 `"never"` 的 **错误** 代码示例：

```js
/*eslint template-curly-spacing: "error"*/

`hello, ${ people.name}!`;
`hello, ${people.name }!`;

`hello, ${ people.name }!`;
```

Examples of **correct** code for this rule with the default `"never"` option:

默认选项 `"never"` 的 **正确** 代码示例：

```js
/*eslint template-curly-spacing: "error"*/

`hello, ${people.name}!`;

`hello, ${
    people.name
}!`;
```

### always

Examples of **incorrect** code for this rule with the `"always"` option:

选项 `"always"` 的 **错误** 代码示例：

```js
/*eslint template-curly-spacing: ["error", "always"]*/

`hello, ${ people.name}!`;
`hello, ${people.name }!`;

`hello, ${people.name}!`;
```

Examples of **correct** code for this rule with the `"always"` option:

选项 `"always"` 的 **正确** 代码示例：

```js
/*eslint template-curly-spacing: ["error", "always"]*/

`hello, ${ people.name }!`;

`hello, ${
    people.name
}!`;
```

## When Not To Use It

If you don't want to be notified about usage of spacing inside of template strings, then it's safe to disable this rule.

如果你不想收到关于模板字符串中空格的使用情况的通知，可以禁用此规则。

## Version

This rule was introduced in ESLint 2.0.0-rc.0.

该规则在 ESLint 2.0.0-rc.0 中被引入。

## Resources

* [Rule source](https://github.com/eslint/eslint/tree/master/lib/rules/template-curly-spacing.js)
* [Documentation source](https://github.com/eslint/eslint/tree/master/docs/rules/template-curly-spacing.md)
