---
title: Rule no-native-reassign
layout: doc
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# Disallow Reassignment of Native Objects (no-native-reassign)

# 禁止对原生对象赋值 (no-native-reassign)

Reports an error when they encounter an attempt to assign a value to built-in native object.

当试图给内置的原生对象赋值时，该规则将会报告错误。

```js
String = "hello world";
```

## Rule Details

The native objects reported by this rule are the `builtin` variables from [globals](https://github.com/sindresorhus/globals/).

此规则报告的原生对象是来自 [globals](https://github.com/sindresorhus/globals/) 的`内置`变量。 

Examples of **incorrect** code for this rule:

**错误** 代码示例：

```js
/*eslint no-native-reassign: "error"*/

String = new Object();
```

## Options

This rule accepts an `exceptions` option, which can be used to specify a list of builtins for which reassignments will be allowed:

此规则有一个 `exceptions` 选项，可以用来指定一个允许被赋值的内建变量列表。

```json
{
    "rules": {
        "no-native-reassign": ["error", {"exceptions": ["Object"]}]
    }
}
```

## When Not To Use It

If you are trying to override one of the native objects.

如果你想尝试覆盖一个原生对象。

## Related Rules

* [no-extend-native](no-extend-native)
* [no-redeclare](no-redeclare)
* [no-shadow](no-shadow)

## Version

This rule was introduced in ESLint 0.0.9.

该规则在 ESLint 0.0.9 中被引入。

## Resources

* [Rule source](https://github.com/eslint/eslint/tree/master/lib/rules/no-native-reassign.js)
* [Documentation source](https://github.com/eslint/eslint/tree/master/docs/rules/no-native-reassign.md)
