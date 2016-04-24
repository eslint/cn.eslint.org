---
title: Rule no-useless-constructor
layout: doc
translator: molee1905
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# Disallow unnecessary constructor (no-useless-constructor)

# 禁用不必要的构造函数 (no-useless-constructor)

ES2015 provides a default class constructor if one is not specified. As such, it is unnecessary to provide an empty constructor or one that simply delegates into its parent class, as in the following examples:

ES2015 为没有指定构造函数的类提供了默认构造函数。因此，没有必要提供一个空的构造函数或只是简单的调用父类这样的构造函数，如下面的列子所示：

```js
class A {
    constructor () {
    }
}

class A extends B {
    constructor (value) {
      super(value);
    }
}
```

## Rule Details

This rule flags class constructors that can be safely removed without changing how the class works.

该规则标记可以被安全移除但又不改变类的行为的构造函数。

The following patterns are considered problems:

以下模式被认为是有问题的：

```js
/*eslint no-useless-constructor: "error"*/
/*eslint-env es6*/

class A {
    constructor () {
    }
}

class A extends B {
    constructor (...args) {
      super(...args);
    }
}
```

The following patterns are not considered problems:

以下模式被认为是没有问题的：

```js
/*eslint no-useless-constructor: "error"*/

class A { }

class A {
    constructor () {
        doSomething();
    }
}

class A extends B {
    constructor() {
        super('foo');
    }
}

class A extends B {
    constructor() {
        super();
        doSomething();
    }
}
```

## When Not To Use It

If you don't want to be notified about unnecessary constructors, you can safely disable this rule.

如果你不想收到关于不必要的构造函数的通知，你也可以禁用此规则。

## Version

This rule was introduced in ESLint 2.0.0-beta.1.

该规则在 ESLint 2.0.0-beta.1 中被引入。

## Resources

* [Rule source](https://github.com/eslint/eslint/tree/master/lib/rules/no-useless-constructor.js)
* [Documentation source](https://github.com/eslint/eslint/tree/master/docs/rules/no-useless-constructor.md)
