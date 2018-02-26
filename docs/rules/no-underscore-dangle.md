---
title: no-underscore-dangle - Rules
layout: doc
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# disallow dangling underscores in identifiers (no-underscore-dangle)

# 禁止标识符中有悬空下划线 (no-underscore-dangle)

As far as naming conventions for identifiers go, dangling underscores may be the most polarizing in JavaScript. Dangling underscores are underscores at either the beginning or end of an identifier, such as:

在 JavaScript 中，就标识符命名规范而言，悬空下划线可能是最两极分化的了。悬空下划线是在标识符的开头或末尾的下划线，例如:

```js
var _foo;
```

There is actually a long history of using dangling underscores to indicate "private" members of objects in JavaScript (though JavaScript doesn't have truly private members, this convention served as a warning). This began with SpiderMonkey adding nonstandard methods such as `__defineGetter__()`. The intent with the underscores was to make it obvious that this method was special in some way. Since that time, using a single underscore prefix has become popular as a way to indicate "private" members of objects.

事实上，在 JavaScript 中有很长一段历史使用悬空下划线来表示对象中的“私有”成员(虽然 JavaScript 并没有正真的私有成员，这个约定起警示作用)。这始于 SpiderMonkey 添加的非标准方法，比如 `__defineGetter__()`。下划线的意图是让它很明显的看出这个方法在某种程度上很特别。从那时起，使用单个下划线作为前缀来表示对象的“私有”成员变得流行起来。

Whether or not you choose to allow dangling underscores in identifiers is purely a convention and has no effect on performance, readability, or complexity. It's purely a preference.

是否选择允许悬空下划线出现在标识符中纯粹只是个约定，不会影响性能，可读性或复杂性。它纯粹是个人偏好。

## Rule Details

This rule disallows dangling underscores in identifiers.

该规则旨在消除标识符中悬空下划线的使用。

Examples of **incorrect** code for this rule:

**错误** 代码示例：

```js
/*eslint no-underscore-dangle: "error"*/

var foo_;
var __proto__ = {};
foo._bar();
```

Examples of **correct** code for this rule:

**正确** 代码示例：

```js
/*eslint no-underscore-dangle: "error"*/

var _ = require('underscore');
var obj = _.contains(items, item);
obj.__proto__ = {};
var file = __filename;
```

## Options

This rule has an object option:

该规则有一个对象选项：

* `"allow"` allows specified identifiers to have dangling underscores
* `"allow"` 允许指定标识符使用悬空下划线
* `"allowAfterThis": false` (default) disallows dangling underscores in members of the `this` object
* `"allowAfterThis": false` (默认) 禁止在 `this` 对象的成员变量上使用悬空下划线
* `"allowAfterSuper": false` (default) disallows dangling underscores in members of the `super` object
* `"allowAfterSuper": false` (默认) 禁止在 `super` 对象的成员变量上使用悬空下划线
* `"enforceInMethodNames": false` (default) allows dangling underscores in method names
* `"enforceInMethodNames": false` (默认) 允许在方法名中使用悬空下划线

### allow

Examples of additional **correct** code for this rule with the `{ "allow": ["foo_", "_bar"] }` option:

选项 `{ "allow": ["foo_", "_bar"] }` 的 **正确** 代码示例：

```js
/*eslint no-underscore-dangle: ["error", { "allow": ["foo_", "_bar"] }]*/

var foo_;
foo._bar();
```

### allowAfterThis

Examples of **correct** code for this rule with the `{ "allowAfterThis": true }` option:

选项 `{ "allowAfterThis": true }` 的 **正确** 代码示例：

```js
/*eslint no-underscore-dangle: ["error", { "allowAfterThis": true }]*/

var a = this.foo_;
this._bar();
```

### allowAfterSuper

Examples of **correct** code for this rule with the `{ "allowAfterSuper": true }` option:

选项 `{ "allowAfterSuper": true }` 的 **正确** 代码示例：

```js
/*eslint no-underscore-dangle: ["error", { "allowAfterSuper": true }]*/

var a = super.foo_;
super._bar();
```

### enforceInMethodNames

Examples of **incorrect** code for this rule with the `{ "enforceInMethodNames": true }` option:

选项 `{ "enforceInMethodNames": true }` 的 **错误** 代码示例：

```js
/*eslint no-underscore-dangle: ["error", { "enforceInMethodNames": true }]*/

class Foo {
  _bar() {}
}

class Foo {
  bar_() {}
}

const o = {
  _bar() {}
};

const o = {
  bar_() = {}
};
```

## When Not To Use It

If you want to allow dangling underscores in identifiers, then you can safely turn this rule off.

如果你允许标识符中有悬空下划线，你可以关闭此规则。

## Version

This rule was introduced in ESLint 0.0.9.

该规则在 ESLint 0.0.9 中被引入。

## Resources

* [Rule source](https://github.com/eslint/eslint/tree/master/lib/rules/no-underscore-dangle.js)
* [Documentation source](https://github.com/eslint/eslint/tree/master/docs/rules/no-underscore-dangle.md)
