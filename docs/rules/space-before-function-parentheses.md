---
title: Rule space-before-function-parentheses
layout: doc
translator: yanggao40
proofreader: molee1905
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# Require or disallow spaces before function parentheses (space-before-function-parentheses)

# 在函数括号前要求或禁止空格 (space-before-function-parentheses)

**Replacement notice**: This rule was removed in ESLint v1.0 and has been renamed to [space-before-function-paren](space-before-function-paren) for consistency with other rules' names, which used "parens" instead of "parentheses". The new rule is identical in everything except name.

**替换声明：**该规则在 ESLint v1.0 中移除，为了与其他规则保持一致被重命名为[space-before-function-paren](space-before-function-paren) , 使用 "parens" 代替 "parentheses"。新规则除了名称其他的都一样。

When formatting a function, whitespace is allowed between the function name or `function` keyword and the opening paren. Named functions also require a space between the `function` keyword and the function name, but anonymous functions require no whitespace. For example:

当格式化函数时，在函数名称和`function`关键字或者开括号之间是允许空白的。命名函数也要求在`function`关键字和函数名称之间加一个空格，但是匿名函数要求不使用空格。例如：

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

一些风格指南可能要求匿名函数在`function`关键字后使用一个空格，其它的指定不使用空格。类似的，函数名称后的空格可要求也可不要求。

## Rule Details

This rule aims to enforce consistent spacing before function parentheses and as such, will warn whenever whitespace doesn't match the preferences specified.

该规则旨在在函数的括号前强制一致的空格，这样当空格没有匹配喜好规格时，该规则将会发出警告。

This rule takes one argument. If it is `"always"` then all named functions and anonymous functions must have space before function parentheses. If `"never"` then all named functions and anonymous functions must not have space before function parentheses. If you want different spacing for named and anonymous functions you can pass an configuration object as the rule argument to configure those separately (e. g. `{"anonymous": "always", "named": "never"}`).

该规则只有一个参数。如果是`"always"`则所有的命名函数和匿名函数在括号前必须使用空格。如果是`"never"`则所有的命名函数和匿名函数在函数括号前都不允许空格。如果你想区分开命名函数和匿名函数，可以传递一个配置对象作为规则参数来分开配置（例如 `{"anonymous": "always", "named": "never"}`)。

The default configuration is `"always"`.

默认配置为`"always"`。

The following patterns are considered problems when configured `"always"`:

当配置为`"always"`时，以下模式被认为有问题的：

```js
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

The following patterns are not considered problems when configured 
`"always"`:

当配置为`"always"`时，以下模式被认为是没有问题的：

```js
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

The following patterns are considered problems when configured `"never"`:

当配置为`"never"`时，以下模式被认为是有问题的：

```js
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

The following patterns are not considered problems when configured `"never"`:

当配置为`"never"`时，以下模式被认为是没有问题的：

```js
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

The following patterns are considered problems when configured `{"anonymous": "always", "named": "never"}`:

当配置为`{"anonymous": "always", "named": "never"}`时，以下模式被认为是有问题的：

```js
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

The following patterns are not considered problems when configured `{"anonymous": "always", "named": "never"}`:

当配置为`{"anonymous": "always", "named": "never"}`时，以下模式被认为是没有问题的：

```js
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

The following patterns are considered problems when configured `{"anonymous": "never", "named": "always"}`:

当配置为`{"anonymous": "never", "named": "always"}`时，以下模式被认为是有问题的：

```js
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

The following patterns are not considered problems when configured `{"anonymous": "never", "named": "always"}`:

当配置为`{"anonymous": "never", "named": "always"}`时，以下模式被认为是没有问题的：

```js
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

如果你不关心函数括号前空格的一致性，可以关闭此规则。

## Related Rules

* [space-after-keywords](space-after-keywords)
* [space-return-throw-case](space-return-throw-case)

## Version

This rule was introduced in ESLint 0.15.0 and removed in 1.0.0-rc-1.

该规则在 ESLint 0.15.0 中被引入，在 1.0.0-rc-1 中被移除。

## Resources

* [Documentation source](https://github.com/eslint/eslint/tree/master/docs/rules/space-before-function-parentheses.md)
