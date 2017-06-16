---
title: no-this-before-super - Rules
layout: doc
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# Disallow use of `this`/`super` before calling `super()` in constructors. (no-this-before-super)

# 在构造函数中禁止在调用`super()`之前使用`this`或`super`。 (no-this-before-super)

(recommended) The `"extends": "eslint:recommended"` property in a configuration file enables this rule.

(recommended) 配置文件中的 `"extends": "eslint:recommended"` 属性启用了此规则。

In the constructor of derived classes, if `this`/`super` are used before `super()` calls, it raises a reference error.

在派生类的构造函数中，如果在调用 `super()` 之前使用 `this` 或 `super`，它将会引发一个引用错误。

This rule checks `this`/`super` keywords in constructors, then reports those that are before `super()`.

该规则检测构造函数中的 `this` 或 `super` 关键字，然后报告那些在 `super()` 之前使用 `this` 或 `super` 的情况。

## Rule Details

This rule is aimed to flag `this`/`super` keywords before `super()` callings.

该规则旨在标记出在调用 `super()` 之前使用 `this` 或 `super` 的情况。

## Examples

Examples of **incorrect** code for this rule:

**错误** 代码示例：

```js
/*eslint no-this-before-super: "error"*/
/*eslint-env es6*/

class A extends B {
    constructor() {
        this.a = 0;
        super();
    }
}

class A extends B {
    constructor() {
        this.foo();
        super();
    }
}

class A extends B {
    constructor() {
        super.foo();
        super();
    }
}

class A extends B {
    constructor() {
        super(this.foo());
    }
}
```

Examples of **correct** code for this rule:

**正确** 代码示例：

```js
/*eslint no-this-before-super: "error"*/
/*eslint-env es6*/

class A {
    constructor() {
        this.a = 0; // OK, this class doesn't have an `extends` clause.
    }
}

class A extends B {
    constructor() {
        super();
        this.a = 0; // OK, this is after `super()`.
    }
}

class A extends B {
    foo() {
        this.a = 0; // OK. this is not in a constructor.
    }
}
```

## When Not To Use It

If you don't want to be notified about using `this`/`super` before `super()` in constructors, you can safely disable this rule.

如果你不想收到关于构造函数中调用 `super()` 之前使用 `this` 或 `super` 情况的通知，关闭此规则即可。

## Version

This rule was introduced in ESLint 0.24.0.

该规则在 ESLint 0.24.0 中被引入。

## Resources

* [Rule source](https://github.com/eslint/eslint/tree/master/lib/rules/no-this-before-super.js)
* [Documentation source](https://github.com/eslint/eslint/tree/master/docs/rules/no-this-before-super.md)
