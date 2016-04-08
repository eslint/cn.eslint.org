---
title: Rule sort-vars
layout: doc
translator: molee1905
proofreader: molee1905
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# Variable Sorting (sort-vars)

# 变量排序 (sort-vars)

When declaring multiple variables within the same block, some developers prefer to sort variable names alphabetically to be able to find necessary variable easier at the later time. Others feel that it adds complexity and becomes burden to maintain.

当在同一个语句块中定义多个变量时，一些开发者比较喜欢将变量按字母顺序排序，以便在以后的时间更容易地找到需要的变量。其他人觉得，这样变得更复杂，甚至成了维护的负担。

## Rule Details

This rule checks all variable declaration blocks and verifies that all variables are sorted alphabetically.

该规则检查所有的变量声明块，并验证所有的变量都是按字母顺序排序的。

The default configuration of the rule is case-sensitive.

该规则的默认配置是区分大小写的。

The following patterns are considered problems:

以下模式被认为是有问题的：

```js
/*eslint sort-vars: "error"*/

var b, a;

var a, B, c;

var a, A;
```

The following patterns are not considered problems:

以下模式被认为是没有问题的：

```js
/*eslint sort-vars: "error"*/

var a, b, c, d;

var _a = 10;
var _b = 20;

var A, a;

var B, a, c;
```

Alphabetical list is maintained starting from the first variable and excluding any that are considered problems. So the following code will produce two problems:

按字母顺序排序是指从第一个变量开始，排除任何被认为有问题的变量。所以下面的代码会产生两个问题：

```js
/*eslint sort-vars: "error"*/

var c, d, a, b;
```

But this one, will only produce one:

但这个，只会产生一个问题：

```js
/*eslint sort-vars: "error"*/

var c, d, a, e;
```

## Options

```
"sort-vars": [<enabled>, { "ignoreCase": <boolean> }]
```

### `ignoreCase`

When `true` the rule ignores the case-sensitivity of the variables order.

当设置为`true`时，该规则忽略变量的大小写进行排序。

The following patterns are not considered problems:

以下模式被认为是没有问题的：

```js
/*eslint sort-vars: ["error", { "ignoreCase": true }]*/

var a, A;

var a, B, c;
```

## When Not To Use It

This rule is a formatting preference and not following it won't negatively affect the quality of your code. If you alphabetizing variables isn't a part of your coding standards, then you can leave this rule off.

该规则是一个格式化偏好，不遵循它，也不会对你的代码质量产生负面影响。如果按字母顺序排序的变量不是你编码标准的一部分，那么你可以关闭此规则。

## Version

This rule was introduced in ESLint 0.2.0.

该规则在 ESLint 0.2.0 被引入。

## Resources

* [Rule source](https://github.com/eslint/eslint/tree/master/lib/rules/sort-vars.js)
* [Documentation source](https://github.com/eslint/eslint/tree/master/docs/rules/sort-vars.md)
