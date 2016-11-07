---
title: space-in-parens - Rules
layout: doc
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# Disallow or enforce spaces inside of parentheses (space-in-parens)

# 禁止或强制圆括号内的空格 (space-in-parens)

(fixable) The `--fix` option on the [command line](../user-guide/command-line-interface#fix) automatically fixes problems reported by this rule.

(fixable) [命令行](../user-guide/command-line-interface#fix)中的 `--fix` 选项可以自动修复该规则报告的问题。

Some style guides require or disallow spaces inside of parentheses:

一些风格指南禁止或强制圆括号内有空格：

```js
foo( 'bar' );
var x = ( 1 + 2 ) * 3;

foo('bar');
var x = (1 + 2) * 3;
```

## Rule Details

This rule will enforce consistency of spacing directly inside of parentheses, by disallowing or requiring one or more spaces to the right of `(` and to the left of `)`. In either case, `()` will still be allowed.

该规则将通过禁止或要求 `(` 右边或 `)` 左边有一个或多个空格来强制圆括号内空格的一致性。在任一情况下，仍将允许 `()`。

## Options

There are two options for this rule:

该规则有两个选项：

* `"always"` enforces a space inside of parentheses
* `"always"` 强制圆括号内有一个空格
* `"never"` enforces zero spaces inside of parentheses (default)
* `"never"` 强制圆括号内没有空格 (默认)

Depending on your coding conventions, you can choose either option by specifying it in your configuration:

根据您的编码约定，您可以在您的配置中选择使用任一选项：

```json
"space-in-parens": ["error", "always"]
```

### "always"

When `"always"` is set, the following patterns are considered problems:

当设置为 `"always"`，以下模式被认为是有问题的：

```js
/*eslint space-in-parens: ["error", "always"]*/

foo( 'bar');
foo('bar' );
foo('bar');

var foo = (1 + 2) * 3;
(function () { return 'bar'; }());
```

The following patterns are not considered problems:

以下模式被认为是没有问题的：

```js
/*eslint space-in-parens: ["error", "always"]*/

foo();

foo( 'bar' );

var foo = ( 1 + 2 ) * 3;
( function () { return 'bar'; }() );
```

### "never"

When `"never"` is used, the following patterns are considered problems:

当设置为 `"never"`，以下模式被认为是有问题的：

```js
/*eslint space-in-parens: ["error", "never"]*/

foo( 'bar');
foo('bar' );
foo( 'bar' );

var foo = ( 1 + 2 ) * 3;
( function () { return 'bar'; }() );
```

The following patterns are not considered problems:

以下模式被认为是没有问题的：

```js
/*eslint space-in-parens: ["error", "never"]*/

foo();

foo('bar');

var foo = (1 + 2) * 3;
(function () { return 'bar'; }());
```

### Exceptions

An object literal may be used as a third array item to specify exceptions, with the key `"exceptions"` and an array as the value. These exceptions work in the context of the first option. That is, if `"always"` is set to enforce spacing, then any "exception" will *disallow* spacing. Conversely, if `"never"` is set to disallow spacing, then any "exception" will *enforce* spacing.

一个对象文本可以作为规则数组的第三个元素来制定例外情况，使用 `"exceptions"` 做主键，对应的值是一个数组。这些例外作用在第一个选项的基础上。如果 `"always"` 设置为强制使用空格，那么任何例外情况将 *不允许*使用空格。同样的，如果 `"never"`设置为禁止使用空格那么，任何例外情况将强制使用空格。

The following exceptions are available: `["{}", "[]", "()", "empty"]`.

以下例外情况是有效的：`["{}", "[]", "()", "empty"]`.

For example, given `"space-in-parens": ["error", "always", { "exceptions": ["{}"] }]`, the following patterns are considered problems:

例如，配置为 `"space-in-parens": [2, "always", { "exceptions": ["{}"] }]` ，以下模式被认为是有问题的：

```js
/*eslint space-in-parens: ["error", "always", { "exceptions": ["{}"] }]*/

foo( {bar: 'baz'} );
foo( 1, {bar: 'baz'} );
```

The following patterns are not considered problems:

以下模式被认为是没有问题的：

```js
/*eslint space-in-parens: ["error", "always", { "exceptions": ["{}"] }]*/

foo({bar: 'baz'});
foo( 1, {bar: 'baz'});
```

Or, given `"space-in-parens": ["error", "never", { "exceptions": ["{}"] }]`, the following patterns are considered problems:

或者，配置为 `"space-in-parens": [2, "never", { "exceptions": ["{}"] }]`，以下模式被认为是有问题的：

```js
/*eslint space-in-parens: ["error", "never", { "exceptions": ["{}"] }]*/

foo({bar: 'baz'});
foo(1, {bar: 'baz'});
```

The following patterns are not considered problems:

以下模式被认为是没有问题的：

```js
/*eslint space-in-parens: ["error", "never", { "exceptions": ["{}"] }]*/

foo( {bar: 'baz'} );
foo(1, {bar: 'baz'} );
```

Given `"space-in-parens": ["error", "always", { "exceptions": ["[]"] }]`, the following patterns are considered problems:

配置为 `"space-in-parens": [2, "always", { "exceptions": ["[]"] }]`，以下模式被认为是有问题的：

```js
/*eslint space-in-parens: ["error", "always", { "exceptions": ["[]"] }]*/

foo( [bar, baz] );
foo( [bar, baz], 1 );
```

The following patterns are not considered problems:

以下模式被认为是没有问题的：

```js
/*eslint space-in-parens: ["error", "always", { "exceptions": ["[]"] }]*/

foo([bar, baz]);
foo([bar, baz], 1 );
```

Or, given `"space-in-parens": ["error", "never", { "exceptions": ["[]"] }]`, the following patterns are considered problems:

或者，配置为 `"space-in-parens": [2, "never", { "exceptions": ["[]"] }]`，以下模式被认为是有问题的：

```js
/*eslint space-in-parens: ["error", "never", { "exceptions": ["[]"] }]*/

foo([bar, baz]);
foo([bar, baz], 1);
```

The following patterns are not considered problems:

以下模式被认为是没有问题的：

```js
/*eslint space-in-parens: ["error", "never", { "exceptions": ["[]"] }]*/

foo( [bar, baz] );
foo( [bar, baz], 1);
```

Given `"space-in-parens": ["error", "always", { "exceptions": ["()"] }]`, the following patterns are considered problems:

配置为 `"space-in-parens": [2, "always", { "exceptions": ["()"] }]`，以下模式被认为是有问题的：

```js
/*eslint space-in-parens: ["error", "always", { "exceptions": ["()"] }]*/

foo( ( 1 + 2 ) );
foo( ( 1 + 2 ), 1 );
```

The following patterns are not considered problems:

以下模式被认为是没有问题的：

```js
/*eslint space-in-parens: ["error", "always", { "exceptions": ["()"] }]*/

foo(( 1 + 2 ));
foo(( 1 + 2 ), 1 );
```

Or, given `"space-in-parens": ["error", "never", { "exceptions": ["()"] }]`, the following patterns are considered problems:

或者配置为 `"space-in-parens": [2, "never", { "exceptions": ["()"] }]`，以下模式被认为是有问题的：

```js
/*eslint space-in-parens: ["error", "never", { "exceptions": ["()"] }]*/

foo((1 + 2));
foo((1 + 2), 1);
```

The following patterns are not considered problems:

以下模式被认为是没有问题的：

```js
/*eslint space-in-parens: ["error", "never", { "exceptions": ["()"] }]*/

foo( (1 + 2) );
foo( (1 + 2), 1);
```

The `"empty"` exception concerns empty parentheses, and works the same way as the other exceptions, inverting the first option.

`"empty"` 例外关注空括号，与其他例外作用一样，与第一个选项相反。

For example, given `"space-in-parens": ["error", "always", { "exceptions": ["empty"] }]`, the following patterns are considered problems:

例如，配置为 `"space-in-parens": ["error", "always", { "exceptions": ["empty"] }]`，以下模式被认为是有问题的：


```js
/*eslint space-in-parens: ["error", "always", { "exceptions": ["empty"] }]*/

foo( );
```

The following patterns are not considered problems:

以下模式被认为是没有问题的：

```js
/*eslint space-in-parens: ["error", "always", { "exceptions": ["empty"] }]*/

foo();
```

Or, given `"space-in-parens": ["error", "never", { "exceptions": ["empty"] }]`, the following patterns are considered problems:

或者，配置为 `"space-in-parens": ["error", "never", { "exceptions": ["empty"] }]`，
以下模式被认为是有问题的：

```js
/*eslint space-in-parens: ["error", "never", { "exceptions": ["empty"] }]*/

foo();
```

The following patterns are not considered problems:

以下模式被认为是没有问题的：

```js
/*eslint space-in-parens: ["error", "never", { "exceptions": ["empty"] }]*/

foo( );
```

You can include multiple entries in the `"exceptions"` array. For example, given `"space-in-parens": ["error", "always", { "exceptions": ["{}", "[]"] }]`, the following patterns are considered problems:

你可以在 `"exceptions"` 数组中包含多个项。例如，配置 `"space-in-parens": ["error", "always", { "exceptions": ["{}", "[]"] }]`，以下模式被认为是有问题的：

```js
/*eslint space-in-parens: ["error", "always", { "exceptions": ["{}", "[]"] }]*/

bar( {bar:'baz'} );
baz( 1, [1,2] );
foo( {bar: 'baz'}, [1, 2] );
```

The following patterns are not considered problems:

以下模式被认为是没有问题的：

```js
/*eslint space-in-parens: ["error", "always", { "exceptions": ["{}", "[]"] }]*/

bar({bar:'baz'});
baz( 1, [1,2]);
foo({bar: 'baz'}, [1, 2]);
```

## When Not To Use It

You can turn this rule off if you are not concerned with the consistency of spacing between parentheses.

如果你不关心圆括号直接空格的一致性，你可以关闭此规则。

## Related Rules

* [space-in-brackets](space-in-brackets) (deprecated)

## Version

This rule was introduced in ESLint 0.8.0.

该规则在 ESLint 0.8.0 中被引入。

## Resources

* [Rule source](https://github.com/eslint/eslint/tree/master/lib/rules/space-in-parens.js)
* [Documentation source](https://github.com/eslint/eslint/tree/master/docs/rules/space-in-parens.md)
