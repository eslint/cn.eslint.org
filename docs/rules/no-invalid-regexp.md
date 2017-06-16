---
title: no-invalid-regexp - Rules
layout: doc
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# disallow invalid regular expression strings in `RegExp` constructors (no-invalid-regexp)

# 禁止在 `RegExp` 构造函数中出现无效的正则表达式 (no-invalid-regexp)

(recommended) The `"extends": "eslint:recommended"` property in a configuration file enables this rule.

(recommended) 配置文件中的 `"extends": "eslint:recommended"` 属性启用了此规则。

An invalid pattern in a regular expression literal is a `SyntaxError` when the code is parsed, but an invalid string in `RegExp` constructors throws a `SyntaxError` only when the code is executed.

在正则表达式字面量中无效的模式在代码解析时会引起 `SyntaxError`，但是 `RegExp` 的构造函数中无效的字符串只在代码执行时才会抛出 `SyntaxError`。

## Rule Details

This rule disallows invalid regular expression strings in `RegExp` constructors.

该规则禁止在 `RegExp` 构造函数中出现无效的正则表达式。

Examples of **incorrect** code for this rule:

**错误** 代码示例：

```js
/*eslint no-invalid-regexp: "error"*/

RegExp('[')

RegExp('.', 'z')

new RegExp('\\')
```

Examples of **correct** code for this rule:

**正确** 代码示例：

```js
/*eslint no-invalid-regexp: "error"*/

RegExp('.')

new RegExp

this.RegExp('[')
```

## Environments

ECMAScript 6 adds the following flag arguments to the `RegExp` constructor:

ECMAScript 6 为 `RegExp` 构造函数增加了以下标志参数：

* `"u"` ([unicode](https://people.mozilla.org/~jorendorff/es6-draft.html#sec-get-regexp.prototype.unicode))
* `"u"` ([unicode](https://people.mozilla.org/~jorendorff/es6-draft.html#sec-get-regexp.prototype.unicode))
* `"y"` ([sticky](https://people.mozilla.org/~jorendorff/es6-draft.html#sec-get-regexp.prototype.sticky))
* `"y"` ([sticky](https://people.mozilla.org/~jorendorff/es6-draft.html#sec-get-regexp.prototype.sticky))

You can enable these to be recognized as valid by setting the ECMAScript version to 6 in your [ESLint configuration](../user-guide/configuring).

你可以在你的 [ESLint 配置](../user-guide/configuring) 中通过设置 ECMAScript 为 6 ，来使这些标志被有效地识别。

If you want to allow additional constructor flags for any reason, you can specify them using an `allowConstructorFlags` option in `.eslintrc`. These flags will then be ignored by the rule regardless of the `ecmaVersion` setting.

如果你想允许使用额外的标志，也不论出于什么目的，你可以在 `.eslintrc` 使用 `allowConstructorFlags` 选项指定它们。这样，不管是否有 `ecmaVersion` 设置，这些标记将会被该规则忽略。

## Options

This rule has an object option for exceptions:

该规则有例外情况，是个对象：

* `"allowConstructorFlags"` is an array of flags
* `"allowConstructorFlags"` 是个标志的数组

### allowConstructorFlags

Examples of **correct** code for this rule with the `{ "allowConstructorFlags": ["u", "y"] }` option:

选项 `{ "allowConstructorFlags": ["u", "y"] }` 的 **正确** 代码示例：

```js
/*eslint no-invalid-regexp: ["error", { "allowConstructorFlags": ["u", "y"] }]*/

new RegExp('.', 'y')

new RegExp('.', 'yu')
```

## Further Reading

* [Annotated ES5 §7.8.5 - Regular Expression Literals](http://es5.github.io/#x7.8.5)

## Version

This rule was introduced in ESLint 0.1.4.

该规则在 ESLint 0.1.4 中被引入。

## Resources

* [Rule source](https://github.com/eslint/eslint/tree/master/lib/rules/no-invalid-regexp.js)
* [Documentation source](https://github.com/eslint/eslint/tree/master/docs/rules/no-invalid-regexp.md)
