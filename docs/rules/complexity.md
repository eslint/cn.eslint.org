---
title: Rule complexity
layout: doc
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# Limit Cyclomatic Complexity (complexity)

# 限制圈复杂度 (complexity)

Cyclomatic complexity measures the number of linearly independent paths through a program's source code. This rule allows setting a cyclomatic complexity threshold.

圈复杂度数量上表现为覆盖所有代码的独立现行路径条数。该规则允许设置一个圈复杂度阈值。

```js
function a(x) {
    if (true) {
        return x; // 1st path
    } else if (false) {
        return x+1; // 2nd path
    } else {
        return 4; // 3rd path
    }
}
```

## Rule Details

This rule is aimed at reducing code complexity by capping the amount of cyclomatic complexity allowed in a program. As such, it will warn when the cyclomatic complexity crosses the configured threshold (default is `20`).

此规则目的在于通过在项目中设置一个圈复杂度阈值来控制代码的复杂度，因此，它将会在圈复杂度超过配置的阈值时发出警告 (默认是 `20`)。

Examples of **incorrect** code for a maximum of 2:

最大阈值为 2 的 **错误** 代码示例：

```js
/*eslint complexity: ["error", 2]*/

function a(x) {
    if (true) {
        return x;
    } else if (false) {
        return x+1;
    } else {
        return 4; // 3rd path
    }
}
```

Examples of **correct** code for a maximum of 2:

最大阈值为 2 的 **正确** 代码示例：

```js
/*eslint complexity: ["error", 2]*/

function a(x) {
    if (true) {
        return x;
    } else {
        return 4;
    }
}
```

## Options

Optionally, you may specify a `max` object property:

你可以指定一个包含 `max` 属性的对象：

```json
"complexity": ["error", 2]
```

is equivalent to

等同于：

```json
"complexity": ["error", { "max": 2 }]
```

**Deprecated:** the object property `maximum` is deprecated. Please use the property `max` instead.

**弃用：**属性 `maximum` 已弃用。请使用 `max` 属性。

## When Not To Use It

If you can't determine an appropriate complexity limit for your code, then it's best to disable this rule.

如果你不能为你的代码确定一个合适的圈复杂度阈值，最好禁用此规则。

## Further Reading

* [About Complexity](http://jscomplexity.org/complexity)
* [Complexity Analysis of JavaScript Code](http://ariya.ofilabs.com/2012/12/complexity-analysis-of-javascript-code.html)

## Related Rules

* [max-depth](max-depth)
* [max-len](max-len)
* [max-nested-callbacks](max-nested-callbacks)
* [max-params](max-params)
* [max-statements](max-statements)

## Version

This rule was introduced in ESLint 0.0.9.

该规则在 ESLint 0.0.9 中被引入。

## Resources

* [Rule source](https://github.com/eslint/eslint/tree/master/lib/rules/complexity.js)
* [Documentation source](https://github.com/eslint/eslint/tree/master/docs/rules/complexity.md)
