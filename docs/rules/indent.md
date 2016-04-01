---
title: Rule indent
layout: doc
translator: molee1905
proofreader: sunshiner
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# Validate Indentation (indent)

# 验证缩进 (indent)

This option validates a specific tab width for your code in block statements.

此选项为你的代码块语句验证特定的tab宽度。

There are several common guidelines which require specific indentation of nested blocks and statements, like:

一些常见的准则对嵌套的块语句要求特定的缩进，比如：

```js
function hello(indentSize, type) {
    if (indentSize === 4 && type !== 'tab') {
        console.log('Each next indentation will increase on 4 spaces');
    }
}
```

This is the most common scenarios recommended in different style guides:

这是最常见的情况，也是不同的风格指南中都推荐的

* Two spaces, not longer and no tabs: Google, npm, Node.js, Idiomatic, Felix
* 两个空格，不要tab: Google, npm, Node.js, Idiomatic, Felix
* Tabs: jQuery
* Four spaces: Crockford
* 四个空格: Crockford

**Fixable:** This rule is automatically fixable using the `--fix` flag on the command line.

**Fixable:** 该规则可以通过`--fix`命令行进行自动修复。

## Rule Details

This rule is aimed to enforce consistent indentation style. The default style is `4 spaces`.

该规则旨在推行一致的缩进风格。默认是`4 spaces`。

It takes an option as the second parameter which can be `"tab"` for tab-based indentation or a positive number for space indentations.

它有一个选项做为该规则的第二个参数，可以是`"tab"`，这个主要针对tab缩进，也可以是个正数，这个主要针对空格缩进。

## Options

The `indent` rule has two options:

这个 `indent` 有两个选项:

* Indentation style, positive number or `tab` (see rule details for examples)

* 缩进风格，正数 或 `tab` (see rule details for examples)

* Configuring optional validations, `Object`.
* 配置可选的验证， `Object`。
    * `SwitchCase` - Level of switch cases indent, 0 by default.
    * `SwitchCase` - switch cases语句的缩进, 默认为0.
    * `VariableDeclarator` - Level of variable declaration indent, 1 by default. Can take an object to define separate rules for `var`, `let` and `const` declarations.
    * `VariableDeclarator` - 变量声明的缩进, 默认为1. 可以用一个对象为`var`, `let` 和 `const`的声明定义不同的规则。

Level of indentation denotes the multiple of the indent specified. Example:

缩进的数量

* Indent of 4 spaces with `VariableDeclarator` set to `2` will indent the multi-line variable declarations with 8 spaces.
* 如果缩进设置为4个空格，`VariableDeclarator` 设置为 `2`，多行变量声明将会缩进8个空格。

* Indent of 2 spaces with `VariableDeclarator` set to `2` will indent the multi-line variable declarations with 4 spaces.
* 如果缩进设置为2个空格，`VariableDeclarator` 设置为 `2`，多行变量声明将会缩进4个空格。

* Indent of 2 spaces with `VariableDeclarator` set to `{"var": 2, "let": 2, "const": 3}` will indent the multi-line variable declarations with 4 spaces for `var` and `let`, 6 spaces for `const` statements.
* 如果缩进设置为2个空格，`VariableDeclarator` 设置为 `{"var": 2, "let": 2, "const": 3}`， 多行变量声明将会分别为`var` 和 `let`语句缩进4个空格，`const` 语句缩进6个空格语句。
* Indent of tab with `VariableDeclarator` set to 2 will indent the multi-line variable declarations with 2 tabs.
* 如果缩进设置为tab缩进，`VariableDeclarator` 设置为 2，多行变量声明将会缩进2个tab。
* Indent of 2 spaces with SwitchCase set to 0 will not indent `SwitchCase` with respect to switch.
* 如果缩进设置为2个空格，SwitchCase设置为0，`SwitchCase`将不会缩进。
* Indent of 2 spaces with SwitchCase set to 2 will indent `SwitchCase` with 4 space with respect to switch.
* 如果缩进设置为2个空格，SwitchCase设置为2，`SwitchCase`将缩进4个空格。
* Indent of tabs with SwitchCase set to 2 will indent `SwitchCase` with 2 tabs with respect to switch.
* 如果缩进设置为tab缩进，SwitchCase设置为2，`SwitchCase`将缩进为2个tab


2 space indentation with enabled switch cases indentation

2个空格缩进，同时开启switch cases缩进

```json
 "indent": [2, 2, {"SwitchCase": 1}]
```

4 space indention

4个空格缩进

```json
"indent": 2
```

2 space indentation

2个空格缩进

```json
"indent": [2, 2]
```

tabbed indentation

tab缩进

```json
"indent": [2, "tab"]
```

The following patterns are considered problems:

以下模式被认为是有问题的：

```js
/*eslint indent: [2, 2]*/

if (a) {
   b=c;
function foo(d) {
       e=f;
}
}
```

```js
/*eslint indent: [2, "tab"]*/

if (a) {
     b=c;
function foo(d) {
           e=f;
 }
}
```

```js
/*eslint indent: [2, 2, {"VariableDeclarator": 1}]*/
/*eslint-env es6*/

var a,
    b,
    c;
let a,
    b,
    c;
const a = 1,
    b = 2,
    c = 3;
```

```js
/*eslint indent: [2, 2, {"SwitchCase": 1}]*/

switch(a){
case "a":
    break;
case "b":
    break;
}
```

The following patterns are not considered problems:

以下模式被认为是没有问题的：

```js
/*eslint indent: [2, 2]*/

if (a) {
  b=c;
  function foo(d) {
    e=f;
  }
}
```

```js
/*indent: [2, "tab"]*/

if (a) {
/*tab*/b=c;
/*tab*/function foo(d) {
/*tab*//*tab*/e=f;
/*tab*/}
}
```

```js
/*eslint indent: [2, 2, {"VariableDeclarator": 2}]*/
/*eslint-env es6*/

var a,
    b,
    c;
let a,
    b,
    c;
const a = 1,
    b = 2,
    c = 3;
```

```js
/*eslint indent: [2, 2, {"VariableDeclarator": { "var": 2, "let": 2, "const": 3}}]*/
/*eslint-env es6*/

var a,
    b,
    c;
let a,
    b,
    c;
const a = 1,
      b = 2,
      c = 3;
```

```js
/*eslint indent: [2, 4, {"SwitchCase": 1}]*/

switch(a){
    case "a":
        break;
    case "b":
        break;
}
```


## Compatibility

* **JSHint**: `indent`
* **JSCS**: `validateIndentation`

## Version

This rule was introduced in ESLint 0.14.0.

该规则在ESLint 0.14.0 被引入。

## Resources

* [Rule source](https://github.com/eslint/eslint/tree/master/lib/rules/indent.js)
* [Documentation source](https://github.com/eslint/eslint/tree/master/docs/rules/indent.md)
