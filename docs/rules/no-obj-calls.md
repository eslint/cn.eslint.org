---
title: no-obj-calls - Rules
layout: doc
edit_link: https://github.com/eslint/eslint/edit/master/docs/rules/no-obj-calls.md
rule_type: problem
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# disallow calling global object properties as functions (no-obj-calls)

# 禁止将全局对象当作函数进行调用 (no-obj-calls)

(recommended) The `"extends": "eslint:recommended"` property in a configuration file enables this rule.

(recommended) 配置文件中的 `"extends": "eslint:recommended"` 属性启用了此规则。

ECMAScript provides several global objects that are intended to be used as-is. Some of these objects look as if they could be constructors due their capitalization (such as `Math` and `JSON`) but will throw an error if you try to execute them as functions.

ECMAScript 提供了几个全局对象，旨在直接调用。这些对象由于是大写的（比如 `Math` 和 `JSON`）看起来像是构造函数，但是如果你尝试像函数一样执行它们，将会抛出错误。

The [ECMAScript 5 specification](https://es5.github.io/#x15.8) makes it clear that both `Math` and `JSON` cannot be invoked:

[ECMAScript 5 规范](https://es5.github.io/#x15.8)明确表示 `Math` 和 `JSON` 是不能被调用的：

> The Math object does not have a `[[Call]]` internal property; it is not possible to invoke the Math object as a function.

> Math 对象没有 `[[Call]]` 内部属性，不能像一个函数一样调用 Math 对象

And the [ECMAScript 2015 specification](https://www.ecma-international.org/ecma-262/6.0/index.html#sec-reflect-object) makes it clear that `Reflect` cannot be invoked:

[ECMAScript 2015 specification](https://www.ecma-international.org/ecma-262/6.0/index.html#sec-reflect-object) 明确表明 `Reflect` 不能被调用：

> The Reflect object also does not have a `[[Call]]` internal method; it is not possible to invoke the Reflect object as a function.

> Reflect 对象没有 `[[Call]]` 内置方法；无法像调用函数一样调用 Reflect 对象。

## Rule Details

This rule disallows calling the `Math`, `JSON` and `Reflect` objects as functions.

该规则禁止将 `Math`、`JSON` 和 `Reflect` 对象当作函数进行调用。

Examples of **incorrect** code for this rule:

**错误** 代码示例：

```js
/*eslint no-obj-calls: "error"*/

var math = Math();
var json = JSON();
var reflect = Reflect();
```

Examples of **correct** code for this rule:

**正确** 代码示例：

```js
/*eslint no-obj-calls: "error"*/

function area(r) {
    return Math.PI * r * r;
}
var object = JSON.parse("{}");
var value = Reflect.get({ x: 1, y: 2 }, "x");
```

## Further Reading

* [The Math Object](https://es5.github.io/#x15.8)

## Version

This rule was introduced in ESLint 0.0.9.

该规则在 ESLint 0.0.9 中被引入。

## Resources

* [Rule source](https://github.com/eslint/eslint/tree/master/lib/rules/no-obj-calls.js)
* [Documentation source](https://github.com/eslint/eslint/tree/master/docs/rules/no-obj-calls.md)
