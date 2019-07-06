---
title: no-empty-function - Rules
layout: doc
edit_link: https://github.com/eslint/eslint/edit/master/docs/rules/no-empty-function.md
rule_type: suggestion
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# Disallow empty functions (no-empty-function)

# 禁止出现空函数 (no-empty-function)

Empty functions can reduce readability because readers need to guess whether it's intentional or not.
So writing a clear comment for empty functions is a good practice.

空函数能降低代码的可读性，因为读者需要猜测它是否是有意为之。所以，为空函数写一个清晰的注释是个很好的实践。

```js
function foo() {
    // do nothing.
}
```

Especially, the empty block of arrow functions might be confusing developers.
It's very similar to an empty object literal.

尤其是箭头函数的空语句块可能使开发者感到困惑。它非常类似于一个空对象。

```js
list.map(() => {});   // This is a block, would return undefined.
list.map(() => ({})); // This is an empty object.
```

## Rule Details

This rule is aimed at eliminating empty functions.
A function will not be considered a problem if it contains a comment.

该规则旨在消除空函数。如果一个函数包含了一条注释，它将不会被认为有问题。

Examples of **incorrect** code for this rule:

**错误** 代码示例：

```js
/*eslint no-empty-function: "error"*/
/*eslint-env es6*/

function foo() {}

var foo = function() {};

var foo = () => {};

function* foo() {}

var foo = function*() {};

var obj = {
    foo: function() {},

    foo: function*() {},

    foo() {},

    *foo() {},

    get foo() {},

    set foo(value) {}
};

class A {
    constructor() {}

    foo() {}

    *foo() {}

    get foo() {}

    set foo(value) {}

    static foo() {}

    static *foo() {}

    static get foo() {}

    static set foo(value) {}
}
```

Examples of **correct** code for this rule:

**正确** 代码示例：

```js
/*eslint no-empty-function: "error"*/
/*eslint-env es6*/

function foo() {
    // do nothing.
}

var foo = function() {
    // any clear comments.
};

var foo = () => {
    bar();
};

function* foo() {
    // do nothing.
}

var foo = function*() {
    // do nothing.
};

var obj = {
    foo: function() {
        // do nothing.
    },

    foo: function*() {
        // do nothing.
    },

    foo() {
        // do nothing.
    },

    *foo() {
        // do nothing.
    },

    get foo() {
        // do nothing.
    },

    set foo(value) {
        // do nothing.
    }
};

class A {
    constructor() {
        // do nothing.
    }

    foo() {
        // do nothing.
    }

    *foo() {
        // do nothing.
    }

    get foo() {
        // do nothing.
    }

    set foo(value) {
        // do nothing.
    }

    static foo() {
        // do nothing.
    }

    static *foo() {
        // do nothing.
    }

    static get foo() {
        // do nothing.
    }

    static set foo(value) {
        // do nothing.
    }
}
```

## Options

This rule has an option to allow specific kinds of functions to be empty.

该规则一个选项，允许特定类型的函数为空。

* `allow` (`string[]`) - A list of kind to allow empty functions. List items are some of the following strings. An empty array (`[]`) by default.
* `allow` (`string[]`) - 所允许的空函数列表。列表元素为以下字符。默认为空数组 (`[]`)。
    * `"functions"` - Normal functions.
    * `"functions"` - 常规函数。
    * `"arrowFunctions"` - Arrow functions.
    * `"arrowFunctions"` - 箭头函数。
    * `"generatorFunctions"` - Generator functions.
    * `"generatorFunctions"` - Generator 函数。
    * `"methods"` - Class methods and method shorthands of object literals.
    * `"methods"` - 类方法和对象的方法简写
    * `"generatorMethods"` - Class methods and method shorthands of object literals with generator.
    * `"generatorMethods"` - 类方法和带有 generator 的对象的方法简写。
    * `"getters"` - Getters.
    * `"getters"` - Getters。
    * `"setters"` - Setters.
    * `"setters"` - Setters。
    * `"constructors"` - Class constructors.
    * `"constructors"` - 类的构造函数。

