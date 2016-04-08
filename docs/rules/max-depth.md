---
title: Rule max-depth
layout: doc
translator: molee1905
proofreader: molee1905
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# Limit Maximum Depth (max-depth)

# 限制最大深度 (max-depth)

The `max-depth` rule allows you to specify the maximum depth blocks can be nested.

该规则允许你指定一个可以嵌套的最大深度。

```js
function foo() {
  for (;;) { // Nested 1 deep.
    if (true) { // Nested 2 deep.
      if (true) { // Nested 3 deep.

      }
    }
  }
}
```

## Rule Details

This rule aims to reduce the complexity of your code by allowing you to configure the maximum depth blocks can be nested in a function. As such, it will warn when blocks are nested too deeply.

该规则目的是允许你通过在一个函数中配置可以嵌套的最大深度来减少你的代码的复杂性。因此，如果块嵌套太深，该规则会发出警告。

## Options

The default depth above which this rule will warn is `4`.  You can configure the depth as an option by using the second argument in your configuration. For example, this sets the rule as an error with a maximum depth of 10:

默认最大深度为`4`。你可以将这个深度作为一个选项进行配置，在你的配置中将它作为第二个参数。例如，以下设置规则为错误级别，最大深度为10：

```json
"max-depth": ["error", 10]

// or you can use an object property

"max-depth": ["error", {"max": 10}]
```

**Deprecated:** the object property `maximum` is deprecated. Please use the property `max` instead.

**弃用：**属性`maximum`已弃用。请使用`max`属性。

The following patterns are considered problems:

以下模式被认为是有问题的：

```js
/*eslint max-depth: ["error", 2]*/

function foo() {
  for (;;) {
    if (true) {
      if (true) {

      }
    }
  }
}
```

The following patterns are not considered problems:

以下模式被认为是没有问题的：

```js
/*eslint max-depth: ["error", 2]*/

function foo() {
  for (;;) {
    if (true) {

    }
  }
}
```


## Related Rules

* [complexity](complexity)
* [max-len](max-len)
* [max-nested-callbacks](max-nested-callbacks)
* [max-params](max-params)
* [max-statements](max-statements)

## Version

This rule was introduced in ESLint 0.0.9.

该规则在 ESLint 0.0.9 中被引入。

## Resources

* [Rule source](https://github.com/eslint/eslint/tree/master/lib/rules/max-depth.js)
* [Documentation source](https://github.com/eslint/eslint/tree/master/docs/rules/max-depth.md)
