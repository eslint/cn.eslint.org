---
title: require-jsdoc - Rules
layout: doc
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# require JSDoc comments (require-jsdoc)

# 要求使用 JSDoc 注释 (require-jsdoc)

[JSDoc](http://usejsdoc.org) is a JavaScript API documentation generator. It uses specially-formatted comments inside of code to generate API documentation automatically. For example, this is what a JSDoc comment looks like for a function:

[JSDoc](http://usejsdoc.org) 是一个 JavaScript API 文档生成器。它通过在代码中使用指定格式的注释自动生成 API 文档。例如，以下这个就是函数的 JSDoc 注释：

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

This rule requires JSDoc comments for specified nodes. Supported nodes:

该规则要求指定的节点使用 JSDoc 注释。支持的节点：

* `"FunctionDeclaration"`
* `"FunctionDeclaration"`
* `"ClassDeclaration"`
* `"ClassDeclaration"`
* `"MethodDefinition"`
* `"MethodDefinition"`
* `"ArrowFunctionExpression"`
* `"ArrowFunctionExpression"`
* `"FunctionExpression"`
* `"FunctionExpression"`

## Options

This rule has a single object option:

该规则有一个对象选项：

* `"require"` requires JSDoc comments for the specified nodes
* `"require"` 要求指定的节点使用 JSDoc 注释

Default option settings are:

默认选项设置如下：

```json
{
    "require-jsdoc": ["error", {
        "require": {
            "FunctionDeclaration": true,
            "MethodDefinition": false,
            "ClassDeclaration": false,
            "ArrowFunctionExpression": false,
            "FunctionExpression": false
        }
    }]
}
```

### require

Examples of **incorrect** code for this rule with the `{ "require": { "FunctionDeclaration": true, "MethodDefinition": true, "ClassDeclaration": true, "ArrowFunctionExpression": true, "FunctionExpression": true } }` option:

选项 `{ "require": { "FunctionDeclaration": true, "MethodDefinition": true, "ClassDeclaration": true, "ArrowFunctionExpression": true, "FunctionExpression": true } }` 的 **错误** 代码示例：

```js
/*eslint "require-jsdoc": ["error", {
    "require": {
        "FunctionDeclaration": true,
        "MethodDefinition": true,
        "ClassDeclaration": true,
        "ArrowFunctionExpression": true,
        "FunctionExpression": true
    }
}]*/

function foo() {
    return 10;
}

var foo = () => {
    return 10;
};

class Foo {
    bar() {
        return 10;
    }
}

var foo = function() {
    return 10;
};

var foo = {
    bar: function() {
        return 10;
    },

    baz() {
        return 10;
    }
};
```

Examples of **correct** code for this rule with the `{ "require": { "FunctionDeclaration": true, "MethodDefinition": true, "ClassDeclaration": true, "ArrowFunctionExpression": true, "FunctionExpression": true } }` option:

选项 `{ "require": { "FunctionDeclaration": true, "MethodDefinition": true, "ClassDeclaration": true, "ArrowFunctionExpression": true, "FunctionExpression": true } }` 的 **正确** 代码示例：

```js
/*eslint "require-jsdoc": ["error", {
    "require": {
        "FunctionDeclaration": true,
        "MethodDefinition": true,
        "ClassDeclaration": true,
        "ArrowFunctionExpression": true,
        "FunctionExpression": true
    }
}]*/

/**
 * It returns 10
 */
function foo() {
    return 10;
}

/**
 * It returns test + 10
 * @params {int} test - some number
 * @returns {int} sum of test and 10
 */
var foo = (test) => {
    return test + 10;
}

/**
 * It returns 10
 */
var foo = () => {
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
 * A class that can return the number 10
 */
class Foo {
    /**
    * It returns 10
    */
    bar() {
        return 10;
    }
}

/**
 * It returns 10
 */
var foo = function() {
    return 10;
};

var foo = {
    /**
    * It returns 10
    */
    bar: function() {
        return 10;
    },

    /**
    * It returns 10
    */
    baz() {
        return 10;
    }
};

setTimeout(() => {}, 10); // since it's an anonymous arrow function
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
