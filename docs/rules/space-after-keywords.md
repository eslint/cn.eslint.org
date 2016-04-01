---
title: Rule space-after-keywords
layout: doc
translator: molee1905
proofreader: maomaoking
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# Require or disallow spaces following keywords (space-after-keywords)

# 要求或禁止在关键字后存在空格 (space-after-keywords)

**Replacement notice**: This rule was removed in ESLint v2.0 and replaced by [keyword-spacing](keyword-spacing) rule.

**替代通知**: 该规则在 ESLint v2.0 中被移除，被[keyword-spacing](keyword-spacing) 代替。

Some style guides will require or disallow spaces following the certain keywords.

一些风格指南在特定的关键字后要求或禁止存在空格。

```js
if (condition) {
    doSomething();
} else {
    doSomethingElse();
}

if(condition) {
    doSomething();
}else{
    doSomethingElse();
}
```

**Fixable:** This rule is automatically fixable using the `--fix` flag on the command line.

**Fixable:** 该规则可以通过`--fix`命令行进行自动修复。

## Rule Details

This rule will enforce consistency of spacing after the keywords `if`, `else`, `for`, `while`, `do`, `switch`, `try`, `catch`, `finally`, and `with`.

该规则强制`if`, `else`, `for`, `while`, `do`, `switch`, `try`, `catch`, `finally`, 和 `with`这些关键字后空格的一致性。

This rule takes one argument. If it is `"always"` then the keywords must be followed by at least one space. If `"never"`
then there should be no spaces following. The default is `"always"`.

该规则有一个参数。如果是`"always"`，这些关键字后至少跟随一个空格。如果是`"never"`，这些关键字后不要有空格。默认为`"always"`。

The following patterns are considered problems:

以下模式被认为是有问题的：

```js
/*eslint space-after-keywords: 2*/

if(a) {}

if (a) {} else{}

do{} while (a);
```

```js
/*eslint space-after-keywords: [2, "never"]*/

if (a) {}
```

The following patterns are not considered problems:

以下模式被认为是没有问题的：

```js
/*eslint space-after-keywords: 2*/

if (a) {}

if (a) {} else {}
```

```js
/*eslint space-after-keywords: [2, "never"]*/

if(a) {}
```

## Version

This rule was introduced in ESLint 0.6.0 and removed in 2.0.0-beta.3.

该规则在ESLint 0.6.0 中被引入。

## Resources

* [Documentation source](https://github.com/eslint/eslint/tree/master/docs/rules/space-after-keywords.md)

