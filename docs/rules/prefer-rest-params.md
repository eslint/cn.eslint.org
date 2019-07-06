---
title: prefer-rest-params - Rules
layout: doc
edit_link: https://github.com/eslint/eslint/edit/master/docs/rules/prefer-rest-params.md
rule_type: suggestion
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# Suggest using the rest parameters instead of `arguments` (prefer-rest-params)

# 建议使用剩余参数代替 `arguments` (prefer-rest-params)

There are rest parameters in ES2015.
We can use that feature for variadic functions instead of the `arguments` variable.

ES2015 里有剩余参数。我们可以利用这个特性代替变参函数的 `arguments` 变量。

`arguments` does not have methods of `Array.prototype`, so it's a bit of an inconvenience.

`arguments` 没有 `Array.prototype` 方法，所以有点不方便。

## Rule Details

This rule is aimed to flag usage of `arguments` variables.

该规则旨在减少 `arguments` 变量的使用。

## Examples

Examples of **incorrect** code for this rule:

**错误** 的代码示例：

```js
function foo() {
    console.log(arguments);
}

function foo(action) {
    var args = Array.prototype.slice.call(arguments, 1);
    action.apply(null, args);
}

function foo(action) {
    var args = [].slice.call(arguments, 1);
    action.apply(null, args);
}
```

Examples of **correct** code for this rule:

**正确** 的代码示例：

```js
function foo(...args) {
    console.log(args);
}

function foo(action, ...args) {
    action.apply(null, args); // or `action(...args)`, related to the `prefer-spread` rule.
}

// Note: the implicit arguments can be overwritten.
function foo(arguments) {
    console.log(arguments); // This is the first argument.
}
function foo() {
    var arguments = 0;
    console.log(arguments); // This is a local variable.
}
```

## When Not To Use It

This rule should not be used in ES3/5 environments.

该规则不应该在 ES3/5 环境中使用。

In ES2015 (ES6) or later, if you don't want to be notified about `arguments` variables, then it's safe to disable this rule.

在 ES2015 (ES6) 或更高的版本中，如果你不想收到关于 `arguments` 变量的通知，那么禁用此规则。

## Related Rules

* [prefer-spread](prefer-spread)

## Version

This rule was introduced in ESLint 2.0.0-alpha-1.

该规则在 ESLint 2.0.0-alpha-1 中被引入。

## Resources

* [Rule source](https://github.com/eslint/eslint/tree/master/lib/rules/prefer-rest-params.js)
* [Documentation source](https://github.com/eslint/eslint/tree/master/docs/rules/prefer-rest-params.md)
