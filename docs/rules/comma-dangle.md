---
title: Rule comma-dangle
layout: doc
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# require or disallow trailing commas (comma-dangle)

# 要求或禁止使用拖尾逗号 (comma-dangle)

(fixable) The `--fix` option on the [command line](../user-guide/command-line-interface#fix) automatically fixes problems reported by this rule.

(fixable) [命令行](../user-guide/command-line-interface#fix)中的 `--fix` 选项可以自动修复该规则报告的问题。

Trailing commas in object literals are valid according to the ECMAScript 5 (and ECMAScript 3!) spec. However, IE8 (when not in IE8 document mode) and below will throw an error when it encounters trailing commas in JavaScript.

根据 ECMAScript5 (和 ECMAScript3!)规范，对象字面量中的拖尾逗号是合法的。然而，在 IE8（非 IE8 文档模式）下，当在 JavaScript 出现拖尾逗号，以下情况下将抛出错误。

```js
var foo = {
    bar: "baz",
    qux: "quux",
};
```

Trailing commas simplify adding and removing items to objects and arrays, since only the lines you are modifying must be touched.
Another argument in favor of trailing commas is that it improves the clarity of diffs when an item is added or removed from an object or array:

拖尾逗号简化了对象和数组增加或删除元素，因为你只需接触你要修改的行。另一个支持拖尾逗号的观点是，当对象或数组添加或删除元素时，它提高了代码差异的清晰度。

Less clear:

不太清晰：

```diff
 var foo = {
-    bar: "baz",
-    qux: "quux"
+    bar: "baz"
 };
```

More clear:

更清晰：

```diff
 var foo = {
     bar: "baz",
-    qux: "quux",
 };
```

## Rule Details

This rule enforces consistent use of trailing commas in object and array literals.

这个规则强制在对象和数组字面量中使用一致的拖尾逗号。

## Options

This rule has a string option:

该规则有一个字符串选项：

* `"never"` (default) disallows trailing commas
* `"never"` (默认) 禁用拖尾逗号
* `"always"` requires trailing commas
* `"always"` 要求使用拖尾逗号
* `"always-multiline"` requires trailing commas when the last element or property is in a *different* line than the closing `]` or `}` and disallows trailing commas when the last element or property is on the *same* line as the closing `]` or `}`
* `"always-multiline"` 当最后一个元素或属性与闭括号 `]` 或 `}` 在 *不同的行*时，要求使用拖尾逗号；当在 *同一行*时，禁止使用拖尾逗号。
* `"only-multiline"` allows (but does not require) trailing commas when the last element or property is in a *different* line than the closing `]` or `}` and disallows trailing commas when the last element or property is on the *same* line as the closing `]` or `}`
* `"only-multiline"` 当最后一个元素或属性与闭括号 `]` 或 `}` 在 *不同的行*时，允许（但不要求）使用拖尾逗号；当在 *同一行*时，禁止使用拖尾逗号。

### never

Examples of **incorrect** code for this rule with the default `"never"` option:

默认选项 `"never"` 的 **错误** 代码示例：

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

Examples of **correct** code for this rule with the default `"never"` option:

默认选项 `"never"` 的 **正确** 代码示例：

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

Examples of **incorrect** code for this rule with the `"always"` option:

选项 `"always"` 的 **错误** 代码示例：

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

Examples of **correct** code for this rule with the `"always"` option:

选项 `"always"` 的 **正确** 代码示例：

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

Examples of **incorrect** code for this rule with the `"always-multiline"` option:

选项 `"always-multiline"` 的 **错误** 代码示例：

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

Examples of **correct** code for this rule with the `"always-multiline"` option:

选项 `"always-multiline"` 的 **正确** 代码示例：

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

Examples of **incorrect** code for this rule with the `"only-multiline"` option:

选项 `"only-multiline"` 的 **错误** 代码示例：

```js
/*eslint comma-dangle: ["error", "only-multiline"]*/

var foo = { bar: "baz", qux: "quux", };

var arr = [1,2,];

var arr = [1,
    2,];

```

Examples of **correct** code for this rule with the `"only-multiline"` option:

选项 `"only-multiline"` 的 **正确** 代码示例：

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
