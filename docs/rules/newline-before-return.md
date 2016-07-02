---
title: Rule newline-before-return
layout: doc
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# require an empty line before `return` statements (newline-before-return)

# 要求 `return` 语句之前有一空行 (newline-before-return)

There is no hard and fast rule about whether empty lines should precede `return` statements in JavaScript. However, clearly delineating where a function is returning can greatly increase the readability and clarity of the code. For example:

在 JavaScript 中，并没有硬性的规定在 `return` 语句之前应该有空行。然而，清晰的描述函数的返回位置可以大大提高可读性和代码的清晰度。例如：

```js
function foo(bar) {
  var baz = 'baz';
  if (!bar) {
    bar = baz;
    return bar;
  }
  return bar;
}
```

Adding newlines visibly separates the return statements from the previous lines, making it clear where the function exits and what value it returns:

通过在 `return` 语句和它之前的语句之间添加空行，可以使函数的退出位置以及函数的返回值更加清晰：

```js
function foo(bar) {
  var baz = 'baz';

  if (!bar) {
    bar = baz;

    return bar;
  }

  return bar;
}
```

## Rule Details

This rule requires an empty line before `return` statements to increase code clarity, except when the `return` is alone inside a statement group (such as an if statement). In the latter case, the `return` statement does not need to be delineated by virtue of it being alone. Comments are ignored and do not count as empty lines.

该规则要求在 `return` 语句之前添加空行以提高代码清晰度，除了 `return` 语句空中的唯一语句（比如 if 语句）。注释将被忽略，而且不会记为空行。

Examples of **incorrect** code for this rule:

**错误** 代码示例：

```js
/*eslint newline-before-return: "error"*/

function foo(bar) {
    if (!bar) {
        return;
    }
    return bar;
}

function foo(bar) {
    if (!bar) {
        return;
    }
    /* multi-line
    comment */
    return bar;
}
```

Examples of **correct** code for this rule:

**正确** 代码示例：

```js
/*eslint newline-before-return: "error"*/

function foo() {
    return;
}

function foo() {

    return;
}

function foo(bar) {
    if (!bar) return;
}

function foo(bar) {
    if (!bar) { return };
}

function foo(bar) {
    if (!bar) {
        return;
    }
}

function foo(bar) {
    if (!bar) {
        return;
    }

    return bar;
}

function foo(bar) {
    if (!bar) {

        return;
    }
}

function foo() {

    // comment
    return;
}
```

## When Not To Use It

You can safely disable this rule if you do not have any strict conventions about whitespace before `return` statements.

如果你对 `return` 语句之前的空白没有严格的约定，你可以禁用此规则。

## Related Rules

* [newline-after-var](newline-after-var)

## Version

This rule was introduced in ESLint 2.3.0.

该规则在 ESLint 2.3.0 被引入。

## Resources

* [Rule source](https://github.com/eslint/eslint/tree/master/lib/rules/newline-before-return.js)
* [Documentation source](https://github.com/eslint/eslint/tree/master/docs/rules/newline-before-return.md)
