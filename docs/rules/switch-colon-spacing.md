---
title: switch-colon-spacing - Rules
layout: doc
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# Enforce spacing around colons of switch statements (switch-colon-spacing)

# 强制在 switch 的冒号左右有空格 (switch-colon-spacing)

(fixable) The `--fix` option on the [command line](../user-guide/command-line-interface#fix) can automatically fix some of the problems reported by this rule.

(fixable) [命令行](../user-guide/command-line-interface#fix)中的 `--fix` 选项可以自动修复一些该规则报告的问题。

Spacing around colons improves readability of `case`/`default` clauses.

冒号左右的空格可以提高 `case` 和 `default` 子句的可读性。

## Rule Details

This rule controls spacing around colons of `case` and `default` clauses in `switch` statements.
This rule does the check only if the consecutive tokens exist on the same line.

该规则控制在 `switch` 语句中的 `case` 和 `default` 子句的冒号左右的空格。该规则只检查在同一行上的连续的 token。

This rule has 2 options that are boolean value.

该规则有两个选项，值为布尔类型。

```json
{
    "switch-colon-spacing": ["error", {"after": true, "before": false}]
}
```

- `"after": true` (Default) requires one or more spaces after colons.
- `"after": true` (默认) 要求冒号之后又一个或多个空格。
- `"after": false` disallows spaces after colons.
- `"after": false` 禁止冒号之后又空格。
- `"before": true` requires one or more spaces before colons.
- `"before": true` 要求冒号之前又一个或多个空格。
- `"before": false` (Default) disallows before colons.
- `"before": false` (默认) 禁止冒号之前又空格。


Examples of **incorrect** code for this rule:

**错误** 代码示例：

```js
/*eslint switch-colon-spacing: "error"*/

switch (a) {
    case 0 :break;
    default :foo();
}
```

Examples of **correct** code for this rule:

**正确** 代码示例：

```js
/*eslint switch-colon-spacing: "error"*/

switch (a) {
    case 0: foo(); break;
    case 1:
        bar();
        break;
    default:
        baz();
        break;
}
```

Examples of **incorrect** code for this rule with `{"after": false, "before": true}` option:

选项 `{"after": false, "before": true}` 的 **错误** 代码示例：

```js
/*eslint switch-colon-spacing: ["error", {"after": false, "before": true}]*/

switch (a) {
    case 0: break;
    default: foo();
}
```

Examples of **correct** code for this rule with `{"after": false, "before": true}` option:

选项 `{"after": false, "before": true}` 的 **正确** 代码示例：

```js
/*eslint switch-colon-spacing: ["error", {"after": false, "before": true}]*/

switch (a) {
    case 0 :foo(); break;
    case 1 :
        bar();
        break;
    default :
        baz();
        break;
}
```

## When Not To Use It

If you don't want to notify spacing around colons of switch statements, then it's safe to disable this rule.

如果你不想被通知 switch 语句的冒号左右的空格，可以禁用此规则。

## Version

This rule was introduced in ESLint 4.0.0-beta.0.

该规则在 ESLint 4.0.0-beta.0 中被引入。

## Resources

* [Rule source](https://github.com/eslint/eslint/tree/master/lib/rules/switch-colon-spacing.js)
* [Documentation source](https://github.com/eslint/eslint/tree/master/docs/rules/switch-colon-spacing.md)
