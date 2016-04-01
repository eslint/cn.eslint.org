---
title: Rule no-path-concat
layout: doc
translator: ILFront-End
proofreader: yanggao40
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->
# Disallow string concatenation when using `__dirname` and `__filename` (no-path-concat)

# 当使用 `_dirname` 和 `_filename` 时不允许字符串拼接 (no-path-concat)

In Node.js, the `__dirname` and `__filename` global variables contain the directory path and the file path of the currently executing script file, respectively. Sometimes, developers try to use these variables to create paths to other files, such as:

在Node.js中全局变量`_dirname` 和 `_filename` 分别代表当前执行脚本的目录路径以及文件路径。有时候开发者尝试使用这些变量去创建路径或者其他的文件，比如:

```js
var fullPath = __dirname + "/foo.js";
```

However, there are a few problems with this. First, you can't be sure what type of system the script is running on. Node.js can be run on any computer, including Windows, which uses a different path separator. It's very easy, therefore, to create an invalid path using string concatenation and assuming Unix-style separators. There's also the possibility of having double separators, or otherwise ending up with an invalid path.

但是，有一些问题。首先，不能确定脚本在哪种系统中运行。Node.js 可以在任何电脑，包括windows，它使用不同路径分隔符。这是很容易的事情，然而很可能会使用Unix路径分隔符拼接处的路径会创建出一个无效的路径。也有可能有两种分隔符或者拼接出其他无效的路径。

In order to avoid any confusion as to how to create the correct path, Node.js provides the `path` module. This module uses system-specific information to always return the correct value. So you can rewrite the previous example as:

为了避免混淆并且创建正确的路径，Node.js提供了`path`模块。这个模块使用特殊的系统信息来返回正确的值。可以修改下面的例子，例如:


```js
var fullPath = path.join(__dirname, "foo.js");
```

This example doesn't need to include separators as `path.join()` will do it in the most appropriate manner. Alternately, you can use `path.resolve()` to retrieve the fully-qualified path:

这个例子不需要引入分隔符因为`path.join()`将会用最合适的方式引入分隔符。相对的,你可以使用`path.resolve()`得到有效的完整路径。

```js
var fullPath = path.resolve(__dirname, "foo.js");
```

Both `path.join()` and `path.resolve()` are suitable replacements for string concatenation wherever file or directory paths are being created.

无论是文件还是目录的创建，`path.jonin()` 和 `path.reslove()`都比较合适替代字符串拼接。

## Rule Details

This rule aims to prevent string concatenation of directory paths in Node.js

这条规则旨在阻止在Node.js中使用字符串拼接路径。

The following patterns are considered problems:

以下的模式被认为是有问题的:

```js
/*eslint no-path-concat: 2*/

var fullPath = __dirname + "/foo.js";

var fullPath = __filename + "/foo.js";

```

The following patterns are not considered problems:

以下模式是被认为是没问题的:

```js
/*eslint no-path-concat: 2*/

var fullPath = dirname + "/foo.js";
```

## When Not To Use It

If you want to allow string concatenation of path names.

当你想允许拼接路径的名字时。

## Version

This rule was introduced in ESLint 0.4.0.

这条规则在ESLint 0.4.0中引入。

## Resources

* [Rule source](https://github.com/eslint/eslint/tree/master/lib/rules/no-path-concat.js)
* [Documentation source](https://github.com/eslint/eslint/tree/master/docs/rules/no-path-concat.md)
