---
title: Rule no-script-url
layout: doc
translator: fengnana
proofreader: xkf521
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# Disallow Script URLs (no-script-url)

# 禁止Script URLs (no-script-url)

Using `javascript:` URLs is considered by some as a form of `eval`. Code passed in `javascript:` URLs has to be parsed and evaluated by the browser in the same way that `eval` is processed.

在链接地址中使用`javascript:`被有些人认为是`eval`的一种形式。代码通过`javascript:`链接不得不被浏览器解析和赋值，其处理方式与`eval`很相似。

## Rule Details

The following patterns are considered problems:

以下模式被认为是有问题的：

```js
/*eslint no-script-url: 2*/

location.href = "javascript:void(0)";
```

## Compatibility

* **JSHint**: This rule corresponds to `scripturl` rule of JSHint.

* **JSHint**：此规则对应JSHint中的`scripturl`规则。


## Further Reading

* [What is the matter with script-targeted URLs?](http://stackoverflow.com/questions/13497971/what-is-the-matter-with-script-targeted-urls)

## Version

This rule was introduced in ESLint 0.0.9.

该规则在ESLint 0.0.9 中被引入。

## Resources

* [Rule source](https://github.com/eslint/eslint/tree/master/lib/rules/no-script-url.js)
* [Documentation source](https://github.com/eslint/eslint/tree/master/docs/rules/no-script-url.md)
