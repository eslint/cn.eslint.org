---
title: space-unary-ops - Rules
layout: doc
edit_link: https://github.com/eslint/eslint/edit/master/docs/rules/space-unary-ops.md
rule_type: layout
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# Require or disallow spaces before/after unary operators (space-unary-ops)

# 要求或禁止在一元操作符之前或之后存在空格 (space-unary-ops)

(fixable) The `--fix` option on the [command line](../user-guide/command-line-interface#fixing-problems) can automatically fix some of the problems reported by this rule.

(fixable) [命令行](../user-guide/command-line-interface#fixing-problems)中的 `--fix` 选项可以自动修复一些该规则报告的问题。

Some style guides require or disallow spaces before or after unary operators. This is mainly a stylistic issue, however, some JavaScript expressions can be written without spacing which makes it harder to read and maintain.

一些风格指南要求或禁止在一元操作符之前或之后存在空格。这主要是一个风格问题，然而，一些 JavaScript 表达式如果不写空格将会使其难以阅读和维护。

## Rule Details

This rule enforces consistency regarding the spaces after `words` unary operators and after/before `nonwords` unary operators.

该规则强制 `words` 一元操作符后空格和 `nonwords` 一元操作符之前或之后的空格的一致性。

Examples of unary `words` operators:

一元 `words` 操作符的例子：

```js
// new
var joe = new Person();

// delete
var obj = {
    foo: 'bar'
};
delete obj.foo;

// typeof
typeof {} // object

// void
void 0 // undefined
```

Examples of unary `nonwords` operators:

一元 `nonwords` 操作符的例子：

```js
if ([1,2,3].indexOf(1) !== -1) {};
foo = --foo;
bar = bar++;
baz = !foo;
qux = !!baz;
```

## Options

This rule has three options:

该规则有三个可选项：

* `words` - applies to unary word operators such as: `new`, `delete`, `typeof`, `void`, `yield`
* `words` - 适用于单词类一元操作符，例如：`new`、`delete`、`typeof`、`void`、`yield`
* `nonwords` - applies to unary operators such as: `-`, `+`, `--`, `++`, `!`, `!!`
* `nonwords` - 适用于这些一元操作符: `-`、`+`、`--`、`++`、`!`、`!!`
* `overrides` - specifies overwriting usage of spacing for each
  operator, word or non word. This is empty by default, but can be used
  to enforce or disallow spacing around operators. For example:
* `overrides` - 覆盖操作符周围空格的用法。默认为空，但可用来强制或禁止操作符周围有空格。例如：

```js
    "space-unary-ops": [
        2, {
          "words": true,
          "nonwords": false,
          "overrides": {
            "new": false,
            "++": true
          }
    }]
```

In this case, spacing will be disallowed after a `new` operator and required before/after a `++` operator.

在这个例子中，`new` 操作符之后禁用空格，`++` 操作左右要求有空格。

Examples of **incorrect** code for this rule with the default `{"words": true, "nonwords": false}` option:

默认选项 `{"words": true, "nonwords": false}` 的 **错误** 代码示例：

```js
/*eslint space-unary-ops: "error"*/

typeof!foo;

void{foo:0};

new[foo][0];

delete(foo.bar);

++ foo;

foo --;

- foo;

+ "3";
```

```js
/*eslint space-unary-ops: "error"*/
/*eslint-env es6*/

function *foo() {
    yield(0)
}
```

```js
/*eslint space-unary-ops: "error"*/

async function foo() {
    await(bar);
}
```

Examples of **correct** code for this rule with the `{"words": true, "nonwords": false}` option:

选项 `{"words": true, "nonwords": false}` 的 **正确** 代码示例：

```js
/*eslint space-unary-ops: "error"*/

// Word unary operator "delete" is followed by a whitespace.
delete foo.bar;

// Word unary operator "new" is followed by a whitespace.
new Foo;

// Word unary operator "void" is followed by a whitespace.
void 0;

// Unary operator "++" is not followed by whitespace.
++foo;

// Unary operator "--" is not preceded by whitespace.
foo--;

// Unary operator "-" is not followed by whitespace.
-foo;

// Unary operator "+" is not followed by whitespace.
+"3";
```

```js
/*eslint space-unary-ops: "error"*/
/*eslint-env es6*/

function *foo() {
    yield (0)
}
```

```js
/*eslint space-unary-ops: "error"*/

async function foo() {
    await (bar);
}
```

## Version

This rule was introduced in ESLint 0.10.0.

该规则在 ESLint 0.10.0 中被引入。

## Resources

* [Rule source](https://github.com/eslint/eslint/tree/master/lib/rules/space-unary-ops.js)
* [Documentation source](https://github.com/eslint/eslint/tree/master/docs/rules/space-unary-ops.md)
