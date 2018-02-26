---
title: no-template-curly-in-string - Rules
layout: doc
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# Disallow template literal placeholder syntax in regular strings (no-template-curly-in-string)

# 禁止在常规字符串中出现模板字面量占位符语法 (no-template-curly-in-string)

ECMAScript 6 allows programmers to create strings containing variable or expressions using template literals, instead of string concatenation, by writing expressions like `${variable}` between two backtick quotes (\`). It can be easy to use the wrong quotes when wanting to use template literals, by writing `"${variable}"`, and end up with the literal value `"${variable}"` instead of a string containing the value of the injected expressions.

ECMAScript 6 允许程序员使用模板字面量创建包含变量或表达式的字符串，在两个反引号之间书写表达式比如 `${variable}`，而不是使用字符串拼接。在使用模板字面量过程中很容易写错引号，写错成 `"${variable}"` 而不是在字符串中包含注入的表达式的值。


## Rule Details

This rule aims to warn when a regular string contains what looks like a template literal placeholder. It will warn when it finds a string containing the template literal placeholder (`${something}`) that uses either `"` or `'` for the quotes.

该规则旨在对常规字符串中包含看起来像是模板字面量占位符的情况发出警告。当发现一个字符串中包含模板语法占位符(`${something}`) 使用了 `"` 或 `'`，该规则将发出警告。

## Examples

Examples of **incorrect** code for this rule:

**错误** 代码示例：

```js
/*eslint no-template-curly-in-string: "error"*/
"Hello ${name}!";
'Hello ${name}!';
"Time: ${12 * 60 * 60 * 1000}";
```

Examples of **correct** code for this rule:

**正确** 代码示例：

```js
/*eslint no-template-curly-in-string: "error"*/
`Hello ${name}!`;
`Time: ${12 * 60 * 60 * 1000}`;

templateFunction`Hello ${name}`;
```

## When Not To Use It

This rule should not be used in ES3/5 environments.

该规则不应在 ES3/5 环境下使用。

## Version

This rule was introduced in ESLint 3.3.0.

该规则在 ESLint 3.3.0 中被引入。

## Resources

* [Rule source](https://github.com/eslint/eslint/tree/master/lib/rules/no-template-curly-in-string.js)
* [Documentation source](https://github.com/eslint/eslint/tree/master/docs/rules/no-template-curly-in-string.md)
