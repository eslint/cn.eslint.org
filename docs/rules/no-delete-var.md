---
title: Rule no-delete-var
layout: doc
translator: ILFront-End
proofreader: molee1905
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# Disallow Variables Deletion (no-delete-var)

# 禁止删除变量 (no-delete-var)

The purpose of the `delete` operator is to remove a property from an object. Using the `delete` operator on a variable might lead to unexpected behavior.

`delete`的目的是删除对象的属性。使用`delete`操作删除一个变量可能会导致意外情况发生。

## Rule Details

This rule prevents the use of `delete` operator on variables.

该规则防止使用`delete`操作符删除变量。

Examples of **incorrect** code for this rule:

**错误**代码示例：

```js
/*eslint no-delete-var: 2*/

var x;
delete x;
```

## Further Reading

* [Only properties should be deleted](http://jslinterrors.com/only-properties-should-be-deleted/)

## Version

This rule was introduced in ESLint 0.0.9.

此规则在 ESLint 0.0.9 中被引入。

## Resources

* [Rule source](https://github.com/eslint/eslint/tree/master/lib/rules/no-delete-var.js)
* [Documentation source](https://github.com/eslint/eslint/tree/master/docs/rules/no-delete-var.md)
