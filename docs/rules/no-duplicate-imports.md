---
title: no-duplicate-imports - Rules
layout: doc
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# Disallow duplicate imports (no-duplicate-imports)

# 禁止重复导入 (no-duplicate-imports)

Using a single `import` statement per module will make the code clearer because you can see everything being imported from that module on one line.

为每个模块使用单一的 `import` 语句会是代码更加清新，因为你会看到从该模块导入的所有内容都在同一行。

In the following example the `module` import on line 1 is repeated on line 3. These can be combined to make the list of imports more succinct.

在下面的例子中，行 1 和 行 3 的模块导入是重复的。二者合并会使导入列表更加简洁。

```js
import { merge } from 'module';
import something from 'another-module';
import { find } from 'module';
```

## Rule Details

This rules requires that all imports from a single module exists in a single `import` statement.

该规则要求单个模块的所有的导入都在同一个 `import` 语句中。

Example of **incorrect** code for this rule:

**错误** 代码示例：

```js
/*eslint no-duplicate-imports: "error"*/

import { merge } from 'module';
import something from 'another-module';
import { find } from 'module';
```

Example of **correct** code for this rule:

**正确** 代码示例：

```js
/*eslint no-duplicate-imports: "error"*/

import { merge, find } from 'module';
import something from 'another-module';
```

## Options

This rule takes one optional argument, an object with a single key, `includeExports` which is a `boolean`. It defaults to `false`.

该规则有一个对象选项，只有一个布尔属性 `includeExports`。默认为 `false`。

If re-exporting from an imported module, you should add the imports to the `import`-statement, and export that directly, not use `export ... from`.

如果一个导入的模块又被导出，你应该把这些导入加到 `import` 语句中，然后直接导出，不要使用 `export ... from`。

Example of **incorrect** code for this rule with the `{ "includeExports": true }` option:

选项 `{ "includeExports": true }` 的 **错误** 代码示例：

```js
/*eslint no-duplicate-imports: ["error", { "includeExports": true }]*/

import { merge } from 'module';

export { find } from 'module';
```

Example of **correct** code for this rule with the `{ "includeExports": true }` option:

选项 `{ "includeExports": true }` 的 **正确** 代码示例：

```js
/*eslint no-duplicate-imports: ["error", { "includeExports": true }]*/

import { merge, find } from 'module';

export { find };
```

## Version

This rule was introduced in ESLint 2.5.0.

该规则在 ESLint 2.5.0 中被引入。

## Resources

* [Rule source](https://github.com/eslint/eslint/tree/master/lib/rules/no-duplicate-imports.js)
* [Documentation source](https://github.com/eslint/eslint/tree/master/docs/rules/no-duplicate-imports.md)
