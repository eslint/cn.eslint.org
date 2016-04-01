---
title: Rule no-restricted-modules
layout: doc
translator: ILFront-End
proofreader: yanggao40
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# Disallow Node modules (no-restricted-modules)

# 禁止节点模块 (no-restricted-modules)

Disallowing usage of specific node modules can be useful if you want to control the available methods, a developer can
use, to implement a feature.

如果你想控制可用的放大，禁止使用特殊的节点是有用的，开发者可以使用实现一个特征。

This way you can block usage of the `fs` module if you want disallow file system access.
Blocking the `os` module can be useful if you don't want to allow any operating system specific code.

如果您想禁止访问文件系统，可以禁用`fs`模块的使用。
如果您想禁止一些特殊的系统操作，禁用`os`模块将会起作用。

## Rule Details

This rule allows you to specify modules that you don't want to use in your application.

这条规则允许您可以在程序中禁用不想使用的模块

To restrict the use of all Node.js core modules (via https://github.com/nodejs/node/tree/master/lib):

限制使用Node.js所有核心模块 (查看 https://github.com/nodejs/node/tree/master/lib):

```json
    "no-restricted-modules": [2,
         "assert","buffer","child_process","cluster","crypto","dgram","dns","domain","events","freelist","fs","http","https","module","net","os","path","punycode","querystring","readline","repl","smalloc","stream","string_decoder","sys","timers","tls","tracing","tty","url","util","vm","zlib"
    ],
```

## Options

The syntax to specify restricted modules looks like this:

指定不支持的模块语法示例:

```json
"no-restricted-modules": [2, <...moduleNames>]
```

The following patterns are considered problems:

以下的模式被认为是有问题的:

```js
/*eslint no-restricted-modules: [2, "fs"]*/

var fs = require('fs');
```

```js
/*eslint no-restricted-modules: [2, "cluster"]*/

var fs = require(' cluster ');
```

The following patterns are not considered problems:

以下的模式被认为是没有问题的:

```js
/*eslint no-restricted-modules: [2, "fs"]*/

var crypto = require('crypto');
```

## Version

This rule was introduced in ESLint 0.6.0.

此规则在 ESlint 0.6.0 中被引用

## Resources

* [Rule source](https://github.com/eslint/eslint/tree/master/lib/rules/no-restricted-modules.js)
* [Documentation source](https://github.com/eslint/eslint/tree/master/docs/rules/no-restricted-modules.md)
