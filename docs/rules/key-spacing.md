---
title: key-spacing - Rules
layout: doc
edit_link: https://github.com/eslint/eslint/edit/master/docs/rules/key-spacing.md
rule_type: layout
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# enforce consistent spacing between keys and values in object literal properties (key-spacing)

# 强制在对象字面量的键和值之间使用一致的空格 (key-spacing)

(fixable) The `--fix` option on the [command line](../user-guide/command-line-interface#fixing-problems) can automatically fix some of the problems reported by this rule.

(fixable) [命令行](../user-guide/command-line-interface#fixing-problems)中的 `--fix` 选项可以自动修复一些该规则报告的问题。

This rule enforces spacing around the colon in object literal properties. It can verify each property individually, or it can ensure horizontal alignment of adjacent properties in an object literal.

该规则强制对象属性的冒号左右的空格的一致性。它可以单独验证每一个属性，或它可以确保对象中的属性在垂直方向上对齐。

## Rule Details

This rule enforces consistent spacing between keys and values in object literal properties. In the case of long lines, it is acceptable to add a new line wherever whitespace is allowed.

该规则强制在对象字面量的键和值之间使用一致的空格。如果某一行很长的话，在允许空白出现的情况下，可以增加一空行，这种情况是该规则可以接受的。

## Options

This rule has an object option:

该规则有一个对象选项：

* `"beforeColon": false (default) | true`
* `"beforeColon": false (默认) | true`
    * `false`: disallows spaces between the key and the colon in object literals.
    * `false`: 禁止在对象字面量的键和冒号之间存在空格
    * `true`: requires at least one space between the key and the colon in object literals.
    * `true`: 要求在对象字面量的键和冒号之间存在至少有一个空格
* `"afterColon": true (default) | false`
* `"afterColon": true (默认) | false`
    * `true`: requires at least one space between the colon and the value in object literals.
    * `true`: 要求在对象字面量的冒号和值之间存在至少有一个空格
    * `false`: disallows spaces between the colon and the value in object literals.
    * `false`: 禁止在对象字面量的冒号和值之间存在空格
* `"mode": "strict" (default) | "minimum"`
* `"mode": "strict" (默认) | "minimum"`
    * `"strict"`: enforces exactly one space before or after colons in object literals.
    * `"strict"`: 强制在冒号前后只有一个空格
    * `"minimum"`: enforces one or more spaces before or after colons in object literals.
    * `"minimum"`: 要求在冒号前后最少有一个空格
* `"align": "value" | "colon"`
* `"align": "value" | "colon"`
    * `"value"`: enforces horizontal alignment of values in object literals.
    * `"value"`: 要求对象字面量中的值水平对齐
    * `"colon"` enforces horizontal alignment of both colons and values in object literals.
    * `"colon"` 要求对象字面量中的冒号和值都水平对齐
* `"align"` with an object value allows for fine-grained spacing when values are being aligned in object literals.
* `"align"` 允许细粒度的控制对象字面量值的间距直到对齐
* `"singleLine"` specifies a spacing style for single-line object literals.
* `"singleLine"` 为单行对象字面量指定一个空格风格
* `"multiLine"` specifies a spacing style for multi-line object literals.
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

### align

The `align` option can take additional configuration through the `beforeColon`, `afterColon`, `mode`, and `on` options.

`align` 选项可以通过 `beforeColon`、`afterColon`、`mode` 和 `on` 进行额外的配置。

If `align` is defined as an object, but not all of the parameters are provided, undefined parameters will default to the following:

如果 `align` 被定义为一个对象，但是没有提供所有的参数，那么，未定义的参数将默认为：

```js
// Defaults
align: {
    "beforeColon": false,
    "afterColon": true,
    "on": "colon",
    "mode": "strict"
}
```

Examples of **correct** code for this rule with sample `{ "align": { } }` options:

选项 `{ "align": { } }` 的 **正确** 代码示例：

```js
/*eslint key-spacing: ["error", {
    "align": {
        "beforeColon": true,
        "afterColon": true,
        "on": "colon"
    }
}]*/

var obj = {
    "one"   : 1,
    "seven" : 7
}
```

```js
/*eslint key-spacing: ["error", {
    "align": {
        "beforeColon": false,
        "afterColon": false,
        "on": "value"
    }
}]*/

var obj = {
    "one":  1,
    "seven":7
}
```

### align and multiLine

The `multiLine` and `align` options can differ, which allows for fine-tuned control over the `key-spacing` of your files.  `align` will **not** inherit from `multiLine` if `align` is configured as an object.

`multiLine` 和 `align` 选项可以有所区别，这将允许对你的文件进行更细粒度的控制 `key-spacing`。如果 `align` 被配置为一个对象，`align` **将不会** 从 `multiLine` 继承。

`multiLine` is used any time  an object literal spans multiple lines.  The `align` configuration is used when there is a group of properties in the same object. For example:

`multiLine` 可以在任何时候被用在跨行的对象字面量上。而当一个对象有多个属性时，使用 `align` 配置。 

```javascript
var myObj = {
  key1: 1, // uses multiLine

  key2: 2, // uses align (when defined)
  key3: 3, // uses align (when defined)

  key4: 4 // uses multiLine
}

```

Examples of **incorrect** code for this rule with sample `{ "align": { }, "multiLine": { } }` options:

选项 `{ "align": { }, "multiLine": { } }` 的 **错误** 代码示例：

```js
/*eslint key-spacing: ["error", {
    "multiLine": {
        "beforeColon": false,
        "afterColon":true
    },
    "align": {
        "beforeColon": true,
        "afterColon": true,
        "on": "colon"
    }
}]*/

var obj = {
    "myObjectFunction": function() {
        // Do something
    },
    "one"             : 1,
    "seven"           : 7
}
```

Examples of **correct** code for this rule with sample `{ "align": { }, "multiLine": { } }` options:

选项 `{ "align": { }, "multiLine": { } }` 的 **正确** 代码示例：

```js
/*eslint key-spacing: ["error", {
    "multiLine": {
        "beforeColon": false,
        "afterColon": true

    },
    "align": {
        "beforeColon": true,
        "afterColon": true,
        "on": "colon"
    }
}]*/

var obj = {
    "myObjectFunction": function() {
        // Do something
        //
    }, // These are two separate groups, so no alignment between `myObjectFuction` and `one`
    "one"   : 1,
    "seven" : 7 // `one` and `seven` are in their own group, and therefore aligned
}
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
