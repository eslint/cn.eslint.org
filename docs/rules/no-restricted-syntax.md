---
title: no-restricted-syntax - Rules
layout: doc
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# disallow specified syntax (no-restricted-syntax)

# 禁止使用特定的语法 (no-restricted-syntax)

JavaScript has a lot of language features, and not everyone likes all of them. As a result, some projects choose to disallow the use of certain language features altogether. For instance, you might decide to disallow the use of `try-catch` or `class`, or you might decide to disallow the use of the `in` operator.

JavaScript 有很多语言特征，并不是每个人都喜欢所有的特征。因此，一些项目选择完全禁用某些特定的语言特征。例如，你可以禁止 `try-catch` 或 `class` 的使用，或者你可以决定是否禁用 `in` 操作符。

You can also specify [AST selectors](../developer-guide/selectors) to restrict, allowing much more precise control over syntax patterns.

你也可以指定[AST 选择器](../developer-guide/selectors)来进行限制，允许对语法模式进行更精确的控制。

## Rule Details

This rule disallows specified (that is, user-defined) syntax.

该规则禁止使用特定的（由用户来指定）语法。

## Options

This rule takes a list of strings, where each string is an AST selector:

该规则有一个选项，是个字符串列表，列表中的每个字符串都是一个 AST 选择器。

```json
{
    "rules": {
        "no-restricted-syntax": ["error", "FunctionExpression", "WithStatement", "BinaryExpression[operator='in']"]
    }
}
```

Alternatively, the rule also accepts objects, where the selector and an optional custom message are specified:

另外，该规则还接受对象作为选项，指定选择器和可选的自定义消息：

```json
{
    "rules": {
        "no-restricted-syntax": [
            "error",
            {
                "selector": "FunctionExpression",
                "message": "Function expressions are not allowed."
            },
            {
                "selector": "CallExpression[callee.name='setTimeout'][arguments.length!=2]",
                "message": "setTimeout must always be invoked with two arguments."
            }
        ]
    }
}
```

If a custom message is specified with the `message` property, ESLint will use that message when reporting occurrences of the syntax specified in the `selector` property.

如果使用 `message` 属性指定了一个自定义消息，ESLint 在报告 `selector` 属性中指定的语法时将使用该消息。

The string and object formats can be freely mixed in the configuration as needed.

字符串选项和对象格式的选项可以自由的根据需要混合使用。

Examples of **incorrect** code for this rule with the `"FunctionExpression", "WithStatement", BinaryExpression[operator='in']` options:

选项 `"FunctionExpression", "WithStatement", BinaryExpression[operator='in']` 的 **错误** 代码示例：

```js
/* eslint no-restricted-syntax: ["error", "FunctionExpression", "WithStatement", "BinaryExpression[operator='in']"] */

with (me) {
    dontMess();
}

var doSomething = function () {};

foo in bar;
```

Examples of **correct** code for this rule with the `"FunctionExpression", "WithStatement", BinaryExpression[operator='in']` options:

选项 `"FunctionExpression", "WithStatement"` 的 **正确** 代码示例：

```js
/* eslint no-restricted-syntax: ["error", "FunctionExpression", "WithStatement", "BinaryExpression[operator='in']"] */

me.dontMess();

function doSomething() {};

foo instanceof bar;
```

## When Not To Use It

If you don't want to restrict your code from using any JavaScript features or syntax, you should not use this rule.

如果你不想限制你的代码使用 JavaScript 任何的特征或语法，不应使用此规则。

## Related Rules

* [no-alert](no-alert)
* [no-console](no-console)
* [no-debugger](no-debugger)
* [no-restricted-properties](no-restricted-properties)

## Version

This rule was introduced in ESLint 1.4.0.

该规则在 ESLint 1.4.0 中被引入。

## Resources

* [Rule source](https://github.com/eslint/eslint/tree/master/lib/rules/no-restricted-syntax.js)
* [Documentation source](https://github.com/eslint/eslint/tree/master/docs/rules/no-restricted-syntax.md)
