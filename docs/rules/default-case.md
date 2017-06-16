---
title: default-case - Rules
layout: doc
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# Require Default Case in Switch Statements (default-case)

# 要求 Switch 语句中有 Default 分支 (default-case)

Some code conventions require that all `switch` statements have a `default` case, even if the default case is empty, such as:

一些编码规范中，要求所有的 `switch` 语句中必须包含 `default` 分支，即使默认分支中没有任何代码，如下所示：

```js
switch (foo) {
    case 1:
        doSomething();
        break;

    case 2:
        doSomething();
        break;

    default:
        // do nothing
}
```

The thinking is that it's better to always explicitly state what the default behavior should be so that it's clear whether or not the developer forgot to include the default behavior by mistake.

考虑到开发人员可能会忘记定义默认分支而导致程序发生错误，所以明确规定定义默认分支是很好的选择。

Other code conventions allow you to skip the `default` case so long as there is a comment indicating the omission is intentional, such as:

有些代码规范中允许省略掉 `default` 分支，但是要写明注释以说明是故意为之。如下：

```js
switch (foo) {
    case 1:
        doSomething();
        break;

    case 2:
        doSomething();
        break;

    // no default
}
```

Once again, the intent here is to show that the developer intended for there to be no default behavior.

再次指出，以上示例的前提是开发者并没有默认分支的情况需要处理。

## Rule Details

This rule aims to require `default` case in `switch` statements. You may optionally include a `// no default` after the last `case` if there is no `default` case. The comment may be in any desired case, such as `// No Default`.

此规则的目的是在 `switch` 语句中强制声明 `default` 分支。或者也可以在最后一个 `case` 分支下，使用 `// no default` 来表明此处不需要 `default` 分支。注释可以任何形式出现，比如 `// No Default`。

Examples of **incorrect** code for this rule:

**错误** 代码示例：


```js
/*eslint default-case: "error"*/

switch (a) {
    case 1:
        /* code */
        break;
}

```

Examples of **correct** code for this rule:

**正确** 代码示例：

```js
/*eslint default-case: "error"*/

switch (a) {
    case 1:
        /* code */
        break;

    default:
        /* code */
        break;
}


switch (a) {
    case 1:
        /* code */
        break;

    // no default
}

switch (a) {
    case 1:
        /* code */
        break;

    // No Default
}
```

## Options

This rule accepts a single options argument:

该规则接受单个选项参数：

* Set the `commentPattern` option to a regular expression string to change the default `/^no default$/i` comment test pattern
* 设置 `commentPattern` 为一个正则表达式字符串，来改变默认的 `/^no default$/i` 注释匹配模式

### commentPattern

Examples of **correct** code for the `{ "commentPattern": "^skip\\sdefault" }` option:

选项 `{ "commentPattern": "^skip\\sdefault" }` 的 **正确** 代码示例：

```js
/*eslint default-case: ["error", { "commentPattern": "^skip\\sdefault" }]*/

switch(a) {
    case 1:
        /* code */
        break;

    // skip default
}

switch(a) {
    case 1:
        /* code */
        break;

    // skip default case
}
```

## When Not To Use It

If you don't want to enforce a `default` case for `switch` statements, you can safely disable this rule.

如果你不想要求 `switch` 中必须要有 `default` 分支，禁用此规则即可。

## Related Rules

* [no-fallthrough](no-fallthrough)

## Version

This rule was introduced in ESLint 0.6.0.

该规则在 ESLint 0.6.0 中被引入。

## Resources

* [Rule source](https://github.com/eslint/eslint/tree/master/lib/rules/default-case.js)
* [Documentation source](https://github.com/eslint/eslint/tree/master/docs/rules/default-case.md)
