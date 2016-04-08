---
title: Rule id-length
layout: doc
translator: molee1905
proofreader: sunshiner
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# Limit minimum and maximum length for identifiers (id-length)

# 标识符最大和最小长度限制 (id-length)

Very short identifier names like `e`, `x`, `_t` or very long ones like `hashGeneratorResultOutputContainerObject` usually make the code harder to read and potentially less maintainable. To prevent this, one may enforce a minimum and/or maximum identifier length. (usually min 2-chars)

非常短的标识符名称像`e`，`x`，`_t`或非常长的名称像`hashGeneratorResultOutputContainerObject`通常使代码难以阅读和潜在的不可维护性。为了防止这种情况出现，应该限制标识符的最大和/或最小长度。（一般最小2个字符）

```js
// id-length: 1  // default is minimum 2-chars ({ min: 2})
var x = 5; // too short
```

## Rule Details

This rule is aimed at increasing code readability and maintainability by enforcing an identifier length convention. It will warn on any type of identifier which doesn't conform to length limits (upper and lower).

该规则旨在通过限制标识符的长度来提高代码的可读性和可维护性。对不符合长度限制(上限和下限)的任何类型的标识符，它将发出警告。

It allows the programmers to silently by-pass this check by using `"quoted"` property names or calculated property access to allow potential server-side data requirements.

The following patterns are considered problems:

以下模式被认为是有问题的：

```js
/*eslint id-length: "error"*/     // default is minimum 2-chars ({ min: 2})
/*eslint-env es6*/

var x = 5;

obj.e = document.body;

var foo = function (e) { };

try {
    dangerousStuff();
} catch (e) {
    // ignore as many do
}

var myObj = { a: 1 };

(a) => { a * a };

function foo(x = 0) { }

class x { }

class Foo { x() {} }

function foo(...x) { }

var { x} = {};

var { x: a} = {};

var { a: [x]} = {};

({ a: obj.x.y.z }) = {};

({ prop: obj.x }) = {};
```

```
import x from 'y';

export var x = 0;
```

The following patterns are not considered problems:

以下模式被认为是没有问题的：

```js
/*eslint id-length: "error"*/     // default is minimum 2-chars ({ min: 2})
/*eslint-env es6*/

var num = 5;

function _f() { return 42; }

function _func() { return 42; }

obj.el = document.body;

var foo = function (evt) { /* do stuff */ };

try {
    dangerousStuff();
} catch (error) {
    // ignore as many do
}

var myObj = { apple: 1 };

(num) => { num * num };

function foo(num = 0) { }

class MyClass { }

class Foo { method() {} }

function foo(...args) { }

var { prop } = {};

var { prop: a } = {};

var { prop: [x] } = {};

({ prop: obj.x.y.something }) = {};

({ prop: obj.longName }) = {};

var data = { "x": 1 };  // excused because of quotes

data["y"] = 3;  // excused because of calculated property access
```

```
import something from "y";

export var num = 0;
```


## Options

The `id-length` rule has no required options and has 4 optional ones that needs to be passed in a single options object:

该规则没有必须选项，只有四个可选项被放置在一个对象中：

* **min** *(default: 2)*: The minimum number of characters an identifier name should be, after it is stripped from it is prefixes and suffixes

* **min** *(默认: 2)*: 抛开前缀和后缀，标识符名称的最小字符数

* **max** *(default: Infinity)*: The maximum number of characters an identifier name should be, after it is stripped from it is prefixes and suffixes

* **max** *(默认: 无穷大)*: 抛开前缀和后缀，标识符名称的最大字符数

* **properties** *(default: "always")*: If set to `"never"` does not check property names at all

* **properties** *(默认: "always")*: 如果设置为`"never"`，将不检测属性名称

* **exceptions**: An array of identifier names that the rule should not apply to

* **exceptions**: 不适用此规则的标识符数组

For example, to specify a minimum identifier length of 3, a maximum of 10, ignore property names and add `x` to exception list, use the following configuration:

例如，指定最小长度为3，最大长度为10，忽略属性名称，将`x`加入到例外列表中，使用如下配置：

```json
"id-length": ["error", {"min": 3, "max": 10, "properties": "never", "exceptions": ["x"]}]
```

The following patterns will not be considered problems

以下模式被认为是没有问题的：

```js
/*eslint id-length: ["error", {"properties": "never"}]*/
/*eslint-env es6*/

var myObj = { a: 1 };

({ a: obj.x.y.z }) = {};

({ prop: obj.x }) = {};
```

## Related Rules

* [max-len](max-len)
* [new-cap](new-cap)
* [func-names](func-names)
* [camelcase](camelcase)

## Version

This rule was introduced in ESLint 1.0.0.

该规则在 ESLint 1.0.0 被引入。

## Resources

* [Rule source](https://github.com/eslint/eslint/tree/master/lib/rules/id-length.js)
* [Documentation source](https://github.com/eslint/eslint/tree/master/docs/rules/id-length.md)
