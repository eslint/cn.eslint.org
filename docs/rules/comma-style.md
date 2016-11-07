---
title: comma-style - Rules
layout: doc
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# Comma style (comma-style)

# 逗号风格 (comma-style)

(fixable) The `--fix` option on the [command line](../user-guide/command-line-interface#fix) automatically fixes problems reported by this rule.

(fixable) [命令行](../user-guide/command-line-interface#fix)中的 `--fix` 选项可以自动修复该规则报告的问题。

The Comma Style rule enforces styles for comma-separated lists. There are two comma styles primarily used in JavaScript:

逗号风格规则强制逗号分隔列表使用一致的风格。在 JavaScript 中主要有两种逗号风格:

* The standard style, in which commas are placed at the end of the current line
* 标准风格, 即将逗号放置在当前行的末尾
* Comma First style, in which commas are placed at the start of the next line
* 逗号前置风格, 即将逗号放置在下一行的开始位置

One of the justifications for using Comma First style is that it can help track missing and trailing commas. These are problematic because missing commas in variable declarations can lead to the leakage of global variables and trailing commas can lead to errors in older versions of IE.

使用逗号前置风格的一个理由是，它能帮助跟踪遗漏的逗号和拖尾的逗号。在旧版 IE 中，这两种情况都是有问题的：在变量声明中，遗漏逗号会导致全局变量的内存泄漏，而拖尾逗号会导致出现错误。

## Rule Details

This rule enforce consistent comma style in array literals, object literals, and variable declarations.

该规则强制在数组字面量、对象字面量和变量声明中使用一致的逗号风格。

This rule does not apply in either of the following cases:

该规则不适用于以下两种情况：

* comma preceded and followed by linebreak (lone comma)
* 在逗号前后有换行符 (单独的逗号)
* single-line array literals, object literals, and variable declarations
* 单行数组字面量、对象字面量和变量声明

## Options

This rule has a string option:

该规则有一个字符串选项：

* `"last"` (default) requires a comma after and on the same line as an array element, object property, or variable declaration
* `"last"` (默认) 要求逗号放在数组元素、对象属性或变量声明之后，且在同一行
* `"first"` requires a comma before and on the same line as an array element, object property, or variable declaration
* `"first"` 要求逗号放在数组元素、对象属性或变量声明之前，且在同一行

This rule also accepts an additional `exceptions` object:

该规则还接受一个额外的 `exceptions` 对象：

* `"exceptions"` has properties whose names correspond to node types in the abstract syntax tree (AST) of JavaScript code:
* `"exceptions"` 包含与 JavaScript 代码的抽象语法树 (AST) 的节点类型对应的属性：

    * `"ArrayExpression": true` ignores comma style in array literals
    * `"ArrayExpression": true` 忽略数组字面量的逗号风格
    * `"ObjectExpression": true` ignores comma style in object literals
    * `"ObjectExpression": true` 忽略对象字面量的逗号风格
    * `"VariableDeclaration": true` ignores comma style in variable declarations
    * `"VariableDeclaration": true` 忽略变量声明的逗号风格

A way to determine the node types as defined by [ESTree](https://github.com/estree/estree) is to use the [online demo](http://eslint.org/parser).

可以使用 [online demo](http://eslint.org/parser) 来确定 [ESTree](https://github.com/estree/estree) 定义的节点类型。

### last

Examples of **incorrect** code for this rule with the default `"last"` option:

默认选项 `"last"` 的 **错误** 代码示例：

```js
/*eslint comma-style: ["error", "last"]*/

var foo = 1
,
bar = 2;

var foo = 1
  , bar = 2;


var foo = ["apples"
           , "oranges"];

function bar() {
    return {
        "a": 1
        ,"b:": 2
    };
}
```

Examples of **correct** code for this rule with the default `"last"` option:

默认选项 `"last"` 的 **正确** 代码示例：

```js
/*eslint comma-style: ["error", "last"]*/

var foo = 1, bar = 2;

var foo = 1,
    bar = 2;

var foo = ["apples",
           "oranges"];

function bar() {
    return {
        "a": 1,
        "b:": 2
    };
}
```

### first

Examples of **incorrect** code for this rule with the `"first"` option:

选项 `"first"` 的 **错误** 代码示例：

```js
/*eslint comma-style: ["error", "first"]*/

var foo = 1,
    bar = 2;

var foo = ["apples",
           "oranges"];

function bar() {
    return {
        "a": 1,
        "b:": 2
    };
}
```

Examples of **correct** code for this rule with the `"first"` option:

选项 `"first"` 的 **正确** 代码示例：

```js
/*eslint comma-style: ["error", "first"]*/

var foo = 1, bar = 2;

var foo = 1
    ,bar = 2;

var foo = ["apples"
          ,"oranges"];

function bar() {
    return {
        "a": 1
        ,"b:": 2
    };
}
```

### exceptions

An example use case is to enforce comma style *only* in var statements.

一个强制 *只在变量声明中* 使用逗号风格的例子。

Examples of **incorrect** code for this rule with sample `"first", { "exceptions": { … } }` options:

选项 `"first", { "exceptions": { … } }` 的 **错误** 代码示例：

```js
/*eslint comma-style: ["error", "first", { "exceptions": { "ArrayExpression": true, "ObjectExpression": true } }]*/

var o = {},
    a = [];
```

Examples of **correct** code for this rule with sample `"first", { "exceptions": { … } }` options:

选项 `"first", { "exceptions": { … } }` 的 **正确** 代码示例：

```js
/*eslint comma-style: ["error", "first", { "exceptions": { "ArrayExpression": true, "ObjectExpression": true } }]*/

var o = {fst:1,
         snd: [1,
               2]}
  , a = [];
```

## When Not To Use It

This rule can safely be turned off if your project does not care about enforcing a consistent comma style.

如果你的项目不强制使用一致的逗号风格，关闭此规则即可。

## Further Reading

For more information on the Comma First style:

关于逗号前置风格的更多信息请查看：

* [A better coding convention for lists and object literals in JavaScript by isaacs](https://gist.github.com/isaacs/357981)
* [npm coding style guideline](https://docs.npmjs.com/misc/coding-style)

## Related Rules

* [operator-linebreak](operator-linebreak)

## Version

This rule was introduced in ESLint 0.9.0.

该规则在 ESLint 0.9.0 被引入。

## Resources

* [Rule source](https://github.com/eslint/eslint/tree/master/lib/rules/comma-style.js)
* [Documentation source](https://github.com/eslint/eslint/tree/master/docs/rules/comma-style.md)
