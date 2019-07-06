---
title: prefer-destructuring - Rules
layout: doc
edit_link: https://github.com/eslint/eslint/edit/master/docs/rules/prefer-destructuring.md
rule_type: suggestion
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# Prefer destructuring from arrays and objects (prefer-destructuring)

# 优先使用数组和对象解构 (prefer-destructuring)

(fixable) The `--fix` option on the [command line](../user-guide/command-line-interface#fixing-problems) can automatically fix some of the problems reported by this rule.

(fixable) [命令行](../user-guide/command-line-interface#fixing-problems)中的 `--fix` 选项可以自动修复一些该规则报告的问题。

With JavaScript ES6, a new syntax was added for creating variables from an array index or object property, called [destructuring](#further-reading).  This rule enforces usage of destructuring instead of accessing a property through a member expression.

JavaScript ES6 添加了一个新语法，用于从数组索引或对象属性创建变量，称之为[解构](#further-reading)。此规则强制使用解构而不是通过成员表达式访问属性。

## Rule Details

### Options

This rule takes two sets of configuration objects. The first object parameter determines what types of destructuring the rule applies to.

该规则有两个配置对象。第一个对象参数决定了该规则要应用的解构类型。

The two properties, `array` and `object`, can be used to turn on or off the destructuring requirement for each of those types independently. By default, both are true.

该规则的两个属性， `array` 和 `object` 可以独立地开启或关闭对每种类型的解构需求。默认情况下，均为 true。

Alternatively, you can use separate configurations for different assignment types. It accepts 2 other keys instead of `array` and `object`.

或者，你可以对不同的赋值类型分开配置。它接收另外两个属性。

One key is `VariableDeclarator` and the other is `AssignmentExpression`, which can be used to control the destructuring requirement for each of those types independently. Each property accepts an object that accepts two properties, `array` and `object`, which can be used to control the destructuring requirement for each of `array` and `object` independently for variable declarations and assignment expressions.  By default, `array` and `object` are set to true for both `VariableDeclarator` and `AssignmentExpression`.

一个是 `VariableDeclarator` 另一个是 `AssignmentExpression`，可以独立地控制每种类型的解构需求。每个属性接收一个对象，包含两个属性，`array` 和 `object`，可以用来控制每个 `array` 和 `object`解构需求，分别应用于变量声明和赋值表达式。默认情况下，对 `VariableDeclarator` 和 `AssignmentExpression`而言，`array` 和 `object` 被设为 true。

The rule has a second object with a single key, `enforceForRenamedProperties`, which determines whether the `object` destructuring applies to renamed variables.

该规则有一个第二对象，包含一个键，`enforceForRenamedProperties` 用来决定 `object` 解构是否应用于重命名的变量。

Examples of **incorrect** code for this rule:

**错误** 代码示例：

```javascript
// With `array` enabled
var foo = array[0];

// With `object` enabled
var foo = object.foo;
var foo = object['foo'];
```

Examples of **correct** code for this rule:

**正确** 代码示例：

```javascript
// With `array` enabled
var [ foo ] = array;
var foo = array[someIndex];

// With `object` enabled
var { foo } = object;

var foo = object.bar;

let foo;
({ foo } = object);
```

Examples of **incorrect** code when `enforceForRenamedProperties` is enabled:

选项 `enforceForRenamedProperties` 的 **错误** 代码示例：

```javascript
var foo = object.bar;
```

Examples of **correct** code when `enforceForRenamedProperties` is enabled:

选项 `enforceForRenamedProperties` 的 **正确** 代码示例：

```javascript
var { bar: foo } = object;
```

An example configuration, with the defaults `array` and `object` filled in, looks like this:

默认值的配置示例，如下所示：

```json
{
  "rules": {
    "prefer-destructuring": ["error", {
      "array": true,
      "object": true
    }, {
      "enforceForRenamedProperties": false
    }]
  }
}
```

The two properties, `array` and `object`, which can be used to turn on or off the destructuring requirement for each of those types independently. By default, both are true.

`array` 和 `object` 用来尅器每种类型的解构需求。默认情况下，二者均为 true。

For example, the following configuration enforces only object destructuring, but not array destructuring:

例如，以下配置只强制对象解构，不强制数组解构：

```json
{
  "rules": {
    "prefer-destructuring": ["error", {"object": true, "array": false}]
  }
}
```

An example configuration, with the defaults `VariableDeclarator` and `AssignmentExpression` filled in, looks like this:

一个配置示例，默认配置 `VariableDeclarator` 和 `AssignmentExpression` ：

```json
{
  "rules": {
    "prefer-destructuring": ["error", {
      "VariableDeclarator": {
        "array": false,
        "object": true
      },
      "AssignmentExpression": {
        "array": true,
        "object": true
      }
    }, {
      "enforceForRenamedProperties": false
    }]
  }
}
```

The two properties, `VariableDeclarator` and `AssignmentExpression`, which can be used to turn on or off the destructuring requirement for `array` and `object`. By default, all values are true.

`VariableDeclarator` 和 `AssignmentExpression` 用来开启或关闭 `array` 和 `object` 的解构需求。默认情况下，二者均为 true。

For example, the following configuration enforces object destructuring in variable declarations and enforces array destructuring in assignment expressions.

例如，以下配置强制在变量声明中的对象解构和赋值表达式的数组解构。

```json
{
  "rules": {
    "prefer-destructuring": ["error", {
      "VariableDeclarator": {
        "array": false,
        "object": true
      },
      "AssignmentExpression": {
        "array": true,
        "object": false
      }
    }, {
      "enforceForRenamedProperties": false
    }]
  }
}

```

Examples of **correct** code when object destructuring in `VariableDeclarator` is enforced:

强制 `VariableDeclarator` 中对象解构的 **正确** 代码示例：

```javascript
/* eslint prefer-destructuring: ["error", {VariableDeclarator: {object: true}}] */
var {bar: foo} = object;
```

Examples of **correct** code when array destructuring in `AssignmentExpression` is enforced:

强制 `AssignmentExpression` 中数组解构的 **正确** 代码示例：

```javascript
/* eslint prefer-destructuring: ["error", {AssignmentExpression: {array: true}}] */
[bar] = array;
```

## When Not To Use It

If you want to be able to access array indices or object properties directly, you can either configure the rule to your tastes or disable the rule entirely.

如果你希望能够直接访问数组索引或对象属性，可将该规则配置为你的口味或完全禁用该规则。

Additionally, if you intend to access large array indices directly, like:

另外，如果你打算直接访问大数组的索引，如：

```javascript
var foo = array[100];
```

Then the `array` part of this rule is not recommended, as destructuring does not match this use case very well.

那么该规则 `array` 部分是不推荐的，因为解构无法很好地匹配这个示例。

Or for non-iterable 'array-like' objects:

或，对非迭代类数组对象：

```javascript
var $ = require('jquery');
var foo = $('body')[0];
var [bar] = $('body'); // fails with a TypeError
```


## Further Reading

If you want to learn more about destructuring, check out the links below:

如果你想更好地了解解构，请查看下面的链接：

- [Destructuring Assignment (MDN)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)
- [Destructuring and parameter handling in ECMAScript 6 (2ality blog)](http://2ality.com/2015/01/es6-destructuring.html)

## Version

This rule was introduced in ESLint 3.13.0.

该规则在 ESLint 3.13.0 中被引入。

## Resources

* [Rule source](https://github.com/eslint/eslint/tree/master/lib/rules/prefer-destructuring.js)
* [Documentation source](https://github.com/eslint/eslint/tree/master/docs/rules/prefer-destructuring.md)
