---
title: Rule sort-imports
layout: doc
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# Import Sorting (sort-imports)

# import 排序 (sort-imports)

The import statement is used to import members (functions, objects or primitives) that have been exported from an external module. Using a specific member syntax:

import 语句用来引入外部模块输出的成员 (函数、对象或原语)。使用一个特定的成员的语法：

```js
// single - Import single member.
import myMember from "my-module.js";

// multiple - Import multiple members.
import {foo, bar} from "my-module.js";

// all - Import all members, where myModule contains all the exported bindings.
import * as myModule from "my-module.js";
```

The import statement can also import a module without exported bindings. Used when the module does not export anything, but runs it own code or changes the global context object.

import 语句也可以引入不经输出绑定的模块。用于模块不作任何输入，就可运行或改变全局上下文对象。

```js
// none - Import module without exported bindings.
import "my-module.js"
```

When declaring multiple imports, a sorted list of import declarations make it easier for developers to read the code and find necessary imports later. This rule is purely a matter of style.

当什么多个 import ，一个排好序的 import 声明列表让开发者更容易阅读代码和找到必要的 import。该规则纯粹是一种风格。

## Rule Details

This rule checks all import declarations and verifies that all imports are first sorted by the used member syntax and then alphabetically by the first member or alias name.

该规则检查所有的 import 声明，验证所有的 import 都是首先按照使用的成员语法排序，其次是按照第一个成员或别名的字母顺序排序。

The sort order of import declarations based on the member syntax can be configured via the `memberSyntaxSortOrder` option.
The default member syntax sort order is:

基于成员语法的经过排序的 import 声明可以通过 `memberSyntaxSortOrder` 选项进行配置。默认的成员语法排列顺序是：

- `none` - import module without exported bindings.
- `none` - import 没有输出绑定的模块。
- `all` - import all members provided by exported bindings.
- `all` - import 所有经输出绑定的成员。
- `multiple` - import multiple members.
- `multiple` - import 多个成员。
- `single` - import single member.
- `single` - import 单个成员。

The following example shows correct sorted import declarations:

以下示例展示了正确排序的 import 声明：

```js
/*eslint sort-imports: "error"*/
import 'module-without-export.js';
import * as foo from 'foo.js';
import * as bar from 'bar.js';
import {alpha, beta} from 'alpha.js';
import {delta, gamma} from 'delta.js';
import a from 'baz.js';
import b from 'qux.js';
```

Examples of **incorrect** code for this rule:

**错误** 代码示例：

```js
/*eslint sort-imports: "error"*/
import b from 'foo.js';
import a from 'bar.js';

/*eslint sort-imports: "error"*/
import a from 'foo.js';
import A from 'bar.js';

/*eslint sort-imports: "error"*/
import {b, c} from 'foo.js';
import {a, b} from 'bar.js';

/*eslint sort-imports: "error"*/
import a from 'foo.js';
import {b, c} from 'bar.js';

/*eslint sort-imports: "error"*/
import a from 'foo.js';
import * as b from 'bar.js';

/*eslint sort-imports: "error"*/
import {b, a, c} from 'foo.js'
```

Examples of **correct** code for this rule:

**正确** 代码示例：

```js
/*eslint sort-imports: "error"*/
import a from 'foo.js';
import b from 'bar.js';
import c from 'baz.js';

/*eslint sort-imports: "error"*/
import 'foo.js'
import * from 'bar.js';
import {a, b} from 'baz.js';
import c from 'qux.js';

/*eslint sort-imports: "error"*/
import {a, b, c} from 'foo.js'
```


## Options

This rule accepts an object with its properties as

该规则接受一个对象选项：

- `ignoreCase` (default: `false`)
- `ignoreCase` (默认为 `false`)
- `ignoreMemberSort` (default: `false`)
- `ignoreMemberSort` (默认为 `false`)
- `memberSyntaxSortOrder` (default: `["none", "all", "multiple", "single"]`)
- `memberSyntaxSortOrder` (默认为 `["none", "all", "multiple", "single"]`)

Default option settings are

默认选项设置：

```json
{
    "sort-imports": ["error", {
        "ignoreCase": false,
        "ignoreMemberSort": false,
        "memberSyntaxSortOrder": ["none", "all", "multiple", "single"]
    }]
}
```

### `ignoreCase`

When `true` the rule ignores the case-sensitivity of the imports local name.

Examples of **incorrect** code for this rule:

**错误** 代码示例：

```js
/*eslint sort-imports: ["error", { "ignoreCase": true }]*/

import B from 'foo.js';
import a from 'bar.js';
```

Examples of **correct** code for this rule:

**正确** 代码示例：

```js
/*eslint sort-imports: ["error", { "ignoreCase": true }]*/

import a from 'foo.js';
import B from 'bar.js';
import c from 'baz.js';
```

Default is `false`.

### `ignoreMemberSort`

Ignores the member sorting within a `multiple` member import declaration.

Examples of **incorrect** code for this rule:

**错误** 代码示例：

```js
/*eslint sort-imports: "error"*/
import {b, a, c} from 'foo.js'
```

Examples of **correct** code for this rule:

**正确** 代码示例：

```js
/*eslint sort-imports: ["error", { "ignoreMemberSort": true }]*/
import {b, a, c} from 'foo.js'
```

Default is `false`.

### `memberSyntaxSortOrder`

The member syntax sort order can be configured with this option. There are four different styles and the default member syntax sort order is:

成员语法排序可以用这个选项进行配置。有四种不同的风格，默认的成员语法排列顺序是：

- `none` - import module without exported bindings.
- `none` - import 没有输出绑定的模块。
- `all` - import all members provided by exported bindings.
- `all` - import 所有经输出绑定的成员。
- `multiple` - import multiple members.
- `multiple` - import 多个成员。
- `single` - import single member.
- `single` - import 单个成员。

Use this option if you want a different sort order. Every style must be defined in the sort order (There shall be four items in the array).

如果你想用一种不同的排序，可以使用该选。每种风格必须按顺序定义（在数组中应该有四个元素）。

Examples of **incorrect** code for this rule:

**错误** 代码示例：

```js
/*eslint sort-imports: "error"*/
import a from 'foo.js';
import * as b from 'bar.js';
```

Examples of **correct** code for this rule:

**正确** 代码示例：

```js
/*eslint sort-imports: ["error", { "memberSyntaxSortOrder": ['single', 'all', 'multiple', 'none'] }]*/

import a from 'foo.js';
import * as b from 'bar.js';

/*eslint sort-imports: ["error", { "memberSyntaxSortOrder": ['all', 'single', 'multiple', 'none'] }]*/

import * as foo from 'foo.js';
import z from 'zoo.js';
import {a, b} from 'foo.js';

```

Default is `["none", "all", "multiple", "single"]`.

默认为  `["none", "all", "multiple", "single"]`。

## When Not To Use It

This rule is a formatting preference and not following it won't negatively affect the quality of your code. If alphabetizing imports isn't a part of your coding standards, then you can leave this rule disabled.

该规则是个格式化偏好，不遵循它不会影响你的代码质量。如果按字母顺序排序的 import 不是你编码标准一部分，你可以关闭此规则。

## Version

This rule was introduced in ESLint 2.0.0-beta.1.

该规则在 ESLint 2.0.0-beta.1 中被引入。

## Resources

* [Rule source](https://github.com/eslint/eslint/tree/master/lib/rules/sort-imports.js)
* [Documentation source](https://github.com/eslint/eslint/tree/master/docs/rules/sort-imports.md)
