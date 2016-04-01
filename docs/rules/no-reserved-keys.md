---
title: Rule no-reserved-keys
layout: doc
translator: yanggao40
proofreader: molee1905
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# Disallow Use of Reserved Words as Keys (no-reserved-keys)

# 禁止使用保留字作为键 (no-reserved-keys)

**Replacement notice:** This rule was removed in ESLint v1.0 and replaced by the [quote-props](quote-props) rule.

**替换声明:** 该规则在 ESLint v1.0 中被移除，被 [quote-props](quote-props)规则代替。

ECMAScript 3 described as series of keywords and reserved words, such as `if` and `public`, that are used or intended to be used for a core language feature. The specification also indicated that these keywords and reserved words could not be used as object property names without being enclosed in strings. An error occurs in an ECMAScript 3 environment when you use a keyword or reserved word in an object literal. For example:

ECMAScript 3 描述了一系列的关键字和保留字，例如`if`和`public`，被用于或将要用于核心语言特性。该规则也表明这些关键字和保留字如果不被包含在字符串中不能作为对象的属性名使用。在 ECMAScript 3 环境中，当在对象字面量中使用关键字或者保留字会报错。例如：

```js
var values = {
    enum: ["red", "blue", "green"]  // throws an error in ECMAScript 3
}
```

In this code, `enum` is used as an object key and will throw an error in an ECMAScript 3 environment (such as Internet Explorer 8).

在这段代码中，`enum` 被当做对象的键使用并且会在 ECMAScript 3 环境中抛出错误（例如 Internet Explorer 8)。

ECMAScript 5 loosened the restriction such that keywords and reserved words can be used as object keys without causing an error. However, any code that needs to run in ECMAScript 3 still needs to avoid using keywords and reserved words as keys.

ECMAScript 5 放宽了这个限制，所以关键字和保留字可以当做对象的键使用并且不会引起错误。然而，任何需要在  ECMAScript 3 中运行的代码仍然要避免使用关键字和保留字作为键。

## Rule Details

This rule is aimed at eliminating the use of ECMAScript 3 keywords and reserved words as object literal keys. As such, it warns whenever an object key would throw an error in an ECMAScript 3 environment.

该规则旨在剔除 ECMAScript 3 的关键字和保留字作为对象字面量的使用。这样，在 ECMAScript 3 环境中对象的键抛出错误时，该规则将会发出警告。

The following patterns are considered problems:

以下模式被认为是有问题的：

```js
var superman = {
    class: "Superhero",
    private: "Clark Kent"
};

var values = {
    enum: ["red", "blue", "green"]
};
```

The following patterns are not considered problems:

以下模式被认为是没有问题的：

```js
var superman = {
    "class": "Superhero",
    "private": "Clark Kent"
};

var values = {
    "enum": ["red", "blue", "green"]
};
```

## When Not To Use It

If your code is only going to be executed in an ECMAScript 5 or higher environment, then you can safely leave this rule off.

如果你的代码仅仅会在 ECMAScript 5 或者更高的版本中执行，就可以安全的关闭该规则。

## Further Reading

* [Reserved words as property names](http://kangax.github.io/compat-table/es5/#Reserved_words_as_property_names)

## Version

This rule was introduced in ESLint 0.8.0 and removed in 1.0.0.

该规则在 ESLint 0.8.0 中被引入，在 1.0.0 中被移除。

## Resources

* [Documentation source](https://github.com/eslint/eslint/tree/master/docs/rules/no-reserved-keys.md)
