---
title: nonblock-statement-body-position - Rules
layout: doc
edit_link: https://github.com/eslint/eslint/edit/master/docs/rules/nonblock-statement-body-position.md
rule_type: layout
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# enforce the location of single-line statements (nonblock-statement-body-position)

# 强制单个语句的位置 (nonblock-statement-body-position)

(fixable) The `--fix` option on the [command line](../user-guide/command-line-interface#fixing-problems) can automatically fix some of the problems reported by this rule.

(fixable) [命令行](../user-guide/command-line-interface#fixing-problems)中的 `--fix` 选项可以自动修复一些该规则报告的问题。

When writing `if`, `else`, `while`, `do-while`, and `for` statements, the body can be a single statement instead of a block. It can be useful to enforce a consistent location for these single statements.

当写 `if`、`else`、`while`、`do-while` 和 `for` 语句时，可以是单个语句而不是一个块。为这些单语句强制一个一致的位置会很有用。

For example, some developers avoid writing code like this:

例如，一些开发者避免像下面这样写代码：

```js
if (foo)
  bar();
```

If another developer attempts to add `baz();` to the `if` statement, they might mistakenly change the code to

如果开发试图给 `if` 语句添加 `baz();`，他们可能会将代码错误的改为：

```js
if (foo)
  bar();
  baz(); // this line is not in the `if` statement!
```

To avoid this issue, one might require all single-line `if` statements to appear directly after the conditional, without a linebreak:

为了避免这个问题，可能需要要求所有的单行 `if` 语句直接出现条件之后，不需要换行：

```js
if (foo) bar();
```

## Rule Details

This rule aims to enforce a consistent location for single-line statements.

该规则旨在对单行语句强制使用一致的位置。

Note that this rule does not enforce the usage of single-line statements in general. If you would like to disallow single-line statements, use the [`curly`](/docs/rules/curly) rule instead.

注意，该规则不会强制使用单行语句。如果你想要禁用单行语句，使用规则 [`curly`](/docs/rules/curly)。

### Options

This rule accepts a string option:

该规则接受一个字符串选项：

* `"beside"` (default) disallows a newline before a single-line statement.
* `"beside"` (默认) 禁止单行语句之前有换行。
* `"below"` requires a newline before a single-line statement.
* `"below"` 要求单行语句之前有换行。
* `"any"` does not enforce the position of a single-line statement.
* `"any"` 不强制单行语句的位置。

Additionally, the rule accepts an optional object option with an `"overrides"` key. This can be used to specify a location for particular statements that override the default. For example:

另外，该规则接受一个对象选项，有一个 `"overrides"` 属性。可以用来为特定的语句指定一个位置，以覆盖默认值。例如：

* `"beside", { "overrides": { "while": "below" } }` requires all single-line statements to appear on the same line as their parent, unless the parent is a `while` statement, in which case the single-line statement must not be on the same line.
* `"beside", { "overrides": { "while": "below" } }` 要求所有单行语句与其父节点出现在同一行，除非父节点是一个 `while` 语句，在这种情况下，单行语句出现必须在不同的行。
* `"below", { "overrides": { "do": "any" } }` disallows all single-line statements from appearing on the same line as their parent, unless the parent is a `do-while` statement, in which case the position of the single-line statement is not enforced.
* `"below", { "overrides": { "do": "any" } }` 禁止所有单行语句与其父节点出现在同一行，除非父节点是一个 `do-while` 语句，在这种情况下，单行语句的位置不是强制的。

Examples of **incorrect** code for this rule with the default `"beside"` option:

默认选项 `"beside"` 的 **错误** 代码示例：

```js
/* eslint nonblock-statement-body-position: ["error", "beside"] */

if (foo)
  bar();
else
  baz();

while (foo)
  bar();

for (let i = 1; i < foo; i++)
  bar();

do
  bar();
while (foo)

```

Examples of **correct** code for this rule with the default `"beside"` option:

默认选项 `"beside"` 的 **正确** 代码示例：

```js
/* eslint nonblock-statement-body-position: ["error", "beside"] */

if (foo) bar();
else baz();

while (foo) bar();

for (let i = 1; i < foo; i++) bar();

do bar(); while (foo)

if (foo) { // block statements are always allowed with this rule
  bar();
} else {
  baz();
}
```

Examples of **incorrect** code for this rule with the `"below"` option:

默认选项 `"below"` 的 **错误** 代码示例：

```js
/* eslint nonblock-statement-body-position: ["error", "below"] */

if (foo) bar();
else baz();

while (foo) bar();

for (let i = 1; i < foo; i++) bar();

do bar(); while (foo)
```

Examples of **correct** code for this rule with the `"below"` option:

默认选项 `"below"` 的 **正确** 代码示例：

```js
/* eslint nonblock-statement-body-position: ["error", "below"] */

if (foo)
  bar();
else
  baz();

while (foo)
  bar();

for (let i = 1; i < foo; i++)
  bar();

do
  bar();
while (foo)

if (foo) {
  // Although the second `if` statement is on the same line as the `else`, this is a very common
  // pattern, so it's not checked by this rule.
} else if (bar) {
}
```

Examples of **incorrect** code for this rule with the `"beside", { "overrides": { "while": "below" } }` rule:

选项 `"beside", { "overrides": { "while": "below" } }` 的 **错误** 代码示例：

```js
/* eslint nonblock-statement-body-position: ["error", "beside", { "overrides": { "while": "below" } }] */

if (foo)
  bar();

while (foo) bar();
```

Examples of **correct** code for this rule with the `"beside", { "overrides": { "while": "below" } }` rule:

选项 `"beside", { "overrides": { "while": "below" } }` 的 **正确** 代码示例：

```js
/* eslint nonblock-statement-body-position: ["error", "beside", { "overrides": { "while": "below" } }] */

if (foo) bar();

while (foo)
  bar();
```

## When Not To Use It

If you're not concerned about consistent locations of single-line statements, you should not turn on this rule. You can also disable this rule if you're using the `"all"` option for the [`curly`](/docs/rules/curly) rule, because this will disallow single-line statements entirely.

如果你不关心单行语句的位置的一致性，你可以关闭此规则。如果你在 [`curly`](/docs/rules/curly) 规则中使用了  `"all"` 选项，你也可以禁用此规则，因为它将会禁用所有的单行语句。

## Further Reading

* JSCS: [requireNewlineBeforeSingleStatementsInIf](https://jscs-dev.github.io/rule/requireNewlineBeforeSingleStatementsInIf)

## Version

This rule was introduced in ESLint 3.17.0.

该规则在 ESLint 3.17.0 中被引入。

## Resources

* [Rule source](https://github.com/eslint/eslint/tree/master/lib/rules/nonblock-statement-body-position.js)
* [Documentation source](https://github.com/eslint/eslint/tree/master/docs/rules/nonblock-statement-body-position.md)
