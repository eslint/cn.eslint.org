---
title: Rule id-match
layout: doc
translator: molee1905
proofreader: sunshiner
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# Require IDs to match a pattern (id-match)

# 要求标识符匹配某种模式 (id-match)

> "There are only two hard things in Computer Science: cache invalidation and naming things." — Phil Karlton

Naming things consistently in a project is an often underestimated aspect of code creation.
When done right, it can save your team hours of unnecessary head scratching and misdirections.
This rule allows you to precisely define and enforce the variables and function names on your team should use.
No more limiting yourself to camelCase, snake_case, PascalCase or oHungarianNotation. Id-match has all your needs covered!

在一个项目中，一致的命名是代码创建经常被低估的一方面。使用得当时，它可以为你的团队节省掉因为不必要纠结和误导浪费的时间。该规则允许你精确地定义和强制使用你的团队应该用的变量和方法名。不再将你自己局限于camelCase、 snake_case、 PascalCase或 oHungarianNotation。Id-match覆盖了您所有的需求!


## Rule Details

This rule compares assignments and function definitions to a provided regular expression, giving you the maximum flexibility on the matter.
It doesn't apply to function calls, so that you can still use functions or objects you do not have control over.

此规则对照赋值和方法定义给出了正则表达式，为你提供了最大限度的灵活性。它并不适用于方法调用，所以你仍可以使用一些你无法控制的方法和对象。

## Options

This rule needs a text RegExp to operate with, and accepts an options map. Its signature is as follows:

该规则需要一个正则表达式，和一个可选项的对象。如下所示：

```json
{
    "rules": {
        "id-match": [2, "^[a-z]+([A-Z][a-z]+)*$", {"properties": false}]
    }
}
```

`properties` can have the following values:

`properties` 可以为下列的值:

1. `true` is the default and checks all property names
1. `true` 默认的，检查所有的属性名称
2. `false` does not check property names at all (default)
2. `false` 不检查属性名称 (默认)

For the rule in this example, which is simply camelcase, the following patterns are considered problems:

这个示例是个驼峰匹配，以下模式被认为是有问题的：

```js
/*eslint id-match: [2, "^[a-z]+([A-Z][a-z]+)*$", {"properties": true}]*/

var my_favorite_color = "#112C85";

var _myFavoriteColor  = "#112C85";

var myFavoriteColor_  = "#112C85";

var MY_FAVORITE_COLOR = "#112C85";

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
/*eslint id-match: [2, "^[a-z]+([A-Z][a-z]+)*$", {"properties": false}]*/

var myFavoriteColor   = "#112C85";
var foo = bar.baz_boom;
var foo = { qux: bar.baz_boom };

obj.do_something();

/*eslint id-match: [2, "", {properties: false}]*/
var obj = {
    my_pref: 1
};
```

## When Not To Use It

If your rules are too complex, it is possible that you encounter performance issues due to the nature of the job.

如果你的规则太复杂，你很有可能会遇到性能问题，关闭此规则即可。

## Version

This rule was introduced in ESLint 1.0.0.

该规则在ESLint 1.0.0 被引入。

## Resources

* [Rule source](https://github.com/eslint/eslint/tree/master/lib/rules/id-match.js)
* [Documentation source](https://github.com/eslint/eslint/tree/master/docs/rules/id-match.md)
