---
title: id-blacklist - Rules
layout: doc
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# disallow specified identifiers (id-blacklist)

# 禁止使用指定的标识符 (id-blacklist)

> "There are only two hard things in Computer Science: cache invalidation and naming things." — Phil Karlton

> "There are only two hard things in Computer Science: cache invalidation and naming things." — Phil Karlton

Bad names can lead to hard-to-decipher code. Generic names, such as `data`, don't infer much about the code and the values it receives. This rule allows you to configure a blacklist of bad identifier names, that you don't want to see in your code.

糟糕的名字会导致代码很难理解。通用的名字，比如 `data`，并不能推断出关于代码和接收到的值的更多信息。该规则允许你配置一个标识符名称的黑名单，也就是包含那些你不想在代码中看到的名字。

## Rule Details

This rule disallows specified identifiers in assignments and `function` definitions.

该规则禁止在赋值语句和 `function` 定义中使用指定的标识符。

This rule will catch blacklisted identifiers that are:

该规则对以下情况，将捕捉黑名单里的标识符：

- variable declarations
- 变量声明
- function declarations
- 函数声明
- object properties assigned to during object creation
- 在对象创建过程中的属性赋值

It will not catch blacklisted identifiers that are:

该规则对以下情况，不会捕捉黑名单里的标识符：

- function calls (so you can still use functions you do not have control over)
- 函数调用 (所以你仍然可以使用不受限制函数)
- object properties (so you can still use objects you do not have control over)
- 对象属性 (所以你仍然可以使用不受限制的对象)

## Options

The rule takes one or more strings as options: the names of restricted identifiers.

该规则有一个或多个字符串选项：受限制的标识符的名称：

For example, to restrict the use of common generic identifiers:

例如，限制通用标识符的使用：

```json
{
    "id-blacklist": ["error", "data", "err", "e", "cb", "callback"]
}
```

Examples of **incorrect** code for this rule with sample `"data", "callback"` restricted identifiers:

受限制的 `"data", "callback"` 标识符的 **错误** 代码示例：

```js
/*eslint id-blacklist: ["error", "data", "callback"] */

var data = {...};

function callback() {
    // ...
}

element.callback = function() {
    // ...
};

var itemSet = {
    data: [...]
};
```

Examples of **correct** code for this rule with sample `"data", "callback"` restricted identifiers:

受限制的 `"data", "callback"` 标识符的 **正确** 代码示例：

```js
/*eslint id-blacklist: ["error", "data", "callback"] */

var encodingOptions = {...};

function processFileResult() {
    // ...
}

element.successHandler = function() {
    // ...
};

var itemSet = {
    entities: [...]
};

callback(); // all function calls are ignored

foo.callback(); // all function calls are ignored

foo.data; // all property names that are not assignments are ignored
```

## When Not To Use It

You can turn this rule off if you are happy for identifiers to be named freely.

如果对标识符命名没什么要求，可以关闭此规则。

## Version

This rule was introduced in ESLint 2.0.0-beta.2.

该规则在 ESLint 2.0.0-beta.2 中被引入。

## Resources

* [Rule source](https://github.com/eslint/eslint/tree/master/lib/rules/id-blacklist.js)
* [Documentation source](https://github.com/eslint/eslint/tree/master/docs/rules/id-blacklist.md)
