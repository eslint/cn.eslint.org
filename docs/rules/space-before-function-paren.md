---
title: Rule space-before-function-paren
layout: doc
translator: molee1905
proofreader: freeyiyi1993
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# Require or disallow a space before function parenthesis (space-before-function-paren)

# 要求或禁止函数圆括号之前有一个空格 (space-before-function-paren)

When formatting a function, whitespace is allowed between the function name or `function` keyword and the opening paren. Named functions also require a space between the `function` keyword and the function name, but anonymous functions require no whitespace. For example:

当格式化一个函数，函数名或`function`关键字与左括号之间允许有空白。命名函数要求函数名和`function`关键字之间有空格，但是匿名函数要求不加空格。例如：

```js
function withoutSpace(x) {
    // ...
}

function withSpace (x) {
    // ...
}

var anonymousWithoutSpace = function() {};

var anonymousWithSpace = function () {};
```

Style guides may require a space after the `function` keyword for anonymous functions, while others specify no whitespace. Similarly, the space after a function name may or may not be required.

一些风格指南可能要求匿名函数的`function`关键字后面有一个空格，而其他函数指定不要空格。同样的，函数名后可能会也可能不会要求有空格。

**Fixable:** This rule is automatically fixable using the `--fix` flag on the command line.

**Fixable:** 该规则可以通过`--fix`命令行进行自动修复。

## Rule Details

This rule aims to enforce consistent spacing before function parentheses and as such, will warn whenever whitespace doesn't match the preferences specified.

该规则旨在强制函数括号之前的空格的一致性，因此，当空格值不匹配指定首选参数时，该规则将发出警告。

## Options

This rule takes one argument. If it is `"always"` then all named functions and anonymous functions must have space before function parentheses. If `"never"` then all named functions and anonymous functions must not have space before function parentheses. If you want different spacing for named and anonymous functions you can pass a configuration object as the rule argument to configure those separately (e. g. `{"anonymous": "always", "named": "never"}`).

该规则有一个参数。如果为`"always"`，所有命名的函数和匿名函数的圆括号之前都必须有空格。如果为`"never"` ，所有命名的函数和匿名函数的圆括号之前都必须没有空格。如果命名的函数和匿名函数要求不同的空格类型，可以单独传递一个可选配置的对象作为该规则的参数来分别配置(例如 `{"anonymous": "always", "named": "never"}`)。

The default configuration is `"always"`.

默认配置为`"always"`。

### "always"

The following patterns are considered problems:

以下模式被认为是有问题的：

```js
/*eslint space-before-function-paren: 2*/
/*eslint-env es6*/

function foo() {
    // ...
}

var bar = function() {
    // ...
};

var bar = function foo() {
    // ...
};

class Foo {
    constructor() {
        // ...
    }
}

var foo = {
    bar() {
        // ...
    }
};
```

The following patterns are not considered problems:

以下模式被认为是没有问题的：

```js
/*eslint space-before-function-paren: 2*/
/*eslint-env es6*/

function foo () {
    // ...
}

var bar = function () {
    // ...
};

var bar = function foo () {
    // ...
};

class Foo {
    constructor () {
        // ...
    }
}

var foo = {
    bar () {
        // ...
    }
};
```

### "never"

The following patterns are considered problems:

以下模式被认为是有问题的：

```js
/*eslint space-before-function-paren: [2, "never"]*/
/*eslint-env es6*/

function foo () {
    // ...
}

var bar = function () {
    // ...
};

var bar = function foo () {
    // ...
};

class Foo {
    constructor () {
        // ...
    }
}

var foo = {
    bar () {
        // ...
    }
};
```

The following patterns are not considered problems:

以下模式被认为是没有问题的：

```js
/*eslint space-before-function-paren: [2, "never"]*/
/*eslint-env es6*/

function foo() {
    // ...
}

var bar = function() {
    // ...
};

var bar = function foo() {
    // ...
};

class Foo {
    constructor() {
        // ...
    }
}

var foo = {
    bar() {
        // ...
    }
};
```

### `{"anonymous": "always", "named": "never"}`

The following patterns are considered problems:

以下模式被认为是有问题的：

```js
/*eslint space-before-function-paren: [2, { "anonymous": "always", "named": "never" }]*/
/*eslint-env es6*/

function foo () {
    // ...
}

var bar = function() {
    // ...
};

class Foo {
    constructor () {
        // ...
    }
}

var foo = {
    bar () {
        // ...
    }
};
```

The following patterns are not considered problems:

以下模式被认为是没有问题的：

```js
/*eslint space-before-function-paren: [2, { "anonymous": "always", "named": "never" }]*/
/*eslint-env es6*/

function foo() {
    // ...
}

var bar = function () {
    // ...
};

class Foo {
    constructor() {
        // ...
    }
}

var foo = {
    bar() {
        // ...
    }
};
```

### `{"anonymous": "never", "named": "always"}`

The following patterns are considered problems:

以下模式被认为是有问题的：

```js
/*eslint space-before-function-paren: [2, { "anonymous": "never", "named": "always" }]*/
/*eslint-env es6*/

function foo() {
    // ...
}

var bar = function () {
    // ...
};

class Foo {
    constructor() {
        // ...
    }
}

var foo = {
    bar() {
        // ...
    }
};
```

The following patterns are not considered problems:

以下模式被认为是没有问题的：

```js
/*eslint space-before-function-paren: [2, { "anonymous": "never", "named": "always" }]*/
/*eslint-env es6*/

function foo () {
    // ...
}

var bar = function() {
    // ...
};

class Foo {
    constructor () {
        // ...
    }
}

var foo = {
    bar () {
        // ...
    }
};
```

## When Not To Use It

You can turn this rule off if you are not concerned with the consistency of spacing before function parenthesis.

如果你不关心函数圆括号之前的空格的一致性，你可以关闭此规则。

## Related Rules

* [space-after-keywords](space-after-keywords)
* [space-return-throw-case](space-return-throw-case)

## Version

This rule was introduced in ESLint 0.18.0.

该规则在ESLint 0.18.0 中被引入。

## Resources

* [Rule source](https://github.com/eslint/eslint/tree/master/lib/rules/space-before-function-paren.js)
* [Documentation source](https://github.com/eslint/eslint/tree/master/docs/rules/space-before-function-paren.md)
