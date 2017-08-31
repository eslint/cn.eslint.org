---
title: space-before-function-paren - Rules
layout: doc
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# Require or disallow a space before function parenthesis (space-before-function-paren)

# 要求或禁止函数圆括号之前有一个空格 (space-before-function-paren)

(fixable) The `--fix` option on the [command line](../user-guide/command-line-interface#fix) can automatically fix some of the problems reported by this rule.

(fixable) [命令行](../user-guide/command-line-interface#fix)中的 `--fix` 选项可以自动修复一些该规则报告的问题。

When formatting a function, whitespace is allowed between the function name or `function` keyword and the opening paren. Named functions also require a space between the `function` keyword and the function name, but anonymous functions require no whitespace. For example:

当格式化一个函数，函数名或 `function` 关键字与左括号之间允许有空白。命名函数要求函数名和 `function` 关键字之间有空格，但是匿名函数要求不加空格。例如：

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

一些风格指南可能要求匿名函数的 `function` 关键字后面有一个空格，而其他函数指定不要空格。同样的，函数名后可能会也可能不会要求有空格。

## Rule Details

This rule aims to enforce consistent spacing before function parentheses and as such, will warn whenever whitespace doesn't match the preferences specified.

该规则旨在强制函数括号之前的空格的一致性，因此，当空格值不匹配指定首选参数时，该规则将发出警告。

## Options

This rule has a string option or an object option:

该规则有一个字符串选项或一个对象选项：

```js
{
    "space-before-function-paren": ["error", "always"],
    // or
    "space-before-function-paren": ["error", {
        "anonymous": "always",
        "named": "always",
        "asyncArrow": "always"
    }],
}
```

* `always` (default) requires a space followed by the `(` of arguments.
* `always` (默认) 要求在参数的 `(` 前面有一个空格。
* `never` disallows any space followed by the `(` of arguments.
* `never` 禁止在参数的 `(` 前面有空格。

The string option does not check async arrow function expressions for backward compatibility.

字符串选项不会检查异步的箭头函数表达式以向后兼容。

You can also use a separate option for each type of function.
Each of the following options can be set to `"always"`, `"never"`, or `"ignore"`. The default is `"always"`.

你也可以对每种类型的函数分别设置选项。以下每个选项可以设置为 `"always"`、`"never"` 或 `"ignore"`。默认为 `"always"`。

* `anonymous` is for anonymous function expressions (e.g. `function () {}`).
* `anonymous` 针对匿名函数表达式 (比如 `function () {}`)。
* `named` is for named function expressions (e.g. `function foo () {}`).
* `named` 针对命名的函数表达式 (比如 `function foo () {}`)。
* `asyncArrow` is for async arrow function expressions (e.g. `async () => {}`).
* `asyncArrow` 针对异步的箭头函数表达式 (比如 `async () => {}`)。

### "always"

Examples of **incorrect** code for this rule with the default `"always"` option:

默认选项 `"always"` 的 **错误** 代码示例：

```js
/*eslint space-before-function-paren: "error"*/
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

var foo = async() => 1
```

Examples of **correct** code for this rule with the default `"always"` option:

默认选项 `"always"` 的 **正确** 代码示例：

```js
/*eslint space-before-function-paren: "error"*/
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

var foo = async () => 1
```

### "never"

Examples of **incorrect** code for this rule with the `"never"` option:

选项 `"never"` 的 **错误** 代码示例：

```js
/*eslint space-before-function-paren: ["error", "never"]*/
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

var foo = async () => 1
```

Examples of **correct** code for this rule with the `"never"` option:

选项 `"never"` 的 **正确** 代码示例：

```js
/*eslint space-before-function-paren: ["error", "never"]*/
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

var foo = async() => 1
```

### `{"anonymous": "always", "named": "never", "asyncArrow": "always"}`

Examples of **incorrect** code for this rule with the `{"anonymous": "always", "named": "never", "asyncArrow": "always"}` option:

选项 `{"anonymous": "always", "named": "never", "asyncArrow": "always"}` 的 **错误** 代码示例：

```js
/*eslint space-before-function-paren: ["error", {"anonymous": "always", "named": "never", "asyncArrow": "always"}]*/
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

var foo = async(a) => await a
```

Examples of **correct** code for this rule with the `{"anonymous": "always", "named": "never", "asyncArrow": "always"}` option:

选项 `{"anonymous": "always", "named": "never", "asyncArrow": "always"}` 的 **正确** 代码示例：

```js
/*eslint space-before-function-paren: ["error", {"anonymous": "always", "named": "never", "asyncArrow": "always"}]*/
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

var foo = async (a) => await a
```

### `{"anonymous": "never", "named": "always"}`

Examples of **incorrect** code for this rule with the `{"anonymous": "never", "named": "always"}` option:

选项 `{"anonymous": "never", "named": "always"}` 的 **错误** 代码示例：

```js
/*eslint space-before-function-paren: ["error", { "anonymous": "never", "named": "always" }]*/
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

Examples of **correct** code for this rule with the `{"anonymous": "never", "named": "always"}` option:

选项 `{"anonymous": "never", "named": "always"}` 的 **正确** 代码示例：

```js
/*eslint space-before-function-paren: ["error", { "anonymous": "never", "named": "always" }]*/
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

### `{"anonymous": "ignore", "named": "always"}`

Examples of **incorrect** code for this rule with the `{"anonymous": "ignore", "named": "always"}` option:

选项 `{"anonymous": "ignore", "named": "always"}` 的 **错误** 代码示例：

```js
/*eslint space-before-function-paren: ["error", { "anonymous": "ignore", "named": "always" }]*/
/*eslint-env es6*/

function foo() {
    // ...
}

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

Examples of **correct** code for this rule with the `{"anonymous": "ignore", "named": "always"}` option:

选项 `{"anonymous": "ignore", "named": "always"}` 的 **正确** 代码示例：

```js
/*eslint space-before-function-paren: ["error", { "anonymous": "ignore", "named": "always" }]*/
/*eslint-env es6*/

var bar = function() {
    // ...
};

var bar = function () {
    // ...
};

function foo () {
    // ...
}

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

该规则在 ESLint 0.18.0 中被引入。

## Resources

* [Rule source](https://github.com/eslint/eslint/tree/master/lib/rules/space-before-function-paren.js)
* [Documentation source](https://github.com/eslint/eslint/tree/master/docs/rules/space-before-function-paren.md)
