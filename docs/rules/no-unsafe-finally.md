---
title: no-unsafe-finally - Rules
layout: doc
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# disallow control flow statements in `finally` blocks (no-unsafe-finally)

# 禁止在 `finally` 语句块中出现控制流语句 (no-unsafe-finally)

(recommended) The `"extends": "eslint:recommended"` property in a configuration file enables this rule.

(recommended) 配置文件中的 `"extends": "eslint:recommended"` 属性启用了此规则。

JavaScript suspends the control flow statements of `try` and `catch` blocks until the execution of `finally` block finishes. So, when `return`, `throw`, `break`, or `continue` is used in `finally`, control flow statements inside `try` and `catch` are overwritten, which is considered as unexpected behavior. Such as:

JavaScript 暂停 `try` 和 `catch` 语句块中的控制流语句，直到 `finally` 语句块执行完毕。所以，当 `return`、`throw`、`break` 和 `continue` 出现在 `finally`  中时， `try` 和 `catch` 语句块中的控制流语句将被覆盖，这被认为是意外的行为。比如：

```js
// We expect this function to return 1;
(() => {
    try {
        return 1; // 1 is returned but suspended until finally block ends
    } catch(err) {
        return 2;
    } finally {
        return 3; // 3 is returned before 1, which we did not expect
    }
})();

// > 3
```

```js
// We expect this function to throw an error, then return
(() => {
    try {
        throw new Error("Try"); // error is thrown but suspended until finally block ends
    } finally {
        return 3; // 3 is returned before the error is thrown, which we did not expect
    }
})();

// > 3
```

```js
// We expect this function to throw Try(...) error from the catch block
(() => {
    try {
        throw new Error("Try")
    } catch(err) {
        throw err; // The error thrown from try block is caught and rethrown
    } finally {
        throw new Error("Finally"); // Finally(...) is thrown, which we did not expect
    }
})();

// > Uncaught Error: Finally(...)
```

```js
// We expect this function to return 0 from try block.
(() => {
  label: try {
    return 0; // 1 is returned but suspended until finally block ends
  } finally {
    break label; // It breaks out the try-finally block, before 0 is returned.
  }
  return 1;
})();

// > 1
```

## Rule Details

This rule disallows `return`, `throw`, `break`, and `continue` statements inside `finally` blocks. It allows indirect usages, such as in `function` or `class` definitions.

该规则禁止在 `finally` 语句块中出现 `return`、`throw`、`break` 和 `continue` 语句。它允许间接使用，比如在 `function` 或 `class` 的定义中。

Examples of **incorrect** code for this rule:

**错误** 代码示例：

```js
/*eslint no-unsafe-finally: "error"*/
let foo = function() {
    try {
        return 1;
    } catch(err) {
        return 2;
    } finally {
        return 3;
    }
};
```

```js
/*eslint no-unsafe-finally: "error"*/
let foo = function() {
    try {
        return 1;
    } catch(err) {
        return 2;
    } finally {
        throw new Error;
    }
};
```

Examples of **correct** code for this rule:

**正确** 代码示例：

```js
/*eslint no-unsafe-finally: "error"*/
let foo = function() {
    try {
        return 1;
    } catch(err) {
        return 2;
    } finally {
        console.log("hola!");
    }
};
```

```js
/*eslint no-unsafe-finally: "error"*/
let foo = function() {
    try {
        return 1;
    } catch(err) {
        return 2;
    } finally {
        let a = function() {
            return "hola!";
        }
    }
};
```

```js
/*eslint no-unsafe-finally: "error"*/
let foo = function(a) {
    try {
        return 1;
    } catch(err) {
        return 2;
    } finally {
        switch(a) {
            case 1: {
                console.log("hola!")
                break;
            }
        }
    }
};
```

## When Not To Use It

If you want to allow control flow operations in `finally` blocks, you can turn this rule off.

如果你想允许在 `finally` 语句块中出现控制流语操作，你可以关闭此规则。

## Version

This rule was introduced in ESLint 2.9.0.

该规则在 ESLint 2.9.0 中被引入。

## Resources

* [Rule source](https://github.com/eslint/eslint/tree/master/lib/rules/no-unsafe-finally.js)
* [Documentation source](https://github.com/eslint/eslint/tree/master/docs/rules/no-unsafe-finally.md)
