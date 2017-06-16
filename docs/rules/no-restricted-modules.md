---
title: no-restricted-modules - Rules
layout: doc
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# Disallow Node.js modules (no-restricted-modules)

# 禁用 Node.js 模块 (no-restricted-modules)

Disallowing usage of specific Node.js modules can be useful if you want to control the available methods, a developer can use, to implement a feature.

如果你想控制可用的方法，限制开发者的使用范围，或者实现一个特性，可以通过禁用指定的 Node.js 模块来实现。 

This way you can block usage of the `fs` module if you want to disallow file system access.
Blocking the `os` module can be useful if you don't want to allow any operating system specific code.

如果你想禁止访问文件系统，可以禁用 `fs` 模块的使用。
如果你想禁止一些特殊的系统操作，禁用 `os` 模块将会起作用。

## Rule Details

This rule allows you to specify modules that you don't want to use in your application.

这条规则允许你可以在程序中指定你不想使用的模块。

## Options

The rule takes one or more strings as options: the names of restricted modules.

该规则可以用一个或多个字符串作为选项：限制的模块的名称。

It can also take an object with lists of "paths" and gitignore-style "patterns" strings.

也可以使用一个包含路径列表或 gitignore 风格模式的字符串的列表的对象。

For example, to restrict the use of all Node.js core modules (via https://github.com/nodejs/node/tree/master/lib):

例如，限制使用 Node.js 所有核心模块 ([查看](https://github.com/nodejs/node/tree/master/lib)):

```json
{
    "no-restricted-modules": ["error",
        "assert","buffer","child_process","cluster","crypto","dgram","dns","domain","events","freelist","fs","http","https","module","net","os","path","punycode","querystring","readline","repl","smalloc","stream","string_decoder","sys","timers","tls","tracing","tty","url","util","vm","zlib"
    ]
}
```

Examples of **incorrect** code for this rule with sample `"fs", "cluster"` restricted modules:

限制 `"fs", "cluster"` 模块的 **错误** 代码示例：

```js
/*eslint no-restricted-modules: ["error", "fs", "cluster"]*/

var fs = require('fs');
var cluster = require(' cluster ');
```

```js
/*eslint no-restricted-modules: ["error", { "paths": ["cluster"] }]*/

var cluster = require('cluster');
```

```js
/*eslint no-restricted-modules: ["error", { "patterns": ["lodash/*"] }]*/

var cluster = require('lodash/pick');
```

Examples of **correct** code for this rule with sample `"fs", "cluster"` restricted modules:

限制 `"fs", "cluster"` 模块的 **正确** 代码示例：

```js
/*eslint no-restricted-modules: ["error", "fs", "cluster"]*/

var crypto = require('crypto');
```

```js
/*eslint no-restricted-modules: ["error", {
    "paths": ["fs", "cluster"],
    "patterns": ["lodash/*", "!lodash/pick"]
}]*/

var crypto = require('crypto');
var eslint = require('lodash/pick');
```

## Version

This rule was introduced in ESLint 0.6.0.

该规则在 ESlint 0.6.0 中被引入。

## Resources

* [Rule source](https://github.com/eslint/eslint/tree/master/lib/rules/no-restricted-modules.js)
* [Documentation source](https://github.com/eslint/eslint/tree/master/docs/rules/no-restricted-modules.md)
