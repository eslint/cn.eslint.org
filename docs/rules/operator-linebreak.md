---
title: operator-linebreak - Rules
layout: doc
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# enforce consistent linebreak style for operators (operator-linebreak)

# 强制操作符使用一致的换行符风格 (operator-linebreak)

(fixable) The `--fix` option on the [command line](../user-guide/command-line-interface#fix) automatically fixes problems reported by this rule.

(fixable) [命令行](../user-guide/command-line-interface#fix)中的 `--fix` 选项可以自动修复该规则报告的问题。

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

This rule enforces a consistent linebreak style for operators.

该规则旨在强制一个特定的换行符风格。
 
## Options

This rule has one option, which can be a string option or an object option.

该规则有一个可选项，可以是字符串或对象：

String option:

字符串选项：

* `"after"` requires linebreaks to be placed after the operator
* `"after"` 要求把换行符放在操作符后面
* `"before"` requires linebreaks to be placed before the operator
* `"before"` 要求把换行符放在操作符前面
* `"none"` disallows linebreaks on either side of the operator
* `"none"` 禁止在操作前后有换行符

Object option:

对象选项：

* `"overrides"` overrides the global setting for specified operators
* `"overrides"` 覆盖对指定的操作的全局设置

The default configuration is `"after", { "overrides": { "?": "before", ":": "before" } }`

默认配置为 `"after", { "overrides": { "?": "before", ":": "before" } }`

### after

Examples of **incorrect** code for this rule with the default `"after"` option:

默认选项 `"after"` 的 **错误** 代码示例：

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

Examples of **correct** code for this rule with the default `"after"` option:

默认选项 `"after"` 的 **正确** 代码示例：

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

### before

Examples of **incorrect** code for this rule with the `"before"` option:

选项 `"before"` 的 **错误** 代码示例：

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

Examples of **correct** code for this rule with the `"before"` option:

选项 `"before"` 的 **正确** 代码示例：

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

### none

Examples of **incorrect** code for this rule with the `"none"` option:

选项 `"none"` 的 **错误** 代码示例：

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

Examples of **correct** code for this rule with the `"none"` option:

选项 `"none"` 的 **正确** 代码示例：

```js
/*eslint operator-linebreak: ["error", "none"]*/

foo = 1 + 2;

foo = 5;

if (someCondition || otherCondition) {
}

answer = everything ? 42 : foo;
```

### overrides

Examples of additional **correct** code for this rule with the `{ "overrides": { "+=": "before" } }` option:

选项 `{ "overrides": { "+=": "before" } }` 的 **正确** 代码示例：

```js
/*eslint operator-linebreak: ["error", "after", { "overrides": { "+=": "before" } }]*/

var thing
  += 'thing';
```

Examples of additional **correct** code for this rule with the `{ "overrides": { "?": "ignore", ":": "ignore" } }` option:

选项 `{ "overrides": { "?": "ignore", ":": "ignore" } }` 的 **正确** 代码示例：

```js
/*eslint operator-linebreak: ["error", "after", { "overrides": { "?": "ignore", ":": "ignore" } }]*/

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
