---
title: Rule no-restricted-syntax
layout: doc
translator: molee1905
proofreader: yanggao40
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# Disallow certain syntax (no-restricted-syntax)

# 禁用特定的语法 (no-restricted-syntax)

JavaScript has a lot of language features, and not everyone likes every features. As a result, some projects choose to disallow the use of certain language features altogether. For instance, you might decide to disallow the use of `try-catch` or `class`.

JavaScript有很多语言特征，并不是每个人都喜欢所有的特征。因此，一些项目选择完全禁用某些特定的语言特征。例如，你可以禁止`try-catch` 或 `class`的使用。

Rather than creating separate rules for every language feature you want to turn off, this rule allows you to configure the syntax elements you want to restrict use of. These elements are represented by their [ESTree](https://github.com/estree/estree) node types. For example, a function declaration is represented by `FunctionDeclaration` and the `with` statement is represented by `WithStatement`. You may find the full list of AST node names you can use [on GitHub](https://github.com/eslint/espree/blob/master/lib/ast-node-types.js) and use the [online parser](http://eslint.org/parser/) to see what type of nodes your code consists of.

该规则允许你配置你想要限制使用的的语法元素，而不是为每一个你想关闭的语言特征创建一个单独的规则。这些元素通过[ESTree](https://github.com/estree/estree) 节点类型表示。比如，一个函数声明被表示为`FunctionDeclaration`，`with`语句被表示为`WithStatement`。你可以在[GitHub](https://github.com/eslint/espree/blob/master/lib/ast-node-types.js) 找到你想使用的全部的AST节点名称，可以使用[在线语法分析器](http://eslint.org/parser/)查看你的代码是由哪些节点类型组成的。

## Rule Details

This rule is aimed at eliminating certain syntax from your JavaScript. As such, it warns whenever it sees a node type that is restricted by its options.

该规则旨在从你的Javascript代码中消除特定的语法。因此，如果发现一个节点类型是该规则的选项所限制的，该规则将发出警告。

## Options

This rule takes a list of strings where strings denote the node types:

该规则使用代表节点类型的字符串列表作为参数：

```json
{
"rules": {
"no-restricted-syntax": [2, "FunctionExpression", "WithStatement"]
}
}
```

The following patterns are considered problems:

以下模式被认为是有问题的：

```js
/* eslint no-restricted-syntax: [2, "FunctionExpression", "WithStatement"] */

with (me) {
dontMess();
}

var doSomething = function () {};
```

The following patterns are not considered problems:

以下模式被认为是没有问题的：

```js
/* eslint no-restricted-syntax: [2, "FunctionExpression", "WithStatement"] */

me.dontMess();

function doSomething() {};
```

## When Not To Use It

If you don't want to restrict your code from using any JavaScript features or syntax, you should not use this rule.

如果你不想限制你的代码使用任何Javascript的特征或语法，不应使用此规则。

## Related Rules

* [no-alert](no-alert)
* [no-console](no-console)
* [no-debugger](no-debugger)

## Version

This rule was introduced in ESLint 1.4.0.

该规则在ESLint 1.4.0 中被引入。

## Resources

* [Rule source](https://github.com/eslint/eslint/tree/master/lib/rules/no-restricted-syntax.js)
* [Documentation source](https://github.com/eslint/eslint/tree/master/docs/rules/no-restricted-syntax.md)
