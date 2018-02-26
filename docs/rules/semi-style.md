---
title: semi-style - Rules
layout: doc
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# Enforce location of semicolons (semi-style)

(fixable) The `--fix` option on the [command line](../user-guide/command-line-interface#fix) can automatically fix some of the problems reported by this rule.

(fixable) [命令行](../user-guide/command-line-interface#fix)中的 `--fix` 选项可以自动修复一些该规则报告的问题。

Generally, semicolons are at the end of lines. However, in semicolon-less style, semicolons are at the beginning of lines. This rule enforces that semicolons are at the configured location.

通常，分号出现在行尾。然而，在 semicolon-less 风格中，分号出现行首。该规则强制分号出现在配置的位置。

## Rule Details

This rule reports line terminators around semicolons.

该规则报告分号周围的行终止符。

This rule has an option.

该规则有一个选项。

```json
{
    "semi-style": ["error", "last"],
}
```

- `"last"` (Default) enforces that semicolons are at the end of statements.
- `"last"` (默认) 强制分号出现在句子末尾。
- `"first"` enforces that semicolons are at the beginning of statements. Semicolons of `for` loop heads (`for(a;b;c){}`) should be at the end of lines even if you use this option.
- `"first"` 强制分号出现在句子开头。`for` 循环中的分号 (`for(a;b;c){}`) 即使使用了该选项，也要出现在
行尾。

Examples of **incorrect** code for this rule with `"last"` option:

选项 `"last"` 的 **错误** 代码示例：

```js
/*eslint semi-style: ["error", "last"]*/

foo()
;[1, 2, 3].forEach(bar)

for (
    var i = 0
    ; i < 10
    ; ++i
) {
    foo()
}
```

Examples of **correct** code for this rule with `"last"` option:

选项 `"last"` 的 **正确** 代码示例：

```js
/*eslint semi-style: ["error", "last"]*/

foo();
[1, 2, 3].forEach(bar)

for (
    var i = 0;
    i < 10;
    ++i
) {
    foo()
}
```

Examples of **incorrect** code for this rule with `"first"` option:

选项 `"first"` 的 **错误** 代码示例：

```js
/*eslint semi-style: ["error", "first"]*/

foo();
[1, 2, 3].forEach(bar)

for (
    var i = 0
    ; i < 10
    ; ++i
) {
    foo()
}
```

Examples of **correct** code for this rule with `"first"` option:

选项 `"first"` 的 **正确** 代码示例：

```js
/*eslint semi-style: ["error", "first"]*/

foo()
;[1, 2, 3].forEach(bar)

for (
    var i = 0;
    i < 10;
    ++i
) {
    foo()
}
```

## When Not To Use It

If you don't want to notify the location of semicolons, then it's safe to disable this rule.

如果你不想被通知分号的位置，你可以关闭此规则。

## Related rules

- [no-extra-semi](./no-extra-semi)
- [semi](./semi)
- [semi-spacing](./semi-spacing)

## Version

This rule was introduced in ESLint 4.0.0-beta.0.

该规则在 ESLint 4.0.0-beta.0 中被引入。

## Resources

* [Rule source](https://github.com/eslint/eslint/tree/master/lib/rules/semi-style.js)
* [Documentation source](https://github.com/eslint/eslint/tree/master/docs/rules/semi-style.md)
