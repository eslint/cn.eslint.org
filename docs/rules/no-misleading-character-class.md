---
title: no-misleading-character-class - Rules
layout: doc
edit_link: https://github.com/eslint/eslint/edit/master/docs/rules/no-misleading-character-class.md
rule_type: problem
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# Disallow characters which are made with multiple code points in character class syntax (no-misleading-character-class)

# 不允许在字符类语法中出现由多个代码点组成的字符 (no-misleading-character-class)

Unicode includes the characters which are made with multiple code points.
RegExp character class syntax (`/[abc]/`) cannot handle characters which are made by multiple code points as a character; those characters will be dissolved to each code point. For example, `❇️` is made by `❇` (`U+2747`) and VARIATION SELECTOR-16 (`U+FE0F`). If this character is in RegExp character class, it will match to either `❇` (`U+2747`) or VARIATION SELECTOR-16 (`U+FE0F`) rather than `❇️`.

Unicode 包括由多个代码点组成的字符。RegExp 字符类语法 (`/[abc]/`) 不能处理由多个代码点组成的字符；这些字符将被分解到每个代码点。例如，`❇️` 是由 `❇` (`U+2747`) 和 VARIATION SELECTOR-16 (`U+FE0F`)。如果这是正则表达式字符类，它将匹配 `❇` (`U+2747`) 或 VARIATION SELECTOR-16 (`U+FE0F`)而不是 `❇️`。

This rule reports the regular expressions which include multiple code point characters in character class syntax. This rule considers the following characters as multiple code point characters.

此规则报告在字符类语法中包含多个代码点字符的正则表达式。此规则将以下字符视为多个代码点字符。

**A character with combining characters:**

**组合字符的字符：**

The combining characters are characters which belong to one of `Mc`, `Me`, and `Mn` [Unicode general categories](http://www.unicode.org/L2/L1999/UnicodeData.html#General%20Category).

组合字符属于 `Mc`、`Me` 和 `Mn` [Unicode 通用类别](http://www.unicode.org/L2/L1999/UnicodeData.html#General%20Category) 之一。

```js
/^[Á]$/u.test("Á") //→ false
/^[❇️]$/u.test("❇️") //→ false
```

**A character with Emoji modifiers:**

**带有表情符号修饰符的字符：**

```js
/^[👶🏻]$/u.test("👶🏻") //→ false
/^[👶🏽]$/u.test("👶🏽") //→ false
```

**A pair of regional indicator symbols:**

**一组区域指标符号：**

```js
/^[🇯🇵]$/u.test("🇯🇵") //→ false
```

**Characters that ZWJ joins:**

**ZWJ（Zero Width Joiner）连接的字符：**

```js
/^[👨‍👩‍👦]$/u.test("👨‍👩‍👦") //→ false
```

**A surrogate pair without Unicode flag:**

**没有 Unicode 标志的 Surrogate pair：**

```js
/^[👍]$/.test("👍") //→ false

// Surrogate pair is OK if with u flag.
/^[👍]$/u.test("👍") //→ true
```

## Rule Details

This rule reports the regular expressions which include multiple code point characters in character class syntax.

此规则报告在字符类语法中包含多个代码点字符的正则表达式。

Examples of **incorrect** code for this rule:

**错误** 代码示例：

```js
/*eslint no-misleading-character-class: error */

/^[Á]$/u
/^[❇️]$/u
/^[👶🏻]$/u
/^[🇯🇵]$/u
/^[👨‍👩‍👦]$/u
/^[👍]$/
```

Examples of **correct** code for this rule:

**正确** 代码示例：

```js
/*eslint no-misleading-character-class: error */

/^[abc]$/
/^[👍]$/u
```

## When Not To Use It

You can turn this rule off if you don't want to check RegExp character class syntax for multiple code point characters.

如果不想检查多个代码点字符的 RegExp 字符类语法，可以关闭此规则。

## Version

This rule was introduced in ESLint 5.3.0.

该规则在 ESLint 5.3.0 被引入。

## Resources

* [Rule source](https://github.com/eslint/eslint/tree/master/lib/rules/no-misleading-character-class.js)
* [Documentation source](https://github.com/eslint/eslint/tree/master/docs/rules/no-misleading-character-class.md)
