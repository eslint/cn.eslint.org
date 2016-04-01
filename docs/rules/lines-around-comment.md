---
title: Rule lines-around-comment
layout: doc
translator: molee1905
proofreader: molee1905
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# Enforce empty lines around comments (lines-around-comment)

# 强制注释周围有空行 (lines-around-comment)

Many style guides require empty lines before or after comments. The primary goal
of these rules is to make the comments easier to read and improve readability of the code.

很多风格指南要求在注释之前或之后要有空行。该规则的主要目标是使这些注释更易阅读，提高代码的可读性。

## Rule Details

This rule allows you to specify whether an empty line should be found
before or after a comment. It can be enabled separately for both block (`/*`)
and line (`//`) comments, and does not apply to comments that appear on the same
line as code.

该规则允许你指定在注释之前或之后是否应该有一行空行。它可以区分块级注释 (`/*`) 和单行注释(`//`)，但是不适用于注释和代码出现在同一行的情况。

By default an empty line is required above a block comment,
such as in the following example:

默认情况下，块级注释之上需要有一行空行。例如,下面的示例：

```js
var x = 0;

/**
 * The vertical position.
 */
var y = 10;
```

The following would *not* pass the rule:

以下示例*无法*通过该规则：

```js
var x = 0;
/* the vertical position */
var y = 10;
```

### Inline comments

Inline comments are always excluded from the rule.

内联注释不适用于此规则。

The following would be acceptable:

以下是可接受的：

```js
/*eslint lines-around-comment: 2*/

var x = 0;
var y = 10; /* the vertical position */
```

Empty lines are also not required at the beginning or end of a file.

在文件开头或末尾，空行不是必须的。

## Options

This rule has 10 options.

该规则有10个选项。

2 options for block comments:

块级注释2个选项：

* `beforeBlockComment` (enabled by default)
* `beforeBlockComment` (默认启用)
* `afterBlockComment`

2 options for line comments:
单行注释2个选项：

* `beforeLineComment`
* `afterLineComment`

6 options for exceptions:
例外情况6个选项：

* `allowBlockStart`
* `allowBlockEnd`
* `allowObjectStart`
* `allowObjectEnd`
* `allowArrayStart`
* `allowArrayEnd`

Any combination of these options may be applied at the same time.

这些选项的任何组合都可以同时起作用。

```json
{
    "lines-around-comment": [2, { "beforeBlockComment": true, "beforeLineComment": true }]
}
```

When set to `false` the option is simply ignored.

当设置为 `false` 时，该选项被忽略。

### Block Comments

Block comments are any comment that start with `/*` and need not extend to multiple lines.

块级注释以`/*`开头，不需要扩展到多行。

With both `beforeBlockComment` and `afterBlockComment` set to `true` the following code would not warn:

`beforeBlockComment` 和 `afterBlockComment`设置为 `true`时，以下代码不会发出警告：

```js
/*eslint lines-around-comment: [2, { "beforeBlockComment": true, "afterBlockComment": true }]*/

var night = "long";

/* what a great and wonderful day */

var day = "great"
```

This however would provide 2 warnings:

然而，下面的示例将发出 2 个警告：

```js
/*eslint lines-around-comment: [2, { "beforeBlockComment": true, "afterBlockComment": true }]*/

var night = "long";
/* what a great and wonderful day */
var day = "great"
```

With only `beforeBlockComment` set to `true` the following code
would not warn:

只设置`beforeBlockComment`为`true`的话，以下代码不会发出警告：

```js
/*eslint lines-around-comment: [2, { "beforeBlockComment": true }]*/

var night = "long";

/* what a great and wonderful day */
var day = "great"
```

But this would cause 1 warning:

但下面这个示例将会发出 1 个警告：

```js
/*eslint lines-around-comment: [2, { "beforeBlockComment": true }]*/

var night = "long";
/* what a great and wonderful day */
var day = "great"
```

### Line Comments

Line comments are any comments that start with `//`.

单行注释以`//`开始。

With both `beforeLineComment` and `afterLineComment` set to `true` the following code would not warn:

