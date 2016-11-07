---
title: valid-jsdoc - Rules
layout: doc
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# enforce valid JSDoc comments (valid-jsdoc)

# 强制使用有效的 JSDoc 注释 (valid-jsdoc)

[JSDoc](http://usejsdoc.org) generates application programming interface (API) documentation from specially-formatted comments in JavaScript code. For example, this is a JSDoc comment for a function:

[JSDoc](http://usejsdoc.org) 根据 JavaScript 代码中的特殊格式的注释生成应用程序接口（API）文档。例如，下面的是一个函数的 JSDoc 注释：

```js
/**
 * Add two numbers.
 * @param {number} num1 The first number.
 * @param {number} num2 The second number.
 * @returns {number} The sum of the two numbers.
 */
function add(num1, num2) {
    return num1 + num2;
}
```

If comments are invalid because of typing mistakes, then documentation will be incomplete.

如果由于书写错误导致注释是无效的，那么文档将是不完整的。

If comments are inconsistent because they are not updated when function definitions are modified, then readers might become confused.

如果由于函数定义修改了，注释没有得到更新，导致了注释出现不一致的情况，那么读者可能会感到困惑。

## Rule Details

This rule enforces valid and consistent JSDoc comments. It reports any of the following problems:

该规则强制使用有效的和一致的 JSDoc 注释。它将报告以下问题：

* missing parameter tag: `@arg`, `@argument`, or `@param`
* 缺少参数标签：`@arg`、`@argument` 或 `@param`
* inconsistent order of parameter names in a comment compared to the function or method
* 对函数或方法注释，参数名的顺序不一致
* missing return tag: `@return` or `@returns`
* 缺少返回标题： `@return` 或 `@returns`
* missing parameter or return type
* 缺少参数或返回类型
* missing parameter or return description
* 缺少参数或返回描述
* syntax error
* 语法错误

This rule does not report missing JSDoc comments for classes, functions, or methods.

该规则对类、函数或方法报告缺失 JSDoc 注释的情况。

**Note:** This rule does not support all of the Google Closure documentation tool's use cases. As such, some code such as `(/**number*/ n => n * 2);` will be flagged as missing appropriate function JSDoc comments even though `/**number*/` is intended to be a type hint and not a documentation block for the function. We don't recommend using this rule if you use type hints in this way.

**注意：**该规则不支持所有的 Google Closure Tools 文档的所有用例。因此，`(/**number*/ n => n * 2);` 这样的代码将被标记为缺少适当的的函数 JSDoc 注释，即使有 `/**number*/` 暗示是个数字，而且不是一个函数的文档块。如果你以这种方式使用类型提示，我们不推荐你使用这个规则。

Examples of **incorrect** code for this rule:

**错误** 代码示例：

```js
/*eslint valid-jsdoc: "error"*/

// expected @param tag for parameter num1 but found num instead
// missing @param tag for parameter num2
// missing return type
/**
 * Add two numbers.
 * @param {number} num The first number.
 * @returns The sum of the two numbers.
 */
function add(num1, num2) {
    return num1 + num2;
}

// missing brace
// missing @returns tag
/**
 * @param {string name Whom to greet.
 */
function greet(name) {
    console.log("Hello " + name);
}

// missing parameter type for num1
// missing parameter description for num2
/**
 * Represents a sum.
 * @constructor
 * @param num1 The first number.
 * @param {number} num2
 */
function sum(num1, num2) {
    this.num1 = num1;
    this.num2 = num2;
}
```

Examples of **correct** code for this rule:

**正确** 代码示例：

```js
/*eslint valid-jsdoc: "error"*/
/*eslint-env es6*/

/**
 * Add two numbers.
 * @param {number} num1 The first number.
 * @param {number} num2 The second number.
 * @returns {number} The sum of the two numbers.
 */
function add(num1, num2) {
    return num1 + num2;
}

// default options allow missing function description
// return type `void` means the function has no `return` statement
/**
 * @param {string} name Whom to greet.
 * @returns {void}
 */
function greet(name) {
    console.log("Hello " + name);
}

// @constructor tag allows missing @returns tag
/**
 * Represents a sum.
 * @constructor
 * @param {number} num1 The first number.
 * @param {number} num2 The second number.
 */
function sum(num1, num2) {
    this.num1 = num1;
    this.num2 = num2;
}

// class constructor allows missing @returns tag
/**
 * Represents a sum.
 */
class Sum {
    /**
     * @param {number} num1 The first number.
     * @param {number} num2 The second number.
     */
    constructor(num1, num2) {
        this.num1 = num1;
        this.num2 = num2;
    }
}

// @abstract tag allows @returns tag without `return` statement
class Widget {
    /**
    * When the state changes, does it affect the rendered appearance?
    * @abstract
    * @param {Object} state The new state of the widget.
    * @returns {boolean} Is current appearance inconsistent with new state?
    */
    mustRender (state) {
        throw new Error("Widget subclass did not implement mustRender");
    }
}

// @override tag allows missing @param and @returns tags
class WonderfulWidget extends Widget {
    /**
     * @override
     */
    mustRender (state) {
        return state !== this.state; // shallow comparison
    }
}
```

## Options

This rule has an object option:

该规则有一个对象选项：

* `"prefer"` enforces consistent documentation tags specified by an object whose properties mean instead of key use value (for example, `"return": "returns"` means instead of `@return` use `@returns`)
* `"prefer"` 强制使用一致的文档标签，这些标签使用一个对象进行指定，其属性的意思是要使用的是值而不是键 (例如，`"return": "returns"` 意思是使用 `@returns` 而不是 `@return`)
* `"preferType"` enforces consistent type strings specified by an object whose properties mean instead of key use value (for example, `"object": "Object"` means instead of `object` use `Object`)
* `"preferType"` 强制使用一致的类型字符串，这些标签使用一个对象进行指定，其属性的意思是要使用的是值而不是键 (比如, `"object": "Object"` 意思是使用 `Object`而不是 `object`)
* `"requireReturn"` requires a return tag:
* `"requireReturn"` 要求使用一个返回标签：
    * `true` (default) **even if** the function or method does not have a `return` statement (this option value does not apply to constructors)
    * `true` (默认) **即使** 函数或方法没有 `return` 语句 (该选项不适用于构造函数)
    * `false` **if and only if** the function or method has a `return` statement (this option value does apply to constructors)
    * `false` **当且仅当** 函数或方法有一个 `return` 语句 (该选项不适用于构造函数)
* `"requireReturnType": false` allows missing type in return tags
* `"requireReturnType": false` 允许在返回标签中缺少类型
* `"matchDescription"` specifies (as a string) a regular expression to match the description in each JSDoc comment (for example, `".+"` requires a description; this option does not apply to descriptions in parameter or return tags)
* `"matchDescription"` 指定一个正则表达式去匹配每个 JSDoc 注释中的描述 (例如， `".+"` 要求有一个描述；该选项不适用于参数或返回标签中的描述)
* `"requireParamDescription": false` allows missing description in parameter tags
* `"requireParamDescription": false` 允许在参数标签缺少描述
* `"requireReturnDescription": false` allows missing description in return tags
* `"requireReturnDescription": false` 允许在返回标签缺少描述

### prefer

Examples of additional **incorrect** code for this rule with sample `"prefer": { "arg": "param", "argument": "param", "class": "constructor", "return": "returns", "virtual": "abstract" }` options:

选项 `"prefer": { "arg": "param", "argument": "param", "class": "constructor", "return": "returns", "virtual": "abstract" }` 的 **错误** 代码示例：

```js
/*eslint valid-jsdoc: ["error", { "prefer": { "arg": "param", "argument": "param", "class": "constructor", "return": "returns", "virtual": "abstract" } }]*/
/*eslint-env es6*/

/**
 * Add two numbers.
 * @arg {int} num1 The first number.
 * @arg {int} num2 The second number.
 * @return {int} The sum of the two numbers.
 */
function add(num1, num2) {
    return num1 + num2;
}

/**
 * Represents a sum.
 * @class
 * @argument {number} num1 The first number.
 * @argument {number} num2 The second number.
 */
function sum(num1, num2) {
    this.num1 = num1;
    this.num2 = num2;
}

class Widget {
    /**
     * When the state changes, does it affect the rendered appearance?
     * @virtual
     * @argument {Object} state The new state of the widget.
     * @return {boolean} Is current appearance inconsistent with new state?
     */
    mustRender (state) {
        throw new Error("Widget subclass did not implement mustRender");
    }
}
```

### preferType

Examples of additional **incorrect** code for this rule with sample `"preferType": { "Boolean": "boolean", "Number": "number", "object": "Object", "String": "string" }` options:

选项 `"preferType": { "Boolean": "boolean", "Number": "number", "object": "Object", "String": "string" }` 的 **错误** 代码示例：

```js
/*eslint valid-jsdoc: ["error", { "preferType": { "Boolean": "boolean", "Number": "number", "object": "Object", "String": "string" } }]*/
/*eslint-env es6*/

/**
 * Add two numbers.
 * @param {Number} num1 The first number.
 * @param {Number} num2 The second number.
 * @returns {Number} The sum of the two numbers.
 */
function add(num1, num2) {
    return num1 + num2;
}

/**
 * Output a greeting as a side effect.
 * @param {String} name Whom to greet.
 * @returns {void}
 */
function greet(name) {
    console.log("Hello " + name);
}

class Widget {
    /**
     * When the state changes, does it affect the rendered appearance?
     * @abstract
     * @param {object} state The new state of the widget.
     * @returns {Boolean} Is current appearance inconsistent with new state?
     */
    mustRender (state) {
        throw new Error("Widget subclass did not implement mustRender");
    }
}
```

### requireReturn

Examples of additional **incorrect** code for this rule with the `"requireReturn": false` option:

选项 `"requireReturn": false` 的 **错误** 代码示例：

```js
/*eslint valid-jsdoc: ["error", { "requireReturn": false }]*/

// unexpected @returns tag because function has no `return` statement
/**
 * @param {string} name Whom to greet.
 * @returns {string} The greeting.
 */
function greet(name) {
    console.log("Hello " + name);
}

// add @abstract tag to allow @returns tag without `return` statement
class Widget {
    /**
     * When the state changes, does it affect the rendered appearance?
     * @param {Object} state The new state of the widget.
     * @returns {boolean} Is current appearance inconsistent with new state?
     */
    mustRender (state) {
        throw new Error("Widget subclass did not implement mustRender");
    }
}
```

Example of additional **correct** code for this rule with the `"requireReturn": false` option:

选项 `"requireReturn": false` 的 **正确** 代码示例：

```js
/*eslint valid-jsdoc: ["error", { "requireReturn": false }]*/

/**
 * @param {string} name Whom to greet.
 */
function greet(name) {
    console.log("Hello " + name);
}
```

### requireReturnType

Example of additional **correct** code for this rule with the `"requireReturnType": false` option:

选项 `"requireReturnType": false` 的 **正确** 代码示例：

```js
/*eslint valid-jsdoc: ["error", { "requireReturnType": false }]*/

/**
 * Add two numbers.
 * @param {number} num1 The first number.
 * @param {number} num2 The second number.
 * @returns The sum of the two numbers.
 */
function add(num1, num2) {
    return num1 + num2;
}
```

### matchDescription

Example of additional **incorrect** code for this rule with a sample `"matchDescription": ".+"` option:

选项 `"matchDescription": ".+"` 的 **错误** 代码示例：

```js
/*eslint valid-jsdoc: ["error", { "matchDescription": ".+" }]*/

// missing function description
/**
 * @param {string} name Whom to greet.
 * @returns {void}
 */
function greet(name) {
    console.log("Hello " + name);
}
```

### requireParamDescription

Example of additional **correct** code for this rule with the `"requireParamDescription": false` option:

选项 `"requireParamDescription": false` 的 **正确** 代码示例：

```js
/*eslint valid-jsdoc: ["error", { "requireParamDescription": false }]*/

/**
 * Add two numbers.
 * @param {int} num1
 * @param {int} num2
 * @returns {int} The sum of the two numbers.
 */
function add(num1, num2) {
    return num1 + num2;
}
```

### requireReturnDescription

Example of additional **correct** code for this rule with the `"requireReturnDescription": false` option:

选项 `"requireReturnDescription": false` 的 **正确** 代码示例：

```js
/*eslint valid-jsdoc: ["error", { "requireReturnDescription": false }]*/

/**
 * Add two numbers.
 * @param {number} num1 The first number.
 * @param {number} num2 The second number.
 * @returns {number}
 */
function add(num1, num2) {
    return num1 + num2;
}
```

## When Not To Use It

If you aren't using JSDoc, then you can safely turn this rule off.

如果你不使用 JSDoc，你可以关闭此规则。

## Further Reading

* [JSDoc](http://usejsdoc.org)

## Related Rules

* [require-jsdoc](require-jsdoc)

## Version

This rule was introduced in ESLint 0.4.0.

该规则在 ESLint 0.4.0 中被引入。

## Resources

* [Rule source](https://github.com/eslint/eslint/tree/master/lib/rules/valid-jsdoc.js)
* [Documentation source](https://github.com/eslint/eslint/tree/master/docs/rules/valid-jsdoc.md)
