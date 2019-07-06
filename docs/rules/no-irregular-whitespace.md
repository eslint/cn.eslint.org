---
title: no-irregular-whitespace - Rules
layout: doc
edit_link: https://github.com/eslint/eslint/edit/master/docs/rules/no-irregular-whitespace.md
rule_type: problem
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# disallow irregular whitespace (no-irregular-whitespace)

# 禁止不规则的空白 (no-irregular-whitespace)

(recommended) The `"extends": "eslint:recommended"` property in a configuration file enables this rule.

(recommended) 配置文件中的 `"extends": "eslint:recommended"` 属性启用了此规则。

Invalid or irregular whitespace causes issues with ECMAScript 5 parsers and also makes code harder to debug in a similar nature to mixed tabs and spaces.

无效的或不规则的空白会导致 ECMAScript 5 解析问题，也会使代码难以调试（类似于混合 tab 和空格的情况）。

Various whitespace characters can be inputted by programmers by mistake for example from copying or keyboard shortcuts. Pressing Alt + Space on macOS adds in a non breaking space character for example.

各种空白字符可能是由程序员误输入的，比如拷贝或键盘快捷键。例如，在 macOS 按下 Alt + Space，增加了一个不间断空格。

A simple fix for this problem could be to rewrite the offending line from scratch. This might also be a problem introduced by the text editor: if rewriting the line does not fix it, try using a different editor.

Known issues these spaces cause:

这些空格引起的已知的问题:

* Zero Width Space
* 零宽空格
    * Is NOT considered a separator for tokens and is often parsed as an `Unexpected token ILLEGAL`
    * 不被认为是分隔符，经常被解析为 `Unexpected token ILLEGAL`
    * Is NOT shown in modern browsers making code repository software expected to resolve the visualization
    * 不在现代浏览器中显示，期待使用代码存储软件解决其可视化问题
* Line Separator
* 行分隔符
    * Is NOT a valid character within JSON which would cause parse errors
    * 在 JSON 中不是一个有效的字符，会引起解析错误

## Rule Details

This rule is aimed at catching invalid whitespace that is not a normal tab and space. Some of these characters may cause issues in modern browsers and others will be a debugging issue to spot.

该规则旨在捕获无效的不是正常的tab和空格的空白。这些字符有的会在现代浏览器中引发问题，其它的会引起调试问题。

This rule disallows the following characters except where the options allow:

该规则禁止出现以下字符，除非该规则选项允许：

    \u000B - Line Tabulation (\v) - <VT>
    \u000C - Form Feed (\f) - <FF>
    \u00A0 - No-Break Space - <NBSP>
    \u0085 - Next Line
    \u1680 - Ogham Space Mark
    \u180E - Mongolian Vowel Separator - <MVS>
    \ufeff - Zero Width No-Break Space - <BOM>
    \u2000 - En Quad
    \u2001 - Em Quad
    \u2002 - En Space - <ENSP>
    \u2003 - Em Space - <EMSP>
    \u2004 - Tree-Per-Em
    \u2005 - Four-Per-Em
    \u2006 - Six-Per-Em
    \u2007 - Figure Space
    \u2008 - Punctuation Space - <PUNCSP>
    \u2009 - Thin Space
    \u200A - Hair Space
    \u200B - Zero Width Space - <ZWSP>
    \u2028 - Line Separator
    \u2029 - Paragraph Separator
    \u202F - Narrow No-Break Space
    \u205f - Medium Mathematical Space
    \u3000 - Ideographic Space

## Options

This rule has an object option for exceptions:

该规则有例外情况，是个对象：

* `"skipStrings": true` (default) allows any whitespace characters in string literals
* `"skipStrings": true` (默认) 允许在字符串字面量中出现任何空白字符
* `"skipComments": true` allows any whitespace characters in comments
* `"skipComments": true` 允许在注释中出现任何空白字符
* `"skipRegExps": true` allows any whitespace characters in regular expression literals
* `"skipRegExps": true` 允许在正则表达式中出现任何空白字符
* `"skipTemplates": true` allows any whitespace characters in template literals
* `"skipTemplates": true` 允许在模板字面量中出现任何空白字符

### skipStrings

Examples of **incorrect** code for this rule with the default `{ "skipStrings": true }` option:

默认选项 `{ "skipStrings": true }` 的 **错误** 代码示例：

```js
/*eslint no-irregular-whitespace: "error"*/

function thing() /*<NBSP>*/{
    return 'test';
}

function thing( /*<NBSP>*/){
    return 'test';
}

function thing /*<NBSP>*/(){
    return 'test';
}

function thing᠎/*<MVS>*/(){
    return 'test';
}

function thing() {
    return 'test'; /*<ENSP>*/
}

function thing() {
    return 'test'; /*<NBSP>*/
}

function thing() {
    // Description <NBSP>: some descriptive text
}

/*
Description <NBSP>: some descriptive text
*/

function thing() {
    return / <NBSP>regexp/;
}

/*eslint-env es6*/
function thing() {
    return `template <NBSP>string`;
}
```

Examples of **correct** code for this rule with the default `{ "skipStrings": true }` option:

默认选项 `{ "skipStrings": true }` **正确** 代码示例：

```js
/*eslint no-irregular-whitespace: "error"*/

function thing() {
    return ' <NBSP>thing';
}

function thing() {
    return '​<ZWSP>thing';
}

function thing() {
    return 'th <NBSP>ing';
}
```

### skipComments

Examples of additional **correct** code for this rule with the `{ "skipComments": true }` option:

选项 `{ "skipComments": true }` 的 **正确** 代码示例：

```js
/*eslint no-irregular-whitespace: ["error", { "skipComments": true }]*/

function thing() {
    // Description <NBSP>: some descriptive text
}

/*
Description <NBSP>: some descriptive text
*/
```

### skipRegExps

Examples of additional **correct** code for this rule with the `{ "skipRegExps": true }` option:

选项 `{ "skipRegExps": true }` 的 **正确** 代码示例：

```js
/*eslint no-irregular-whitespace: ["error", { "skipRegExps": true }]*/

function thing() {
    return / <NBSP>regexp/;
}
```

### skipTemplates

Examples of additional **correct** code for this rule with the `{ "skipTemplates": true }` option:

选项 `{ "skipTemplates": true }` 的 **正确** 代码示例：

```js
/*eslint no-irregular-whitespace: ["error", { "skipTemplates": true }]*/
/*eslint-env es6*/

function thing() {
    return `template <NBSP>string`;
}
```

## When Not To Use It

If you decide that you wish to use whitespace other than tabs and spaces outside of strings in your application.

如果你想在你的应用中使用 tab 和空格之外的空白字符，可以关闭此规则。

## Further Reading

* [ECMA whitespace](https://es5.github.io/#x7.2 \xA0)
* [JSON whitespace issues](http://timelessrepo.com/json-isnt-a-javascript-subset)

## Version

This rule was introduced in ESLint 0.9.0.

该规则在 ESLint 0.9.0 中被引入。

## Resources

* [Rule source](https://github.com/eslint/eslint/tree/master/lib/rules/no-irregular-whitespace.js)
* [Documentation source](https://github.com/eslint/eslint/tree/master/docs/rules/no-irregular-whitespace.md)
