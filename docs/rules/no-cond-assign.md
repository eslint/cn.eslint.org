---
title: no-cond-assign - Rules
layout: doc
edit_link: https://github.com/eslint/eslint/edit/master/docs/rules/no-cond-assign.md
rule_type: problem
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# disallow assignment operators in conditional statements (no-cond-assign)

# 禁止在条件语句中出现赋值操作符（no-cond-assign）

(recommended) The `"extends": "eslint:recommended"` property in a configuration file enables this rule.

(recommended) 配置文件中的 `"extends": "eslint:recommended"` 属性启用了此规则。

In conditional statements, it is very easy to mistype a comparison operator (such as `==`) as an assignment operator (such as `=`). For example:

在条件语句中，很容易将一个比较运算符（像 `==`）错写成赋值运算符（如 `=`）。例如：

```js
// Check the user's job title
if (user.jobTitle = "manager") {
    // user.jobTitle is now incorrect
}
```

There are valid reasons to use assignment operators in conditional statements. However, it can be difficult to tell whether a specific assignment was intentional.

在条件语句中使用赋值操作符是有效的。然而，很难判断某个特定的赋值是否是有意为之。

## Rule Details

This rule disallows ambiguous assignment operators in test conditions of `if`, `for`, `while`, and `do...while` statements.

该规则禁止在 `if`、`for`、`while` 和 `do...while` 语句中出现模棱两可的赋值操作符。

## Options

This rule has a string option:

该规则有一个字符串选项：

* `"except-parens"` (default) allows assignments in test conditions *only if* they are enclosed in parentheses (for example, to allow reassigning a variable in the test of a `while` or `do...while` loop)
* `"except-parens"` (默认) 允许条件语句中出现赋值操作符，前提是它们被圆括号括起来 (例如，在 `while` 或 `do...while` 循环条件中，允许赋值给一个变量)
* `"always"` disallows all assignments in test conditions
* `"always"` 禁止条件语句中出现赋值语句

### except-parens

Examples of **incorrect** code for this rule with the default `"except-parens"` option:

默认选项 `"except-parens"` 的 **错误** 代码示例：

```js
/*eslint no-cond-assign: "error"*/

// Unintentional assignment
var x;
if (x = 0) {
    var b = 1;
}

// Practical example that is similar to an error
function setHeight(someNode) {
    "use strict";
    do {
        someNode.height = "100px";
    } while (someNode = someNode.parentNode);
}
```


Examples of **correct** code for this rule with the default `"except-parens"` option:

默认选项 `"except-parens"` 的 **正确** 代码示例：

```js
/*eslint no-cond-assign: "error"*/

// Assignment replaced by comparison
var x;
if (x === 0) {
    var b = 1;
}

// Practical example that wraps the assignment in parentheses
function setHeight(someNode) {
    "use strict";
    do {
        someNode.height = "100px";
    } while ((someNode = someNode.parentNode));
}

// Practical example that wraps the assignment and tests for 'null'
function setHeight(someNode) {
    "use strict";
    do {
        someNode.height = "100px";
    } while ((someNode = someNode.parentNode) !== null);
}
```

### always

Examples of **incorrect** code for this rule with the `"always"` option:

选项 `"always"` 的 **错误** 代码示例：

```js
/*eslint no-cond-assign: ["error", "always"]*/

// Unintentional assignment
var x;
if (x = 0) {
    var b = 1;
}

// Practical example that is similar to an error
function setHeight(someNode) {
    "use strict";
    do {
        someNode.height = "100px";
    } while (someNode = someNode.parentNode);
}

// Practical example that wraps the assignment in parentheses
function setHeight(someNode) {
    "use strict";
    do {
        someNode.height = "100px";
    } while ((someNode = someNode.parentNode));
}

// Practical example that wraps the assignment and tests for 'null'
function setHeight(someNode) {
    "use strict";
    do {
        someNode.height = "100px";
    } while ((someNode = someNode.parentNode) !== null);
}
```


Examples of **correct** code for this rule with the `"always"` option:

选项 `"always"` 的 **正确** 代码示例：

```js
/*eslint no-cond-assign: ["error", "always"]*/

// Assignment replaced by comparison
var x;
if (x === 0) {
    var b = 1;
}
```

## Related Rules

* [no-extra-parens](no-extra-parens)

## Version

This rule was introduced in ESLint 0.0.9.

该规则在 ESLint 0.0.9 中被引入。

## Resources

* [Rule source](https://github.com/eslint/eslint/tree/master/lib/rules/no-cond-assign.js)
* [Documentation source](https://github.com/eslint/eslint/tree/master/docs/rules/no-cond-assign.md)
