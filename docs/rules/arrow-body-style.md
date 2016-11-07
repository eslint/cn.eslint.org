---
title: arrow-body-style - Rules
layout: doc
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# Require braces in arrow function body (arrow-body-style)

# 要求箭头函数体使用大括号 (arrow-body-style)

(fixable) The `--fix` option on the [command line](../user-guide/command-line-interface#fix) automatically fixes problems reported by this rule.

(fixable) [命令行](../user-guide/command-line-interface#fix)中的 `--fix` 选项可以自动修复该规则报告的问题。

Arrow functions have two syntactic forms for their function bodies.  They may be defined with a *block* body (denoted by curly braces) `() => { ... }` or with a single expression `() => ...`, whose value is implicitly returned.

箭头函数的主题有两种语法格式。它们可以被定义为一个 *块*(用大括号)`() => { ... }` 或只用单一的表达式`() => ...`，隐式返回值。
 
## Rule Details

This rule can enforce or disallow the use of braces around arrow function body.

该规则可以强制或禁止箭头函数体使用大括号。

## Options

The rule takes one or two options. The first is a string, which can be:

该规则有一到两个选项。第一个选项是个字符串，可以是：

* `"always"` enforces braces around the function body
* `"always"` 强制在箭头函数体周围使用大括号
* `"as-needed"` enforces no braces where they can be omitted (default)
* `"as-needed"` 当大括号是可以省略的，强制不使用它们 (默认)
* `"never"` enforces no braces around the function body (constrains arrow functions to the role of returning an expression)
* `"never"` 禁止在函数体周围出现大括号 (将箭头函数限制为返回结果的表达式)

The second one is an object for more fine-grained configuration when the first option is `"as-needed"`. Currently, the only available option is `requireReturnForObjectLiteral`, a boolean property. It's `false` by default. If set to `true`, it requires braces and an explicit return for object literals.

第二个选项是个对象，当第一个选项是 `"as-needed"`，可以进行更加细粒度的配置。目前，唯一有效的选项是一个布尔属性 `requireReturnForObjectLiteral`。默认为 `false`。如果设置为 `true`，它要求使用大括号，并且显示返回对象字面量。


```json
"arrow-body-style": ["error", "always"]
```

### always

Examples of **incorrect** code for this rule with the `"always"` option:

选项 `"always"` 的 **错误** 代码示例：

```js
/*eslint arrow-body-style: ["error", "always"]*/
/*eslint-env es6*/
let foo = () => 0;
```

Examples of **correct** code for this rule with the `"always"` option:

选项 `"always"` 的 **正确** 代码示例：

```js
let foo = () => {
    return 0;
};
let foo = (retv, name) => {
    retv[name] = true;
    return retv;
};
```

### as-needed

Examples of **incorrect** code for this rule with the default `"as-needed"` option:

默认选项 `"as-needed"` 的 **错误** 代码示例：

```js
/*eslint arrow-body-style: ["error", "as-needed"]*/
/*eslint-env es6*/

let foo = () => {
    return 0;
};
let foo = () => {
    return {
       bar: {
            foo: 1,
            bar: 2,
        }
    };
};
```

Examples of **correct** code for this rule with the default `"as-needed"` option:

默认选项 `"as-needed"` 的 **正确** 代码示例：

```js
/*eslint arrow-body-style: ["error", "as-needed"]*/
/*eslint-env es6*/

let foo = () => 0;
let foo = (retv, name) => {
    retv[name] = true;
    return retv;
};
let foo = () => ({
    bar: {
        foo: 1,
        bar: 2,
    }
});
let foo = () => { bar(); };
let foo = () => {};
let foo = () => { /* do nothing */ };
let foo = () => {
    // do nothing.
};
let foo = () => ({ bar: 0 });
```

#### requireReturnForObjectLiteral

> This option is only applicable when used in conjunction with the `"as-needed"` option.

> 该选项只适合与`"as-needed"配合使用。

Examples of **incorrect** code for this rule with the `{ "requireReturnForObjectLiteral": true }` option:

选项 `{ "requireReturnForObjectLiteral": true }` 的 **错误** 代码示例：

```js
/*eslint arrow-body-style: ["error", "as-needed", { requireReturnForObjectLiteral: true }]*/
/*eslint-env es6*/
let foo = () => ({});
let foo = () => ({ bar: 0 });
```

Examples of **correct** code for this rule with the `{ "requireReturnForObjectLiteral": true }` option:

选项 `{ "requireReturnForObjectLiteral": true }` 的 **正确** 代码示例：

```js
/*eslint arrow-body-style: ["error", "as-needed", { requireReturnForObjectLiteral: true }]*/
/*eslint-env es6*/

let foo = () => {};
let foo = () => { return { bar: 0 }; };
```

### never

Examples of **incorrect** code for this rule with the `"never"` option:

选项 `"never"` 的 **错误** 代码示例：

```js
/*eslint arrow-body-style: ["error", "never"]*/
/*eslint-env es6*/

let foo = () => {
    return 0;
};
let foo = (retv, name) => {
    retv[name] = true;
    return retv;
};
```

Examples of **correct** code for this rule with the `"never"` option:

选项 `"never"` 的 **正确** 代码示例：

```js
/*eslint arrow-body-style: ["error", "never"]*/
/*eslint-env es6*/

let foo = () => 0;
let foo = () => ({ foo: 0 });
```

## Version

This rule was introduced in ESLint 1.8.0.

该规则在 ESLint 1.8.0 中被引入。

## Resources

* [Rule source](https://github.com/eslint/eslint/tree/master/lib/rules/arrow-body-style.js)
* [Documentation source](https://github.com/eslint/eslint/tree/master/docs/rules/arrow-body-style.md)
