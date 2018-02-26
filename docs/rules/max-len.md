---
title: max-len - Rules
layout: doc
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# enforce a maximum line length (max-len)

# 强制行的最大长度 (max-len)

Very long lines of code in any language can be difficult to read. In order to aid in readability and maintainability many coders have developed a convention to limit lines of code to X number of characters (traditionally 80 characters).

代码中非常长的行在任何语言中都很难阅读。为了提高可读性和可维护性，许多程序员制定了一项约定，来限制一行代码的字符数量(按照惯例80个字符)。

```js
var foo = { "bar": "This is a bar.", "baz": { "qux": "This is a qux" }, "difficult": "to read" }; // very long
```

## Rule Details

This rule enforces a maximum line length to increase code readability and maintainability. The length of a line is defined as the number of Unicode characters in the line.

该规则旨在通过限制代码行的长度来提高代码的可读性和可维护性。因此，如果超过了配置的最大值，该规则将发出警告。一行的长度为行中的 Unicode 字符的数量。

**Note:** This rule calculates the length of a line via code points, not characters. That means if you use a double-byte character in your code, it will count as 2 code points instead of 1, and 2 will be used to calculate line length. This is a technical limitation of JavaScript that is made easier with ES2015, and we will look to update this when ES2015 is available in Node.js.

**注意：**该规则是通过编码长度而不是字符格式来计算某一行的长度。这就意味着，如果你在代码中使用了双字节字符，它将被计数为 2 而不是 1 。这是 JavaScript 的一个技术上的局限性，在 ES2015 中会变得更加容易，而且在  Node.js 支持 ES2015 时，我们将更新这个规则。

## Options

This rule has a number or object option:

该规则有一个数字或对象选项：

* `"code"` (default `80`) enforces a maximum line length
* `"code"` (默认 `80`) 强制行的最大长度
* `"tabWidth"` (default `4`) specifies the character width for tab characters
* `"tabWidth"` (默认 `4`) 指定 tab 字符的宽度
* `"comments"` enforces a maximum line length for comments; defaults to value of `code`
* `"comments"` 强制注释的最大长度；默认长度同 `code`
* `"ignorePattern"` ignores lines matching a regular expression; can only match a single line and need to be double escaped when written in YAML or JSON
* `"ignorePattern"` 忽略正则表达式匹配的行；可以只匹配单行，而且在 YAML 或 JSON 中需要双重转义
* `"ignoreComments": true` ignores all trailing comments and comments on their own line
* `"ignoreComments": true` 忽略所有拖尾注释和行内注释
* `"ignoreTrailingComments": true` ignores only trailing comments
* `"ignoreTrailingComments": true` 忽略拖尾注释
* `"ignoreUrls": true` ignores lines that contain a URL
* `"ignoreUrls": true` 忽略含有链接的行
* `"ignoreStrings": true` ignores lines that contain a double-quoted or single-quoted string
* `"ignoreStrings": true` 忽略含有双引号或单引号字符串的行
* `"ignoreTemplateLiterals": true` ignores lines that contain a template literal
* `"ignoreTemplateLiterals": true` 忽略包含模板字面量的行
* `"ignoreRegExpLiterals": true` ignores lines that contain a RegExp literal
* `"ignoreRegExpLiterals": true` 忽略包含正则表达式的行

### code

Examples of **incorrect** code for this rule with the default `{ "code": 80 }` option:

默认选项 `{ "code": 80 }` 的 **错误** 代码示例：

```js
/*eslint max-len: ["error", { "code": 80 }]*/

var foo = { "bar": "This is a bar.", "baz": { "qux": "This is a qux" }, "difficult": "to read" };
```

Examples of **correct** code for this rule with the default `{ "code": 80 }` option:

默认选项 `{ "code": 80 }` 的 **正确** 代码示例：

```js
/*eslint max-len: ["error", { "code": 80 }]*/

var foo = {
  "bar": "This is a bar.",
  "baz": { "qux": "This is a qux" },
  "easier": "to read"
};
```

### tabWidth

Examples of **incorrect** code for this rule with the default `{ "tabWidth": 4 }` option:

