---
title: Rule semi-spacing
layout: doc
translator: molee1905
proofreader: molee1905
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# Enforce spacing before and after semicolons (semi-spacing)

# 强制分号之前和之后有空格 (semi-spacing)

JavaScript allows you to place unnecessary spaces before or after a semicolon.

Javascript 允许你在分号之前或之后放置不必要的空格。

Disallowing or enforcing space around a semicolon can improve the readability of your program.

禁止或强制分号周围的空格可以提高你程序的可读性。

```js
var a = "b" ;

var c = "d";var e = "f";
```

**Fixable:** This rule is automatically fixable using the `--fix` flag on the command line.

**Fixable:** 该规则可以通过`--fix`命令行进行自动修复。

## Rule Details

This rule aims to enforce spacing around a semicolon. This rule prevents the use of spaces before a semicolon in expressions.

该该规则旨在强制分号周围的空格。该规则防止在表达式中的分号之前使用空格。

This rule doesn't check spacing in the following cases:

该规则在以下情况下不会检查空格：

* The spacing after the semicolon if it is the first token in the line.

* 行首分号后面的空格

* The spacing before the semicolon if it is after an opening parenthesis (`(` or `{`), or the spacing after the semicolon if it is before a closing parenthesis (`)` or `}`). That spacing is checked by `space-in-parens` or `block-spacing`.

* 开括号(`(` 或 `{`)之后、分号之前的空格，或分号之后、闭括号(`)` 或 `}`)之前的空格。这个空格被`space-in-parens` 或 `block-spacing`规则检查。

* The spacing around the semicolon in a for loop with an empty condition (`for(;;)`).

* 空条件(`for(;;)`)的 for 循环语句中分号周围的空格。

## Options

The rule takes one option, an object, which has two keys `before` and `after` having boolean values `true` or `false`.
If `before` is `true`, space is enforced before semicolons and if it's `false`, space is disallowed before semicolons.
If `after` is `true`, space is enforced after semicolons and if it's `false`, space is disallowed after semicolons.
The `after` option will be only applied if a semicolon is not at the end of line.

该规则有一个可选项，是个对象，有两个键`before` 和 `after`对应的值为布尔类型的值`true`或`false`。
如果设置`before`为`true`，分号之前强制有空格，如果设置为`false`，分号之前禁止有空格。
如果设置`after`为`true`，分号之后强制有空格，如果设置为`false`，分号之后禁止有空格。
`after`选项只在分号不是行尾时起作用。

The default is `{"before": false, "after": true}`.

默认为 `{"before": false, "after": true}`。

```json
    "semi-spacing": [2, {"before": false, "after": true}]
```

### `{"before": false, "after": true}`

This is the default option. It enforces spacing after semicolons and disallows spacing before semicolons.

这个是默认选项，它强制分号之后有空格，禁止分号之前有空格。

The following patterns are considered problems:

以下模式被认为是有问题的：

```js
/*eslint semi-spacing: 2*/

var foo ;
var foo;var bar;
throw new Error("error") ;
while (a) { break ; }
for (i = 0 ; i < 10 ; i++) {}
for (i = 0;i < 10;i++) {}
```

The following patterns are not considered problems:

以下模式被认为是没有问题的：

```js
/*eslint semi-spacing: 2*/

var foo;
var foo; var bar;
throw new Error("error");
while (a) { break; }
for (i = 0; i < 10; i++) {}
for (;;) {}
if (true) {;}
;foo();
```

### `{"before": true, "after": false}`

This option enforces spacing before semicolons and disallows spacing after semicolons.

这个选项强制分号之前有空格，禁止分号之后有空格。

The following patterns are considered problems:

以下模式被认为是有问题的：

```js
/*eslint semi-spacing: [2, { "before": true, "after": false }]*/

var foo;
var foo ; var bar;
throw new Error("error");
while (a) { break; }
for (i = 0;i < 10;i++) {}
for (i = 0; i < 10; i++) {}
```

The following patterns are not considered problems:

以下模式被认为是没有问题的：

```js
/*eslint semi-spacing: [2, { "before": true, "after": false }]*/

var foo ;
var foo ;var bar ;
throw new Error("error") ;
while (a) {break ;}
for (i = 0 ;i < 10 ;i++) {}
```

## When Not To Use It

You can turn this rule off if you are not concerned with the consistency of spacing before or after semicolons.

如果你不关心分号之前或之后的空格的一致性，你可以关闭此规则。

## Related Rules

* [semi](semi)
* [no-extra-semi](no-extra-semi)
* [comma-spacing](comma-spacing)
* [block-spacing](block-spacing)
* [space-in-parens](space-in-parens)

## Version

This rule was introduced in ESLint 0.16.0.

该规则在 ESLint 0.16.0 中被引入。

## Resources

* [Rule source](https://github.com/eslint/eslint/tree/master/lib/rules/semi-spacing.js)
* [Documentation source](https://github.com/eslint/eslint/tree/master/docs/rules/semi-spacing.md)
