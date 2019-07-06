---
title: Working with Rules
layout: doc
edit_link: https://github.com/eslint/eslint/edit/master/docs/developer-guide/working-with-rules.md

---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# Working with Rules

**Note:** This page covers the most recent rule format for ESLint >= 3.0.0. There is also a [deprecated rule format](./working-with-rules-deprecated).

**注意：**这个页面覆盖了 ESLint( >= 3.0.0)的大部分规则格式。也有[弃用的规则格式](./working-with-rules-deprecated)。

Each rule in ESLint has three files named with its identifier (for example, `no-extra-semi`).

ESLint 中的每个规则都有三个文件，以它的 ID 命名（例如，`no-extra-semi`）。

* in the `lib/rules` directory: a source file (for example, `no-extra-semi.js`)
* `lib/rules` 目录：源码文件 (例如，`no-extra-semi.js`)
* in the `tests/lib/rules` directory: a test file (for example, `no-extra-semi.js`)
* `tests/lib/rules` 目录：测试文件 (例如，`no-extra-semi.js`)
* in the `docs/rules` directory: a Markdown documentation file (for example, `no-extra-semi`)

**Important:** If you submit a **core** rule to the ESLint repository, you **must** follow some conventions explained below.

**重要：**如果你向 ESLint 库提交了一个 **核心**规则，你 **必须**遵循下面的约定。

Here is the basic format of the source file for a rule:

这里是一个规则的源码文件的基本格式：

```js
/**
 * @fileoverview Rule to disallow unnecessary semicolons
 * @author Nicholas C. Zakas
 */

"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        type: "suggestion",

        docs: {
            description: "disallow unnecessary semicolons",
            category: "Possible Errors",
            recommended: true,
            url: "https://eslint.org/docs/rules/no-extra-semi"
        },
        fixable: "code",
        schema: [] // no options
    },
    create: function(context) {
        return {
            // callback functions
        };
    }
};
```

## Rule Basics

The source file for a rule exports an object with the following properties.

一个规则的源文件输出一个对象，包含以下属性。

`meta` (object) contains metadata for the rule:

`meta`（对象）包含规则的元数据：

* `type` (string) indicates the type of rule, which is one of `"problem"`, `"suggestion"`, or `"layout"`:
* `type` (string) 指示规则的类型，值为 `"problem"`、`"suggestion"` 或 `"layout"`：
    * `"problem"` means the rule is identifying code that either will cause an error or may cause a confusing behavior. Developers should consider this a high priority to resolve.
    * `"problem"` 指的是该规则识别的代码要么会导致错误，要么可能会导致令人困惑的行为。开发人员应该优先考虑解决这个问题。
    * `"suggestion"` means the rule is identifying something that could be done in a better way but no errors will occur if the code isn't changed.
    * `"suggestion"` 意味着规则确定了一些可以用更好的方法来完成的事情，但是如果代码没有更改，就不会发生错误。
    * `"layout"` means the rule cares primarily about whitespace, semicolons, commas, and parentheses, all the parts of the program that determine how the code looks rather than how it executes. These rules work on parts of the code that aren't specified in the AST.
    * `"layout"` 意味着规则主要关心空格、分号、逗号和括号，以及程序中决定代码外观而不是执行方式的所有部分。这些规则适用于AST中没有指定的代码部分。
