---
title: Rule one-var
layout: doc
translator: molee1905
proofreader: molee1905
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# Require or Disallow One Variable Declaration per Scope (one-var)

# 每个作用域要求或禁止只有一个变量声明 (one-var)

Variables can be declared at any point in JavaScript code using `var`, `let`, or `const`. There are many styles and preferences related to the declaration of variables, and one of those is deciding on how many variable declarations should be allowed in a single function.

变量可以在 Javascript 的任何地方通过使用`var`，`let`或 `const`进行声明。有很多风格和首选项都与变量声明有关，其中之一就是决定在一个方法中应该允许多少个变量声明。

There are two schools of thought in this regard:

在这个方面有两个思想流派：

1. There should be just one variable declaration for all variables in the function. That declaration typically appears at the top of the function.

1. 在方法中所有的变量应该只有一个声明。这个声明通常出现在方法顶部。

2. You should use one variable declaration for each variable you want to define.

2. 你应该为每个你想定义的变量进行声明。

For instance:

例如：

```js
// one variable declaration per function
function foo() {
    var bar, baz;
}

// multiple variable declarations per function
function foo() {
    var bar;
    var baz;
}
```

The single-declaration school of thought is based in pre-ECMAScript 6 behaviors, where there was no such thing as block scope, only function scope. Since all `var` statements are hoisted to the top of the function anyway, some believe that declaring all variables in a single declaration at the top of the function removes confusion around scoping rules.

单一声明的思想流派是基于 ECMAScript 6 之前版本的行为，没有块作用域，只有方法作用域。由于所有的`var`语句都会被提升到函数顶部，有些人认为将所有的变量一一条语句声明在函数顶部，避免了函数范围内的混乱。

## Rule Details

This rule is aimed at enforcing the use of either one variable declaration or multiple declarations per function (for `var`) or block (for `let` and `const`) scope. As such, it will warn when it encounters an unexpected number of variable declarations.

该规则旨在强制在函数(`var`)或块(`let` 和 `const`) 范围使用单一声明还是多条声明。因此，如果出现意外数目的声明语句，它将发出警告。

## Options

There are two ways to configure this rule. The first is by using one string specified as `"always"` (the default) to enforce one variable declaration per scope or `"never"` to enforce multiple variable declarations per scope.  If you declare variables in your code with `let` and `const`, then `"always"` and `"never"` will apply to the block scope for those declarations, not the function scope.

有两种方式配置此规则。第一个是使用字符串，默认为`"always"`，在每个范围内强制只有一个变量声明或为`"never"`，在每个范围内强制使用多个变量声明。如果你在你的代码中，使用`let` 和 `const`声明变量，`"always"` 和 `"never"`将会作用于这些声明的块范围的顶部而不是函数范围的顶部。

The second way to configure this rule is with an object. The keys are any of:

第二种方式是使用一个对象。该对象的键是以下任意一个：

* `var`
* `let`
* `const`

or:

或：

* `uninitialized`
* `initialized`

and the values are either `"always"` or `"never"`. This allows you to set behavior differently for each type of declaration, or whether variables are initialized during declaration.

对应的值为`"always"` 或 `"never"`。这允许你针对不同类型的声明，不管声明时是否初始化，都可以做出不同的设置。

You can configure the rule as follows:

你可以这样的配置规则：

(default) Exactly one variable declaration per type per function (var) or block (let or const)

(默认)每种类型、函数(var)或块(let 或 const)只有一个声明

```json
"one-var": [2, "always"]
```

Exactly one declarator per declaration per function (var) or block (let or const)

每个函数 (var) 或块 (let 或 const) 中的每个声明都一个声明符

```json
"one-var": [2, "never"]
```

Configure each declaration type individually. Defaults to `"always"` if key not present.

单独配置每个声明类型。如果键不存在，默认为`"always"`。

```json
"one-var": [2, {
    "var": "always", // Exactly one var declaration per function
    "let": "always", // Exactly one let declaration per block
    "const": "never" // Exactly one declarator per const declaration per block
}]
```

Configure uninitialized and initialized seperately. Defaults to `"always"` if key not present.

分开配置未初始化的和已初始化的变量声明。如果键不存在，默认为`"always"`。

```json
"one-var": [2, {
    "uninitialized": "always", // Exactly one declaration for uninitialized variables per function (var) or block (let or const)
    "initialized": "never" // Exactly one declarator per initialized variable declaration per function (var) or block (let or const)
}]
```

