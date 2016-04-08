---
title: Rule comma-dangle
layout: doc
translator: coocon
proofreader: molee1905
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# Disallow or Enforce Dangling Commas (comma-dangle)

# 禁止或强制拖尾逗号（comma-dangle）

Trailing commas in object literals are valid according to the ECMAScript 5 (and ECMAScript 3!) spec. However, IE8 (when not in IE8 document mode) and below will throw an error when it encounters trailing commas in JavaScript.

根据 ECMAScript5(和 ECMAScript3!)规范，对象字面量中的拖尾逗号是合法的。然而，在IE8（非IE8文档模式）下，当在 JavaScript 出现拖尾逗号，以下情况下将抛出错误。

```js
var foo = {
    bar: "baz",
    qux: "quux",
};
```

On the other hand, trailing commas simplify adding and removing items to objects and arrays, since only the lines you are modifying must be touched.

另外，拖尾逗号简化对象和数组元素的添加和删除，因为仅仅涉及到你修改的行。

## Rule Details

This rule enforces consistent use of trailing commas in object and array literals.

这个规则强制在对象和数组字面量中使用一致的拖尾逗号。

## Options

This rule takes one argument, which can be one of the following options:

这个规则接受一个参数，可以是如下选项之一：

- `"never"` - warn whenever a trailing comma is detected. The default value of this option is `"never"`.

- `"never"` - 只要检测到尾逗号，就发出警告。这个选项默认值为 `"never"`

- `"always"` - warn whenever a missing comma is detected.

- `"always"` - 只要检测到缺失逗号，就发出警告。

- `"always-multiline"` - warn if there is a missing trailing comma on arrays or objects that span multiple lines, and warns if there is a trailing comma present on single line arrays or objects.

- `"always-multiline"` - 在跨行的数组和对象中缺失拖尾逗号，或者在单行数组和对象中出现尾逗号，都将发出警告。

- `"only-multiline"` - warn whenever a trailing comma is detected on single line nodes.

- `"only-multiline"` - 在单行节点上检测到拖尾逗号将发出警告。

### never

Examples of **incorrect** code for the default `"never"` option:

默认选项`"never"`的 **错误**代码示例：

```js
/*eslint comma-dangle: ["error", "never"]*/

var foo = {
    bar: "baz",
    qux: "quux",
};

var arr = [1,2,];

foo({
  bar: "baz",
  qux: "quux",
});
```

Examples of **correct** code for the default `"never"` option:

默认选项`"never"`的 **正确**代码示例：

```js
/*eslint comma-dangle: ["error", "never"]*/

var foo = {
    bar: "baz",
    qux: "quux"
};

var arr = [1,2];

foo({
  bar: "baz",
  qux: "quux"
});
```

### always

Examples of **incorrect** code for the `"always"` option:

选项`"always"`的 **错误**代码示例：

```js
/*eslint comma-dangle: ["error", "always"]*/

var foo = {
    bar: "baz",
    qux: "quux"
};

var arr = [1,2];

foo({
  bar: "baz",
  qux: "quux"
});
```

Examples of **correct** code for the `"always"` option:

选项`"always"`的 **正确**代码示例：

```js
/*eslint comma-dangle: ["error", "always"]*/

var foo = {
    bar: "baz",
    qux: "quux",
};

var arr = [1,2,];

foo({
  bar: "baz",
  qux: "quux",
});
```

### always-multiline

Examples of **incorrect** code for the `"always-multiline"` option:

选项`"always-multiline"`的 **错误**代码示例：

```js
/*eslint comma-dangle: ["error", "always-multiline"]*/

var foo = {
    bar: "baz",
    qux: "quux"
};

var foo = { bar: "baz", qux: "quux", };

var arr = [1,2,];

var arr = [1,
    2,];

var arr = [
    1,
    2
];

foo({
  bar: "baz",
  qux: "quux"
});
```

Examples of **correct** code for the `"always-multiline"` option:

选项`"always-multiline"`的 **正确**代码示例：

```js
/*eslint comma-dangle: ["error", "always-multiline"]*/

var foo = {
    bar: "baz",
    qux: "quux",
};

var foo = {bar: "baz", qux: "quux"};
var arr = [1,2];

var arr = [1,
    2];

var arr = [
    1,
    2,
];

foo({
  bar: "baz",
  qux: "quux",
});
```

### only-multiline

Examples of **incorrect** code for the `"only-multiline"` option:

选项`"only-multiline"`的 **错误**代码示例：

```js
/*eslint comma-dangle: ["error", "only-multiline"]*/

var foo = { bar: "baz", qux: "quux", };

var arr = [1,2,];

var arr = [1,
    2,];

```

Examples of **correct** code for the `"only-multiline"` option:

选项`"only-multiline"`的 **正确**代码示例：

```js
/*eslint comma-dangle: ["error", "only-multiline"]*/

var foo = {
    bar: "baz",
    qux: "quux",
};

var foo = {
    bar: "baz",
    qux: "quux"
};

var foo = {bar: "baz", qux: "quux"};
var arr = [1,2];

var arr = [1,
    2];

var arr = [
    1,
    2,
];

var arr = [
    1,
    2
];

foo({
  bar: "baz",
  qux: "quux",
});

foo({
  bar: "baz",
  qux: "quux"
});
```

## When Not To Use It

You can turn this rule off if you are not concerned with dangling commas.

如果你并不关心拖尾逗号的问题，你可以关闭这个规则。

## Version

This rule was introduced in ESLint 0.16.0.

该规则在 ESLint 0.16.0 中被引入。

## Resources

* [Rule source](https://github.com/eslint/eslint/tree/master/lib/rules/comma-dangle.js)
* [Documentation source](https://github.com/eslint/eslint/tree/master/docs/rules/comma-dangle.md)
