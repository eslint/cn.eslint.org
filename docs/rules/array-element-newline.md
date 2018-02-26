---
title: array-element-newline - Rules
layout: doc
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# enforce line breaks between array elements (array-element-newline)

# 强制数组元素间出现换行 (array-element-newline)

(fixable) The `--fix` option on the [command line](../user-guide/command-line-interface#fix) can automatically fix some of the problems reported by this rule.

(fixable) [命令行](../user-guide/command-line-interface#fix)中的 `--fix` 选项可以自动修复一些该规则报告的问题。

A number of style guides require or disallow line breaks between array elements.

很多风格指南要求或禁止在数组元素间出现换行。

## Rule Details

This rule enforces line breaks between array elements.

该规则强制数组元素间的换行。

## Options

This rule has either a string option:

该规则有一个字符串选项：

* `"always"` (default) requires line breaks between array elements
* `"always"` (默认) 要求在数组元素间换行
* `"never"` disallows line breaks between array elements
* `"never"` 禁止在数组元素间换行

Or an object option (Requires line breaks if any of properties is satisfied. Otherwise, disallows line breaks):

或一个对象选项（只要有任何一个属性满足条件，要求换行。否则，禁止换行）：

* `"multiline": <boolean>` requires line breaks if there are line breaks inside elements. If this is false, this condition is disabled.
* `"multiline": <boolean>` 如果数组元素间有换行，则要求换行。如果为 false，该条件不生效。
* `"minItems": <number>` requires line breaks if the number of elements is at least the given integer. If this is 0, this condition will act the same as the option `"always"`. If this is `null` (the default), this condition is disabled.
* `"minItems": <number>` 如果数组元素的个数大于等于给定的整数，则要求换行。如果为 0，则该条件将和选项 `"always"` 一样。如果为 `null` (默认)，该条件不生效。

### always

Examples of **incorrect** code for this rule with the default `"always"` option:

默认选项 `"always"` 的 **错误** 代码示例：

```js
/*eslint array-element-newline: ["error", "always"]*/

var c = [1, 2];
var d = [1, 2, 3];
var e = [
    function foo() {
        dosomething();
    }, function bar() {
        dosomething();
    }
];
```

Examples of **correct** code for this rule with the default `"always"` option:

默认选项 `"always"` 的 **正确** 代码示例：

```js
/*eslint array-element-newline: ["error", "always"]*/

var a = [];
var b = [1];
var c = [1,
    2];
var d = [1,
    2,
    3];
var e = [
    function foo() {
        dosomething();
    },
    function bar() {
        dosomething();
    }
];
```

### never

Examples of **incorrect** code for this rule with the `"never"` option:

选项 `"never"` 的 **错误** 代码示例：

```js
/*eslint array-element-newline: ["error", "never"]*/

var c = [
    1,
    2
];
var d = [
    1,
    2,
    3
];
var e = [
    function foo() {
        dosomething();
    },
    function bar() {
        dosomething();
    }
];
```

Examples of **correct** code for this rule with the `"never"` option:

选项 `"never"` 的 **正确** 代码示例：

```js
/*eslint array-element-newline: ["error", "never"]*/

var a = [];
var b = [1];
var c = [1, 2];
var d = [1, 2, 3];
var e = [
    function foo() {
        dosomething();
    }, function bar() {
        dosomething();
    }
];
```

### multiline

Examples of **incorrect** code for this rule with the `{ "multiline": true }` option:

选项 `{ "multiline": true }` 的 **错误** 代码示例：

```js
/*eslint array-element-newline: ["error", { "multiline": true }]*/

var d = [1,
    2, 3];
var e = [
    function foo() {
        dosomething();
    }, function bar() {
        dosomething();
    }
];
```

Examples of **correct** code for this rule with the `{ "multiline": true }` option:

选项 `{ "multiline": true }` 的 **正确** 代码示例：

```js
/*eslint array-element-newline: ["error", { "multiline": true }]*/

var a = [];
var b = [1];
var c = [1, 2];
var d = [1, 2, 3];
var e = [
    function foo() {
        dosomething();
    },
    function bar() {
        dosomething();
    }
];
```

### minItems

Examples of **incorrect** code for this rule with the `{ "minItems": 3 }` option:

选项 `{ "minItems": 3 }` 的 **错误** 代码示例：

```js
/*eslint array-element-newline: ["error", { "minItems": 3 }]*/

var c = [1,
    2];
var d = [1, 2, 3];
var e = [
    function foo() {
        dosomething();
    },
    function bar() {
        dosomething();
    }
];
```

Examples of **correct** code for this rule with the `{ "minItems": 3 }` option:

选项 `{ "minItems": 3 }` 的 **正确** 代码示例：

```js
/*eslint array-element-newline: ["error", { "minItems": 3 }]*/

var a = [];
var b = [1];
var c = [1, 2];
var d = [1,
    2,
    3];
var e = [
    function foo() {
        dosomething();
    }, function bar() {
        dosomething();
    }
];
```

### multiline and minItems

Examples of **incorrect** code for this rule with the `{ "multiline": true, "minItems": 3 }` options:

选项 `{ "multiline": true, "minItems": 3 }` 的 **错误** 代码示例：

```js
/*eslint array-element-newline: ["error", { "multiline": true, "minItems": 3 }]*/

var c = [1,
2];
var d = [1, 2, 3];
var e = [
    function foo() {
        dosomething();
    }, function bar() {
        dosomething();
    }
];
```

Examples of **correct** code for this rule with the `{ "multiline": true, "minItems": 3 }` options:

选项 `{ "multiline": true, "minItems": 3 }` 的 **正确** 代码示例：

```js
/*eslint array-element-newline: ["error", { "multiline": true, "minItems": 3 }]*/

var a = [];
var b = [1];
var c = [1, 2];
var d = [1,
    2,
    3];
var e = [
    function foo() {
        dosomething();
    },
    function bar() {
        dosomething();
    }
];
```


## When Not To Use It

If you don't want to enforce linebreaks between array elements, don't enable this rule.

如果你不想强制数组元素间的换行，不要启用此规则。

## Compatibility

* **JSCS:** [validateNewlineAfterArrayElements](http://jscs.info/rule/validateNewlineAfterArrayElements)

## Related Rules

* [array-bracket-spacing](array-bracket-spacing)
* [array-bracket-newline](array-bracket-newline)
* [object-property-newline](object-property-newline)
* [object-curly-spacing](object-curly-spacing)
* [object-curly-newline](object-curly-newline)
* [max-statements-per-line](max-statements-per-line)
* [block-spacing](block-spacing)
* [brace-style](brace-style)

## Version

This rule was introduced in ESLint 4.0.0-rc.0.

该规则在 ESLint 4.0.0-rc.0 中被引入。

## Resources

* [Rule source](https://github.com/eslint/eslint/tree/master/lib/rules/array-element-newline.js)
* [Documentation source](https://github.com/eslint/eslint/tree/master/docs/rules/array-element-newline.md)
