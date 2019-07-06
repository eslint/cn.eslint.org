---
title: no-new - Rules
layout: doc
edit_link: https://github.com/eslint/eslint/edit/master/docs/rules/no-new.md
rule_type: suggestion
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# Disallow new For Side Effects (no-new)

# 禁止使用 new 以避免产生副作用 (no-new)

The goal of using `new` with a constructor is typically to create an object of a particular type and store that object in a variable, such as:

对构造函数使用 `new` 的目的通常是创建一个特定类型的对象并且将该对象存储在变量中，比如：

```js
var person = new Person();
```

It's less common to use `new` and not store the result, such as:

使用 `new` 却不存储结果这种情况是不太常见的，比如：

```js
new Person();
```

In this case, the created object is thrown away because its reference isn't stored anywhere, and in many cases, this means that the constructor should be replaced with a function that doesn't require `new` to be used.

在这个例子中，创建的对象被销毁因为它的引用没有被存储在任何地方，并且在许多场景中，这意味着构造函数应该被一个不需要使用 `new` 的函数所替代。

## Rule Details

This rule is aimed at maintaining consistency and convention by disallowing constructor calls using the `new` keyword that do not assign the resulting object to a variable.

此规则旨在通过禁止使用 `new` 关键字调用构造函数但却不将结果赋值给一个变量来保持一致性和约定。

Examples of **incorrect** code for this rule:

**错误** 代码示例：

```js
/*eslint no-new: "error"*/

new Thing();
```

Examples of **correct** code for this rule:

**正确** 代码示例：

```js
/*eslint no-new: "error"*/

var thing = new Thing();

Thing();
```

## Version

This rule was introduced in ESLint 0.0.7.

该规则在 ESLint 0.0.7 中被引入。

## Resources

* [Rule source](https://github.com/eslint/eslint/tree/master/lib/rules/no-new.js)
* [Documentation source](https://github.com/eslint/eslint/tree/master/docs/rules/no-new.md)
