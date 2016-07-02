---
title: Rule no-empty
layout: doc
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# disallow empty block statements (no-empty)

# 禁止空块语句 (no-empty)

Empty block statements, while not technically errors, usually occur due to refactoring that wasn't completed. They can cause confusion when reading code.

空语句块，如果不是技术上的错误，通常是由于不完整的重构造成的。这会造成代码阅读上的困惑。

## Rule Details

This rule disallows empty block statements. This rule ignores block statements which contain a comment (for example, in an empty `catch` or `finally` block of a `try` statement to indicate that execution should continue regardless of errors).

该规则禁止空语句块出现。该规则忽略包含一个注释的语句块（例如，在 `try` 语句中，一个空的 `catch` 或 `finally` 语句块意味着程序应该继续执行，无论是否出现错误）。

Examples of **incorrect** code for this rule:

**错误** 代码示例：

```js
/*eslint no-empty: "error"*/

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

**正确** 代码示例：

```js
/*eslint no-empty: "error"*/

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

## Options

This rule has an object option for exceptions:

该规则有例外情况，是个对象：

* `"allowEmptyCatch": true` allows empty `catch` clauses (that is, which do not contain a comment)
* `"allowEmptyCatch": true` 允许出现空的 `catch` 子句 (也就是说，不包含注释)

### allowEmptyCatch

Examples of additional **correct** code for this rule with the `{ "allowEmptyCatch": true }` option:

选项 `{ "allowEmptyCatch": true }` 的 **正确** 代码示例：

```js
/* eslint no-empty: ["error", { "allowEmptyCatch": true }] */
try {
    doSomething();
} catch (ex) {}

try {
    doSomething();
}
catch (ex) {}
finally {
    /* continue regardless of error */
}
```

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
