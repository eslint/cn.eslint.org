---
title: no-useless-escape - Rules
layout: doc
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# Disallow unnecessary escape usage (no-useless-escape)

# 禁用不必要的转义 (no-useless-escape)

Escaping non-special characters in strings, template literals, and regular expressions doesn't have any effect, as demonstrated in the following example:

对字符串、模板字面量和正则表达式中的常规字符进行转义，不会对结果产生任何影响，例如：

```js
let foo = "hol\a"; // > foo = "hola"
let bar = `${foo}\!`; // > bar = "hola!"
let baz = /\:/ // same functionality with /:/
```

## Rule Details

This rule flags escapes that can be safely removed without changing behavior.

该规则标记在不改变代码行为的情况下可以安全移除的转义。

Examples of **incorrect** code for this rule:

**错误** 代码示例：

```js
/*eslint no-useless-escape: "error"*/

"\'";
'\"';
"\#";
"\e";
`\"`;
`\"${foo}\"`;
`\#{foo}`;
/\!/;
/\@/;

```

Examples of **correct** code for this rule:

**正确** 代码示例：

```js
/*eslint no-useless-escape: "error"*/

"\"";
'\'';
"\x12";
"\u00a9";
"\371";
"xs\u2111";
`\``;
`\${${foo}\}`;
`$\{${foo}\}`;
/\\/g;
/\t/g;
/\w\$\*\^\./;

```

## When Not To Use It

If you don't want to be notified about unnecessary escapes, you can safely disable this rule.

如果你不想收到关于不必要的转义字符的通知，可以关闭此规则。

## Version

This rule was introduced in ESLint 2.5.0.

该规则在 ESLint 2.5.0 中被引入。

## Resources

* [Rule source](https://github.com/eslint/eslint/tree/master/lib/rules/no-useless-escape.js)
* [Documentation source](https://github.com/eslint/eslint/tree/master/docs/rules/no-useless-escape.md)
