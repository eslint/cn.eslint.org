---
title: Rule max-statements
layout: doc
translator: molee1905
proofreader: molee1905
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# Limit Maximum Number of Statements (max-statements)

# 限制语句的最大数量 (max-statements)

The `max-statements` rule allows you to specify the maximum number of statements allowed in a function.

该规则允许你指定一个函数中允许的语句的最大数值。

```js
function foo() {
  var bar = 1; // one statement
  var baz = 2; // two statements
  var qux = 3; // three statements
}
```

## Rule Details

This rule allows you to configure the maximum number of statements allowed in a function.  The default is 10.

该规则允许配置函数中允许的最大语句数量。默认为10。

## Options

There is an additional optional argument to ignore top level functions.

有一个额外的可选参数可以忽略顶层函数。

```json
"max-statements": [2, 10, {"ignoreTopLevelFunctions": true}]

// or you can use an object property to set the maximum

"max-statements": [2, {"maximum": 10}, {"ignoreTopLevelFunctions": true}]
```

The following patterns are considered problems:

以下模式被认为是有问题的：

```js
/*eslint max-statements: [2, 2]*/  // Maximum of 2 statements.
function foo() {
  var bar = 1;
  var baz = 2;

  var qux = 3; // Too many.
}
```

The following patterns are not considered problems:

以下模式被认为是没有问题的：

```js
/*eslint max-statements: [2, 2]*/  // Maximum of 2 statements.
function foo() {
  var bar = 1;
  return function () {

    // The number of statements in the inner function does not count toward the
    // statement maximum.

    return 42;
  };
}
```

```js
/*eslint max-statements: [2, 1, {ignoreTopLevelFunctions: true}]*/  // Maximum of 1 statement.
(function() {
  var bar = 1;
  return function () {
    return 42;
  };
})()
```

## Related Rules

* [complexity](complexity)
* [max-depth](max-depth)
* [max-len](max-len)
* [max-nested-callbacks](max-nested-callbacks)
* [max-params](max-params)

## Version

This rule was introduced in ESLint 0.0.9.

该规则在 ESLint 0.0.9 中被引入。

## Resources

* [Rule source](https://github.com/eslint/eslint/tree/master/lib/rules/max-statements.js)
* [Documentation source](https://github.com/eslint/eslint/tree/master/docs/rules/max-statements.md)
