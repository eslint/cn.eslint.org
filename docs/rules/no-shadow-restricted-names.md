---
title: no-shadow-restricted-names - Rules
layout: doc
edit_link: https://github.com/eslint/eslint/edit/master/docs/rules/no-shadow-restricted-names.md
rule_type: suggestion
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# Disallow Shadowing of Restricted Names (no-shadow-restricted-names)

# 关键字不能被遮蔽 (no-shadow-restricted-names)

(recommended) The `"extends": "eslint:recommended"` property in a configuration file enables this rule.

(recommended) 配置文件中的 `"extends": "eslint:recommended"` 属性启用了此规则。

ES5 §15.1.1 Value Properties of the Global Object (`NaN`, `Infinity`, `undefined`) as well as strict mode restricted identifiers `eval` and `arguments` are considered to be restricted names in JavaScript. Defining them to mean something else can have unintended consequences and confuse others reading the code. For example, there's nothing preventing you from writing:

ES5 §15.1.1 中全局对象的属性值 (`NaN`、`Infinity`、`undefined`)和严格模式下被限定的标识符 `eval`、`arguments` 在 JavaScript 中被认为是受限制的名称。将它们定义为其他含义可能会产生意想不到的结果，并使阅读代码的其他人感到困惑。比如：

```js
var undefined = "foo";
```

Then any code used within the same scope would not get the global `undefined`, but rather the local version with a very different meaning.

那么，在相同范围内使用的任何代码都不会得到全局的 `undefined`，而是得到具有非常不同含义的本地版本。

## Rule Details

Examples of **incorrect** code for this rule:

**错误** 代码示例：

```js
/*eslint no-shadow-restricted-names: "error"*/

function NaN(){}

!function(Infinity){};

var undefined = 5;

try {} catch(eval){}
```

Examples of **correct** code for this rule:

**正确** 代码示例：

```js
/*eslint no-shadow-restricted-names: "error"*/

var Object;

function f(a, b){}

// Exception: `undefined` may be shadowed if the variable is never assigned a value.
var undefined;
```

## Further Reading

* [Annotated ES5 - §15.1.1](https://es5.github.io/#x15.1.1)
* [Annotated ES5 - Annex C](https://es5.github.io/#C)

## Related Rules

* [no-shadow](no-shadow)

## Version

This rule was introduced in ESLint 0.1.4.

该规则在 ESLint 0.1.4 中被引入。

## Resources

* [Rule source](https://github.com/eslint/eslint/tree/master/lib/rules/no-shadow-restricted-names.js)
* [Documentation source](https://github.com/eslint/eslint/tree/master/docs/rules/no-shadow-restricted-names.md)
