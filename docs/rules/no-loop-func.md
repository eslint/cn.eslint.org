---
title: Rule no-loop-func
layout: doc
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# Disallow Functions in Loops (no-loop-func)

# 禁止循环中存在函数 (no-loop-func)

Writing functions within loops tends to result in errors due to the way the function creates a closure around the loop. For example:

在循环中创建函数往往会出现错误，因为这种情况下，函数会创建一个闭包。例如：

```js
for (var i = 0; i < 10; i++) {
    funcs[i] = function() {
        return i;
    };
}
```

In this case, you would expect each function created within the loop to return a different number. In reality, each function returns 10, because that was the last value of `i` in the scope.

在这个例子中，你希望在循环中创建的每个函数返回一个不同的数字。实际上，每个函数都返回作用域中 `i` 的最后一个值 10。

`let` or `const` mitigate this problem.

`let` 或 `const` 规避了这个问题。 

```js
/*eslint-env es6*/

for (let i = 0; i < 10; i++) {
    funcs[i] = function() {
        return i;
    };
}
```

In this case, each function created within the loop returns a different number as expected.

在这个例子中，在循环中创建的每一个函数会如你期望的那样返回一个不同的数字。

## Rule Details

This error is raised to highlight a piece of code that may not work as you expect it to and could also indicate a misunderstanding of how the language works. Your code may run without any problems if you do not fix this error, but in some situations it could behave unexpectedly.

这个错误的出现会导致代码不能如你期望的那样运行，也表明你对 JavaScript 这门语言存在误解。
如果你不修复这个错误，你的代码可能会正常运行，带在某些情况下，可能会出现意想不到的行为。

Examples of **incorrect** code for this rule:

**错误** 代码示例：

```js
/*eslint no-loop-func: "error"*/
/*eslint-env es6*/

for (var i=10; i; i--) {
    (function() { return i; })();
}

while(i) {
    var a = function() { return i; };
    a();
}

do {
    function a() { return i; };
    a();
} while (i);

let foo = 0;
for (let i=10; i; i--) {
    // Bad, function is referencing block scoped variable in the outer scope.
    var a = function() { return foo; };
    a();
}
```

Examples of **correct** code for this rule:

**正确** 代码示例：


```js
/*eslint no-loop-func: "error"*/
/*eslint-env es6*/

var a = function() {};

for (var i=10; i; i--) {
    a();
}

for (var i=10; i; i--) {
    var a = function() {}; // OK, no references to variables in the outer scopes.
    a();
}

for (let i=10; i; i--) {
    var a = function() { return i; }; // OK, all references are referring to block scoped variables in the loop.
    a();
}

var foo = 100;
for (let i=10; i; i--) {
    var a = function() { return foo; }; // OK, all references are referring to never modified variables.
    a();
}
//... no modifications of foo after this loop ...
```

## Further Reading

* [Don't make functions within a loop](http://jslinterrors.com/dont-make-functions-within-a-loop/)

## Version

This rule was introduced in ESLint 0.0.9.

该规则在 ESLint 0.0.9 中被引入。

## Resources

* [Rule source](https://github.com/eslint/eslint/tree/master/lib/rules/no-loop-func.js)
* [Documentation source](https://github.com/eslint/eslint/tree/master/docs/rules/no-loop-func.md)
