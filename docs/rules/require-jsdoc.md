---
title: Rule require-jsdoc
layout: doc
translator: molee1905
proofreader: molee1905
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# Require JSDoc comment (require-jsdoc)

# 要求使用 JSDoc 注释 (require-jsdoc)

[JSDoc](http://usejsdoc.org) is a JavaScript API documentation generator. It uses specially-formatted comments inside of code to generate API documentation automatically. For example, this is what a JSDoc comment looks like for a function:

[JSDoc](http://usejsdoc.org)是一个 JavaScript API 文档生成器。它通过在代码中使用指定格式的注释自动生成 API 文档。例如，以下这个就是函数的JSDoc注释：

```js
/**
 * Adds two numbers together.
 * @param {int} num1 The first number.
 * @param {int} num2 The second number.
 * @returns {int} The sum of the two numbers.
 */
function sum(num1, num2) {
    return num1 + num2;
}
```

Some style guides require JSDoc comments for all functions as a way of explaining function behavior.

一些风格指南要求对所有的函数使用 JSDoc 注释作为描述函数行为的一种方式。

## Rule Details

This rule generates warnings for nodes that do not have JSDoc comments when they should. Supported nodes:

如果某些节点应该使用 JSDoc 注释的而没有使用，该规则将会发出警告。支持的节点：

* `FunctionDeclaration`
* `ClassDeclaration`
* `MethodDefinition`

## Options

This rule accepts a `require` object with its properties as

该规则接收一个`require`对象，属性如下：

* `FunctionDeclaration` (default: `true`)
* `ClassDeclaration` (default: `false`)
* `MethodDefinition` (default: `false`)

Default option settings are

默认选项设置如下：

```json
{
    "require-jsdoc": [2, {
        "require": {
            "FunctionDeclaration": true,
            "MethodDefinition": false,
            "ClassDeclaration": false
        }
    }]
}
```

The following patterns are considered problems:

以下模式被认为是有问题的：

```js
/*eslint "require-jsdoc": [2, {
    "require": {
        "FunctionDeclaration": true,
        "MethodDefinition": true,
        "ClassDeclaration": true
    }
}]*/

function foo() {
    return 10;
}

class Test{
    getDate(){}
}
```

The following patterns are not considered problems:

以下模式被认为是没有问题的：

```js
/*eslint "require-jsdoc": [2, {
    "require": {
        "FunctionDeclaration": true,
        "MethodDefinition": true,
        "ClassDeclaration": true
    }
}]*/

/**
* It returns 10
*/
function foo() {
    return 10;
}

/**
* It returns 10
*/
var foo = function() {
    return 10;
}

var array = [1,2,3];
array.filter(function(item) {
    return item > 2;
});

/**
* It returns 10
*/
class Test{
    /**
    * returns the date
    */
    getDate(){}
}
```

## When Not To Use It

If you do not require JSDoc for your functions, then you can leave this rule off.

如果你不需要为函数添加JSDoc注释，你可以关闭此规则。

## Related Rules

* [valid-jsdoc](valid-jsdoc)

## Version

This rule was introduced in ESLint 1.4.0.

该规则在 ESLint 1.4.0 中被引入。

## Resources

* [Rule source](https://github.com/eslint/eslint/tree/master/lib/rules/require-jsdoc.js)
* [Documentation source](https://github.com/eslint/eslint/tree/master/docs/rules/require-jsdoc.md)
