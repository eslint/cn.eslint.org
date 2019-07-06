---
title: no-void - Rules
layout: doc
edit_link: https://github.com/eslint/eslint/edit/master/docs/rules/no-void.md
rule_type: suggestion
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# Disallow use of the void operator. (no-void)

# 禁止使用void操作符 (no-void)

The `void` operator takes an operand and returns `undefined`: `void expression` will evaluate `expression` and return `undefined`. It can be used to ignore any side effects `expression` may produce:

`void` 操作符需要一个运算对象并且返回 `undefined`：`void expression` 会计算 `expression` 并返回 `undefined`。它可以用来忽略 `expression` 产生的任何副作用。

The common case of using `void` operator is to get a "pure" `undefined` value as prior to ES5 the `undefined` variable was mutable:

使用 `void` 操作符的通常情况是要得到一个单纯的 `undefined` 值，因为之前的 ES5 `undefined` 值是可变的:

```js
// will always return undefined
(function(){
    return void 0;
})();

// will return 1 in ES3 and undefined in ES5+
(function(){
    undefined = 1;
    return undefined;
})();

// will throw TypeError in ES5+
(function(){
    'use strict';
    undefined = 1;
})();
```

Another common case is to minify code as `void 0` is shorter than `undefined`:

另外一种情况是缩减代码量因为 `void 0` 比 `undefined` 要简短:

```js
foo = void 0;
foo = undefined;
```

When used with IIFE (immediately-invoked function expression), `void` can be used to force the function keyword to be treated as an expression instead of a declaration:

当在 IIFE (立即调用函数表达式)时被使用时,`void` 可以用来强制 function 关键字被当作成表达式而不是声明:

```js
var foo = 1;
void function(){ foo = 1; }() // will assign foo a value of 1
+function(){ foo = 1; }() // same as above
```

```
function(){ foo = 1; }() // will throw SyntaxError
```

Some code styles prohibit `void` operator, marking it as non-obvious and hard to read.

一些代码风格禁止使用 `void` 操作符，把它标记为不明显的，难以阅读的。

## Rule Details

This rule aims to eliminate use of void operator.

此规则目的在于排除使用 void 操作符。

Examples of **incorrect** code for this rule:

**错误** 代码示例：

```js
/*eslint no-void: "error"*/

void foo

var foo = void bar();
```

## When Not To Use It

If you intentionally use the `void` operator then you can disable this rule.

如果你有意使用 `void` 操作符，可以禁用此规则。

## Further Reading

* [Mozilla Developer Network](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/void)
* [Bad Parts: Appendix B - JavaScript: The Good Parts by Douglas Crockford](https://oreilly.com/javascript/excerpts/javascript-good-parts/bad-parts.html)

## Related Rules

* [no-undef-init](no-undef-init)
* [no-undefined](no-undefined)

## Version

This rule was introduced in ESLint 0.8.0.

该规则在 ESLint 0.8.0 中被引入。

## Resources

* [Rule source](https://github.com/eslint/eslint/tree/master/lib/rules/no-void.js)
* [Documentation source](https://github.com/eslint/eslint/tree/master/docs/rules/no-void.md)
