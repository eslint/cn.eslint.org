---
title: Rule no-wrap-func
layout: doc
translator: yanggao40
proofreader: coocon 
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# Disallow Parens Around Functions (no-wrap-func)

# 禁止括号包围函数 (no-wrap-func)

**Replacement notice**: This rule was removed in ESLint v1.0 and replaced by the [no-extra-parens](no-extra-parens) rule, when configured in the `"functions"` mode.

**替换声明：**该规则在 ESLint v1.0 中移除，当在 `"functions"` 模式下配置时，被 [no-extra-parens](no-extra-parens) 替代。


Although it's possible to wrap functions in parentheses, this can be confusing when the code also contains immediately-invoked function expressions (IIFEs) since parentheses are often used to make this distinction. For example:

尽管圆括号包围函数是可能的，当代码同时含有立即执行函数表达式（IIFEs）时会造成混淆，因为圆括号常常被这样使用。例如：

```js
var foo = (function() {
    // IIFE
}());

var bar = (function() {
    // not an IIFE
});
```

## Rule Details

This rule will raise a warning when it encounters a function expression wrapped in parentheses with no following invoking parentheses.

当遇到用圆括号包围函数表达式且没有跟随的调用括号时该规则会发出警告。

The following patterns are considered problems:

下面的模式被认为有问题的：

```js
var a = (function() {/*...*/});
```

The following patterns are not considered problems:

下面的模式被认为是正确的：

```js
var a = function() {/*...*/};

(function() {/*...*/})();
```

## Further Reading

* [Do not wrap function literals in parens unless they are to be immediately invoked](http://jslinterrors.com/do-not-wrap-function-literals-in-parens)

## Version

This rule was introduced in ESLint 0.0.9 and removed in 1.0.0-rc-1.

该规则在 ESLint 0.0.9 中引入，在 1.0.0-rc-1 中移除。

## Resources

* [Documentation source](https://github.com/eslint/eslint/tree/master/docs/rules/no-wrap-func.md)
