---
title: consistent-this - Rules
layout: doc
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# Require Consistent This (consistent-this)

# 要求一致的 This (consistent-this)

It is often necessary to capture the current execution context in order to make it available subsequently. A prominent example of this are jQuery callbacks:

通常，非常有必要获取当前执行环境的上下文以便在后续过程中继续使用。一个常见的例子就是 jQuery 的回调函数：

```js
var that = this;
jQuery('li').click(function (event) {
    // here, "this" is the HTMLElement where the click event occurred
    that.setFoo(42);
});
```

There are many commonly used aliases for `this` such as `that`, `self` or `me`. It is desirable to ensure that whichever alias the team agrees upon is used consistently throughout the application.

`this` 有多个常用的别名，例如 `self`、`that` 或 `me` 。在整个项目中确保团队成员使用同样的别名是一个很有必要的事情。

## Rule Details

This rule enforces two things about variables with the designated alias names for `this`:

该规则指定一个变量作为 `this` 的别名。它将强制两件事情：

* If a variable with a designated name is declared, it *must* be either initialized (in the declaration) or assigned (in the same scope as the declaration) the value `this`.
* 如果一个变量声明为一个指定的名称，它 *必须* 初始化（在声明语句中）或被赋值（与声明语句在同一范围内）为 `this`。
* If a variable is initialized or assigned the value `this`, the name of the variable *must* be a designated alias.
* 如果一个变量初始化或被赋值为 `this`，那么该变量 *必须* 是指定的别名。

## Options

This rule has one or more string options:

该规则有一个到两个字符串选项：

* designated alias names for `this` (default `"that"`)
* 为 `this` 指定别名 (默认 `"that"`)

Examples of **incorrect** code for this rule with the default `"that"` option:

默认选项 `"that"` 的 **错误** 代码示例：

```js
/*eslint consistent-this: ["error", "that"]*/

var that = 42;

var self = this;

that = 42;

self = this;
```

Examples of **correct** code for this rule with the default `"that"` option:

默认选项 `"that"` 的 **正确** 代码示例：

```js
/*eslint consistent-this: ["error", "that"]*/

var that = this;

var self = 42;

var self;

that = this;

foo.bar = this;
```

Examples of **incorrect** code for this rule with the default `"that"` option, if the variable is not initialized:

如果指定的变量没有初始化，默认选项 `"that"` 的 **错误** 代码示例：

```js
/*eslint consistent-this: ["error", "that"]*/

var that;
function f() {
    that = this;
}
```

Examples of **correct** code for this rule with the default `"that"` option, if the variable is not initialized:

如果指定的变量没有初始化，默认选项 `"that"` 的 **正确** 代码示例：

```js
/*eslint consistent-this: ["error", "that"]*/

var that;
that = this;

var foo, that;
foo = 42;
that = this;
```

## When Not To Use It

If you need to capture nested context, `consistent-this` is going to be problematic. Code of that nature is usually difficult to read and maintain and you should consider refactoring it.

如果你需要获取嵌套的上下文，`consistent-this` 是会有问题的。这种类型的代码通常很难阅读和维护，你应该考虑重构它。

## Version

This rule was introduced in ESLint 0.0.9.

该规则在 ESLint 0.0.9 被引入。

## Resources

* [Rule source](https://github.com/eslint/eslint/tree/master/lib/rules/consistent-this.js)
* [Documentation source](https://github.com/eslint/eslint/tree/master/docs/rules/consistent-this.md)
