---
title: keyword-spacing - Rules
layout: doc
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# enforce consistent spacing before and after keywords (keyword-spacing)

# 强制关键字周围空格的一致性 (keyword-spacing)

(fixable) The `--fix` option on the [command line](../user-guide/command-line-interface#fix) can automatically fix some of the problems reported by this rule.

(fixable) [命令行](../user-guide/command-line-interface#fix)中的 `--fix` 选项可以自动修复一些该规则报告的问题。

Keywords are syntax elements of JavaScript, such as `function` and `if`.
These identifiers have special meaning to the language and so often appear in a different color in code editors.
As an important part of the language, style guides often refer to the spacing that should be used around keywords.
For example, you might have a style guide that says keywords should be always surrounded by spaces, which would mean `if-else` statements must look like this:

关键字是 JavaScript 的语法元素，比如 `function` 和 `if`。这些标识符对 这门语言具有特殊的意义，所以，在代码编辑器内以不同的颜色显示。作为该语言很重要的一部分，风格指南常有关键字周围应该有空格的约定。例如，你可能有个风格指南说关键字周围应该总是有空格，`if-else` 语句就像这样：

```js
if (foo) {
    // ...
} else {
    // ...
}
```

Of course, you could also have a style guide that disallows spaces around keywords.

当然，你也可以有个禁止关键字前后的空格风格指南。

## Rule Details

This rule enforces consistent spacing around keywords and keyword-like tokens: `as` (in module declarations), `async` (of async functions), `await` (of await expressions), `break`, `case`, `catch`, `class`, `const`, `continue`, `debugger`, `default`, `delete`, `do`, `else`, `export`, `extends`, `finally`, `for`, `from` (in module declarations), `function`, `get` (of getters), `if`, `import`, `in`, `instanceof`, `let`, `new`, `of` (in for-of statements), `return`, `set` (of setters), `static`, `super`, `switch`, `this`, `throw`, `try`, `typeof`, `var`, `void`, `while`, `with`, and `yield`. This rule is designed carefully not to conflict with other spacing rules: it does not apply to spacing where other rules report problems.

该规则强制关键字和类似关键字的符号周围空格的一致性：`as`、`async`、`await`、`break`、`case`、`catch`、`class`、`const`、`continue`、`debugger`、`default`、`delete`、`do`、`else`、`export`、`extends`、`finally`、`for`、`from`、`function`、`get`、`if`、`import`、`in`、`instanceof`、`let`、`new`、`of`、`return`、`set`、`static`、`super`、`switch`、`this`、`throw`、`try`、`typeof`、`var`、`void`、`while`、`with` 和 `yield`。该规则不会与其它空格规则发生冲突：它并不应用于别的规则会报告问题的空格。

## Options

This rule has an object option:

该规则有一个对象选项：

* `"before": true` (default) requires at least one space before keywords
* `"before": true` (默认) 要求在关键字之前至少有一个空格
* `"before": false` disallows spaces before keywords
* `"before": false` 禁止在关键字之前有空格
* `"after": true` (default) requires at least one space after keywords
* `"after": true` (默认) 要求在关键字之后至少有一个空格
* `"after": false` disallows spaces after keywords
* `"after": false` 禁止在关键字之后有空格
* `"overrides"` allows overriding spacing style for specified keywords
* `"overrides"` 允许覆盖指定的关键字的空格风格

### before

Examples of **incorrect** code for this rule with the default `{ "before": true }` option:

默认选项 `{ "before": true }` 的 **错误** 代码示例：

```js
/*eslint keyword-spacing: ["error", { "before": true }]*/

if (foo) {
    //...
}else if (bar) {
    //...
}else {
    //...
}
```

Examples of **correct** code for this rule with the default `{ "before": true }` option:

默认选项 `{ "before": true }` 的 **正确** 代码示例：

```js
/*eslint keyword-spacing: ["error", { "before": true }]*/
/*eslint-env es6*/

if (foo) {
    //...
} else if (bar) {
    //...
} else {
    //...
}

// Avoid conflict with `array-bracket-spacing`
let a = [this];
let b = [function() {}];

// Avoid conflict with `arrow-spacing`
let a = ()=> this.foo;

// Avoid conflict with `block-spacing`
{function foo() {}}

// Avoid conflict with `comma-spacing`
let a = [100,this.foo, this.bar];

// Avoid conflict with `computed-property-spacing`
obj[this.foo] = 0;

// Avoid conflict with `generator-star-spacing`
function *foo() {}

// Avoid conflict with `key-spacing`
let obj = {
    foo:function() {}
};

// Avoid conflict with `object-curly-spacing`
let obj = {foo: this};

// Avoid conflict with `semi-spacing`
let a = this;function foo() {}

// Avoid conflict with `space-in-parens`
(function () {})();

// Avoid conflict with `space-infix-ops`
if ("foo"in {foo: 0}) {}
if (10+this.foo<= this.bar) {}

// Avoid conflict with `jsx-curly-spacing`
let a = <A foo={this.foo} bar={function(){}} />
```

Examples of **incorrect** code for this rule with the `{ "before": false }` option:

选项 `{ "before": false }` 的 **错误** 代码示例：

```js
/*eslint keyword-spacing: ["error", { "before": false }]*/

if (foo) {
    //...
} else if (bar) {
    //...
} else {
    //...
}
```

Examples of **correct** code for this rule with the `{ "before": false }` option:

选项 `{ "before": false }` 的 **正确** 代码示例：

```js
/*eslint keyword-spacing: ["error", { "before": false }]*/

if (foo) {
    //...
}else if (bar) {
    //...
}else {
    //...
}
```

### after

Examples of **incorrect** code for this rule with the default `{ "after": true }` option:

默认选项 `{ "after": true }` 的 **错误** 代码示例：

```js
/*eslint keyword-spacing: ["error", { "after": true }]*/

if(foo) {
    //...
} else if(bar) {
    //...
} else{
    //...
}
```

Examples of **correct** code for this rule with the default `{ "after": true }` option:

默认选项 `{ "after": true }` 的 **正确** 代码示例：

```js
/*eslint keyword-spacing: ["error", { "after": true }]*/

if (foo) {
    //...
} else if (bar) {
    //...
} else {
    //...
}

// Avoid conflict with `array-bracket-spacing`
let a = [this];

// Avoid conflict with `arrow-spacing`
let a = ()=> this.foo;

// Avoid conflict with `comma-spacing`
let a = [100, this.foo, this.bar];

// Avoid conflict with `computed-property-spacing`
obj[this.foo] = 0;

// Avoid conflict with `generator-star-spacing`
function* foo() {}

// Avoid conflict with `key-spacing`
let obj = {
    foo:function() {}
};

// Avoid conflict with `func-call-spacing`
class A {
    constructor() {
        super();
    }
}

// Avoid conflict with `object-curly-spacing`
let obj = {foo: this};

// Avoid conflict with `semi-spacing`
let a = this;function foo() {}

// Avoid conflict with `space-before-function-paren`
function() {}

// Avoid conflict with `space-infix-ops`
if ("foo"in{foo: 0}) {}
if (10+this.foo<= this.bar) {}

// Avoid conflict with `space-unary-ops`
function* foo(a) {
    return yield+a;
}

// Avoid conflict with `yield-star-spacing`
function* foo(a) {
    return yield* a;
}

// Avoid conflict with `jsx-curly-spacing`
let a = <A foo={this.foo} bar={function(){}} />
```

Examples of **incorrect** code for this rule with the `{ "after": false }` option:

选项 `{ "after": false }` 的 **错误** 代码示例：

```js
/*eslint keyword-spacing: ["error", { "after": false }]*/

if (foo) {
    //...
} else if (bar) {
    //...
} else {
    //...
}
```

Examples of **correct** code for this rule with the `{ "after": false }` option:

选项 `{ "after": false }` 的 **正确** 代码示例：

```js
/*eslint keyword-spacing: ["error", { "after": false }]*/

if(foo) {
    //...
} else if(bar) {
    //...
} else{
    //...
}
```

### overrides

Examples of **correct** code for this rule with the `{ "overrides": { "if": { "after": false }, "for": { "after": false }, "while": { "after": false } } }` option:

选项 `{ "overrides": { "if": { "after": false }, "for": { "after": false }, "while": { "after": false } } }` 的 **正确** 代码示例：

```js
/*eslint keyword-spacing: ["error", { "overrides": {
  "if": { "after": false },
  "for": { "after": false },
  "while": { "after": false }
} }]*/

if(foo) {
    //...
} else if(bar) {
    //...
} else {
    //...
}

for(;;);

while(true) {
  //...
}
```

## When Not To Use It

If you don't want to enforce consistency on keyword spacing, then it's safe to disable this rule.

如果你不想强制关键字空格的一致性，可以关闭此规则。

## Version

This rule was introduced in ESLint 2.0.0-beta.1.

该规则在 ESLint 2.0.0-beta.1 中被引入。

## Resources

* [Rule source](https://github.com/eslint/eslint/tree/master/lib/rules/keyword-spacing.js)
* [Documentation source](https://github.com/eslint/eslint/tree/master/docs/rules/keyword-spacing.md)
