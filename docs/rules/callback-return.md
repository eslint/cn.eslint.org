---
title: callback-return - Rules
layout: doc
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# Enforce Return After Callback (callback-return)

# 强制返回callback函数 (callback-return)

The callback pattern is at the heart of most I/O and event-driven programming
in JavaScript.
 
在 JavaScript 中，回调模式是大多数 I/O 和事件驱动编程的核心。

```js
function doSomething(err, callback) {
    if (err) {
        return callback(err);
    }
    callback();
}
```

To prevent calling the callback multiple times it is important to `return` anytime the callback is triggered outside
 of the main function body. Neglecting this technique often leads to issues where you do something more than once.
 For example, in the case of an HTTP request, you may try to send HTTP headers more than once leading Node.js to `throw`
 a `Can't render headers after they are sent to the client.` error.
 
为了防止多次调用回调函数，在主函数体外，任何时候触发回调函数使用 `return` 语句是很重要的。忽视这个技巧，常常会导致问题出现。比如：在 HTTP 请求中，你可能试图多次发送 HTTP 请求导致 Node.js 抛出 `Can't render headers after they are sent to the client.`错误。

## Rule Details

This rule is aimed at ensuring that callbacks used outside of the main function block are always part-of or immediately
preceding a `return` statement. This rule decides what is a callback based on the name of the function being called.

该规则只在保证在主函数外使用的回调函数是 `return` 语句的一部分或紧随 `return` 语句。该规则决定回调函数的名称。 

## Options

The rule takes a single option - an array of possible callback names - which may include object methods. The default callback names are `callback`, `cb`, `next`.

该规则只有一个选项，是个数组，包含可能的回调函数名称，可能包含对象方法。默认的回调函数名称是 `callback`，`cb`，`next`。

### Default callback names

Examples of **incorrect** code for this rule with the default `["callback", "cb", "next"]` option:

默认选项`["callback", "cb", "next"]`的 **错误** 代码示例：

```js
/*eslint callback-return: "error"*/

function foo(err, callback) {
    if (err) {
        callback(err);
    }
    callback();
}
```

Examples of **correct** code for this rule with the default `["callback", "cb", "next"]` option:

默认选项`["callback", "cb", "next"]`的 **正确** 代码示例：

```js
/*eslint callback-return: "error"*/

function foo(err, callback) {
    if (err) {
        return callback(err);
    }
    callback();
}
```

### Supplied callback names

Examples of **incorrect** code for this rule with the option `["done", "send.error", "send.success"]`:

选项`["done", "send.error", "send.success"]`的 **错误** 代码示例：

```js
/*eslint callback-return: ["error", ["done", "send.error", "send.success"]]*/

function foo(err, done) {
    if (err) {
        done(err);
    }
    done();
}

function bar(err, send) {
    if (err) {
        send.error(err);
    }
    send.success();
}
```

Examples of **correct** code for this rule with the option `["done", "send.error", "send.success"]`:

选项`["done", "send.error", "send.success"]`的 **正确** 代码示例：

```js
/*eslint callback-return: ["error", ["done", "send.error", "send.success"]]*/

function foo(err, done) {
    if (err) {
        return done(err);
    }
    done();
}

function bar(err, send) {
    if (err) {
        return send.error(err);
    }
    send.success();
}
```

## Known Limitations

Because it is difficult to understand the meaning of a program through static analysis, this rule has limitations:

由于很难通过静态分析理解程序的意思，该规则也有它的局限性：

* *false negatives* when this rule reports correct code, but the program calls the callback more than one time (which is incorrect behavior)
* *false negatives* 该规则报告了正确的代码，但程序多次调用了回调函数（不正确的行为）
* *false positives* when this rule reports incorrect code, but the program calls the callback only one time (which is correct behavior)
* *false positives* 该规则报告了错误的代码，但程序只调用了一次回调函数（正确的行为）

### Passing the callback by reference

The static analysis of this rule does not detect that the program calls the callback if it is an argument of a function (for example,  `setTimeout`).

该规则的静态分析没有检测回调函数的参数如果是个函数的情况（例如，`setTimeout`）。

Example of a *false negative* when this rule reports correct code:

当该规则报告了正确的代码时，*false negative*的示例：

```js
/*eslint callback-return: "error"*/

function foo(err, callback) {
    if (err) {
        setTimeout(callback, 0); // this is bad, but WILL NOT warn
    }
    callback();
}
```

### Triggering the callback within a nested function

The static analysis of this rule does not detect that the program calls the callback from within a nested function or an immediately-invoked function expression (IIFE).

该规则的静态分析没有检测回调函数来自嵌套函数或是个立即执行函数（IIFE）。

Example of a *false negative* when this rule reports correct code:

当该规则报告了正确的代码时，*漏报*的示例：

```js
/*eslint callback-return: "error"*/

function foo(err, callback) {
    if (err) {
        process.nextTick(function() {
            return callback(); // this is bad, but WILL NOT warn
        });
    }
    callback();
}
```

### If/else statements

The static analysis of this rule does not detect that the program calls the callback only one time in each branch of an `if` statement.

该规则的静态分析没有检测回调函数在 `if` 语句的每个分支只调用一次的情况。

Example of a *false positive* when this rule reports incorrect code:

当该规则报告了正确的代码时，*漏报*的示例：

```js
/*eslint callback-return: "error"*/

function foo(err, callback) {
    if (err) {
        callback(err); // this is fine, but WILL warn
    } else {
        callback();    // this is fine, but WILL warn
    }
}
```

## When Not To Use It

There are some cases where you might want to call a callback function more than once. In those cases this rule
 may lead to incorrect behavior. In those cases you may want to reserve a special name for those callbacks and
 not include that in the list of callbacks that trigger warnings.

在某些情况下你可能需要多次调用回调函数。在这些情况下，此规则可能会导致错误的行为。在这些情况下，你可能想给那些回调保留一个特别的名字，并且不包含在触发警告的回调函数列表里。

## Further Reading

* [The Art Of Node: Callbacks](https://github.com/maxogden/art-of-node#callbacks)
* [Nodejitsu: What are the error conventions?](http://docs.nodejitsu.com/articles/errors/what-are-the-error-conventions)

## Related Rules

* [handle-callback-err](handle-callback-err)

## Version

This rule was introduced in ESLint 1.0.0-rc-1.

此规则在 ESLint 1.0.0-rc-1 被引入。

## Resources

* [Rule source](https://github.com/eslint/eslint/tree/master/lib/rules/callback-return.js)
* [Documentation source](https://github.com/eslint/eslint/tree/master/docs/rules/callback-return.md)
