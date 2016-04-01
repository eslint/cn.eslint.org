---
title: Rule max-len
layout: doc
translator: molee1905
proofreader: molee1905
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# Limit Maximum Length of Line (max-len)

# 限制行的最大长度 (max-len)

Very long lines of code in any language can be difficult to read. In order to aid in readability and maintainability many coders have developed a convention to limit lines of code to X number of characters (traditionally 80 characters).

代码中非常长的行在任何语言中都很难阅读。为了提高可读性和可维护性，许多程序员制定了一项约定，来限制一行代码的字符数量(按照惯例80个字符)。

```js
// max-len: [1, 80, 4]; // maximum length of 80 characters
var foo = { "bar": "This is a bar.", "baz": { "qux": "This is a qux" }, "difficult": "to read" }; // too long
```


## Rule Details

This rule is aimed at increasing code readability and maintainability by enforcing a line length convention. As such it will warn on lines that exceed the configured maximum.

该规则旨在通过限制代码行的长度来提高代码的可读性和可维护性。因此，如果超过了配置的最大值，该规则将发出警告。

**Note:** This rule calculates the length of a line via code points, not characters. That means if you use a double-byte character in your code, it will count as 2 code points instead of 1, and 2 will be used to calculate line length. This is a technical limitation of JavaScript that is made easier with ES2015, and we will look to update this when ES2015 is available in Node.js.

**注意：** 该规则是通过代码点而非字符来计算行的长度的。这就意味着如果你在代码中使用了一个双字节字符，它将计为2个代码点而不是1个，这个2将被用来计算行的长度。这是 Javascript 的一个技术上的局限性，这在 ES2015 会更容易一些，当 ES2015 在 Node.js 中可用时，我们将会升级这个问题。

The following patterns are considered problems:

以下模式被认为是有问题的：

```js
/*eslint max-len: [2, 80, 4]*/ // maximum length of 80 characters

var foo = { "bar": "This is a bar.", "baz": { "qux": "This is a qux" }, "difficult": "to read" };
```

The following patterns are not considered problems:

以下模式被认为是没有问题的：

```js
/*eslint max-len: [2, 80, 4]*/ // maximum length of 80 characters

var foo = {
    "bar": "This is a bar.",
    "baz": {
        "qux": "This is a qux"
    },
    "difficult": "to read"
};
```

## Options

The `max-len` rule supports the following options:

`max-len`规则支持以下选项：

`code`: The total number of characters allowed on each line of code. This character count includes indentation. Defaults to 80.

`code`: 每一行代码中所允许的字符总数。字符计数包含缩进。 默认是80.

`comments`: The total number of characters allowed on a line of comments (e.g. no code on the line). If not specified, `code` is used for comment lines.

`comments`: 一行注释中所允许的字符总数（比如此行中没有代码）。如果没有指定, 使用`code`的值.

`tabWidth`: The character count to use whenever a tab character is encountered. Defaults to 4.

`tabWidth`: 一个 tab 字符的计数长度。 默认是4。

`ignoreComments`: Ignores all trailing comments and comments on their own line. For example, `function foo(/*string*/ bar) { /* ... */ }` isn't collapsed.

`ignoreComments`: 忽略所有尾部注释和行注释。 例如，`function foo(/*string*/ bar) { /* ... */ }`不被计数。

`ignoreTrailingComments`: Only ignores comments that are trailing source.

`ignoreTrailingComments`: 只忽略末尾注释。

`ignoreUrls`: Ignores lines that contain a URL.

`ignoreUrls`: 忽略包含 URL 的行。

`ignorePattern`: Ignores lines matching a regular express, such as `^\\s*var\\s.+=\\s*require\\s*\\(`. Be aware that regular expressions can only match a single line and need to be doubly escaped when written in YAML or JSON.

`ignorePattern`: 忽略匹配正则表达的行，比如 `^\\s*var\\s.+=\\s*require\\s*\\(`。注意在写 YAML 或 JSON 时，正则表达只能匹配单一的行，而且需要双重转义。

Optionally, you may specify `code` and `tabWidth` as integers before the options object:

你可以在可选项对象之前以整数形式指定`code` 和 `tabWidth`：

```json
"max-len": [2, 80, 4, {"ignoreUrls": true}]
```

is equivalent to

等效于

```json
"max-len": [2, {"code": 80, "tabWidth": 4, "ignoreUrls": true}]
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
