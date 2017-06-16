---
title: no-unused-labels - Rules
layout: doc
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# Disallow Unused Labels (no-unused-labels)

# 禁用未使用过的标签 (no-unused-labels)

(recommended) The `"extends": "eslint:recommended"` property in a configuration file enables this rule.

(recommended) 配置文件中的 `"extends": "eslint:recommended"` 属性启用了此规则。

(fixable) The `--fix` option on the [command line](../user-guide/command-line-interface#fix) can automatically fix some of the problems reported by this rule.

(fixable) [命令行](../user-guide/command-line-interface#fix)中的 `--fix` 选项可以自动修复一些该规则报告的问题。

Labels that are declared and not used anywhere in the code are most likely an error due to incomplete refactoring.

只声明却没有使用的标签可能是由于不完全的重构造成的错误。

```js
OUTER_LOOP:
for (const student of students) {
    if (checkScores(student.scores)) {
        continue;
    }
    doSomething(student);
}
```

In this case, probably removing `OUTER_LOOP:` had been forgotten.
Such labels take up space in the code and can lead to confusion by readers.

在这个例子中，可能是忘记了移除 `OUTER_LOOP:` 。这样的标签不仅占据代码空间，而且会使读者感到迷惑。

## Rule Details

This rule is aimed at eliminating unused labels.

该规则旨在消除未使用过的标签。

Examples of **incorrect** code for this rule:

**错误** 代码示例：

```js
/*eslint no-unused-labels: "error"*/

A: var foo = 0;

B: {
    foo();
}

C:
for (let i = 0; i < 10; ++i) {
    foo();
}
```

Examples of **correct** code for this rule:

**正确** 代码示例：

```js
/*eslint no-unused-labels: "error"*/

A: {
    if (foo()) {
        break A;
    }
    bar();
}

B:
for (let i = 0; i < 10; ++i) {
    if (foo()) {
        break B;
    }
    bar();
}
```

## When Not To Use It

If you don't want to be notified about unused labels, then it's safe to disable this rule.

如果你不想收到关于未使用的标签的通知，禁用此规则即可。

## Related Rules

* [no-extra-label](./no-extra-label)
* [no-labels](./no-labels)
* [no-label-var](./no-label-var)

## Version

This rule was introduced in ESLint 2.0.0-rc.0.

该规则在 ESLint 2.0.0-rc.0 中被引入。

## Resources

* [Rule source](https://github.com/eslint/eslint/tree/master/lib/rules/no-unused-labels.js)
* [Documentation source](https://github.com/eslint/eslint/tree/master/docs/rules/no-unused-labels.md)