`beforeLineComment` 和 `afterLineComment`设置为 `true`时，以下代码不会发出警告：

```js
/*eslint lines-around-comment: [2, { "beforeLineComment": true, "afterLineComment": true }]*/

var night = "long";

// what a great and wonderful day

var day = "great"
```

With only `beforeLineComment` set to `true` the following code
would not warn:

只设置`beforeLineComment`为`true`时，以下代码不会发出警告：

```js
/*eslint lines-around-comment: [2, { "beforeLineComment": true }]*/

var night = "long";

// what a great and wonderful day
var day = "great"
```

### `allowBlockStart`

When this option is set to `true`, it allows the comment to be present at the start of any block statement without any space above it. This option can be useful when combined with options `beforeLineComment` and `beforeBlockComment` only.

当这个选项设置为`true`时，它允许注释出现在任何块语句开始的位置，且注释之上不需要有空行。当该选项只与`beforeLineComment` 和 `beforeBlockComment`组合使用时，会很有用。

With both `beforeLineComment` and `allowBlockStart` set to `true` the following code
would not warn:

`beforeLineComment` 和 `allowBlockStart`设置为 `true`时，以下代码不会发出警告：

```js
/*eslint lines-around-comment: [2, { "beforeLineComment": true, "allowBlockStart": true }]*/

function foo(){
    // what a great and wonderful day
    var day = "great"
    return day;
}
```

With both `beforeBlockComment` and `allowBlockStart` set to `true` the following code would not warn:

`beforeBlockComment` 和 `allowBlockStart`同时设置为 `true`时，以下代码不会发出警告：

```js
/*eslint lines-around-comment: [2, { "beforeBlockComment": true, "allowBlockStart": true }]*/

function foo(){
    /* what a great and wonderful day */
    var day = "great"
    return day;
}
```

### `allowBlockEnd`

When this option is set to `true`, it allows the comment to be present at the end of any block statement without any space below it. This option can be useful when combined with options `afterLineComment` and `afterBlockComment` only.

当这个选项设置为`true`时，它允许注释出现在任何块语句的末尾，且注释之下不需要空行。当该选项只与`afterLineComment` 和 `afterBlockComment` 结合使用时，会非常有用。

With both `afterLineComment` and `allowBlockEnd` set to `true` the following code would not warn:

`afterLineComment` 和 `allowBlockEnd`同时设置为`true`时，以下代码不会发出警告：

```js
/*eslint lines-around-comment: [2, { "afterLineComment": true, "allowBlockEnd": true }]*/

function foo(){
    var day = "great"
    return day;
    // what a great and wonderful day
}
```

With both `afterBlockComment` and `allowBlockEnd` set to `true` the following code
would not warn:

`afterBlockComment` 和 `allowBlockEnd`同时设置为`true`时，以下代码不会发出警告：

```js
/*eslint lines-around-comment: [2, { "afterBlockComment": true, "allowBlockEnd": true }]*/

function foo(){
    var day = "great"
    return day;

    /* what a great and wonderful day */
}
```

### `allowObjectStart`

When this option is set to `true`, it allows the comment to be present at the start of any object-like statement without any space above it. This option can be useful when combined with options `beforeLineComment` and `beforeBlockComment` only.

当这个选项设置为`true`时，它允许注释出现在类似对象的语句的开始位置，且注释之上不需要空行。当该选项只与`beforeLineComment` 和 `beforeBlockComment`结合使用时，会非常有用。

With both `beforeLineComment` and `allowObjectStart` set to `true` the following code would not warn:

`beforeLineComment` 和 `allowObjectStart`同时设置为`true`时，以下代码不会发出警告：

```js
/*eslint lines-around-comment: [2, { "beforeLineComment": true, "allowObjectStart": true }]*/

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

With both `beforeBlockComment` and `allowObjectStart` set to `true` the following code would not warn:

`beforeBlockComment` 和 `allowObjectStart`同时设置为`true`时，以下代码不会发出警告：

```js
/*eslint lines-around-comment: [2, { "beforeBlockComment": true, "allowObjectStart": true }]*/

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

