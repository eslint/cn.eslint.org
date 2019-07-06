---
title: max-lines-per-function - Rules
layout: doc
edit_link: https://github.com/eslint/eslint/edit/master/docs/rules/max-lines-per-function.md
rule_type: suggestion
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# enforce a maximum function length (max-lines-per-function)

# 强制函数最大行数 (max-lines-per-function)

Some people consider large functions a code smell. Large functions tend to do a lot of things and can make it hard following what's going on. Many coding style guides dictate a limit of the number of lines that a function can comprise of. This rule can help enforce that style.

有些人认为大型函数是一种代码气味。大型函数往往会做很多事情，并且会使跟踪发生的事情变得困难。许多编码风格指南规定了一个函数可以包含的行数的限制。这条规则可以帮助加强这种风格。

## Rule Details

This rule enforces a maximum number of lines per function, in order to aid in maintainability and reduce complexity.

此规则为每个函数强制执行最大行数，以帮助提高可维护性并降低复杂性。

## Why not use `max-statements` or other complexity measurement rules instead?

Nested long method chains like the below example are often broken onto separate lines for readability:

嵌套的长方法链，如下面的例子，为了提高可读性，经常被分割成单独的行:

```
function() {
    return m("div", [
        m("table", {className: "table table-striped latest-data"}, [
            m("tbody",
                data.map(function(db) {
                    return m("tr", {key: db.dbname}, [
                        m("td", {className: "dbname"}, db.dbname),
                        m("td", {className: "query-count"},  [
                            m("span", {className: db.lastSample.countClassName}, db.lastSample.nbQueries)
                        ])
                    ])
                })
            )
        ])
    ])
}
```

* `max-statements` will only report this as 1 statement, despite being 16 lines of code.
* `max-statements` 将只报告一个语句，尽管有 16 行代码。
* `complexity` will only report a complexity of 1
* `complexity` 只会报告复杂度为 1
* `max-nested-callbacks` will only report 1
* `max-nested-callbacks` 将只报告 1
* `max-depth` will report a depth of 0
* `max-depth` 将报告深度为 0

## Options

This rule has the following options that can be specified using an object:

此规则有以下选项，可以使用对象指定:

* `"max"` (default `50`) enforces a maximum number of lines in a function.
* `"max"` (默认 `50`) 强制在函数中的最大行数。
* `"skipBlankLines"` (default `false`) ignore lines made up purely of whitespace.
* `"skipBlankLines"` (默认 `false`) 忽略纯粹由空格组成的行。
* `"skipComments"` (default `false`) ignore lines containing just comments.
* `"skipComments"` (默认 `false`) 忽略只包含注释的行。
* `"IIFEs"` (default `false`) include any code included in IIFEs.
* `"IIFEs"` (默认 `false`) 包括 IIFE 中包含的任何代码。

Alternatively, you may specify a single integer for the `max` option:

此外，你也可以为 `max` 选项指定一个整数：

```json
"max-lines-per-function": ["error", 20]
```

is equivalent to

相当于

```json
"max-lines-per-function": ["error", { "max": 20 }]
```

### code

Examples of **incorrect** code for this rule with a max value of `2`:

最大行数为 `2` 的 **错误** 代码示例：

```js
/*eslint max-lines-per-function: ["error", 2]*/
function foo() {
    var x = 0;
}
```

```js
/*eslint max-lines-per-function: ["error", 2]*/
function foo() {
    // a comment
    var x = 0;
}
```

```js
/*eslint max-lines-per-function: ["error", 2]*/
function foo() {
    // a comment followed by a blank line

    var x = 0;
}
```

Examples of **correct** code for this rule with a max value of `3`:

最大行数为 `3` 的 **正确** 代码示例：

```js
/*eslint max-lines-per-function: ["error", 3]*/
function foo() {
    var x = 0;
}
```

```js
/*eslint max-lines-per-function: ["error", 3]*/
function foo() {
    // a comment
    var x = 0;
}
```

```js
/*eslint max-lines-per-function: ["error", 3]*/
function foo() {
    // a comment followed by a blank line

    var x = 0;
}
```

### skipBlankLines

Examples of **incorrect** code for this rule with the `{ "skipBlankLines": true }` option:

选项 `{ "skipBlankLines": true }` 的 **错误** 代码示例：

```js
/*eslint max-lines-per-function: ["error", {"max": 2, "skipBlankLines": true}]*/
function foo() {

    var x = 0;
}
```

Examples of **correct** code for this rule with the `{ "skipBlankLines": true }` option:

`{ "skipBlankLines": true }` 的 **正确** 代码示例：

```js
/*eslint max-lines-per-function: ["error", {"max": 3, "skipBlankLines": true}]*/
function foo() {

    var x = 0;
}
```

### skipComments

Examples of **incorrect** code for this rule with the `{ "skipComments": true }` option:

选项 `{ "skipComments": true }` 的 **错误** 代码示例：

```js
/*eslint max-lines-per-function: ["error", {"max": 2, "skipComments": true}]*/
function foo() {
    // a comment
    var x = 0;
}
```

Examples of **correct** code for this rule with the `{ "skipComments": true }` option:

选项 `{ "skipComments": true }` 的 **正确** 代码示例：

```js
/*eslint max-lines-per-function: ["error", {"max": 3, "skipComments": true}]*/
function foo() {
    // a comment
    var x = 0;
}
```

### IIFEs

Examples of **incorrect** code for this rule with the `{ "IIFEs": true }` option:

选项 `{ "IIFEs": true }` 的 **错误** 代码示例：

```js
/*eslint max-lines-per-function: ["error", {"max": 2, "IIFEs": true}]*/
(function(){
    var x = 0;
}());
```

Examples of **correct** code for this rule with the `{ "IIFEs": true }` option:

选项 `{ "IIFEs": true }` 的 **正确** 代码示例：

```js
/*eslint max-lines-per-function: ["error", {"max": 3, "IIFEs": true}]*/
(function(){
    var x = 0;
}());
```

## When Not To Use It

You can turn this rule off if you are not concerned with the number of lines in your functions.

如果你不关心函数中的行数，可以关闭此规则。

## Related Rules

* [complexity](complexity)
* [max-depth](max-depth)
* [max-lines](max-lines)
* [max-nested-callbacks](max-nested-callbacks)
* [max-params](max-params)
* [max-statements](max-statements)
* [max-statements-per-line](max-statements-per-line)

## Version

This rule was introduced in ESLint 5.0.0.

该规则在 ESLint 5.0.0 中被引入。

## Resources

* [Rule source](https://github.com/eslint/eslint/tree/master/lib/rules/max-lines-per-function.js)
* [Documentation source](https://github.com/eslint/eslint/tree/master/docs/rules/max-lines-per-function.md)
