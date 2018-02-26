---
title: function-paren-newline - Rules
layout: doc
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# enforce consistent line breaks inside function parentheses (function-paren-newline)

# 强制在函数括号内使用一致的换行 (function-paren-newline)

(fixable) The `--fix` option on the [command line](../user-guide/command-line-interface#fix) can automatically fix some of the problems reported by this rule.

(fixable) [命令行](../user-guide/command-line-interface#fix)中的 `--fix` 选项可以自动修复一些该规则报告的问题。

Many style guides require or disallow newlines inside of function parentheses.

很多风格指南在要求或禁止在函数括号内换行。

## Rule Details

This rule enforces consistent line breaks inside parentheses of function parameters or arguments.

该规则强制在函数括号内使用一致的换行。

### Options

This rule has a single option, which can either be a string or an object.

该规则有一个选项，可以是个字符串或一个对象。

* `"always"` requires line breaks inside all function parentheses.
* `"always"` 要求在所有的函数括号内换行。
* `"never"` disallows line breaks inside all function parentheses.
* `"never"` 禁止在所有的函数括号内换行。
* `"multiline"` (default) requires linebreaks inside function parentheses if any of the parameters/arguments have a line break between them. Otherwise, it disallows linebreaks.
* `"multiline"` (默认) 如果函数的任一参数有换行，则要求在函数括号内换行。否则禁止换行。
* `"consistent"` requires consistent usage of linebreaks for each pair of parentheses. It reports an error if one parenthesis in the pair has a linebreak inside it and the other parenthesis does not.
* `"consistent"` 要求每个括号使用一致的换行。如果一个括号有换行，另一个括号没有换行，则报错。
* `{ "minItems": value }` requires linebreaks inside function parentheses if the number of parameters/arguments is at least `value`. Otherwise, it disallows linebreaks.
* `{ "minItems": value }` 只要参数的个数大于等于指定的 `value`，则要求在函数括号内换行。否则，禁止换行。

Example configurations:

示例配置：

```json
{
  "rules": {
    "function-paren-newline": ["error", "never"]
  }
}
```

```json
{
  "rules": {
    "function-paren-newline": ["error", { "minItems": 3 }]
  }
}
```

Examples of **incorrect** code for this rule with the `"always"` option:

选项 `"always"` 的 **错误** 代码示例：

```js
/* eslint function-paren-newline: ["error", "always"] */

function foo(bar, baz) {}

var foo = function(bar, baz) {};

var foo = (bar, baz) => {};

foo(bar, baz);
```

Examples of **correct** code for this rule with the `"always"` option:

选项 `"always"` 的 **正确** 代码示例：

```js
/* eslint function-paren-newline: ["error", "always"] */

function foo(
  bar,
  baz
) {}

var foo = function(
  bar, baz
) {};

var foo = (
  bar,
  baz
) => {};

foo(
  bar,
  baz
);
```

Examples of **incorrect** code for this rule with the `"never"` option:

选项 `"never"` 的 **错误** 代码示例：

```js
/* eslint function-paren-newline: ["error", "never"] */

function foo(
  bar,
  baz
) {}

var foo = function(
  bar, baz
) {};

var foo = (
  bar,
  baz
) => {};

foo(
  bar,
  baz
);
```

Examples of **correct** code for this rule with the `"never"` option:

选项 `"never"` 的 **正确** 代码示例：

```js
/* eslint function-paren-newline: ["error", "never"] */

function foo(bar, baz) {}

function foo(bar,
             baz) {}

var foo = function(bar, baz) {};

var foo = (bar, baz) => {};

foo(bar, baz);

foo(bar,
  baz);
```

Examples of **incorrect** code for this rule with the default `"multiline"` option:

默认选项 `"multiline"` 的 **错误** 代码示例：

```js
/* eslint function-paren-newline: ["error", "multiline"] */

function foo(bar,
  baz
) {}

var foo = function(
  bar, baz
) {};

var foo = (
  bar,
  baz) => {};

foo(bar,
  baz);

foo(
  function() {
    return baz;
  }
);
```

Examples of **correct** code for this rule with the default `"multiline"` option:

默认选项 `"multiline"` 的 **正确** 代码示例：

```js
/* eslint function-paren-newline: ["error", "multiline"] */

function foo(bar, baz) {}

var foo = function(
  bar,
  baz
) {};

var foo = (bar, baz) => {};

foo(bar, baz, qux);

foo(
  bar,
  baz,
  qux
);

foo(function() {
  return baz;
});
```

Examples of **incorrect** code for this rule with the `"consistent"` option:

选项 `"consistent"` 的 **错误** 代码示例：

```js
/* eslint function-paren-newline: ["error", "consistent"] */

function foo(bar,
  baz
) {}

var foo = function(bar,
  baz
) {};

var foo = (
  bar,
  baz) => {};

foo(
  bar,
  baz);

foo(
  function() {
    return baz;
  });
```

Examples of **correct** code for this rule with the `"consistent"` option:

选项 `"consistent"` 的 **正确** 代码示例：

```js
/* eslint function-paren-newline: ["error", "consistent"] */

function foo(bar,
  baz) {}

var foo = function(bar, baz) {};

var foo = (
  bar,
  baz
) => {};

foo(
  bar, baz
);

foo(
  function() {
    return baz;
  }
);
```

Examples of **incorrect** code for this rule with the `{ "minItems": 3 }` option:

选项 `{ "minItems": 3 }` 的 **错误** 代码示例：

```js
/* eslint function-paren-newline: ["error", { "minItems": 3 }] */

function foo(
  bar,
  baz
) {}

function foo(bar, baz, qux) {}

var foo = function(
  bar, baz
) {};

var foo = (bar,
  baz) => {};

foo(bar,
  baz);
```

Examples of **correct** code for this rule with the `{ "minItems": 3 }` option:

选项 `{ "minItems": 3 }` 的 **正确** 代码示例：

```js
/* eslint function-paren-newline: ["error", { "minItems": 3 }] */

function foo(bar, baz) {}

var foo = function(
  bar,
  baz,
  qux
) {};

var foo = (
  bar, baz, qux
) => {};

foo(bar, baz);

foo(
  bar, baz, qux
);
```

## When Not To Use It

If don't want to enforce consistent linebreaks inside function parentheses, do not turn on this rule.

如果你不想在函数括号内强制使用一致的换行，不要开启此规则。

## Version

This rule was introduced in ESLint 4.6.0.

该规则在 ESLint 4.6.0 中被引入。

## Resources

* [Rule source](https://github.com/eslint/eslint/tree/master/lib/rules/function-paren-newline.js)
* [Documentation source](https://github.com/eslint/eslint/tree/master/docs/rules/function-paren-newline.md)
