---
title: Rule object-curly-spacing
layout: doc
translator: molee1905
proofreader: molee1905
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# Disallow or enforce spaces inside of curly braces in objects. (object-curly-spacing)

# 禁止或强制对象的花括号中有空格。 (object-curly-spacing)

While formatting preferences are very personal, a number of style guides require
or disallow spaces between curly braces in the following situations:

虽然格式化首选项都非常个人化，大量的风格指南要求或禁止在下列情况下的花括号之间有空格：

```
// simple object literals
var obj = { foo: "bar" };

// nested object literals
var obj = { foo: { zoo: "bar" } };

// destructuring assignment (EcmaScript 6)
var { x, y } = y;

// import/export declarations (EcmaScript 6)
import { foo } from "bar";
export { foo };
```

**Fixable:** This rule is automatically fixable using the `--fix` flag on the command line.

**Fixable:** 该规则可以通过`--fix`命令行进行自动修复。

## Rule Details

This rule aims to maintain consistency around the spacing inside of object literals. It also
applies to EcmaScript 6 destructured assignment and import/export specifiers.

该规则旨在维持对象文本中空格的一致性。它同样适用于 EcmaScript 6 的解构赋值和import/export 说明符。

It either requires or disallows spaces between those braces and the values inside of them.
Braces that are separated from the adjacent value by a new line are exempt from this rule.

该规则要求或禁止花括号和值之间有空格。
括号内相邻的值出现折行的，不适用此规则。

## Options

There are two main options for the rule:

该规则有两个主要的选项：

* `"always"` enforces a space inside of curly braces

* `"always"` 强制在花括号中有空格

* `"never"` disallows spaces inside of curly braces (default)

* `"never"` 不允许花括号中有空格 (默认)

Depending on your coding conventions, you can choose either option by specifying it in your configuration:

根据你的代码约定，你可以在你的配置中指定任一选项：

```json
"object-curly-spacing": [2, "always"]
```

### "never"

When `"never"` is set, the following patterns are considered problems:

当设置为`"never"`时，以下模式被认为是有问题的：

```
/*eslint object-curly-spacing: [2, "never"]*/

var obj = { 'foo': 'bar' };
var obj = {'foo': 'bar' };
var obj = { baz: {'foo': 'qux'}, bar};
var obj = {baz: { 'foo': 'qux'}, bar};
var {x } = y;
import { foo } from 'bar';
```

The following patterns are not considered problems:

以下模式被认为是没有问题的：

```
/*eslint object-curly-spacing: [2, "never"]*/

var obj = {'foo': 'bar'};
var obj = {'foo': {'bar': 'baz'}, 'qux': 'quxx'};
var obj = {
  'foo': 'bar'
};
var obj = {'foo': 'bar'
};
var obj = {
  'foo':'bar'};
var obj = {};
var {x} = y;
import {foo} from 'bar';
```

### "always"

When `"always"` is used, the following patterns are considered problems:

当设置为`"always"`时，以下模式被认为是有问题的：

```
/*eslint object-curly-spacing: [2, "always"]*/

var obj = {'foo': 'bar'};
var obj = {'foo': 'bar' };
var obj = { baz: {'foo': 'qux'}, bar};
var obj = {baz: { 'foo': 'qux' }, bar};
var obj = {'foo': 'bar'
};
var obj = {
  'foo':'bar'};
var {x} = y;
import {foo } from 'bar';
```

The following patterns are not considered problems:

以下模式被认为是没有问题的：

```
/*eslint object-curly-spacing: [2, "always"]*/

var obj = {};
var obj = { 'foo': 'bar' };
var obj = { 'foo': { 'bar': 'baz' }, 'qux': 'quxx' };
var obj = {
  'foo': 'bar'
};
var { x } = y;
import { foo } from 'bar';
```

Note that `{}` is always exempt from spacing requirements with this rule.

注意，`{}`总是豁免于此规则对空格的要求。

### Exceptions

There are two exceptions you can apply to this rule: `objectsInObjects` and
`arraysInObjects`. Their values can be set to either `true` or `false` as part
of an object literal set as the 3rd argument for the rule.

有两种例外情况适用于此规则：`objectsInObjects`和`arraysInObjects`。它们的值可以设置为`true`或`false`，作为一个对象文本的一部分，被设置为规则的第三个参数。

These exceptions work in the context of the first option.
That is, if `"always"` is set to enforce spacing and an exception is set to `false`,
it will disallow spacing for cases matching the exception. Likewise,
if `"never"` is set to disallow spacing and an exception is set to `true`,
it will enforce spacing for cases matching the exception.

这些例外情况作用在第一个选项的基础上。也就是说，如果`"always"`设置为强制使用空格但例外情况被设置为`false`，那么符合这个例外的将禁止使用空格。同样的，如果`"never"`设置为禁止使用空格但例外情况被设为`true`，那么符合这个例外的将强制使用空格。

You can add exceptions like so:

你可以像这样添加例外情况：

```json
"object-curly-spacing": [2, "always", {
  "objectsInObjects": false,
  "arraysInObjects": false
}]
```

#### `objectsInObjects`

In the case of the `"always"` option, set `objectsInObjects` exception to `false` to
enforce the following style (notice the `}}` at the end):

在设置了`"always"`选项的情况下，设置`objectsInObjects`例外为`false`，执行下面的风格(注意末尾的`}}`)：

```js
var obj = { "foo": { "baz": 1, "bar": 2 }};
```

In the case of the `"never"` option, set `objectsInObjects` exception to `true` to enforce
the following style (with a space between the `}` at the end):

在设置了`"never"`选项的情况下，设置`objectsInObjects`例外为`true`，执行下面的风格(末尾`}`之间有空格):

```js
var obj = {"foo": {"baz": 1, "bar": 2} };
```

#### `arraysInObjects`

In the case of the `"always"` option, set `arraysInObjects` exception to `false` to
enforce the following style (notice the `]}` at the end):

在设置了`"always"`选项的情况下，设置`arraysInObjects`例外为`false`，执行下面的风格(注意末尾的`}}`):

```js
var obj = { "foo": [ 1, 2 ]};
var obj = { "foo": [ "baz", "bar" ]};
```

In the case of the `"never"` option, set `arraysInObjects` exception to `true` to enforce
the following style (with a space between the `]` and  `}` at the end):

在设置了`"never"`选项的情况下，设置`arraysInObjects`例外为`true`，执行下面的风格(末尾`]`和`}`之间有空格):

```js
var obj = {"foo": [ 1, 2 ] };
var obj = {"foo": [ "baz", "bar" ] };
```

## When Not To Use It

You can turn this rule off if you are not concerned with the consistency of spacing between curly braces.

如果你并不关心花括号之间空格的一致性，可以关闭此规则。

## Related Rules

* [comma-spacing](comma-spacing)
* [space-in-parens](space-in-parens)
* [space-in-brackets](space-in-brackets) (deprecated)

## Version

This rule was introduced in ESLint 0.22.0.

该规则在 ESLint 0.22.0 中被引入。

## Resources

* [Rule source](https://github.com/eslint/eslint/tree/master/lib/rules/object-curly-spacing.js)
* [Documentation source](https://github.com/eslint/eslint/tree/master/docs/rules/object-curly-spacing.md)
