---
title: Rule no-invalid-regexp
layout: doc
translator: ybbjegj
proofreader: molee1905
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# Disallow Invalid Regular Expressions (no-invalid-regexp)

# 禁止无效的正则表达式（no-invalid-regexp）

This rule validates string arguments passed to the `RegExp` constructor.

该规则验证 `RegExp` 构造函数里的字符串参数。

## Rule Details

Examples of **incorrect** code for this rule:

**错误**代码示例：

```js
/*eslint no-invalid-regexp: 2*/

RegExp('[')

RegExp('.', 'z')

new RegExp('\\')
```

Examples of **correct** code for this rule:

**正确**代码示例：

```js
/*eslint no-invalid-regexp: 2*/

RegExp('.')

new RegExp

this.RegExp('[')
```

## Environments

ECMAScript 6 adds the "u" ([unicode](https://people.mozilla.org/~jorendorff/es6-draft.html#sec-get-regexp.prototype.unicode)) and "y" ([sticky](https://people.mozilla.org/~jorendorff/es6-draft.html#sec-get-regexp.prototype.sticky)) flags. You can enable these to be recognized as valid by setting the ECMAScript version to 6 in your [ESLint configuration](../user-guide/configuring).

ECMAScript 6 添加了 “u” ([unicode](https://people.mozilla.org/~jorendorff/es6-draft.html#sec-get-regexp.prototype.unicode)) 和 "y" ([sticky](https://people.mozilla.org/~jorendorff/es6-draft.html#sec-get-regexp.prototype.sticky)) 标识。你可以通过在你的[配置](../user-guide/configuring)中设置 ECMAScript 版本为`6` 来启用它们。

## Options

If you want to allow additional constructor flags for any reason, you can specify them using an `allowConstructorFlags` option in `.eslintrc`. These flags will then be ignored by the rule regardless of the `ecmaVersion` setting.

如果想允许额外的构造函数标记，你可以在`.eslintrc`中使用`allowConstructorFlags`选项来指定它们。这些标记将被规则忽略，不管是否有`ecmaVersion`设置。

### `allowConstructorFlags`

This takes in an array of flags. With this option, the following patterns aren't considered problems:

该选项是个标记的数组。这样设置后，以下模式被认为是没有问题的：

```js
/*eslint no-invalid-regexp: [2, {"allowConstructorFlags": ["u", "y"]}]*/

new RegExp('.', 'y')

new RegExp('.', 'yu')
```


## Further Reading

* [Annotated ES5 §7.8.5 - Regular Expression Literals](http://es5.github.io/#x7.8.5)

## Version

This rule was introduced in ESLint 0.1.4.

该规则是在 ESLint 0.1.4 中引入的。

## Resources

* [Rule source](https://github.com/eslint/eslint/tree/master/lib/rules/no-invalid-regexp.js)
* [Documentation source](https://github.com/eslint/eslint/tree/master/docs/rules/no-invalid-regexp.md)
