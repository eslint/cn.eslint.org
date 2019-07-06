---
title: object-shorthand - Rules
layout: doc
edit_link: https://github.com/eslint/eslint/edit/master/docs/rules/object-shorthand.md
rule_type: suggestion
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# Require Object Literal Shorthand Syntax (object-shorthand)

# 要求对象字面量简写语法 (object-shorthand)

(fixable) The `--fix` option on the [command line](../user-guide/command-line-interface#fixing-problems) can automatically fix some of the problems reported by this rule.

(fixable) [命令行](../user-guide/command-line-interface#fixing-problems)中的 `--fix` 选项可以自动修复一些该规则报告的问题。

ECMAScript 6 provides a concise form for defining object literal methods and properties. This
syntax can make defining complex object literals much cleaner.

ECMAScript 6 提供了简写的形式去定义对象中的方法和属性。这个语法可以更清洁地定义复杂对象字面量。

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
to all methods (including generators) defined in object literals and any
properties defined where the key name matches name of the assigned variable.

该规则强制简写语法的使用。这适用于对象字面量中的所有方法（包括 generators ）以及键名与已赋值的变量名相匹配的任何属性。

Each of the following properties would warn:

以下的每个属性都将发出警告：

```js
/*eslint object-shorthand: "error"*/
/*eslint-env es6*/

var foo = {
    w: function() {},
    x: function *() {},
    [y]: function() {},
    z: z
};
```

In that case the expected syntax would have been:

这种情况下，期望的语法应该是这样：

```js
/*eslint object-shorthand: "error"*/
/*eslint-env es6*/

var foo = {
    w() {},
    *x() {},
    [y]() {},
    z
};
```

This rule does not flag arrow functions inside of object literals.
The following will *not* warn:

该规则不标记对象字面量中的箭头函数。下面的示例将 **不**发出警告：

```js
/*eslint object-shorthand: "error"*/
/*eslint-env es6*/

var foo = {
    x: (y) => y
};
```

See Also:

参见：

- [`no-useless-rename`](https://eslint.org/docs/rules/no-useless-rename) which disallows renaming import, export, and destructured assignments to the same name.
- [`no-useless-rename`](https://eslint.org/docs/rules/no-useless-rename) 它不允许将导入、导出和销毁后的赋值重命名为相同的名称。

## Options

The rule takes an option which specifies when it should be applied. It can be set to one of the following values:

该规则有一个选项。可以设置为下列值之一：

- `"always"` (default) expects that the shorthand will be used whenever possible.
- `"always"` (默认) 只要有可能，简写就应该被使用。
- `"methods"` ensures the method shorthand is used (also applies to generators).
- `"methods"` 保证方法简写被使用（同样适用于 generators ）。
- `"properties"` ensures the property shorthand is used (where the key and variable name match).
- `"properties"` 保证属性简写被使用 (键和变量名称相匹配的情况).
- `"never"` ensures that no property or method shorthand is used in any object literal.
- `"never"` 保证对象字面量中的任何属性和方法都不使用简写。
- `"consistent"` ensures that either all shorthand or all long-form will be used in an object literal.
- `"consistent"` 保证对象字面量的简写或非简写一致性。
- `"consistent-as-needed"` ensures that either all shorthand or all long-form will be used in an object literal, but ensures all shorthand whenever possible.
- `"consistent-as-needed"` 保证对象字面量的简写或非简写一致性，但尽可能的全部使用简写。

You can set the option in configuration like this:

你可以在配置中这样设置：

```json
{
    "object-shorthand": ["error", "always"]
}
```

Additionally, the rule takes an optional object configuration:

另外，该规则有个可选配置对象：

- `"avoidQuotes": true` indicates that long-form syntax is preferred whenever the object key is a string literal (default: `false`). Note that this option can only be enabled when the string option is set to `"always"`, `"methods"`, or `"properties"`.
- `"avoidQuotes": true` 表示对象的键是字符串时，倾向于长格式的语法。(默认: `false`)。注意该选项只在 `"always"`、`"methods"` 或 `"properties"` 选项下才有效。
- `"ignoreConstructors": true` can be used to prevent the rule from reporting errors for constructor functions. (By default, the rule treats constructors the same way as other functions.) Note that this option can only be enabled when the string option is set to `"always"` or `"methods"`.
- `"ignoreConstructors": true` 可以用来阻止报告构造函数出现的错误。 (默认情况下，该规则把构造函数当成普通的函数。) 注意该选项只在 `"always"` 或 `"methods"` 选项下才有效。
- `"avoidExplicitReturnArrows": true` indicates that methods are preferred over explicit-return arrow functions for function properties. (By default, the rule allows either of these.) Note that this option can only be enabled when the string option is set to `"always"` or `"methods"`.
- `"avoidExplicitReturnArrows": true` 表示函数属性相对于显式返回的箭头函数更倾向于方法。 (默认情况下，两者皆可)注意该选项只在 `"always"` 或 `"methods"` 选项下才有效。

### `avoidQuotes`

```json
{
    "object-shorthand": ["error", "always", { "avoidQuotes": true }]
}
```

Example of **incorrect** code for this rule with the `"always", { "avoidQuotes": true }` option:

选项 `"always", { "avoidQuotes": true }` 的 **错误** 代码示例：

```js
/*eslint object-shorthand: ["error", "always", { "avoidQuotes": true }]*/
/*eslint-env es6*/

var foo = {
    "bar-baz"() {}
};
```

Example of **correct** code for this rule with the `"always", { "avoidQuotes": true }` option:

选项 `"always", { "avoidQuotes": true }` 的 **正确** 代码示例：

```js
/*eslint object-shorthand: ["error", "always", { "avoidQuotes": true }]*/
/*eslint-env es6*/

var foo = {
    "bar-baz": function() {},
    "qux": qux
};
```

### `ignoreConstructors`

```json
{
    "object-shorthand": ["error", "always", { "ignoreConstructors": true }]
}
```

Example of **correct** code for this rule with the `"always", { "ignoreConstructors": true }` option:

选项  `"always", { "ignoreConstructors": true }` 的 **正确** 代码示例：

```js
/*eslint object-shorthand: ["error", "always", { "ignoreConstructors": true }]*/
/*eslint-env es6*/

var foo = {
    ConstructorFunction: function() {}
};
```

### `avoidExplicitReturnArrows`

```json
{
    "object-shorthand": ["error", "always", { "avoidExplicitReturnArrows": true }]
}
```

Example of **incorrect** code for this rule with the `"always", { "avoidExplicitReturnArrows": true }` option:

选项 `"always", { "avoidExplicitReturnArrows": true }` 的 **错误** 代码示例：

```js
/*eslint object-shorthand: ["error", "always", { "avoidExplicitReturnArrows": true }]*/
/*eslint-env es6*/

var foo = {
  foo: (bar, baz) => {
    return bar + baz;
  },

  qux: (foobar) => {
    return foobar * 2;
  }
};
```

Example of **correct** code for this rule with the `"always", { "avoidExplicitReturnArrows": true }` option:

选项 `"always", { "avoidExplicitReturnArrows": true }` 的 **正确** 代码示例：

```js
/*eslint object-shorthand: ["error", "always", { "avoidExplicitReturnArrows": true }]*/
/*eslint-env es6*/

var foo = {
  foo(bar, baz) {
    return bar + baz;
  },

  qux: foobar => foobar * 2
};
```

Example of **incorrect** code for this rule with the `"consistent"` option:

选项 `"consistent"` 的 **错误** 代码示例：

```js
/*eslint object-shorthand: [2, "consistent"]*/
/*eslint-env es6*/

var foo = {
    a,
    b: "foo",
};
```

Examples of **correct** code for this rule with the `"consistent"` option:

选项 `"consistent"` 的 **正确** 代码示例：

```js
/*eslint object-shorthand: [2, "consistent"]*/
/*eslint-env es6*/

var foo = {
    a: a,
    b: "foo"
};

var bar = {
    a,
    b,
};
```

Example of **incorrect** code with the `"consistent-as-needed"` option, which is very similar to `"consistent"`:

选项 `"consistent-as-needed"`（ 类似于 `"consistent"`） 的 **错误** 代码示例：

```js
/*eslint object-shorthand: [2, "consistent-as-needed"]*/
/*eslint-env es6*/

var foo = {
    a: a,
    b: b,
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