When configured with `"always"` as the first option (the default), the following patterns are considered problems:

当配置`"always"`作为第一个选项时(默认)，以下模式被认为是有问题的：

```js
/*eslint one-var: [2, "always"]*/
/*eslint-env es6*/

function foo() {
    var bar;
    var baz;
    let qux;
    let norf;
}

function foo(){
    const bar = false;
    const baz = true;
    let qux;
    let norf;
}

function foo() {
    var bar;

    if (baz) {
        var qux = true;
    }
}
```

The following patterns are not considered problems:

以下模式被认为是没有问题的：

```js
/*eslint one-var: [2, "always"]*/
/*eslint-env es6*/

function foo() {
    var bar,
        baz;
    let qux,
        norf;
}

function foo(){
    const bar = true,
        baz = false;
    let qux,
        norf;
}

function foo() {
    var bar,
        qux;

    if (baz) {
        qux = true;
    }
}

function foo(){
    let bar;

    if (baz) {
        let qux;
    }
}
```

When configured with `"never"` as the first option, the following patterns are considered problems:

当配置`"never"`做为第一个选项时，以下模式被认为是有问题的：

```js
/*eslint one-var: [2, "never"]*/
/*eslint-env es6*/

function foo() {
    var bar,
        baz;
    const bar = true,
        baz = false;
}

function foo() {
    var bar,
        qux;

    if (baz) {
        qux = true;
    }
}

function foo(){
    let bar = true,
        baz = false;
}
```

The following patterns are not considered problems:

以下模式被认为是没有问题的：

```js
/*eslint one-var: [2, "never"]*/
/*eslint-env es6*/

function foo() {
    var bar;
    var baz;
}

function foo() {
    var bar;

    if (baz) {
        var qux = true;
    }
}

function foo() {
    let bar;

    if (baz) {
        let qux = true;
    }
}
```

When configured with an object as the first option, you can individually control how `var`, `let`, and `const` are handled, or alternatively how `uninitialized` and `initialized` variables are handled (which if used will override `var`, `let`, and `const`).

当第一个选项配置为一个对象时，你可以单独控制如何处理`var`，`let`和 `const`，或者控制如何处理未声明的和已声明的变量(会覆盖`var`，`let`和 `const`)。

The following patterns are not considered problems:

以下模式被认为是没有问题的：

```js
/*eslint one-var: [2, { var: "always", let: "never", const: "never" }]*/
/*eslint-env es6*/

function foo() {
    var bar,
        baz;
    let qux;
    let norf;
}

function foo() {
    const bar = 1;
    const baz = 2;
    let qux;
    let norf;
}
```

The following patterns are not considered problems:

以下模式被认为是没有问题的：

```js
/*eslint one-var: [2, { uninitialized: "always", initialized: "never" }]*/

function foo() {
    var a, b, c;
    var foo = true;
    var bar = false;
}
```

If you are configuring the rule with an object, by default, if you didn't specify declaration type it will not be checked. So the following pattern is not considered a warning when options are set to: `{ var: "always", let: "always" }`

如果你正在使用一个对象进行配置规则，默认情况下，如果你不指定声明类型，它将不会被检查。所以，当选项设置为 `{ var: "always", let: "always" }`，以下模式不被认为是一个警告。

```js
/*eslint one-var: [2, { var: "always", let: "always" }]*/
/*eslint-env es6*/

function foo() {
    var a, b;
    const foo = true;
    const bar = true;
    let c, d;
}
```


## Compatibility

* **JSHint** - This rule maps to the `onevar` JSHint rule, but allows `let` and `const` to be configured separately.

* **JSHint** - 该规则对应 JSHint 规则中的`onevar`, 但 JSHint 中允许`let` 和 `const`分开配置。

* **JSCS** - This rule roughly maps to `"disallowMultipleVarDecl"`

* **JSCS** - 该规则对应`"disallowMultipleVarDecl"`

## Further Reading

[JSLint Errors - Combine this with the previous 'var' statement](http://jslinterrors.com/combine-this-with-the-previous-var-statement/)

## Version

This rule was introduced in ESLint 0.0.9.

该规则在 ESLint 0.0.9 被引入。

## Resources

* [Rule source](https://github.com/eslint/eslint/tree/master/lib/rules/one-var.js)
* [Documentation source](https://github.com/eslint/eslint/tree/master/docs/rules/one-var.md)
