---
title: no-compare-neg-zero - Rules
layout: doc
edit_link: https://github.com/eslint/eslint/edit/master/docs/rules/no-compare-neg-zero.md
rule_type: problem
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# disallow comparing against -0 (no-compare-neg-zero)

# 禁止与 -0 进行比较 (no-compare-neg-zero)

(recommended) The `"extends": "eslint:recommended"` property in a configuration file enables this rule.

(recommended) 配置文件中的 `"extends": "eslint:recommended"` 属性启用了此规则。

## Rule Details

The rule should warn against code that tries to compare against -0, since that will not work as intended. That is, code like x === -0 will pass for both +0 and -0. The author probably intended Object.is(x, -0).

该规则对试图与 -0 进行比较的代码发出警告，因为并不会达到预期。也就是说像 x === -0 的代码对于 +0 和 -0 都有效。作者可能想要用 Object.is(x, -0)。

Examples of **incorrect** code for this rule:

**错误** 代码示例：

```js

if (x === -0) {
    // doSomething()...
}
```

Examples of **correct** code for this rule:

**正确的** 代码示例：

```js

if (x === 0) {
    // doSomething()...
}
```

```js

if (Object.is(x, -0)) {
    // doSomething()...
}
```



## Version

This rule was introduced in ESLint 3.17.0.

该规则在 ESLint 3.17.0 中被引入。

## Resources

* [Rule source](https://github.com/eslint/eslint/tree/master/lib/rules/no-compare-neg-zero.js)
* [Documentation source](https://github.com/eslint/eslint/tree/master/docs/rules/no-compare-neg-zero.md)
