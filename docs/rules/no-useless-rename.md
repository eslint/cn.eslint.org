---
title: no-useless-rename - Rules
layout: doc
edit_link: https://github.com/eslint/eslint/edit/master/docs/rules/no-useless-rename.md
rule_type: suggestion
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# Disallow renaming import, export, and destructured assignments to the same name (no-useless-rename)

# 禁止在 import 和 export 和解构赋值时将引用重命名为相同的名字 (no-useless-rename)

(fixable) The `--fix` option on the [command line](../user-guide/command-line-interface#fixing-problems) can automatically fix some of the problems reported by this rule.

(fixable) [命令行](../user-guide/command-line-interface#fixing-problems)中的 `--fix` 选项可以自动修复一些该规则报告的问题。

ES2015 allows for the renaming of references in import and export statements as well as destructuring assignments. This gives programmers a concise syntax for performing these operations while renaming these references:

ES2015允许在 import ，export 和结构赋值时对引用进行重命名。这给了开发者简洁的语法来执行这些操作同时对引用进行重命名

```js
import { foo as bar } from "baz";
export { foo as bar };
let { foo: bar } = baz;
```

With this syntax, it is possible to rename a reference to the same name. This is a completely redundant operation, as this is the same as not renaming at all. For example, this:

有了这个语法，引用有可能被重命名成相同的名字。因为这和没有重命名是等价的，因此这种操作完全冗余。例如：

```js
import { foo as foo } from "bar";
export { foo as foo };
let { foo: foo } = bar;
```

is the same as:

等价于：

```js
import { foo } from "bar";
export { foo };
let { foo } = bar;
```

## Rule Details

This rule disallows the renaming of import, export, and destructured assignments to the same name.

这条规则进行在 import 和 export 和解构赋值时将引用重命名为相同的名字

See Also:

查看：

- [`object-shorthand`](https://eslint.org/docs/rules/object-shorthand) which can enforce this behavior for properties in object literals.
- [`object-shorthand`](https://eslint.org/docs/rules/object-shorthand) 可以对对象的属性强制执行此行为。

## Options

This rule allows for more fine-grained control with the following options:

这条规则支持用下面的选项进行更细粒度的配置：

- `ignoreImport`: When set to `true`, this rule does not check imports

- `ignoreImport`: 当设置为 `true`，这条规则不会检查 imports

- `ignoreExport`: When set to `true`, this rule does not check exports

- `ignoreExport`: 当设置为 `true`，这条规则不会检查 exports

- `ignoreDestructuring`: When set to `true`, this rule does not check destructuring assignments

- `ignoreDestructuring`: 当设置为 `true`, 这条规则不会检查解构赋值

By default, all options are set to `false`:

这些选项默认都被设置为 `false`：

```json
"no-useless-rename": ["error", {
    "ignoreDestructuring": false,
    "ignoreImport": false,
    "ignoreExport": false
}]
```

Examples of **incorrect** code for this rule by default:

默认配置时 **错误** 代码示例：

```js
/*eslint no-useless-rename: "error"*/

import { foo as foo } from "bar";
export { foo as foo };
export { foo as foo } from "bar";
let { foo: foo } = bar;
let { 'foo': foo } = bar;
function foo({ bar: bar }) {}
({ foo: foo }) => {}
```

Examples of **correct** code for this rule by default:

默认配置时 **正确** 代码示例：

```js
/*eslint no-useless-rename: "error"*/

import * as foo from "foo";
import { foo } from "bar";
import { foo as bar } from "baz";

export { foo };
export { foo as bar };
export { foo as bar } from "foo";

let { foo } = bar;
let { foo: bar } = baz;
let { [foo]: foo } = bar;

function foo({ bar }) {}
function foo({ bar: baz }) {}

({ foo }) => {}
({ foo: bar }) => {}
```

Examples of **correct** code for this rule with `{ ignoreImport: true }`:

选项 `{ ignoreImport: true }` 的 **正确** 代码示例：

```js
/*eslint no-useless-rename: ["error", { ignoreImport: true }]*/

import { foo as foo } from "bar";
```

Examples of **correct** code for this rule with `{ ignoreExport: true }`:

选项 `{ ignoreExport: true }` 时 **正确** 代码示例：

```js
/*eslint no-useless-rename: ["error", { ignoreExport: true }]*/

export { foo as foo };
export { foo as foo } from "bar";
```

Examples of **correct** code for this rule with `{ ignoreDestructuring: true }`:

选项 `{ ignoreDestructuring: true }` 时 **正确** 代码示例：

```js
/*eslint no-useless-rename: ["error", { ignoreDestructuring: true }]*/

let { foo: foo } = bar;
function foo({ bar: bar }) {}
({ foo: foo }) => {}
```

## When Not To Use It

You can safely disable this rule if you do not care about redundantly renaming import, export, and destructuring assignments.

如果你不关心在 import , export 和解构赋值时冗余的重命名，关闭此规则即可。

## Compatibility

- **JSCS**: [disallowIdenticalDestructuringNames](https://jscs-dev.github.io/rule/disallowIdenticalDestructuringNames)

## Version

This rule was introduced in ESLint 2.11.0.

该规则在 ESLint 2.11.0 中被引入。

## Resources

* [Rule source](https://github.com/eslint/eslint/tree/master/lib/rules/no-useless-rename.js)
* [Documentation source](https://github.com/eslint/eslint/tree/master/docs/rules/no-useless-rename.md)
