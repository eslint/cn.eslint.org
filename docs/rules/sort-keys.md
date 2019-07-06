---
title: sort-keys - Rules
layout: doc
edit_link: https://github.com/eslint/eslint/edit/master/docs/rules/sort-keys.md
rule_type: suggestion
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# require object keys to be sorted (sort-keys)

# 要求对象属性按序排列 (sort-keys)

When declaring multiple properties, some developers prefer to sort property names alphabetically to be able to find necessary property easier at the later time. Others feel that it adds complexity and becomes burden to maintain.

当声明多个属性是，一些开发人员倾向于属性按字母顺序进行排列，可以在以后更容易地找到必要的属性。其他人则认为对属性进行排序增加了复杂性，并成为维护的负担。

## Rule Details

This rule checks all property definitions of object expressions and verifies that all variables are sorted alphabetically.

该规则检查对象表达式中所有属性的定义，确认所有变量都是按字母顺序排序的。

Examples of **incorrect** code for this rule:

**错误** 代码示例：

```js
/*eslint sort-keys: "error"*/
/*eslint-env es6*/

let obj = {a: 1, c: 3, b: 2};
let obj = {a: 1, "c": 3, b: 2};

// Case-sensitive by default.
let obj = {a: 1, b: 2, C: 3};

// Non-natural order by default.
let obj = {1: a, 2: c, 10: b};

// This rule checks computed properties which have a simple name as well.
// Simple names are names which are expressed by an Identifier node or a Literal node.
const S = Symbol("s")
let obj = {a: 1, ["c"]: 3, b: 2};
let obj = {a: 1, [S]: 3, b: 2};
```

Examples of **correct** code for this rule:

**正确** 代码示例：

```js
/*eslint sort-keys: "error"*/
/*eslint-env es6*/

let obj = {a: 1, b: 2, c: 3};
let obj = {a: 1, "b": 2, c: 3};

// Case-sensitive by default.
let obj = {C: 3, a: 1, b: 2};

// Non-natural order by default.
let obj = {1: a, 10: b, 2: c};

// This rule checks computed properties which have a simple name as well.
let obj = {a: 1, ["b"]: 2, c: 3};
let obj = {a: 1, [b]: 2, c: 3};

// This rule ignores computed properties which have a non-simple name.
let obj = {a: 1, [c + d]: 3, b: 2};
let obj = {a: 1, ["c" + "d"]: 3, b: 2};
let obj = {a: 1, [`${c}`]: 3, b: 2};
let obj = {a: 1, [tag`c`]: 3, b: 2};

// This rule does not report unsorted properties that are separated by a spread property.
let obj = {b: 1, ...c, a: 2};
```

## Options

```json
{
    "sort-keys": ["error", "asc", {"caseSensitive": true, "natural": false}]
}
```

The 1st option is `"asc"` or `"desc"`.

第一个选项是 `"asc"` 或 `"desc"`。

* `"asc"` (default) - enforce properties to be in ascending order.
* `"asc"` (默认) - 强制所有属性按升序排列。
* `"desc"` - enforce properties to be in descending order.
* `"desc"` - 强制所有属性按降序排列。

The 2nd option is an object which has 2 properties.

第二个选项是个对象，有 2 个属性。

* `caseSensitive` - if `true`, enforce properties to be in case-sensitive order. Default is `true`.
* `caseSensitive` - 如果为 `true`，强制所有属性排序区分大小写。默认为 `true`。
* `natural` - if `true`, enforce properties to be in natural order. Default is `false`. Natural Order compares strings containing combination of letters and numbers in the way a human being would sort. It basically sorts numerically, instead of sorting alphabetically. So the number 10 comes after the number 3 in Natural Sorting.
* `natural` - 如果为 `true` 强制所有属性按自然顺序排列。默认为 `false`。自然顺序以人的排序方式进行排序，比较包含字母和数字的字符串。它基本上上是按数字排序的，而不是按字母顺序排序。所以在自然顺序排序中数字 10 排在数字 3。

Example for a list:

比如：

With `natural` as true, the ordering would be

`natural` 为 true，排序结果为：

```
1
3
6
8
10
```

With `natural` as false, the ordering would be

`natural` 为 false，排序结果为：

```
1
10
3
6
8
```

### desc

Examples of **incorrect** code for the `"desc"` option:

选项 `"desc"` 的 **错误** 代码示例：

```js
/*eslint sort-keys: ["error", "desc"]*/
/*eslint-env es6*/

let obj = {b: 2, c: 3, a: 1};
let obj = {"b": 2, c: 3, a: 1};

// Case-sensitive by default.
let obj = {C: 1, b: 3, a: 2};

// Non-natural order by default.
let obj = {10: b, 2: c, 1: a};
```

Examples of **correct** code for the `"desc"` option:

选项 `"desc"` 的 **正确** 代码示例：

```js
/*eslint sort-keys: ["error", "desc"]*/
/*eslint-env es6*/

let obj = {c: 3, b: 2, a: 1};
let obj = {c: 3, "b": 2, a: 1};

// Case-sensitive by default.
let obj = {b: 3, a: 2, C: 1};

// Non-natural order by default.
let obj = {2: c, 10: b, 1: a};
```

### insensitive

Examples of **incorrect** code for the `{caseSensitive: false}` option:

选项 `{caseSensitive: false}` 的 **错误** 代码示例：

```js
/*eslint sort-keys: ["error", "asc", {caseSensitive: false}]*/
/*eslint-env es6*/

let obj = {a: 1, c: 3, C: 4, b: 2};
let obj = {a: 1, C: 3, c: 4, b: 2};
```

Examples of **correct** code for the `{caseSensitive: false}` option:

选项 `{caseSensitive: false}` 的 **正确** 代码示例：

```js
/*eslint sort-keys: ["error", "asc", {caseSensitive: false}]*/
/*eslint-env es6*/

let obj = {a: 1, b: 2, c: 3, C: 4};
let obj = {a: 1, b: 2, C: 3, c: 4};
```

### natural

Examples of **incorrect** code for the `{natural: true}` option:

选项 `{natural: true}` 的 **错误** 代码示例：

```js
/*eslint sort-keys: ["error", "asc", {natural: true}]*/
/*eslint-env es6*/

let obj = {1: a, 10: c, 2: b};
```

Examples of **correct** code for the `{natural: true}` option:

选项 `{natural: true}` 的 **正确** 代码示例：

```js
/*eslint sort-keys: ["error", "asc", {natural: true}]*/
/*eslint-env es6*/

let obj = {1: a, 2: b, 10: c};
```

## When Not To Use It

If you don't want to notify about properties' order, then it's safe to disable this rule.

如果你想收到关于属性顺序的通知，可以禁用此规则。

## Related Rules

* [sort-imports](sort-imports)
* [sort-vars](sort-vars)

## Compatibility

* **JSCS:** [validateOrderInObjectKeys](https://jscs-dev.github.io/rule/validateOrderInObjectKeys)

## Version

This rule was introduced in ESLint 3.3.0.

该规则在 ESLint 3.3.0 中被引入。

## Resources

* [Rule source](https://github.com/eslint/eslint/tree/master/lib/rules/sort-keys.js)
* [Documentation source](https://github.com/eslint/eslint/tree/master/docs/rules/sort-keys.md)
