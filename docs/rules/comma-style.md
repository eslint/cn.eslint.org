---
title: Rule comma-style
layout: doc
translator: molee1905
proofreader: sunshiner
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# Comma style (comma-style)

# 逗号风格 (comma-style)

Comma Style rule enforces comma styles for a list of things separated by commas. There are two comma styles primarily in JavaScript. The standard one in which commas are placed at the end of the line. And Comma-First, in which, commas are placed at the start of the next line after the list item.

逗号风格规则是对由逗号分隔的列表中逗号的位置做出规定。在Javascript中主要有两种逗号风格。标准的风格是将逗号放置到行尾，另一种是逗号优先风格，此风格将逗号放置到列表元素的下一行的开始。

One of the justifications for using Comma-First is that it helps tracking missing and trailing commas.
In case linting is turned off, missing commas in variable declarations lead to leakage of global variables and trailing commas lead to errors in older versions of IE.

使用逗号优先的理由之一是它可以帮助跟踪漏写和多余的逗号。如果检测被关闭，在旧版的IE浏览器中，变量声明时，缺失逗号可能导致全局变量泄露，尾部的逗号将导致错误。


## Rule Details

This rule is aimed at enforcing a particular comma style in JavaScript. As such, it warns whenever it sees a variable declaration, object property and array element that does not adhere to a particular comma style. It doesn't support cases where there are line breaks before and after comma (lone commas) with in declarations, properties and elements. It also avoids single line declaration cases.

该规则是为了在Javascript中强制使用一种特定的逗号风格。因此，如果变量声明，对象属性和数组元素没有遵循该特定的逗号风格时，此规则将发出警告。在变量声明，对象属性或数组元素中，如果一个逗号(该行只有这一个逗号)之前和之后都有换行符，则不受此规定约束。单行声明的情况也不受此约束。

## Options

The rule takes an option, a string, which could be either `"last"` or `"first"`. The default is `"last"`.

该规则有一个可选项，是个字符串，可以是`"last"` 或 `"first"`。
默认是 `"last"`。

You can set the style in configuration like this:

你可以在配置文件中这样设置：

```json
"comma-style": [2, "first"]
```

### "last"

This is the default setting for this rule. This option requires that the comma be placed after and be in the same line as the variable declaration, object property and array element.

这个是该规则的默认值。该选项要求逗号放置在变量声明，对象属性和数组元素之后并且在同一行。

While using this setting, the following patterns are considered problems:

当使用此设置时，以下模式被认为是有问题的：

```js
/*eslint comma-style: [2, "last"]*/

var foo = 1
,
bar = 2;

var foo = 1
  , bar = 2;


var foo = ["apples"
           , "oranges"];


function bar() {
    return {
        "a": 1
        ,"b:": 2
    };
}

```

The following patterns are not considered problems:

当使用此设置时，以下模式被认为是没有问题的：

```js
/*eslint comma-style: [2, "last"]*/

var foo = 1, bar = 2;

var foo = 1,
    bar = 2;


var foo = ["apples",
           "oranges"];


function bar() {
    return {
        "a": 1,
        "b:": 2
    };
}

```

### "first"

This option requires that the comma be placed before and be in the same line as the variable declaration, object property and array element.

该选项要求逗号放置在变量声明，对象属性和数组元素之前并且在同一行。

While using this setting, the following patterns are considered problems:

当使用此设置时，以下模式被认为是有问题的：

```js
/*eslint comma-style: [2, "first"]*/

var foo = 1,
    bar = 2;


var foo = ["apples",
           "oranges"];


function bar() {
    return {
        "a": 1,
        "b:": 2
    };
}

```

The following patterns are not considered problems:

以下模式被认为是没有问题的：

```js
/*eslint comma-style: [2, "first"]*/

var foo = 1, bar = 2;

var foo = 1
    ,bar = 2;


var foo = ["apples"
          ,"oranges"];


function bar() {
    return {
        "a": 1
        ,"b:": 2
    };
}

```

### Exceptions

Exceptions of the following nodes may be passed in order to tell ESLint to ignore nodes of certain types.

如果想让ESLint忽略某些类型的节点，可以通过设置exceptions属性来实现。

```text
ArrayExpression,
ObjectExpression,
VariableDeclaration
```

An example use case is if a user wanted to only enforce comma style in var statements.

下面的用例就是用户只希望在变量声明中强制使用逗号风格规则。

The following is considered a warning:

以下被认为是一个警告：

```js
/*eslint comma-style: [2, "first", {exceptions: {ArrayExpression: true, ObjectExpression: true} }]*/

var o = {},
    a = [];
```

But the following would not be a warning:

但下面不会发出警告：

```js
/*eslint comma-style: [2, "first", {exceptions: {ArrayExpression: true, ObjectExpression: true} }]*/

var o = {fst:1,
         snd: [1,
               2]}
  , a = [];
```

## When Not To Use It

If your project will not be using one true comma style, turn this rule off.

如果您的项目不使用某一特定的逗号风格，关闭此规则即可。

## Further Reading

For the first option in comma-style rule:

关于该规则的第一个可选项：

* [A better coding convention for lists and object literals in JavaScript by isaacs](https://gist.github.com/isaacs/357981)
* [npm coding style guideline](https://docs.npmjs.com/misc/coding-style)


## Related Rules

* [operator-linebreak](operator-linebreak)

## Version

This rule was introduced in ESLint 0.9.0.

该规则在ESLint 0.9.0 被引入。

## Resources

* [Rule source](https://github.com/eslint/eslint/tree/master/lib/rules/comma-style.js)
* [Documentation source](https://github.com/eslint/eslint/tree/master/docs/rules/comma-style.md)
