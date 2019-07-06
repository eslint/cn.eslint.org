---
title: semi - Rules
layout: doc
edit_link: https://github.com/eslint/eslint/edit/master/docs/rules/semi.md
rule_type: layout
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# require or disallow semicolons instead of ASI (semi)

# 要求或禁止使用分号代替 ASI (semi)

(fixable) The `--fix` option on the [command line](../user-guide/command-line-interface#fixing-problems) can automatically fix some of the problems reported by this rule.

(fixable) [命令行](../user-guide/command-line-interface#fixing-problems)中的 `--fix` 选项可以自动修复一些该规则报告的问题。

JavaScript is unique amongst the C-like languages in that it doesn't require semicolons at the end of each statement. In many cases, the JavaScript engine can determine that a semicolon should be in a certain spot and will automatically add it. This feature is known as **automatic semicolon insertion (ASI)** and is considered one of the more controversial features of JavaScript. For example, the following lines are both valid:

JavaScript 在所有类 C 语言中是比较独特的，它不需要在每个语句的末尾有分号。在很多情况下，JavaScript 引擎可以确定一个分号应该在什么位置然后自动添加它。此特征被称为 **自动分号插入 (ASI)**，被认为是 JavaScript 中较为有争议的特征。例如，以下各行均有效：

```js
var name = "ESLint"
var website = "eslint.org";
```

On the first line, the JavaScript engine will automatically insert a semicolon, so this is not considered a syntax error. The JavaScript engine still knows how to interpret the line and knows that the line end indicates the end of the statement.

第一行，JavaScript 引擎会自动插入分号，所以不会被认为是个语法错误。JavaScript 引擎还知道如何解释这一行，也知道行尾意味着语句的结束。

In the debate over ASI, there are generally two schools of thought. The first is that we should treat ASI as if it didn't exist and always include semicolons manually. The rationale is that it's easier to always include semicolons than to try to remember when they are or are not required, and thus decreases the possibility of introducing an error.

在 ASI 的争论中，一般有两大思想流派。第一个是，我们应该忽略 ASI 的存在，总是手动添加分号。理由是比起记住什么时候是否需要分号，把它们加进来更容易一些，并因此降低了引入错误的可能性。

However, the ASI mechanism can sometimes be tricky to people who are using semicolons. For example, consider this code:

然而，对使用分号的人而言，ASI 机制有时会很棘手。例如：

```js
return
{
    name: "ESLint"
};
```

This may look like a `return` statement that returns an object literal, however, the JavaScript engine will interpret this code as:

这个看起来像是个`return`语句返回一个对象文本。然而，JavaScript 引擎将代码解释成：

```js
return;
{
    name: "ESLint";
}
```

Effectively, a semicolon is inserted after the `return` statement, causing the code below it (a labeled literal inside a block) to be unreachable. This rule and the [no-unreachable](no-unreachable) rule will protect your code from such cases.

事实上，一个分号插入到 `return` 语句之后，导致(块中的标签文本)下面的代码不可达。该规则和 [no-unreachable](no-unreachable) 规则将会避免你的代码出现这种情况。

On the other side of the argument are those who says that since semicolons are inserted automatically, they are optional and do not need to be inserted manually. However, the ASI mechanism can also be tricky to people who don't use semicolons. For example, consider this code:

争论的另一派别说由于分号的自动插入，它们是可选的，不需要手动添加。然而，对不使用分号的人而言，ASI 机制有时也会很棘手。例如，考虑以下代码：

```js
var globalCounter = { }

(function () {
    var n = 0
    globalCounter.increment = function () {
        return ++n
    }
})()
```

In this example, a semicolon will not be inserted after the first line, causing a run-time error (because an empty object is called as if it's a function). The [no-unexpected-multiline](no-unexpected-multiline) rule can protect your code from such cases.

在这个例子中，分号不会被插入到第一行末尾，导致一个运行时错误（因为一个空的对象被调用，犹如它是个函数）。[no-unexpected-multiline](no-unexpected-multiline) 规则将会避免你的代码出现这种情况。

Although ASI allows for more freedom over your coding style, it can also make your code behave in an unexpected way, whether you use semicolons or not. Therefore, it is best to know when ASI takes place and when it does not, and have ESLint protect your code from these potentially unexpected cases. In short, as once described by Isaac Schlueter, a `\n` character always ends a statement (just like a semicolon) unless one of the following is true:

即使 ASI 允许在你的代码风格上提供更多的自由，不论你是否使用分号，它仍可以使你的代码表现的出乎意料。因此，最好是知道 ASI 什么时候插入分号，什么时候不插入分号，让 ESLint 帮你的代码避免这些潜在的意外情况。总之，正如 Isaac Schlueter 曾经描述的那样，一个 `\n` 字符总是一个语句的结尾(像分号一样)，除非是下面情况之一:

1. The statement has an unclosed paren, array literal, or object literal or ends in some other way that is not a valid way to end a statement. (For instance, ending with `.` or `,`.)
1. 该语句有一个没有闭合的括号，数组或对象或其它某种方式，不是有效结束一个语句的方式。（比如，以`.` 或`,`结尾）
1. The line is `--` or `++` (in which case it will decrement/increment the next token.)
1. 该行是`--`或 `++`（在这种情况下它将减少或增加下一个标记。）
1. It is a `for()`, `while()`, `do`, `if()`, or `else`, and there is no `{`
1. 它是个 `for()`，`while()`，`do`，`if()`或 `else`，没有`{`
1. The next line starts with `[`, `(`, `+`, `*`, `/`, `-`, `,`, `.`, or some other binary operator that can only be found between two tokens in a single expression.
1. 下一行以`[`，`(`，`+`，`*`，`/`，`-`，`,`，`.`或一些其他在单个表达式中两个标记之间的二元操作符

## Rule Details

This rule enforces consistent use of semicolons.

该规则强制使用一致的分号。

## Options

This rule has two options, a string option and an object option.

该规则有两个选项，一个是字符串，一个是对象。

String option:

字符串选项：

* `"always"` (default) requires semicolons at the end of statements
* `"always"` (默认) 要求在语句末尾使用分号
* `"never"` disallows semicolons as the end of statements (except to disambiguate statements beginning with `[`, `(`, `/`, `+`, or `-`)
* `"never"` 禁止在语句末尾使用分号 (除了消除以 `[`、`(`、`/`、`+` 或 `-` 开始的语句的歧义)

Object option (when `"always"`):

对象选项（当为 `"always"` 时）：

* `"omitLastInOneLineBlock": true` ignores the last semicolon in a block in which its braces (and therefore the content of the block) are in the same line
* `"omitLastInOneLineBlock": true` 忽略花括号在同一行（内容也就在同一行了）的语句块中的最后一个分号

Object option (when `"never"`):

对象选项（当为 `"never"` 时）：

* `"beforeStatementContinuationChars": "any"` (default) ignores semicolons (or lacking semicolon) at the end of statements if the next line starts with `[`, `(`, `/`, `+`, or `-`.
* `"beforeStatementContinuationChars": "any"` (默认) 如果下一句以 `[`、`(`、`/`、`+` 或 `-` 开头，忽略句末分号 (或缺少分号)。
* `"beforeStatementContinuationChars": "always"` requires semicolons at the end of statements if the next line starts with `[`, `(`, `/`, `+`, or `-`.
* `"beforeStatementContinuationChars": "always"` 如果下一句以 `[`、`(`、`/`、`+` 或 `-` 开头，要求句末有分号。
* `"beforeStatementContinuationChars": "never"` disallows semicolons as the end of statements if it doesn't make ASI hazard even if the next line starts with `[`, `(`, `/`, `+`, or `-`.
* `"beforeStatementContinuationChars": "never"` 如果下一句以 `[`、`(`、`/`、`+` 或 `-` 开头，禁止末尾有分号。

### always

Examples of **incorrect** code for this rule with the default `"always"` option:

默认选项 `"always"` 的 **错误** 代码示例：

```js
/*eslint semi: ["error", "always"]*/

var name = "ESLint"

object.method = function() {
    // ...
}
```

Examples of **correct** code for this rule with the default `"always"` option:

默认选项 `"always"` 的 **正确** 代码示例：

```js
/*eslint semi: "error"*/

var name = "ESLint";

object.method = function() {
    // ...
};
```

### never

Examples of **incorrect** code for this rule with the `"never"` option:

选项 `"never"` 的 **错误** 代码示例：

```js
/*eslint semi: ["error", "never"]*/

var name = "ESLint";

object.method = function() {
    // ...
};
```

Examples of **correct** code for this rule with the `"never"` option:

选项 `"never"` 的 **正确** 代码示例：

```js
/*eslint semi: ["error", "never"]*/

var name = "ESLint"

object.method = function() {
    // ...
}

var name = "ESLint"

;(function() {
    // ...
})()

import a from "a"
(function() {
    // ...
})()

import b from "b"
;(function() {
    // ...
})()
```

#### omitLastInOneLineBlock

Examples of additional **correct** code for this rule with the `"always", { "omitLastInOneLineBlock": true }` options:

选项 `"always", { "omitLastInOneLineBlock": true }` 的 **正确** 代码示例：

```js
/*eslint semi: ["error", "always", { "omitLastInOneLineBlock": true}] */

if (foo) { bar() }

if (foo) { bar(); baz() }
```

#### beforeStatementContinuationChars

Examples of additional **incorrect** code for this rule with the `"never", { "beforeStatementContinuationChars": "always" }` options:

选项 `"never", { "beforeStatementContinuationChars": "always" }` 的 **错误** 代码示例：

```js
/*eslint semi: ["error", "never", { "beforeStatementContinuationChars": "always"}] */
import a from "a"

(function() {
    // ...
})()
```

Examples of additional **incorrect** code for this rule with the `"never", { "beforeStatementContinuationChars": "never" }` options:

选项 `"never", { "beforeStatementContinuationChars": "never" }` 的 **错误** 代码示例：

```js
/*eslint semi: ["error", "never", { "beforeStatementContinuationChars": "never"}] */
import a from "a"

;(function() {
    // ...
})()
```

## When Not To Use It

If you do not want to enforce semicolon usage (or omission) in any particular way, then you can turn this rule off.

如果你不想以任何特定的方式强制分号的使用（或省略），你可以关闭此规则。

## Further Reading

* [An Open Letter to JavaScript Leaders Regarding Semicolons](http://blog.izs.me/post/2353458699/an-open-letter-to-javascript-leaders-regarding)
* [JavaScript Semicolon Insertion](http://inimino.org/~inimino/blog/javascript_semicolons)

## Related Rules

* [no-extra-semi](no-extra-semi)
* [no-unexpected-multiline](no-unexpected-multiline)
* [semi-spacing](semi-spacing)

## Version

This rule was introduced in ESLint 0.0.6.

该规则在 ESLint 0.0.6 中被引入。

## Resources

* [Rule source](https://github.com/eslint/eslint/tree/master/lib/rules/semi.js)
* [Documentation source](https://github.com/eslint/eslint/tree/master/docs/rules/semi.md)