#### allow: functions

Examples of **correct** code for the `{ "allow": ["functions"] }` option:

选项 `{ "allow": ["functions"] }` 的 **正确** 代码示例：

```js
/*eslint no-empty-function: ["error", { "allow": ["functions"] }]*/

function foo() {}

var foo = function() {};

var obj = {
    foo: function() {}
};
```

#### allow: arrowFunctions

Examples of **correct** code for the `{ "allow": ["arrowFunctions"] }` option:

选项 `{ "allow": ["arrowFunctions"] }` 的 **正确** 代码示例：

```js
/*eslint no-empty-function: ["error", { "allow": ["arrowFunctions"] }]*/
/*eslint-env es6*/

var foo = () => {};
```

#### allow: generatorFunctions

Examples of **correct** code for the `{ "allow": ["generatorFunctions"] }` option:

选项 `{ "allow": ["generatorFunctions"] }` 的 **正确** 代码示例：

```js
/*eslint no-empty-function: ["error", { "allow": ["generatorFunctions"] }]*/
/*eslint-env es6*/

function* foo() {}

var foo = function*() {};

var obj = {
    foo: function*() {}
};
```

#### allow: methods

Examples of **correct** code for the `{ "allow": ["methods"] }` option:

选项 `{ "allow": ["methods"] }` 的 **正确** 代码示例：

```js
/*eslint no-empty-function: ["error", { "allow": ["methods"] }]*/
/*eslint-env es6*/

var obj = {
    foo() {}
};

class A {
    foo() {}
    static foo() {}
}
```

#### allow: generatorMethods

Examples of **correct** code for the `{ "allow": ["generatorMethods"] }` option:

选项 `{ "allow": ["generatorMethods"] }` 的 **正确** 代码示例：

```js
/*eslint no-empty-function: ["error", { "allow": ["generatorMethods"] }]*/
/*eslint-env es6*/

var obj = {
    *foo() {}
};

class A {
    *foo() {}
    static *foo() {}
}
```

#### allow: getters

Examples of **correct** code for the `{ "allow": ["getters"] }` option:

选项 `{ "allow": ["getters"] }` 的 **正确** 代码示例：

```js
/*eslint no-empty-function: ["error", { "allow": ["getters"] }]*/
/*eslint-env es6*/

var obj = {
    get foo() {}
};

class A {
    get foo() {}
    static get foo() {}
}
```

#### allow: setters

Examples of **correct** code for the `{ "allow": ["setters"] }` option:

选项 `{ "allow": ["setters"] }` 的 **正确** 代码示例：

```js
/*eslint no-empty-function: ["error", { "allow": ["setters"] }]*/
/*eslint-env es6*/

var obj = {
    set foo(value) {}
};

class A {
    set foo(value) {}
    static set foo(value) {}
}
```

#### allow: constructors

Examples of **correct** code for the `{ "allow": ["constructors"] }` option:

选项 `{ "allow": ["constructors"] }` 的 **正确** 代码示例：

```js
/*eslint no-empty-function: ["error", { "allow": ["constructors"] }]*/
/*eslint-env es6*/

class A {
    constructor() {}
}
```

## When Not To Use It

If you don't want to be notified about empty functions, then it's safe to disable this rule.

如果你不想收到关于空函数的通知，你可以禁用此规则。

## Related Rules

* [no-empty](./no-empty)

## Version

This rule was introduced in ESLint 2.0.0.

该规则在 ESLint 2.0.0 中被引入。

## Resources

* [Rule source](https://github.com/eslint/eslint/tree/master/lib/rules/no-empty-function.js)
* [Documentation source](https://github.com/eslint/eslint/tree/master/docs/rules/no-empty-function.md)
