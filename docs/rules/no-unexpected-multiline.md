---
title: no-unexpected-multiline - Rules
layout: doc
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# disallow confusing multiline expressions (no-unexpected-multiline)

# 禁止使用令人困惑的多行表达式 (no-unexpected-multiline)

(recommended) The `"extends": "eslint:recommended"` property in a configuration file enables this rule.

(recommended) 配置文件中的 `"extends": "eslint:recommended"` 属性启用了此规则。

Semicolons are usually optional in JavaScript, because of automatic semicolon insertion (ASI). You can require or disallow semicolons with the [semi](./semi) rule.

在 JavaScript 中，分号通常是可选的，因为会自动插入分号（ASI)。你可以使用 [semi](./semi) 规则要求或禁止分号。

The rules for ASI are relatively straightforward: As once described by Isaac Schlueter, a newline character always ends a statement, just like a semicolon, **except** where one of the following is true:

ASI 的规则是相对简单的：正如 Isaac Schlueter 曾经描述的那样，一个 `\n` 字符总是一个语句的结尾(像分号一样)，除非下面之一为真：

* The statement has an unclosed paren, array literal, or object literal or ends in some other way that is not a valid way to end a statement. (For instance, ending with `.` or `,`.)
* 该语句有一个没有闭合的括号，数组字面量或对象字面量或其他某种方式，不是有效结束一个语句的方式。（比如，以 `.` 或 `,` 结尾）
* The line is `--` or `++` (in which case it will decrement/increment the next token.)
* 该行是 `--` 或 `++`（在这种情况下它将减量/增量的下一个标记）
* It is a `for()`, `while()`, `do`, `if()`, or `else`, and there is no `{`
* 它是个 `for()`、`while()`、`do`、`if()` 或 `else`，并且没有 `{`
* The next line starts with `[`, `(`, `+`, `*`, `/`, `-`, `,`, `.`, or some other binary operator that can only be found between two tokens in a single expression.
* 下一行以 `[`、`(`、`+`、`*`、`/`、`-`、`,`、`.` 或一些其它在单个表达式中两个标记之间的二元操作符。

In the exceptions where a newline does **not** end a statement, a typing mistake to omit a semicolon causes two unrelated consecutive lines to be interpreted as one expression. Especially for a coding style without semicolons, readers might overlook the mistake. Although syntactically correct, the code might throw exceptions when it is executed.

换行不结束语句，书写错误遗漏了分号，这些异常会导致两个不相干的连续的行被解释为一个表达式。特别是对于一个没有分号的代码风格，读者可能会忽略这些错误。尽管语法上是正确的，代码执行时可能会抛出异常。

## Rule Details

This rule disallows confusing multiline expressions where a newline looks like it is ending a statement, but is not.

该规则禁止使用令人困惑的多行表达式。

Examples of **incorrect** code for this rule:

**错误** 代码示例：

```js
/*eslint no-unexpected-multiline: "error"*/

var foo = bar
(1 || 2).baz();

var hello = 'world'
[1, 2, 3].forEach(addNumber);

let x = function() {}
`hello`

let x = function() {}
x
`hello`

let x = foo
/regex/g.test(bar)
```

Examples of **correct** code for this rule:

**正确** 代码示例：

```js
/*eslint no-unexpected-multiline: "error"*/

var foo = bar;
(1 || 2).baz();

var foo = bar
;(1 || 2).baz()

var hello = 'world';
[1, 2, 3].forEach(addNumber);

var hello = 'world'
void [1, 2, 3].forEach(addNumber);

let x = function() {};
`hello`

let tag = function() {}
tag `hello`
```

## When Not To Use It

You can turn this rule off if you are confident that you will not accidentally introduce code like this.

如果你有信心你不会意外地引入这样的代码，你可以关闭此规则。

Note that the patterns considered problems are **not** flagged by the [semi](semi) rule.

注意，被认为有问题的模式 **不**被 [semi](semi) 规则标记。

## Related Rules

* [func-call-spacing](func-call-spacing)
* [semi](semi)
* [no-spaced-func](no-spaced-func)
* [space-unary-ops](space-unary-ops)

## Version

This rule was introduced in ESLint 0.24.0.

该规则在 ESLint 0.24.0 中被引入。

## Resources

* [Rule source](https://github.com/eslint/eslint/tree/master/lib/rules/no-unexpected-multiline.js)
* [Documentation source](https://github.com/eslint/eslint/tree/master/docs/rules/no-unexpected-multiline.md)
