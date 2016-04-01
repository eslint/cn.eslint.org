---
title: Rule callback-return
layout: doc
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# Enforce Return After Callback (callback-return)

# 强制返回callback函数 (callback-return)

The callback pattern is at the heart of most I/O and event-driven programming
 in JavaScript.
 
 回调函数是大多数I/O和JavaScript事件驱动函数的心脏。

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
 For example, in the case of an HTTP request, you may try to send HTTP headers more than once leading node.js to `throw`
 a `Can't render headers after they are sent to the client.` error.
 
 为了防止多次调用回调函数，在主函数体外触发回调函数达到随时`return`是很重要的。忽略返回回调函数在多次执行操作的时常常出错。比如：在HTTP请求中，多次发送http请求导致node.js抛出异常：`Can't render headers after they are sent to the client.`

## Rule Details

This rule is aimed at ensuring that callbacks used outside of the main function block are always part-of or immediately
preceding a `return` statement. This rules decides what is a callback based on the name of the function being called.
By default the rule treats `cb`, `callback`, and `next` as callbacks.

此规则旨在确保在主函数体外使用的回调函数总是能立即返回状态。此规则决定基于函数名被调用的函数是回调函数。默认情况下,把`cb`,`callback`,和`next`作为回调函数。

The following patterns are considered problems:

以下模式被认为是有问题的：

```js
/*eslint callback-return: 2*/

function foo() {
    if (err) {
        callback(err);
    }
    callback();
}
```

The following patterns are not considered problems:

以下模式被认为是没有问题的：

```js
/*eslint callback-return: 2*/

function foo() {
    if (err) {
        return callback(err);
    }
    callback();
}
```

## Options

The rule takes a single option, which is an array of possible callback names.

此规则只接收一个配置项，是一个数组，包含可能的回调函数名。

```json
callback-return: [2, ["callback", "cb", "next"]]
```

## Known Limitations

There are several cases of bad behavior that this rule will not catch and even a few cases where
the rule will warn even though you are handling your callbacks correctly. Most of these issues arise
in areas where it is difficult to understand the meaning of the code through static analysis.

有一些不好的情况是此规则不起作用，甚至有些情况是即使你正确的使用了回调函数，但还是报警告。这些问题多数出现在很难通过静态分析就能理解代码含义的地方。

### Passing the Callback by Reference

Here is a case where we pass the callback to the `setTimeout` function. Our rule does not detect this pattern, but
it is likely a mistake.

这有一种情况，我们在`setTimeout`上执行回调。我们的规则没有检测到这种模式，但它可能是一个错误。

```js
/*eslint callback-return: 2*/

function foo(callback) {
    if (err) {
        setTimeout(callback, 0); // this is bad, but WILL NOT warn
    }
    callback();
}
```

### Triggering the Callback within a Nested Function

If you are calling the callback from within a nested function or an immediately invoked
function expression, we won't be able to detect that you're calling the callback and so
we won't warn.

如果你在函数嵌套里或者是立即执行函数表达式中调用回调函数，规则察觉不到你调用了回调函数，所以会报警告。

```js
/*eslint callback-return: 2*/

function foo(callback) {
    if (err) {
        process.nextTick(function() {
            return callback(); // this is bad, but WILL NOT warn
        });
    }
    callback();
}
```

### If/Else Statements

Here is a case where you're doing the right thing in making sure to only `callback()` once, but because of the
difficulty in determining what you're doing, this rule does not allow for this pattern.

有这样一种情况，你正在做正确的事情确保`callback()`执行一次，但是确定你做什么是有有难度的，此规则不允许这种形式。

```js
/*eslint callback-return: 2*/

function foo(callback) {
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
 
在某些情况下可能需要调用多次回调函数。在这些情况下，此规则可能会导致不正确的行为。在这种情况下，你可能想保留一个特别的名字对于那些回调，并没有包括触发警告的回调函数名单。

## Further Reading

* [The Art Of Node: Callbacks](https://github.com/maxogden/art-of-node#callbacks)
* [Nodejitsu: What are the error conventions?](http://docs.nodejitsu.com/articles/errors/what-are-the-error-conventions)

## Related Rules

* [handle-callback-err](handle-callback-err)

## Version

This rule was introduced in ESLint 1.0.0-rc-1.

此规则在1.0.0-rc-1被引入。

## Resources

* [Rule source](https://github.com/eslint/eslint/tree/master/lib/rules/callback-return.js)
* [Documentation source](https://github.com/eslint/eslint/tree/master/docs/rules/callback-return.md)
