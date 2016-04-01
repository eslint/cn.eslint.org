---
title: Rule jsx-quotes
layout: doc
translator: molee1905
proofreader: molee1905
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# Enforce JSX Quote Style (jsx-quotes)

# 强制JSX引号风格 (jsx-quotes)

JSX attribute values can contain string literals, which are delimited with single or double quotes.

JSX 的属性可以包含由单引号或双引号分隔的字符串。

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

**Fixable:** This rule is automatically fixable using the `--fix` flag on the command line.

**Fixable:** 该规则可以通过`--fix`命令行进行自动修复。

## Rule Details

This rule takes one argument.

该规则只有一个参数。

If it is `"prefer-double"` then the rule enforces the usage of double quotes for all JSX attribute values which doesn’t contain a double quote.
If `"prefer-single"` is configured then the rule enforces the usage of single quotes for all JSX attribute values which doesn’t contain a single quote.

如果是`"prefer-double"`，该规则强制在JSX属性中使用双引号，其中不能再包含双引号。
如果设置为 `"prefer-single"`，该规则强制在JSX属性中使用单引号，其中不能再包含单引号。

The default is `"prefer-double"`.

默认为`"prefer-double"`。

The following patterns are considered problems when set to `"prefer-double"`:

当设置为`"prefer-double"`，以下模式被认为是有问题的：

```xml
/*eslint jsx-quotes: [2, "prefer-double"]*/

<a b='c' />
```

The following patterns are not considered problems when set to `"prefer-double"`:

当设置为`"prefer-double"`，以下模式被认为是没有问题的：

```xml
/*eslint jsx-quotes: [2, "prefer-double"]*/

<a b="c" />
<a b='"' />
```

The following patterns are considered problems when set to `"prefer-single"`:

当设置为`"prefer-single"`，以下模式被认为是有问题的：

```xml
/*eslint jsx-quotes: [2, "prefer-single"]*/

<a b="c" />
```

The following patterns are not considered problems when set to `"prefer-single"`:

当设置为`"prefer-single"`，以下模式被认为是没有问题的：

```xml
/*eslint jsx-quotes: [2, "prefer-single"]*/

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
