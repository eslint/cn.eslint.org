---
title: Rule indent
layout: doc
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# enforce consistent indentation (indent)

# 强制使用一致的缩进 (indent)

(fixable) The `--fix` option on the [command line](../user-guide/command-line-interface#fix) automatically fixes problems reported by this rule.

(fixable) [命令行](../user-guide/command-line-interface#fix)中的 `--fix` 选项可以自动修复该规则报告的问题。

There are several common guidelines which require specific indentation of nested blocks and statements, like:

一些常见的准则要求嵌套的块和语句使用特定的缩进，比如：

```js
function hello(indentSize, type) {
    if (indentSize === 4 && type !== 'tab') {
        console.log('Each next indentation will increase on 4 spaces');
    }
}
```

These are the most common scenarios recommended in different style guides:

这是最常见的情况，也是不同的风格指南中都推荐的：

* Two spaces, not longer and no tabs: Google, npm, Node.js, Idiomatic, Felix
* 两个空格，不要 tab： Google、npm、Node.js、Idiomatic、Felix
* Tabs: jQuery
* tab：jQuery
* Four spaces: Crockford
* 四个空格：Crockford


## Rule Details

This rule enforces a consistent indentation style. The default style is `4 spaces`.

该规则旨在强制使用一致的缩进风格。默认是 `4个空格`。

## Options

This rule has a mixed option:

该规则有一个混合选项：

For example, for 2-space indentation:

例如，2 个空格缩进：

```json
{
    "indent": ["error", 2]
}
```

Or for tabbed indentation:

或 tab 缩进：

```json
{
    "indent": ["error", "tab"]
}
```

Examples of **incorrect** code for this rule with the default options:

默认选项的 **错误** 代码示例：

```js
/*eslint indent: "error"*/

if (a) {
  b=c;
  function foo(d) {
    e=f;
  }
}
```

Examples of **correct** code for this rule with the default options:

默认选项的 **正确** 代码示例：

```js
/*eslint indent: "error"*/

if (a) {
    b=c;
    function foo(d) {
        e=f;
    }
}
```

This rule has an object option:

该规则有一个对象选项：

* `"SwitchCase"` (default: 0) enforces indentation level for `case` clauses in `switch` statements
* `"SwitchCase"` (默认：0) 强制 `switch` 语句中的 `case` 子句的缩进水平
* `"VariableDeclarator"` (default: 1) enforces indentation level for `var` declarators; can also take an object to define separate rules for `var`, `let` and `const` declarations.
* `"VariableDeclarator"` (默认：1) 强制 `var` 声明的缩进水平；也可以使用一个对象为 `var`、`let` 和 `const` 声明分别定义。

Level of indentation denotes the multiple of the indent specified. Example:

缩进水平表示指定的多个缩进。例如：

* Indent of 4 spaces with `VariableDeclarator` set to `2` will indent the multi-line variable declarations with 8 spaces.
* 如果缩进设置为 4 个空格，`VariableDeclarator` 设置为 `2`，多行变量声明将会缩进 8 个空格。
* Indent of 2 spaces with `VariableDeclarator` set to `2` will indent the multi-line variable declarations with 4 spaces.
* 如果缩进设置为 2 个空格，`VariableDeclarator` 设置为 `2`，多行变量声明将会缩进 4 个空格。
* Indent of 2 spaces with `VariableDeclarator` set to `{"var": 2, "let": 2, "const": 3}` will indent the multi-line variable declarations with 4 spaces for `var` and `let`, 6 spaces for `const` statements.
* 如果缩进设置为 2 个空格，`VariableDeclarator` 设置为 `{"var": 2, "let": 2, "const": 3}`，多行变量声明将会分别为 `var` 和 `let` 语句缩进 4 个空格，`const` 语句缩进 6 个空格语句。
* Indent of tab with `VariableDeclarator` set to `2` will indent the multi-line variable declarations with 2 tabs.
* 如果缩进设置为 tab 缩进，`VariableDeclarator` 设置为 `2`，多行变量声明将会缩进 2 个 tab。
* Indent of 2 spaces with `SwitchCase` set to `0` will not indent `case` clauses with respect to `switch` statements.
* 如果缩进设置为 2 个空格，`SwitchCase` 设置为 `0`，`case`将不会缩进。
* Indent of 2 spaces with `SwitchCase` set to `2` will indent `case` clauses with 4 spaces with respect to `switch` statements.
* 如果缩进设置为 2 个空格，`SwitchCase` 设置为 `2`，`case` 子句将相对于 `switch` 语句缩进 4 个空格。
* Indent of tabs with `SwitchCase` set to `2` will indent `case` clauses with 2 tabs with respect to `switch` statements.
* 如果缩进设置为 tab 缩进，`SwitchCase` 设置为 2，`case` 子句将相对于 `switch` 语句缩进 2 个 tab。

### tab

Examples of **incorrect** code for this rule with the `"tab"` option:

选项 `"tab"` 的 **错误** 代码示例：

```js
/*eslint indent: ["error", "tab"]*/

if (a) {
     b=c;
function foo(d) {
           e=f;
 }
}
```

Examples of **correct** code for this rule with the `"tab"` option:

选项 `"tab"` 的 **正确** 代码示例：

```js
/*eslint indent: ["error", "tab"]*/

if (a) {
/*tab*/b=c;
/*tab*/function foo(d) {
/*tab*//*tab*/e=f;
/*tab*/}
}
```

### SwitchCase

Examples of **incorrect** code for this rule with the `2, { "SwitchCase": 1 }` options:

选项 `2, { "SwitchCase": 1 }` 的 **错误** 代码示例：

```js
/*eslint indent: ["error", 2, { "SwitchCase": 1 }]*/

switch(a){
case "a":
    break;
case "b":
    break;
}
```

Examples of **correct** code for this rule with the `2, { "SwitchCase": 1 }` option:

选项 `2, { "SwitchCase": 1 }` 的 **正确** 代码示例：

```js
/*eslint indent: ["error", 2, { "SwitchCase": 1 }]*/

switch(a){
  case "a":
    break;
  case "b":
    break;
}
```

### VariableDeclarator

Examples of **incorrect** code for this rule with the `2, { "VariableDeclarator": 1 }` options:

选项 `2, { "VariableDeclarator": 1 }` 的 **错误** 代码示例：

```js
/*eslint indent: ["error", 2, { "VariableDeclarator": 1 }]*/
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

Examples of **correct** code for this rule with the `2, { "VariableDeclarator": 1 }` options:

选项 `2, { "VariableDeclarator": 1 }` 的 **正确** 代码示例：

```js
/*eslint indent: ["error", 2, { "VariableDeclarator": 1 }]*/
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

Examples of **correct** code for this rule with the `2, { "VariableDeclarator": 2 }` options:

选项 `2, { "VariableDeclarator": 2 }` 的 **正确** 代码示例：

```js
/*eslint indent: ["error", 2, { "VariableDeclarator": 2 }]*/
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

Examples of **correct** code for this rule with the `2, { "VariableDeclarator": { "var": 2, "let": 2, "const": 3 } }` options:

选项 `2, { "VariableDeclarator": { "var": 2, "let": 2, "const": 3 } }` 的 **正确** 代码示例：

```js
/*eslint indent: ["error", 2, { "VariableDeclarator": { "var": 2, "let": 2, "const": 3 } }]*/
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

## Compatibility

* **JSHint**: `indent`
* **JSCS**: [validateIndentation](http://jscs.info/rule/validateIndentation)

## Version

This rule was introduced in ESLint 0.14.0.

该规则在 ESLint 0.14.0 被引入。

## Resources

* [Rule source](https://github.com/eslint/eslint/tree/master/lib/rules/indent.js)
* [Documentation source](https://github.com/eslint/eslint/tree/master/docs/rules/indent.md)
