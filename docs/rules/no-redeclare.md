---
title: no-redeclare - Rules
layout: doc
edit_link: https://github.com/eslint/eslint/edit/master/docs/rules/no-redeclare.md
rule_type: suggestion
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# disallow variable redeclaration (no-redeclare)

# 禁止重新声明变量 (no-redeclare)

(recommended) The `"extends": "eslint:recommended"` property in a configuration file enables this rule.

(recommended) 配置文件中的 `"extends": "eslint:recommended"` 属性启用了此规则。

In JavaScript, it's possible to redeclare the same variable name using `var`. This can lead to confusion as to where the variable is actually declared and initialized.

在 JavaScript 中，使用 `var` 可以对同一个变量再次声明。这会使变量实际声明和定义的位置混乱不堪。

## Rule Details

This rule is aimed at eliminating variables that have multiple declarations in the same scope.

此规则目旨在消除同一作用域中多次声明同一变量。

Examples of **incorrect** code for this rule:

**错误** 代码示例：

```js
/*eslint no-redeclare: "error"*/

var a = 3;
var a = 10;
```

Examples of **correct** code for this rule:

**正确** 代码示例：

```js
/*eslint no-redeclare: "error"*/

var a = 3;
// ...
a = 10;
```

## Options

This rule takes one optional argument, an object with a boolean property `"builtinGlobals"`. It defaults to `true`.

该规则有一个选项参数，是个对象，该对象有个布尔属性为 `"builtinGlobals"`。默认为`true`。

If set to `true`, this rule also checks redeclaration of built-in globals, such as `Object`, `Array`, `Number`...

如果设置为 `true`，该规则也会检查全局内建对象，比如`Object`、`Array`、`Number`...

### builtinGlobals

The `"builtinGlobals"` option will check for redeclaration of built-in globals in global scope.

`"builtinGlobals"` 选项将会在全局范围检查被重新声明的内置全局变量。

Examples of **incorrect** code for the `{ "builtinGlobals": true }` option:

选项 `{ "builtinGlobals": true }` 的 **错误** 代码示例：

```js
/*eslint no-redeclare: ["error", { "builtinGlobals": true }]*/

var Object = 0;
```

Examples of **incorrect** code for the `{ "builtinGlobals": true }` option and the `browser` environment:

在 `browser` 环境下，选项 `{"builtinGlobals": true}` 的 **错误** 代码示例：

```js
/*eslint no-redeclare: ["error", { "builtinGlobals": true }]*/
/*eslint-env browser*/

var top = 0;
```

The `browser` environment has many built-in global variables (for example, `top`). Some of built-in global variables cannot be redeclared.

`browser` 环境有很多内建的全局变量（例如，`top`）。一些内建的全局变量不能被重新声明。

Note that when using the `node` or `commonjs` environments (or `ecmaFeatures.globalReturn`, if using the default parser), the top scope of a program is not actually the global scope, but rather a "module" scope. When this is the case, declaring a variable named after a builtin global is not a redeclaration, but rather a shadowing of the global variable. In that case, the [`no-shadow`](no-shadow) rule with the `"builtinGlobals"` option should be used.

注意，当使用 `node` 或 `commonjs` 环境 (或 `ecmaFeatures.globalReturn`，如果使用默认解析器)时，则程序的最大作用域不是实际的全局作用域，而是一个模块作用域。当出现这种情况时，声明一个以内置的全局变量命令的变量，不算是重声明，只是遮蔽了全局变量。在这种情况下，应该使用 [`no-shadow`](no-shadow) 规则的 `"builtinGlobals"` 选项。

## Related Rules

* [no-shadow](no-shadow)

## Version

This rule was introduced in ESLint 0.0.9.

该规则在 ESLint 0.0.9 中被引入。

## Resources

* [Rule source](https://github.com/eslint/eslint/tree/master/lib/rules/no-redeclare.js)
* [Documentation source](https://github.com/eslint/eslint/tree/master/docs/rules/no-redeclare.md)
