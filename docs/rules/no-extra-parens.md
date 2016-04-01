---
title: Rule no-extra-parens
layout: doc
translator: ybbjegj
proofreader: molee1905
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# Disallow Extra Parens (no-extra-parens)

# 禁止冗余的括号（no-extra-parens）

This rule restricts the use of parentheses to only where they are necessary. It may be restricted to report only function expressions.

该规则限制只有在必要的地方才使用括号。也可能仅限于对函数表达式的检测。

## Rule Details

A few cases of redundant parentheses are always allowed:

一些冗余括号是被允许的:

* RegExp literals: `(/abc/).test(var)` is always valid.
* RegExp 字面量: `(/abc/).test(var)`是有效的。

* IIFEs: `var x = (function () {})();`, `((function foo() {return 1;})())` are always valid.
* IIFEs: `var x = (function () {})();`, `((function foo() {return 1;})())`是有效的。

## Options

This rule takes 1 or 2 arguments. The first one is a string which must be one of the following:

该规则有1到2个参数。第一个是个字符串，其值必须是下列中的一个：

* `"all"` (default): it will report unnecessary parentheses around any expression.
* `"all"` (默认): 它将报告表达式周围任何不必要的括号。
* `"functions"`: only function expressions will be checked for unnecessary parentheses.
* `"functions"`: 只有函数表达式才会被检查不必要的括号。

The second one is an object for more fine-grained configuration when the first option is `"all"`.

当第一个选项是`"all"`时，第二个则为一个对象，用于提供更细粒度的配置。

### all

Examples of **incorrect** code for the default `"all"` option:

默认选项`"all"`的 **错误**代码示例：

```js
/*eslint no-extra-parens: 2*/

a = (b * c);

(a * b) + c;

typeof (a);

(function(){} ? a() : b());
```

Examples of **correct** code for the default `"all"` option:

默认选项`"all"`的 **正确**代码示例：

```js
/*eslint no-extra-parens: 2*/

(0).toString();

({}.toString.call());

(function(){}) ? a() : b();

(/^a$/).test(x);
```

### conditionalAssign

When setting the first option as `"all"`, an additional option can be added to allow extra parens for assignment in conditional statements.

当第一个选项为`"all"`时，可以添加一个额外的选项以允许在条件语句中出现额外的括号。

Examples of **correct** code for the `"all"` and `{ "conditionalAssign": true }` options:

当选项为`"all"` 和 `{ "conditionalAssign": true }`时的 **正确**代码示例：

```js
/*eslint no-extra-parens: [2, "all", { "conditionalAssign": false }]*/

while ((foo = bar())) {}

if ((foo = bar())) {}

do; while ((foo = bar()))

for (;(a = b););
```

### functions

Examples of **incorrect** code for the `"functions"` option:

选项`"functions"`的 **错误**代码示例：

```js
/*eslint no-extra-parens: [2, "functions"]*/

((function foo() {}))();

var y = (function () {return 1;});
```

Examples of **correct** code for the `"functions"` option:

选项`"functions"`的 **正确**代码示例：

```js
/*eslint no-extra-parens: [2, "functions"]*/

(0).toString();

({}.toString.call());

(function(){} ? a() : b());

(/^a$/).test(x);

a = (b * c);

(a * b) + c;

typeof (a);
```


## Further Reading

* [MDN: Operator Precedence](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence)

## Related Rules

* [no-cond-assign](no-cond-assign)

## Version

This rule was introduced in ESLint 0.1.4.

该规则是在 ESLint 0.1.4 中被引入的。

## Resources

* [Rule source](https://github.com/eslint/eslint/tree/master/lib/rules/no-extra-parens.js)
* [Documentation source](https://github.com/eslint/eslint/tree/master/docs/rules/no-extra-parens.md)
