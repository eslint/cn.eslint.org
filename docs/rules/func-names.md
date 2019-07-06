---
title: func-names - Rules
layout: doc
edit_link: https://github.com/eslint/eslint/edit/master/docs/rules/func-names.md
rule_type: suggestion
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# Require or disallow named `function` expressions (func-names)

# 要求或禁止命名的 `function` 表达式 (func-names)

A pattern that's becoming more common is to give function expressions names to aid in debugging. For example:

给函数表达式加个名字可以方便调试，这种模式越来越普遍。例如：

```js
Foo.prototype.bar = function bar() {};
```

Adding the second `bar` in the above example is optional.  If you leave off the function name then when the function throws an exception you are likely to get something similar to `anonymous function` in the stack trace.  If you provide the optional name for a function expression then you will get the name of the function expression in the stack trace.

在上面的例子中添加第二个 `bar`是可选的。如果不使用函数名的话，当该函数抛出异常时，你可能得到一些类似于堆栈里 `anonymous function` 的东西。如果你为函数表达式提供了可选名称，你将在堆栈中找到该函数表达式的名称。

## Rule Details

This rule can enforce or disallow the use of named function expressions.

该规则要求或禁止命名的 `function` 表达式。

## Options

This rule has a string option:

该规则有一个字符串选项：

* `"always"` (default) requires function expressions to have a name
* `"always"` (默认) 要求函数表达式有一个名字
* `"as-needed"` requires function expressions to have a name, if the name cannot be assigned automatically in an ES6 environment
* `"as-needed"` 如果 在 ES6 环境中，这个函数名无法自动被赋值，要求函数表达式有一个名字
* `"never"` disallows named function expressions, except in recursive functions, where a name is needed
* `"never"` 禁止命名函数表达式，除非在递归函数中，名字是需要的

This rule has an object option:

这个规则有一个对象选项:

`"generators": "always" | "as-needed" | "never"`

`"generators": "always" | "as-needed" | "never"`

* `"always"` require named generators
* `"always"` 要求命名的生成器函数 。
* `"as-needed"` require named generators if the name cannot be assigned automatically in an ES6 environment.
* `"as-needed"` 如果无法在ES6环境中自动分配名称，则需要命名的生成器函数。
* `"never"` disallow named generators where possible.
* `"never"` 尽肯能地禁止命名的生成器函数。

When a value for `generators` is not provided the behavior for generator functions falls back to the base option.

当没有为 `generators` 提供值时，生成器函数的行为将回退到基本选项。

### always

Examples of **incorrect** code for this rule with the default `"always"` option:

默认选项 `"always"` 的 **错误** 代码示例：

```js
/*eslint func-names: ["error", "always"]*/

Foo.prototype.bar = function() {};

(function() {
    // ...
}())
```

Examples of **correct** code for this rule with the default `"always"` option:

默认选项 `"always"` 的 **正确** 代码示例：

```js
/*eslint func-names: ["error", "always"]*/

Foo.prototype.bar = function bar() {};

(function bar() {
    // ...
}())
```

### as-needed

ECMAScript 6 introduced a `name` property on all functions. The value of `name` is determined by evaluating the code around the function to see if a name can be inferred. For example, a function assigned to a variable will automatically have a `name` property equal to the name of the variable. The value of `name` is then used in stack traces for easier debugging.

ECMAScript 6 的所有函数中都有一个 `name` 属性。`name`值是根据函数的代码来推断的。比如，一个函数赋值给一个变量将会自动有一个 `name` 属性等同于变量的名称。在堆栈跟踪中使用 `name`值，更容易调试。

Examples of **incorrect** code for this rule with the `"as-needed"` option:

选项 `"as-needed"` 的 **错误** 代码示例：

```js
/*eslint func-names: ["error", "as-needed"]*/

Foo.prototype.bar = function() {};

(function() {
    // ...
}())
```

