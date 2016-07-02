---
title: Rule arrow-parens
layout: doc
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# Require parens in arrow function arguments (arrow-parens)

# 要求箭头函数的参数使用圆括号 (arrow-parens)

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

The rule takes one option, a string, which could be either `"always"` or `"as-needed"`. The default is `"always"`.

该规则有一个可选项，是个字符串，可以为`"always"` 或 `"as-needed"`。默认为`"always"`。

You can set the option in configuration like this:

你可以在配置中这样设置：

```json
"arrow-parens": ["error", "always"]
```

### "always"

When the rule is set to `"always"` the following patterns are considered problems:

当设置为`"always"`，以下模式被认为是有问题的：

```js
/*eslint arrow-parens: ["error", "always"]*/
/*eslint-env es6*/

a => {};
a => a;
a => {'\n'};
a.then(foo => {});
a.then(foo => a);
a(foo => { if (true) {}; });
```

The following patterns are not considered problems:

以下模式被认为是没有问题的：

```js
/*eslint arrow-parens: ["error", "always"]*/
/*eslint-env es6*/

() => {};
(a) => {};
(a) => a;
(a) => {'\n'}
a.then((foo) => {});
a.then((foo) => { if (true) {}; });
```

#### If Statements

One benefits of this option is that it prevents the incorrect use of arrow functions in conditionals:

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
};
// outputs 'bigger', not smaller as expected
```

The contents of the `if` statement is an arrow function, not a comparison.
If the arrow function is intentional, it should be wrapped in parens to remove ambiguity.

`if`语句的内容是个箭头函数，不是比较语句。如果需要使用箭头函数，它需要被圆括号括起来以消除歧义。

```js
/*eslint-env es6*/

var a = 1;
var b = 0;
// ...
if ((a) => b) {
 console.log('truthy value returned');
} else {
 console.log('falsey value returned');
};
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

`f`是个箭头函数，`a`是其参数，返回的结果是`b ? c: d`。

This should be rewritten like so:

应该被重新为：

```js
/*eslint-env es6*/

var a = 1, b = 2, c = 3, d = 4;
var f = (a) => b ? c: d;
```


### "as-needed"

When the rule is set to `"as-needed"` the following patterns are considered problems:

当设置为`"as-needed"`，以下模式被认为是有问题的：

```js
/*eslint arrow-parens: ["error", "as-needed"]*/
/*eslint-env es6*/

(a) => {};
(a) => a;
(a) => {'\n'};
a.then((foo) => {});
a.then((foo) => a);
a((foo) => { if (true) {}; });
```

The following patterns are not considered problems:

以下模式被认为是没有问题的：

```js
/*eslint arrow-parens: ["error", "as-needed"]*/
/*eslint-env es6*/

() => {};
a => {};
a => a;
a => {'\n'};
a.then(foo => {});
a.then(foo => { if (true) {}; });
(a, b, c) => a;
(a = 10) => a;
([a, b]) => a;
({a, b}) => a;
```

## Version

This rule was introduced in ESLint 1.0.0-rc-1.

该规则在 ESLint 1.0.0-rc-1 中被引入。

## Resources

* [Rule source](https://github.com/eslint/eslint/tree/master/lib/rules/arrow-parens.js)
* [Documentation source](https://github.com/eslint/eslint/tree/master/docs/rules/arrow-parens.md)
