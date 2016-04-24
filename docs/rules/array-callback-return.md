---
title: Rule array-callback-return
layout: doc
translator: molee1905
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# Enforces return statements in callbacks of array's methods (array-callback-return)

# 强制数组方法的回调函数中有 return 语句 (array-callback-return)

`Array` has several methods for filtering, mapping, and folding.
If we forget to write `return` statement in a callback of those, it's probably a mistake.

`Array`有一些方法用来过滤、映射和折叠。如果你忘记了在它们的回调函数中写`return`语句，这种情况可能是个错误。

```js
// example: convert ['a', 'b', 'c'] --> {a: 0, b: 1, c: 2}
var indexMap = myArray.reduce(function(memo, item, index) {
  memo[item] = index;
}, {}); // Error: cannot set property 'b' of undefined
```

This rule enforces usage of `return` statement in callbacks of array's methods.

该规则强制数组方法的回调函数中的`return`语句的使用。

## Rule Details

This rule finds callback functions of the following methods, then checks usage of `return` statement.

该规则发现以下方法的回调函数，然后检查`return`语句的使用。

* [`Array.from`](http://www.ecma-international.org/ecma-262/6.0/#sec-array.from)
* [`Array.from`](http://www.ecma-international.org/ecma-262/6.0/#sec-array.from)
* [`Array.prototype.every`](http://www.ecma-international.org/ecma-262/6.0/#sec-array.prototype.every)
* [`Array.prototype.every`](http://www.ecma-international.org/ecma-262/6.0/#sec-array.prototype.every)
* [`Array.prototype.filter`](http://www.ecma-international.org/ecma-262/6.0/#sec-array.prototype.filter)
* [`Array.prototype.filter`](http://www.ecma-international.org/ecma-262/6.0/#sec-array.prototype.filter)
* [`Array.prototype.find`](http://www.ecma-international.org/ecma-262/6.0/#sec-array.prototype.find)
* [`Array.prototype.find`](http://www.ecma-international.org/ecma-262/6.0/#sec-array.prototype.find)
* [`Array.prototype.findIndex`](http://www.ecma-international.org/ecma-262/6.0/#sec-array.prototype.findIndex )
* [`Array.prototype.findIndex`](http://www.ecma-international.org/ecma-262/6.0/#sec-array.prototype.findIndex )
* [`Array.prototype.map`](http://www.ecma-international.org/ecma-262/6.0/#sec-array.prototype.map)
* [`Array.prototype.map`](http://www.ecma-international.org/ecma-262/6.0/#sec-array.prototype.map)
* [`Array.prototype.reduce`](http://www.ecma-international.org/ecma-262/6.0/#sec-array.prototype.reduce)
* [`Array.prototype.reduce`](http://www.ecma-international.org/ecma-262/6.0/#sec-array.prototype.reduce)
* [`Array.prototype.reduceRight`](http://www.ecma-international.org/ecma-262/6.0/#sec-array.prototype.reduceRight)
* [`Array.prototype.reduceRight`](http://www.ecma-international.org/ecma-262/6.0/#sec-array.prototype.reduceRight)
* [`Array.prototype.some`](http://www.ecma-international.org/ecma-262/6.0/#sec-array.prototype.some)
* [`Array.prototype.some`](http://www.ecma-international.org/ecma-262/6.0/#sec-array.prototype.some)
* [`Array.prototype.sort`](http://www.ecma-international.org/ecma-262/6.0/#sec-array.prototype.sort)
* [`Array.prototype.sort`](http://www.ecma-international.org/ecma-262/6.0/#sec-array.prototype.sort)
* And above of typed arrays.
* 以上类型的数据。

Examples of **incorrect** code for this rule:

**错误**代码示例：

```js
/*eslint array-callback-return: "error"*/

var indexMap = myArray.reduce(function(memo, item, index) {
    memo[item] = index;
}, {});

var foo = Array.from(nodes, function(node) {
    if (node.tagName === "DIV") {
        return true;
    }
});

var bar = foo.filter(function(x) {
    if (x) {
        return true;
    } else {
        return;
    }
});
```

Examples of **correct** code for this rule:

**正确**代码示例：

```js
/*eslint array-callback-return: "error"*/

var indexMap = myArray.reduce(function(memo, item, index) {
    memo[item] = index;
    return memo;
}, {});

var foo = Array.from(nodes, function(node) {
    if (node.tagName === "DIV") {
        return true;
    }
    return false;
});

var bar = foo.map(node => node.getAttribute("id"));
```

## Known Limitations

This rule checks callback functions of methods with the given names, *even if* the object which has the method is *not* an array.

该规则检查给定名称的方法中的回调函数，*即使*该对象中的方法 *不是*一个数组。

## When Not To Use It

If you don't want to warn about usage of `return` statement in callbacks of array's methods, then it's safe to disable this rule.

如果你不想收到关于强制数组方法的回调函数中`return`语句的使用情况的警告，你可以禁用此规则。

## Version

This rule was introduced in ESLint 2.0.0-alpha-1.

该规则在 ESLint 2.0.0-alpha-1 中被引入。

## Resources

* [Rule source](https://github.com/eslint/eslint/tree/master/lib/rules/array-callback-return.js)
* [Documentation source](https://github.com/eslint/eslint/tree/master/docs/rules/array-callback-return.md)