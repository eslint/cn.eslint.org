---
title: func-call-spacing - Rules
layout: doc
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# require or disallow spacing between function identifiers and their invocations (func-call-spacing)

# 要求或禁止在函数标识符和其调用之间有空格 (func-call-spacing)

(fixable) The `--fix` option on the [command line](../user-guide/command-line-interface#fix) can automatically fix some of the problems reported by this rule.

(fixable) [命令行](../user-guide/command-line-interface#fix)中的 `--fix` 选项可以自动修复一些该规则报告的问题。

When calling a function, developers may insert optional whitespace between the function's name and the parentheses that invoke it. The following pairs of function calls are equivalent:

当调用一个函数时，开发者可以在函数名和调用它的括号之间插入空格。以下函数调用效果是一样的：

```js
alert('Hello');
alert ('Hello');

console.log(42);
console.log (42);

new Date();
new Date ();
```

## Rule Details

This rule requires or disallows spaces between the function name and the opening parenthesis that calls it.

该规则要求或禁止在函数名和开括号之间有空格。

## options

This rule has a string option:

该规则有一个字符串选项：

- `"never"` (default) disallows space between the function name and the opening parenthesis.
- `"never"` (默认) 禁止在函数名和开括号之间有空格
- `"always"` requires space between the function name and the opening parenthesis.
- `"always"` 要求在函数名和开括号之间有空格

Further, in `"always"` mode, a second object option is available that contains a single boolean `allowNewlines` property.

未来，在 `"always"` 模式中，可以有第二个选项，是个对象，包含一个布尔类型的 `allowNewlines` 属性。

### never

Examples of **incorrect** code for this rule with the default `"never"` option:

默认选项 `"never"` 的 **错误** 代码示例：

```js
/*eslint func-call-spacing: ["error", "never"]*/

fn ();

fn
();
```

Examples of **correct** code for this rule with the default `"never"` option:

默认选项 `"never"` 的 **正确** 代码示例：

```js
/*eslint func-call-spacing: ["error", "never"]*/

fn();
```

### always

Examples of **incorrect** code for this rule with the `"always"` option:

选项 `"always"` 的 **错误** 代码示例：

```js
/*eslint func-call-spacing: ["error", "always"]*/

fn();

fn
();
```

Examples of **correct** code for this rule with the `"always"` option:

选项 `"always"` 的 **正确** 代码示例：

```js
/*eslint func-call-spacing: ["error", "always"]*/

fn ();
```

#### allowNewlines

By default, `"always"` does not allow newlines. To permit newlines when in `"always"` mode, set the `allowNewlines` option to `true`. Newlines are never required.

默认情况下，`"always"` 不允许换行。在 `"always"` 模式中，设置 `allowNewlines` 选项为 `true` 来允许换行。换行从来就不是必须的。

Examples of **incorrect** code for this rule with `allowNewlines` option enabled:

选项 `{ "allowNewlines": true }` 的 **错误** 代码示例：

```js
/*eslint func-call-spacing: ["error", "always", { "allowNewlines": true }]*/

fn();
```

Examples of **correct** code for this rule with the `allowNewlines` option enabled:

选项 `{ "allowNewlines": true }` 的 **正确** 代码示例：

```js
/*eslint func-call-spacing: ["error", "always", { "allowNewlines": true }]*/

fn (); // Newlines are never required.

fn
();
```

## When Not To Use It

This rule can safely be turned off if your project does not care about enforcing a consistent style for spacing within function calls.

如果你的项目并不关心在函数调用中强制使用一致的空格风格，你可以关闭此规则。

## Related Rules

- [no-spaced-func](no-spaced-func) (deprecated)

## Compatibility

- **JSCS**: [disallowSpacesInCallExpression](http://jscs.info/rule/disallowSpacesInCallExpression)
- **JSCS**: [requireSpacesInCallExpression](http://jscs.info/rule/requireSpacesInCallExpression)

## Version

This rule was introduced in ESLint 3.3.0.

该规则在 ESLint 3.3.0 中被引入。

## Resources

* [Rule source](https://github.com/eslint/eslint/tree/master/lib/rules/func-call-spacing.js)
* [Documentation source](https://github.com/eslint/eslint/tree/master/docs/rules/func-call-spacing.md)
