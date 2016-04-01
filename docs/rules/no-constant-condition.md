---
title: Rule no-constant-condition
layout: doc
translator: ybbjegj
proofreader: molee1905
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# Disallow use of constant expressions in conditions (no-constant-condition)

# 禁止在条件中使用常量表达式 (no-constant-condition)

Comparing a literal expression in a condition is usually a typo or development trigger for a specific behavior.

在条件中，比较字面表达式通常是个书写错误或者是为了触发某个特定的行为。

```js
if (false) {
    doSomethingUnfinished();
}
```

This pattern is most likely an error and should be avoided.

这种模式最有可能个错误，应该避免。

## Rule Details

The rule is aimed at preventing a constant expression in the test of:

该规则的目的在于防止在条件中使用常量表达式。

* `if`, `for`, `while`, or `do...while` statement
* `if`，`for`， `while`， 或 `do...while` 语句
* `?:` ternary expression
* `?:` 三元表达式

Examples of **incorrect** code for this rule:

**错误**代码示例：

```js
/*eslint no-constant-condition: 2*/

if (true) {
    doSomething();
}
```

```js
/*eslint no-constant-condition: 2*/

var result = 0 ? a : b;
```

```js
/*eslint no-constant-condition: 2*/

while (-2) {
    doSomething();
}
```

```js
/*eslint no-constant-condition: 2*/

for (;true;) {
    doSomething();
}
```

```js
/*eslint no-constant-condition: 2*/

do{
    something();
} while (x = -1)
```

Examples of **correct** code for this rule:

**正确**代码示例：

```js
/*eslint no-constant-condition: 2*/

if (x === 0) {
    doSomething();
}
```

```js
/*eslint no-constant-condition: 2*/

do {
    something();
} while (x)
```

```js
/*eslint no-constant-condition: 2*/

for (;;) {
    something();
}
```

## Version

This rule was introduced in ESLint 0.4.1.

该规则在 ESLint 0.4.1 中被引入。

## Resources

* [Rule source](https://github.com/eslint/eslint/tree/master/lib/rules/no-constant-condition.js)
* [Documentation source](https://github.com/eslint/eslint/tree/master/docs/rules/no-constant-condition.md)
