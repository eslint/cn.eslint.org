---
title: Rule camelcase
layout: doc
translator: molee1905
proofreader: molee1905
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# Require Camelcase (camelcase)

# 要求使用骆驼拼写法 (camelcase)

When it comes to naming variables, styleguides generally fall into one of two camps: camelcase (`variableName`) and underscores (`variable_name`). This rule focuses on using the camelcase approach. If your styleguide calls for camelcasing your variable names, then this rule is for you!

当命名变量时，风格指南一般会分为骆驼拼写法(`variableName`)和下划线拼写法(`variable_name`)两大阵营。该规则主要关注骆驼拼写法的用法。如果你的风格指南要求变量名称以驼峰的形式书写，此规则正适合于你。

## Rule Details

This rule looks for any underscores (`_`) located within the source code. It ignores leading and trailing underscores and only checks those in the middle of a variable name. If ESLint decides that the variable is a constant (all uppercase), then no warning will be thrown. Otherwise, a warning will be thrown. This rule only flags definitions and assignments but not function calls.

此规则在源码中查找下划线 (`_`) 。它忽略前导和尾部的下划线，只检查在变量名称中间的下划线。如果 ESLint 判断定某个变量是个常量（全部大写），将不会发出警告。否则会发出警告。该规则仅仅标记定义和赋值，不适用于方法调用。

## Options

This rule accepts a single options argument with the following defaults:

该规则只接受一个选项参数，默认值如下：

```json
{
    "rules": {
        "camelcase": [2, {"properties": "always"}]
    }
}
```

`Properties` can have the following values:

`Properties` 可以有以下两个值:

1. `always` is the default and checks all property names

1. `always` 是默认值，检查所有的属性名称

2. `never` does not check property names at all

2. `never` 完全不检查属性名称

The following patterns are considered problems:

以下模式被认为是有问题的：

```js
/*eslint camelcase: 2*/
var my_favorite_color = "#112C85";

function do_something() {
    // ...
}

obj.do_something = function() {
    // ...
};

var obj = {
    my_pref: 1
};
```

The following patterns are not considered problems:

以下模式被认为是没有问题的：

```js
/*eslint camelcase: 2*/
var myFavoriteColor   = "#112C85";
var _myFavoriteColor  = "#112C85";
var myFavoriteColor_  = "#112C85";
var MY_FAVORITE_COLOR = "#112C85";
var foo = bar.baz_boom;
var foo = { qux: bar.baz_boom };

obj.do_something();

var { category_id: category } = query;
```


```js
/*eslint camelcase: [2, {properties: "never"}]*/

var obj = {
    my_pref: 1
};
```

## When Not To Use It

If you have established coding standards using a different naming convention (separating words with underscores), turn this rule off.

如果你已经建立了编码标准，使用了不同的命名约定(用下划线分隔单词)，关闭此规则即可。

## Version

This rule was introduced in ESLint 0.0.2.

该规则在 ESLint 0.0.2 被引入。

## Resources

* [Rule source](https://github.com/eslint/eslint/tree/master/lib/rules/camelcase.js)
* [Documentation source](https://github.com/eslint/eslint/tree/master/docs/rules/camelcase.md)
