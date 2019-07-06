---
title: no-else-return - Rules
layout: doc
edit_link: https://github.com/eslint/eslint/edit/master/docs/rules/no-else-return.md
rule_type: suggestion
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# Disallow return before else (no-else-return)

# 禁止在 else 前有 return (no-else-return)

(fixable) The `--fix` option on the [command line](../user-guide/command-line-interface#fixing-problems) can automatically fix some of the problems reported by this rule.

(fixable) [命令行](../user-guide/command-line-interface#fixing-problems)中的 `--fix` 选项可以自动修复一些该规则报告的问题。

If an `if` block contains a `return` statement, the `else` block becomes unnecessary. Its contents can be placed outside of the block.

如果 `if` 块中包含了一个 `return` 语句，`else` 块就成了多余的了。可以将其内容移至块外。

```js
function foo() {
    if (x) {
        return y;
    } else {
        return z;
    }
}
```

## Rule Details

This rule is aimed at highlighting an unnecessary block of code following an `if` containing a return statement. As such, it will warn when it encounters an `else` following a chain of `if`s, all of them containing a `return` statement.

该规则旨在突出含有 return 语句的 `if` 语句后的不必要的代码。因此，当`else` 语句出现在含有 return 语句的 `if` 语句之后，该规则将发出警告。

## Options

This rule has an object option:

该规则有一个对象选项：

* `allowElseIf: true` (default) allows `else if` blocks after a return
* `allowElseIf: true` (默认) 允许在 return 之后有 `else if` 块
* `allowElseIf: false` disallows `else if` blocks after a return
* `allowElseIf: false` 禁止在 return 之后有 `else if` 块

### `allowElseIf: true`

Examples of **incorrect** code for this rule:

**错误** 代码示例：

```js
/*eslint no-else-return: "error"*/

function foo() {
    if (x) {
        return y;
    } else {
        return z;
    }
}

function foo() {
    if (x) {
        return y;
    } else if (z) {
        return w;
    } else {
        return t;
    }
}

function foo() {
    if (x) {
        return y;
    } else {
        var t = "foo";
    }

    return t;
}

function foo() {
    if (error) {
        return 'It failed';
    } else {
        if (loading) {
            return "It's still loading";
        }
    }
}

// Two warnings for nested occurrences
function foo() {
    if (x) {
        if (y) {
            return y;
        } else {
            return x;
        }
    } else {
        return z;
    }
}
```

Examples of **correct** code for this rule:

**正确** 代码示例：

```js
/*eslint no-else-return: "error"*/

function foo() {
    if (x) {
        return y;
    }

    return z;
}

function foo() {
    if (x) {
        return y;
    } else if (z) {
        var t = "foo";
    } else {
        return w;
    }
}

function foo() {
    if (x) {
        if (z) {
            return y;
        }
    } else {
        return z;
    }
}

function foo() {
    if (error) {
        return 'It failed';
    } else if (loading) {
        return "It's still loading";
    }
}
```

### `allowElseIf: false`

Examples of **incorrect** code for this rule:

**错误** 代码示例：

```js
/*eslint no-else-return: ["error", {allowElseIf: false}]*/

function foo() {
    if (error) {
        return 'It failed';
    } else if (loading) {
        return "It's still loading";
    }
}
```

Examples of **correct** code for this rule:

**正确** 代码示例：

```js
/*eslint no-else-return: ["error", {allowElseIf: false}]*/

function foo() {
    if (error) {
        return 'It failed';
    }

    if (loading) {
        return "It's still loading";
    }
}
```

## Version

This rule was introduced in ESLint 0.0.9.

该规则在 ESLint 0.0.9 中被引入。

## Resources

* [Rule source](https://github.com/eslint/eslint/tree/master/lib/rules/no-else-return.js)
* [Documentation source](https://github.com/eslint/eslint/tree/master/docs/rules/no-else-return.md)
