---
title: Rule no-lonely-if
layout: doc
translator: molee1905
proofreader: molee1905
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# Disallow `if` as the Only Statement in an `else` Block (no-lonely-if)

# 禁止`if`作为唯一的语句出现在`else`语句中 (no-lonely-if)

If an `if` statement is the only statement in the `else` block of a parent `if` statement, it is often clearer to combine the two to using `else if` form.

在`if` `else` 语句中，如果`if`作为唯一的语句出现在`else`中，往往使用`else if`形式会使代码更清晰。

```js
if (foo) {
    // ...
} else {
    if (bar) {
        // ...
    }
}
```

should be rewritten as

应该被重写为：

```js
if (foo) {
    // ...
} else if (bar) {
    // ...
}
```

## Rule Details

This rule warns when an `if` statement's `else` block contains only another `if` statement.

如果`if`语句的`else`块中只包含另一个`if`语句，该规则将会发出警告。

The following patterns are considered problems:

以下模式被认为是有问题的：

```js
/*eslint no-lonely-if: 2*/

if (condition) {
    // ...
} else {
    if (anotherCondition) {
        // ...
    }
}

if (condition) {
    // ...
} else {
    if (anotherCondition) {
        // ...
    } else {
        // ...
    }
}
```

The following patterns are not considered problems:

以下模式被认为是没有问题的：

```js
/*eslint no-lonely-if: 2*/

if (condition) {
    // ...
} else if (anotherCondition) {
    // ...
}

if (condition) {
    // ...
} else if (anotherCondition) {
    // ...
} else {
    // ...
}

if (condition) {
    // ...
} else {
    if (anotherCondition) {
        // ...
    }
    doSomething();
}
```

## When Not To Use It

Disable this rule if the code is clearer without requiring the `else if` form.

如果不使用`else if`也能使代码比较清晰，禁用此规则即可。

## Version

This rule was introduced in ESLint 0.6.0.

该规则在 ESLint 0.6.0 中被引入。

## Resources

* [Rule source](https://github.com/eslint/eslint/tree/master/lib/rules/no-lonely-if.js)
* [Documentation source](https://github.com/eslint/eslint/tree/master/docs/rules/no-lonely-if.md)
