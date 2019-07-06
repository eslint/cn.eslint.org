---
title: require-unicode-regexp - Rules
layout: doc
edit_link: https://github.com/eslint/eslint/edit/master/docs/rules/require-unicode-regexp.md
rule_type: suggestion
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# Enforce the use of `u` flag on RegExp (require-unicode-regexp)
# 强制在 RegExp 上使用 `u` 标志 (require-unicode-regexp)

RegExp `u` flag has two effects:

RegExp 的 `u` 标志有两个效果:

1. **Make the regular expression handling UTF-16 surrogate pairs correctly.**
1. **使正则表达式正确处理 UTF-16 Surrogate Pair**

Especially, character range syntax gets the correct behavior.

特别是，字符范围语法获得正确的行为。

    ```js
    /^[👍]$/.test("👍") //→ false
    /^[👍]$/u.test("👍") //→ true
    ```

2. **Make the regular expression throwing syntax errors early as disabling [Annex B extensions](https://www.ecma-international.org/ecma-262/6.0/#sec-regular-expressions-patterns).**
2. **使正则表达式在禁用时尽早抛出语法错误 [Annex B extensions](https://www.ecma-international.org/ecma-262/6.0/#sec-regular-expressions-patterns)**

Because of historical reason, JavaScript regular expressions are tolerant of syntax errors. For example, `/\w{1, 2/` is a syntax error, but JavaScript doesn't throw the error. It matches strings such as `"a{1, 2"` instead. Such a recovering logic is defined in Annex B.

由于历史原因，JavaScript 正则表达式能够容忍语法错误。例如，`/\w{1, 2/` 是一个语法错误，但是JavaScript不会抛出这个错误。它会匹配字符串，比如 `"a{1, 2"`。这种恢复逻辑在附件B中定义。

The `u` flag disables the recovering logic Annex B defined. As a result, you can find errors early. This is similar to [the strict mode](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode).

`u` 标志禁用在附件B中定义的恢复逻辑。因此，你可以尽早发现错误。这类似于[严格模式](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode)

Therefore, the `u` flag lets us work better with regular expressions.

因此，`u` 标志使我们能够更好地处理正则表达式。

## Rule Details

This rule aims to enforce the use of `u` flag on regular expressions.

该规则旨在强制正则表达式使用 `u` 标志。

Examples of **incorrect** code for this rule:

**错误** 代码示例：

```js
/*eslint require-unicode-regexp: error */

const a = /aaa/
const b = /bbb/gi
const c = new RegExp("ccc")
const d = new RegExp("ddd", "gi")
```

Examples of **correct** code for this rule:

**正确** 代码示例：

```js
/*eslint require-unicode-regexp: error */

const a = /aaa/u
const b = /bbb/giu
const c = new RegExp("ccc", "u")
const d = new RegExp("ddd", "giu")

// This rule ignores RegExp calls if the flags could not be evaluated to a static value.
function f(flags) {
    return new RegExp("eee", flags)
}
```

## When Not To Use It

If you don't want to notify regular expressions with no `u` flag, then it's safe to disable this rule.

如果不希望通知没有 `u` 标志的正则表达式，则可以禁用此规则。

## Version

This rule was introduced in ESLint 5.3.0.

该规则在 ESLint 5.3.0 中被引入。

## Resources

* [Rule source](https://github.com/eslint/eslint/tree/master/lib/rules/require-unicode-regexp.js)
* [Documentation source](https://github.com/eslint/eslint/tree/master/docs/rules/require-unicode-regexp.md)
