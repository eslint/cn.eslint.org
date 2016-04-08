---
title: Rule constructor-super
layout: doc
translator: molee1905
proofreader: sunshiner
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# Verify calls of `super()` in constructors (constructor-super)

# 验证构造函数中`super()`的调用 (constructor-super)

Constructors of derived classes must call `super()`.
Constructors of non derived classes must not call `super()`.
If this is not observed, the javascript engine will raise a runtime error.

派生类中的构造函数必须调用`super()`。非派生类的构造函数不能调用`super()`。如果没有监视到，javascript 引擎将引发一个运行时错误

This rule checks whether or not there is a valid `super()` call.

该规则检查是否有一个有效的 `super()`调用。

## Rule Details

This rule is aimed to flag invalid/missing `super()` calls.

该规则旨在标记无效或缺失的`super()`调用。

The following patterns are considered problems:

以下模式被认为是有问题的：

```js
/*eslint constructor-super: "error"*/
/*eslint-env es6*/

class A {
    constructor() {
        super();
    }
}

class A extends null {
    constructor() {
        super();
    }
}

class A extends B {
    constructor() { }
}
```

The following patterns are not considered problems:

以下模式被认为是没有问题的：

```js
/*eslint constructor-super: "error"*/
/*eslint-env es6*/

class A {
    constructor() { }
}

class A extends null {
    constructor() { }
}

class A extends B {
    constructor() {
        super();
    }
}
```

## When Not To Use It

If you don't want to be notified about invalid/missing `super()` callings in constructors, you can safely disable this rule.

如果你不想收到构造函数中无效或缺失的`super()`调用，你可以关闭此规则。

## Version

This rule was introduced in ESLint 0.24.0.

该规则在 ESLint 0.24.0 中被引入。

## Resources

* [Rule source](https://github.com/eslint/eslint/tree/master/lib/rules/constructor-super.js)
* [Documentation source](https://github.com/eslint/eslint/tree/master/docs/rules/constructor-super.md)