默认选项 `{ "tabWidth": 4 }` 的 **错误** 代码示例：

```js
/*eslint max-len: ["error", { "code": 80, "tabWidth": 4 }]*/

\t  \t  var foo = { "bar": "This is a bar.", "baz": { "qux": "This is a qux" } };
```

Examples of **correct** code for this rule with the default `{ "tabWidth": 4 }` option:

默认选项 `{ "tabWidth": 4 }` 的 **正确** 代码示例：

```js
/*eslint max-len: ["error", { "code": 80, "tabWidth": 4 }]*/

\t  \t  var foo = {
\t  \t  \t  \t  "bar": "This is a bar.",
\t  \t  \t  \t  "baz": { "qux": "This is a qux" }
\t  \t  };
```

### comments

Examples of **incorrect** code for this rule with the `{ "comments": 65 }` option:

选项 `{ "comments": 65 }` 的 **错误** 代码示例：

```js
/*eslint max-len: ["error", { "comments": 65 }]*/

/**
 * This is a comment that violates the maximum line length we have specified
**/
```

### ignoreComments

Examples of **correct** code for this rule with the `{ "ignoreComments": true }` option:

选项 `{ "ignoreComments": true }` 的 **正确** 代码示例：

```js
/*eslint max-len: ["error", { "ignoreComments": true }]*/

/**
 * This is a really really really really really really really really really long comment
**/
```

### ignoreTrailingComments

Examples of **correct** code for this rule with the `{ "ignoreTrailingComments": true }` option:

选项 `{ "ignoreTrailingComments": true }` 的 **正确** 代码示例：

```js
/*eslint max-len: ["error", { "ignoreTrailingComments": true }]*/

var foo = 'bar'; // This is a really really really really really really really long comment
```

### ignoreUrls

Examples of **correct** code for this rule with the `{ "ignoreUrls": true }` option:

选项 `{ "ignoreUrls": true }` 的 **正确** 代码示例：

```js
/*eslint max-len: ["error", { "ignoreUrls": true }]*/

var url = 'https://www.example.com/really/really/really/really/really/really/really/long';
```

### ignoreStrings

Examples of **correct** code for this rule with the `{ "ignoreStrings": true }` option:

选项 `{ "ignoreStrings": true }` 的 **正确** 代码示例：

```js
/*eslint max-len: ["error", { "ignoreStrings": true }]*/

var longString = 'this is a really really really really really long string!';
```

### ignoreTemplateLiterals

Examples of **correct** code for this rule with the `{ "ignoreTemplateLiterals": true }` option:

选项 `{ "ignoreTemplateLiterals": true }` 的 **正确** 代码示例：

```js
/*eslint max-len: ["error", { "ignoreTemplateLiterals": true }]*/

var longTemplateLiteral = `this is a really really really really really long template literal!`;
```

### ignoreRegExpLiterals

Examples of **correct** code for this rule with the `{ "ignoreRegExpLiterals": true }` option:

选项 `{ "ignoreRegExpLiterals": true }` 的 **正确** 代码示例：

```js
/*eslint max-len: ["error", { "ignoreRegExpLiterals": true }]*/

var longRegExpLiteral = /this is a really really really really really long regular expression!/;
```

### ignorePattern

Examples of **correct** code for this rule with the `ignorePattern` option:

选项 `ignorePattern` 的 **正确** 代码示例：

```js
/*eslint max-len: ["error", { "ignorePattern": "^\\s*var\\s.+=\\s*require\\s*\\(" }]*/

var dep = require('really/really/really/really/really/really/really/really/long/module');
```

## Related Rules

* [complexity](complexity)
* [max-depth](max-depth)
* [max-nested-callbacks](max-nested-callbacks)
* [max-params](max-params)
* [max-statements](max-statements)

## Version

This rule was introduced in ESLint 0.0.9.

该规则在 ESLint 0.0.9 中被引入。

## Resources

* [Rule source](https://github.com/eslint/eslint/tree/master/lib/rules/max-len.js)
* [Documentation source](https://github.com/eslint/eslint/tree/master/docs/rules/max-len.md)
