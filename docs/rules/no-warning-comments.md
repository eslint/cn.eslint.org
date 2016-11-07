---
title: no-warning-comments - Rules
layout: doc
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# Disallow Warning Comments (no-warning-comments)

# 禁用警告注释 (no-warning-comments)

Developers often add comments to code which is not complete or needs review. Most likely you want to fix or review the code, and then remove the comment, before you consider the code to be production ready.

开发者经常给代码添加注释，标明哪些没有完成或需要审查。在你认为代码可以发布之前，你很有可能想修复或审查代码，然后删除注释。

```js
// TODO: do something
// FIXME: this is not a good idea
```

## Rule Details

This rule reports comments that include any of the predefined terms specified in its configuration.

该规则报告含有配置中预定义的项的注释。

## Options

This rule has an options object literal:

该规则有一个对象选项：

* `"terms"`: optional array of terms to match. Defaults to `["todo", "fixme", "xxx"]`. Terms are matched case-insensitive and as whole words: `fix` would match `FIX` but not `fixing`. Terms can consist of multiple words: `really bad idea`.
* `"terms"`: 可选的供匹配的数组。默认为 `["todo", "fixme", "xxx"]`。它们是大写敏感的并且匹配整个词： `fix` 匹配 `FIX` 但不匹配 `fixing`。也可以由多个单词组成：`really bad idea`。
* `"location"`: optional string that configures where in your comments to check for matches. Defaults to `"start"`. The other value is match `anywhere` in comments.
* `"location"`: 可选的字符串用于在注释中检测匹配。默认为 `"start"`。另一个值是`anywhere`。

Example of **incorrect** code for the default `{ "terms": ["todo", "fixme", "xxx"], "location": "start" }` options:

默认选项 `{ "terms": ["todo", "fixme", "xxx"], "location": "start" }` 的 **错误** 代码示例：

```js
/*eslint no-warning-comments: "error"*/

function callback(err, results) {
  if (err) {
    console.error(err);
    return;
  }
  // TODO
}
```

Example of **correct** code for the default `{ "terms": ["todo", "fixme", "xxx"], "location": "start" }` options:

默认选项 `{ "terms": ["todo", "fixme", "xxx"], "location": "start" }` 的 **正确** 代码示例：

```js
/*eslint no-warning-comments: "error"*/

function callback(err, results) {
  if (err) {
    console.error(err);
    return;
  }
  // NOT READY FOR PRIME TIME
  // but too bad, it is not a predefined warning term
}
```

### terms and location

Examples of **incorrect** code for the `{ "terms": ["todo", "fixme", "any other term"], "location": "anywhere" }` options:

选项 `{ "terms": ["todo", "fixme", "any other term"], "location": "anywhere" }` 的 **错误** 代码示例：

```js
/*eslint no-warning-comments: ["error", { "terms": ["todo", "fixme", "any other term"], "location": "anywhere" }]*/

// TODO: this
// todo: this too
// Even this: TODO
/* /*
 * The same goes for this TODO comment
 * Or a fixme
 * as well as any other term
 */
```

Examples of **correct** code for the `{ "terms": ["todo", "fixme", "any other term"], "location": "anywhere" }` options:

选项 `{ "terms": ["todo", "fixme", "any other term"], "location": "anywhere" }` 的 **正确** 代码示例：

```js
/*eslint no-warning-comments: ["error", { "terms": ["todo", "fixme", "any other term"], "location": "anywhere" }]*/

// This is to do
// even not any other    term
// any other terminal
/*
 * The same goes for block comments
 * with any other interesting term
 * or fix me this
 */
```

## When Not To Use It

* If you have a large code base that was not developed with a policy to not use such warning terms, you might get hundreds of warnings / errors which might be contra-productive if you can't fix all of them (e.g. if you don't get the time to do it) as you might overlook other warnings / errors or get used to many of them and don't pay attention on it anymore.
* 如果你有一个大型的代码库，没有使用这种警告条款进行开发，在非生产环境下，如果你不能修复所有这些问题，你可能会得到数以百计的警告或错误（例如，如果你没有时间去做），你可能会忽略其他警告或错误，或者习惯了，不在过多关注它们了。
* Same reason as the point above: You shouldn't configure terms that are used very often (e.g. central parts of the native language used in your comments).
* 正如上面说那样：你不应配置那些经常被使用的条款（例如，在你的注释中使用本地语言）。

## Version

This rule was introduced in ESLint 0.4.4.

该规则在 ESLint 0.4.4 中被引入。

## Resources

* [Rule source](https://github.com/eslint/eslint/tree/master/lib/rules/no-warning-comments.js)
* [Documentation source](https://github.com/eslint/eslint/tree/master/docs/rules/no-warning-comments.md)
