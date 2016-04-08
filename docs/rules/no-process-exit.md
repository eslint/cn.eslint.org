---
title: Rule no-process-exit
layout: doc
translator: ILFront-End
proofreader: yanggao40
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# Disallow process.exit() (no-process-exit)

# 禁用 process.exit() (no-process-exit)

The `process.exit()` method in Node.js is used to immediately stop the Node.js process and exit. This is a dangerous operation because it can occur in any method at any point in time, potentially stopping a Node.js application completely when an error occurs. For example:

`process.exit()`方法在Node.js中被用于立即终止Node.js进程且退出。这是非常危险的操作，因为他能在任何方法任何时候出现，当发生错误时可能完全停止Node.js应用。如：

```js
if (somethingBadHappened) {
    console.error("Something bad happened!");
    process.exit(1);
}
```

This code could appear in any module and will stop the entire application when `somethingBadHappened` is truthy. This doesn't give the application any chance to respond to the error. It's usually better to throw an error and allow the application to handle it appropriately:

这段代码能出现在任何模块中，当`somethingBadHappened`为true时，将停止整个应用。不给应用任何相应错误的机会。通常较好地做法是抛出一个错误，允许应用妥善处理这个错误。

```js
if (somethingBadHappened) {
    throw new Error("Something bad happened!");
}
```

By throwing an error in this way, other parts of the application have an opportunity to handle the error rather than stopping the application altogether. If the error bubbles all the way up to the process without being handled, then the process will exit and a non-zero exit code will returned, so the end result is the same.

以这种方式抛出错误，应用程序的其他部分有机会处理错误，而不是全部终止程序。如果这个错误向上回退到进程顶部而未被处理，进程将退出并返回异常退出的错误码，所以最终的结果是一样的。

## Rule Details

This rule aims to prevent the use of `process.exit()` in Node.js JavaScript. As such, it warns whenever `process.exit()` is found in code.

此规则旨在阻止在Node.js中使用`process.exit()`。当在代码中发现`process.exit()`会报警告。

Examples of **incorrect** code for this rule:

**错误**代码示例：

```js
/*eslint no-process-exit: "error"*/

process.exit(1);
process.exit(0);
```

Examples of **correct** code for this rule:

**正确**代码示例：

```js
/*eslint no-process-exit: "error"*/

Process.exit();
var exit = process.exit;
```

## When Not To Use It

There may be a part of a Node.js application that is responsible for determining the correct exit code to return upon exiting. In that case, you should turn this rule off to allow proper handling of the exit code.

这可能是 Node.js 应用的一部分，负责正确的退出码并回退的决策。在这种情况下，你应该关闭规则来允许适当处理退出码。

## Version

This rule was introduced in ESLint 0.4.0.

此规则在 ESLint 0.4.0 中被引入。

## Resources

* [Rule source](https://github.com/eslint/eslint/tree/master/lib/rules/no-process-exit.js)
* [Documentation source](https://github.com/eslint/eslint/tree/master/docs/rules/no-process-exit.md)
