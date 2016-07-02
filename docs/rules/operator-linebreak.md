---
title: Rule operator-linebreak
layout: doc
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# Operator Linebreak (operator-linebreak)

# 操作符、换行符 (operator-linebreak)

When a statement is too long to fit on a single line, line breaks are generally inserted next to the operators separating expressions. The first style coming to mind would be to place the operator at the end of the line, following the english punctuation rules.

当一条语句太长不能放在一行时，换行符一般插入到分离表达式的操作符后面。第一种想到的风格是把操作符放在行末，紧跟在英文标点符号规则之后。

```js
var fullHeight = borderTop +
                 innerHeight +
                 borderBottom;
```

Some developers find that placing operators at the beginning of the line makes the code more readable.

一些开发者发现，将操作符放在行首位置使代码更具可读性。

```js
var fullHeight = borderTop
               + innerHeight
               + borderBottom;
```

## Rule Details

The `operator-linebreak` rule is aimed at enforcing a particular operator line break style. As such, it warns whenever it sees a binary operator or assignment that does not adhere to a particular style: either placing linebreaks after or before the operators.

该规则旨在强制一个特定的换行符风格。因此，如果遇到二元操作符或不遵守特定风格的赋值语句，比如，将换行符放在操作符之前或之后，该规则将发出警告。
 
## Options

The rule takes two options, a string, which can be `"after"`, `"before"` or `"none"` where the default is `"after"` and an object for more fine-grained configuration.

该规则有两个可选项，一个是字符串，值为 `"after"`、`"before"` 或 `"none"`，默认值为 `after`，另一个是个对象，可以进行更细粒度的配置。

You can set the style in configuration like this:

你可以在配置中像这样设置：

```json
"operator-linebreak": ["error", "before", { "overrides": { "?": "after" } }]
```

The default configuration is to enforce line breaks _after_ the operator except for the ternary operator `?` and `:` following that.

默认配置是强制换行符在操作符之后，除了三元操作符 `?` 和 `:` 会紧随它。

### "after"

This is the default setting for this rule. This option requires the line break to be placed after the operator.

这是该规则的默认设置。该选项要求把换行符放在操作符后面。

While using this setting, the following patterns are considered problems:

当这样设置时，以下模式被认为是有问题的：

```js
/*eslint operator-linebreak: ["error", "after"]*/

foo = 1
+
2;

foo = 1
    + 2;

foo
    = 5;

if (someCondition
    || otherCondition) {
}

answer = everything
  ? 42
  : foo;
```

The following patterns are not considered problems:

以下模式被认为是没有问题的：

```js
/*eslint operator-linebreak: ["error", "after"]*/

foo = 1 + 2;

foo = 1 +
      2;

foo =
    5;

if (someCondition ||
    otherCondition) {
}

answer = everything ?
  42 :
  foo;
```

### "before"

This option requires the line break to be placed before the operator.

该选项要求把换行符放在操作符之前。

While using this setting, the following patterns are considered problems:

当这样设置时，以下模式被认为是有问题的：

```js
/*eslint operator-linebreak: ["error", "before"]*/

foo = 1 +
      2;

foo =
    5;

if (someCondition ||
    otherCondition) {
}

answer = everything ?
  42 :
  foo;
```

The following patterns are not considered problems:

以下模式被认为是没有问题的：

```js
/*eslint operator-linebreak: ["error", "before"]*/

foo = 1 + 2;

foo = 1
    + 2;

foo
    = 5;

if (someCondition
    || otherCondition) {
}

answer = everything
  ? 42
  : foo;
```

### "none"

This option disallows line breaks on either side of the operator.

该选项禁止把换行符在操作符两边。

While using this setting, the following patterns are considered problems:

当这样设置时，以下模式被认为是有问题的：

```js
/*eslint operator-linebreak: ["error", "none"]*/

foo = 1 +
      2;

foo = 1
    + 2;

if (someCondition ||
    otherCondition) {
}

if (someCondition
    || otherCondition) {
}

answer = everything
  ? 42
  : foo;

answer = everything ?
  42 :
  foo;
```

The following patterns are not considered problems:

以下模式被认为是没有问题的：

```js
/*eslint operator-linebreak: ["error", "none"]*/

foo = 1 + 2;

foo = 5;

if (someCondition || otherCondition) {
}

answer = everything ? 42 : foo;
```

### Fine-grained control

The rule allows you to have even finer-grained control over individual operators by specifying an `overrides` dictionary:

该规则允许你通过指定一个 `overrides` 字典来覆盖个别的操作符，以实现更细粒度的控制。

```json
"operator-linebreak": ["error", "before", { "overrides": { "?": "after", "+=": "none" } }]
```

This would override the global setting for that specific operator.

这将覆盖那个指定的操作符的全局设置。

#### "ignore" override

This option is only supported using overrides and ignores line breaks on either side of the operator.

该选项在使用 `overrides` 时有效，并且忽略操作符两边的换行。

While using this setting, the following patterns are not considered problems:

当使用这个选项时，以下模式被认为是没有问题的：

```js
/*eslint operator-linebreak: ["error", "after", { "overrides": { "?": "ignore", ":": "ignore"} }]*/

answer = everything ?
  42
  : foo;

answer = everything
  ?
  42
  :
  foo;
```

## When Not To Use It

If your project will not be using a common operator line break style, turn this rule off.

如果你的项目不使用一种通用的换行符风格，可以关闭此规则。

## Related Rules

* [comma-style](comma-style)

## Version

This rule was introduced in ESLint 0.19.0.

该规则在 ESLint 0.19.0 中被引入。

## Resources

* [Rule source](https://github.com/eslint/eslint/tree/master/lib/rules/operator-linebreak.js)
* [Documentation source](https://github.com/eslint/eslint/tree/master/docs/rules/operator-linebreak.md)
