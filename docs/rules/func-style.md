---
title: Rule func-style
layout: doc
translator: molee1905
proofreader: molee1905
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# Enforce Function Style (func-style)

# 强制函数风格 (func-style)

There are two ways of defining functions in JavaScript: function declarations and function expressions. Declarations have the `function` keyword first, followed by a name, followed by its arguments and the function body, such as:

在 Javascript 中，有两种方式定义函数：函数声明和函数表达式。函数声明是以`function`关键字开头，然后是函数的名字，其次是它的参数和函数主体，例如：

```js
function doSomething() {
    // ...
}
```

Equivalent function expressions begin with the `var` keyword, followed by a name, and then the function itself, such as:

函数表达式以`var`关键字开头，后面是函数的名称，然后是函数本身，例如：

```js
var doSomething = function() {
    // ...
};
```

The primary difference between function declarations and function expressions is that declarations are *hoisted* to the top of the scope in which they are defined, which allows you to write code that uses the function before the declaration. For example:

函数声明和函数表达式的主要区别是：所有的声明都被*提升*到当前作用域的顶部，这就意味着可以把调用它的语句放在函数声明之前。例如：

```js
doSomething();

function doSomething() {
    // ...
}
```

Although this code might seem like an error, it actually works fine because JavaScript engines hoist the function declarations to the top of the scope. That means this code is treated as if the declaration came before the invocation.

虽然这段代码可能看起来像一个错误，但实际上由于 Javascript 引擎将函数声明提升到了作用域顶部，这段代码是可以运行的。这就意味着这段代码被视为在调用之前进行了声明。

For function expressions, you must define the function before it is used, otherwise it causes an error. Example:

对于函数表达式，必须在使用它之前进行定义，否则将会导致错误。例如：

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

This rule is aimed at enforcing a particular type of function style throughout a JavaScript file, either declarations or expressions. You can specify which you prefer in the configuration.

该规则目的在于在一个 Javascript 文件中强制使用一种特定的函数风格，函数声明或函数表达式。你可以在配置文件中指定你喜欢的。

## Options

### "expression"

This is the default configuration. It reports an error when function declarations are used instead of function expressions.

这是默认配置。当应使用函数表达式却使用了函数声明时，它将报告一个错误。

```json
"func-style": [2, "expression"]
```

The following patterns are considered problems:

以下模式被认为是有问题的：

```js
/*eslint func-style: [2, "expression"]*/

function foo() {
    // ...
}
```

The following patterns are not considered problems:

以下模式被认为是没有问题的：

```js
/*eslint func-style: [2, "expression"]*/

var foo = function() {
    // ...
};
```

### "declaration"

This reports an error if any function expressions are used where function declarations are expected. You can specify to use expressions instead:

在应使用函数声明的地方使用了函数表达式，它将会报告一个错误。你可以指定函数表达式来代替：

```json
"func-style": [2, "declaration"]
```

An additional option object can be added with a property `"allowArrowFunctions"`.  Setting this to `true` will allow arrow functions.

可以添加一个额外的选项对象，属性值为`"allowArrowFunctions"`。当设置为`true`时，将允许使用箭头函数。

```json
"func-style": [2, "declaration", { "allowArrowFunctions": true }]
```

The following patterns are considered problems:

以下模式被认为是有问题的：

```js
/*eslint func-style: [2, "declaration"]*/

var foo = function() {
    // ...
};
```

```js
/*eslint func-style: [2, "declaration"]*/

var foo = () => {};
```

The following patterns are not considered problems:

以下模式被认为是没有问题的：

```js
/*eslint func-style: [2, "declaration"]*/

function foo() {
    // ...
}

// Methods (functions assigned to objects) are not checked by this rule
SomeObject.foo = function() {
    // ...
};
```

```js
/*eslint func-style: [2, "declaration", { "allowArrowFunctions": true }]*/

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
