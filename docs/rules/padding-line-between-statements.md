---
title: padding-line-between-statements - Rules
layout: doc
edit_link: https://github.com/eslint/eslint/edit/master/docs/rules/padding-line-between-statements.md
rule_type: layout
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# Require or disallow padding lines between statements (padding-line-between-statements)

# 要求或禁止在语句间填充空行 (padding-line-between-statements)

(fixable) The `--fix` option on the [command line](../user-guide/command-line-interface#fixing-problems) can automatically fix some of the problems reported by this rule.

(fixable) [命令行](../user-guide/command-line-interface#fixing-problems)中的 `--fix` 选项可以自动修复一些该规则报告的问题。

This rule requires or disallows blank lines between the given 2 kinds of statements.
Properly blank lines help developers to understand the code.

该规则要求或禁止在给定的两种语句间填充空行。正确的空行可以帮助开发人员理解代码。

For example, the following configuration requires a blank line between a variable declaration and a `return` statement.

例如，以下配置要求在变量声明和 `return` 语句之间有一行空行。

```js
/*eslint padding-line-between-statements: [
    "error",
    { blankLine: "always", prev: "var", next: "return" }
]*/

function foo() {
    var a = 1;

    return a;
}
```

## Rule Details

This rule does nothing if no configurations are provided.

如果没有提供配置，则此规则不执行任何操作。

A configuration is an object which has 3 properties; `blankLine`, `prev` and `next`. For example, `{ blankLine: "always", prev: "var", next: "return" }` means "one or more blank lines are required between a variable declaration and a `return` statement."
You can supply any number of configurations. If a statement pair matches multiple configurations, the last matched configuration will be used.

配置是具有三个属性的对象：：`blankLine`、`prev` 和 `next`。例如，`{ blankLine: "always", prev: "var", next: "return" }` 表示 “要求在变量声明和 `return` 语句之间有一行或多行空行空白”。你可以提供任意数量的配置。如果语句对匹配多个配置，则将使用最后匹配的配置。

```json
{
    "padding-line-between-statements": [
        "error",
        { "blankLine": LINEBREAK_TYPE, "prev": STATEMENT_TYPE, "next": STATEMENT_TYPE },
        { "blankLine": LINEBREAK_TYPE, "prev": STATEMENT_TYPE, "next": STATEMENT_TYPE },
        { "blankLine": LINEBREAK_TYPE, "prev": STATEMENT_TYPE, "next": STATEMENT_TYPE },
        { "blankLine": LINEBREAK_TYPE, "prev": STATEMENT_TYPE, "next": STATEMENT_TYPE },
        ...
    ]
}
```

- `LINEBREAK_TYPE` is one of the following.
- `LINEBREAK_TYPE` 是以下一种：
    - `"any"` just ignores the statement pair.
    - `"any"` 忽略成对语句。
    - `"never"` disallows blank lines.
    - `"never"` 禁止出现空行。
    - `"always"` requires one or more blank lines. Note it does not count lines that comments exist as blank lines.
    - `"always"` 要求一行或多行空行。注意它不计算注释中存在的空行。

- `STATEMENT_TYPE` is one of the following, or an array of the following.
- `STATEMENT_TYPE` 是以下一个或多个：
    - `"*"` is wildcard. This matches any statements.
    - `"*"` 通配符。匹配任何语句。
    - `"block"` is lonely blocks.
    - `"block"` 是单个块。
    - `"block-like"` is block like statements. This matches statements that the last token is the closing brace of blocks; e.g. `{ }`, `if (a) { }`, and `while (a) { }`. Also matches immediately invoked function expression statements.
    - `"block-like"` 像块的语句。匹配语句的最后一个 token 是闭括号的块；如 `{ }`、`if (a) { }` 和 `while (a) { }`。也匹配立即调用的函数表达式语句。
    - `"break"` is `break` statements.
    - `"break"` 是 `break` 语句。
    - `"case"` is `case` labels.
    - `"case"` 是 `case` 标签。
    - `"cjs-export"` is `export` statements of CommonJS; e.g. `module.exports = 0`, `module.exports.foo = 1`, and `exports.foo = 2`. This is a special case of assignment.
    - `"cjs-export"` 是 CommonJS 的 `export` 语句；如 `module.exports = 0`、`module.exports.foo = 1` 和 `exports.foo = 2`。这是一种特殊的赋值。
    - `"cjs-import"` is `import` statements of CommonJS; e.g. `const foo = require("foo")`. This is a special case of variable declarations.
    - `"cjs-import"` 是 CommonJS 的 `import` 语句; 如 `const foo = require("foo")`。这是一种特殊的变量声明。
    - `"class"` is `class` declarations.
    - `"class"` 是 `class` 声明。
    - `"const"` is `const` variable declarations, both single-line and multiline.
    - `"const"` 是 `const` 变量声明，包括单行和多行。
    - `"continue"` is `continue` statements.
    - `"continue"` 是 `continue` 语句。
    - `"debugger"` is `debugger` statements.
    - `"debugger"` 是 `debugger` 语句。
    - `"default"` is `default` labels.
    - `"default"` 是 `default` 标签。
    - `"directive"` is directive prologues. This matches directives; e.g. `"use strict"`.
    - `"directive"` 是指令序言。它匹配指令，如 `"use strict"`。
    - `"do"` is `do-while` statements. This matches all statements that the first token is `do` keyword.
    - `"do"` 是 `do-while` 语句。它匹配所有以 `do` 关键字开始的语句。
    - `"empty"` is empty statements.
    - `"empty"` 是空语句。
    - `"export"` is `export` declarations.
    - `"export"` 是 `export` 声明。
    - `"expression"` is expression statements.
    - `"expression"` 是表达式语句。
    - `"for"` is `for` loop families. This matches all statements that the first token is `for` keyword.
    - `"for"` 是 `for` 循环. 它匹配所有以 `for` 关键字开始的语句。
    - `"function"` is function declarations.
    - `"function"` 是函数声明。
    - `"if"` is `if` statements.
    - `"if"` 是 `if` 语句。
    - `"iife"` is immediately invoked function expression statements. This matches calls on a function expression, optionally prefixed with a unary operator.
    - `"iife"` 是立即调用的函数表达式语句。这将匹配对函数表达式的调用，函数表达式可选前缀为一元运算符。
    - `"import"` is `import` declarations.
    - `"import"` 是 `import` 语句。
    - `"let"` is `let` variable declarations, both single-line and multiline.
    - `"let"` 是 `let` 变量声明，包括单行和多行。
    - `"multiline-block-like"` is block like statements. This is the same as `block-like` type, but only if the block is multiline.
    - `"multiline-block-like"` 是像块的语句。它和 `block-like` 类型相同，但只应用于多行块。
    - `"multiline-const"` is multiline `const` variable declarations.
    - `"multiline-const"` 是多行 `const` 变量声明。
    - `"multiline-expression"` is expression statements. This is the same as `expression` type, but only if the statement is multiline.
    - `"multiline-expression"` 是表达式语句。同 `expression` 类型一下，但只应用于多行语句。
    - `"multiline-let"` is multiline `let` variable declarations.
    - `"multiline-let"` 是多行 `let` 变量声明。
    - `"multiline-var"` is multiline `var` variable declarations.
    - `"multiline-var"` 是多行 `var` 变量声明。
    - `"return"` is `return` statements.
    - `"return"` 是 `return` 语句。
    - `"singleline-const"` is single-line `const` variable declarations.
    - `"singleline-const"` 是单行 `const` 变量声明。
    - `"singleline-let"` is single-line `let` variable declarations.
    - `"singleline-let"` 是单行 `let` 变量声明。
    - `"singleline-var"` is single-line `var` variable declarations.
    - `"singleline-var"` 是单行 `var` 变量声明。
    - `"switch"` is `switch` statements.
    - `"switch"` 是 `switch` 语句。
    - `"throw"` is `throw` statements.
    - `"throw"` 是 `throw` 语句。
    - `"try"` is `try` statements.
    - `"try"` 是 `try` 语句。
    - `"var"` is `var` variable declarations, both single-line and multiline.
    - `"var"` 是 `var` 变量声明，包括单行和多行。
    - `"while"` is `while` loop statements.
    - `"while"` 是 `while` 循环。
    - `"with"` is `with` statements.
    - `"with"` 是 `with` 语句。

## Examples

This configuration would require blank lines before all `return` statements, like the [newline-before-return](/docs/rules/newline-before-return) rule.

该配置会要求所有的 `return` 语句前都有空行，就像 [newline-before-return](/docs/rules/newline-before-return)规则一样。

Examples of **incorrect** code for the `[{ blankLine: "always", prev: "*", next: "return" }]` configuration:

配置 `[{ blankLine: "always", prev: "*", next: "return" }]` 的 **错误** 代码示例：

```js
/*eslint padding-line-between-statements: [
    "error",
    { blankLine: "always", prev: "*", next: "return" }
]*/

function foo() {
    bar();
    return;
}
```

Examples of **correct** code for the `[{ blankLine: "always", prev: "*", next: "return" }]` configuration:

配置 `[{ blankLine: "always", prev: "*", next: "return" }]` 的 **正确** 代码示例：

```js
/*eslint padding-line-between-statements: [
    "error",
    { blankLine: "always", prev: "*", next: "return" }
]*/

function foo() {
    bar();

    return;
}

function foo() {
    return;
}
```

----

This configuration would require blank lines after every sequence of variable declarations, like the [newline-after-var] rule.

该配置要求每一个变量声明之后都有空行，就像 [newline-after-var](/docs/rules/newline-after-var) 规则。

Examples of **incorrect** code for the `[{ blankLine: "always", prev: ["const", "let", "var"], next: "*"}, { blankLine: "any", prev: ["const", "let", "var"], next: ["const", "let", "var"]}]` configuration:

配置 `[{ blankLine: "always", prev: ["const", "let", "var"], next: "*"}, { blankLine: "any", prev: ["const", "let", "var"], next: ["const", "let", "var"]}]` 的 **错误** 代码示例：

```js
/*eslint padding-line-between-statements: [
    "error",
    { blankLine: "always", prev: ["const", "let", "var"], next: "*"},
    { blankLine: "any",    prev: ["const", "let", "var"], next: ["const", "let", "var"]}
]*/

function foo() {
    var a = 0;
    bar();
}

function foo() {
    let a = 0;
    bar();
}

function foo() {
    const a = 0;
    bar();
}
```

Examples of **correct** code for the `[{ blankLine: "always", prev: ["const", "let", "var"], next: "*"}, { blankLine: "any", prev: ["const", "let", "var"], next: ["const", "let", "var"]}]` configuration:

配置 `[{ blankLine: "always", prev: ["const", "let", "var"], next: "*"}, { blankLine: "any", prev: ["const", "let", "var"], next: ["const", "let", "var"]}]` 的 **正确** 代码示例：

```js
/*eslint padding-line-between-statements: [
    "error",
    { blankLine: "always", prev: ["const", "let", "var"], next: "*"},
    { blankLine: "any",    prev: ["const", "let", "var"], next: ["const", "let", "var"]}
]*/

function foo() {
    var a = 0;
    var b = 0;

    bar();
}

function foo() {
    let a = 0;
    const b = 0;

    bar();
}

function foo() {
    const a = 0;
    const b = 0;

    bar();
}
```

----

This configuration would require blank lines after all directive prologues, like the [lines-around-directive](/docs/rules/lines-around-directive) rule.

该配置要所有的指令序言之后都有空行，就像 [lines-around-directive](/docs/rules/lines-around-directive) 规则。

Examples of **incorrect** code for the `[{ blankLine: "always", prev: "directive", next: "*" }, { blankLine: "any", prev: "directive", next: "directive" }]` configuration:

配置 `[{ blankLine: "always", prev: "directive", next: "*" }, { blankLine: "any", prev: "directive", next: "directive" }]` 的 **错误** 代码示例：

```js
/*eslint padding-line-between-statements: [
    "error",
    { blankLine: "always", prev: "directive", next: "*" },
    { blankLine: "any",    prev: "directive", next: "directive" }
]*/

"use strict";
foo();
```

Examples of **correct** code for the `[{ blankLine: "always", prev: "directive", next: "*" }, { blankLine: "any", prev: "directive", next: "directive" }]` configuration:

配置 `[{ blankLine: "always", prev: "directive", next: "*" }, { blankLine: "any", prev: "directive", next: "directive" }]` 的 **正确** 代码示例：

```js
/*eslint padding-line-between-statements: [
    "error",
    { blankLine: "always", prev: "directive", next: "*" },
    { blankLine: "any",    prev: "directive", next: "directive" }
]*/

"use strict";
"use asm";

foo();
```

## Compatibility

- **JSCS:** [requirePaddingNewLineAfterVariableDeclaration]
- **JSCS:** [requirePaddingNewLinesAfterBlocks]
- **JSCS:** [disallowPaddingNewLinesAfterBlocks]
- **JSCS:** [requirePaddingNewLinesAfterUseStrict]
- **JSCS:** [disallowPaddingNewLinesAfterUseStrict]
- **JSCS:** [requirePaddingNewLinesBeforeExport]
- **JSCS:** [disallowPaddingNewLinesBeforeExport]
- **JSCS:** [requirePaddingNewlinesBeforeKeywords]
- **JSCS:** [disallowPaddingNewlinesBeforeKeywords]

## When Not To Use It

If you don't want to notify warnings about linebreaks, then it's safe to disable this rule.

如果你不想受到关于换行的通知，可以禁用此规则。

[lines-around-directive]: https://eslint.org/docs/rules/lines-around-directive
[newline-after-var]: https://eslint.org/docs/rules/newline-after-var
[newline-before-return]: https://eslint.org/docs/rules/newline-before-return
[requirePaddingNewLineAfterVariableDeclaration]: https://jscs-dev.github.io/rule/requirePaddingNewLineAfterVariableDeclaration
[requirePaddingNewLinesAfterBlocks]: https://jscs-dev.github.io/rule/requirePaddingNewLinesAfterBlocks
[disallowPaddingNewLinesAfterBlocks]: https://jscs-dev.github.io/rule/disallowPaddingNewLinesAfterBlocks
[requirePaddingNewLinesAfterUseStrict]: https://jscs-dev.github.io/rule/requirePaddingNewLinesAfterUseStrict
[disallowPaddingNewLinesAfterUseStrict]: https://jscs-dev.github.io/rule/disallowPaddingNewLinesAfterUseStrict
[requirePaddingNewLinesBeforeExport]: https://jscs-dev.github.io/rule/requirePaddingNewLinesBeforeExport
[disallowPaddingNewLinesBeforeExport]: https://jscs-dev.github.io/rule/disallowPaddingNewLinesBeforeExport
[requirePaddingNewlinesBeforeKeywords]: https://jscs-dev.github.io/rule/requirePaddingNewlinesBeforeKeywords
[disallowPaddingNewlinesBeforeKeywords]: https://jscs-dev.github.io/rule/disallowPaddingNewlinesBeforeKeywords

## Version

This rule was introduced in ESLint 4.0.0-beta.0.

该规则在 ESLint 4.0.0-beta.0 中被引入。

## Resources

* [Rule source](https://github.com/eslint/eslint/tree/master/lib/rules/padding-line-between-statements.js)
* [Documentation source](https://github.com/eslint/eslint/tree/master/docs/rules/padding-line-between-statements.md)
