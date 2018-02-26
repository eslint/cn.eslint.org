---
title: multiline-ternary - Rules
layout: doc
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# Enforce or disallow newlines between operands of ternary expressions (multiline-ternary)

# 要求或禁止在三元操作数中间换行 (multiline-ternary)

JavaScript allows operands of ternary expressions to be separated by newlines, which can improve the readability of your program.

JavaScript 允许三元操作数之间有换行，可以提高程序的可读性。

For example:

例如：

```js
var foo = bar > baz ? value1 : value2;
```

The above can be rewritten as the following to improve readability and more clearly delineate the operands:

上面的代码可以重写为以下形式，来提高可读性，更加清晰的描述三元操作数。

```js
var foo = bar > baz ?
    value1 :
    value2;
```

## Rule Details

This rule enforces or disallows newlines between operands of a ternary expression.
Note: The location of the operators is not enforced by this rule. Please see the [operator-linebreak](operator-linebreak) rule if you are interested in enforcing the location of the operators themselves.

该规则强制或禁止在三元操作数之间有换行。注意：操作符的位置不是该规则强制的。如果你对操作符的位置感兴趣，可以查看[operator-linebreak](operator-linebreak)。

## Options

This rule has a string option:

该规则有一个字符串选项：

* `"always"` (default) enforces newlines between the operands of a ternary expression.
* `"always"` (默认) 强制三元操作数之间有换行。
* `"always-multiline"` enforces newlines between the operands of a ternary expression if the expression spans multiple lines.
* `"always-multiline"` 如果表达式跨越多个行，则在三元表达式的操作数之间强制换行。
* `"never"` disallows newlines between the operands of a ternary expression (enforcing that the entire ternary expression is on one line).
* `"never"` 禁止三元操作数之间有换行 (强制整个三元表达式在同一行).

### always

This is the default option.

这是默认选项：

Examples of **incorrect** code for this rule with the `"always"` option:

默认选项 `"always"` 的 **错误** 代码示例：

```js
/*eslint multiline-ternary: ["error", "always"]*/

foo > bar ? value1 : value2;

foo > bar ? value :
    value2;

foo > bar ?
    value : value2;
```

Examples of **correct** code for this rule with the `"always"` option:

默认选项 `"always"` 的 **正确** 代码示例：

```js
/*eslint multiline-ternary: ["error", "always"]*/

foo > bar ?
    value1 :
    value2;

foo > bar ?
    (baz > qux ?
        value1 :
        value2) :
    value3;
```

### always-multiline

Examples of **incorrect** code for this rule with the `"always-multiline"` option:

```js
/*eslint multiline-ternary: ["error", "always-multiline"]*/

foo > bar ? value1 :
    value2;

foo > bar ?
    value1 : value2;

foo > bar &&
    bar > baz ? value1 : value2;
```

Examples of **correct** code for this rule with the `"always-multiline"` option:

```js
/*eslint multiline-ternary: ["error", "always-multiline"]*/

foo > bar ? value1 : value2;

foo > bar ?
    value1 :
    value2;

foo > bar ?
    (baz > qux ? value1 : value2) :
    value3;

foo > bar ?
    (baz > qux ?
        value1 :
        value2) :
    value3;

foo > bar &&
    bar > baz ?
        value1 :
        value2;
```

### never

Examples of **incorrect** code for this rule with the `"never"` option:

选项 `"never"` 的 **错误** 代码示例：

```js
/*eslint multiline-ternary: ["error", "never"]*/

foo > bar ? value :
    value2;

foo > bar ?
    value : value2;

foo >
    bar ?
    value1 :
    value2;
```

Examples of **correct** code for this rule with the `"never"` option:

选项 `"never"` 的 **正确** 代码示例：

```js
/*eslint multiline-ternary: ["error", "never"]*/

foo > bar ? value1 : value2;

foo > bar ? (baz > qux ? value1 : value2) : value3;
```

## When Not To Use It

You can safely disable this rule if you do not have any strict conventions about whether the operands of a ternary expression should be separated by newlines.

如果你对三元操作数是否有换行没有严格约定，你可以禁用此规则。

## Related Rules

* [operator-linebreak](operator-linebreak)

## Compatibility

* **JSCS**: [requireMultiLineTernary](http://jscs.info/rule/requireMultiLineTernary)

## Version

This rule was introduced in ESLint 3.1.0.

该规则在 ESLint 3.1.0 中被引入。

## Resources

* [Rule source](https://github.com/eslint/eslint/tree/master/lib/rules/multiline-ternary.js)
* [Documentation source](https://github.com/eslint/eslint/tree/master/docs/rules/multiline-ternary.md)
