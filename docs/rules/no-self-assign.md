---
title: no-self-assign - Rules
layout: doc
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# Disallow Self Assignment (no-self-assign)

# 禁止自身赋值 (no-self-assign)

Self assignments have no effect, so probably those are an error due to incomplete refactoring.
Those indicate that what you should do is still remaining.

自身赋值不起任何作用，可能是由于不完整的重构造成的错误。也表明你的工作还没做完。

```js
foo = foo;
[bar, baz] = [bar, qiz];
```

## Rule Details

This rule is aimed at eliminating self assignments.

该规则旨在消除自身赋值的情况。

Examples of **incorrect** code for this rule:

**错误** 代码示例：

```js
/*eslint no-self-assign: "error"*/

foo = foo;

[a, b] = [a, b];

[a, ...b] = [x, ...b];

({a, b} = {a, x});
```

Examples of **correct** code for this rule:

**正确** 代码示例：

```js
/*eslint no-self-assign: "error"*/

foo = bar;
[a, b] = [b, a];

// This pattern is warned by the `no-use-before-define` rule.
let foo = foo;

// The default values have an effect.
[foo = 1] = [foo];
```

## Options

This rule has the option to check properties as well.

该规则也有可以检查属性的选项。

```json
{
    "no-self-assign": ["error", {"props": false}]
}
```

- `props` - if this is `true`, `no-self-assign` rule warns self-assignments of properties. Default is `false`.
- `props` - 如果为 `true`，`no-self-assign` 规则将对属性的自我赋值发出警告。默认为 `false`.

### props

Examples of **incorrect** code for the `{ "props": true }` option:

选项 `{ "props": true }` 的 **错误** 代码示例：

```js
/*eslint no-self-assign: [error, {props: true}]*/

// self-assignments with properties.
obj.a = obj.a;
obj.a.b = obj.a.b;
obj["a"] = obj["a"];
obj[a] = obj[a];
```

Examples of **correct** code for the `{ "props": true }` option:

选项 `{ "props": true }` 的 **正确** 代码示例：

```js
/*eslint no-self-assign: [error, {props: true}]*/

// non-self-assignments with properties.
obj.a = obj.b;
obj.a.b = obj.c.b;
obj.a.b = obj.a.c;
obj[a] = obj["a"]

// This ignores if there is a function call.
obj.a().b = obj.a().b
a().b = a().b

// Known limitation: this does not support computed properties except single literal or single identifier.
obj[a + b] = obj[a + b];
obj["a" + "b"] = obj["a" + "b"];
```

## When Not To Use It

If you don't want to notify about self assignments, then it's safe to disable this rule.

如果你不想收到关于自身赋值的通知，关闭此规则即可。

## Version

This rule was introduced in ESLint 2.0.0-rc.0.

该规则在 ESLint 2.0.0-rc.0 被引入。

## Resources

* [Rule source](https://github.com/eslint/eslint/tree/master/lib/rules/no-self-assign.js)
* [Documentation source](https://github.com/eslint/eslint/tree/master/docs/rules/no-self-assign.md)
