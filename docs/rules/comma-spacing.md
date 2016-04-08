---
title: Rule comma-spacing
layout: doc
translator: molee1905
proofreader: sunshiner
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# Enforces spacing around commas (comma-spacing)

# 强制在逗号周围使用空格 (comma-spacing)

(fixable) The --fix option on the [command line](../user-guide/command-line-interface#fix) automatically fixes problems reported by this rule.

(fixable)[command line](../user-guide/command-line-interface#fix)中的`--fix`选项可以自动修复该规则报告的问题。

Spacing around commas improve readability of a list of items. Although most of the style guidelines for languages prescribe adding a space after a comma and not before it, it is subjective to the preferences of a project.

逗号前后的空格可以提高列表项的可读性。对于大多数语言的代码风格来说一般是在逗号之后而不是之前添加一个空格，当然你也可以在项目中按照自己的偏好决定在哪里添加空格。

```js
var foo = 1, bar = 2;
var foo = 1 ,bar = 2;
```

## Rule Details

This rule aims to enforce spacing around a comma. As such, it warns whenever it sees a missing or unwanted space in commas of variable declaration, object property, function parameter, sequence and array element.

该规则旨在强制要求在逗号周围使用空格。因此，在变量的声明，对象的属性，方法的参数，序列和数组元素中的逗号周围缺少空格或有多余的空格，该规则将发出警告。

## Options

The rule takes one option, an object, which has two keys `before` and `after` having boolean values `true` or `false`. If `before` is `true`, space is enforced before commas and if it's `false`, space is disallowed before commas. If `after` is `true`, space is enforced after commas and if it's `false`, space is disallowed after commas. The default is `{"before": false, "after": true}`.

该规则唯一的可选项是一个包含`before` 和 `after`两个属性的对象，这两个属性对应的属性值是`true` 或 `false`。如果`before` 设置为 `true`，逗号前必须有空格；如果为`false`，逗号前禁止有空格。如果`after` 设置为 `true`，逗号后必须有空格；如果为`false`，逗号后禁止有空格。默认值为`{"before": false, "after": true}`。

```json
    "comma-spacing": ["error", {"before": false, "after": true}]
```

The following examples show two primary usages of this option.

下面的示例演示这个可选项的两种基本用法。

### `{"before": false, "after": true}`

This is the default option. It enforces spacing after commas and disallows spacing before commas.

这个是默认选项。它强制在逗号后面有空格，在逗号之前禁止有空格。

The following patterns are considered problems:

以下模式被认为是有问题的：

```js
/*eslint comma-spacing: ["error", {"before": false, "after": true}]*/

var foo = 1 ,bar = 2;
var arr = [1 , 2];
var obj = {"foo": "bar" ,"baz": "qur"};
foo(a ,b);
new Foo(a ,b);
function foo(a ,b){}
a ,b
```

The following patterns are not considered problems:

以下模式被认为是没有问题的：

```js
/*eslint comma-spacing: ["error", {"before": false, "after": true}]*/

var foo = 1, bar = 2
    , baz = 3;
var arr = [1, 2];
var obj = {"foo": "bar", "baz": "qur"};
foo(a, b);
new Foo(a, b);
function foo(a, b){}
a, b
```

### `{"before": true, "after": false}`

This option enforces spacing before commas and disallows spacing after commas.

该选项强制逗号前有空格，禁止逗号后有空格。

The following patterns are considered problems:

以下模式被认为是有问题的：

```js
/*eslint comma-spacing: ["error", {"before": true, "after": false}]*/

var foo = 1, bar = 2;
var arr = [1 , 2];
var obj = {"foo": "bar", "baz": "qur"};
new Foo(a,b);
function foo(a,b){}
a, b
```

The following patterns are not considered problems:

以下模式被认为是没有问题的：

```js
/*eslint comma-spacing: ["error", {"before": true, "after": false}]*/

var foo = 1 ,bar = 2 ,
    baz = true;
var arr = [1 ,2];
var obj = {"foo": "bar" ,"baz": "qur"};
foo(a ,b);
new Foo(a ,b);
function foo(a ,b){}
a ,b
```

### Handling of `null` elements in `ArrayExpression` or `ArrayPattern`

### `ArrayExpression` 或 `ArrayPattern`中的`null`元素处理

If you have a `null` element within of an `ArrayExpression` or `ArrayPattern` this rule will not validate the spacing before the respective comma.

如果在`ArrayExpression` 或 `ArrayPattern`中有个`null`元素，该规则将不会验证相应的逗号前的空格

The following both examples are valid when the rule is configured with `{"before": false, "after": true}`.

当该规则配置为{"before": false, "after": true}`，以下两个示例是有效的。

```js
var items = [, 2, 3 ]
var items = [ , 2, 3 ]
```

This behavior avoids conflicts with the [`array-bracket-spacing`](array-bracket-spacing) rule.

这种行为避免了和[`array-bracket-spacing`](array-bracket-spacing)规则的冲突。

## When Not To Use It

If your project will not be following a consistent comma-spacing pattern, turn this rule off.

如果你的项目不追求一致逗号间距，关闭此规则即可。

## Further Reading

* [Javascript](http://javascript.crockford.com/code.html)
* [Dojo Style Guide](https://dojotoolkit.org/reference-guide/1.9/developer/styleguide.html)

## Related Rules

* [array-bracket-spacing](array-bracket-spacing)
* [comma-style](comma-style)
* [space-in-brackets](space-in-brackets) (deprecated)
* [space-in-parens](space-in-parens)
* [space-infix-ops](space-infix-ops)
* [space-after-keywords](space-after-keywords)
* [space-unary-ops](space-unary-ops)
* [space-return-throw-case](space-return-throw-case)

## Version

This rule was introduced in ESLint 0.9.0.

该规则是在 ESLint 0.9.0 被引入的。

## Resources

* [Rule source](https://github.com/eslint/eslint/tree/master/lib/rules/comma-spacing.js)
* [Documentation source](https://github.com/eslint/eslint/tree/master/docs/rules/comma-spacing.md)
