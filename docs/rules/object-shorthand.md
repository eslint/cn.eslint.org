---
title: Rule object-shorthand
layout: doc
translator: molee1905
proofreader: molee1905
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# Require Object Literal Shorthand Syntax (object-shorthand)

# 要求对象字面量简写语法 (object-shorthand)

EcmaScript 6 provides a concise form for defining object literal methods and properties. This
syntax can make defining complex object literals much cleaner.

EcmaScript 6 提供了简写的形式去定义对象中的方法和属性。这个语法可以更清洁地定义复杂对象字面量。

Here are a few common examples using the ES5 syntax:

以下几个常见的例子，使用 ES5 语法：

```js
// properties
var foo = {
    x: x,
    y: y,
    z: z,
};

// methods
var foo = {
    a: function() {},
    b: function() {}
};
```

Now here are ES6 equivalents:

下面是等效的 ES6 语法：

```js
/*eslint-env es6*/

// properties
var foo = {x, y, z};

// methods
var foo = {
    a() {},
    b() {}
};
```

## Rule Details

This rule enforces the use of the shorthand syntax. This applies
to all methods (including generators) defined on object literals and any
properties defined where the key name matches name of the assigned variable.

该规则强制简写语法的使用。这适用于对象字面量中的所有方法（包括 generators ）以及键名与已赋值的变量名相匹配的任何属性。

Each of the following properties would warn:

以下的每个属性都将发出警告：

```js
/*eslint object-shorthand: "error"*/
/*eslint-env es6*/

var foo = {
    x: function() {},
    y: function *() {},
    z: z
};
```

In that case the expected syntax would have been:

这种情况下，期望的语法应该是这样：

```js
/*eslint object-shorthand: "error"*/
/*eslint-env es6*/

var foo = {
    x() {},
    *y() {},
    z
};
```

This rule does not flag arrow functions inside of object literals.
The following will *not* warn:

该规则不标记对象字面量中的箭头函数。下面的示例将**不**发出警告：

```js
/*eslint object-shorthand: "error"*/
/*eslint-env es6*/

var foo = {
    x: (y) => y
};
```

## Options

The rule takes an option which specifies when it should be applied. It can be set to
`"always"`, `"properties"`, `"methods"`, or `"never"`. The default is `"always"`.

该规则有一个选项。可以设置为`"always"`，`"properties"`，`"methods"`或`"never"`。 默认为`"always"`。

* `"always"` expects that the shorthand will be used whenever possible.
* `"always"` 只要有可能，简写就应该被使用。
* `"methods"` ensures the method shorthand is used (also applies to generators).
* `"methods"` 保证方法简写被使用（同样适用于 generators ）。
* `"properties` ensures the property shorthand is used (where the key and variable name match).
* `"properties` 保证属性简写被使用 (键和变量名称相匹配的情况).
* `"never"` ensures that no property or method shorthand is used in any object literal.
* `"never"` 保证对象字面量中的任何属性和方法都不使用简写。

You can set the option in configuration like this:

你可以在配置中这样设置：

```json
{
    "object-shorthand": ["error", "always"]
}
```

While set to `"always"` or `"methods"`, constructor functions can be ignored with the optional parameter `"ignoreConstructors"` enabled. Note: The first parameter must be specified when using this optional parameter.

当设置`"always"`或`"methods"`时，如果启用`"ignoreConstructors"`，构造函数可以被忽略。注意：当使用这个可选项时，必须制定一个参数。

```json
{
    "object-shorthand": ["error", "always", { "ignoreConstructors": true }]
}
```

The following will *not* warn when `"ignoreConstructors"` is enabled:

当启用`"ignoreConstructors"`时，下面的示例将**不**发出警告：

```js
/*eslint object-shorthand: ["error", "always", { "ignoreConstructors": true }]*/
/*eslint-env es6*/

var foo = {
    ConstructorFunction: function() {}
};
```

## When Not To Use It

Anyone not yet in an ES6 environment would not want to apply this rule. Others may find the terseness of the shorthand
syntax harder to read and may not want to encourage it with this rule.

非 ES6 环境不适用于此规则。其他人发现简洁的简写语法更难阅读，可能不鼓励使用此规则。

## Further Reading

[Object initializer - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer)

## Version

This rule was introduced in ESLint 0.20.0.

该规则在 ESLint 0.20.0 中被引入。

## Resources

* [Rule source](https://github.com/eslint/eslint/tree/master/lib/rules/object-shorthand.js)
* [Documentation source](https://github.com/eslint/eslint/tree/master/docs/rules/object-shorthand.md)