Examples of **correct** code for this rule with the `"as-needed"` option:

选项 `"as-needed"` 的 **正确** 代码示例：

```js
/*eslint func-names: ["error", "as-needed"]*/

var bar = function() {};

(function bar() {
    // ...
}())
```

### never

Examples of **incorrect** code for this rule with the `"never"` option:

选项 `"never"` 的 **错误** 代码示例：

```js
/*eslint func-names: ["error", "never"]*/

Foo.prototype.bar = function bar() {};

(function bar() {
    // ...
}())
```

Examples of **correct** code for this rule with the `"never"` option:

选项 `"never"` 的 **正确** 代码示例：

```js
/*eslint func-names: ["error", "never"]*/

Foo.prototype.bar = function() {};

(function() {
    // ...
}())
```

### generators

Examples of **incorrect** code for this rule with the `"always", { "generators": "as-needed" }` options:

选项 `"always", { "generators": "as-needed" }` 的 **错误** 代码示例：

```js
/*eslint func-names: ["error", "always", { "generators": "as-needed" }]*/

(function*() {
    // ...
}())
```

Examples of **correct** code for this rule with the `"always", { "generators": "as-needed" }` options:

选项 `"always", { "generators": "as-needed" }` 的 **正确** 代码示例：

```js
/*eslint func-names: ["error", "always", { "generators": "as-needed" }]*/

var foo = function*() {};
```

Examples of **incorrect** code for this rule with the `"always", { "generators": "never" }` options:

选项 `"always", { "generators": "never" }` 的 **错误** 代码示例：

```js
/*eslint func-names: ["error", "always", { "generators": "never" }]*/

var foo = bar(function *baz() {});
```

Examples of **correct** code for this rule with the `"always", { "generators": "never" }` options:

选项 `"always", { "generators": "never" }` 的 **正确** 代码示例：

```js
/*eslint func-names: ["error", "always", { "generators": "never" }]*/

var foo = bar(function *() {});
```

Examples of **incorrect** code for this rule with the `"as-needed", { "generators": "never" }` options:

选项 `"as-needed", { "generators": "never" }` 的 **错误** 代码示例：

```js
/*eslint func-names: ["error", "as-needed", { "generators": "never" }]*/

var foo = bar(function *baz() {});
```

Examples of **correct** code for this rule with the `"as-needed", { "generators": "never" }` options:

选项 `"as-needed", { "generators": "never" }` 的 **正确** 代码示例：

```js
/*eslint func-names: ["error", "as-needed", { "generators": "never" }]*/

var foo = bar(function *() {});
```

Examples of **incorrect** code for this rule with the `"never", { "generators": "always" }` options:

选项 `"never", { "generators": "always" }` 的 **错误** 代码示例：

```js
/*eslint func-names: ["error", "never", { "generators": "always" }]*/

var foo = bar(function *() {});
```

Examples of **correct** code for this rule with the `"never", { "generators": "always" }` options:

选项 `"never", { "generators": "always" }` 的 **正确** 代码示例：

```js
/*eslint func-names: ["error", "never", { "generators": "always" }]*/

var foo = bar(function *baz() {});
```

## Further Reading

* [Functions Explained](http://markdaggett.com/blog/2013/02/15/functions-explained/)
* [Function Names in ES6](http://2ality.com/2015/09/function-names-es6.html)

## Compatibility

* **JSCS**: [requireAnonymousFunctions](https://jscs-dev.github.io/rule/requireAnonymousFunctions)
* **JSCS**: [disallowAnonymousFunctions](https://jscs-dev.github.io/rule/disallowAnonymousFunctions)

## Version

This rule was introduced in ESLint 0.4.0.

该规则在 ESLint 0.4.0 中被引入。

## Resources

* [Rule source](https://github.com/eslint/eslint/tree/master/lib/rules/func-names.js)
* [Documentation source](https://github.com/eslint/eslint/tree/master/docs/rules/func-names.md)
