---
title: no-ternary - Rules
layout: doc
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# disallow ternary operators (no-ternary)

# 禁止使用三元操作符 (no-ternary)

The ternary operator is used to conditionally assign a value to a variable. Some believe that the use of ternary operators leads to unclear code.

三元操作符通过条件操作为一个变量赋值。一些人认为使用三元操作符会导致代码不清晰。

```js
var foo = isBar ? baz : qux;
```

## Rule Details

This rule disallows ternary operators.

该规则禁止使用三元操作符。

Examples of **incorrect** code for this rule:

**错误** 代码示例：

```js
/*eslint no-ternary: "error"*/

var foo = isBar ? baz : qux;

function quux() {
  return foo ? bar() : baz();
}
```

Examples of **correct** code for this rule:

**正确** 代码示例：

```js
/*eslint no-ternary: "error"*/

var foo;

if (isBar) {
    foo = baz;
} else {
    foo = qux;
}

function quux() {
    if (foo) {
        return bar();
    } else {
        return baz();
    }
}
```

## Related Rules

* [no-nested-ternary](no-nested-ternary)
* [no-unneeded-ternary](no-unneeded-ternary)

## Version

This rule was introduced in ESLint 0.0.9.

该规则在 ESLint 0.0.9 中被引入。

## Resources

* [Rule source](https://github.com/eslint/eslint/tree/master/lib/rules/no-ternary.js)
* [Documentation source](https://github.com/eslint/eslint/tree/master/docs/rules/no-ternary.md)
