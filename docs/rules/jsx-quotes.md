---
title: Rule jsx-quotes
layout: doc
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# enforce the consistent use of either double or single quotes in JSX attributes (jsx-quotes)

# 强制在 JSX 属性中使用一致的单引号或双引号 (jsx-quotes)

(fixable) The `--fix` option on the [command line](../user-guide/command-line-interface#fix) automatically fixes problems reported by this rule.

(fixable) [命令行](../user-guide/command-line-interface#fix)中的 `--fix` 选项可以自动修复该规则报告的问题。

JSX attribute values can contain string literals, which are delimited with single or double quotes.

JSX 的属性可以包含由单引号或双引号分隔的字符串字面量。

```xml
<a b='c' />
<a b="c" />
```

Unlike string literals in JavaScript, string literals within JSX attributes can’t contain escaped quotes.

不同于 Javascript 中的字符串字面量，JSX 属性中字符串字面量不能包含转义的引号

If you want to have e.g. a double quote within a JSX attribute value, you have to use single quotes as string delimiter.

如果你想在 JSX 的属性中使用双引号，你必须使用单引号作为字符串分隔符。

```xml
<a b="'" />
<a b='"' />
```

## Rule Details

This rule enforces the consistent use of either double or single quotes in JSX attributes.

该规则强制在 JSX 属性中使用一致的单引号或双引号。

## Options

This rule has a string option:

该规则有一个字符串选项：

* `"prefer-double"` (default) enforces the use of double quotes for all JSX attribute values that don't contain a double quote.
* `"prefer-double"` (默认) 强制所有不包含双引号的 JSX 属性值使用双引号。
* `"prefer-single"` enforces the use of single quotes for all JSX attribute values that don’t contain a single quote.
* `"prefer-single"` 强制所有不包含单引号的 JSX 属性值使用单引号。

### prefer-double

Examples of **incorrect** code for this rule with the default `"prefer-double"` option:

默认选项 `"prefer-double"` 的 **错误** 代码示例：

```xml
/*eslint jsx-quotes: ["error", "prefer-double"]*/

<a b='c' />
```

Examples of **correct** code for this rule with the default `"prefer-double"` option:

默认选项 `"prefer-double"` 的 **正确** 代码示例：

```xml
/*eslint jsx-quotes: ["error", "prefer-double"]*/

<a b="c" />
<a b='"' />
```

### prefer-single

Examples of **incorrect** code for this rule with the `"prefer-single"` option:

选项 `"prefer-single"` 的 **错误** 代码示例：

```xml
/*eslint jsx-quotes: ["error", "prefer-single"]*/

<a b="c" />
```

Examples of **correct** code for this rule with the `"prefer-single"` option:

选项 `"prefer-single"` 的 **正确** 代码示例：

```xml
/*eslint jsx-quotes: ["error", "prefer-single"]*/

<a b='c' />
<a b="'" />
```

## When Not To Use It

You can turn this rule off if you don’t use JSX or if you aren’t concerned with a consistent usage of quotes within JSX attributes.

如果你不使用 JSX 或者不关心 JSX 属性中引号使用的一致性，关闭此规则即可。

## Related Rules

* [quotes](quotes)

## Version

This rule was introduced in ESLint 1.4.0.

该规则在 ESLint 1.4.0 中被引入。

## Resources

* [Rule source](https://github.com/eslint/eslint/tree/master/lib/rules/jsx-quotes.js)
* [Documentation source](https://github.com/eslint/eslint/tree/master/docs/rules/jsx-quotes.md)
