---
title: Rule handle-callback-err
layout: doc
translator: ILFront-End
proofreader: sunshiner
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# Enforce Callback Error Handling (handle-callback-err)

# 强制回调错误处理 (handle-callback-err)

In Node.js, a common pattern for dealing with asynchronous behavior is called the callback pattern.

在 Node.js 中，最普遍的处理异步行为是回调模式。

This pattern expects an `Error` object or `null` as the first argument of the callback.

这个模式期望一个`Error`对象或`null`作为回调的第一个参数。

Forgetting to handle these errors can lead to some really strange behavior in your application.

如果忘记处理这些错误会导致你的应用程序出现一些非常奇怪的行为。

```js
function loadData (err, data) {
    doSomething(); // forgot to handle error
}
```

## Rule Details

This rule expects that when you're using the callback pattern in Node.js you'll handle the error.

该规则期望当你在 Node.js 中使用回调模式时，你将处理错误。

## Options

The rule takes a single string option: the name of the error parameter. The default is `"err"`.

该规则只有一个字符串选项：错误参数的名称。默认是`err`。

Examples of **incorrect** code for this rule with the default `"err"` parameter name:

默认参数`"err"`的 **错误**代码示例：

```js
/*eslint handle-callback-err: "error"*/

function loadData (err, data) {
    doSomething();
}

```

Examples of **correct** code for this rule with the default `"err"` parameter name:

默认参数`"err"`的 **正确**代码示例：

```js
/*eslint handle-callback-err: "error"*/

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

Examples of **correct** code for this rule with a sample `"error"` parameter name:

参数`"error"`的 **正确**代码示例：

```js
/*eslint handle-callback-err: ["error", "error"]*/

function loadData (error, data) {
    if (error) {
       console.log(error.stack);
    }
    doSomething();
}
```

### regular expression

Sometimes (especially in big projects) the name of the error variable is not consistent across the project,
so you need a more flexible configuration to ensure that the rule reports all unhandled errors.

有时候（特别是在大项目中）错误变量名不都一致在整个项目中，所以你需要一个更加灵活的配置去确保未处理的错误得到此规则的认可。

If the configured name of the error variable begins with a `^` it is considered to be a regexp pattern.

如果错误变量的配置名以`^`开头被认为是一个正则模式。
 
* If the option is `"^(err|error|anySpecificError)$"`, the rule reports unhandled errors where the parameter name can be `err`, `error` or `anySpecificError`.

* 如果这个选项是`"^(err|error|anySpecificError)$"`，当参数名为`err`, `error` or `anySpecificError`时，该规则会报告有未处理的错误。

* If the option is `"^.+Error$"`, the rule reports unhandled errors where the parameter name ends with `Error` (for example, `connectionError` or `validationError` will match).

* 如果这个选项是`"^.+Error$"`，当参数名以`Error`结尾时（例如，`connectionError`或`validationError`），该规则会报告有未处理的错误。

* If the option is `"^.*(e|E)rr"`, the rule reports unhandled errors where the parameter name matches any string that contains `err` or `Err` (for example, `err`, `error`, `anyError`, `some_err` will match).

* 如果这个选项是`"^.*(e|E)rr"`，当参数名匹配任何字符串中含有`err`或`Err`的（例如，err`，`error`，`anyError`，`some_err`）该规则会报告有未处理的错误。

## When Not To Use It

There are cases where it may be safe for your application to ignore errors, however only ignore errors if you are
confident that some other form of monitoring will help you catch the problem.

如果一些情况下忽略错误处理并不影响应用的安全，并且你相信一些其他形式的监督将帮助你发现问题，这时可以不使用此规则。

## Further Reading

* [The Art Of Node: Callbacks](https://github.com/maxogden/art-of-node#callbacks)
* [Nodejitsu: What are the error conventions?](http://docs.nodejitsu.com/articles/errors/what-are-the-error-conventions)

## Version

This rule was introduced in ESLint 0.4.5.

此规则在 ESLint 0.4.5 被引入。

## Resources

* [Rule source](https://github.com/eslint/eslint/tree/master/lib/rules/handle-callback-err.js)
* [Documentation source](https://github.com/eslint/eslint/tree/master/docs/rules/handle-callback-err.md)
