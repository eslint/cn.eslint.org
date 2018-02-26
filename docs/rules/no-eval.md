---
title: no-eval - Rules
layout: doc
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# Disallow eval() (no-eval)

# 禁用 eval()（no-eval）

JavaScript's `eval()` function is potentially dangerous and is often misused. Using `eval()` on untrusted code can open a program up to several different injection attacks. The use of `eval()` in most contexts can be substituted for a better, alternative approach to a problem.

JavaScript 中的 `eval()` 函数是有潜在危险的，而且经常被误用。在不可信的代码里使用 `eval()` 有可能使程序受到不同的注入攻击。`eval()` 在大多数情况下可以被更好的解决问题的方法代替。

```js
var obj = { x: "foo" },
    key = "x",
    value = eval("obj." + key);
```

## Rule Details

This rule is aimed at preventing potentially dangerous, unnecessary, and slow code by disallowing the use of the `eval()` function. As such, it will warn whenever the `eval()` function is used.

此规则目的在于通过禁止使用 `eval()` 函数来避免潜在地危险、不必要的和运行效率低下的代码。因此，当时使用 `eval()` 函数时，该规则将发出警告。

Examples of **incorrect** code for this rule:

**错误** 代码示例：

```js
/*eslint no-eval: "error"*/

var obj = { x: "foo" },
    key = "x",
    value = eval("obj." + key);

(0, eval)("var a = 0");

var foo = eval;
foo("var a = 0");

// This `this` is the global object.
this.eval("var a = 0");
```

Example of additional **incorrect** code for this rule when `browser` environment is set to `true`:

当环境指定为 `browser` 为  `true` 时的 **错误** 代码示例：

```js
/*eslint no-eval: "error"*/
/*eslint-env browser*/

window.eval("var a = 0");
```

Example of additional **incorrect** code for this rule when `node` environment is set to `true`:

当环境指定为 `node` 为  `true` 时的 **错误** 代码示例：

```js
/*eslint no-eval: "error"*/
/*eslint-env node*/

global.eval("var a = 0");
```

Examples of **correct** code for this rule:

**正确** 代码示例：

```js
/*eslint no-eval: "error"*/
/*eslint-env es6*/

var obj = { x: "foo" },
    key = "x",
    value = obj[key];

class A {
    foo() {
        // This is a user-defined method.
        this.eval("var a = 0");
    }

    eval() {
    }
}
```

## Options

This rule has an option to allow indirect calls to `eval`.
Indirect calls to `eval` are less dangerous than direct calls to `eval` because they cannot dynamically change the scope. Because of this, they also will not negatively impact performance to the degree of direct `eval`.


该规则有一个选项，允许间接调用 `eval`。间接调用 `eval` 相对于直接调用 `eval` 危害性较低，因为不会动态改变作用域。正因为如此，相对于直接调用 `eval` ，它们也不会对性能造成负面影响。

```js
{
    "no-eval": ["error", {"allowIndirect": true}] // default is false
}
```

Example of **incorrect** code for this rule with the `{"allowIndirect": true}` option:

选项 `{"allowIndirect": true}` 的 **错误** 代码示例：

```js
/*eslint no-eval: "error"*/

var obj = { x: "foo" },
    key = "x",
    value = eval("obj." + key);
```

Examples of **correct** code for this rule with the `{"allowIndirect": true}` option:

选项 `{"allowIndirect": true}` 的 **正确** 代码示例：

```js
/*eslint no-eval: "error"*/

(0, eval)("var a = 0");

var foo = eval;
foo("var a = 0");

this.eval("var a = 0");
```

```js
/*eslint no-eval: "error"*/
/*eslint-env browser*/

window.eval("var a = 0");
```

```js
/*eslint no-eval: "error"*/
/*eslint-env node*/

global.eval("var a = 0");
```

## Known Limitations

* This rule is warning every `eval()` even if the `eval` is not global's. This behavior is in order to detect calls of direct `eval`. Such as:
* 该规则会对每一个 `eval()` 发出警告，即使 `eval` 是非全局的函数。这种行为是为了检测对 `eval` 的直接调用。比如：

  ```js
  module.exports = function(eval) {
      // If the value of this `eval` is built-in `eval` function, this is a
      // call of direct `eval`.
      eval("var a = 0");
  };
  ```

* This rule cannot catch renaming the global object. Such as:
* 该规则无法捕获重命名的全局对象。比如：

  ```js
  var foo = window;
  foo.eval("var a = 0");
  ```

## Further Reading

* [Eval is Evil, Part One](https://blogs.msdn.com/b/ericlippert/archive/2003/11/01/53329.aspx)
* [How evil is eval](https://javascriptweblog.wordpress.com/2010/04/19/how-evil-is-eval/)

## Related Rules

* [no-implied-eval](no-implied-eval)

## Version

This rule was introduced in ESLint 0.0.2.

该规则在 ESLint 0.0.2 中被引入。

## Resources

* [Rule source](https://github.com/eslint/eslint/tree/master/lib/rules/no-eval.js)
* [Documentation source](https://github.com/eslint/eslint/tree/master/docs/rules/no-eval.md)
