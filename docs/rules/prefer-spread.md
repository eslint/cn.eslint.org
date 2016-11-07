---
title: prefer-spread - Rules
layout: doc
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# Suggest using the spread operator instead of `.apply()`. (prefer-spread)

# 建议使用扩展运算符而非`.apply()` (prefer-spread)

(fixable) The `--fix` option on the [command line](../user-guide/command-line-interface#fix) automatically fixes problems reported by this rule.

(fixable) [命令行](../user-guide/command-line-interface#fix)中的 `--fix` 选项可以自动修复该规则报告的问题。

Before ES2015, one must use `Function.prototype.apply()` to call variadic functions.

在 ES2015 之前，必须使用 `Function.prototype.apply()` 调用可变参数函数。

```js
var args = [1, 2, 3, 4];
Math.max.apply(Math, args);
```

In ES2015, one can use the spread operator to call variadic functions.

在 ES2015 中，可以使用扩展运算符调用可变参数函数。

```js
/*eslint-env es6*/

var args = [1, 2, 3, 4];
Math.max(...args);
```

## Rule Details

This rule is aimed to flag usage of `Function.prototype.apply()` in situations where the spread operator could be used instead.

## Examples

Examples of **incorrect** code for this rule:

**错误** 代码示例：

```js
/*eslint prefer-spread: "error"*/

foo.apply(undefined, args);

foo.apply(null, args);

obj.foo.apply(obj, args);
```

Examples of **correct** code for this rule:

**正确** 代码示例：

```js
/*eslint prefer-spread: "error"*/

// The `this` binding is different.
foo.apply(obj, args);
obj.foo.apply(null, args);
obj.foo.apply(otherObj, args);

// The argument list is not variadic.
// Those are warned by the `no-useless-call` rule.
foo.apply(undefined, [1, 2, 3]);
foo.apply(null, [1, 2, 3]);
obj.foo.apply(obj, [1, 2, 3]);
```

Known limitations:

已知的限制：

This rule analyzes code statically to check whether or not the `this` argument is changed. So, if the `this` argument is computed in a dynamic expression, this rule cannot detect a violation.

该规则通过静态分析代码的方式检查`this`参数是否有改变。因此，如果在动态表达式中有 `this` 参数，该规则不会检查这种情况。

```js
/*eslint prefer-spread: "error"*/

// This warns.
a[i++].foo.apply(a[i++], args);

// This does not warn.
a[++i].foo.apply(a[i], args);
```

## When Not To Use It

This rule should not be used in ES3/5 environments.

此规则不应在 ES3/5 环境中使用。

In ES2015 (ES6) or later, if you don't want to be notified about `Function.prototype.apply()` callings, you can safely disable this rule.

在 ES2015 (ES6) 或以后的版本，如果你不希望收到关于 `Function.prototype.apply()` 调用的通知，关闭此规则即可。

## Related Rules

* [no-useless-call](no-useless-call)

## Version

This rule was introduced in ESLint 1.0.0-rc-1.

该规则在 ESLint 1.0.0-rc-1 中被引入。

## Resources

* [Rule source](https://github.com/eslint/eslint/tree/master/lib/rules/prefer-spread.js)
* [Documentation source](https://github.com/eslint/eslint/tree/master/docs/rules/prefer-spread.md)
