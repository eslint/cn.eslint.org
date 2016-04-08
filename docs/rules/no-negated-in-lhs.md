---
title: Rule no-negated-in-lhs
layout: doc
translator: molee1905
proofreader: molee1905
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# Disallow negated left operand of `in` operator (no-negated-in-lhs)

# 禁止`in`操作符的否定的左操作数 (no-negated-in-lhs)

## Rule Details

This rule is raised to highlight a potential error. Commonly, when a developer intends to write

该规则旨在高亮显示一个潜在的错误。通常，当一个开发人员想要写：

```js
if(!(a in b)) {
    // do something
}
```

they will instead write

他们却写成了：

```js
if(!a in b) {
    // do something
}
```

If one intended the original behaviour, the left operand should be explicitly coerced to a string like below.

如果想要原本的行为，左操作数应该显式的强制转为字符串，想下面这样

```js
if(('' + !a) in b) {
    // do something
}
```

Examples of **incorrect** code for this rule:

**错误**代码示例：

```js
/*eslint no-negated-in-lhs: "error"*/

if(!a in b) {
    // do something
}
```

Examples of **correct** code for this rule:

**正确**代码示例：

```js
/*eslint no-negated-in-lhs: "error"*/

if(!(a in b)) {
    // do something
}

if(('' + !a) in b) {
    // do something
}
```

## When Not To Use It

Never.

## Further Reading

None.

## Version

This rule was introduced in ESLint 0.1.2.

该规则在 ESLint 0.1.2 中被引入。

## Resources

* [Rule source](https://github.com/eslint/eslint/tree/master/lib/rules/no-negated-in-lhs.js)
* [Documentation source](https://github.com/eslint/eslint/tree/master/docs/rules/no-negated-in-lhs.md)
