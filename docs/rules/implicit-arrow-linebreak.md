---
title: implicit-arrow-linebreak - Rules
layout: doc
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# Enforce the location of arrow function bodies with implicit returns (implicit-arrow-linebreak)

# 强制隐式返回的箭头函数体的位置 (implicit-arrow-linebreak)

(fixable) The `--fix` option on the [command line](../user-guide/command-line-interface#fix) can automatically fix some of the problems reported by this rule.

(fixable) [命令行](../user-guide/command-line-interface#fix)中的 `--fix` 选项可以自动修复一些该规则报告的问题。

An arrow function body can contain an implicit return as an expression instead of a block body. It can be useful to enforce a consistent location for the implicitly returned expression.

一个箭头函数体可以包含隐式的返回表达式而不是一个块。对于隐式返回的表达式强制执行一致的位置是很有用的。

## Rule Details

This rule aims to enforce a consistent location for an arrow function containing an implicit return.

该规则旨在为包含隐式返回表达式的箭头函数强制执行一致的位置。

See Also:

查看：

- [`brace-style`](https://eslint.org/docs/rules/brace-style) which enforces this behavior for arrow functions with block bodies.
- [`brace-style`](https://eslint.org/docs/rules/brace-style) 规则

### Options

This rule accepts a string option:

该规则接收一个字符串选项：

- `"beside"` (default) disallows a newline before an arrow function body.
- `"beside"` (默认) 禁止在箭头函数体之前出现换行。
- `"below"` requires a newline before an arrow function body.
- `"below"` 要求在箭头函数体之前出现换行。

Examples of **incorrect** code for this rule with the default `"beside"` option:

默认选项 `"beside"` 的 **错误** 代码示例：

```js
/* eslint implicit-arrow-linebreak: ["error", "beside"] */

(foo) =>
  bar;

(foo) =>
  (bar);

(foo) =>
  bar =>
    baz;

(foo) =>
(
  bar()
);
```

Examples of **correct** code for this rule with the default `"beside"` option:

默认选项 `"beside"` 的 **正确** 代码示例：

```js
/* eslint implicit-arrow-linebreak: ["error", "beside"] */

(foo) => bar;

(foo) => (bar);

(foo) => bar => baz;

(foo) => (
  bar()
);

// functions with block bodies allowed with this rule using any style
// to enforce a consistent location for this case, see the rule: `brace-style`
(foo) => {
  return bar();
}

(foo) =>
{
  return bar();
}
```

Examples of **incorrect** code for this rule with the `"below"` option:

选项 `"below"` 的 **错误** 代码示例：
```js
/* eslint implicit-arrow-linebreak: ["error", "below"] */

(foo) => bar;

(foo) => (bar);

(foo) => bar => baz;
```

Examples of **correct** code for this rule with the `"below"` option:

选项 `"below"` 的 **正确** 代码示例：

```js
/* eslint implicit-arrow-linebreak: ["error", "below"] */


(foo) =>
  bar;

(foo) =>
  (bar);

(foo) =>
  bar =>
    baz;
```

## When Not To Use It

If you're not concerned about consistent locations of implicitly returned arrow function expressions, you should not turn on this rule.

如果你不关心箭头函数中的隐式返回表达式的一致的位置，可以不启用此规则。

You can also disable this rule if you are using the `"always"` option for the [`arrow-body-style`](https://eslint.org/docs/rules/arrow-body-style), since this will disable the use of implicit returns in arrow functions.

如果你在 [`arrow-body-style`](https://eslint.org/docs/rules/arrow-body-style) 规则中使用了 `"always"` 选项，该选项禁止在箭头函数中使用隐式返回，你也可以不启用此规则。

## Version

This rule was introduced in ESLint 4.12.0.

该规则在 ESLint 4.12.0 中被引入。

## Resources

* [Rule source](https://github.com/eslint/eslint/tree/master/lib/rules/implicit-arrow-linebreak.js)
* [Documentation source](https://github.com/eslint/eslint/tree/master/docs/rules/implicit-arrow-linebreak.md)
