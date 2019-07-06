---
title: class-methods-use-this - Rules
layout: doc
edit_link: https://github.com/eslint/eslint/edit/master/docs/rules/class-methods-use-this.md
rule_type: suggestion
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# Enforce that class methods utilize `this` (class-methods-use-this)

# 强制类方法使用 `this` (class-methods-use-this)

If a class method does not use `this`, it can safely be made a static function.

如果一个类方法不使用 `this`，可以安全的做为静态函数出现。

It's possible to have a class method which doesn't use `this`, such as:

可以有一个不使用 `this` 的类方法，比如：

```js
class A {
    constructor() {
        this.a = "hi";
    }

    print() {
        console.log(this.a);
    }

    sayHi() {
        console.log("hi");
    }
}

let a = new A();
a.sayHi(); // => "hi"
```

In the example above, the `sayHi` method doesn't use `this`, so we can make it a static method:

在上面的例子中，`sayHi` 方法没有使用 `this`，因此我们可以把它改造成静态方法：

```js
class A {
    constructor() {
        this.a = "hi";
    }

    print() {
        console.log(this.a);
    }

    static sayHi() {
        console.log("hi");
    }
}

A.sayHi(); // => "hi"
```

Also note in the above examples that the code calling the function on an *instance* of the class (`let a = new A(); a.sayHi();`) changes to calling it on the *class* itself (`A.sayHi();`).

还要注意，在上面的例子中，在类实例上调用函数 (`let a = new A(); a.sayHi();`) 改为在类自身上调用 (`A.sayHi();`)。

## Rule Details

This rule is aimed to flag class methods that do not use `this`.

该规则只在标记没有使用 `this` 的类方法。

Examples of **incorrect** code for this rule:

**错误** 代码示例：

```js
/*eslint class-methods-use-this: "error"*/
/*eslint-env es6*/

class A {
    foo() {
        console.log("Hello World");     /*error Expected 'this' to be used by class method 'foo'.*/
    }
}
```

Examples of **correct** code for this rule:

**正确** 代码示例：

```js
/*eslint class-methods-use-this: "error"*/
/*eslint-env es6*/
class A {
    foo() {
        this.bar = "Hello World"; // OK, this is used
    }
}

class A {
    constructor() {
        // OK. constructor is exempt
    }
}

class A {
    static foo() {
        // OK. static methods aren't expected to use this.
    }
}
```

## Options

### Exceptions

```
"class-methods-use-this": [<enabled>, { "exceptMethods": [<...exceptions>] }]
```

The `exceptMethods` option allows you to pass an array of method names for which you would like to ignore warnings. For example, you might have a spec from an external library that requires you to overwrite a method as a regular function (and not as a static method) and does not use `this` inside the function body. In this case, you can add that method to ignore in the warnings.

`exceptMethods` 选项允许你传递一个你想要忽略警告的方法名的数组。例如，你可能有一个来自外部库的规范，它要求你将方法作为常规函数(而不是静态方法)重写，并且在函数体中不使用 `this` 。在本例中，可以将该方法添加到警告中来忽略。

Examples of **incorrect** code for this rule when used without exceptMethods:

当使用 `exceptMethods` 时的 **错误** 代码示例：

```js
/*eslint class-methods-use-this: "error"*/

class A {
    foo() {
    }
}
```

Examples of **correct** code for this rule when used with exceptMethods:

当使用 `exceptMethods` 时的 **正确** 代码示例：

```js
/*eslint class-methods-use-this: ["error", { "exceptMethods": ["foo"] }] */

class A {
    foo() {
    }
}
```

## Further Reading

* [Classes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)
* [Static Methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/static)

## Version

This rule was introduced in ESLint 3.4.0.

该规则在 ESLint 3.4.0 中被引入。

## Resources

* [Rule source](https://github.com/eslint/eslint/tree/master/lib/rules/class-methods-use-this.js)
* [Documentation source](https://github.com/eslint/eslint/tree/master/docs/rules/class-methods-use-this.md)
