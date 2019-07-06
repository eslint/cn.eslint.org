---
title: max-classes-per-file - Rules
layout: doc
edit_link: https://github.com/eslint/eslint/edit/master/docs/rules/max-classes-per-file.md
rule_type: suggestion
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# enforce a maximum number of classes per file (max-classes-per-file)

# 强制每个文件中包含的的类的最大数量 (max-classes-per-file)

Files containing multiple classes can often result in a less navigable
and poorly structured codebase. Best practice is to keep each file
limited to a single responsibility.

包含多个类的文件通常会导致导航性较差以及结构不良的代码库。最佳实践是保持每个文件限制于单一的责任。

## Rule Details

This rule enforces that each file may contain only a particular number
of classes and no more.

这个规则强制每个文件只能包含一个特定数量的类，没有更多。

Examples of **incorrect** code for this rule:

**错误** 代码示例：

```js
/*eslint max-classes-per-file: "error"*/

class Foo {}
class Bar {}
```

Examples of **correct** code for this rule:

**正确** 代码示例：

```js
/*eslint max-classes-per-file: "error"*/

class Foo {}
```

## Options

This rule has a numeric option (defaulted to 1) to specify the
maximum number of classes.

此规则有一个数值选项（默认为1）来指定类的最大数量。

For example:

例如:

```json
{
    "max-classes-per-file": ["error", 1]
}
```

Examples of **correct** code for this rule with the numeric option set to `2`:

数值选项设置为 `2` 的 **正确** 代码示例：

```js
/* eslint max-classes-per-file: ["error", 2] */

class Foo {}
class Bar {}
```

## Version

This rule was introduced in ESLint 5.0.0-alpha.3.

该规则在 ESLint 5.0.0-alpha.3 中被引入。

## Resources

* [Rule source](https://github.com/eslint/eslint/tree/master/lib/rules/max-classes-per-file.js)
* [Documentation source](https://github.com/eslint/eslint/tree/master/docs/rules/max-classes-per-file.md)
