---
title: Rule no-else-return
layout: doc
translator: fengnana
proofreader: molee1905
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->
# Disallow return before else (no-else-return)

# 禁止在else前有return (no-else-return)

If an `if` block contains a `return` statement, the `else` block becomes unnecessary. Its contents can be placed outside of the block.

如果`if`块中包含了一个`return`语句，`else`块就成了多余的了。可以将其内容移至块外。

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

该规则旨在突出含有 return 语句的的`if`语句后的不必要的代码。因此，`else`语句出现在含有 return 语句的的`if`语句之后，该规则将发出警告。

The following patterns are considered problems:

以下模式被认为是有问题的：

```js
/*eslint no-else-return: 2*/

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

The follow patterns are not considered problems:

以下模式被认为是没有问题的：

```js
/*eslint no-else-return: 2*/

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
```

## Version

This rule was introduced in ESLint 0.0.9.

该规则在 ESLint 0.0.9 中被引入。

## Resources

* [Rule source](https://github.com/eslint/eslint/tree/master/lib/rules/no-else-return.js)
* [Documentation source](https://github.com/eslint/eslint/tree/master/docs/rules/no-else-return.md)
