---
title: no-multi-spaces - Rules
layout: doc
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# Disallow multiple spaces (no-multi-spaces)

# 禁止出现多个空格 (no-multi-spaces)

(fixable) The `--fix` option on the [command line](../user-guide/command-line-interface#fix) can automatically fix some of the problems reported by this rule.

(fixable) [命令行](../user-guide/command-line-interface#fix)中的 `--fix` 选项可以自动修复一些该规则报告的问题。

Multiple spaces in a row that are not used for indentation are typically mistakes. For example:

在某行中，出现多个空格而且不是用来作缩进的，通常是个错误。例如：

```js

if(foo  === "bar") {}

```

It's hard to tell, but there are two spaces between `foo` and `===`. Multiple spaces such as this are generally frowned upon in favor of single spaces:

很难说，但是在 `foo` 和 `===` 之间有两个空格。支持使用单一空格的，是不赞成使用像这样的多个空格的。

```js

if(foo === "bar") {}

```

## Rule Details

This rule aims to disallow multiple whitespace around logical expressions, conditional expressions, declarations, array elements, object properties, sequences and function parameters.

此规则目的在于禁止在逻辑表达式、条件表达式、声明、数组元素、对象属性、序列和函数参数周围使用多个空格。

Examples of **incorrect** code for this rule:

**错误** 代码示例：


```js
/*eslint no-multi-spaces: "error"*/

var a =  1;

if(foo   === "bar") {}

a <<  b

var arr = [1,  2];

a ?  b: c
```

Examples of **correct** code for this rule:

**正确** 代码示例：

```js
/*eslint no-multi-spaces: "error"*/

var a = 1;

if(foo === "bar") {}

a << b

var arr = [1, 2];

a ? b: c
```

## Options

This rule's configuration consists of an object with the following properties:

该规则的配置是个对象，包含以下属性：

* `"ignoreEOLComments": true` (defaults to `false`) ignores multiple spaces before comments that occur at the end of lines
* `"ignoreEOLComments": true` (默认 `false`) 忽略行尾注释前的多个空格
* `"exceptions": { "Property": true }` (`"Property"` is the only node specified by default) specifies nodes to ignore
* `"exceptions": { "Property": true }` (`"Property"` 是为一个默认指定的节点) 指定要忽略的节点

### ignoreEOLComments

Examples of **incorrect** code for this rule with the `{ "ignoreEOLComments": false }` (default) option:

默认选项 `{ "ignoreEOLComments": false }` 的 **错误** 代码示例：

```js
/*eslint no-multi-spaces: ["error", { ignoreEOLComments: false }]*/

var x = 5;      // comment
var x = 5;      /* multiline
 * comment
 */
```

Examples of **correct** code for this rule with the `{ "ignoreEOLComments": false }` (default) option:

选项 `{ "ignoreEOLComments": false }` 的 **正确** 代码示例：

```js
/*eslint no-multi-spaces: ["error", { ignoreEOLComments: false }]*/

var x = 5; // comment
var x = 5; /* multiline
 * comment
 */
```

Examples of **correct** code for this rule with the `{ "ignoreEOLComments": true }` option:

选项 `{ "ignoreEOLComments": true }` 的 **正确** 代码示例：

```js
/*eslint no-multi-spaces: ["error", { ignoreEOLComments: true }]*/

var x = 5; // comment
var x = 5;      // comment
var x = 5; /* multiline
 * comment
 */
var x = 5;      /* multiline
 * comment
 */
```

### exceptions

To avoid contradictions with other rules that require multiple spaces, this rule has an `exceptions` option to ignore certain nodes.

为了避免与其他需要多个空格的规则发生冲突，该规则有一个 `exceptions` 选项可以忽略特定的节点。

This option is an object that expects property names to be AST node types as defined by [ESTree](https://github.com/estree/estree). The easiest way to determine the node types for `exceptions` is to use the [online demo](https://eslint.org/parser).

该选项是个对象，属性名是 AST 节点类型，这些类型被定义在 [ESTree](https://github.com/estree/estree)。确定节点类型的最简单的方法是使用 [online demo](https://eslint.org/parser)。

Only the `Property` node type is ignored by default, because for the [key-spacing](key-spacing) rule some alignment options require multiple spaces in properties of object literals.

默认情况下，只忽略 `Property` 节点类型，因为 [key-spacing](key-spacing) 规则的对其选项要求对象中的属性有多个空格。

Examples of **correct** code for the default `"exceptions": { "Property": true }` option:

默认选项 `"exceptions": { "Property": true }` 的 **正确** 代码示例：

```js
/*eslint no-multi-spaces: "error"*/
/*eslint key-spacing: ["error", { align: "value" }]*/

var obj = {
    first:  "first",
    second: "second"
};
```

Examples of **incorrect** code for the `"exceptions": { "Property": false }` option:

选项 `"exceptions": { "Property": false }` 的 **错误** 代码示例：

```js
/*eslint no-multi-spaces: ["error", { exceptions: { "Property": false } }]*/
/*eslint key-spacing: ["error", { align: "value" }]*/

var obj = {
    first:  "first",
    second: "second"
};
```

Examples of **correct** code for the `"exceptions": { "BinaryExpression": true }` option:

选项 `"exceptions": { "BinaryExpression": true }` 的 **正确** 代码示例：

```js
/*eslint no-multi-spaces: ["error", { exceptions: { "BinaryExpression": true } }]*/

var a = 1  *  2;
```

Examples of **correct** code for the `"exceptions": { "VariableDeclarator": true }` option:

选项 `"exceptions": { "VariableDeclarator": true }` 的 **正确** 代码示例：

```js
/*eslint no-multi-spaces: ["error", { exceptions: { "VariableDeclarator": true } }]*/

var someVar      = 'foo';
var someOtherVar = 'barBaz';
```

Examples of **correct** code for the `"exceptions": { "ImportDeclaration": true }` option:

选项 `"exceptions": { "ImportDeclaration": true }` 的 **正确** 代码示例：

```js
/*eslint no-multi-spaces: ["error", { exceptions: { "ImportDeclaration": true } }]*/

import mod          from 'mod';
import someOtherMod from 'some-other-mod';
```

## When Not To Use It

If you don't want to check and disallow multiple spaces, then you should turn this rule off.

如果你不想检查或禁止出现多个空格，你可以关闭此规则。

## Related Rules

* [key-spacing](key-spacing)
* [space-infix-ops](space-infix-ops)
* [space-in-brackets](space-in-brackets) (deprecated)
* [space-in-parens](space-in-parens)
* [space-after-keywords](space-after-keywords)
* [space-unary-ops](space-unary-ops)
* [space-return-throw-case](space-return-throw-case)

## Version

This rule was introduced in ESLint 0.9.0.

该规则在 ESLint 0.9.0 中被引入。

## Resources

* [Rule source](https://github.com/eslint/eslint/tree/master/lib/rules/no-multi-spaces.js)
* [Documentation source](https://github.com/eslint/eslint/tree/master/docs/rules/no-multi-spaces.md)
