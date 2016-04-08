---
title: Rule no-warning-comments
layout: doc
translator: fengnana
proofreader: coocon 
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# Disallow Warning Comments (no-warning-comments)

# 禁止警告注释 (no-warning-comments)

Developers often add comments to code which is not complete or needs review. Most likely you want to fix or review the code, and then remove the comment, before you consider the code to be production ready.

```js
// TODO: do something
// FIXME: this is not a good idea
```

## Rule Details

This rule reports comments that include any of the predefined terms specified in its configuration.

## Options

This rule has an options object literal:

* `"terms"`: optional array of terms to match. Defaults to `["todo", "fixme", "xxx"]`. Terms are matched case-insensitive and as whole words: `fix` would match `FIX` but not `fixing`. Terms can consist of multiple words: `really bad idea`.
* `"location"`: optional string that configures where in your comments to check for matches. Defaults to `"start"`. The other value is match `anywhere` in comments.

Example of **incorrect** code for the default `{ "terms": ["todo", "fixme", "xxx"], "location": "start" }` options:

默认选项`{ "terms": ["todo", "fixme", "xxx"], "location": "start" }`的 **错误**代码示例：

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

默认选项`{ "terms": ["todo", "fixme", "xxx"], "location": "start" }`的 **正确**代码示例：

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

`{ "terms": ["todo", "fixme", "any other term"], "location": "anywhere" }`选项的 **错误**代码示例：

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

`{ "terms": ["todo", "fixme", "any other term"], "location": "anywhere" }`选项的 **正确**代码示例：

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

* 如果你有一个大型的代码，基于没有用此规则进行开发，不使用这种警告条款，你可能会得到数以百计的警告/错误，它可能会降低生产质量如果你不能修复所有这些问题(例如如果你没有时间去做它)，因此你可能会忽略其他警告/错误或者习惯它们中的大部分而不会再注意它们。

* Same reason as the point above: You shouldn't configure terms that are used very often (e.g. central parts of the native language used in your comments).

* 正如以上所说的一些原因：你不能配置那些经常被使用的条款(例如中央部分的注释中使用的本地语言)。

## Version

This rule was introduced in ESLint 0.4.4.

此规则在 ESLint 0.4.4 中被引入。

## Resources

* [Rule source](https://github.com/eslint/eslint/tree/master/lib/rules/no-warning-comments.js)
* [Documentation source](https://github.com/eslint/eslint/tree/master/docs/rules/no-warning-comments.md)
