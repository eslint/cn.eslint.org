---
title: no-restricted-modules - Rules
layout: doc
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# Disallow Node.js modules (no-restricted-modules)

# 禁止 Node.js 模块 (no-restricted-modules)

A module in Node.js is a simple or complex functionality organized in a JavaScript file which can be reused throughout the Node.js
application. The keyword `require` is used in Node.js/CommonJS to import modules into an application. This way you can have dynamic loading where the loaded module name isn't predefined /static, or where you conditionally load a module only if it's "truly required".

Node.js 中的模块是一个在 JavaScript 文件中组织的简单或复杂的功能，可以在 Node.js 中复用的应用。Node.js/CommonJS 中的关键字 `require` 用来导入模块到应用中。这样，你就可以有动态加载，其中加载的模块名称不是预定义的/静态的，或者只有在真正需要的情况下才有条件地加载模块。

Why would you want to restrict a module?

为什么想要限制一个模块？

Disallowing usage of specific Node.js modules can be useful if you want to limit the available methods a developer can use. For example, you can block usage of the `fs` module if you want to disallow file system access.

如果你想限制开发人员可以使用的方法，禁用特定的 Node.js 模块的使用可能非常有用。例如，如果你想禁止文件系统访问，你可以阻塞 `fs` 模块的使用。

## Rule Details

This rule allows you to specify modules that you don’t want to use in your application.

这个规则允许你指定在应用程序中不希望使用的模块。

## Options

The rule takes one or more strings as options: the names of restricted modules.

该规则有一个或多个字符串作为选项：受限制的模块名称。

```json
"no-restricted-modules": ["error", "foo-module", "bar-module"]
```

It can also take an object with lists of `paths` and gitignore-style `patterns` strings.

它还可以有一个对象，带有 `paths` 和 gitignore 风格的 `patterns` 字符串列表。

```json
"no-restricted-modules": ["error", { "paths": ["foo-module", "bar-module"] }]
```

```json
"no-restricted-modules": ["error", {
    "paths": ["foo-module", "bar-module"],
    "patterns": ["foo-module/private/*", "bar-module/*","!baz-module/good"]
}]
```

You may also specify a custom message for any paths you want to restrict as follows:

你还可以为您想要限制的路径指定一个自定义消息:

```json
"no-restricted-modules": ["error", [{
  "name": "foo-module",
  "message": "Please use bar-module instead."
  }]
]
```

or like this:

或像这样：

```json
"no-restricted-modules": ["error",{
"paths":[{
  "name": "foo-module",
  "message": "Please use bar-module instead."
  }]
}]
```

The custom message will be appended to the default error message. Please note that you may not specify custom error messages for restricted patterns as a particular module may match more than one pattern.

自定义消息将附加到默认的错误消息。请注意，你可能没有为受限模式指定自定义错误消息，因为特定模块可能匹配多个模式。

To restrict the use of all Node.js core modules (via https://github.com/nodejs/node/tree/master/lib):

限制所有 Node.js 核心模块(通过 https://github.com/nodejs/node/tree/master/lib) 的使用：

```json
{
    "no-restricted-modules": ["error",
        "assert","buffer","child_process","cluster","crypto","dgram","dns","domain","events","freelist","fs","http","https","module","net","os","path","punycode","querystring","readline","repl","smalloc","stream","string_decoder","sys","timers","tls","tracing","tty","url","util","vm","zlib"
    ]
}
```

## Examples

Examples of **incorrect** code for this rule  with sample `"fs", "cluster","loadash"` restricted modules:

限制 `"fs", "cluster","loadash"` 模块的 **错误** 代码示例：

```js
/*eslint no-restricted-modules: ["error", "fs", "cluster"]*/

var fs = require('fs');
var cluster = require('cluster');
```

```js
/*eslint no-restricted-modules: ["error", {"paths": ["cluster"] }]*/

var cluster = require('cluster');
```

```js
/*eslint no-restricted-modules: ["error", { "patterns": ["lodash/*"] }]*/

var pick = require('lodash/pick');
```

Examples of **correct** code for this rule with sample `"fs", "cluster","loadash"` restricted modules:

限制 `"fs", "cluster","loadash"` 模块的 **正确** 代码示例：

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
var pick = require('lodash/pick');
```

## Version

This rule was introduced in ESLint 0.6.0.

该规则在 ESLint 0.6.0 中被引入。

## Resources

* [Rule source](https://github.com/eslint/eslint/tree/master/lib/rules/no-restricted-modules.js)
* [Documentation source](https://github.com/eslint/eslint/tree/master/docs/rules/no-restricted-modules.md)
