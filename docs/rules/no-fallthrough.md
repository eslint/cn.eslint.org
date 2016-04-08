---
title: Rule no-fallthrough
layout: doc
translator: fengnana
proofreader: molee1905
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# Disallow Case Statement Fallthrough (no-fallthrough)

# 禁止 case 语句落空 (no-fallthrough)

The `switch` statement in JavaScript is one of the more error-prone constructs of the language thanks in part to the ability to "fall through" from one `case` to the next. For example:

在 JavaScript 中，`switch`语句是一种比较容易出错的语言结构，一部分要归功于从一个`case`落空到下一个的能力。比如：

```js
switch(foo) {
    case 1:
        doSomething();

    case 2:
        doSomethingElse();
}
```

In this example, if `foo` is `1`, then execution will flow through both cases, as the first falls through to the second. You can prevent this by using `break`, as in this example:

在这个例子中，如果`foo`值为`1`，两个 case 语句都会执行。你可以使用`break`阻止这种情况，例如以下例子：

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

当你不想要 case 语句落空时，以上代码允许正常，但是没有办法表明落空功能是有意为之。使用注释表明这一点被认为是个很好的实践。

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

在这个例子中，意图清晰明了。第一个用例很明显想从第一个 case 落到 第二个 case。

## Rule Details

This rule is aimed at eliminating unintentional fallthrough of one case to the other. As such, it flags and fallthrough scenarios that are not marked by a comment.

该规则旨在消除无意的从一个 case 落到另一个 case 的行为。因此，它会标记处没有使用注释标明的落空情况。

Examples of **incorrect** code for this rule:

**错误**代码示例：

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

**正确**代码示例：

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

注意下，在上面的例子中，最后的`case`语句，不会引起警告，因为没有下文需要到达。

## When Not To Use It

If you don't want to enforce that each `case` statement should end with a `throw`, `return`, `break`, or comment, then you can safely turn this rule off.

如果你不想强制每个`case`语句中都要以`throw`，`return`，`break`或者注释作为结束，你可以关闭此规则。

## Related Rules

* [default-case](default-case)

## Version

This rule was introduced in ESLint 0.0.7.

此规则在 ESLint 0.0.7 中被引入。

## Resources

* [Rule source](https://github.com/eslint/eslint/tree/master/lib/rules/no-fallthrough.js)
* [Documentation source](https://github.com/eslint/eslint/tree/master/docs/rules/no-fallthrough.md)
