---
title: no-restricted-imports - Rules
layout: doc
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# Disallow specific imports (no-restricted-imports)

# 禁用特定的 import (no-restricted-imports)

Imports are an ES6/ES2015 standard for making the functionality of other modules available in your current module. In CommonJS this is implemented through the require() call which makes this ESLint rule roughly equivalent to its CommonJS counterpart `no-restricted-modules`.

import 是 ES6/ES2015 的一个标准，用来在你的当前模块引入其他模块。这在 CommonJS 中是通过调用 require() 来实现的，使得该规则大致相当于 CommonJS 对应的 `no-restricted-modules` 规则。

Why would you want to restrict imports?

为什么要限制 import ?

* Some imports might not make sense in a particular environment. For example, Node.js' `fs` module would not make sense in an environment that didn't have a file system.
* 某些 import 在特定的环境下毫无意义。比如，Node.js 中的 `fs` 模块在不包含文件系统的环境下，毫无意义。
* Some modules provide similar or identical functionality, think `lodash` and `underscore`. Your project may have standardized on a module. You want to make sure that the other alternatives are not being used as this would unnecessarily bloat the project and provide a higher maintenance cost of two dependencies when one would suffice.
* 有些模块提供相似或相同的功能，比如 `lodash` 和 `underscore`。你的项目可能已经模块化了。你想确保其他的替代方案不会被使用，因为会造成不必要的项目体积膨胀，也会使明明一个可以满足需求，却要维护两个依赖，造成维护成本过高。

## Rule Details

This rule allows you to specify imports that you don't want to use in your application.

该规则允许你指定你不想在你的应用中使用的 import。

## Options

The syntax to specify restricted imports looks like this:

像这样指定受限制的 import：

```json
"no-restricted-imports": ["error", "import1", "import2"]
```

or like this:

或像这样：

```json
"no-restricted-imports": ["error", { "paths": ["import1", "import2"] }]
```

When using the object form, you can also specify an array of gitignore-style patterns:

当使用对象格式时，还可以指定一组 gitignore 风格的模式：

```json
"no-restricted-imports": ["error", {
    "paths": ["import1", "import2"],
    "patterns": ["import1/private/*", "import2/*", "!import2/good"]
}]
```

You may also specify a custom message for any paths you want to restrict as follows:

你也可以为你想要限制的路径指定一个自定义消息：

```json
"no-restricted-imports": ["error", [{
  "name": "import-foo",
  "message": "Please use import-bar instead."
}]]
```

or like this:

或像这样：

```json
"no-restricted-imports": ["error", {
  "paths": [{
    "name": "import-foo",
    "message": "Please use import-bar instead."
  }]
}]
```

or like this if you need to restrict only certain imports from a module:

或者像这样，如果你需要限制从一个模块中的某一个导入：

```json
"no-restricted-imports": ["error", {
  "paths": [{
    "name": "import-foo",
    "importNames": ["Bar"],
    "message": "Please use Bar from /import-bar/baz/ instead."
  }]
}]
```

The custom message will be appended to the default error message. Please note that you may not specify custom error messages for restricted patterns as a particular import may match more than one pattern.

自定义消息将附加到默认的错误消息。请注意，你可能没有为受限模式指定自定义错误消息，因为特定的导入可能匹配多个模式。

To restrict the use of all Node.js core imports (via https://github.com/nodejs/node/tree/master/lib):

(通过https://github.com/nodejs/node/tree/master/lib)限制所有 Node.js 核心导入的使用：

```json
    "no-restricted-imports": ["error",
         "assert","buffer","child_process","cluster","crypto","dgram","dns","domain","events","freelist","fs","http","https","module","net","os","path","punycode","querystring","readline","repl","smalloc","stream","string_decoder","sys","timers","tls","tracing","tty","url","util","vm","zlib"
    ],
```

## Examples

Examples of **incorrect** code for this rule:

**错误** 代码示例：

```js
/*eslint no-restricted-imports: ["error", "fs"]*/

import fs from 'fs';
```

```js
/*eslint no-restricted-imports: ["error", { "paths": ["cluster"] }]*/

import cluster from 'cluster';
```

```js
/*eslint no-restricted-imports: ["error", { "patterns": ["lodash/*"] }]*/

import pick from 'lodash/pick';
```

```js
/*eslint no-restricted-imports: ["error", { paths: [{
    name: "foo",
    importNames: ["default"],
    message: "Please use the default import from '/bar/baz/' instead."
}]}]*/

import DisallowedObject from "foo";
```

```js
/*eslint no-restricted-imports: ["error", { paths: [{
    name: "foo",
    importNames: ["DisallowedObject"],
    message: "Please import 'DisallowedObject' from '/bar/baz/' instead."
}]}]*/

import { DisallowedObject as AllowedObject } from "foo";
```

```js
/*eslint no-restricted-imports: ["error", { paths: [{
    name: "foo",
    importNames: ["DisallowedObject"],
    message: "Please import 'DisallowedObject' from '/bar/baz/' instead."
}]}]*/

import * as Foo from "foo";
```

Examples of **correct** code for this rule:

**正确** 代码示例：

```js
/*eslint no-restricted-imports: ["error", "fs"]*/

import crypto from 'crypto';
```

```js
/*eslint no-restricted-imports: ["error", { "paths": ["fs"], "patterns": ["eslint/*"] }]*/

import crypto from 'crypto';
import eslint from 'eslint';
```

```js
/*eslint no-restricted-imports: ["error", { paths: [{ name: "foo", importNames: ["DisallowedObject"] }] }]*/

import DisallowedObject from "foo"
```

```js
/*eslint no-restricted-imports: ["error", { paths: [{
    name: "foo",
    importNames: ["DisallowedObject"],
    message: "Please import 'DisallowedObject' from '/bar/baz/' instead."
}]}]*/

import { AllowedObject as DisallowedObject } from "foo";
```

## When Not To Use It

Don't use this rule or don't include a module in the list for this rule if you want to be able to import a module in your project without an ESLint error or warning.

如果希望在你的项目中引入一个模块，而且不会有 ESLint 错误或警告，不要使用该规则或不要包含该规则列表中的模块。

## Version

This rule was introduced in ESLint 2.0.0-alpha-1.

该规则在 ESLint 2.0.0-alpha-1 中被引入。

## Resources

* [Rule source](https://github.com/eslint/eslint/tree/master/lib/rules/no-restricted-imports.js)
* [Documentation source](https://github.com/eslint/eslint/tree/master/docs/rules/no-restricted-imports.md)
