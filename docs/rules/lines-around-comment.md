---
title: lines-around-comment - Rules
layout: doc
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# require empty lines around comments (lines-around-comment)

# 强制注释周围有空行 (lines-around-comment)

(fixable) The `--fix` option on the [command line](../user-guide/command-line-interface#fix) can automatically fix some of the problems reported by this rule.

(fixable) [命令行](../user-guide/command-line-interface#fix)中的 `--fix` 选项可以自动修复一些该规则报告的问题。

Many style guides require empty lines before or after comments. The primary goal
of these rules is to make the comments easier to read and improve readability of the code.

很多风格指南要求在注释前后要有空行。该规则的主要目标是使这些注释更易阅读，提高代码的可读性。

## Rule Details

This rule requires empty lines before and/or after comments. It can be enabled separately for both block (`/*`) and line (`//`) comments. This rule does not apply to comments that appear on the same line as code and does not require empty lines at the beginning or end of a file.

该规则允许你指定在注释之前或之后是否应该有空行。它可以区分块级注释 (`/*`) 和单行注释(`//`)。该规则不适用于注释和代码出现在同一行的情况，也不要求在文件开头和末尾有空行。空行

## Options

This rule has an object option:

该规则有一个对象选项：

* `"beforeBlockComment": true` (default) requires an empty line before block comments
* `"beforeBlockComment": true` (默认) 要求在块级注释之前有一空行
* `"beforeBlockComment": false` disallows an empty line before block comments
* `"beforeBlockComment": false` 禁止在块级注释之前有一空行
* `"afterBlockComment": true` requires an empty line after block comments
* `"afterBlockComment": true` 要求在块级注释之后有一空行
* `"beforeLineComment": true` requires an empty line before line comments
* `"beforeLineComment": true` 要求在行级注释之前有一空行
* `"afterLineComment": true` requires an empty line after line comments
* `"afterLineComment": true` 要求在行级注释之后有一空行
* `"allowBlockStart": true` allows comments to appear at the start of block statements
* `"allowBlockStart": true` 允许注释出现在块语句的开始位置
* `"allowBlockEnd": true` allows comments to appear at the end of block statements
* `"allowBlockEnd": true` 允许注释出现在块语句的结束位置
* `"allowObjectStart": true` allows comments to appear at the start of object literals
* `"allowObjectStart": true` 允许注释出现在对象字面量的开始位置
* `"allowObjectEnd": true` allows comments to appear at the end of object literals
* `"allowObjectEnd": true` 允许注释出现在对象字面量的结束位置
* `"allowArrayStart": true` allows comments to appear at the start of array literals
* `"allowArrayStart": true` 允许注释出现在数组字面量的开始位置
* `"allowArrayEnd": true` allows comments to appear at the end of array literals
* `"allowArrayEnd": true` 允许注释出现在数组字面量的结束位置
* `"allowClassStart": true` allows comments to appear at the start of classes
* `"allowClassStart": true` 允许注释出现在类的开始位置
* `"allowClassEnd": true` allows comments to appear at the end of classes
* `"allowClassEnd": true` 允许注释出现在类的结束位置
* `"applyDefaultIgnorePatterns"` enables or disables the default comment patterns to be ignored by the rule
* `"applyDefaultIgnorePatterns"` 启用或禁用该规则忽略的默认注释模式
* `"ignorePattern"` custom patterns to be ignored by the rule
* `"ignorePattern"` 被该规则忽略的自定义模式


### beforeBlockComment

Examples of **incorrect** code for this rule with the default `{ "beforeBlockComment": true }` option:

默认选项 `{ "beforeBlockComment": true }` 的 **错误** 代码示例：

```js
/*eslint lines-around-comment: ["error", { "beforeBlockComment": true }]*/

var night = "long";
/* what a great and wonderful day */
var day = "great"
```

Examples of **correct** code for this rule with the default `{ "beforeBlockComment": true }` option:

默认选项 `{ "beforeBlockComment": true }` 的 **正确** 代码示例：

```js
/*eslint lines-around-comment: ["error", { "beforeBlockComment": true }]*/

var night = "long";

/* what a great and wonderful day */
var day = "great"
```

### afterBlockComment

Examples of **incorrect** code for this rule with the `{ "afterBlockComment": true }` option:

选项 `{ "afterBlockComment": true }` 的 **错误** 代码示例：

```js
/*eslint lines-around-comment: ["error", { "afterBlockComment": true }]*/

var night = "long";

/* what a great and wonderful day */
var day = "great"
```

Examples of **correct** code for this rule with the `{ "afterBlockComment": true }` option:

选项 `{ "afterBlockComment": true }` 的 **正确** 代码示例：

```js
/*eslint lines-around-comment: ["error", { "afterBlockComment": true }]*/

var night = "long";

/* what a great and wonderful day */

var day = "great"
```

### beforeLineComment

Examples of **incorrect** code for this rule with the `{ "beforeLineComment": true }` option:

选项 `{ "beforeLineComment": true }` 的 **错误** 代码示例：

```js
/*eslint lines-around-comment: ["error", { "beforeLineComment": true }]*/

var night = "long";
// what a great and wonderful day
var day = "great"
```

Examples of **correct** code for this rule with the `{ "beforeLineComment": true }` option:

选项 `{ "beforeLineComment": true }` 的 **正确** 代码示例：

```js
/*eslint lines-around-comment: ["error", { "beforeLineComment": true }]*/

var night = "long";

// what a great and wonderful day
var day = "great"
```

### afterLineComment

Examples of **incorrect** code for this rule with the `{ "afterLineComment": true }` option:

选项 `{ "afterLineComment": true }` 的 **错误** 代码示例：

```js
/*eslint lines-around-comment: ["error", { "afterLineComment": true }]*/

var night = "long";
// what a great and wonderful day
var day = "great"
```

Examples of **correct** code for this rule with the `{ "afterLineComment": true }` option:

选项 `{ "afterLineComment": true }` 的 **正确** 代码示例：

```js
/*eslint lines-around-comment: ["error", { "afterLineComment": true }]*/

var night = "long";
// what a great and wonderful day

var day = "great"
```

### allowBlockStart

Examples of **correct** code for this rule with the `{ "beforeLineComment": true, "allowBlockStart": true }` options:

选项 `{ "beforeLineComment": true, "allowBlockStart": true }` 的 **正确** 代码示例：

```js
/*eslint lines-around-comment: ["error", { "beforeLineComment": true, "allowBlockStart": true }]*/

function foo(){
    // what a great and wonderful day
    var day = "great"
    return day;
}
```

Examples of **correct** code for this rule with the `{ "beforeBlockComment": true, "allowBlockStart": true }` options:

选项 `{ "beforeBlockComment": true, "allowBlockStart": true }` 的 **正确**代码示例：

```js
/*eslint lines-around-comment: ["error", { "beforeBlockComment": true, "allowBlockStart": true }]*/

function foo(){
    /* what a great and wonderful day */
    var day = "great"
    return day;
}
```

### allowBlockEnd

Examples of **correct** code for this rule with the `{ "afterLineComment": true, "allowBlockEnd": true }` option:

选项 `{ "afterLineComment": true, "allowBlockEnd": true }` 的 **正确** 代码示例：

```js
/*eslint lines-around-comment: ["error", { "afterLineComment": true, "allowBlockEnd": true }]*/

function foo(){
    var day = "great"
    return day;
    // what a great and wonderful day
}
```

Examples of **correct** code for this rule with the `{ "afterBlockComment": true, "allowBlockEnd": true }` option:

选项 `{ "afterBlockComment": true, "allowBlockEnd": true }` 的 **正确** 代码示例：

```js
/*eslint lines-around-comment: ["error", { "afterBlockComment": true, "allowBlockEnd": true }]*/

function foo(){
    var day = "great"
    return day;

    /* what a great and wonderful day */
}
```

### allowClassStart

Examples of **incorrect** code for this rule with the `{ "beforeLineComment": true, "allowClassStart": false }` option:

选项 `{ "beforeLineComment": true, "allowClassStart": false }` 的 **错误** 代码示例：

```js
/*eslint lines-around-comment: ["error", { "beforeLineComment": true, "allowClassStart": false }]*/

class foo {
    // what a great and wonderful day
    day() {}
};
```

Examples of **correct** code for this rule with the `{ "beforeLineComment": true, "allowClassStart": false }` option:

选项 `{ "beforeLineComment": true, "allowClassStart": false }` 的 **正确** 代码示例：

```js
/*eslint lines-around-comment: ["error", { "beforeLineComment": true, "allowClassStart": false }]*/

class foo {

    // what a great and wonderful day
    day() {}
};
```

Examples of **correct** code for this rule with the `{ "beforeLineComment": true, "allowClassStart": true }` option:

选项 `{ "beforeLineComment": true, "allowClassStart": true }` 的 **正确** 代码示例：

```js
/*eslint lines-around-comment: ["error", { "beforeLineComment": true, "allowClassStart": true }]*/

class foo {
    // what a great and wonderful day
    day() {}
};
```

Examples of **incorrect** code for this rule with the `{ "beforeBlockComment": true, "allowClassStart": false }` option:

选项 `{ "beforeBlockComment": true, "allowClassStart": false }` 的 **错误** 代码示例：

```js
/*eslint lines-around-comment: ["error", { "beforeBlockComment": true, "allowClassStart": false }]*/

class foo {
    /* what a great and wonderful day */
    day() {}
};
```

Examples of **correct** code for this rule with the `{ "beforeBlockComment": true, "allowClassStart": false }` option:

选项 `{ "beforeBlockComment": true, "allowClassStart": false }` 的 **正确** 代码示例：

```js
/*eslint lines-around-comment: ["error", { "beforeBlockComment": true, "allowClassStart": false }]*/

class foo {

    /* what a great and wonderful day */
    day() {}
};
```

Examples of **correct** code for this rule with the `{ "beforeBlockComment": true, "allowClassStart": true }` option:

选项 `{ "beforeBlockComment": true, "allowClassStart": true }` 的 **正确** 代码示例：

```js
/*eslint lines-around-comment: ["error", { "beforeBlockComment": true, "allowClassStart": true }]*/

class foo {
    /* what a great and wonderful day */
    day() {}
};
```

### allowClassEnd

Examples of **correct** code for this rule with the `{ "afterLineComment": true, "allowClassEnd": true }` option:

选项 `{ "afterLineComment": true, "allowClassEnd": true }` 的 **正确** 代码示例：

```js
/*eslint lines-around-comment: ["error", { "afterLineComment": true, "allowClassEnd": true }]*/

class foo {
    day() {}
    // what a great and wonderful day
};
```

Examples of **correct** code for this rule with the `{ "afterBlockComment": true, "allowClassEnd": true }` option:

选项 `{ "afterBlockComment": true, "allowClassEnd": true }` 的 **正确** 代码示例：

```js
/*eslint lines-around-comment: ["error", { "afterBlockComment": true, "allowClassEnd": true }]*/

class foo {
    day() {}

    /* what a great and wonderful day */
};
```

### allowObjectStart

Examples of **correct** code for this rule with the `{ "beforeLineComment": true, "allowObjectStart": true }` option:

选项 `{ "beforeLineComment": true, "allowObjectStart": true }` 的 **正确** 代码示例：

```js
/*eslint lines-around-comment: ["error", { "beforeLineComment": true, "allowObjectStart": true }]*/

var foo = {
    // what a great and wonderful day
    day: "great"
};

const {
    // what a great and wonderful day
    foo: someDay
} = {foo: "great"};

const {
    // what a great and wonderful day
    day
} = {day: "great"};
```

Examples of **correct** code for this rule with the `{ "beforeBlockComment": true, "allowObjectStart": true }` option:

选项 `{ "beforeBlockComment": true, "allowObjectStart": true }` 的 **正确** 代码示例：

```js
/*eslint lines-around-comment: ["error", { "beforeBlockComment": true, "allowObjectStart": true }]*/

var foo = {
    /* what a great and wonderful day */
    day: "great"
};

const {
    /* what a great and wonderful day */
    foo: someDay
} = {foo: "great"};

const {
    /* what a great and wonderful day */
    day
} = {day: "great"};
```

### allowObjectEnd

Examples of **correct** code for this rule with the `{ "afterLineComment": true, "allowObjectEnd": true }` option:

选项 `{ "afterLineComment": true, "allowObjectEnd": true }` 的 **正确** 代码示例：

```js
/*eslint lines-around-comment: ["error", { "afterLineComment": true, "allowObjectEnd": true }]*/

var foo = {
    day: "great"
    // what a great and wonderful day
};

const {
    foo: someDay
    // what a great and wonderful day
} = {foo: "great"};

const {
    day
    // what a great and wonderful day
} = {day: "great"};
```

Examples of **correct** code for this rule with the `{ "afterBlockComment": true, "allowObjectEnd": true }` option:

选项 `{ "afterBlockComment": true, "allowObjectEnd": true }` 的 **正确** 代码示例：

```js
/*eslint lines-around-comment: ["error", { "afterBlockComment": true, "allowObjectEnd": true }]*/

var foo = {
    day: "great"

    /* what a great and wonderful day */
};

const {
    foo: someDay

    /* what a great and wonderful day */
} = {foo: "great"};

const {
    day

    /* what a great and wonderful day */
} = {day: "great"};
```

### allowArrayStart

Examples of **correct** code for this rule with the `{ "beforeLineComment": true, "allowArrayStart": true }` option:

选项 `{ "beforeLineComment": true, "allowArrayStart": true }` 的 **正确** 代码示例：

```js
/*eslint lines-around-comment: ["error", { "beforeLineComment": true, "allowArrayStart": true }]*/

var day = [
    // what a great and wonderful day
    "great",
    "wonderful"
];

const [
    // what a great and wonderful day
    someDay
] = ["great", "not great"];
```

Examples of **correct** code for this rule with the `{ "beforeBlockComment": true, "allowArrayStart": true }` option:

选项 `{ "beforeBlockComment": true, "allowArrayStart": true }` 的 **正确** 代码示例：

```js
/*eslint lines-around-comment: ["error", { "beforeBlockComment": true, "allowArrayStart": true }]*/

var day = [
    /* what a great and wonderful day */
    "great",
    "wonderful"
];

const [
    /* what a great and wonderful day */
    someDay
] = ["great", "not great"];
```

### allowArrayEnd

Examples of **correct** code for this rule with the `{ "afterLineComment": true, "allowArrayEnd": true }` option:

选项 `{ "afterLineComment": true, "allowArrayEnd": true }` 的 **正确** 代码示例：

```js
/*eslint lines-around-comment: ["error", { "afterLineComment": true, "allowArrayEnd": true }]*/

var day = [
    "great",
    "wonderful"
    // what a great and wonderful day
];

const [
    someDay
    // what a great and wonderful day
] = ["great", "not great"];
```

Examples of **correct** code for this rule with the `{ "afterBlockComment": true, "allowArrayEnd": true }` option:

选项 `{ "afterBlockComment": true, "allowArrayEnd": true }` 的 **正确** 代码示例：

```js
/*eslint lines-around-comment: ["error", { "afterBlockComment": true, "allowArrayEnd": true }]*/

var day = [
    "great",
    "wonderful"

    /* what a great and wonderful day */
];

const [
    someDay

    /* what a great and wonderful day */
] = ["great", "not great"];
```


### ignorePattern

By default this rule ignores comments starting with the following words: `eslint`, `jshint`, `jslint`, `istanbul`, `global`, `exported`, `jscs`. An alternative regular expression can be provided.

默认情况下，该规则忽略以 `eslint`、`jshint`、`jslint`、`istanbul`、`global`、`exported`、`jscs` 开头的注释。可以提供另一种正则表达式。

Examples of **correct** code for the `ignorePattern` option:

选项 `ignorePattern` 的 **正确** 代码示例：

```js
/*eslint lines-around-comment: ["error"]*/

foo();
/* eslint mentioned in this comment */,
bar();


/*eslint lines-around-comment: ["error", { "ignorePattern": "pragma" }] */

foo();
/* a valid comment using pragma in it */
```

Examples of **incorrect** code for the `ignorePattern` option:

选项 `ignorePattern` 的 **错误** 代码示例：

```js
/*eslint lines-around-comment: ["error", { "ignorePattern": "pragma" }] */

1 + 1;
/* something else */
```

### applyDefaultIgnorePatterns

Default ignore patterns are applied even when `ignorePattern` is provided. If you want to omit default patterns, set this option to `false`.

即使提供了 `ignorePattern`，也应用默认的忽略模式。如果你想省略默认模式，请将此选项设置为 `false`。

Examples of **correct** code for the `{ "applyDefaultIgnorePatterns": false }` option:

选项 `{ "applyDefaultIgnorePatterns": false }` 的 **正确** 代码示例：

```js
/*eslint lines-around-comment: ["error", { "ignorePattern": "pragma", applyDefaultIgnorePatterns: false }] */

foo();
/* a valid comment using pragma in it */
```

Examples of **incorrect** code for the `{ "applyDefaultIgnorePatterns": false }` option:

选项 `{ "applyDefaultIgnorePatterns": false }` 的 **错误** 代码示例：

```js
/*eslint lines-around-comment: ["error", { "applyDefaultIgnorePatterns": false }] */

foo();
/* eslint mentioned in comment */

```


## When Not To Use It

Many people enjoy a terser code style and don't mind comments bumping up against code. If you fall into that category this rule is not for you.

很多人喜欢简洁的代码风格，不介意代码中注释的风格。如果你也是这样的，此规则不适合你。

## Related Rules

* [space-before-blocks](space-before-blocks)
* [spaced-comment](spaced-comment)

## Version

This rule was introduced in ESLint 0.22.0.

该规则在 ESLint 0.22.0 中被引入。

## Resources

* [Rule source](https://github.com/eslint/eslint/tree/master/lib/rules/lines-around-comment.js)
* [Documentation source](https://github.com/eslint/eslint/tree/master/docs/rules/lines-around-comment.md)
