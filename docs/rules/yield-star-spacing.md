---
title: Rule yield-star-spacing
layout: doc
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# Enforce spacing around the `*` in `yield*` expressions (yield-star-spacing)

# 强制在 `yield*` 表达式中 `*` 周围使用空格  (yield-star-spacing)

(fixable) The `--fix` option on the [command line](../user-guide/command-line-interface#fix) automatically fixes problems reported by this rule.

(fixable) [命令行](../user-guide/command-line-interface#fix)中的 `--fix` 选项可以自动修复该规则报告的问题。

## Rule Details

This rule enforces spacing around the `*` in `yield*` expressions.

该规则强制在 `yield*` 表达式中 `*` 左右使用空格。

The rule takes one option, an object, which has two keys `before` and `after` having boolean values `true` or `false`.

该规则有一个对象选项，两个属性 `before` 和 `after`，值为 `true` 或 `false`。

* `before` enforces spacing between the `yield` and the `*`.
  If `true`, a space is required, otherwise spaces are disallowed.
* `before` 强制在 `yield` 和 `*` 之间有空格。
  如果为 `true`，要求有一个空格，否则禁止有空格。
* `after` enforces spacing between the `*` and the argument.
  If it is `true`, a space is required, otherwise spaces are disallowed.
* `after` 强制在 `*` 和 参数之间有空格。
  如果为 `true`，要求有一个空格，否则禁止有空格。

The default is `{"before": false, "after": true}`.

默认为 `{"before": false, "after": true}` 。

```json
"yield-star-spacing": ["error", {"before": true, "after": false}]
```

The option also has a string shorthand:

该选项也有简写形式：

* `{"before": false, "after": true}` → `"after"`
* `{"before": false, "after": true}` → `"after"`
* `{"before": true, "after": false}` → `"before"`
* `{"before": true, "after": false}` → `"before"`
* `{"before": true, "after": true}` → `"both"`
* `{"before": true, "after": true}` → `"both"`
* `{"before": false, "after": false}` → `"neither"`
* `{"before": false, "after": false}` → `"neither"`

```json
"yield-star-spacing": ["error", "after"]
```

When using `"after"` this spacing will be enforced:

当使用 `"after"`，强制使用以下格式：

```js
/*eslint yield-star-spacing: ["error", "after"]*/
/*eslint-env es6*/

function* generator() {
  yield* other();
}
```

When using `"before"` this spacing will be enforced:

当使用 `"before"`，强制使用以下格式：

```js
/*eslint yield-star-spacing: ["error", "before"]*/
/*eslint-env es6*/

function *generator() {
  yield *other();
}
```

When using `"both"` this spacing will be enforced:

当使用 `"both"`，强制使用以下格式：

```js
/*eslint yield-star-spacing: ["error", "both"]*/
/*eslint-env es6*/

function * generator() {
  yield * other();
}
```

When using `"neither"` this spacing will be enforced:

当使用 `"neither"`，强制使用以下格式：

```js
/*eslint yield-star-spacing: ["error", "neither"]*/
/*eslint-env es6*/

function*generator() {
  yield*other();
}
```

To use this rule you either need to [use the `es6` environment](../user-guide/configuring) or
[set `ecmaVersion` to `6` in `parserOptions`](../user-guide/configuring).

使用此规则，你需要[使用 `es6` 环境](../user-guide/configuring) 或 [在 `parserOptions` 中设置 `ecmaVersion` 为 `6`](../user-guide/configuring)。

## When Not To Use It

If your project will not be using generators or you are not concerned with spacing consistency, you do not need this rule.

如果你的项目不使用 generator 函数或你不关心空格的一致性，你不需要使用此规则。

## Further Reading

* [Understanding ES6: Generators](https://leanpub.com/understandinges6/read/#leanpub-auto-generators)

## Version

This rule was introduced in ESLint 2.0.0-alpha-1.

该规则在 ESLint 2.0.0-alpha-1 中被引入。

## Resources

* [Rule source](https://github.com/eslint/eslint/tree/master/lib/rules/yield-star-spacing.js)
* [Documentation source](https://github.com/eslint/eslint/tree/master/docs/rules/yield-star-spacing.md)
