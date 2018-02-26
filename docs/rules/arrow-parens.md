---
title: arrow-parens - Rules
layout: doc
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# Require parens in arrow function arguments (arrow-parens)

# 要求箭头函数的参数使用圆括号 (arrow-parens)

(fixable) The `--fix` option on the [command line](../user-guide/command-line-interface#fix) can automatically fix some of the problems reported by this rule.

(fixable) [命令行](../user-guide/command-line-interface#fix)中的 `--fix` 选项可以自动修复一些该规则报告的问题。

Arrow functions can omit parentheses when they have exactly one parameter. In all other cases the parameter(s) must
be wrapped in parentheses. This rule enforces the consistent use of parentheses in arrow functions.

箭头函数体只有一个参数时，可以省略圆括号。其它任何情况，参数都应被圆括号括起来。该规则强制箭头函数中圆括号的使用的一致性。

## Rule Details

This rule enforces parentheses around arrow function parameters regardless of arity. For example:

该规则强制箭头函数的参数使用圆括号括起来，不论参数数量如何。例如：

```js
/*eslint-env es6*/

// Bad
a => {}

// Good
(a) => {}
```

Following this style will help you find arrow functions (`=>`) which may be mistakenly included in a condition
when a comparison such as `>=` was the intent.

这种风格将帮助你找到被错误地包含到条件语句中的箭头函数(`=>`)，其本意是想使用比较语句的，比如`>=`

```js
/*eslint-env es6*/

// Bad
if (a => 2) {
}

// Good
if (a >= 2) {
}
```

The rule can also be configured to discourage the use of parens when they are not required:

该规则可以配置在不需要使用圆括号时，阻止圆括号的使用。

```js
/*eslint-env es6*/

// Bad
(a) => {}

// Good
a => {}
```

## Options

This rule has a string option and an object one.

该规则有一个字符串选项和一个对象选项。

String options are:

字符串选项：

* `"always"` (default) requires parens around arguments in all cases.
* `"always"` (默认) 要求在所有情况下使用圆括号将参数括起来。
* `"as-needed"` allows omitting parens when there is only one argument.
* `"as-needed"` 当只有一个参数时允许省略圆括号。

Object properties for variants of the `"as-needed"` option:

`"as-needed"` 选项的对象属性：

* `"requireForBlockBody": true` modifies the as-needed rule in order to require parens if the function body is in an instructions block (surrounded by braces).
* `"requireForBlockBody": true` 修改 as-needed 规则以便如果函数体在一个指令块中（被花括号括起来）要求使用圆括号把参数括起来。

### always

Examples of **incorrect** code for this rule with the default `"always"` option:

默认选项 `"always"` 的 **错误** 代码示例：

```js
/*eslint arrow-parens: ["error", "always"]*/
/*eslint-env es6*/

a => {};
a => a;
a => {'\n'};
a.then(foo => {});
a.then(foo => a);
a(foo => { if (true) {} });
```

Examples of **correct** code for this rule with the default `"always"` option:

默认选项 `"always"` 的 **正确** 代码示例：

```js
/*eslint arrow-parens: ["error", "always"]*/
/*eslint-env es6*/

() => {};
(a) => {};
(a) => a;
(a) => {'\n'}
a.then((foo) => {});
a.then((foo) => { if (true) {} });
```

#### If Statements

One of benefits of this option is that it prevents the incorrect use of arrow functions in conditionals:

该选项的一个好处是，它阻止了在条件语句中不正确地使用箭头函数。

```js
/*eslint-env es6*/

var a = 1;
var b = 2;
// ...
if (a => b) {
 console.log('bigger');
} else {
 console.log('smaller');
}
// outputs 'bigger', not smaller as expected
```

The contents of the `if` statement is an arrow function, not a comparison.

`if`语句的内容是个箭头函数，不是比较语句。

If the arrow function is intentional, it should be wrapped in parens to remove ambiguity.

如果需要使用箭头函数，它需要被圆括号括起来以消除歧义。

```js
/*eslint-env es6*/

var a = 1;
var b = 0;
// ...
if ((a) => b) {
 console.log('truthy value returned');
} else {
 console.log('falsey value returned');
}
// outputs 'truthy value returned'
```

The following is another example of this behavior:

下面是另一个示例：

```js
/*eslint-env es6*/

var a = 1, b = 2, c = 3, d = 4;
var f = a => b ? c: d;
// f = ?
```

`f` is an arrow function which takes `a` as an argument and returns the result of `b ? c: d`.

`f` 是个箭头函数，`a` 是其参数，返回的结果是 `b ? c: d`。

This should be rewritten like so:

应该被重写为：

```js
/*eslint-env es6*/

var a = 1, b = 2, c = 3, d = 4;
var f = (a) => b ? c: d;
```

### as-needed

Examples of **incorrect** code for this rule with the `"as-needed"` option:

选项 `"as-needed"` 的 **错误** 代码示例：

```js
/*eslint arrow-parens: ["error", "as-needed"]*/
/*eslint-env es6*/

(a) => {};
(a) => a;
(a) => {'\n'};
a.then((foo) => {});
a.then((foo) => a);
a((foo) => { if (true) {} });
```

Examples of **correct** code for this rule with the `"as-needed"` option:

选项 `"as-needed"` 的 **正确** 代码示例：

```js
/*eslint arrow-parens: ["error", "as-needed"]*/
/*eslint-env es6*/

() => {};
a => {};
a => a;
a => {'\n'};
a.then(foo => {});
a.then(foo => { if (true) {} });
(a, b, c) => a;
(a = 10) => a;
([a, b]) => a;
({a, b}) => a;
```

### requireForBlockBody

Examples of **incorrect** code for the `{ "requireForBlockBody": true }` option:

选项 `{ "requireForBlockBody": true }` 的 **错误** 代码示例：

```js
/*eslint arrow-parens: [2, "as-needed", { "requireForBlockBody": true }]*/
/*eslint-env es6*/

(a) => a;
a => {};
a => {'\n'};
a.map((x) => x * x);
a.map(x => {
  return x * x;
});
a.then(foo => {});
```

Examples of **correct** code for the `{ "requireForBlockBody": true }` option:

选项 `{ "requireForBlockBody": true }` 的 **正确** 代码示例：

```js
/*eslint arrow-parens: [2, "as-needed", { "requireForBlockBody": true }]*/
/*eslint-env es6*/

(a) => {};
(a) => {'\n'};
a => ({});
() => {};
a => a;
a.then((foo) => {});
a.then((foo) => { if (true) {} });
a((foo) => { if (true) {} });
(a, b, c) => a;
(a = 10) => a;
([a, b]) => a;
({a, b}) => a;
```

## Further Reading

* The `"as-needed", { "requireForBlockBody": true }` rule is directly inspired by the Airbnb
 [JS Style Guide](https://github.com/airbnb/javascript#arrows--one-arg-parens).

## Version

This rule was introduced in ESLint 1.0.0-rc-1.

该规则在 ESLint 1.0.0-rc-1 中被引入。

## Resources

* [Rule source](https://github.com/eslint/eslint/tree/master/lib/rules/arrow-parens.js)
* [Documentation source](https://github.com/eslint/eslint/tree/master/docs/rules/arrow-parens.md)
