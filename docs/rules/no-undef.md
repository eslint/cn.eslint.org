---
title: no-undef - Rules
layout: doc
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# Disallow Undeclared Variables (no-undef)

# 禁用未声明的变量 (no-undef)

(recommended) The `"extends": "eslint:recommended"` property in a configuration file enables this rule.

(recommended) 配置文件中的 `"extends": "eslint:recommended"` 属性启用了此规则。

This rule can help you locate potential ReferenceErrors resulting from misspellings of variable and parameter names, or accidental implicit globals (for example, from forgetting the `var` keyword in a `for` loop initializer).

此规则可帮助你定位由变量漏写、参数名漏写和意外的隐式全局变量声明所导致的潜在引用错误（比如，在 `for` 循环语句中初始化变量忘写 `var` 关键字）

## Rule Details

Any reference to an undeclared variable causes a warning, unless the variable is explicitly mentioned in a `/*global ...*/` comment, or specified in the [`globals` key in the configuration file](https://eslint.org/docs/user-guide/configuring#specifying-globals). A common use case for these is if you intentionally use globals that are defined elsewhere (e.g. in a script sourced from HTML).

对任何未声明的变量的引用都会引起一个警告，除非显式地在 `/*global ...*/` 注释中指定，或在 [`globals` key in the configuration file](https://eslint.org/docs/user-guide/configuring#specifying-globals) 中指定。另一个常见的用例是，你有意使用定义在其他地方的全局变量(例如来自 HTML 的脚本)。

Examples of **incorrect** code for this rule:

**错误** 代码示例：

```js
/*eslint no-undef: "error"*/

var a = someFunction();
b = 10;
```

Examples of **correct** code for this rule with `global` declaration:

有 `global` 声明时，该规则的 **正确** 代码示例：

```js
/*global someFunction b:true*/
/*eslint no-undef: "error"*/

var a = someFunction();
b = 10;
```

The `b:true` syntax in `/*global */` indicates that assignment to `b` is correct.

`/*global */` 中的 `b:true` 表明对 `b` 继续赋值是正确的。

Examples of **incorrect** code for this rule with `global` declaration:

有 `global` 声明时，该规则的 **错误** 代码示例：

```js
/*global b*/
/*eslint no-undef: "error"*/

b = 10;
```

By default, variables declared in `/*global */` are read-only, therefore assignment is incorrect.

默认情况下，`/*global */` 中声明的变量是只读的，因此对其进行赋值是错误的。

## Options

* `typeof` set to true will warn for variables used inside typeof check (Default false).
* `typeof` 设置为 true，将对 typeof 中用到的变量发出警告（默认为false）。

### typeof

Examples of **correct** code for the default `{ "typeof": false }` option:

默认选项 `{ "typeof": false }` 的 **正确** 代码示例：

```js
/*eslint no-undef: "error"*/

if (typeof UndefinedIdentifier === "undefined") {
    // do something ...
}
```

You can use this option if you want to prevent `typeof` check on a variable which has not been declared.

如果想阻止在 `typeof` 运算中有未申明的变量导致的警告，可以用此项。

Examples of **incorrect** code for the `{ "typeof": true }` option:

选项 `{ "typeof": true }` 的 **错误** 代码示例：

```js
/*eslint no-undef: ["error", { "typeof": true }] */

if(typeof a === "string"){}
```

Examples of **correct** code for the `{ "typeof": true }` option with `global` declaration:

有 `global` 声明时，选项 `{ "typeof": true }` 的 **正确** 代码示例：

```js
/*global a*/
/*eslint no-undef: ["error", { "typeof": true }] */

if(typeof a === "string"){}
```

## Environments

For convenience, ESLint provides shortcuts that pre-define global variables exposed by popular libraries and runtime environments. This rule supports these environments, as listed in [Specifying Environments](../user-guide/configuring).  A few examples are given below.

为了方便，ESlint 提供了预定义流行类库和运行时环境暴露的全局变量的快捷方式。该规则支持这些环境，如 [指定 Environments](../user-guide/configuring) 中列出的。使用如下：

### browser

Examples of **correct** code for this rule with `browser` environment:

`browser` 环境下的 **正确** 代码示例：

```js
/*eslint no-undef: "error"*/
/*eslint-env browser*/

setTimeout(function() {
    alert("Hello");
});
```

### Node.js

Examples of **correct** code for this rule with `node` environment:

`node` 环境下的 **正确** 代码示例：

```js
/*eslint no-undef: "error"*/
/*eslint-env node*/

var fs = require("fs");
module.exports = function() {
    console.log(fs);
};
```

## When Not To Use It

If explicit declaration of global variables is not to your taste.

如果你不需要明确声明全局变量，可以关闭此规则。

## Compatibility

This rule provides compatibility with treatment of global variables in [JSHint](http://jshint.com/) and [JSLint](http://www.jslint.com).

该规则提供了合适对待全局变量的方法。 它在 [JSHint](http://www.jshint.com) 和[JSLint](http://www.jslint.com)。

## Version

This rule was introduced in ESLint 0.0.9.

该规则在 ESLint 0.0.9 被引入。

## Resources

* [Rule source](https://github.com/eslint/eslint/tree/master/lib/rules/no-undef.js)
* [Documentation source](https://github.com/eslint/eslint/tree/master/docs/rules/no-undef.md)
