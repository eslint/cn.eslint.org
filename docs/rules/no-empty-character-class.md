---
title: no-empty-character-class - Rules
layout: doc
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# disallow empty character classes in regular expressions (no-empty-character-class)

# 禁止在正则表达式中出现空字符集 (no-empty-character-class)

(recommended) The `"extends": "eslint:recommended"` property in a configuration file enables this rule.

(recommended) 配置文件中的 `"extends": "eslint:recommended"` 属性启用了此规则。

Because empty character classes in regular expressions do not match anything, they might be typing mistakes.

在正则表达式中空字符集不能匹配任何字符，它们可能是打字错误。

```js
var foo = /^abc[]/;
```

## Rule Details

This rule disallows empty character classes in regular expressions.

该规则禁止在正则表达式中出现空字符集。

Examples of **incorrect** code for this rule:

**错误** 代码示例：

```js
/*eslint no-empty-character-class: "error"*/

/^abc[]/.test("abcdefg"); // false
"abcdefg".match(/^abc[]/); // null
```

Examples of **correct** code for this rule:

**正确** 代码示例：

```js
/*eslint no-empty-character-class: "error"*/

/^abc/.test("abcdefg"); // true
"abcdefg".match(/^abc/); // ["abc"]

/^abc[a-z]/.test("abcdefg"); // true
"abcdefg".match(/^abc[a-z]/); // ["abcd"]
```

## Known Limitations

This rule does not report empty character classes in the string argument of calls to the `RegExp` constructor.

该规则不会报告 `RegExp` 构造函数的字符串参数中空字符集的使用情况。 

Example of a *false negative* when this rule reports correct code:

当该规则报告了正确的代码时，*漏报*的示例：

```js
/*eslint no-empty-character-class: "error"*/

var abcNeverMatches = new RegExp("^abc[]");
```

## Version

This rule was introduced in ESLint 0.22.0.

该规则在 ESLint 0.22.0 中被引入。

## Resources

* [Rule source](https://github.com/eslint/eslint/tree/master/lib/rules/no-empty-character-class.js)
* [Documentation source](https://github.com/eslint/eslint/tree/master/docs/rules/no-empty-character-class.md)
