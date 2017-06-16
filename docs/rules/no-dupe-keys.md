---
title: no-dupe-keys - Rules
layout: doc
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# disallow duplicate keys in object literals (no-dupe-keys)

# 禁止在对象字面量中出现重复的键 (no-dupe-keys)

(recommended) The `"extends": "eslint:recommended"` property in a configuration file enables this rule.

(recommended) 配置文件中的 `"extends": "eslint:recommended"` 属性启用了此规则。

Multiple properties with the same key in object literals can cause unexpected behavior in your application.

在你的应用程序中，如果对象字面量中出现多个属性有同样的键可能会到导致意想不到的情况出现。

```js
var foo = {
    bar: "baz",
    bar: "qux"
};
```

## Rule Details

This rule disallows duplicate keys in object literals.

该规则禁止在对象字面量中出现重复的键。

Examples of **incorrect** code for this rule:

**错误** 代码示例：

```js
/*eslint no-dupe-keys: "error"*/

var foo = {
    bar: "baz",
    bar: "qux"
};

var foo = {
    "bar": "baz",
    bar: "qux"
};

var foo = {
    0x1: "baz",
    1: "qux"
};
```

Examples of **correct** code for this rule:

**正确** 代码示例：

```js
/*eslint no-dupe-keys: "error"*/

var foo = {
    bar: "baz",
    quxx: "qux"
};
```

## Version

This rule was introduced in ESLint 0.0.9.

该规则在 ESLint 0.0.9 中被引入。

## Resources

* [Rule source](https://github.com/eslint/eslint/tree/master/lib/rules/no-dupe-keys.js)
* [Documentation source](https://github.com/eslint/eslint/tree/master/docs/rules/no-dupe-keys.md)
