---
title: no-extra-label - Rules
layout: doc
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# Disallow Unnecessary Labels (no-extra-label)

# 禁用不必要的标签 (no-extra-label)

(fixable) The `--fix` option on the [command line](../user-guide/command-line-interface#fix) can automatically fix some of the problems reported by this rule.

(fixable) [命令行](../user-guide/command-line-interface#fix)中的 `--fix` 选项可以自动修复一些该规则报告的问题。

If a loop contains no nested loops or switches, labeling the loop is unnecessary.

如果一个循环中不包含嵌套循环或 switch 语句，对这样的循环使用标签是不必要的。

```js
A: while (a) {
    break A;
}
```

You can achieve the same result by removing the label and using `break` or `continue` without a label.
Probably those labels would confuse developers because they expect labels to jump to further.

你可以通过移除标签，只使用 `break` 或 `continue`实现同样的结果。这些标签可能会使开发者感到困惑，因为他们可能希望使用标签跳转到更远的地方。

## Rule Details

This rule is aimed at eliminating unnecessary labels.

该规则旨在消除不必要的标签。

Examples of **incorrect** code for this rule:

**错误** 代码示例：

```js
/*eslint no-extra-label: "error"*/

A: while (a) {
    break A;
}

B: for (let i = 0; i < 10; ++i) {
    break B;
}

C: switch (a) {
    case 0:
        break C;
}
```

Examples of **correct** code for this rule:

**正确** 代码示例：

```js
/*eslint no-extra-label: "error"*/

while (a) {
    break;
}

for (let i = 0; i < 10; ++i) {
    break;
}

switch (a) {
    case 0:
        break;
}

A: {
    break A;
}

B: while (a) {
    while (b) {
        break B;
    }
}

C: switch (a) {
    case 0:
        while (b) {
            break C;
        }
        break;
}
```

## When Not To Use It

If you don't want to be notified about usage of labels, then it's safe to disable this rule.

如果你不想收到有关标签的使用情况的通知，关闭此规则即可。

## Related Rules

* [no-labels](./no-labels)
* [no-label-var](./no-label-var)
* [no-unused-labels](./no-unused-labels)

## Version

This rule was introduced in ESLint 2.0.0-rc.0.

该规则在 ESLint 2.0.0-rc.0 中被引入。

## Resources

* [Rule source](https://github.com/eslint/eslint/tree/master/lib/rules/no-extra-label.js)
* [Documentation source](https://github.com/eslint/eslint/tree/master/docs/rules/no-extra-label.md)
