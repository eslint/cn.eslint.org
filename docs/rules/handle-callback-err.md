---
title: Rule handle-callback-err
layout: doc
translator: ILFront-End
proofreader: sunshiner
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# Enforce Callback Error Handling (handle-callback-err)

# 强制回调错误处理 (handle-callback-err)

In node, a common pattern for dealing with asynchronous behavior is called the callback pattern.
This pattern expects an `Error` object or `null` as the first argument of the callback.
Forgetting to handle these errors can lead to some really strange behavior in your application.

在node中，最普遍的处理异步行为是回调模式。这个模式期望一个`Error`对象或`null`作为回调的第一个参数。如果忘记处理这些错误会在应用导致错误。

```js
function loadData (err, data) {
    doSomething(); // forgot to handle error
}
```

## Rule Details

This rule expects that when you're using the callback pattern in node you'll handle the error and
requires that you specify the name of your error object. The name of the argument will default to `err`.

此规则要求在node中使用回调时要处理错误，并要求指定错误对象的名称。参数名称默认是`err`。

The following are considered problems:

以下模式被认为有问题的：

```js
/*eslint handle-callback-err: 2*/

function loadData (err, data) {
    doSomething();
}

```

The following are not considered problems:

以下模式被认为没有问题的：

```js
/*eslint handle-callback-err: 2*/

function loadData (err, data) {
    if (err) {
        console.log(err.stack);
    }
    doSomething();
}

function generateError (err) {
    if (err) {}
}
```

You can also customize the name of the error object:

你也可以自定义错误对象的名称：

```js
/*eslint handle-callback-err: [2, "error"]*/

function loadData (error, data) {
    if (error) {
       console.log(error.stack);
    }
}
```

### Advanced configuration

Sometimes (especially in big projects) the name of the error variable is not consistent across the project,
so you need a more flexible configuration to ensure all unhandled error getting recognized by this rule.

有时候（特别是在大项目中）错误变量名不都一致在整个项目中，所以你需要一个更加灵活的配置去确保未处理的错误得到此规则的认可。

If the configured name of the error variable begins with a `^` it is considered to be a regexp pattern.

如果错误变量的配置名以`^`开头被认为是一个正则模式。

Examples for valid configurations:

如下一个有效配置：

1. Rule configured to warn if an unhandled error is detected where the name of the error variable can be `err`, `error` or `anySpecificError`.

1. 规则配置如下将报警告，如果发现一个未处理错误，错误变量名是`err`, `error`或者`anySpecificError`。

    ```json
    // ...
    "handle-callback-err": [2, "^(err|error|anySpecificError)$" ]
    // ...
    ```

2. Rule configured to warn if an unhandled error is detected where the name of the error variable ends with `Error` (e. g. `connectionError` or `validationError` will match).

1. 规则配置如下将报警告，如果发现一个未处理错误，错误变量名以`Error`结尾。

    ```json
    // ...
    "handle-callback-err": [2, "^.+Error$" ]
    // ...
    ```

3. Rule configured to warn if an unhandled error is detected where the name of the error variable matches any string that contains `err` or `Err` (e. g. `err`, `error`, `anyError`, `some_err` will match).

1. 规则配置如下，如果发现未处理的错误的命名包含`err`或则`Err`将会警告。

    ```json
    // ...
    "handle-callback-err": [2, "^.*(e|E)rr" ]
    // ...
    ```

## When Not To Use It

There are cases where it may be safe for your application to ignore errors, however only ignore errors if you are
confident that some other form of monitoring will help you catch the problem.

如果一些情况下忽略错误处理并不影响应用的安全，并且你相信一些其他形式的监督将帮助你发现问题，这时可以不使用此规则。

## Further Reading

* [The Art Of Node: Callbacks](https://github.com/maxogden/art-of-node#callbacks)
* [Nodejitsu: What are the error conventions?](http://docs.nodejitsu.com/articles/errors/what-are-the-error-conventions)

## Version

This rule was introduced in ESLint 0.4.5.

此规则在ESLint 0.4.5被引入。

## Resources

* [Rule source](https://github.com/eslint/eslint/tree/master/lib/rules/handle-callback-err.js)
* [Documentation source](https://github.com/eslint/eslint/tree/master/docs/rules/handle-callback-err.md)
