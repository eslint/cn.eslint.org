---
title: max-statements - Rules
layout: doc
edit_link: https://github.com/eslint/eslint/edit/master/docs/rules/max-statements.md
rule_type: suggestion
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# enforce a maximum number of statements allowed in function blocks (max-statements)

# 限制函数块中的语句的最大数量 (max-statements)

The `max-statements` rule allows you to specify the maximum number of statements allowed in a function.

该规则允许你指定一个函数中所允许允许的最大语句数量。

```js
function foo() {
  var bar = 1; // one statement
  var baz = 2; // two statements
  var qux = 3; // three statements
}
```

## Rule Details

This rule enforces a maximum number of statements allowed in function blocks.

该规则强制函数中所允许的最大语句数量。

## Options

This rule has a number or object option:

该规则有一个数字或对象选项：

* `"max"` (default `10`) enforces a maximum number of statements allows in function blocks

**Deprecated:** The object property `maximum` is deprecated; please use the object property `max` instead.

**已弃用：** `maximum` 属性已弃用；请使用 `max` 属性。

This rule has an object option:

该规则有一个对象选项：

* `"ignoreTopLevelFunctions": true` ignores top-level functions
* `"ignoreTopLevelFunctions": true` 忽略顶级函数

### max

Examples of **incorrect** code for this rule with the default `{ "max": 10 }` option:

默认选项 `{ "max": 10 }` 的 **错误** 代码示例：

```js
/*eslint max-statements: ["error", 10]*/
/*eslint-env es6*/

function foo() {
  var foo1 = 1;
  var foo2 = 2;
  var foo3 = 3;
  var foo4 = 4;
  var foo5 = 5;
  var foo6 = 6;
  var foo7 = 7;
  var foo8 = 8;
  var foo9 = 9;
  var foo10 = 10;

  var foo11 = 11; // Too many.
}

let foo = () => {
  var foo1 = 1;
  var foo2 = 2;
  var foo3 = 3;
  var foo4 = 4;
  var foo5 = 5;
  var foo6 = 6;
  var foo7 = 7;
  var foo8 = 8;
  var foo9 = 9;
  var foo10 = 10;

  var foo11 = 11; // Too many.
};
```

Examples of **correct** code for this rule with the default `{ "max": 10 }` option:

默认选项 `{ "max": 10 }` 的 **正确** 代码示例：

```js
/*eslint max-statements: ["error", 10]*/
/*eslint-env es6*/

function foo() {
  var foo1 = 1;
  var foo2 = 2;
  var foo3 = 3;
  var foo4 = 4;
  var foo5 = 5;
  var foo6 = 6;
  var foo7 = 7;
  var foo8 = 8;
  var foo9 = 9;
  var foo10 = 10;
  return function () {

    // The number of statements in the inner function does not count toward the
    // statement maximum.

    return 42;
  };
}

let foo = () => {
  var foo1 = 1;
  var foo2 = 2;
  var foo3 = 3;
  var foo4 = 4;
  var foo5 = 5;
  var foo6 = 6;
  var foo7 = 7;
  var foo8 = 8;
  var foo9 = 9;
  var foo10 = 10;
  return function () {

    // The number of statements in the inner function does not count toward the
    // statement maximum.

    return 42;
  };
}
```

### ignoreTopLevelFunctions

Examples of additional **correct** code for this rule with the `{ "max": 10 }, { "ignoreTopLevelFunctions": true }` options:

选项 `{ "max": 10 }, { "ignoreTopLevelFunctions": true }` 的 **正确** 代码示例：

```js
/*eslint max-statements: ["error", 10, { "ignoreTopLevelFunctions": true }]*/

function foo() {
  var foo1 = 1;
  var foo2 = 2;
  var foo3 = 3;
  var foo4 = 4;
  var foo5 = 5;
  var foo6 = 6;
  var foo7 = 7;
  var foo8 = 8;
  var foo9 = 9;
  var foo10 = 10;
  var foo11 = 11;
}
```

## Related Rules

* [complexity](complexity)
* [max-depth](max-depth)
* [max-len](max-len)
* [max-lines](max-lines)
* [max-lines-per-function](max-lines-per-function)
* [max-nested-callbacks](max-nested-callbacks)
* [max-params](max-params)

## Version

This rule was introduced in ESLint 0.0.9.

该规则在 ESLint 0.0.9 中被引入。

## Resources

* [Rule source](https://github.com/eslint/eslint/tree/master/lib/rules/max-statements.js)
* [Documentation source](https://github.com/eslint/eslint/tree/master/docs/rules/max-statements.md)
