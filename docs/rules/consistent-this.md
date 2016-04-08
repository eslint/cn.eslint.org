---
title: Rule consistent-this
layout: doc
translator: molee1905
proofreader: sunshiner
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# Require Consistent This (consistent-this)

# 要求一致的 This (consistent-this)

It is often necessary to capture the current execution context in order to make it available subsequently. A prominent example of this are jQuery callbacks:

通常，非常有必要获取当前执行环境的上下文以便在后续过程中继续使用。一个常见的例子就是jQuery的回调函数：

```js
var that = this;
jQuery('li').click(function (event) {
    // here, "this" is the HTMLElement where the click event occurred
    that.setFoo(42);
});
```

There are many commonly used aliases for `this` such as `that`, `self` or `me`. It is desirable to ensure that whichever alias the team agrees upon is used consistently throughout the application.

`this`有多常用的别名例如`self`，`that`或`me`。所以在整个项目中确保团队成员使用同样的别名是一个很有必要的事情。

## Rule Details

This rule designates a variable as the chosen alias for `this`. It then enforces two things:

该规则指定一个变量作为`this`的别名。它将强制两件事情：

* if a variable with the designated name is declared or assigned to, it *must* explicitly be assigned the current execution context, i.e. `this`

* 如果指定的那个名称被声明或赋值，那么它*必须*显式的被赋值为当前执行环境的上下文，比如`this`。

* if `this` is explicitly assigned to a variable, the name of that variable must be the designated one

* 如果`this`被显示的赋值给一个变量，该变量必须是指定的那个名称。

## Options

This rule takes one option, a string, which is the designated `this` variable. The default is `that`.

该规则有一个可选项，是个字符串，用来指定`this`的别名。

```json
"consistent-this": ["error", "that"]
```

Additionally, you may configure extra aliases for cases where there are more than one supported alias for `this`.

另外，针对多个地方支持`this`别名的，你可以配置额外的别名。

```js
{ "consistent-this": [ "error", "self",  "vm" ] }
```

The following patterns are considered problems:

以下模式被认为是有问题的：

```js
/*eslint consistent-this: ["error", "that"]*/

var that = 42;

var self = this;

that = 42;

self = this;
```

The following patterns are not considered problems:

以下模式被认为是没有问题的：

```js
/*eslint consistent-this: ["error", "that"]*/

var that = this;

var self = 42;

var self;

that = this;

foo.bar = this;
```

A declaration of an alias does not need to assign `this` in the declaration, but it must perform an appropriate assignment in the same scope as the declaration. The following patterns are also considered okay:

别名没有必要在声明时就赋值为`this`，但必须在和声明时同样的作用域下完成赋值。以下模式被认为是可以的：

```js
/*eslint consistent-this: ["error", "that"]*/

var that;
that = this;

var foo, that;
foo = 42;
that = this;
```

But the following pattern is considered a warning:

但以下模式被认为是个警告：

```js
/*eslint consistent-this: ["error", "that"]*/

var that;
function f() {
    that = this;
}
```

## When Not To Use It

If you need to capture nested context, `consistent-this` is going to be problematic. Code of that nature is usually difficult to read and maintain and you should consider refactoring it.

如果你需要获取嵌套的上下文，`consistent-this`是会有问题的。这种类型的代码通常很难阅读和维护，你应该考虑重构它。

## Version

This rule was introduced in ESLint 0.0.9.

该规则在 ESLint 0.0.9 被引入。

## Resources

* [Rule source](https://github.com/eslint/eslint/tree/master/lib/rules/consistent-this.js)
* [Documentation source](https://github.com/eslint/eslint/tree/master/docs/rules/consistent-this.md)
