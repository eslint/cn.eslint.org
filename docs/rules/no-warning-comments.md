---
title: Rule no-warning-comments
layout: doc
translator: fengnana
proofreader: coocon 
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# Disallow Warning Comments (no-warning-comments)

# 禁止警告注释 (no-warning-comments)

Often code is marked during development process for later work on it or with additional thoughts. Examples are typically `// TODO: do something` or `// FIXME: this is not a good idea`. These comments are a warning signal, that there is something not production ready in your code. Most likely you want to fix it or remove the comments before you roll out your code with a good feeling.


通常在开发过程中代码标记是为以后工作或额外的想法。例子通常是`// TODO: 做了什么` 或者 `// FIXME: 不是一个好想法`。这些注释是一个警告信号，在你的代码中不会产生什么。最有可能你想改正错误或删除注释之前写出你中意的代码。

## Rule Details

This rule can be used to help finding these `warning-comments`. It can be configured with an array of terms you don't want to exist in your code. It will raise a warning when one or more of the configured `warning-comments` are present in the checked files.

此规则可以用来寻找那些 `warning-comments`。它可以用一个数组来配置那些你不想放在代码中的东西。当一个或多个被配置的 `warning-comments` 存在于检查文件中它会引起一个警告。

The default configuration looks like this:

默认的配置如下：

```json
"no-warning-comments": [0, { "terms": ["todo", "fixme", "xxx"], "location": "start" }]
```

This preconfigures

如上配置

* the rule is disabled because it is set to `0`. Changing this to `1` for warn or `2` for error mode activates it (this works exactly the same as everywhere else in `ESLint`).

* 规则不可用因为它被设置为 `0`。改为 `1` 警告或者 `2` 错误模式来激活它。

* the `terms` array is set to `todo`, `fixme` and `xxx` as `warning-comments`. `terms` has to be an array. It can hold any terms you might want to warn about in your comments - they do not have to be single words. E.g. `really bad idea` is as valid as `attention`.

* `terms` 数组设置为 `todo`, `fixme` 和 `xxx` 作为 `warning-comments`. `terms` 必须是个数组。它可以容纳任何的条款，你可能想要警告你的评论-它们没有必要是单个词。例如 `really bad idea` 与 `attention` 同样有效。

* the `terms` are case-insensitive and are matched as whole words. E.g. `fix` would not match `fixing`.

* `terms` 是不区分大小写的，匹配整个单词。如,`fix` 不匹配 `fixing`。

* the `location`-option set to `start` configures the rule to check only the start of comments. E.g. `// TODO` would be matched, `// This is a TODO` would not. You can change this to `anywhere` to check your complete comments.

* `location` 选项设置为 `start` 配置规则检查注释的开头。如，`// TODO`将会匹配，`// This is a TODO`不会匹配。你可以改变为 `anywhere` 来检查你整个注释。

As already seen above, the configuration is quite simple. Example that enables the rule and configures it to check the complete comment, not only the start:

正如上面已经见过的，配置非常简单。例如开启规则并配置它检查完整的注释,而不仅是开始：

```json
"no-warning-comments": [2, { "terms": ["todo", "fixme", "any other term"], "location": "anywhere" }]
```

The following patterns are considered problems:

以下模式被认为是有问题的：

```
/*eslint no-warning-comments: [2, { "terms": ["todo", "fixme", "any other term"], "location": "anywhere" }]*/

// TODO: this
// todo: this too
// Even this: TODO
/* /*
 * The same goes for this TODO comment
 * Or a fixme
 * as well as any other term
 */
```

These patterns would not be considered problems:

以下模式被认为是没有问题的：

```
/*eslint no-warning-comments: [2, { "terms": ["todo", "fixme", "any other term"], "location": "anywhere" }]*/

// This is to do
// even not any other    term
// any other terminal
/*
 * The same goes for block comments
 * with any other interesting term
 * or fix me this
 */

```

## Options

```json
"no-warning-comments": [<enabled>, { "terms": <terms>, "location": <location> }]
```

* `enabled`: for enabling the rule. 0=off, 1=warn, 2=error. Defaults to `0`.
* `enabled`： 启用规则。0=关, 1=警告, 2=错误。默认为 `0`。
* `terms`: optional array of terms to match. Terms are matched ignoring the case. Defaults to `["todo", "fixme", "xxx"]`.
* `terms`： 匹配可选的数组。忽略匹配的数组。默认为 `["todo", "fixme", "xxx"]`。
* `location`: optional string that configures where in your comments to check for matches. Defaults to `"start"`.
* `location`： 可选字符串来配置匹配注释中的检测位置，默认为 `"start"`。

### Examples

* Rule configured to warn on matches and search the complete comment, not only the start of it. Note that the `term` configuration is omitted to use the defaults terms.

* 用于警告的规则匹配和搜索完整的注释,而不仅是它的开始。注意 `term` 的配置被省略使用默认条款。

   ```json
   "no-warning-comments": [1, { "location": "anywhere" }]
   ```

* Rule configured to warn on matches of the term `bad string` at the start of comments. Note that the `location` configuration is omitted to use the default location.

* 规则配置到 `bad string` 在注释的开始时发出警告。注意`location`配置被省略使用默认位置。

   ```json
   "no-warning-comments": [1, { "terms": ["bad string"] }]
   ```

* Rule configured to warn with error on matches of the default terms at the start of comments. Note that the complete configuration object (that normally holds `terms` and/or `location`) can be omitted for simplicity.

* 配置的规则在注释的开始位置匹配默认条款而给出错误警告。请注意，完整的配置对象（通常有 `terms` 和/或者 `location`）可以简化省略。

   ```json
   "no-warning-comments": [2]
   ```

* Rule configured to warn on matches of the default terms at the start of comments. Note that the complete configuration object (as already seen in the example above) and even the square brackets can be omitted for simplicity.

* 配置的规则在注释的开始位置匹配默认条款而给出警告。请注意，为简化起见,完整的配置对象（以上例子中看到的）甚至是方括号可以省略。

   ```json
   "no-warning-comments": 1
   ```

* Rule configured to warn on matches of the specified terms at any location in the comments. Note that you can use as many terms as you want.

* 规则配置为在评论中的任何位置匹配指定的条款时发出警告。请注意，你可以使用任意多个条款。

   ```json
   "no-warning-comments": [1, { "terms": ["really any", "term", "can be matched"], "location": "anywhere" }]
   ```

## When Not To Use It

* If you have a large code base that was not developed with a policy to not use such warning terms, you might get hundreds of warnings / errors which might be contra-productive if you can't fix all of them (e.g. if you don't get the time to do it) as you might overlook other warnings / errors or get used to many of them and don't pay attention on it anymore.

* 如果你有一个大型的代码，基于没有用此规则进行开发，不使用这种警告条款，你可能会得到数以百计的警告/错误，它可能会降低生产质量如果你不能修复所有这些问题(例如如果你没有时间去做它)，因此你可能会忽略其他警告/错误或者习惯它们中的大部分而不会再注意它们。

* Same reason as the point above: You shouldn't configure terms that are used very often (e.g. central parts of the native language used in your comments).

正如以上所说的一些原因：你不能配置那些经常被使用的条款(例如中央部分的注释中使用的本地语言)。

## Version

This rule was introduced in ESLint 0.4.4.

此规则在 ESLint 0.4.4 中被引入。

## Resources

* [Rule source](https://github.com/eslint/eslint/tree/master/lib/rules/no-warning-comments.js)
* [Documentation source](https://github.com/eslint/eslint/tree/master/docs/rules/no-warning-comments.md)
