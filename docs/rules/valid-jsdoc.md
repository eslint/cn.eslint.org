---
title: Rule valid-jsdoc
layout: doc
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# Validates JSDoc comments are syntactically correct (valid-jsdoc)

# 验证JSDoc注释是语法正确的 (valid-jsdoc)

[JSDoc](http://usejsdoc.org) is a JavaScript API documentation generator. It uses specially-formatted comments inside of code to generate API documentation automatically. For example, this is what a JSDoc comment looks like for a function:

[JSDoc](http://usejsdoc.org)是一个Javascript API 文档生成器。它在代码中使用特殊格式的注释来自动生成API文档。例如，这就是一个函数的JSDoc注释的样子：

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

The JSDoc comments have a syntax all their own, and it is easy to mistakenly mistype a comment because comments aren't often checked for correctness in editors. Further, it's very easy for the function definition to get out of sync with the comments, making the comments a source of confusion and error.

JSDoc注释有自己的语法，它很容易错误书写一个注释，因为编辑器不检查注释的正确性。此外，它很容易造成函数定义和注释的不同步，使得注释是混乱和错误的。

## Rule Details

This rule aims to prevent invalid and incomplete JSDoc comments. It will warn when any of the following is true:

该规则旨在防止无效的和不完整的JSDoc注释。这样做，它将发出警告，当：

* There is a JSDoc syntax error
* 有JSDoc语法错误
* A `@param` or `@returns` is used without a type specified
* `@param` 或 `@returns` 没有指定类型
* A `@param` or `@returns` is used without a description
* `@param` 或 `@returns` 没有描述
* A comment for a function is missing `@returns`
* 函数的注释缺少 `@returns`
* A parameter has no associated `@param` in the JSDoc comment
* 一个参数在JSDoc注释中没有对应的`@param`
* `@param`s are out of order with named arguments
* `@param`与命名的参数顺序不对应

Examples of **incorrect** code for this rule:

**错误**代码示例：

```js
/*eslint valid-jsdoc: 2*/

// missing type for @param and missing @returns
/**                                 // 2 errors
 * A description
 * @param num1 The first number.
 */
function foo(num1) {
    // ...
}

// missing description for @param
/**                                 //error Missing JSDoc parameter description for 'num1'.
 * A description
 * @param {int} num1
 * @returns {void}
 */
function foo(num1) {
    // ...
}

// no description for @returns
/**                                 //error Missing JSDoc return description.
 * A description
 * @returns {int}
 */
function foo() {
    // ...
}

// no type for @returns
/**                                 //error JSDoc syntax error.
 * A description
 * @returns Something awesome
 */
function foo() {
    // ...
}

// missing @param
/**                                 //error Missing JSDoc for parameter 'a'.
 * A description
 * @returns {void}
 */
function foo(a) {
    // ...
}

// incorrect @param
/**                                 //error Expected JSDoc for 'a' but found 'b'.
 * A description
 * @param {string} b Desc
 * @returns {void}
 */
function foo(a) {
    // ...
}
```

Examples of **correct** code for this rule:

**正确**代码示例：

```js
/*eslint valid-jsdoc: 2*/

/**
 * Adds two numbers together.
 * @param {int} num1 The first number.
 * @param {int} num2 The second number.
 * @returns {int} The sum of the two numbers.
 */
function foo(num1, num2) {
    return num1 + num2;
}

/**
 * Represents a sum.
 * @param {int} num1 The first number.
 * @param {int} num2 The second number.
 * @constructor
 */
function foo(num1, num2) { }

// use of @override make @param and @returns optional
/**
 * A description
 * @override
 */
function foo(a) {
    return a;
}

// @returns is not required for a constructor
class Foo {
    /**
    *
    * @param {int} num1 The first number.
    */
    constructor(num1) {
        this.num1 = num1;
    }
}
```

## Options

### prefer

JSDoc offers a lot of tags with overlapping meaning. For example, both `@return` and `@returns` are acceptable for specifying the return value of a function. However, you may want to enforce a certain tag be used instead of others. You can specify your preferences regarding tag substitution by providing a mapping called `prefer` in the rule configuration. For example, to specify that `@returns` should be used instead of `@return`, you can use the following configuration:

JSDoc提供了很多有重叠的标签.例如，`@return` 和 `@returns`都是可接受的，用来指定一个函数的返回值。然而，你可能想强制使用一个特定的标签而不是其他的。你可以通过在规则配置中提供一个`prefer`映射，指定你关于标签的替代的首选项。例如，指定必须使用`@returns`而不是`@return`，你可以使用如下配置：

```json
"valid-jsdoc": [2, {
    "prefer": {
        "return": "returns"
    }
}]
```

With this configuration, ESLint will warn when it finds `@return` and recommend to replace it with `@returns`.

在这个配置中，当ESLint发现`@return`，它将发出警告，并推荐使用`@returns`代替。

#### requireReturn

By default ESLint requires you to document every function with a `@return` tag regardless of whether there is anything returned by the function. If instead you want to enforce that only functions with a `return` statement are documented with a `@return` tag, set the `requireReturn` option to `false`.  When `requireReturn` is `false`, every function documented with a `@return` tag must have a `return` statement, and every function with a `return` statement must have a `@return` tag.

默认情况下，ESLint要求你使用`@return`记录每个函数，不管该函数中是否有返回值。如果你想强制要求含有`return`语句的函数使用`@return`标记，设置`requireReturn`为`false`。当`requireReturn`为`false`时，每个有`@return`的函数都必须有一个`return`语句，而且每个有`return`语句的函数都必须有一个`@return`标记。

```json
"valid-jsdoc": [2, {
    "requireReturn": false
}]
```

### requireParamDescription

By default ESLint requires you to specify a description for each `@param`. You can choose not to require descriptions for `@param` by setting `requireParamDescription` to `false`.

默认情况下，ESLint要求你为每个`@param`指定一个描述。你可以通过设置`requireParamDescription`为`false`选择不要求`@param`有描述。

```json
"valid-jsdoc": [2, {
    "requireParamDescription": false
}]
```

### requireReturnDescription

By default ESLint requires you to specify a description for each `@return`. You can choose not to require descriptions for `@return` by setting `requireReturnDescription` to `false`.

默认情况下，ESLint要求你为每个`@reutrn`指定一个描述。你可以通过设置`requireReturnDescription`为`false`选择不要求`@return`有描述。

```json
"valid-jsdoc": [2, {
    "requireReturnDescription": false
}]
```

### matchDescription

Specify a regular expression to validate JSDoc comment block description against.

指定一个正则表达式验证JSDoc注释块的描述。

```json
"valid-jsdoc": [2, {
    "matchDescription": "^[A-Z][A-Za-z0-9\\s]*[.]$"
}]
```

### requireReturnType

By default ESLint requires you to specify `type` for `@return` tag for every documented function.

默认情况下，ESLint要求你为每个documented函数的`@return`标签指定`type`。

```json
"valid-jsdoc": [2, {
    "requireReturnType": false
}]
```

### preferType

It will validate all the types from jsdoc with the options setup by the user. Inside the options, key should be what the type you want to check and the value of it should be what the expected type should be. Note that we don't check for spelling mistakes with this option.
In the example below, it will expect the "object" to start with an uppercase and all the "string" type to start with a lowercase.

```json
"valid-jsdoc": [2, {
    "preferType": {
        "String": "string",
        "object": "Object",
        "test": "TesT"
    }
}]
```

Examples of **incorrect** code for a sample of `"preferType"` options:

```js
/*eslint valid-jsdoc: [2, { "preferType": { "String": "string", "object": "Object", "test": "TesT" } }]*/

/**
 * Adds two numbers together.
 * @param {String} param1 The first parameter.
 * @returns {object} The sum of the two numbers.
 */
function foo(param1) {
    return {a: param1};
}

/**
 * Adds two numbers together.
 * @param {Array<String>} param1 The first parameter.
 * @param {{1:test}} param2 The second parameter.
 * @returns {object} The sum of the two numbers.
 */
function foo(param1, param2) {
    return {a: param1};
}

/**
 * Adds two numbers together.
 * @param {String|int} param1 The first parameter.
 * @returns {object} The sum of the two numbers.
 */
function foo(param1) {
    return {a: param1};
}
```

Examples of **correct** code for a sample of `"preferType"` options:

```js
/*eslint valid-jsdoc: [2, { "preferType": { "String": "string", "object": "Object", "test": "TesT" } }]*/

/**
 * Adds two numbers together.
 * @param {string} param1 The first parameter.
 * @returns {Object} The sum of the two numbers.
 */
function foo(param1) {
    return {a: param1};
}

/**
 * Adds two numbers together.
 * @param {Array<string>} param1 The first parameter.
 * @param {{1:TesT}} param2 The second parameter.
 * @returns {Object} The sum of the two numbers.
 */
function foo(param1, param2) {
    return {a: param1};
}

/**
 * Adds two numbers together.
 * @param {string|int} param1 The first parameter.
 * @returns {Object} The sum of the two numbers.
 */
function foo(param1) {
    return {a: param1};
}
```

## When Not To Use It

If you aren't using JSDoc, then you can safely turn this rule off.

如果你不使用JSDoc，你可以关闭此规则。

## Further Reading

* [JSDoc](http://usejsdoc.org)

## Version

This rule was introduced in ESLint 0.4.0.

该规则在ESLint 0.4.0中被引入。

## Resources

* [Rule source](https://github.com/eslint/eslint/tree/master/lib/rules/valid-jsdoc.js)
* [Documentation source](https://github.com/eslint/eslint/tree/master/docs/rules/valid-jsdoc.md)
