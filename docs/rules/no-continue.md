---
title: no-continue - Rules
layout: doc
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# disallow `continue` statements (no-continue)

# 禁用 continue (no-continue)

The `continue` statement terminates execution of the statements in the current iteration of the current or labeled loop, and continues execution of the loop with the next iteration. When used incorrectly it makes code less testable, less readable and less maintainable. Structured control flow statements such as `if` should be used instead.

`continue` 语句终止当前的循环的此次迭代或带标签的循环，执行循环中的下一个迭代。不正确的使用会降低代码可测性、可读性以及可维护性。应使用结构化的控制语句如 `if` 来代替。

```js
var sum = 0,
    i;

for(i = 0; i < 10; i++) {
    if(i >= 5) {
        continue;
    }

    a += i;
}
```

## Rule Details

This rule disallows `continue` statements.

该规则禁止使用 `continue` 语句。

Examples of **incorrect** code for this rule:

**错误** 代码示例：

```js
/*eslint no-continue: "error"*/

var sum = 0,
    i;

for(i = 0; i < 10; i++) {
    if(i >= 5) {
        continue;
    }

    a += i;
}
```

```js
/*eslint no-continue: "error"*/

var sum = 0,
    i;

labeledLoop: for(i = 0; i < 10; i++) {
    if(i >= 5) {
        continue labeledLoop;
    }

    a += i;
}
```

Examples of **correct** code for this rule:

**正确** 代码示例：

```js
/*eslint no-continue: "error"*/

var sum = 0,
    i;

for(i = 0; i < 10; i++) {
    if(i < 5) {
       a += i;
    }
}
```

## Compatibility

* **JSLint**: `continue`

## Version

This rule was introduced in ESLint 0.19.0.

该规则在 ESLint 0.19.0 被引入。

## Resources

* [Rule source](https://github.com/eslint/eslint/tree/master/lib/rules/no-continue.js)
* [Documentation source](https://github.com/eslint/eslint/tree/master/docs/rules/no-continue.md)
