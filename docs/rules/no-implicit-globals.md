---
title: no-implicit-globals - Rules
layout: doc
edit_link: https://github.com/eslint/eslint/edit/master/docs/rules/no-implicit-globals.md
rule_type: suggestion
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# disallow variable and `function` declarations in the global scope (no-implicit-globals)

# 禁止在全局范围使用变量和函数声明 (no-implicit-globals)

When working with browser scripts, developers often forget that variable and function declarations at the top-level scope become global variables on the `window` object. As opposed to modules which have their own scope. Globals should be explicitly assigned to `window` or `self` if that is the intent. Otherwise variables intended to be local to the script should be wrapped in an IIFE.

当使用浏览器端脚本时，开发者经常忘记在顶级作用域下变量和函数声明都会变成全局变量，作为 `window` 对象的一个属性或方法存在。它们没有自己的作用域，这一点与模块不一样。全局变量应该显式地赋值给 `window` 或 `self`。否则，局部变量应该包裹在 IIFE 中。

## Rule Details

This rule disallows `var` and named `function` declarations at the top-level script scope. This does not apply to ES and CommonJS modules since they have a module scope.

该规则禁止在顶级作用域下使用 `var` 和命名的 `function` 声明。该规则不适用于 ES 和 CommonJS 的模块，因为它们有自己的模块作用域。

Examples of **incorrect** code for this rule:

**错误** 代码示例：

```js
/*eslint no-implicit-globals: "error"*/

var foo = 1;

function bar() {}
```

Examples of **correct** code for this rule:

**正确** 代码示例：

```js
/*eslint no-implicit-globals: "error"*/

// explicitly set on window
window.foo = 1;
window.bar = function() {};

// intended to be scope to this file
(function() {
  var foo = 1;

  function bar() {}
})();
```

Examples of **correct** code for this rule with `"parserOptions": { "sourceType": "module" }` in the ESLint configuration:

选项 `"parserOptions": { "sourceType": "module" }` 的 **正确** 代码示例：

```js
/*eslint no-implicit-globals: "error"*/

// foo and bar are local to module
var foo = 1;
function bar() {}
```

## When Not To Use It

If you want to be able to declare variables and functions in the global scope you can safely disable this rule. Or if you are always using module scoped files, this rule will never apply.

如果你希望能够在全局作用域下声明变量和函数，你可以禁用此规则。如果你总是使用模块作用域的文件，该规则将永远不会起作用。

## Further Reading

* [Immediately-Invoked Function Expression (IIFE)](http://benalman.com/news/2010/11/immediately-invoked-function-expression/)

## Version

This rule was introduced in ESLint 2.0.0-alpha-1.

该规则在 ESLint 2.0.0-alpha-1 中被引入。

## Resources

* [Rule source](https://github.com/eslint/eslint/tree/master/lib/rules/no-implicit-globals.js)
* [Documentation source](https://github.com/eslint/eslint/tree/master/docs/rules/no-implicit-globals.md)
