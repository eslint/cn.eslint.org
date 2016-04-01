---
title: Rule no-empty
layout: doc
translator: ybbjegj
proofreader: molee1905
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# Disallow Empty Block Statements (no-empty)

# 禁止空块语句 (no-empty)

Empty block statements, while not technically errors, usually occur due to refactoring that wasn't completed. They can cause confusion when reading code.

空块语句，如果不是技术的错误，通常是重构没有完成造成的。阅读代码时，会引起困惑。

## Rule Details

This rule is aimed at eliminating empty block statements. A block will not be considered a warning if it contains a comment line.

该规则旨在消除空块语句。虽然不是技术上的错误，但空的语句块可能是阅读代码时困惑的根源。
如果块语句包含注释行，将不会被认为是一个警告。

Examples of **incorrect** code for this rule:

**错误**代码示例：

```js
/*eslint no-empty: 2*/

if (foo) {
}

while (foo) {
}

switch(foo) {
}

try {
    doSomething();
} catch(ex) {

} finally {

}
```

Examples of **correct** code for this rule:

**正确**代码示例：

```js
/*eslint no-empty: 2*/

if (foo) {
    // empty
}

while (foo) {
    /* empty */
}

try {
    doSomething();
} catch (ex) {
    // continue regardless of error
}

try {
    doSomething();
} finally {
    /* continue regardless of error */
}
```

Since you must always have at least a `catch` or a `finally` block for any `try`, it is common to have empty block statements when execution should continue regardless of error.

由于使用 `try` 时必须至少有一个 `catch` 或 `finally`，当代码代码需要忽略错误继续执行时，通常使用空语句块。

## When Not To Use It

If you intentionally use empty block statements then you can disable this rule.
 
如果你打算使用空语句块，那么你可以禁用此规则。

## Related Rules

* [no-empty-function](./no-empty-function)

## Version

This rule was introduced in ESLint 0.0.2.

该规则在 ESLint 0.0.2 中被引入。

## Resources

* [Rule source](https://github.com/eslint/eslint/tree/master/lib/rules/no-empty.js)
* [Documentation source](https://github.com/eslint/eslint/tree/master/docs/rules/no-empty.md)
