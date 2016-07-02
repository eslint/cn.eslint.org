---
title: Rule key-spacing
layout: doc
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# enforce consistent spacing between keys and values in object literal properties (key-spacing)

# 强制在对象字面量的键和值之间使用一致的空格 (key-spacing)

This rule enforces spacing around the colon in object literal properties. It can verify each property individually, or it can ensure horizontal alignment of adjacent properties in an object literal.

该规则强制对象属性的冒号左右的空格的一致性。它可以单独验证每一个属性，或它可以确保对象中的属性在垂直方向上对齐。

## Rule Details

This rule enforces consistent spacing between keys and values in object literal properties. In the case of long lines, it is acceptable to add a new line wherever whitespace is allowed.

该规则强制在对象字面量的键和值之间使用一致的空格。如果某一行很长的话，在允许空白出现的情况下，可以增加一空行，这种情况是该规则可以接受的。

## Options

This rule has an object option:

该规则有一个对象选项：

* `"beforeColon": false` (default) disallows spaces between the key and the colon in object literals
* `"beforeColon": false` (默认) 禁止在对象字面量的键和值之间存在空格
* `"beforeColon": true` requires at least one space between the key and the colon in object literals
* `"beforeColon": true` 要求在对象字面量的键和值之间存在至少有一个空格
* `"afterColon": true` (default) requires at least one space between the colon and the value in object literals
* `"afterColon": true` (默认) 要求在对象字面量的冒号和值之间存在至少有一个空格
* `"afterColon": false` disallows spaces between the colon and the value in object literals
* `"afterColon": false` 禁止在对象字面量的冒号和值之间存在空格
* `"mode": strict` (default) enforces exactly one space before or after colons in object literals
* `"mode": strict` (默认) 要求在冒号前后只有一个空格
* `"mode": minimum` enforces one or more spaces before or after colons in object literals
* `"mode": minimum` 要求在冒号前后最少有一个空格
* `"align": "value"` enforces horizontal alignment of values in object literals
* `"align": "value"` 要求对象字面量中的值水平对齐
* `"align": "colon"` enforces horizontal alignment of both colons and values in object literals.
* `"align": "colon"` 要求对象字面量中的冒号和值都水平对齐
* `"singleLine"` specifies a spacing style for single-line object literals
* `"singleLine"` 为单行对象字面量指定一个空格风格
* `"multiLine"` specifies a spacing style for multi-line object literals
* `"multiLine"` 为多行对象字面量指定一个空格风格

Please note that you can either use the top-level options or the grouped options (`singleLine` and `multiLine`) but not both.

请注意，你可以使用顶级选项或分组选项 (`singleLine` 和 `multiLine`)，但不能同时使用两者。

### beforeColon

Examples of **incorrect** code for this rule with the default `{ "beforeColon": false }` option:

默认选项 `{ "beforeColon": false }` 的 **错误** 代码示例：

```js
/*eslint key-spacing: ["error", { "beforeColon": false }]*/

var obj = { "foo" : 42 };
```

Examples of **correct** code for this rule with the default `{ "beforeColon": false }` option:

默认选项 `{ "beforeColon": false }` 的 **正确** 代码示例：

```js
/*eslint key-spacing: ["error", { "beforeColon": false }]*/

var obj = { "foo": 42 };
```

Examples of **incorrect** code for this rule with the `{ "beforeColon": true }` option:

选项 `{ "beforeColon": true }` 的 **错误** 代码示例：

```js
/*eslint key-spacing: ["error", { "beforeColon": true }]*/

var obj = { "foo": 42 };
```

Examples of **correct** code for this rule with the `{ "beforeColon": true }` option:

选项 `{ "beforeColon": true }` 的 **正确** 代码示例：

```js
/*eslint key-spacing: ["error", { "beforeColon": true }]*/

var obj = { "foo" : 42 };
```

### afterColon

Examples of **incorrect** code for this rule with the default `{ "afterColon": true }` option:

默认选项 `{ "afterColon": true }` 的 **错误** 代码示例：

```js
/*eslint key-spacing: ["error", { "afterColon": true }]*/

var obj = { "foo":42 };
```

Examples of **correct** code for this rule with the default `{ "afterColon": true }` option:

