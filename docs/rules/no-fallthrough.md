---
title: no-fallthrough - Rules
layout: doc
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# Disallow Case Statement Fallthrough (no-fallthrough)

# 禁止 case 语句落空 (no-fallthrough)

The `switch` statement in JavaScript is one of the more error-prone constructs of the language thanks in part to the ability to "fall through" from one `case` to the next. For example:

在 JavaScript 中，`switch` 语句是一种比较容易出错的结构，在某种程度上这要归功于 `case` 的落空能力。比如：

```js
switch(foo) {
    case 1:
        doSomething();

    case 2:
        doSomethingElse();
}
```

In this example, if `foo` is `1`, then execution will flow through both cases, as the first falls through to the second. You can prevent this by using `break`, as in this example:

在这个例子中，如果 `foo` 值为 `1`，两个 case 语句都会执行。你可以使用 `break` 阻止这种情况，例如以下例子：

```js
switch(foo) {
    case 1:
        doSomething();
        break;

    case 2:
        doSomethingElse();
}
```

That works fine when you don't want a fallthrough, but what if the fallthrough is intentional, there is no way to indicate that in the language. It's considered a best practice to always indicate when a fallthrough is intentional using a comment which matches the `/falls?\s?through/i` regular expression:

当你不想要落空时是没有问题的，但是，如果落空是有意为之呢，没有办法来表明这一点。使用匹配 `/falls?\s?through/i` 的正则表达式的注释来表明落空是有意为之的，，被认为是一个最佳实际。

```js
switch(foo) {
    case 1:
        doSomething();
        // falls through

    case 2:
        doSomethingElse();
}

switch(foo) {
    case 1:
        doSomething();
        // fall through

    case 2:
        doSomethingElse();
}

switch(foo) {
    case 1:
        doSomething();
        // fallsthrough

    case 2:
        doSomethingElse();
}
```

In this example, there is no confusion as to the expected behavior. It is clear that the first case is meant to fall through to the second case.

在这个例子中，不会再引起困惑。很明显，第一个 case 的意思是要落空到第二个 case。

## Rule Details

This rule is aimed at eliminating unintentional fallthrough of one case to the other. As such, it flags any fallthrough scenarios that are not marked by a comment.

该规则旨在消除非故意 case 落空行为。因此，它会标记处没有使用注释标明的落空情况。

Examples of **incorrect** code for this rule:

**错误** 代码示例：

```js
/*eslint no-fallthrough: "error"*/

switch(foo) {
    case 1:
        doSomething();

    case 2:
        doSomething();
}
```

Examples of **correct** code for this rule:

**正确** 代码示例：

```js
/*eslint no-fallthrough: "error"*/

switch(foo) {
    case 1:
        doSomething();
        break;

    case 2:
        doSomething();
}

function bar(foo) {
    switch(foo) {
        case 1:
            doSomething();
            return;

        case 2:
            doSomething();
    }
}

switch(foo) {
    case 1:
        doSomething();
        throw new Error("Boo!");

    case 2:
        doSomething();
}

switch(foo) {
    case 1:
    case 2:
        doSomething();
}

switch(foo) {
    case 1:
        doSomething();
        // falls through

    case 2:
        doSomething();
}
```

Note that the last `case` statement in these examples does not cause a warning because there is nothing to fall through into.

注意，在上面的例子中，最后的 `case` 语句，不会引起警告，因为没有可落空的语句了。

## Options

This rule accepts a single options argument:

该规则接受单个选项参数：

* Set the `commentPattern` option to a regular expression string to change the test for intentional fallthrough comment
* 设置 `commentPattern` 选项为一个正则表达式字符串，来改变对有意为之的落空注释的检索

### commentPattern

Examples of **correct** code for the `{ "commentPattern": "break[\\s\\w]*omitted" }` option:

选项 `{ "commentPattern": "break[\\s\\w]*omitted" }` 的 **正确** 代码示例：

```js
/*eslint no-fallthrough: ["error", { "commentPattern": "break[\\s\\w]*omitted" }]*/

switch(foo) {
    case 1:
        doSomething();
        // break omitted

    case 2:
        doSomething();
}

switch(foo) {
    case 1:
        doSomething();
        // caution: break is omitted intentionally

    default:
        doSomething();
}
```

## When Not To Use It

If you don't want to enforce that each `case` statement should end with a `throw`, `return`, `break`, or comment, then you can safely turn this rule off.

如果你不想强制每个 `case` 语句中都要以 `throw`、`return`、`break`或者注释作为结束，你可以关闭此规则。

## Related Rules

* [default-case](default-case)

## Version

This rule was introduced in ESLint 0.0.7.

该规则在 ESLint 0.0.7 中被引入。

## Resources

* [Rule source](https://github.com/eslint/eslint/tree/master/lib/rules/no-fallthrough.js)
* [Documentation source](https://github.com/eslint/eslint/tree/master/docs/rules/no-fallthrough.md)
