---
title: Rule no-duplicate-case
layout: doc
translator: ybbjegj
proofreader: molee1905
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# Rule to disallow a duplicate case label (no-duplicate-case)

# 禁止重复 case 标签（no-duplicate-case）

If a switch statement has duplicate case labels, it is likely that a programmer copied a case but forgot to change the label.

如果在 switch 语句中出现重复 case 标签，很有可能是开发者拷贝了一个 case 语句，并且忘了改标签。

## Rule Details

This rule is aimed at eliminating duplicate case labels in switch statements

该规则旨在消除重复 switch 语句中的重复 case 标签。
 
Examples of **incorrect** code for this rule:

**错误**代码示例：

```js
/*eslint no-duplicate-case: "error"*/

var a = 1,
    one = 1;

switch (a) {
    case 1:
        break;
    case 2:
        break;
    case 1:         // duplicate case label
        break;
    default:
        break;
}

switch (a) {
    case one:
        break;
    case 2:
        break;
    case one:         // duplicate case label
        break;
    default:
        break;
}

switch (a) {
    case "1":
        break;
    case "2":
        break;
    case "1":         // duplicate case label
        break;
    default:
        break;
}
```

Examples of **correct** code for this rule:

**正确**代码示例：

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