默认选项 `{ "afterColon": true }` 的 **正确** 代码示例：

```js
/*eslint key-spacing: ["error", { "afterColon": true }]*/

var obj = { "foo": 42 };
```

Examples of **incorrect** code for this rule with the `{ "afterColon": false }` option:

选项 `{ "afterColon": false }` 的 **错误** 代码示例：

```js
/*eslint key-spacing: ["error", { "afterColon": false }]*/

var obj = { "foo": 42 };
```

Examples of **correct** code for this rule with the `{ "afterColon": false }` option:

选项 `{ "afterColon": false }` 的 **正确** 代码示例：

```js
/*eslint key-spacing: ["error", { "afterColon": false }]*/

var obj = { "foo":42 };
```

### mode

Examples of **incorrect** code for this rule with the default `{ "mode": "strict" }` option:

默认选项 `{ "mode": "strict" }` 的 **错误** 代码示例：

```js
/*eslint key-spacing: ["error", { "mode": "strict" }]*/

call({
    foobar: 42,
    bat:    2 * 2
});
```

Examples of **correct** code for this rule with the default `{ "mode": "strict" }` option:

默认选项 `{ "mode": "strict" }` 的 **正确** 代码示例：

```js
/*eslint key-spacing: ["error", { "mode": "strict" }]*/

call({
    foobar: 42,
    bat: 2 * 2
});
```

Examples of **correct** code for this rule with the `{ "mode": "minimum" }` option:

选项 `{ "mode": "minimum" }` 的 **正确** 代码示例：

```js
/*eslint key-spacing: ["error", { "mode": "minimum" }]*/

call({
    foobar: 42,
    bat:    2 * 2
});
```

### align

Examples of **incorrect** code for this rule with the `{ "align": "value" }` option:

选项 `{ "align": "value" }` 的 **错误** 代码示例：

```js
/*eslint key-spacing: ["error", { "align": "value" }]*/

var obj = {
    a: value,
    bcde:  42,
    fg :   foo()
};
```

Examples of **correct** code for this rule with the `{ "align": "value" }` option:

选项 `{ "align": "value" }` 的 **正确** 代码示例：

```js
/*eslint key-spacing: ["error", { "align": "value" }]*/

var obj = {
    a:    value,
    bcde: 42,

    fg: foo(),
    h:  function() {
        return this.a;
    },
    ijkl: 'Non-consecutive lines form a new group'
};

var obj = { a: "foo", longPropertyName: "bar" };
```

Examples of **incorrect** code for this rule with the `{ "align": "colon" }` option:

选项 `{ "align": "colon" }` 的 **错误** 代码示例：

```js
/*eslint key-spacing: ["error", { "align": "colon" }]*/

call({
    foobar: 42,
    bat:    2 * 2
});
```

Examples of **correct** code for this rule with the `{ "align": "colon" }` option:

选项 `{ "align": "colon" }` 的 **正确** 代码示例：

```js
/*eslint key-spacing: ["error", { "align": "colon" }]*/

call({
    foobar: 42,
    bat   : 2 * 2
});
```

### singleLine and multiLine

Examples of **correct** code for this rule with sample `{ "singleLine": { }, "multiLine": { } }` options:

选项 `{ "singleLine": { }, "multiLine": { } }` 的 **正确** 代码示例：

```js
/*eslint "key-spacing": [2, {
    "singleLine": {
        "beforeColon": false,
        "afterColon": true
    },
    "multiLine": {
        "beforeColon": true,
        "afterColon": true,
        "align": "colon"
    }
}]*/
var obj = { one: 1, "two": 2, three: 3 };
var obj2 = {
    "two" : 2,
    three : 3
};
```

## When Not To Use It

If you have another convention for property spacing that might not be consistent with the available options, or if you want to permit multiple styles concurrently you can safely disable this rule.

对属性空格，如果你有其它约定，与上面可用的选项不一致；或者你允许同时使用多种风格，你可以关闭此规则。

## Version

This rule was introduced in ESLint 0.9.0.

该规则在 ESLint 0.9.0 中被引入。

## Resources

* [Rule source](https://github.com/eslint/eslint/tree/master/lib/rules/key-spacing.js)
* [Documentation source](https://github.com/eslint/eslint/tree/master/docs/rules/key-spacing.md)
