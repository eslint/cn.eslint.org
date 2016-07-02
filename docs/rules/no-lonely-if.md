---
title: Rule no-lonely-if
layout: doc
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# disallow `if` statements as the only statement in `else` blocks (no-lonely-if)

# 禁止 `if` 语句作为唯一语句出现在 `else` 语句块中 (no-lonely-if)

If an `if` statement is the only statement in the `else` block, it is often clearer to use an `else if` form.

如果 `if` 语句作为唯一的语句出现在 `else` 语句块中，往往使用 `else if` 形式会使代码更清晰。

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

This rule disallows `if` statements as the only statement in `else` blocks.

该规则禁止 `if` 语句作为唯一语句出现在 `else` 语句块中。

Examples of **incorrect** code for this rule:

**错误** 代码示例：

```js
/*eslint no-lonely-if: "error"*/

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

Examples of **correct** code for this rule:

```js
/*eslint no-lonely-if: "error"*/

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