### `allowObjectEnd`

When this option is set to `true`, it allows the comment to be present at the end of any object-like statement without any space below it. This option can be useful when combined with options `afterLineComment` and `afterBlockComment` only.

当这个选项设置为`true`时，它允许注释出现在类似对象的语句的末尾，且注释之后不需要空行。当该选项只与`afterLineComment` 和 `afterBlockComment`组合使用时，会非常有用。

With both `afterLineComment` and `allowObjectEnd` set to `true` the following code would not warn:

`afterLineComment` 和 `allowObjectEnd`同时设置为`true`时，以下代码不会发出警告：

```js
/*eslint lines-around-comment: [2, { "afterLineComment": true, "allowObjectEnd": true }]*/

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

With both `afterBlockComment` and `allowObjectEnd` set to `true` the following code would not warn:

`afterBlockComment` 和 `allowObjectEnd`同时设置为`true`时，以下代码不会发出警告：

```js
/*eslint lines-around-comment: [2, { "afterBlockComment": true, "allowObjectEnd": true }]*/

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

### `allowArrayStart`

When this option is set to `true`, it allows the comment to be present at the start of any array-like statement without any space above it. This option can be useful when combined with options `beforeLineComment` and `beforeBlockComment` only.

当这个选项设置为`true`时，它允许注释出现类似数组的语句的开始位置，且注释之上不需要空行。当该选项只与`beforeLineComment` 和 `beforeBlockComment`结合使用时，会非常有用。

With both `beforeLineComment` and `allowArrayStart` set to `true` the following code would not warn:

`beforeLineComment` 和 `allowArrayStart`同时设置为`true`时，以下代码不会发出警告：

```js
/*eslint lines-around-comment: [2, { "beforeLineComment": true, "allowArrayStart": true }]*/

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

With both `beforeBlockComment` and `allowArrayStart` set to `true` the following code would not warn:

`beforeBlockComment` 和 `allowArrayStart`同时设置为`true`时，以下代码不会发出警告：

```js
/*eslint lines-around-comment: [2, { "beforeBlockComment": true, "allowArrayStart": true }]*/

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

### `allowArrayEnd`

When this option is set to `true`, it allows the comment to be present at the end of any array-like statement without any space below it. This option can be useful when combined with options `afterLineComment` and `afterBlockComment` only.

当这个选项设置为`true`时，它允许注释出现类似数组的语句的开始位置，且注释之下不需要空行。当该选项只与`afterLineComment` 和 `afterBlockComment`结合使用时，会非常有用。

With both `afterLineComment` and `allowArrayEnd` set to `true` the following code would not warn:

`afterLineComment` 和 `allowArrayEnd`同时设置为`true`时，以下代码不会发出警告：

```js
/*eslint lines-around-comment: [2, { "afterLineComment": true, "allowArrayEnd": true }]*/

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

With both `afterBlockComment` and `allowArrayEnd` set to `true` the following code would not warn:

`afterBlockComment` 和 `allowArrayEnd`同时设置为`true`时，以下代码不会发出警告：

```js
/*eslint lines-around-comment: [2, { "afterBlockComment": true, "allowArrayEnd": true }]*/

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
 
## When Not To Use It

Many people enjoy a terser code style and don't mind comments bumping up against code. If you fall into that category this rule is not for you.

很多人喜欢一种简洁的代码风格，不介意代码中注释的风格。如果你也是这样的，此规则不适合你。

## Related Rules

* [space-before-blocks](space-before-blocks)
* [spaced-comment](spaced-comment)
* [spaced-line-comment](spaced-line-comment) (deprecated)

## Version

This rule was introduced in ESLint 0.22.0.

该规则在 ESLint 0.22.0 中被引入。

## Resources

* [Rule source](https://github.com/eslint/eslint/tree/master/lib/rules/lines-around-comment.js)
* [Documentation source](https://github.com/eslint/eslint/tree/master/docs/rules/lines-around-comment.md)
