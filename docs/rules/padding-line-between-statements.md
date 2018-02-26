---
title: padding-line-between-statements - Rules
layout: doc
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# Require or disallow padding lines between statements (padding-line-between-statements)

# 要求或禁止在语句间填充空行 (padding-line-between-statements)

(fixable) The `--fix` option on the [command line](../user-guide/command-line-interface#fix) can automatically fix some of the problems reported by this rule.

(fixable) [命令行](../user-guide/command-line-interface#fix)中的 `--fix` 选项可以自动修复一些该规则报告的问题。

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

This rule does nothing if no configuration.

如果没有配置，该规则不生效。

A configuration is an object which has 3 properties; `blankLine`, `prev` and `next`. For example, `{ blankLine: "always", prev: "var", next: "return" }` means "it requires one or more blank lines between a variable declaration and a `return` statement."
You can supply any number of configurations. If a statement pair matches multiple configurations, the last matched configuration will be used.

该规则有一个对象配置，有三个属性：`blankLine`、`prev` 和 `next`。例如 `{ blankLine: "always", prev: "var", next: "return" }` 意为 “要求在变量声明和 `return` 语句之间有一行或多行空行。”你可以在配置中提供任意数量。如果语句匹配多个配置，则使用最后匹配的配置。

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
    - `"block-like"` is block like statements. This matches statements that the last token is the closing brace of blocks; e.g. `{ }`, `if (a) { }`, and `while (a) { }`.
    - `"block-like"` 像块的语句。匹配语句的最后一个 token 是闭括号的块；如 `{ }`、`if (a) { }` 和 `while (a) { }`.
    - `"break"` is `break` statements.
    - `"break"` 是 `break` 语句。
    - `"case"` is `case` labels.
    - `"case"` 是 `case` 标签。
    - `"cjs-export"` is `export` statements of CommonJS; e.g. `module.exports = 0`, `module.exports.foo = 1`, and `exports.foo = 2`. This is the special cases of assignment.
    - `"cjs-export"` 是 CommonJS 的 `export` 语句；如 `module.exports = 0`、`module.exports.foo = 1` 和 `exports.foo = 2`。这是一种特殊的赋值。
    - `"cjs-import"` is `import` statements of CommonJS; e.g. `const foo = require("foo")`. This is the special cases of variable declarations.
    - `"cjs-import"` 是 CommonJS 的 `import` 语句; 如 `const foo = require("foo")`。这是一种特殊的变量声明。
    - `"class"` is `class` declarations.
    - `"class"` 是 `class` 声明。
    - `"const"` is `const` variable declarations.
    - `"const"` 是 `const` 变量声明。
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
    - `"import"` is `import` declarations.
    - `"import"` 是 `import` 语句。
    - `"let"` is `let` variable declarations.
    - `"let"` 是 `let` 变量声明。
    - `"multiline-block-like"` is block like statements. This is the same as `block-like` type, but only if the block is multiline.
    - `"multiline-block-like"` 是像块的语句。它和 `block-like` 类型相同，但只应用于多行块。
    - `"multiline-expression"` is expression statements. This is the same as `expression` type, but only if the statement is multiline.
    - `"multiline-expression"` 是表达式语句。同 `expression` 类型一下，但只应用于多行语句。
    - `"return"` is `return` statements.
    - `"return"` 是 `return` 语句。
    - `"switch"` is `switch` statements.
    - `"switch"` 是 `switch` 语句。
    - `"throw"` is `throw` statements.
    - `"throw"` 是 `throw` 语句。
    - `"try"` is `try` statements.
    - `"try"` 是 `try` 语句。
    - `"var"` is `var` variable declarations.
    - `"var"` 是 `var` 变量声明。
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
[requirePaddingNewLineAfterVariableDeclaration]: http://jscs.info/rule/requirePaddingNewLineAfterVariableDeclaration
[requirePaddingNewLinesAfterBlocks]: http://jscs.info/rule/requirePaddingNewLinesAfterBlocks
[disallowPaddingNewLinesAfterBlocks]: http://jscs.info/rule/disallowPaddingNewLinesAfterBlocks
[requirePaddingNewLinesAfterUseStrict]: http://jscs.info/rule/requirePaddingNewLinesAfterUseStrict
[disallowPaddingNewLinesAfterUseStrict]: http://jscs.info/rule/disallowPaddingNewLinesAfterUseStrict
[requirePaddingNewLinesBeforeExport]: http://jscs.info/rule/requirePaddingNewLinesBeforeExport
[disallowPaddingNewLinesBeforeExport]: http://jscs.info/rule/disallowPaddingNewLinesBeforeExport
[requirePaddingNewlinesBeforeKeywords]: http://jscs.info/rule/requirePaddingNewlinesBeforeKeywords
[disallowPaddingNewlinesBeforeKeywords]: http://jscs.info/rule/disallowPaddingNewlinesBeforeKeywords

## Version

This rule was introduced in ESLint 4.0.0-beta.0.

该规则在 ESLint 4.0.0-beta.0 中被引入。

## Resources

* [Rule source](https://github.com/eslint/eslint/tree/master/lib/rules/padding-line-between-statements.js)
* [Documentation source](https://github.com/eslint/eslint/tree/master/docs/rules/padding-line-between-statements.md)
