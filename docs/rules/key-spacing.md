---
title: Rule key-spacing
layout: doc
translator: molee1905
proofreader: molee1905
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# Enforce Property Spacing (key-spacing)

# 强制属性空格 (key-spacing)

This rule enforces spacing around the colon in object literal properties. It can verify each property individually, or it can ensure vertical alignment of groups of properties in an object literal.

该规则强制对象属性的冒号左右的空格的一致性。它可以单独验证每一个属性，或它可以确保对象中的属性在垂直方向上对齐。

## Rule Details

This rule will warn when spacing in properties does not match the specified options. In the case of long lines, it is acceptable to add a new line wherever whitespace is allowed. 

当属性中的空格与指定的选项不匹配时，该规则将发出警告。如果某一行很长的话，在允许空白出现的情况下，可以增加一空行，这种情况是该规则可以接受的。

## Options

Use the `beforeColon`, `afterColon` and `mode` options to enforce having one space or zero spaces on each side, using `true` or `false`, respectively. The default is no whitespace between the key and the colon and one space between the colon and the value.

使用`beforeColon`，`afterColon` 和 `mode`选项确保没冒号每一边有一个或零个空格，对应的值为`true` 或 `false`。默认情况下，在属性和冒号之间没有空白，在冒号和属性值之间有一个空格。

`mode` option can be either `"strict"` or `"minimum"` and defaults to `"strict"`. In `strict` mode, it enforces exactly 1 space before or after the colon where as in `minimum` mode, it enforces at least 1 space but more are okay.

`mode`选项可以是 `"strict"` 或者 `"minimum"`，默认为`"strict"`。在`strict`模式下，它强制在冒号左右只有一个空格，在`"minimum"`模式下，它强制至少要有一个空格，多个空格也是可以的。

The following patterns are considered valid:

以下模式被认为是有效的：

```js
// DEFAULT
/*eslint key-spacing: ["error", {"beforeColon": false, "afterColon": true}]*/

var obj = { "foo": (42) };

foo = { thisLineWouldBeTooLong:
    soUseAnotherLine };
```

```js
/*eslint key-spacing: ["error", {"beforeColon": true, "afterColon": false}]*/

call({
    foobar :42,
    bat :(2 * 2)
});
```

```js
/*eslint key-spacing: ["error", {"beforeColon": true, "afterColon": false, "mode": "minimum"}]*/

call({
    foobar   :42,
    bat :(2 * 2)
});
```

The following patterns are considered problems:

以下模式被认为是有问题的：

```js
/*eslint key-spacing: ["error", {"beforeColon": false, "afterColon": false}]*/

var obj = { foo: 42 };
var bar = { baz :52 };

foo = { thisLineWouldBeTooLong:
    soUseAnotherLine };
```

```js
/*eslint key-spacing: ["error", {"beforeColon": true, "afterColon": true}]*/

function foo() {
    return {
        foobar: 42,
        bat :"value"
    };
}
```

```js
/*eslint key-spacing: ["error", {"beforeColon": true, "afterColon": true}]*/

function foo() {
    return {
        foobar  : 42,
        bat :  "value"
    };
}
```

### `"align": "value"`

Use the `align` option to enforce vertical alignment of values in an object literal. This mode still respects `beforeColon` and `afterColon` where possible, but it will pad with spaces after the colon where necessary. Groups of properties separated by blank lines are considered distinct and can have different alignment than other groups. Single line object literals will not be checked for vertical alignment, but each property will still be checked for `beforeColon` and `afterColon`.

使用`align`选项强制一个对象的值在垂直方向上对齐。该模式下`beforeColon` 和 `afterColon`仍然起作用，但它将在必要的时候在冒号后面填充空格。被空行分开的属性分组被认为是彼此不相同的，可以有不同的对其方式。对于单行对象，不会检查其对其方式，但其每个属性仍将被检查`beforeColon` 和 `afterColon`。

The following patterns are considered valid:

以下模式被认为是有效的：

```js
/*eslint key-spacing: ["error", { "align": "value" }]*/
// beforeColon and afterColon default to false and true, respectively

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

```js
/*eslint key-spacing: ["error", { "align": "value", "beforeColon": true, "afterColon": false }]*/

call({
    'a' :[],
    b :  []
});
```

The following patterns are considered problems:

以下模式被认为是问题的：

```js
/*eslint key-spacing: ["error", { "align": "value" }]*/

var obj = {
    a: value,
    bcde:  42,
    fg :   foo()
};
```

### `"align": "colon"`

The `align` option can also vertically align colons and values together. Whereas with `"value"` alignment, padding belongs right of the colon, with `"colon"` alignment, padding goes to the left of the colon. Except in the case of padding, it still respects `beforeColon` and `afterColon`. As with `"value"` alignment, groups of properties separated by blank lines are considered distinct and can have different alignment than other groups.

`align`选项可以同时支持冒号和值的垂直对其。然而，`"value"`对齐方式，将在冒号右侧进行填充，`"colon"`对齐方式将在冒号左侧进行填充。除了填充，对`beforeColon` 和 `afterColon`仍起作用。与`"value"`对其方式一样，被空行分开的属性分组被认为是彼此不相同的，可以有不同的对其方式。

The following patterns are considered valid:

以下模式被认为是有效的：

```js
/*eslint key-spacing: ["error", { "align": "colon" }]*/

var obj = {
    foobar   : 42,
    bat      : (2 * 2),
    "default": fn(),

    fn : function() {},
    abc: value
};
```

```js
/*eslint key-spacing: ["error", { "align": "colon", "beforeColon": true, "afterColon": false }]*/

obj = {
    first  :1,
    second :2,
    third  :3
};
```

The following patterns are considered problems:

以下模式被认为是有问题的：

```js
/*eslint key-spacing: ["error", { "align": "colon" }]*/

var obj = {
    one:   1,
    "two": 2,
    three:  3
};
```

### Fine-grained control

You can specify these options separately for single-line and multi-line configurations by organizing the options this way:

你可以通过下面的方式对单行或多行分开指定这些选项：

```js
"key-spacing": [2, {
    "singleLine": {
        "beforeColon": false,
        "afterColon": true
    },
    "multiLine": {
        "beforeColon": true,
        "afterColon": true,
        "align": "colon"
    }
}]
```

The following patterns are considered valid:

以下模式被认为是有效的：

```js
var obj = {one: 1, "two": 2, three: 3}; /* valid due to `singleLine:{ beforeColon: false }`*/
var obj2 = {
    "two" : 2,
    three : 3
};
```

Please note that you can either use the top-level options or the grouped options (`singleLine` and `multiLine`) but not both.

请注意，你可以使用顶级选项或组合选项(`singleLine` 和 `multiLine`)，但不要同时使用。

## When Not To Use It

If you have another convention for property spacing that might not be consistent with the available options, or if you want to permit multiple styles concurrently you can safely disable this rule.

关于属性间隔，如果你有其它的约定规范，而且与以上可用的选项不相符或者你允许多种风格同时出现，关闭此规则即可。

## Version

This rule was introduced in ESLint 0.9.0.

该规则在 ESLint 0.9.0 中被引入。

## Resources

* [Rule source](https://github.com/eslint/eslint/tree/master/lib/rules/key-spacing.js)
* [Documentation source](https://github.com/eslint/eslint/tree/master/docs/rules/key-spacing.md)
