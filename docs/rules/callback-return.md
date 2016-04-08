---
title: Rule callback-return
layout: doc
translator: ILFront-End
proofreader: qifeigit
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# Enforce Return After Callback (callback-return)

# 强制返回callback函数 (callback-return)

The callback pattern is at the heart of most I/O and event-driven programming
in JavaScript.
 
在 JavaScript 中，回调函数是大多数 I/O 和事件驱动函数的核心。

```js
function doSomething(err, callback) {
    if (err) {
        return callback(err);
    }
    callback();
}
```

To prevent calling the callback multiple times it is important to `return` anytime the callback is triggered outside of the main function body. Neglecting this technique often leads to issues where you do something more than once. For example, in the case of an HTTP request, you may try to send HTTP headers more than once leading Node.js to `throw` a `Can't render headers after they are sent to the client.` error.
 
为了防止多次调用回调函数，在主函数体外触发回调函数达到随时`return`是很重要的。忽略返回回调函数在多次执行操作的时常常出错。比如：在 HTTP 请求中，多次发送 HTTP 请求导致 Node.js 抛出异常：`Can't render headers after they are sent to the client.`

## Rule Details

This rule is aimed at ensuring that callbacks used outside of the main function block are always part-of or immediately preceding a `return` statement. This rule decides what is a callback based on the name of the function being called.

## Options

The rule takes a single option, which is an array of possible callback names. The default callback names are `callback`, `cb`, `next`.

Examples of **incorrect** code for this rule with the default `["callback", "cb", "next"]` option:

默认选项`["callback", "cb", "next"]`的 **错误**代码示例：

```js
/*eslint callback-return: "error"*/

function foo() {
    if (err) {
        callback(err);
    }
    callback();
}
```

Examples of **correct** code for this rule with the default `["callback", "cb", "next"]` option:

默认选项`["callback", "cb", "next"]`的 **正确**代码示例：

```js
/*eslint callback-return: "error"*/

function foo() {
    if (err) {
        return callback(err);
    }
    callback();
}
```

## Known Limitations

Because it is difficult to understand the meaning of a program through static analysis, this rule has limitations:

此规则只接收一个配置项，该配置项是一个由可能的回调函数名组成的数组。

* *false negatives* when this rule reports correct code, but the program calls the callback more than one time (which is incorrect behavior)
* *false positives* when this rule reports incorrect code, but the program calls the callback only one time (which is correct behavior)

### Passing the callback by reference

The static analysis of this rule does not detect that the program calls the callback if it is an argument of a function (for example,  `setTimeout`).

有一些不好的情况是此规则不起作用，甚至有些情况是即使你正确的使用了回调函数，但还是报警告。这些问题多数出现在很难通过静态分析就能理解代码含义的地方。

Example of a *false negative* when this rule reports correct code:

```js
/*eslint callback-return: "error"*/

function foo(callback) {
    if (err) {
        setTimeout(callback, 0); // this is bad, but WILL NOT warn
    }
    callback();
}
```

### Triggering the callback within a nested function

The static analysis of this rule does not detect that the program calls the callback from within a nested function or an immediately-invoked function expression (IIFE).

Example of a *false negative* when this rule reports correct code:

```js
/*eslint callback-return: "error"*/

function foo(callback) {
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

Example of a *false positive* when this rule reports incorrect code:

```js
/*eslint callback-return: "error"*/

function foo(callback) {
    if (err) {
        callback(err); // this is fine, but WILL warn
    } else {
        callback();    // this is fine, but WILL warn
    }
}
```

## When Not To Use It

There are some cases where you might want to call a callback function more than once. In those cases this rule may lead to incorrect behavior. In those cases you may want to reserve a special name for those callbacks and not include that in the list of callbacks that trigger warnings.
 
在某些情况下可能需要多次调用回调函数。在这些情况下，此规则可能会导致不正确的行为。在这些情况下，你可能想给那些回调保留一个特别的名字，并且不包含在触发警告的回调函数名单里。

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
