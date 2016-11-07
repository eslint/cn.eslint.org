---
title: object-property-newline - Rules
layout: doc
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# enforce placing object properties on separate lines (object-property-newline)

# 强制将对象的属性放在不同的行上 (object-property-newline)

While formatting preferences are very personal, a number of style guides require that object properties be placed on separate lines for better readability.

虽然代码风格纯属个人偏好，一些代码风格规范为了更好的可读性要求将对象的属性放在不同的行上。

Another argument in favor of this style is that it improves the readability of diffs when a property is changed:

另一种赞成这种风格的观点是，当属性变化时，可以提高差异的可读性：

```diff
// More readable
 var obj = {
     foo: "foo",
-    bar: "bar",
+    bar: "bazz",
     baz: "baz"
 };
```

```diff
// Less readable
-var obj = { foo: "foo", bar: "bar", baz: "baz" };
+var obj = { foo: "foo", bar: "bazz", baz: "baz" };
```

## Rule Details

This rule aims to maintain consistency of newlines between object properties.

本规则旨在维护对象属性之间换行一致性。

Examples of **incorrect** code for this rule:

**错误** 代码示例：

```js
/*eslint object-property-newline: "error"*/

var obj = { foo: "foo", bar: "bar", baz: "baz" };

var obj2 = {
    foo: "foo", bar: "bar", baz: "baz"
};

var obj3 = {
    foo: "foo", bar: "bar",
    baz: "baz"
};
```

Examples of **correct** code for this rule:

**正确** 代码示例：

```js
/*eslint object-property-newline: "error"*/

var obj = {
    foo: "foo",
    bar: "bar",
    baz: "baz"
};
```

## Options

This rule has an object option:

该规则有一个对象选项：

* `"allowMultiplePropertiesPerLine"`: `true` allows all keys and values to be on the same line
* `"allowMultiplePropertiesPerLine"`: 当为 `true` 时，允许所有的 key 和 value 在同一行

### allowMultiplePropertiesPerLine

Examples of additional **correct** code for this rule with the `{ "allowMultiplePropertiesPerLine": true }` option:

选项 `{ "allowMultiplePropertiesPerLine": true }` 的 **正确** 代码示例：

```js
/*eslint object-property-newline: ["error", { "allowMultiplePropertiesPerLine": true }]*/

var obj = { foo: "foo", bar: "bar", baz: "baz" };

var obj2 = {
    foo: "foo", bar: "bar", baz: "baz"
};
```

## When Not To Use It

You can turn this rule off if you are not concerned with the consistency of newlines between object properties.

如果你并不关心对象属性之间换行的一致性，你可以关闭此规则。

## Compatibility

* **JSCS**: [requireObjectKeysOnNewLine](http://jscs.info/rule/requireObjectKeysOnNewLine)

## Related Rules

* [brace-style](brace-style)
* [comma-dangle](comma-dangle)
* [key-spacing](key-spacing)
* [object-curly-spacing](object-curly-spacing)

## Version

This rule was introduced in ESLint 2.10.0.

该规则在 ESLint 2.10.0 中被引入。

## Resources

* [Rule source](https://github.com/eslint/eslint/tree/master/lib/rules/object-property-newline.js)
* [Documentation source](https://github.com/eslint/eslint/tree/master/docs/rules/object-property-newline.md)
