---
title: no-extra-parens - Rules
layout: doc
edit_link: https://github.com/eslint/eslint/edit/master/docs/rules/no-extra-parens.md
rule_type: layout
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# disallow unnecessary parentheses (no-extra-parens)

# 禁止冗余的括号（no-extra-parens）

(fixable) The `--fix` option on the [command line](../user-guide/command-line-interface#fixing-problems) can automatically fix some of the problems reported by this rule.

(fixable) [命令行](../user-guide/command-line-interface#fixing-problems)中的 `--fix` 选项可以自动修复一些该规则报告的问题。

This rule restricts the use of parentheses to only where they are necessary.

该规则对圆括号的使用做了限制，只有在必要的地方才能使用。

## Rule Details

This rule always ignores extra parentheses around the following:

该规则总是忽略以下情况的额外的圆括号：

* RegExp literals such as `(/abc/).test(var)` to avoid conflicts with the [wrap-regex](wrap-regex) rule
* RegExp 字面量比如 `(/abc/).test(var)` 避免与 [wrap-regex](wrap-regex) 规则产生冲突
* immediately-invoked function expressions (also known as IIFEs) such as `var x = (function () {})();` and `((function foo() {return 1;})())` to avoid conflicts with the [wrap-iife](wrap-iife) rule
* 立即执行函数 (也就是 IIFE) 比如 `var x = (function () {})();` 和 `((function foo() {return 1;})())` 避免与 [wrap-iife](wrap-iife) 规则产生冲突
* arrow function arguments to avoid conflicts with the [arrow-parens](arrow-parens) rule
* 箭头函数参数避免与 [arrow-parens](arrow-parens) 规则产生冲突

## Options

This rule has a string option:

该规则有一个字符串选项：

* `"all"` (default) disallows unnecessary parentheses around *any* expression
* `"all"` (默认) 禁止在 *任何* 表达式周围出现不必要的圆括号
* `"functions"` disallows unnecessary parentheses *only* around function expressions
* `"functions"` *只在* 函数表达式周围禁止不必要的圆括号

This rule has an object option for exceptions to the `"all"` option:

该规则对于 `"all"` 选项有例外情况，是个对象：

* `"conditionalAssign": false` allows extra parentheses around assignments in conditional test expressions
* `"conditionalAssign": false` 允许在条件语句的测试表达式中的赋值语句周围出现额外的圆括号
* `"returnAssign": false` allows extra parentheses around assignments in `return` statements
* `"returnAssign": false` 允许在 `return` 语句中的赋值语句周围出现额外的圆括号
* `"nestedBinaryExpressions": false` allows extra parentheses in nested binary expressions
* `"nestedBinaryExpressions": false` 允许在嵌套的二元表达式中出现额外的圆括号
* `"ignoreJSX": "none|all|multi-line|single-line"` allows extra parentheses around no/all/multi-line/single-line JSX components. Defaults to `none`.
* `"ignoreJSX": "none|all|multi-line|single-line"` 允许在 no/所有/多行/单行的JSX 组件周围出现额外的圆括号。 默认为 `none`。
* `"enforceForArrowConditionals": false` allows extra parentheses around ternary expressions which are the body of an arrow function
* `"enforceForArrowConditionals": false` 允许在箭头函数体中的三元表达式周围出现额外的圆括号

### all

Examples of **incorrect** code for this rule with the default `"all"` option:

默认选项 `"all"` 的 **错误** 代码示例：

```js
/* eslint no-extra-parens: "error" */

a = (b * c);

(a * b) + c;

for (a in (b, c));

for (a in (b));

for (a of (b));

typeof (a);

(function(){} ? a() : b());
```

Examples of **correct** code for this rule with the default `"all"` option:

默认选项 `"all"` 的 **正确** 代码示例：

```js
/* eslint no-extra-parens: "error" */

(0).toString();

(Object.prototype.toString.call());

({}.toString.call());

(function(){}) ? a() : b();

(/^a$/).test(x);

for (a of (b, c));

for (a of b);

for (a in b, c);

for (a in b);
```

### conditionalAssign

Examples of **correct** code for this rule with the `"all"` and `{ "conditionalAssign": false }` options:

选项 `"all"` 和 `{ "conditionalAssign": false }` 的 **正确** 代码示例：

```js
/* eslint no-extra-parens: ["error", "all", { "conditionalAssign": false }] */

while ((foo = bar())) {}

if ((foo = bar())) {}

do; while ((foo = bar()))

for (;(a = b););
```

### returnAssign

Examples of **correct** code for this rule with the `"all"` and `{ "returnAssign": false }` options:

选项 `"all"` 和 `{ "returnAssign": false }` 的 **正确** 代码示例：

```js
/* eslint no-extra-parens: ["error", "all", { "returnAssign": false }] */

function a(b) {
  return (b = 1);
}

function a(b) {
  return b ? (c = d) : (c = e);
}

b => (b = 1);

b => b ? (c = d) : (c = e);
```

### nestedBinaryExpressions

Examples of **correct** code for this rule with the `"all"` and `{ "nestedBinaryExpressions": false }` options:

选项 `"all"` 和 `{ "nestedBinaryExpressions": false }` 的 **正确** 代码示例：

```js
/* eslint no-extra-parens: ["error", "all", { "nestedBinaryExpressions": false }] */

x = a || (b && c);
x = a + (b * c);
x = (a * b) / c;
```

### ignoreJSX

Examples of **correct** code for this rule with the `all` and `{ "ignoreJSX": "all" }` options:

选项 `all` 和 `{ "ignoreJSX": "all" }` **正确** 代码示例：

```js
/* eslint no-extra-parens: ["error", "all", { ignoreJSX: "all" }] */
const Component = (<div />)
const Component = (
    <div
        prop={true}
    />
)
```

Examples of **incorrect** code for this rule with the `all` and `{ "ignoreJSX": "multi-line" }` options:

选项 `all` 和 `{ "ignoreJSX": "multi-line" }` 的 **错误** 代码示例：

```js
/* eslint no-extra-parens: ["error", "all", { ignoreJSX: "multi-line" }] */
const Component = (<div />)
const Component = (<div><p /></div>)
```

Examples of **correct** code for this rule with the `all` and `{ "ignoreJSX": "multi-line" }` options:

选项 `all` 和 `{ "ignoreJSX": "multi-line" }` 的 **正确** 代码示例：

```js
/* eslint no-extra-parens: ["error", "all", { ignoreJSX: "multi-line" }] */
const Component = (
    <div>
        <p />
    </div>
)
const Component = (
    <div
        prop={true}
    />
)
```

Examples of **incorrect** code for this rule with the `all` and `{ "ignoreJSX": "single-line" }` options:

选项 `all` 和 `{ "ignoreJSX": "single-line" }` 的 **错误** 代码示例：

```js
/* eslint no-extra-parens: ["error", "all", { ignoreJSX: "single-line" }] */
const Component = (
    <div>
        <p />
    </div>
)
const Component = (
    <div
        prop={true}
    />
)
```

Examples of **correct** code for this rule with the `all` and `{ "ignoreJSX": "single-line" }` options:

选项 `all` 和 `{ "ignoreJSX": "single-line" }` 的 **正确** 代码示例：

```js
/* eslint no-extra-parens: ["error", "all", { ignoreJSX: "single-line" }] */
const Component = (<div />)
const Component = (<div><p /></div>)
```

### enforceForArrowConditionals

Examples of **correct** code for this rule with the `"all"` and `{ "enforceForArrowConditionals": false }` options:

选项 `"all"` and `{ "enforceForArrowConditionals": false }` 的 **正确** 代码示例：

```js
/* eslint no-extra-parens: ["error", "all", { "enforceForArrowConditionals": false }] */

const b = a => 1 ? 2 : 3;
const d = c => (1 ? 2 : 3);
```

### functions

Examples of **incorrect** code for this rule with the `"functions"` option:

选项 `"functions"` 的 **错误** 代码示例：

```js
/* eslint no-extra-parens: ["error", "functions"] */

((function foo() {}))();

var y = (function () {return 1;});
```

Examples of **correct** code for this rule with the `"functions"` option:

选项 `"functions"` 的 **正确** 代码示例：

```js
/* eslint no-extra-parens: ["error", "functions"] */

(0).toString();

(Object.prototype.toString.call());

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

* [arrow-parens](arrow-parens)
* [no-cond-assign](no-cond-assign)
* [no-return-assign](no-return-assign)

## Version

This rule was introduced in ESLint 0.1.4.

该规则在 ESLint 0.1.4 中被引入。

## Resources

* [Rule source](https://github.com/eslint/eslint/tree/master/lib/rules/no-extra-parens.js)
* [Documentation source](https://github.com/eslint/eslint/tree/master/docs/rules/no-extra-parens.md)
