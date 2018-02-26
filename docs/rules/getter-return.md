---
title: getter-return - Rules
layout: doc
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# Enforces that a return statement is present in property getters (getter-return)

# 强制在 getter 属性中出现一个 return 语句 (getter-return)

The get syntax binds an object property to a function that will be called when that property is looked up. It was first introduced in ECMAScript 5:

get 语法将对象属性绑定到一个函数，该函数在查找该属性时将被调用。这是首次在 ECMAScript 5 中引入：

```js
    var p = {
        get name(){
            return "nicholas";
        }
    };

    Object.defineProperty(p, "age", {
        get: function (){
            return 17;
        }
    });
```

Note that every `getter` is expected to return a value.

注意，每个 `getter` 都期望有返回值。

## Rule Details

This rule enforces that a return statement is present in property getters.

该规则前置在属性 getter 中出现 return 语句。

Examples of **incorrect** code for this rule:

**错误** 代码示例：

```js
/*eslint getter-return: "error"*/

p = {
    get name(){
        // no returns.
    }
};

Object.defineProperty(p, "age", {
    get: function (){
        // no returns.
    }
});

class P{
    get name(){
        // no returns.
    }
}
```

Examples of **correct** code for this rule:

**正确** 代码示例：

```js
/*eslint getter-return: "error"*/

p = {
    get name(){
        return "nicholas";
    }
};

Object.defineProperty(p, "age", {
    get: function (){
        return 18;
    }
});

class P{
    get name(){
        return "nicholas";
    }
}
```

## Options

This rule has an object option:

该规则有一个对象选项：

* `"allowImplicit": false` (default) disallows implicitly returning undefined with a return; statement.
* `"allowImplicit": false` (默认) 禁止在 return 语句中隐式地返回未定义。

Examples of **correct** code for the `{ "allowImplicit": true }` option:

选项 `{ "allowImplicit": true }` 的 **正确** 代码示例：

```js
/*eslint getter-return: ["error", { allowImplicit: true }]*/
p = {
    get name(){
        return; // return undefined implicitly.
    }
};
```

## When Not To Use It

If your project will not be using ES5 property getters you do not need this rule.

如果你的项目不使用 ES5 属性 getter，你不需要使用此规则。

## Further Reading

* [MDN: Functions getter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/get)
* [Understanding ES6: Accessor Properties](https://leanpub.com/understandinges6/read/#leanpub-auto-accessor-properties)

## Version

This rule was introduced in ESLint 4.2.0.

该规则在 ESLint 4.2.0 中被引入。

## Resources

* [Rule source](https://github.com/eslint/eslint/tree/master/lib/rules/getter-return.js)
* [Documentation source](https://github.com/eslint/eslint/tree/master/docs/rules/getter-return.md)
