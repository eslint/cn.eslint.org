---
title: max-depth - Rules
layout: doc
edit_link: https://github.com/eslint/eslint/edit/master/docs/rules/max-depth.md
rule_type: suggestion
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# enforce a maximum depth that blocks can be nested (max-depth)

# 强制块语句的最大可嵌套深度 (max-depth)

Many developers consider code difficult to read if blocks are nested beyond a certain depth.

很多开发者认为如果块语句嵌套深度超过某个值，代码就很难阅读。

## Rule Details

This rule enforces a maximum depth that blocks can be nested to reduce code complexity.

该规则强制块语句的最大可嵌套深度来降低代码的复杂性。

## Options

This rule has a number or object option:

该规则有一个数字或对象选项：

* `"max"` (default `4`) enforces a maximum depth that blocks can be nested
* `"max"` (默认 `4`) 强制块语句的最大可嵌套深度

**Deprecated:** The object property `maximum` is deprecated; please use the object property `max` instead.

**已弃用：** `maximum` 属性已弃用；请使用 `max` 属性。

### max

Examples of **incorrect** code for this rule with the default `{ "max": 4 }` option:

默认选项 `{ "max": 4 }` 的 **错误** 代码示例：

```js
/*eslint max-depth: ["error", 4]*/
/*eslint-env es6*/

function foo() {
    for (;;) { // Nested 1 deep
        let val = () => (param) => { // Nested 2 deep
            if (true) { // Nested 3 deep
                if (true) { // Nested 4 deep
                    if (true) { // Nested 5 deep
                    }
                }
            }
        };
    }
}
```

Examples of **correct** code for this rule with the default `{ "max": 4 }` option:

默认选项 `{ "max": 4 }` 的 **正确** 代码示例：

```js
/*eslint max-depth: ["error", 4]*/
/*eslint-env es6*/

function foo() {
    for (;;) { // Nested 1 deep
        let val = () => (param) => { // Nested 2 deep
           if (true) { // Nested 3 deep
                if (true) { // Nested 4 deep
                }
            }
        };
    }
}
```

## Related Rules

* [complexity](complexity)
* [max-len](max-len)
* [max-lines](max-lines)
* [max-lines-per-function](max-lines-per-function)
* [max-nested-callbacks](max-nested-callbacks)
* [max-params](max-params)
* [max-statements](max-statements)

## Version

This rule was introduced in ESLint 0.0.9.

该规则在 ESLint 0.0.9 中被引入。

## Resources

* [Rule source](https://github.com/eslint/eslint/tree/master/lib/rules/max-depth.js)
* [Documentation source](https://github.com/eslint/eslint/tree/master/docs/rules/max-depth.md)
