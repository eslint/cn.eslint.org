---
title: Rule complexity
layout: doc
translator: fengnana
proofreader: sunshiner
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# Limit Cyclomatic Complexity (complexity)

# 限制圈复杂度 (complexity)


Cyclomatic complexity measures the number of linearly independent paths through a program's source code. This rule allows setting a cyclomatic complexity threshold (default is `20`).

圈复杂度(Cyclomatic Complexity)数量上表现为覆盖所有代码的独立现行路径条数。此规则允许设置圈复杂度阈值 (默认是 `20`)。

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

此规则目的在于通过在项目中设置圈复杂度阈值来控制代码的复杂度，
因此，它会在圈复杂度越过配置的阈值时给出警告 (默认是 `20`)。

The following patterns are considered problems:

以下模式被认为是有问题的：

```js
/*eslint complexity: [2, 2]*/

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

The following patterns are not considered problems:

以下模式被认为是没有问题的：

```js
/*eslint complexity: [2, 2]*/

function a(x) {
    if (true) {
        return x;
    } else {
        return 4;
    }
}
```

Optionally, you may specify a `maximum` object property:

你可以指定一个 `maximum` 属性：

```json
"complexity": [2, 2]
```

is equivalent to

等同于：

```json
"complexity": [2, {"maximum": 2}]
```

## When Not To Use It

If you can't determine an appropriate complexity limit for your code, then it's best to disable this rule.

如果不能为代码找到合适的复杂度阀值，最好禁用此规则。

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
