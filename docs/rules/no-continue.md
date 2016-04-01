---
title: Rule no-continue
layout: doc
translator: molee1905
proofreader: molee1905
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# Disallow continue (no-continue)

# 禁用 continue (no-continue)

The `continue` statement terminates execution of the statements in the current iteration of the current or labeled loop, and continues execution of the loop with the next iteration. When used incorrectly it makes code less testable, less readable and less maintainable. Structured control flow statements such as `if` should be used instead.

`continue`终止当前的循环的此次迭代或带标签的循环，执行循环中的下一个迭代。不正确的使用会降低代码可测性、可读性和可维护性。应使用结构化的控制语句如`if`来代替。

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

This rule is aimed at preventing the use of `continue` statement.
As such it warns whenever it sees `continue` statement.

该规则旨在防止`continue`语句的使用。因此，当遇到`continue`语句时，该规则将发出警告。

The following patterns are considered problems:

以下模式被认为是有问题的：

```js
/*eslint no-continue: 2*/

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
/*eslint no-continue: 2*/

var sum = 0,
    i;

labeledLoop: for(i = 0; i < 10; i++) {
    if(i >= 5) {
        continue labeledLoop;
    }

    a += i;
}
```

The following patterns are not considered problems:

以下模式被认为是没有问题的：

```js
/*eslint no-continue: 2*/

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
