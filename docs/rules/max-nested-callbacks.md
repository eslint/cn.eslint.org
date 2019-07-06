---
title: max-nested-callbacks - Rules
layout: doc
edit_link: https://github.com/eslint/eslint/edit/master/docs/rules/max-nested-callbacks.md
rule_type: suggestion
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# enforce a maximum depth that callbacks can be nested (max-nested-callbacks)

# 强制回调函数最大嵌套深度 (max-nested-callbacks)

Many JavaScript libraries use the callback pattern to manage asynchronous operations. A program of any complexity will most likely need to manage several asynchronous operations at various levels of concurrency. A common pitfall that is easy to fall into is nesting callbacks, which makes code more difficult to read the deeper the callbacks are nested.

很多 JavaScript 类库是使用回调模式处理异步操作。任何复杂的程序都将最有可能在不同级别的并发性下处理多个异步回调操作。一个最长见的隐患就是嵌套的回调，使得代码嵌套层级越深越难以阅读。

```js
foo(function () {
    bar(function () {
        baz(function() {
            qux(function () {

            });
        });
    });
});
```

## Rule Details

This rule enforces a maximum depth that callbacks can be nested to increase code clarity.

该规则旨在强制回调函数最大可嵌套深度，以提高代码的清晰度。

## Options

This rule has a number or object option:

该规则有一个数字或对象选项：

* `"max"` (default `10`) enforces a maximum depth that callbacks can be nested
* `"max"` (默认 `10`) 强制回调函数最大可嵌套深度

**Deprecated:** The object property `maximum` is deprecated; please use the object property `max` instead.

**已弃用：** `maximum` 属性已弃用；请使用 `max` 属性。

### max

Examples of **incorrect** code for this rule with the `{ "max": 3 }` option:

选项 `{ "max": 3 }` 的 **错误** 代码示例：

```js
/*eslint max-nested-callbacks: ["error", 3]*/

foo1(function() {
    foo2(function() {
        foo3(function() {
            foo4(function() {
                // Do something
            });
        });
    });
});
```

Examples of **correct** code for this rule with the `{ "max": 3 }` option:

选项 `{ "max": 3 }` 的 **正确** 代码示例：

```js
/*eslint max-nested-callbacks: ["error", 3]*/

foo1(handleFoo1);

function handleFoo1() {
    foo2(handleFoo2);
}

function handleFoo2() {
    foo3(handleFoo3);
}

function handleFoo3() {
    foo4(handleFoo4);
}

function handleFoo4() {
    foo5();
}
```

## Further Reading

* [Control flow in Node.js](http://book.mixu.net/node/ch7.html)
* [Control Flow in Node](https://howtonode.org/control-flow)
* [Control Flow in Node Part II](https://howtonode.org/control-flow-part-ii)

## Related Rules

* [complexity](complexity)
* [max-depth](max-depth)
* [max-len](max-len)
* [max-lines](max-lines)
* [max-lines-per-function](max-lines-per-function)
* [max-params](max-params)
* [max-statements](max-statements)

## Version

This rule was introduced in ESLint 0.2.0.

该规则在 ESLint 0.2.0 中被引入。

## Resources

* [Rule source](https://github.com/eslint/eslint/tree/master/lib/rules/max-nested-callbacks.js)
* [Documentation source](https://github.com/eslint/eslint/tree/master/docs/rules/max-nested-callbacks.md)
