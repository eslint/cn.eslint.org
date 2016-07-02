---
title: Rule max-lines
layout: doc
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# enforce a maximum file length (max-lines)

# 强制文件的最大行数 (max-lines)

Some people consider large files a code smell. Large files tend to do a lot of things and can make it hard following what's going. While there is not an objective maximum number of lines considered acceptable in a file, most people would agree it should not be in the thousands. Recommendations usually range from 100 to 500 lines.

有些人把大文件看作是一种代码味道。大文件可以做很多事情，也很难跟踪到底发生了什么。虽然没有一个客观的被认为是可接受的最大行数，大多数人会同意文件中的行数不应该不受限制。通常建议 100 到 500 行。

## Rule Details

This rule enforces a maximum number of lines per file, in order to aid in maintainability and reduce complexity.

该规则强制文件的最大行数，以提高可维护性和降低复杂度。

## Options

This rule has a number or object option:

该规则有一个数字或对象选项：

* `"max"` (default `300`) enforces a maximum number of lines in a file
* `"max"` (默认 `300`) 强制一个文件的最大行数
* `"skipBlankLines": true` ignore lines made up purely of whitespace.
* `"skipBlankLines": true` 忽略空白行
* `"skipComment": true` ignore lines containing just comments
* `"skipComment": true` 忽略只包含注释的行

### code

Examples of **incorrect** code for this rule with a max value of `2`:

最大行数为 `2` 的 **错误** 代码示例：

```js
/*eslint max-lines: ["error", 2]*/
var a,
    b,
    c;
```

```js
/*eslint max-lines: ["error", 2]*/

var a,
    b,c;
```

```js
/*eslint max-lines: ["error", 2]*/
// a comment
var a,
    b,c;
```

Examples of **correct** code for this rule with a max value of `2`:

最大行数为 `2` 的 **正确** 代码示例：

```js
/*eslint max-lines: ["error", 2]*/
var a,
    b, c;
```

```js
/*eslint max-lines: ["error", 2]*/

var a, b, c;
```

```js
/*eslint max-lines: ["error", 2]*/
// a comment
var a, b, c;
```

### skipBlankLines

Examples of **incorrect** code for this rule with the `{ "skipBlankLines": true }` option:

选项 `{ "skipBlankLines": true }` 的 **错误** 代码示例：

```js
/*eslint max-lines: ["error", 2, {"skipBlankLines": true}]*/

var a,
    b,
    c;
```

Examples of **correct** code for this rule with the `{ "skipBlankLines": true }` option:

选项 `{ "skipBlankLines": true }` 的 **正确** 代码示例：

```js
/*eslint max-lines: ["error", 2, {"skipBlankLines": true}]*/

var a,
    b, c;
```

### skipComments

Examples of **incorrect** code for this rule with the `{ "skipComments": true }` option:

选项 `{ "skipComments": true }` 的 **错误** 代码示例：

```js
/*eslint max-lines: ["error", 2, {"skipComments": true}]*/
// a comment
var a,
    b,
    c;
```

Examples of **correct** code for this rule with the `{ "skipComments": true }` option:

选项 `{ "skipComments": true }` 的 **正确** 代码示例：

```js
/*eslint max-lines: ["error", 2, {"skipComments": true}]*/
// a comment
var a,
    b, c;
```

## When Not To Use It

You can turn this rule off if you are not concerned with the number of lines in your files.

如果你并不关心文件中的行数，你可以关闭此规则。

## Further reading

* [Software Module size and file size](http://www.mind2b.com/component/content/article/24-software-module-size-and-file-size)

## Related Rules

* [complexity](complexity)
* [max-depth](max-depth)
* [max-nested-callbacks](max-nested-callbacks)
* [max-params](max-params)
* [max-statements](max-statements)

## Compatibility

* **JSCS**: [maximumNumberOfLines](http://jscs.info/rule/maximumNumberOfLines)

## Version

This rule was introduced in ESLint 2.12.0.

该规则在 ESLint 2.12.0 中被引入。

## Resources

* [Rule source](https://github.com/eslint/eslint/tree/master/lib/rules/max-lines.js)
* [Documentation source](https://github.com/eslint/eslint/tree/master/docs/rules/max-lines.md)
