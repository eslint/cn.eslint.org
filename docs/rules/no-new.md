---
title: Rule no-new
layout: doc
translator: fengnana
proofreader: yanggao40
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# Disallow new For Side Effects (no-new)
#禁止使用new产生副作用

The goal of using `new` with a constructor is typically to create an object of a particular type and store that object in a variable, such as:

对构造函数使用`new`的目的通常是创建一个特定类型的对象并且将该对象存储在变量中，比如：

```js
var person = new Person();
```

It's less common to use `new` and not store the result, such as:

不常见的行为是，使用`new`却不存储结果，比如：

```js
new Person();
```

In this case, the created object is thrown away because its reference isn't stored anywhere, and in many cases, this means that the constructor should be replaced with a function that doesn't require `new` to be used.

在此案例中，创建的对象被销毁因为他的引用没有被存储在任何地方，并且在许多场景中，这意味着构造函数可以被一个不需要使用`new`的函数所替代。

## Rule Details

This rule is aimed at maintaining consistency and convention by disallowing constructor calls using the `new` keyword that do not assign the resulting object to a variable.

此规则旨在通过禁止使用`new`关键字调用构造函数但确不将结果分配给一个变量来维持一致性和公约。

The following patterns are considered problems:

以下模式被认为是有问题的：

```js
/*eslint no-new: 2*/

new Thing();
```

The following patterns are not considered problems:

以下模式被认为是没有问题的：

```js
/*eslint no-new: 2*/

var thing = new Thing();

Thing();
```

## Version

This rule was introduced in ESLint 0.0.7.

此规则在ESLint 0.0.7中被引入。

## Resources

* [Rule source](https://github.com/eslint/eslint/tree/master/lib/rules/no-new.js)
* [Documentation source](https://github.com/eslint/eslint/tree/master/docs/rules/no-new.md)
