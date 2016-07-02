---
title: Rule func-style
layout: doc
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# enforce the consistent use of either `function` declarations or expressions (func-style)

# 强制 `function` 声明或表达式的一致性 (func-style)

There are two ways of defining functions in JavaScript: `function` declarations and `function` expressions. Declarations contain the `function` keyword first, followed by a name and then its arguments and the function body, for example:

在 Javascript 中，有两种方式定义函数：`function` 声明和 `function` 表达式。函数声明是以 `function` 关键字开头，然后是函数的名字，其次是它的参数和函数主体，例如：

```js
function doSomething() {
    // ...
}
```

Equivalent function expressions begin with the `var` keyword, followed by a name and then the function itself, such as:

函数表达式以 `var` 关键字开头，后面是函数的名称，然后是函数本身，例如：

```js
var doSomething = function() {
    // ...
};
```

The primary difference between `function` declarations and `function expressions` is that declarations are *hoisted* to the top of the scope in which they are defined, which allows you to write code that uses the function before its declaration. For example:

函数声明和函数表达式的主要区别是：所有的声明都被*提升*到当前作用域的顶部，这就意味着可以把调用它的语句放在函数声明之前。例如：

```js
doSomething();

function doSomething() {
    // ...
}
```

Although this code might seem like an error, it actually works fine because JavaScript engines hoist the `function` declarations to the top of the scope. That means this code is treated as if the declaration came before the invocation.

虽然这段代码可能看起来像一个错误，但实际上由于 Javascript 引擎将函数声明提升到了作用域顶部，这段代码是可以运行的。这就意味着这段代码被视为在调用之前进行了声明。

For `function` expressions, you must define the function before it is used, otherwise it causes an error. Example:

对于 `function` 表达式，必须在使用它之前进行定义，否则将会导致错误。例如：

```js
doSomething();  // error!

var doSomething = function() {
    // ...
};
```

In this case, `doSomething()` is undefined at the time of invocation and so causes a runtime error.

在这个例子中，`doSomething()`在调用时是没有定义的，所以导致运行时错误。

Due to these different behaviors, it is common to have guidelines as to which style of function should be used. There is really no correct or incorrect choice here, it is just a preference.

由于这些不同的行为，关于应该使用哪种类型的函数，一般要制定一些准则。这种选择没有正确或错误之分，只是一种偏好而已。

## Rule Details

This rule enforces a particular type of `function` style throughout a JavaScript file, either declarations or expressions. You can specify which you prefer in the configuration.

该规则强制在一个 JavaScript 文件中强制使用一种特定的 `function` 风格：函数声明或函数表达式。你可以在配置文件中指定你喜欢的。

## Options

This rule has a string option:

该规则有一个字符串选项：

* `"expression"` (default) requires the use of function expressions instead of function declarations
* `"expression"` (默认) 要求使用函数表达式而不是函数声明
* `"declaration"` requires the use of function declarations instead of function expressions
* `"declaration"` 要求使用函数声明而不是函数表达式

This rule has an object option for an exception:

该规则对表达式有一个对象选项：

* `"allowArrowFunctions": true` (default `false`) allows the use of arrow functions
* `"allowArrowFunctions": true` (默认为 `false`) 允许使用箭头函数

### expression

Examples of **incorrect** code for this rule with the default `"expression"` option:

默认选项 `"expression"` 的 **错误** 代码示例：

```js
/*eslint func-style: ["error", "expression"]*/

function foo() {
    // ...
}
```

Examples of **correct** code for this rule with the default `"expression"` option:

默认选项 `"expression"` 的 **正确** 代码示例：

```js
/*eslint func-style: ["error", "expression"]*/

var foo = function() {
    // ...
};
```

### declaration

Examples of **incorrect** code for this rule with the `"declaration"` option:

选项 `"declaration"` 的 **错误** 代码示例：

```js
/*eslint func-style: ["error", "declaration"]*/

var foo = function() {
    // ...
};

var foo = () => {};
```

Examples of **correct** code for this rule with the `"declaration"` option:

选项 `"declaration"` 的 **正确** 代码示例：

```js
/*eslint func-style: ["error", "declaration"]*/

function foo() {
    // ...
}

// Methods (functions assigned to objects) are not checked by this rule
SomeObject.foo = function() {
    // ...
};
```

### allowArrowFunctions

Examples of additional **correct** code for this rule with the `"declaration", { "allowArrowFunctions": true }` options:

选项 `"declaration", { "allowArrowFunctions": true }` 的 **正确** 代码示例：

```js
/*eslint func-style: ["error", "declaration", { "allowArrowFunctions": true }]*/

var foo = () => {};
```

## When Not To Use It

If you want to allow developers to each decide how they want to write functions on their own, then you can disable this rule.

如果你允许每个开发者自己决定使用那种风格的函数，则可以禁用此规则。

## Further Reading

* [JavaScript Scoping and Hoisting](http://www.adequatelygood.com/JavaScript-Scoping-and-Hoisting.html)

## Version

This rule was introduced in ESLint 0.2.0.

该规则在 ESLint 0.2.0 被引入。

## Resources

* [Rule source](https://github.com/eslint/eslint/tree/master/lib/rules/func-style.js)
* [Documentation source](https://github.com/eslint/eslint/tree/master/docs/rules/func-style.md)
