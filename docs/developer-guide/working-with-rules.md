---
title: Working with Rules
layout: doc
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# Working with Rules

**Note:** This page covers the most recent rule format. There is also a [deprecated rule format](./working-with-rules-deprecated).

**注意：**这个页面覆盖了大部分规则格式。也有[弃用的规则格式](./working-with-rules-deprecated)。

Each rule in ESLint has two files named with its identifier (for example, `no-extra-semi`).

ESLint 中的每个规则都有两个文件，以它的 ID 命名（例如，`no-extra-semi`）。

* in the `lib/rules` directory: a source file (for example, `no-extra-semi.js`)
* `lib/rules` 目录：源码文件 (例如，`no-extra-semi.js`)
* in the `tests/lib/rules` directory: a test file (for example, `no-extra-semi.js`)
* `tests/lib/rules` 目录：测试文件 (例如，`no-extra-semi.js`)

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
        docs: {
            description: "disallow unnecessary semicolons",
            category: "Possible Errors",
            recommended: true
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

* `docs` (object) is required for core rules of ESLint:
* `docs` (object) 对 ESLint 核心规则来说是必需的:
    * `description` (string) provides the short description of the rule in the [rules index](../rules/)
    * `description` (字符串) 提供规则的简短描述在[规则首页](../rules/)展示
    * `category` (string) specifies the heading under which the rule is listed in the [rules index](../rules/)
    * `category` (string) 指定规则在[规则首页](../rules/)处于的分类
    * `recommended` (boolean) is whether the `"extends": "eslint:recommended"` property in a [configuration file](../user-guide/configuring#extending-configuration-files) enables the rule
    * `recommended` (boolean) [配置文件](../user-guide/configuring#extending-configuration-files)中的`"extends": "eslint:recommended"`属性是否启用该规则
    	
	In a custom rule or plugin, you can omit `docs` or include any properties that you need in it.    
    	
	在自定义的规则或插件中，你可以省略 `docs` 或包含你需要的任何属性。

* `fixable` (string) is either `"code"` or `"whitespace"` if the `--fix` option on the [command line](../user-guide/command-line-interface#fix) automatically fixes problems reported by the rule

* `fixable` (string) 标示[命令行](../user-guide/command-line-interface#fix) 选项 `--fix` 自动修复规则报告的问题。
	
**Important:** Without the `fixable` property, ESLint does not [apply fixes](#applying-fixes) even if the rule implements `fix` functions. Omit the `fixable` property if the rule is not fixable.
    	
**重要：**如果没有 `fixable` 属性，即使规则实现了 `fix` 功能，ESLint 也不会[进行修复](#applying-fixes)。如果规则不是可修复的，就省略 `fixable` 属性。

* `schema` (array) specifies the [options](#options-schemas) so ESLint can prevent invalid [rule configurations](../user-guide/configuring#configuring-rules)
* `schema` (array) 指定该[选项](#options-schemas) 这样的 ESLint 可以避免无效的[规则配置](../user-guide/configuring#configuring-rules)
* `deprecated` (boolean) indicates whether the rule has been deprecated.  You may omit the `deprecated` property if the rule has not been deprecated.
* `deprecated` (boolean) 表明规则是已被弃用。如果规则尚未被弃用，你可以省略 `deprecated` 属性。


`create` (function) returns an object with methods that ESLint calls to "visit" nodes while traversing the abstract syntax tree (AST as defined by [ESTree](https://github.com/estree/estree)) of JavaScript code:

`create` (function) 返回一个对象，其中包含了 ESLint 在遍历 JavaScript 代码的抽象语法树 AST ([ESTree](https://github.com/estree/estree) 定义的 AST) 时，用来访问节点的方法。

* if a key is a node type, ESLint calls that **visitor** function while going **down** the tree
* 如果一个 key 是个节点类型，在 **向下** 遍历树时，ESLint 调用 **visitor** 函数
* if a key is a node type plus `:exit`, ESLint calls that **visitor** function while going **up** the tree
* 如果一个 key 是个节点类型，并带有 `:exit`，在 **向上** 遍历树时，ESLint 调用 **visitor** 函数
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
* `parserOptions` - 解析器选项 (more details [here](../user-guide/configuring#specifying-parser-options)).
* `id` - the rule ID.
* `id` - 规则 ID。
* `options` - an array of rule options.
* `options` - 一个规则选项数组。
* `settings` - the `settings` from configuration.
* `settings` - 配置中的 `settings`。
* `parserPath` - the full path to the `parser` from configuration.
* `parserPath` - 配置中的 `parser` 的绝对路径。

Additionally, the `context` object has the following methods:

另外，`context` 对象有以下方法：

* `getAncestors()` - returns an array of ancestor nodes based on the current traversal.
* `getAncestors()` - 基于当前遍历，返回一个父节点数组。
* `getDeclaredVariables(node)` - returns the declared variables on the given node.
* `getDeclaredVariables(node)` - 返回给定节点上声明的变量。
* `getFilename()` - returns the filename associated with the source.
* `getFilename()` - 返回与源相关的文件名。
* `getScope()` - returns the current scope.
* `getScope()` - 返回当前作用域。
* `getSourceCode()` - returns a `SourceCode` object that you can use to work with the source that was passed to ESLint
* `getSourceCode()` - 返回一个 `SourceCode` 对象，你可以在源码中使用并传递给 ESLint。
* `markVariableAsUsed(name)` - marks the named variable in scope as used. This affects the [no-unused-vars](../rules/no-unused-vars) rule.
* `markVariableAsUsed(name)` - 标记在作用域中使用的已命名的变量。这会影响 [no-unused-vars](../rules/no-unused-vars) 规则.
* `report(descriptor)` - reports a problem in the code.
* `report(descriptor)` - 报告代码中的一个问题。

**Note:** Earlier versions of ESLint supported additional methods on the `context` object. Those methods were removed in the new format and should not be relied upon.

**注意：**ESLint 的早期版本支持 `context` 对象的额外的方法。这些方法在新的格式中已被移除，不应该再使用。

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
* `data` - (optional) placeholder data for `message`.
* `data` - (可选的) `message`的占位符.
* `fix` - (optional) a function that applies a fix to resolve the problem.
* `fix` - (可选的) 一个用来解决问题的修复函数

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

You can also use placeholders in the message and provide `data`:

你也可以在消息中使用占位符和提供 `data`：

```js
context.report({
    node: node,
    message: "Unexpected identifier: {{ identifier }}",
    data: {
        identifier: node.name
    }
});
```

Note that leading and trailing whitespace is optional in message parameters.

注意，消息中参数的前导和末尾空白是可选的。

The node contains all of the information necessary to figure out the line and column number of the offending text as well the source text representing the node.

该节点包含所有必要的信息，用来找出违规文本的行列号作为该节点的源文本。

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

Here, the `fix()` function is used to insert a semicolon after the node. Note that the fix is not immediately applied and may not be applied at all if there are conflicts with other fixes. If the fix cannot be applied, then the problem message is reported as usual; if the fix can be applied, then the problem message is not reported.

在这里，`fix()` 函数被用来在该节点之后插入一个分号。注意，此函数并不立即进行修复，如果与其它修复程序有冲突，可能根本就不进行修复。如果不进行修复，则像往常一下报告问题消息；如果进行修复，则不会报告问题消息。

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

Best practices for fixes:

修复的最佳实践：

1. Make fixes that are as small as possible. Anything more than a single character is risky and could prevent other, simpler fixes from being made.
1. 做尽可能小的修复。多一个字符就会多一份风险，可能会妨碍其它更简单的修复。
1. Only make one fix per message. This is enforced because you must return the result of the fixer operation from `fix()`.
1. 使每条消息只有一个修复。这是强制的，因为你必须从 `fix()` 返回修复操作的结果。
1. Fixes should not introduce clashes with other rules. You can accidentally introduce a new problem that won't be reported until ESLint is run again. Another good reason to make as small a fix as possible.
1. 修复不应引入与其它规则的冲突。你可能不经意间引入了一个新的问题，直到 ESLint 重新运行，它都不会被发现。另一个好的理由是让修复程序尽可能的小。

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

When using options, make sure that your rule has some logic defaults in case the options are not provided.

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

* `getAllComments()` - returns an array of all comments in the source.
* `getAllComments()` - 返回一个包含源中所有注释的数组。
* `getComments(node)` - returns the leading and trailing comments arrays for the given node.
* `getComments(node)` - 返回给定节点的前导注释和末尾注释的数组。
* `getFirstToken(node)` - returns the first token representing the given node.
* `getFirstToken(node)` - 返回代表给定节点的第一个记号。
* `getFirstTokens(node, count)` - returns the first `count` tokens representing the given node.
* `getFirstTokens(node, count)` - 返回代表给定节点的第一个 `count` 记号。
* `getJSDocComment(node)` - returns the JSDoc comment for a given node or `null` if there is none.
* `getJSDocComment(node)` - 返回给定节点的 JSDoc 注释，如果没有则返回 null。
* `getLastToken(node)` - returns the last token representing the given node.
* `getLastToken(node)` - 返回代表给定节点最后一个记号。
* `getLastTokens(node, count)` - returns the last `count` tokens representing the given node.
* `getLastTokens(node, count)` - 返回代表给定节点的最后一个 `count` 记号。
* `getNodeByRangeIndex(index)` - returns the deepest node in the AST containing the given source index.
* `getNodeByRangeIndex(index)` - 返回 AST 中最深的节点，包括给定的源的索引。
* `isSpaceBetweenTokens(first, second)` - returns true if there is a whitespace character between the two tokens.
* `isSpaceBetweenTokens(first, second)` - 如果两个记号之间有空白，返回 true
* `getText(node)` - returns the source code for the given node. Omit `node` to get the whole source.
* `getText(node)` - 返回给定节点的源码。 省略 node，返回所有源码。
* `getTokenAfter(nodeOrToken)` - returns the first token after the given node or token.
* `getTokenAfter(nodeOrToken)` - 返回给定的节点或记号之后的第一个记号。
* `getTokenBefore(nodeOrToken)` - returns the first token before the given node or token.
* `getTokenBefore(nodeOrToken)` - 返回给定的节点或记号之前的第一个记号。
* `getTokenByRangeStart(index)` - returns the token whose range starts at the given index in the source.
* `getTokenByRangeStart(index)` - 返回源中范围从给定的索引开始的记号。
* `getTokens(node)` - returns all tokens for the given node.
* `getTokens(node)` - 返回给定节点的所有记号。
* `getTokensAfter(nodeOrToken, count)` - returns `count` tokens after the given node or token.
* `getTokensAfter(nodeOrToken, count)` - 返回给定节点或记号之后的 `count` 记号。
* `getTokensBefore(nodeOrToken, count)` - returns `count` tokens before the given node or token.
* `getTokensBefore(nodeOrToken, count)` - 返回给定节点或记号之前的 `count` 记号。
* `getTokensBetween(node1, node2)` - returns the tokens between two nodes.
* `getTokensBetween(node1, node2)` - 返回两个节点间记号。

There are also some properties you can access:

也有一些属性可供你访问：

* `hasBOM` - the flag to indicate whether or not the source code has Unicode BOM.
* `hasBOM` - 标记源码中是否含有 Unicode BOM。
* `text` - the full text of the code being linted. Unicode BOM has been stripped from this text.
* `text` - 被检查的代码全文，Unicode BOM 已经从该文本中剥离。
* `ast` - the `Program` node of the AST for the code being linted.
* `ast` - AST 的 `Program` 节点，用于代码检查
* `lines` - an array of lines, split according to the specification's definition of line breaks.
* `lines` - 一个包含所有行的数组，是根据规范中的换行符的定义划分的。

You should use a `SourceCode` object whenever you need to get more information about the code being linted.

你应该使用 `SourceCode` 对象，无论在何时你需要获取有关被检查的代码的更多信息。

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
        ];
    },
};
```

In the preceding example, the error level is assumed to be the first argument. It is followed by the first optional argument, a string which may be either `"always"` or `"never"`. The final optional argument is an object, which may have a Boolean property named `exceptRange`.

在之前的例子中，错误级别被假定为第一个参数。后面跟着第一个可选参数，是个字符串，可以是`"always"` 或 `"never"`。最后的可选参数是个对象，可以有一个布尔类型的属性，名为`exceptRange`。

To learn more about JSON Schema, we recommend looking at some [examples](http://json-schema.org/examples.html) to start, and also reading [Understanding JSON Schema](http://spacetelescope.github.io/understanding-json-schema/) (a free ebook).

了解更多 JSON 模式，我们建议从这些[示例](http://json-schema.org/examples.html)开始，也阅读一下[Understanding JSON Schema](http://spacetelescope.github.io/understanding-json-schema/)(一个免费的电子书)。

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

### Accessing comments

If you need to access comments for a specific node you can use `sourceCode.getComments(node)`:

如果你需要访问特定的节点的注释，你可以使用`sourceCode.getComments(node)`：

```js
// the "comments" variable has a "leading" and "trailing" property containing
// its leading and trailing comments, respectively
var comments = sourceCode.getComments(node);
```

Keep in mind that comments are technically not a part of the AST and are only attached to it on demand, i.e. when you call `getComments()`.

记住，从技术上而言，注释并不是 AST 的一部分，它们只是在需要的时候，也就是当你调用 `getComments()` 时，附加到 AST。

**Note:** One of the libraries adds AST node properties for comments - do not use these properties. Always use `sourceCode.getComments()` as this is the only guaranteed API for accessing comments (we will likely change how comments are handled later).

**注意：**一个类库为注释添加了 AST 节点属性 - 不要使用这些属性。总是使用 `sourceCode.getComments()` 作为访问注释的唯一有保证的 API (稍后我们可能会改变注释的处理方式)。

### Accessing Code Paths

ESLint analyzes code paths while traversing AST.
You can access that code path objects with five events related to code paths.

ESLint 遍历 AST 时，会分析代码路径。你也可以使用与代码路径相关的 5 个事件访问代码路径对象。

[details here](./code-path-analysis)

[详细信息](./code-path-analysis)

## Rule Unit Tests

Each rule must have a set of unit tests submitted with it to be accepted. The test file is named the same as the source file but lives in `tests/lib/`. For example, if your rule source file is `lib/rules/foo.js` then your test file should be `tests/lib/rules/foo.js`.

每个提交的规则如果想被接受，都应该有一组单元测试。测试文件命名与源文件一样，但放置在 `tests/lib/` 下。例如，如果你的规则源文件是 `lib/rules/foo.js`，那么你的测试文件应该是 `tests/lib/rules/foo.js`。

For your rule, be sure to test:

对于你的规则，要确保测试：

1. All instances that should be flagged as warnings.
1. 所有应该被标记为警告的实例。
1. At least one pattern that should **not** be flagged as a warning.
1. 至少一个 **不**应该被标记为警告的模式。

The basic pattern for a rule unit test file is:

一个规则的单元测试文件的基本模式如下：

```js
/**
 * @fileoverview Tests for no-with rule.
 * @author Nicholas C. Zakas
 */

"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require("../../../lib/rules/no-with"),
    RuleTester = require("../../../lib/testers/rule-tester");

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var ruleTester = new RuleTester();
ruleTester.run("no-with", rule, {
    valid: [
        "foo.bar()"
    ],
    invalid: [
        {
            code: "with(foo) { bar() }",
            errors: [{ message: "Unexpected use of 'with' statement.", type: "WithStatement"}]
        }
    ]
});
```

Be sure to replace the value of `"no-with"` with your rule's ID. There are plenty of examples in the `tests/lib/rules/` directory.

确保将 `"no-with"` 的值替换为你的规则 ID。在 `tests/lib/rules/` 目录下有很多例子。

### Valid Code

Each valid case can be either a string or an object. The object form is used when you need to specify additional global variables or arguments for the rule. For example, the following defines `window` as a global variable for code that should not trigger the rule being tested:

每个有效用例要么是个字符串，要么是个对象。当你需要为你的规则指定额外的全局变量或参数时，会用到对象。例如：下面的示例为代码定义了 `window` 作为全局对象，在规则被测试时，不应该被触发。

```js
valid: [
    {
        code: "window.alert()",
        globals: [ "window" ]
    }
]
```

You can also pass options to the rule (if it accepts them). These arguments are equivalent to how people can configure rules in their `.eslintrc` file. For example:

你也可以给规则传入可选项（如果是可以接受的）。这些参数同 `.eslintrc` 文件中规则的配置一样。

```js
valid: [
    {
        code: "var msg = 'Hello';",
        options: [ "single" ]
    }
]
```

The `options` property must be an array of options. This gets passed through to `context.options` in the rule.

`options` 属性必须是个选项的数组。被传递给数组中的 `context.options`。

### Invalid Code

Each invalid case must be an object containing the code to test and at least one message that is produced by the rule. The `errors` key specifies an array of objects, each containing a message (your rule may trigger multiple messages for the same code). You should also specify the type of AST node you expect to receive back using the `type` key. The AST node should represent the actual spot in the code where there is a problem. For example:

每个无效的用例必须是个对象，包含要测试的代码和至少一条规则产生的消息。`errors` 键指定一个包含对象数组，每个对象都包含一条消息（你的规则对同一段代码可能触发多个消息）。你还应该使用 `type` 键指定你希望接收到的 AST 节点类型。AST 节点应该代表有问题的代码的实际的点。例如：

```js
invalid: [
    {
        code: "function doSomething() { var f; if (true) { var build = true; } f = build; }",
        errors: [
            { message: "build used outside of binding context.", type: "Identifier" }
        ]
    }
]
```

In this case, the message is specific to the variable being used and the AST node type is `Identifier`.

在这个用例中，对被使用的变量而言，消息是特定的，AST 节点类型是 `Identifier`。

You can also check that the rule returns the correct line and column numbers for the message by adding `line` and `column` properties as needed (both are optional, but highly recommend):

你也可以通过添加 `line` 和 `column` 属性（两者都是可选的，但强烈建议）检查规则是否返回正确的行列号：

```js
invalid: [
    {
        code: "function doSomething() { var f; if (true) { var build = true; } f = build; }",
        errors: [
            {
                message: "build used outside of binding context.",
                type: "Identifier",
                line: 1,
                column: 68
            }
        ]
    }
]
```

The test fails if the line or column reported by the rule doesn't match the options specified in the test.

如果规则报告的行或列与测试中指定的选项不符，测试失败。

Similar to the valid cases, you can also specify `options` to be passed to the rule:

类似于有效用例，你也可以指定传递给规则的 `options`：

```js
invalid: [
    {
        code: "function doSomething() { var f; if (true) { var build = true; } f = build; }",
        options: [ "double" ],
        errors: [
            { message: "build used outside of binding context.", type: "Identifier" }
        ]
    }
]
```

For simpler cases where the only thing that really matters is the error message, you can also specify any `errors` as strings. You can also have some strings and some objects, if you like.

对于简单情况下，唯一真正重要的是错误消息，你可以指定任何 `errors`字符串。如果你喜欢，你也可以有多个字符串和对象。

```js
invalid: [
    {
        code: "'single quotes'",
        options: ["double"],
        errors: ["Strings must use doublequote."]
    }
]
```

### Specifying Globals

If your rule relies on globals to be specified, you can provide global variable declarations by using the `globals` property. For example:

如果你的规则依赖指定的全局变量，你可以使用 `globals` 属性来提供全局变量声明。例如：

```js
valid: [
    {
        code: "for (x of a) doSomething();",
        globals: { window: true }
    }
]
```

The same works on invalid tests:

同样适用于无效测试：

```js
invalid: [
    {
        code: "'single quotes'",
        globals: { window: true },
        errors: ["Strings must use doublequote."]
    }
]
```

### Specifying Settings

If your rule relies on `context.settings` to be specified, you can provide those settings by using the `settings` property. For example:

如果你的规则依赖指定的 `context.settings`，你可以使用 `settings` 属性来提供这些设置。例如：

```js
valid: [
    {
        code: "for (x of a) doSomething();",
        settings: { message: "hi" }
    }
]
```

The same works on invalid tests:

同样适用于无效测试：

```js
invalid: [
    {
        code: "'single quotes'",
        settings: { message: "hi" },
        errors: ["Strings must use doublequote."]
    }
]
```

You can then access `context.settings.message` inside of the rule.

你可以在规则内访问 `context.settings.message` 。

### Specifying Filename

If your rule relies on `context.getFilename()` to be specified, you can provide the filename by using the `filename` property. For example:

如果你的规则依赖指定的 `context.getFilename()`，你可以使用 `filename` 属性来提供文件名。例如：

```js
valid: [
    {
        code: "for (x of a) doSomething();",
        filename: "foo/bar.js"
    }
]
```

The same works on invalid tests:

同样适用于无效测试：

```js
invalid: [
    {
        code: "'single quotes'",
        filename: "foo/bar.js",
        errors: ["Strings must use doublequote."]
    }
]
```

You can then access `context.getFilename()` inside of the rule.

你可以在规则内访问 `context.getFilename()`。

### Specifying Parser and Parser Options

Some tests require that a certain parser configuration must be used. This can be specified in test specifications via the `parser` and `parserOptions` properties. While the following examples show usage in `valid` tests, you can use the same options in `invalid` tests as well.

一些测试要求必须使用一个特定的解析器配置。可以通过在测试中指定 `parser` 和 `parserOptions` 属性来指定。虽然下面的例子展示了 `valid` 测试的使用，但对 `invalid` 测试也同样适用。

For example, to set `ecmaVersion` to 6 (in order to use constructs like `for-of`):

例如，设置 `ecmaVersion` 为 6（为了使用像 `for-of` 的构造）：

```js
valid: [
    {
        code: "for (x of a) doSomething();",
        parserOptions: { ecmaVersion: 6 }
    }
]
```

If you are working with ES6 modules:

如果你在使用 ES6 模块：

```js
valid: [
    {
        code: "export default function () {};",
        parserOptions: { ecmaVersion: 6, sourceType: "module" }
    }
]
```

For non-version specific features such as JSX:

对于没有版本的特定的特性，比如 JSX：

```js
valid: [
    {
        code: "var foo = <div>{bar}</div>",
        parserOptions: { ecmaFeatures: { jsx: true } }
    }
]
```

To use a different parser:

使用一个不同的解析器：

```js
valid: [
    {
        code: "var foo = <div>{bar}</div>",
        parser: "my-custom-parser"
    }
]
```

The options available and the expected syntax for `parserOptions` is the same as those used in [configuration](../user-guide/configuring#specifying-parser-options).

`parserOptions` 中的选项和期望的语法请查看[配置](../user-guide/configuring#specifying-parser-options)。

## Performance Testing

To keep the linting process efficient and unobtrusive, it is useful to verify the performance impact of new rules or modifications to existing rules.

为了保持检查过程高效、unobtrusive，验证新规则或现有规则的修改的性能影响是非常有用的。

### Overall Performance

The `npm run perf` command gives a high-level overview of ESLint running time with default rules (`eslint:recommended`) enabled.

在默认规则（`eslint:recommended`）开启的情况下，`npm run perf` 命令提供了一个高水平 ESLint 运行时间的概览。

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
* Keep your rule names as short as possible, use abbreviations where appropriate, and no more than four words.
* 保持你的规则名尽可能得简短，在适当的地方使用缩写，不要超过四个单词。
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
