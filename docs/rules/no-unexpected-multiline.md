---
title: Rule no-unexpected-multiline
layout: doc
translator: molee1905
proofreader: coocon 
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# Avoid unexpected multiline expressions (no-unexpected-multiline)

# 避免意外的多行表达式 (no-unexpected-multiline)

Semicolons are optional in JavaScript, via a process called automatic semicolon insertion (ASI). See the documentation for [semi](./semi) for a fuller discussion of that feature.

在Javascript中，通过自动分号插入（ASI）的处理，分号是可选的。查看[semi](./semi)的文档，会有对那个特性的一个全面的论述。

The rules for ASI are relatively straightforward: In short, as once described by Isaac Schlueter, a `\n` character always ends a statement (just like a semicolon) unless one of the following is true:

ASI 的规则是相对简单的：简而言之，正如Isaac Schlueter 曾经描述的那样，一个 `\n` 字符总是一个语句的结尾(像分号一样)，除非下面之一为true

1. The statement has an unclosed paren, array literal, or object literal or ends in some other way that is not a valid way to end a statement. (For instance, ending with `.` or `,`.)

1. 该语句有一个没有闭合的括号，数组字面量或对象字面量或其他某种方式，不是有效结束一个语句的方式。（比如，以`.` 或 `,`结尾）

2. The line is `--` or `++` (in which case it will decrement/increment the next token.)

2. 该行是 `--` 或 `++`（在这种情况下它将减量/增量的下一个标记）

3. It is a `for()`, `while()`, `do`, `if()`, or `else`, and there is no `{`

3. 它是个 `for()`， `while()`，`do`， `if()`，或 `else`，并且没有 `{`

4. The next line starts with `[`, `(`, `+`, `*`, `/`, `-`, `,`, `.`, or some other binary operator that can only be found between two tokens in a single expression.

4. 下一行以 `[`，`(`， `+`， `*`， `/`， `-`， `,`， `.` 或一些其它在单个表达式中两个标记之间的二元操作符。

This particular rule aims to spot scenarios where a newline looks like it is ending a statement, but is not.

## Rule Details

This rule is aimed at ensuring that two unrelated consecutive lines are not accidentally interpreted as a single expression.

该规则旨在保证两个无关的连续的行不被意外地解释为单个表达式。

Examples of **incorrect** code for this rule:

**错误**代码示例：

```js
/*eslint no-unexpected-multiline: 2*/

var foo = bar
(1 || 2).baz();

var hello = 'world'
[1, 2, 3].forEach(addNumber);

let x = function() {}
`hello`

let x = function() {}
x
`hello`
```

Examples of **correct** code for this rule:

**正确**代码示例：

```js
/*eslint no-unexpected-multiline: 2*/

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

如果你有信心你不会因为引入那样的代码，你可以关闭此规则。

Note that the patterns considered problems are **not** flagged by the [semi](semi) rule.

注意，被认为有问题的模式**不**被[semi](semi)规则标记。

## Related Rules

* [semi](semi)
* [no-spaced-func](no-spaced-func)
* [space-unary-ops](space-unary-ops)

## Version

This rule was introduced in ESLint 0.24.0.

该该规则在 ESLint 0.24.0 中被引入。

## Resources

* [Rule source](https://github.com/eslint/eslint/tree/master/lib/rules/no-unexpected-multiline.js)
* [Documentation source](https://github.com/eslint/eslint/tree/master/docs/rules/no-unexpected-multiline.md)
