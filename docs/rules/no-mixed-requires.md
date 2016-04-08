---
title: Rule no-mixed-requires
layout: doc
translator: ILFront-End
proofreader: molee1905
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# Disallow Mixed Requires (no-mixed-requires)

# 禁用混合的 Requires (no-mixed-requires)

In the Node.js community it is often customary to separate initializations with calls to `require` modules from other variable declarations, sometimes also grouping them by the type of module. This rule helps you enforce this convention.

在 Node.js 社区，通常习惯把调用`require`模块的初始化和其它变量声明分开，有时也根据模块类型对它们进行分组。该规则帮助你强制执行这种约定。
 
## Rule Details

When this rule is enabled, each `var` statement must satisfy the following conditions:

当启用该规则时，每个`var`语句必须满足以下条件：

* either none or all variable declarations must be require declarations (default)

* 所有的变量要么全是 require 声明（默认），要么全不是 require 声明

* all require declarations must be of the same type (grouping)

* 所有的 require 声明必须是同一类型（grouping)

This rule distinguishes between six kinds of variable declaration types:

该规则区分六种类型的变量声明：

* `core`: declaration of a required [core module][1]

* `core`: require [核心模块][1]的声明

* `file`: declaration of a required [file module][2]

* `file`: require [文件模块][2]的声明

* `module`: declaration of a required module from the [node_modules folder][3]

* `module`: 从[node_modules 文件夹][3] require 一个模块的声明

* `computed`: declaration of a required module whose type could not be determined (either because it is computed or because require was called without an argument)

* `computed`: require 一个不能确定类型的模块的声明 (要么是因为它是推算出来的，要么是因为调用了无参的 require)

* `uninitialized`: a declaration that is not initialized

* `uninitialized`: 未初始化的声明

* `other`: any other kind of declaration

* `other`: 其它类型的声明

In this document, the first four types are summed up under the term *require declaration*.

在本文中，前四个类型属于 *require declaration*。

```js
var fs = require('fs'),        // "core"     \
    async = require('async'),  // "module"   |- these are "require declaration"s
    foo = require('./foo'),    // "file"     |
    bar = require(getName()),  // "computed" /
    baz = 42,                  // "other"
    bam;                       // "uninitialized"
```

## Options

This rule can have an object literal option whose two properties have `false` values by default.

该规则有一个选项，是个对象，它的两个属性值默认为`false`。

Configuring this rule with one boolean option `true` is deprecated.

使用一个布尔类型的选项`true`配置此规则已被弃用。

Examples of **incorrect** code for this rule with the default `{ "grouping": false, "allowCall": false }` options:

默认选项`{ "grouping": false, "allowCall": false }`的 **错误**代码示例：

```js
/*eslint no-mixed-requires: "error"*/

var fs = require('fs'),
    i = 0;

var async = require('async'),
    debug = require('diagnostics').someFunction('my-module'),
    eslint = require('eslint');
```

Examples of **correct** code for this rule with the default `{ "grouping": false, "allowCall": false }` options:

默认选项`{ "grouping": false, "allowCall": false }`的 **正确**代码示例：

```js
/*eslint no-mixed-requires: "error"*/

// only require declarations (grouping off)
var eventEmitter = require('events').EventEmitter,
    myUtils = require('./utils'),
    util = require('util'),
    bar = require(getBarModuleName());

// only non-require declarations
var foo = 42,
    bar = 'baz';

// always valid regardless of grouping because all declarations are of the same type
var foo = require('foo' + VERSION),
    bar = require(getBarModuleName()),
    baz = require();
```

### grouping

Examples of **incorrect** code for this rule with the `{ "grouping": true }` option:

`{ "grouping": true }`选项的 **错误**代码示例：

```js
/*eslint no-mixed-requires: ["error", { "grouping": true }]*/

// invalid because of mixed types "core" and "file"
var fs = require('fs'),
    async = require('async');

// invalid because of mixed types "file" and "unknown"
var foo = require('foo'),
    bar = require(getBarModuleName());
```

### allowCall

Examples of **incorrect** code for this rule with the `{ "allowCall": true }` option:

`{ "allowCall": true }`选项的 **错误**代码示例：

```js
/*eslint no-mixed-requires: ["error", { "allowCall": true }]*/

var async = require('async'),
    debug = require('diagnostics').someFunction('my-module'), /* allowCall doesn't allow calling any function */
    eslint = require('eslint');
```

Examples of **correct** code for this rule with the `{ "allowCall": true }` option:

`{ "allowCall": true }`选项的 **正确**代码示例：

```js
/*eslint no-mixed-requires: ["error", { "allowCall": true }]*/

var async = require('async'),
    debug = require('diagnostics')('my-module'),
    eslint = require('eslint');
```

## Known Limitations

* The implementation is not aware of any local functions with the name `require` that may shadow Node.js' global `require`.

* 该规则的实现不考虑本地名为`require`的函数可能会遮蔽 Node.js 的全局的`require`。

* Internally, the list of core modules is retrieved via `require("repl")._builtinLibs`. If you use different versions of Node.js for ESLint and your application, the list of core modules for each version may be different.The above mentioned `_builtinLibs` property became available in 0.8, for earlier versions a hardcoded list of module names is used as a fallback. If your version of Node.js is older than 0.6 that list may be inaccurate.

* 在内部，核心模块列表是通过`require("repl")._builtinLibs`检索的。如果你在 ESLint 和你的应用中使用不同的 Node.js 版本，每个版本的核心模块列表可能会不一样。上面提到的`_builtinLibs`在 0.8 版本中有效，在更早的版本中，将模块名一一列出作为一种回退机制。如果你的 Node.js 版本低于 0.6，则那个模块列表可能是不准确的。

## When Not To Use It

If you use a pattern such as [UMD][4] where the `require`d modules are not loaded in variable declarations, this rule will obviously do nothing for you.

如果你使用了类似[UMD][4]的模式，其 `require`的模块在变量声明时不会被加载，该规则明显对你没什么用。

[1]: http://nodejs.org/api/modules.html#modules_core_modules
[2]: http://nodejs.org/api/modules.html#modules_file_modules
[3]: http://nodejs.org/api/modules.html#modules_loading_from_node_modules_folders
[4]: https://github.com/umdjs/umd

## Version

This rule was introduced in ESLint 0.0.9.

该规则在 ESLint 0.0.9 中被引入。

## Resources

* [Rule source](https://github.com/eslint/eslint/tree/master/lib/rules/no-mixed-requires.js)
* [Documentation source](https://github.com/eslint/eslint/tree/master/docs/rules/no-mixed-requires.md)