* `docs` (object) is required for core rules of ESLint:
* `docs` (object) 对 ESLint 核心规则来说是必需的:
    * `description` (string) provides the short description of the rule in the [rules index](../rules/)
    * `description` (字符串) 提供规则的简短描述在[规则首页](../rules/)展示
    * `category` (string) specifies the heading under which the rule is listed in the [rules index](../rules/)
    * `category` (string) 指定规则在[规则首页](../rules/)处于的分类
    * `recommended` (boolean) is whether the `"extends": "eslint:recommended"` property in a [configuration file](../user-guide/configuring#extending-configuration-files) enables the rule
    * `recommended` (boolean) [配置文件](../user-guide/configuring#extending-configuration-files)中的 `"extends": "eslint:recommended"`属性是否启用该规则
    * `url` (string) specifies the URL at which the full documentation can be accessed
    * `url` (string) 指定可以访问完整文档的 url。
    
    In a custom rule or plugin, you can omit `docs` or include any properties that you need in it.

    在自定义的规则或插件中，你可以省略 `docs` 或包含你需要的任何属性。

* `fixable` (string) is either `"code"` or `"whitespace"` if the `--fix` option on the [command line](../user-guide/command-line-interface#fix) automatically fixes problems reported by the rule

* `fixable` (string) 标示[命令行](../user-guide/command-line-interface#fix) 选项 `--fix` 自动修复规则报告的问题。

    **Important:** Without the `fixable` property, ESLint does not [apply fixes](#applying-fixes) even if the rule implements `fix` functions. Omit the `fixable` property if the rule is not fixable.
    **重要：**如果没有 `fixable` 属性，即使规则实现了 `fix` 功能，ESLint 也不会[进行修复](#applying-fixes)。如果规则不是可修复的，就省略 `fixable` 属性。

* `schema` (array) specifies the [options](#options-schemas) so ESLint can prevent invalid [rule configurations](../user-guide/configuring#configuring-rules)
* `schema` (array) 指定该[选项](#options-schemas) 这样的 ESLint 可以避免无效的[规则配置](../user-guide/configuring#configuring-rules#configuring-rules)
* `deprecated` (boolean) indicates whether the rule has been deprecated.  You may omit the `deprecated` property if the rule has not been deprecated.
* `deprecated` (boolean) 表明规则是已被弃用。如果规则尚未被弃用，你可以省略 `deprecated` 属性。
* `replacedBy` (array) in the case of a deprecated rule, specifies replacement rule(s)
* `replacedBy` (array) 在不支持规则的情况下，指定替换的规则

`create` (function) returns an object with methods that ESLint calls to "visit" nodes while traversing the abstract syntax tree (AST as defined by [ESTree](https://github.com/estree/estree)) of JavaScript code:

`create` (function) 返回一个对象，其中包含了 ESLint 在遍历 JavaScript 代码的抽象语法树 AST ([ESTree](https://github.com/estree/estree) 定义的 AST) 时，用来访问节点的方法。

* if a key is a node type or a [selector](./selectors), ESLint calls that **visitor** function while going **down** the tree
* 如果一个 key 是个节点类型或 [selector](./selectors)，在 **向下** 遍历树时，ESLint 调用 **visitor** 函数
* if a key is a node type or a [selector](./selectors) plus `:exit`, ESLint calls that **visitor** function while going **up** the tree
* 如果一个 key 是个节点类型或 [selector](./selectors)，并带有 `:exit`，在 **向上** 遍历树时，ESLint 调用 **visitor** 函数
* if a key is an event name, ESLint calls that **handler** function for [code path analysis](./code-path-analysis)
* 如果一个 key 是个事件名字，ESLint 为[代码路径分析](./code-path-analysis)调用 **handler** 函数

A rule can use the current node and its surrounding tree to report or fix problems.

一个规则可以使用当前节点和它周围的树，报告或修复问题。

Here are methods for the [array-callback-return](../rules/array-callback-return) rule:

这里是 [array-callback-return](../rules/array-callback-return) 规则的一些方法：

```js
function checkLastSegment (node) {
    // report problem for function if last code path segment is reachable
}

module.exports = {
    meta: { ... },
    create: function(context) {
        // declare the state of the rule
        return {
            ReturnStatement: function(node) {
                // at a ReturnStatement node while going down
            },
            // at a function expression node while going up:
            "FunctionExpression:exit": checkLastSegment,
            "ArrowFunctionExpression:exit": checkLastSegment,
            onCodePathStart: function (codePath, node) {
                // at the start of analyzing a code path
            },
            onCodePathEnd: function(codePath, node) {
                // at the end of analyzing a code path
            }
        };
    }
};
```

## The Context Object

The `context` object contains additional functionality that is helpful for rules to do their jobs. As the name implies, the `context` object contains information that is relevant to the context of the rule. The `context` object has the following properties:

`context` 对象包含额外的功能，有利于规则完成他们的工作。顾名思义，`context`对象包含与规则上下文相关的信息。`context` 对象具有以下属性：

* `parserOptions` - the parser options configured for this run (more details [here](../user-guide/configuring#specifying-parser-options)).
* `parserOptions` - 解析器选项 (more details [here](../user-guide/configuring#specifying-parser-options#specifying-parser-options)).
* `id` - the rule ID.
* `id` - 规则 ID。
* `options` - an array of the [configured options](/docs/user-guide/configuring#configuring-rules) for this rule. This array does not include the rule severity. For more information, see [here](#contextoptions).
* `options` - 此规则的 [已配置的选项](/docs/user-guide/configuring#configuring-rules) 数组。此数组不包含规则严重性。有关更多信息，请参见[此处](#contextoptions)。
* `settings` - the [shared settings](/docs/user-guide/configuring#adding-shared-settings) from configuration.
* `settings` - 配置中的[共享的设置](/docs/user-guide/configuring#adding-shared-settings)。
* `parserPath` - the name of the `parser` from configuration.
* `parserPath` - 配置中的 `parser` 的名称。
* `parserServices` - an object containing parser-provided services for rules. The default parser does not provide any services. However, if a rule is intended to be used with a custom parser, it could use `parserServices` to access anything provided by that parser. (For example, a TypeScript parser could provide the ability to get the computed type of a given node.)
* `parserServices` - 包含由解析器为规则提供的服务的对象。默认解析器不提供任何服务。然而，如果规则打算与自定义解析器一起使用，则可以使用 `parserServices` 访问该解析器提供的任何内容。(例如，TypeScript 解析器可以提供获取给定节点的计算类型的能力。)。

Additionally, the `context` object has the following methods:

此外， `context` 对象有以下方法：

* `getAncestors()` - returns an array of the ancestors of the currently-traversed node, starting at the root of the AST and continuing through the direct parent of the current node. This array does not include the currently-traversed node itself.
* `getAncestors()` - 返回当前遍历节点的祖先数组，从 AST 的根节点开始，一直到当前节点的直接父节点。这个数组不包括当前遍历的节点本身。
* `getDeclaredVariables(node)` - returns a list of [variables](./scope-manager-interface#variable-interface) declared by the given node. This information can be used to track references to variables.
* `getDeclaredVariables(node)` - 返回由给定节点声明的[变量](.、scope-manager-interface#variable-interface) 列表。此信息可用于跟踪对变量的引用。
    * If the node is a `VariableDeclaration`, all variables declared in the declaration are returned.
    * 如果节点是 `VariableDeclaration`，则返回声明中声明的所有变量。
    * If the node is a `VariableDeclarator`, all variables declared in the declarator are returned.
    * 如果节点是一个 `VariableDeclarator`，则返回 declarator 中声明的所有变量。
    * If the node is a `FunctionDeclaration` or `FunctionExpression`, the variable for the function name is returned, in addition to variables for the function parameters.
    * 如果节点是 `FunctionDeclaration` 或 `FunctionExpression`，除了函数参数的变量外，还返回函数名的变量。
    * If the node is an `ArrowFunctionExpression`, variables for the parameters are returned.
    * 如果节点是一个 `ArrowFunctionExpression`，则返回参数的变量。
    * If the node is a `ClassDeclaration` or a `ClassExpression`, the variable for the class name is returned.
    * 如果节点是 `ClassDeclaration` 或 `ClassExpression`，则返回类名的变量。
    * If the node is a `CatchClause`, the variable for the exception is returned.
    * 如果节点是一个 `CatchClause` 子句，则返回异常的变量。
    * If the node is an `ImportDeclaration`, variables for all of its specifiers are returned.
    * 如果节点是 `ImportDeclaration`，则返回其所有说明符的变量。
    * If the node is an `ImportSpecifier`, `ImportDefaultSpecifier`, or `ImportNamespaceSpecifier`, the declared variable is returned.
    * 如果节点是 `ImportSpecifier`，`ImportDefaultSpecifier` 或 `ImportNamespaceSpecifier`，则返回声明的变量。
    * Otherwise, if the node does not declare any variables, an empty array is returned.
    * 否则，如果节点没有声明任何变量，则返回一个空数组。

* `getFilename()` - returns the filename associated with the source.
* `getFilename()` - 返回与源文件关联的文件名。
* `getScope()` - returns the [scope](./scope-manager-interface#scope-interface) of the currently-traversed node. This information can be used track references to variables.
* `getScope()` - 返回当前遍历节点的 [scope](./scope-manager-interface#scope-interface)。此信息可用于跟踪对变量的引用。
* `getSourceCode()` - returns a [`SourceCode`](#contextgetsourcecode) object that you can use to work with the source that was passed to ESLint.
* `getSourceCode()` - 返回一个[`SourceCode`](#contextgetsourcecode)对象，你可以使用该对象处理传递给 ESLint 的源代码。
* `markVariableAsUsed(name)` - marks a variable with the given name in the current scope as used. This affects the [no-unused-vars](../rules/no-unused-vars) rule. Returns `true` if a variable with the given name was found and marked as used, otherwise `false`.
* `markVariableAsUsed(name)` - 在当前作用域内用给定的名称标记一个变量。这将影响 [no-unused-vars](../rules/no-unused-vars)规则。如果找到一个具有给定名称的变量并将其标记为已使用，则返回 `true`，否则返回 `false`。
* `report(descriptor)` - reports a problem in the code (see the [dedicated section](#contextreport)).
* `report(descriptor)` - 报告问题的代码 (参见 [dedicated section](#contextreport))。

**Note:** Earlier versions of ESLint supported additional methods on the `context` object. Those methods were removed in the new format and should not be relied upon.

**注意：**ESLint 的早期版本支持 `context` 对象的额外的方法。这些方法在新的格式中已被移除，不应该再使用。

### context.getScope()

This method returns the scope which has the following types:

该方法返回的作用域具有以下类型：

| AST Node Type             | Scope Type |
|:--------------------------|:-----------|
| `Program`                 | `global`   |
| `FunctionDeclaration`     | `function` |
| `FunctionExpression`      | `function` |
| `ArrowFunctionExpression` | `function` |
| `ClassDeclaration`        | `class`    |
| `ClassExpression`         | `class`    |
| `BlockStatement` ※1      | `block`    |
| `SwitchStatement` ※1     | `switch`   |
| `ForStatement` ※2        | `for`      |
| `ForInStatement` ※2      | `for`      |
| `ForOfStatement` ※2      | `for`      |
| `WithStatement`           | `with`     |
| `CatchClause`             | `catch`    |
| others                    | ※3        |

**※1** Only if the configured parser provided the block-scope feature. The default parser provides the block-scope feature if `parserOptions.ecmaVersion` is not less than `6`.<br>
**※2** Only if the `for` statement defines the iteration variable as a block-scoped variable (E.g., `for (let i = 0;;) {}`).<br>
**※3** The scope of the closest ancestor node which has own scope. If the closest ancestor node has multiple scopes then it chooses the innermost scope (E.g., the `Program` node has a `global` scope and a `module` scope if `Program#sourceType` is `"module"`. The innermost scope is the `module` scope.).<br>


**※1** 仅当配置的解析器提供块作用域特性时才使用。默认的解析器提供块范围特性，如果`parserOptions.ecmaVersion`不小于 `6` 。<br>
**※2** 只有当 `for` 语句将迭代变量定义为块作用域的变量时 (例如，`for (let i = 0;;) {}`)。<br>
**※3** 具有自己作用域的最近祖先节点的作用域。如果最近的祖先节点有多个作用域，那么它选择最内部的作用域（例如，如果`Program#sourceType` 是 `"module"`，则 `Program` 节点有一个 `global` 作用域和一个 `module` 作用域。最内层的作用域是 `"module"` 作用域。）。

### context.report()

The main method you'll use is `context.report()`, which publishes a warning or error (depending on the configuration being used). This method accepts a single argument, which is an object containing the following properties:

你将使用的主要方法是 `context.report()`，它用来发布警告或错误（取决于你所使用的配置）。该方法只接收一个参数，是个对象，包含以下属性：

* `message` - the problem message.
* `message` - 有问题的消息
* `node` - (optional)  the AST node related to the problem. If present and `loc` is not specified, then the starting location of the node is used as the location of the problem.
* `node` - (可选的)  与问题有关的 AST 节点。如果存在且没有指定 `loc`，那么该节点的开始位置被用来作为问题的位置。
* `loc` - (optional) an object specifying the location of the problem. If both `loc` and `node` are specified, then the location is used from `loc` instead of `node`.
* `loc` - (可选的) 用来指定问题位置的一个对象。如果同时指定的了 `loc` 和 `node`，那么位置将从`loc`获取而非`node`。
    * `start` - An object of the start location.
    * `start` - 开始位置
        * `line` - the 1-based line number at which the problem occurred.
        * `line` - 问题发生的行号，从 `1` 开始。
        * `column` - the 0-based column number at which the problem occurred.
        * `column` - 问题发生的列号，从 `0` 开始。
    * `end` - An object of the end location.
    * `end` - 结束位置
        * `line` - the 1-based line number at which the problem occurred.
        * `line` - 问题发生的行号，从 `1` 开始。
        * `column` - the 0-based column number at which the problem occurred.
        * `column` - 问题发生的列号，从 `0` 开始。
* `data` - (optional) [placeholder](#using-message-placeholders) data for `message`.
* `data` - (可选的) `message`的[占位符](#using-message-placeholders)。
* `fix` - (optional) a function that applies a [fix](#applying-fixes) to resolve the problem.
* `fix` - (可选的) 一个用来解决问题的[修复](#applying-fixes)函数

Note that at least one of `node` or `loc` is required.

请注意，`node` 或 `loc` 至少有一个是必须的。

The simplest example is to use just `node` and `message`:

最简单的示例是只使用 `node` 和 `message`：

```js
context.report({
    node: node,
    message: "Unexpected identifier"
});
```

The node contains all of the information necessary to figure out the line and column number of the offending text as well the source text representing the node.

该节点包含所有必要的信息，用来找出违规文本的行列号作为该节点的源文本。

### Using message placeholders

You can also use placeholders in the message and provide `data`:

你也可以在消息中使用占位符和提供 `data`：

```js
{% raw %}
context.report({
    node: node,
    message: "Unexpected identifier: {{ identifier }}",
    data: {
        identifier: node.name
    }
});
{% endraw %}
```

Note that leading and trailing whitespace is optional in message parameters.

注意，消息中参数的前导和末尾空白是可选的。

The node contains all of the information necessary to figure out the line and column number of the offending text as well the source text representing the node.

该节点包含所有必要的信息，用来找出违规文本的行列号作为该节点的源文本。

### `messageId`s

Instead of typing out messages in both the `context.report()` call and your tests, you can use `messageId`s instead.

你可以使用 `messageId`s 来代替在 `context.report()` 调用和测试中键入消息。

This allows you to avoid retyping error messages. It also prevents errors reported in different sections of your rule from having out-of-date messages.

这允许你避免重新键入错误消息。它还可以防止在规则的不同部分中报告的错误出现过期消息。

```js
{% raw %}
// in your rule
module.exports = {
    meta: {
        messages: {
            avoidName: "Avoid using variables named '{{ name }}'"
        }
    },
    create(context) {
        return {
            Identifier(node) {
                if (node.name === "foo") {
                    context.report({
                        node,
                        messageId: "avoidName",
                        data: {
                            name: "foo",
                        }
                    });
                }
            }
        };
    }
};

// in the file to lint:

var foo = 2;
//  ^ error: Avoid using variables named 'foo'

// In your tests:
var rule = require("../../../lib/rules/my-rule");
var RuleTester = require("eslint").RuleTester;

var ruleTester = new RuleTester();
ruleTester.run("my-rule", rule, {
    valid: ["bar", "baz"],
    invalid: [
        {
            code: "foo",
            errors: [
                {
                    messageId: "avoidName"
                }
            ]
        }
    ]
});
{% endraw %}
```

### Applying Fixes

If you'd like ESLint to attempt to fix the problem you're reporting, you can do so by specifying the `fix` function when using `context.report()`. The `fix` function receives a single argument, a `fixer` object, that you can use to apply a fix. For example:
 
如果你想让 ESLint 尝试去修复你所报告的问题，你可在使用 `context.report()` 时指定 `fix` 函数。`fix` 函数接收一个参数，即一个 `fixer` 对象，你可以用它来进行修复。例如：

```js
context.report({
    node: node,
    message: "Missing semicolon",
    fix: function(fixer) {
        return fixer.insertTextAfter(node, ";");
    }
});
```

Here, the `fix()` function is used to insert a semicolon after the node. Note that a fix is not immediately applied, and may not be applied at all if there are conflicts with other fixes. After applying fixes, ESLint will run all of the enabled rules again on the fixed code, potentially applying more fixes. This process will repeat up to 10 times, or until no more fixable problems are found. Afterwards, any remaining problems will be reported as usual.

在这里，`fix()` 函数被用来在该节点之后插入一个分号。注意，此函数并不立即进行修复，如果与其它修复程序有冲突，可能根本就不进行修复。在应用修复之后，ESLint 将在所有启用的规则再次运行修复的代码，以应用更多的修复。这个过程将最多重复10次，直到找到更多的可修复的问题。之后，其他问题将照常进行报告。

**Important:** Unless the rule [exports](#rule-basics) the `meta.fixable` property, ESLint does not apply fixes even if the rule implements `fix` functions.

**重要：**除非规则[输出](#rule-basics) `meta.fixable` 属性，ESLint 不会进行修复，即使该规则实现了 `fix` 函数。

The `fixer` object has the following methods:

`fixer` 对象有一下几个方法：

* `insertTextAfter(nodeOrToken, text)` - inserts text after the given node or token
* `insertTextAfter(nodeOrToken, text)` - 在给定的节点或记号之后插入文本
* `insertTextAfterRange(range, text)` - inserts text after the given range
* `insertTextAfterRange(range, text)` - 在给定的范围之后插入文本
* `insertTextBefore(nodeOrToken, text)` - inserts text before the given node or token
* `insertTextBefore(nodeOrToken, text)` - 在给定的节点或记号之前插入文本
* `insertTextBeforeRange(range, text)` - inserts text before the given range
* `insertTextBeforeRange(range, text)` - 在给定的范围之前插入文本
* `remove(nodeOrToken)` - removes the given node or token
* `remove(nodeOrToken)` - 删除给定的节点或记号
* `removeRange(range)` - removes text in the given range
* `removeRange(range)` - 删除给定范围内的文本
* `replaceText(nodeOrToken, text)` - replaces the text in the given node or token
* `replaceText(nodeOrToken, text)` - 替换给定的节点或记号内的文本
* `replaceTextRange(range, text)` - replaces the text in the given range
* `replaceTextRange(range, text)` - 替换给定范围内的文本

The above methods return a `fixing` object.

以上方法返回一个 `fixing` 对象。

The `fix()` function can return the following values:

`fix()` 函数可以返回下面的值：

* A `fixing` object.
* 一个 `fixing` 对象。
* An array which includes `fixing` objects.
* 一个包含 `fixing` 对象的数组。
* An iterable object which enumerates `fixing` objects. Especially, the `fix()` function can be a generator.
* 一个可迭代的对象，用来枚举 `fixing` 对象。特别是，`fix()` 可以是一个生成器。

If you make a `fix()` function which returns multiple `fixing` objects, those `fixing` objects must not be overlapped.

如果你让一个 `fix()` 函数返回多个 `fixing` 对象，那么这些 `fixing` 对象不能重叠。 

Best practices for fixes:

修复的最佳实践：

1. Avoid any fixes that could change the runtime behavior of code and cause it to stop working.
1. 避免任何可能改变代码运行时行为和导致其停止工作的修复。
1. Make fixes as small as possible. Fixes that are unnecessarily large could conflict with other fixes, and prevent them from being applied.
1. 做尽可能小的修复。那些不必要的修复可能会与其他修复发生冲突，应该避免。
1. Only make one fix per message. This is enforced because you must return the result of the fixer operation from `fix()`.
1. 使每条消息只有一个修复。这是强制的，因为你必须从 `fix()` 返回修复操作的结果。
1. Since all rules are run again after the initial round of fixes is applied, it's not necessary for a rule to check whether the code style of a fix will cause errors to be reported by another rule.
1. 由于所有的规则只第一轮修复之后重新运行，所以规则就没必要去检查一个修复的代码风格是否会导致另一个规则报告错误。
    * For example, suppose a fixer would like to surround an object key with quotes, but it's not sure whether the user would prefer single or double quotes.
    * 比如，假如修复一个对象的键周周围的引号，但不确定用户是喜欢单引号还是双引号。

        ```js
        ({ foo : 1 })

        // should get fixed to either

        ({ 'foo': 1 })

        // or

        ({ "foo": 1 })
        ```

    * This fixer can just select a quote type arbitrarily. If it guesses wrong, the resulting code will be automatically reported and fixed by the [`quotes`](/docs/rules/quotes) rule.
    * 修复程序将可以随意选择一种引号类型。如果猜错了，[`quotes`](/docs/rules/quotes) 规则将会自动报告和修复。

### context.options

Some rules require options in order to function correctly. These options appear in configuration (`.eslintrc`, command line, or in comments). For example:

以下规则要求一些可选项才能正确运行。这些可选项出现在配置中（`.eslintrc`，命令行，或在注释中）。例如：

```json
{
    "quotes": ["error", "double"]
}
```

The `quotes` rule in this example has one option, `"double"` (the `error` is the error level). You can retrieve the options for a rule by using `context.options`, which is an array containing every configured option for the rule. In this case, `context.options[0]` would contain `"double"`:

在这个例子中 `quotes` 规则有一个可选项 `"double"`（ `error` 是错误级别）。你可以使用 `context.options`检索一个规则的可选项，它是个数组，包含该规则的所有配置的可选项。在这个例子中，`context.options[0]` 包含 `"double"`：

```js
module.exports = {
    create: function(context) {
        var isDouble = (context.options[0] === "double");

        // ...
    }
};
```

Since `context.options` is just an array, you can use it to determine how many options have been passed as well as retrieving the actual options themselves. Keep in mind that the error level is not part of `context.options`, as the error level cannot be known or modified from inside a rule.

由于 `context.options` 仅仅是个数组，你可以使用它来决定传入多少选项以及检索实际的选项本身。记住，错误级别不是 `context.options` 的一部分，在一个规则中，无法知道也无法修改错误级别。

When using options, make sure that your rule has some logical defaults in case the options are not provided.

当使用可选项时，要确保你的规则有一些默认逻辑，以防止没有提供可选项的情况。

### context.getSourceCode()

The `SourceCode` object is the main object for getting more information about the source code being linted. You can retrieve the `SourceCode` object at any time by using the `getSourceCode()` method:

`SourceCode` 是获取被检查源码的更多信息的主要对象。你可以使用 `getSourceCode()`在任何时间检索 `SourceCode` 对象。

```js
module.exports = {
    create: function(context) {
        var sourceCode = context.getSourceCode();

        // ...
    }
};
```

Once you have an instance of `SourceCode`, you can use the methods on it to work with the code:

一旦你获取了 `SourceCode` 的一个实例，你可以在代码中使用它的方法：

* `getText(node)` - returns the source code for the given node. Omit `node` to get the whole source.
* `getText(node)` - 返回给定节点的源码。省略 `node`，返回整个源码。
* `getAllComments()` - returns an array of all comments in the source.
* `getAllComments()` - 返回一个包含源中所有注释的数组。
* `getCommentsBefore(nodeOrToken)` - returns an array of comment tokens that occur directly before the given node or token.
* `getCommentsBefore(nodeOrToken)` - 返回一个在给定的节点或 token 之前的注释的数组。
* `getCommentsAfter(nodeOrToken)` - returns an array of comment tokens that occur directly after the given node or token.
* `getCommentsAfter(nodeOrToken)` - 返回一个在给定的节点或 token 之后的注释的数组。
* `getCommentsInside(node)` - returns an array of all comment tokens inside a given node.
* `getCommentsInside(node)` - 返回一个在给定的节点内的注释的数组。
* `getJSDocComment(node)` - returns the JSDoc comment for a given node or `null` if there is none.
* `getJSDocComment(node)` - 返回给定节点的 JSDoc 注释，如果没有则返回 null。
* `isSpaceBetweenTokens(first, second)` - returns true if there is a whitespace character between the two tokens.
* `isSpaceBetweenTokens(first, second)` - 如果两个记号之间有空白，返回 true
* `getFirstToken(node, skipOptions)` - returns the first token representing the given node.
* `getFirstToken(node, skipOptions)` - 返回代表给定节点的第一个token。
* `getFirstTokens(node, countOptions)` - returns the first `count` tokens representing the given node.
* `getFirstTokens(node, countOptions)` - 返回代表给定节点的第一个 `count` 数量的 token。
* `getLastToken(node, skipOptions)` - returns the last token representing the given node.
* `getLastToken(node, skipOptions)` - 返回代表给定节点最后一个token。
* `getLastTokens(node, countOptions)` - returns the last `count` tokens representing the given node.
* `getLastTokens(node, countOptions)` - 返回代表给定节点的最后一个 `count` 数量的 token。
* `getTokenAfter(nodeOrToken, skipOptions)` - returns the first token after the given node or token.
* `getTokenAfter(nodeOrToken, skipOptions)` - 返回给定的节点或记号之后的第一个token。
* `getTokensAfter(nodeOrToken, countOptions)` - returns `count` tokens after the given node or token.
* `getTokensAfter(nodeOrToken, countOptions)` - 返回给定节点或记号之后的 `count` 数量的 token。
* `getTokenBefore(nodeOrToken, skipOptions)` - returns the first token before the given node or token.
* `getTokenBefore(nodeOrToken, skipOptions)` - 返回给定的节点或记号之前的第一个 token。
* `getTokensBefore(nodeOrToken, countOptions)` - returns `count` tokens before the given node or token.
* `getTokensBefore(nodeOrToken, countOptions)` - 返回给定节点或记号之前的 `count` 数量的 token。
* `getFirstTokenBetween(nodeOrToken1, nodeOrToken2, skipOptions)` - returns the first token between two nodes or tokens.
* `getFirstTokenBetween(nodeOrToken1, nodeOrToken2, skipOptions)` - 返回两个节点或 token 之间的第一个 token。
* `getFirstTokensBetween(nodeOrToken1, nodeOrToken2, countOptions)` - returns the first `count` tokens between two nodes or tokens.
* `getFirstTokensBetween(nodeOrToken1, nodeOrToken2, countOptions)` - 返回两个节点或 token 之间的第一个 `count` 数量的 token。
* `getLastTokenBetween(nodeOrToken1, nodeOrToken2, skipOptions)` - returns the last token between two nodes or tokens.
* `getLastTokenBetween(nodeOrToken1, nodeOrToken2, skipOptions)` - 返回两个节点或 token 之间的最后一个 token。
* `getLastTokensBetween(nodeOrToken1, nodeOrToken2, countOptions)` - returns the last `count` tokens between two nodes or tokens.
* `getLastTokensBetween(nodeOrToken1, nodeOrToken2, countOptions)` - 返回两个节点或 token 之间的最后一个 `count` 数量的 token。
* `getTokens(node)` - returns all tokens for the given node.
* `getTokens(node)` - 返回给定节点的所有 token。
* `getTokensBetween(nodeOrToken1, nodeOrToken2)` - returns all tokens between two nodes.
* `getTokensBetween(nodeOrToken1, nodeOrToken2)` - 返回两个节点间 token。
* `getTokenByRangeStart(index, rangeOptions)` - returns the token whose range starts at the given index in the source.
* `getTokenByRangeStart(index, rangeOptions)` - 返回源中范围从给定的索引开始的token。
* `getNodeByRangeIndex(index)` - returns the deepest node in the AST containing the given source index.
* `getNodeByRangeIndex(index)` - 返回 AST 中包含给定的源的索引的最深节点。
* `getLocFromIndex(index)` - returns an object with `line` and `column` properties, corresponding to the location of the given source index. `line` is 1-based and `column` is 0-based.
* `getLocFromIndex(index)` - 返回一个包含 `line` 和 `column` 属性的对象，对应给定的源的索引的位置。`line` 从 1 开始，`column` 从 0 开始。
* `getIndexFromLoc(loc)` - returns the index of a given location in the source code, where `loc` is an object with a 1-based `line` key and a 0-based `column` key.
* `getIndexFromLoc(loc)` - 返回一个源码中的给定的位置的索引，`loc` 是个对象，包含一个从 1 开始的 `line` 键和一个从 0 开始的 `column` 键。
* `commentsExistBetween(nodeOrToken1, nodeOrToken2)` - returns `true` if comments exist between two nodes.
* `commentsExistBetween(nodeOrToken1, nodeOrToken2)` - 如果两个节点间存在注释，返回 `true`。

describe for parameters above:

参数描述：

`skipOptions` is an object which has 3 properties; `skip`, `includeComments`, and `filter`. Default is `{skip: 0, includeComments: false, filter: null}`.

`skipOptions` 是个对象，包含三个属性；`skip`、`includeComments` 和 `filter`。默认是 `{skip: 0, includeComments: false, filter: null}`。

* `skip` is a positive integer, the number of skipping tokens. If `filter` option is given at the same time, it doesn't count filtered tokens as skipped.
* `skip` 是个正整数，表示要跳过的 token 的数量。如果同时给出了 `filter` 选项，过滤掉的 token 不计入此值。
* `includeComments` is a boolean value, the flag to include comment tokens into the result.
* `includeComments` 是个布尔值，标记是否把注释 token 包含进返回结果中。
* `filter` is a function which gets a token as the first argument, if the function returns `false` then the result excludes the token.
* `filter` 是个函数，用一个 token 作为第一个参数，如果该函数返回 `false`，那么返回的结果将不包含那个 token。

`countOptions` is an object which has 3 properties; `count`, `includeComments`, and `filter`. Default is `{count: 0, includeComments: false, filter: null}`.

`countOptions` 是个对象包含三个属性；`count`、`includeComments` 和 `filter`。默认为 `{count: 0, includeComments: false, filter: null}`。

* `count` is a positive integer, the maximum number of returning tokens.
* `count` 是个正整数，返回的 token 的最大数量。
* `includeComments` is a boolean value, the flag to include comment tokens into the result.
* `includeComments` 是个布尔值，标记是否把注释 token 包含进返回结果中。
* `filter` is a function which gets a token as the first argument, if the function returns `false` then the result excludes the token.
* `filter` 是个函数，用一个 token 作为第一个参数，如果该函数返回 `false`，那么返回的结果将不包含那个 token。

`rangeOptions` is an object which has 1 property: `includeComments`.

`rangeOptions` 是个对象，包含一个属性: `includeComments`。

* `includeComments` is a boolean value, the flag to include comment tokens into the result.
* `includeComments` 是个布尔值，标记是否把注释 token 包含进返回结果中。

There are also some properties you can access:

也有一些属性可供你访问：

* `hasBOM` - the flag to indicate whether or not the source code has Unicode BOM.
* `hasBOM` - 标记源码中是否含有 Unicode BOM。
* `text` - the full text of the code being linted. Unicode BOM has been stripped from this text.
* `text` - 被检查的代码全文，Unicode BOM 已经从该文本中剥离。
* `ast` - the `Program` node of the AST for the code being linted.
* `ast` - AST 的 `Program` 节点，用于代码检查
* `scopeManager` - the [ScopeManager](./scope-manager-interface#scopemanager-interface) object of the code.
* `visitorKeys` - the visitor keys to traverse this AST.
* `lines` - an array of lines, split according to the specification's definition of line breaks.
* `lines` - 一个包含所有行的数组，是根据规范中的换行符的定义划分的。

You should use a `SourceCode` object whenever you need to get more information about the code being linted.

你应该使用 `SourceCode` 对象，无论在何时你需要获取有关被检查的代码的更多信息。

#### Deprecated

Please note that the following methods have been deprecated and will be removed in a future version of ESLint:

请注意，以下方法已被弃用，将在 ESLint 未来某个版本中移除：

* `getComments()` - replaced by `getCommentsBefore()`, `getCommentsAfter()`, and `getCommentsInside()`
* `getComments()` - 被 `getCommentsBefore()`、`getCommentsAfter()` 和 `getCommentsInside()` 代替。
* `getTokenOrCommentBefore()` - replaced by `getTokenBefore()` with the `{ includeComments: true }` option
* `getTokenOrCommentBefore()` - 被 `getTokenBefore()` 使用 `{ includeComments: true }` 选项代替option
* `getTokenOrCommentAfter()` - replaced by `getTokenAfter()` with the `{ includeComments: true }` option
* `getTokenOrCommentAfter()` - 被 `getTokenAfter()` 使用 `{ includeComments: true }` 选项代替

### Options Schemas

Rules may export a `schema` property, which is a [JSON schema](http://json-schema.org/) format description of a rule's options which will be used by ESLint to validate configuration options and prevent invalid or unexpected inputs before they are passed to the rule in `context.options`.

规则可能输出一个 `schema` 属性，遵循[JSON schema](http://json-schema.org/) 格式，用来描述一个规则的选项，ESLint 会用它来验证配置中的选项是否有效，在传入到规则中之前，避免 `context.options` 出现无效或非法输入。

There are two formats for a rule's exported `schema`. The first is a full JSON Schema object describing all possible options the rule accepts, including the rule's error level as the first argument and any optional arguments thereafter.

每个规则输出的 `scheam` 有两种格式。第一种是一个完整的 JSON 模式对象，描述该规则接收的所有可能的选项，包括作为第一个参数的规则错误级别和其他依次后排的可选参数。

However, to simplify schema creation, rules may also export an array of schemas for each optional positional argument, and ESLint will automatically validate the required error level first. For example, the `yoda` rule accepts a primary mode argument, as well as an extra options object with named properties.

然而，为了简化模式创建，规则可能也输出一个包含每个可选的位置参数对应的模式数组，ESLint 会自动先验证所要求的错误级别。例如，`yoda`规则接收一个主要的模式参数，同一个额外的选项对象带有命名的属性一样。

```js
// "yoda": [2, "never", { "exceptRange": true }]
module.exports = {
    meta: {
        schema: [
            {
                "enum": ["always", "never"]
            },
            {
                "type": "object",
                "properties": {
                    "exceptRange": {
                        "type": "boolean"
                    }
                },
                "additionalProperties": false
            }
        ]
    },
};
```

In the preceding example, the error level is assumed to be the first argument. It is followed by the first optional argument, a string which may be either `"always"` or `"never"`. The final optional argument is an object, which may have a Boolean property named `exceptRange`.

在之前的例子中，错误级别被假定为第一个参数。后面跟着第一个可选参数，是个字符串，可以是`"always"` 或 `"never"`。最后的可选参数是个对象，可以有一个布尔类型的属性，名为`exceptRange`。

To learn more about JSON Schema, we recommend looking at some examples in [website](http://json-schema.org/learn/) to start, and also reading [Understanding JSON Schema](http://spacetelescope.github.io/understanding-json-schema/) (a free ebook).

了解更多 JSON 模式，我们建议从[网站](http://json-schema.org/learn/)中的一些示例开始，并阅读[Understanding JSON Schema](http://spacetelescope.github.io/understanding-json-schema/)(一个免费的电子书)。

**Note:** Currently you need to use full JSON Schema object rather than array in case your schema has references ($ref), because in case of array format ESLint transforms this array into a single schema without updating references that makes them incorrect (they are ignored).

**注意：**目前，如果你的模式有引用 ($ref)，你需要使用完整的 JSON Schema 对象而不是数组，因为在数组格式的情况下，ESLint 将该数组转换为单个模式，而不更新其引用，导致错误(它们将被忽略)。

### Getting the Source

If your rule needs to get the actual JavaScript source to work with, then use the `sourceCode.getText()` method. This method works as follows:

如果你的规则需要获取实际的 JavaScript 的源，那么使用 `sourceCode.getText()` 方法。该方法运行如下：

```js

// get all source
var source = sourceCode.getText();

// get source for just this AST node
var nodeSource = sourceCode.getText(node);

// get source for AST node plus previous two characters
var nodeSourceWithPrev = sourceCode.getText(node, 2);

// get source for AST node plus following two characters
var nodeSourceWithFollowing = sourceCode.getText(node, 0, 2);
```

In this way, you can look for patterns in the JavaScript text itself when the AST isn't providing the appropriate data (such as location of commas, semicolons, parentheses, etc.).

通过这种方式，当 AST 没有提供合适的数据（比如逗号、分号、括号的位置等），你可以寻找 JavaScript 文本中的模式本身。

### Accessing Comments

While comments are not technically part of the AST, ESLint provides a few ways for rules to access them:

虽然从技术上说，评论并不是 AST 的一部分，但 ESLint 提供了一些方法来访问它们：

#### sourceCode.getAllComments()

This method returns an array of all the comments found in the program. This is useful for rules that need to check all comments regardless of location.

这个方法返回一个在程序中找到的所有的注释的数组。这对于要检查所有注释的规则是有用的，无论这些注释在什么位置。

#### sourceCode.getCommentsBefore(), sourceCode.getCommentsAfter(), and sourceCode.getCommentsInside()

These methods return an array of comments that appear directly before, directly after, and inside nodes, respectively. They are useful for rules that need to check comments in relation to a given node or token.

这些方法分别返回一个在节点之前，节点之后，节点内的注释的数组。这对于要检查给定的节点或 token 的注释的规则是有用的。

Keep in mind that the results of this method are calculated on demand.

请记住，这些结果是按需计算的。

#### Token traversal methods

Finally, comments can be accessed through many of `sourceCode`'s methods using the `includeComments` option.

最后，注释可以通过很多 `sourceCode` 的方法使用 `includeComments` 选项来访问。

### Accessing Shebangs

Shebangs are represented by tokens of type `"Shebang"`. They are treated as comments and can be accessed by the methods outlined above.

Shebang(#!) 使用 `"Shebang"` 类型的 token 来表示。它们可以被当做注释，也可以用上述方法来访问。

### Accessing Code Paths

ESLint analyzes code paths while traversing AST.
You can access that code path objects with five events related to code paths.

ESLint 遍历 AST 时，会分析代码路径。你也可以使用与代码路径相关的 5 个事件访问代码路径对象。

[details here](./code-path-analysis)

[详细信息](./code-path-analysis)

## Rule Unit Tests

Each bundled rule for ESLint core must have a set of unit tests submitted with it to be accepted. The test file is named the same as the source file but lives in `tests/lib/`. For example, if the rule source file is `lib/rules/foo.js` then the test file should be `tests/lib/rules/foo.js`.

ESLint provides the [`RuleTester`](/docs/developer-guide/nodejs-api#ruletester) utility to make it easy to write tests for rules.

## Performance Testing

To keep the linting process efficient and unobtrusive, it is useful to verify the performance impact of new rules or modifications to existing rules.

为了保持检查过程高效、unobtrusive，验证新规则或现有规则的修改的性能影响是非常有用的。

### Overall Performance

When developing in the ESLint core repository, the `npm run perf` command gives a high-level overview of ESLint running time with all core rules enabled.

在 ESLint 核心库中进行开发时，`npm run perf` 命令提供了启用所有核心规则的 ESLint 运行时间的高级概览。

```bash
$ git checkout master
Switched to branch 'master'

$ npm run perf
CPU Speed is 2200 with multiplier 7500000
Performance Run #1:  1394.689313ms
Performance Run #2:  1423.295351ms
Performance Run #3:  1385.09515ms
Performance Run #4:  1382.406982ms
Performance Run #5:  1409.68566ms
Performance budget ok:  1394.689313ms (limit: 3409.090909090909ms)

$ git checkout my-rule-branch
Switched to branch 'my-rule-branch'

$ npm run perf
CPU Speed is 2200 with multiplier 7500000
Performance Run #1:  1443.736547ms
Performance Run #2:  1419.193291ms
Performance Run #3:  1436.018228ms
Performance Run #4:  1473.605485ms
Performance Run #5:  1457.455283ms
Performance budget ok:  1443.736547ms (limit: 3409.090909090909ms)
```

### Per-rule Performance

ESLint has a built-in method to track performance of individual rules. Setting the `TIMING` environment variable will trigger the display, upon linting completion, of the ten longest-running rules, along with their individual running time and relative performance impact as a percentage of total rule processing time.

ESLint 有一个内置的方法用来追踪每条规则的性能。设置 `TIMING` 环境变量，在检查完成之际，将触发展示是个长时间运行的规则以及它们各自的运行时间和相应的性能影响（占所有规则处理时间的百分比）。

```bash
$ TIMING=1 eslint lib
Rule                    | Time (ms) | Relative
:-----------------------|----------:|--------:
no-multi-spaces         |    52.472 |     6.1%
camelcase               |    48.684 |     5.7%
no-irregular-whitespace |    43.847 |     5.1%
valid-jsdoc             |    40.346 |     4.7%
handle-callback-err     |    39.153 |     4.6%
space-infix-ops         |    35.444 |     4.1%
no-undefined            |    25.693 |     3.0%
no-shadow               |    22.759 |     2.7%
no-empty-class          |    21.976 |     2.6%
semi                    |    19.359 |     2.3%
```

To test one rule explicitly, combine the `--no-eslintrc`, and `--rule` options:

为了明确表明测试一个规则，结合使用 `--no-eslintrc` 和 `--rule` 选项：

```bash
$ TIMING=1 eslint --no-eslintrc --rule "quotes: [2, 'double']" lib
Rule   | Time (ms) | Relative
:------|----------:|--------:
quotes |    18.066 |   100.0%
```

## Rule Naming Conventions

The rule naming conventions for ESLint are fairly simple:

ESLint 的规则命名约定相当简单：

* If your rule is disallowing something, prefix it with `no-` such as `no-eval` for disallowing `eval()` and `no-debugger` for disallowing `debugger`.
* 如果你的规则是禁止什么，加前缀 `no-`，比如 `no-eval` 禁用 `eval()`，`no-debugger`禁用`debugger`
* If your rule is enforcing the inclusion of something, use a short name without a special prefix.
* 如果你规则是强制包含什么，使用一个简短的名称，不带特殊的前缀。
* Use dashes between words.
* 在单词之间使用连字符

## Runtime Rules

The thing that makes ESLint different from other linters is the ability to define custom rules at runtime. This is perfect for rules that are specific to your project or company and wouldn't make sense for ESLint to ship with. With runtime rules, you don't have to wait for the next version of ESLint or be disappointed that your rule isn't general enough to apply to the larger JavaScript community, just write your rules and include them at runtime.

使 ESLint 有别于其他检查工具的东西是，它可以在运行时定义自定义的规则。This is perfect for rules that are specific to your project or company and wouldn't make sense for ESLint to ship with.有了运行时规则，你不需要等待 ESLint 的下一个版本或为你的规则不够太通用以至不能适用于大的 JavaScript 社区而感到失望，写出你的规则并将它们在运行时引入即可。

Runtime rules are written in the same format as all other rules. Create your rule as you would any other and then follow these steps:

运行时规则的格式与其它规则一样。像创建其他规则一样，创建你的运行时规则，然后按照以下步骤：

1. Place all of your runtime rules in the same directory (i.e., `eslint_rules`).
1. 把你所有的运行时规则放在同一个目录下 (例如, `eslint_rules`)。
2. Create a [configuration file](../user-guide/configuring) and specify your rule ID error level under the `rules` key. Your rule will not run unless it has a value of `1` or `2` in the configuration file.
2. 创建一个[配置文件](../user-guide/configuring)，在 `rules` 键下指定你的规则 ID、错误级别。你的规则将不会运行，除非在配置文件中有一个 `1` 或 `2` 的值
3. Run the [command line interface](../user-guide/command-line-interface) using the `--rulesdir` option to specify the location of your runtime rules.
3. 运行[命令行](../user-guide/command-line-interface) 使用 `--rulesdir` 选项指定你的运行时规则的位置。
