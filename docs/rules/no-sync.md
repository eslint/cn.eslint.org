---
title: Rule no-sync
layout: doc
translator: ILFront-End
proofreader: xkf521
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# Disallow Synchronous Methods (no-sync)

# 不支持同步方法 (no-sync)

In Node.js, most I/O is done through asynchronous methods. However, there are often synchronous versions of the asynchronous methods. For example, `fs.exists()` and `fs.existsSync()`. In some contexts, using synchronous operations is okay (if, as with ESLint, you are writing a command line utility). However, in other contexts the use of synchronous operations is considered a bad practice that should be avoided. For example, if you are running a high-travel web server on Node.js, you should consider carefully if you want to allow any synchronous operations that could lock up the server.

在 Node.js中，大多数的I/O操作是通过异步方法执行的。但是，经常有一些异步方法的同步版本。比如 `fs.exists()` 和 `fs.exitsSync()`。在一些环境中，使用这些同步方法是没有问题的(比如用当用命令行的方式使用ESLint比较实用)。但是在某些环境中，使用这些同步方法被认为是一个糟糕的习惯，这些习惯应该被避免。比如你在一个正在高并发的web服务器上运行Node.js，你应该仔细考虑下需要下，如果你想使用这些同步方法，确保这些同步操作不会阻塞服务器。

## Rule Details

This rule is aimed at preventing synchronous methods from being called in Node.js. It looks specifically for the method suffix "`Sync`" (as is the convention with Node.js operations).

The following patterns are considered problems:

这条规则旨在阻止使用这些Node.js中的同步方法。这些方法看起来比较特别，会在后缀加`Sync`(这是Node.js中的约定)

```js
/*eslint no-sync: 2*/

fs.existsSync(somePath);

var contents = fs.readFileSync(somePath).toString();
```

The following patterns are not considered problems:

以下得模式被认为是没有问题：


```js
/*eslint no-sync: 2*/

obj.sync();

async(function() {
    // ...
});
```

## When Not To Use It

If you want to allow synchronous operations in your script.

如果你想在你的脚本中使用同步操作

## Version

This rule was introduced in ESLint 0.0.9.

此规则在ESlint 0.0.9中被引用

## Resources

* [Rule source](https://github.com/eslint/eslint/tree/master/lib/rules/no-sync.js)
* [Documentation source](https://github.com/eslint/eslint/tree/master/docs/rules/no-sync.md)
