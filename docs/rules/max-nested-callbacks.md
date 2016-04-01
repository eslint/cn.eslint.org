---
title: Rule max-nested-callbacks
layout: doc
translator: molee1905
proofreader: molee1905
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# Set Maximum Depth of Nested Callbacks (max-nested-callbacks)

# 设置回调函数最大嵌套深度 (max-nested-callbacks)

Many JavaScript libraries use the callback pattern to manage asynchronous operations. A program of any complexity will most likely need to manage several asynchronous operations at various levels of concurrency. A common pitfall that is easy to fall into is nesting callbacks, which makes code more difficult to read the deeper the callbacks are nested.

很多 Javascript 类库是使用回调模式处理异步操作。任何复杂的程序都将最有可能在不同级别的并发性下处理多个异步回调操作。一个最长见的隐患就是嵌套的回调，使得代码嵌套层级越深越难以阅读。

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

This rule is aimed at increasing code clarity by discouraging deeply nesting callbacks. As such, it will warn when callbacks are nested deeper than the specified limit.

该规则旨在通过阻止深层次的嵌套回调，来提高代码的清晰度。因此，如果回调函数嵌套的深度超过指定的限制，该规则将发出警告。

## Options

The default max depth for this rule is 10. You can define the depth as an option by using the second argument in your configuration. For example, this sets the rule as an error (code is 2) with a maximum depth of 3:

该规则默认的最大深度是10。你可以通过在你的配置中使用第二个参数作为一个选项定义这个深度值。例如，以下将设置规则为错误级别(代码为2)，最大深度为3：     

```json
"max-nested-callbacks": [2, 3]

// or you can use an object property

"max-nested-callbacks": [2, {"maximum": 3}]
```

The following patterns are considered problems:

以下模式被认为是有问题的：

```js
/*eslint max-nested-callbacks: [2, 3]*/

foo(function () {
    bar(function () {
        baz(function() {
            qux(function () {

            });
        });
    });
});
```

The following patterns are not considered problems:

以下模式被认为是没有问题的

```js
/*eslint max-nested-callbacks: [2, 3]*/

foo(handleFoo);

function handleFoo (){
    bar(handleBar);
}

function handleBar() {
    baz(handleBaz);
}

function handleBaz() {
    qux(handleQux);
}

function handleQux() {

}
```

## Further Reading

* [Control flow in Node.js](http://book.mixu.net/node/ch7.html)
* [Control Flow in Node](http://howtonode.org/control-flow)
* [Control Flow in Node Part II](http://howtonode.org/control-flow-part-ii)

## Related Rules

* [complexity](complexity)
* [max-depth](max-depth)
* [max-len](max-len)
* [max-params](max-params)
* [max-statements](max-statements)

## Version

This rule was introduced in ESLint 0.2.0.

该规则在 ESLint 0.2.0 中被引入。

## Resources

* [Rule source](https://github.com/eslint/eslint/tree/master/lib/rules/max-nested-callbacks.js)
* [Documentation source](https://github.com/eslint/eslint/tree/master/docs/rules/max-nested-callbacks.md)
