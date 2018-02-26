---
title: id-match - Rules
layout: doc
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# require identifiers to match a specified regular expression (id-match)

# 要求标识符匹配特定的正则表达式 (id-match)

> "There are only two hard things in Computer Science: cache invalidation and naming things." — Phil Karlton

> "There are only two hard things in Computer Science: cache invalidation and naming things." — Phil Karlton

Naming things consistently in a project is an often underestimated aspect of code creation.
When done correctly, it can save your team hours of unnecessary head scratching and misdirections.
This rule allows you to precisely define and enforce the variables and function names on your team should use.
No more limiting yourself to camelCase, snake_case, PascalCase or oHungarianNotation. Id-match has all your needs covered!

在一个项目中，一致的命名是代码创建经常被低估的一方面。使用得当时，它可以为你的团队节省掉因为不必要纠结和误导浪费的时间。该规则允许你精确地定义和强制使用你的团队应该用的变量和方法名。不再将你自己局限于 camelCase、nake_case、PascalCase 或 oHungarianNotation。该规则覆盖了你所有的需求!

## Rule Details

This rule requires identifiers in assignments and `function` definitions to match a specified regular expression.

该规则要求赋值语句和 `function` 定义中的标识符匹配某个特定的正则表达式。

## Options

This rule has a string option for the specified regular expression.

该规则有个字符串选项，是特定的正则表达式。

For example, to enforce a camelcase naming convention:

例如，强制使用骆驼拼写法命名约定：

```json
{
    "id-match": ["error", "^[a-z]+([A-Z][a-z]+)*$"]
}
```

Examples of **correct** code for this rule with the `"^[a-z]+([A-Z][a-z]+)*$"` option:

选项 `"^[a-z]+([A-Z][a-z]+)*$"` 的 **正确** 代码示例：

```js
/*eslint id-match: ["error", "^[a-z]+([A-Z][a-z]+)*$"]*/

var myFavoriteColor   = "#112C85";
var foo = bar.baz_boom;
var foo = { qux: bar.baz_boom };
do_something();
var obj = {
    my_pref: 1
};
```

Examples of **incorrect** code for this rule with the `"^[a-z]+([A-Z][a-z]+)*$"` option:

选项 `"^[a-z]+([A-Z][a-z]+)*$"` 的 **错误** 代码示例：

```js
/*eslint id-match: ["error", "^[a-z]+([A-Z][a-z]+)*$"]*/

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
```

This rule has an object option:

该规则有一个对象选项：

* `"properties": true` requires object properties to match the specified regular expression
* `"properties": true` 要求对象属性匹配特定的正则表达式
* `"onlyDeclarations": true` requires only `var`, `function`, and `class` declarations to match the specified regular expression
* `"onlyDeclarations": true` 只要求 `var`、`function` 和 `class` 声明匹配特定的正则表达式

### properties

Examples of **incorrect** code for this rule with the `"^[a-z]+([A-Z][a-z]+)*$", { "properties": true }` options:

选项 `"^[a-z]+([A-Z][a-z]+)*$", { "properties": true }` 的 **错误** 代码示例：

```js
/*eslint id-match: ["error", "^[a-z]+([A-Z][a-z]+)*$", { "properties": true }]*/

var obj = {
    my_pref: 1
};
```

### onlyDeclarations

Examples of **correct** code for this rule with the `"^[a-z]+([A-Z][a-z]+)*$", { "onlyDeclarations": true }` options:

选项 `"^[a-z]+([A-Z][a-z]+)*$", { "onlyDeclarations": true }` 的 **正确** 代码示例：

```js
/*eslint id-match: [2, "^[a-z]+([A-Z][a-z]+)*$", { "onlyDeclarations": true }]*/

do_something(__dirname);
```

## When Not To Use It

If you don't want to enforce any particular naming convention for all identifiers, or your naming convention is too complex to be enforced by configuring this rule, then you should not enable this rule.

如果你不想为所有的标识符强制任何特定的命名约定，或如果你的命名约定太复杂，不启用此规则即可。

## Version

This rule was introduced in ESLint 1.0.0.

该规则在 ESLint 1.0.0 被引入。

## Resources

* [Rule source](https://github.com/eslint/eslint/tree/master/lib/rules/id-match.js)
* [Documentation source](https://github.com/eslint/eslint/tree/master/docs/rules/id-match.md)
