---
title: Rule no-duplicate-case
layout: doc
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# Rule to disallow a duplicate case label (no-duplicate-case)

# 禁止重复 case 标签（no-duplicate-case）

If a `switch` statement has duplicate test expressions in `case` clauses, it is likely that a programmer copied a `case` clause but forgot to change the test expression.

如果一个 `switch` 语句中的 `case` 子句中出现重复的测试表达式，那么很有可能是某个程序员拷贝了一个 `case` 子句但忘记了修改测试表达式。

## Rule Details

This rule disallows duplicate test expressions in `case` clauses of `switch` statements.

该规则禁止在 `switch` 语句中的 `case` 子句中出现重复的测试表达式。

Examples of **incorrect** code for this rule:

**错误** 代码示例：

```js
/*eslint no-duplicate-case: "error"*/

var a = 1,
    one = 1;

switch (a) {
    case 1:
        break;
    case 2:
        break;
    case 1:         // duplicate test expression
        break;
    default:
        break;
}

switch (a) {
    case one:
        break;
    case 2:
        break;
    case one:         // duplicate test expression
        break;
    default:
        break;
}

switch (a) {
    case "1":
        break;
    case "2":
        break;
    case "1":         // duplicate test expression
        break;
    default:
        break;
}
```

Examples of **correct** code for this rule:

**正确** 代码示例：

```js
/*eslint no-duplicate-case: "error"*/

var a = 1,
    one = 1;

switch (a) {
    case 1:
        break;
    case 2:
        break;
    case 3:
        break;
    default:
        break;
}

switch (a) {
    case one:
        break;
    case 2:
        break;
    case 3:
        break;
    default:
        break;
}

switch (a) {
    case "1":
        break;
    case "2":
        break;
    case "3":
        break;
    default:
        break;
}
```

## Version

This rule was introduced in ESLint 0.17.0.

该规则在 ESLint 0.17.0 中被引入。

## Resources

* [Rule source](https://github.com/eslint/eslint/tree/master/lib/rules/no-duplicate-case.js)
* [Documentation source](https://github.com/eslint/eslint/tree/master/docs/rules/no-duplicate-case.md)
