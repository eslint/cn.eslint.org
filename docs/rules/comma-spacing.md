---
title: comma-spacing - Rules
layout: doc
edit_link: https://github.com/eslint/eslint/edit/master/docs/rules/comma-spacing.md
rule_type: layout
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# Enforces spacing around commas (comma-spacing)

# 强制在逗号周围使用空格 (comma-spacing)

(fixable) The `--fix` option on the [command line](../user-guide/command-line-interface#fixing-problems) can automatically fix some of the problems reported by this rule.

(fixable) [命令行](../user-guide/command-line-interface#fixing-problems)中的 `--fix` 选项可以自动修复一些该规则报告的问题。

Spacing around commas improves readability of a list of items. Although most of the style guidelines for languages prescribe adding a space after a comma and not before it, it is subjective to the preferences of a project.

逗号前后的空格可以提高列表项的可读性。对于大多数语言的代码风格来说一般是在逗号之后而不是之前添加一个空格，当然你也可以在项目中按照自己的偏好决定在哪里添加空格。

```js
var foo = 1, bar = 2;
var foo = 1 ,bar = 2;
```

## Rule Details

This rule enforces consistent spacing before and after commas in variable declarations, array literals, object literals, function parameters, and sequences.

该规则强制在变量声明、数组字面量、对象字面量、函数参数 和 序列中的逗号左右的空格的一致性。

This rule does not apply in an `ArrayExpression` or `ArrayPattern` in either of the following cases:

该规则在 `ArrayExpression` 或 `ArrayPattern` 中以下两种情况下不适用：

* adjacent null elements
* 相邻的空元素
* an initial null element, to avoid conflicts with the [`array-bracket-spacing`](array-bracket-spacing) rule
* 初始化的空元素，以避免与 [`array-bracket-spacing`](array-bracket-spacing) 规则冲突

## Options

This rule has an object option:

该规则有一个对象选项：

* `"before": false` (default) disallows spaces before commas
* `"before": false` (默认) 禁止在逗号前使用空格
* `"before": true` requires one or more spaces before commas
* `"before": true` 要求在逗号前使用一个或多个空格
* `"after": true` (default) requires one or more spaces after commas
* `"after": true` (默认) 要求在逗号后使用一个或多个空格
* `"after": false` disallows spaces after commas
* `"after": false` 禁止在逗号后使用空格

### after

Examples of **incorrect** code for this rule with the default `{ "before": false, "after": true }` options:

默认选项 `{ "before": false, "after": true }` 的 **错误** 代码示例：

```js
/*eslint comma-spacing: ["error", { "before": false, "after": true }]*/

var foo = 1 ,bar = 2;
var arr = [1 , 2];
var obj = {"foo": "bar" ,"baz": "qur"};
foo(a ,b);
new Foo(a ,b);
function foo(a ,b){}
a ,b
```

Examples of **correct** code for this rule with the default `{ "before": false, "after": true }` options:

默认选项 `{ "before": false, "after": true }` 的 **正确** 代码示例：

```js
/*eslint comma-spacing: ["error", { "before": false, "after": true }]*/

var foo = 1, bar = 2
    , baz = 3;
var arr = [1, 2];
var arr = [1,, 3]
var obj = {"foo": "bar", "baz": "qur"};
foo(a, b);
new Foo(a, b);
function foo(a, b){}
a, b
```

Example of **correct** code for this rule with initial null element for the default `{ "before": false, "after": true }` options:

当用空元素进行初始化时，默认选项  `{ "before": false, "after": true }` 的 **正确** 代码示例：

```js
/*eslint comma-spacing: ["error", { "before": false, "after": true }]*/
/*eslint array-bracket-spacing: ["error", "always"]*/

var arr = [ , 2, 3 ]
```

### before

Examples of **incorrect** code for this rule with the `{ "before": true, "after": false }` options:

选项 `{ "before": true, "after": false }` 的 **错误** 代码示例：

```js
/*eslint comma-spacing: ["error", { "before": true, "after": false }]*/

var foo = 1, bar = 2;
var arr = [1 , 2];
var obj = {"foo": "bar", "baz": "qur"};
new Foo(a,b);
function foo(a,b){}
a, b
```

Examples of **correct** code for this rule with the `{ "before": true, "after": false }` options:

选项 `{ "before": true, "after": false }` 的 **正确** 代码示例：

```js
/*eslint comma-spacing: ["error", { "before": true, "after": false }]*/

var foo = 1 ,bar = 2 ,
    baz = true;
var arr = [1 ,2];
var arr = [1 ,,3]
var obj = {"foo": "bar" ,"baz": "qur"};
foo(a ,b);
new Foo(a ,b);
function foo(a ,b){}
a ,b
```

Examples of **correct** code for this rule with initial null element for the `{ "before": true, "after": false }` options:

当用空元素进行初始化时，选项 `{ "before": true, "after": false }` 的 **正确** 代码示例：

```js
/*eslint comma-spacing: ["error", { "before": true, "after": false }]*/
/*eslint array-bracket-spacing: ["error", "never"]*/

var arr = [,2 ,3]
```

## When Not To Use It

If your project will not be following a consistent comma-spacing pattern, turn this rule off.

如果你的项目不追求一致逗号间距，关闭此规则即可。

## Further Reading

* [Javascript](http://javascript.crockford.com/code.html)
* [Dojo Style Guide](https://dojotoolkit.org/reference-guide/1.9/developer/styleguide.html)


## Related Rules

* [array-bracket-spacing](array-bracket-spacing)
* [comma-style](comma-style)
* [space-in-brackets](space-in-brackets) (deprecated)
* [space-in-parens](space-in-parens)
* [space-infix-ops](space-infix-ops)
* [space-after-keywords](space-after-keywords)
* [space-unary-ops](space-unary-ops)
* [space-return-throw-case](space-return-throw-case)

## Version

This rule was introduced in ESLint 0.9.0.

该规则在 ESLint 0.9.0 被引入。

## Resources

* [Rule source](https://github.com/eslint/eslint/tree/master/lib/rules/comma-spacing.js)
* [Documentation source](https://github.com/eslint/eslint/tree/master/docs/rules/comma-spacing.md)
