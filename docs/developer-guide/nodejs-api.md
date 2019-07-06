---
title: Node.js API
layout: doc
edit_link: https://github.com/eslint/eslint/edit/master/docs/developer-guide/nodejs-api.md

---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# Node.js API

While ESLint is designed to be run on the command line, it's possible to use ESLint programmatically through the Node.js API. The purpose of the Node.js API is to allow plugin and tool authors to use the ESLint functionality directly, without going through the command line interface.

ESLint 被设计为在命令行中运行，所以通过 Node.js API 使用 ESLint 编程是可能的。Node.js API 的目的是使插件和工具的作者可以直接使用 ESLint 的功能，而不需要通过命令行接口。

**Note:** Use undocumented parts of the API at your own risk. Only those parts that are specifically mentioned in this document are approved for use and will remain stable and reliable. Anything left undocumented is unstable and may change or be removed at any point.

**注意：**使用文档中没有的 API 的风险需自己承担。只有文档中声明的部分是赞成使用且可保持稳定可靠。文档中未声明的部分是不稳定的且可能随时被移除。

## Table of Contents

* [SourceCode](#sourcecode)
    * [splitLines()](#sourcecodesplitlines)
* [Linter](#linter)
    * [verify()](#linterverify)
    * [verifyAndFix()](#linterverifyandfix)
    * [defineRule()](#linterdefinerule)
    * [defineRules()](#linterdefinerules)
    * [getRules()](#lintergetrules)
    * [defineParser()](#linterdefineparser)
    * [version](#linterversion)
* [linter (deprecated)](#linter-1)
* [CLIEngine](#cliengine)
    * [executeOnFiles()](#cliengineexecuteonfiles)
    * [resolveFileGlobPatterns()](#cliengineresolvefileglobpatterns)
    * [getConfigForFile()](#clienginegetconfigforfile)
    * [executeOnText()](#cliengineexecuteontext)
    * [addPlugin()](#cliengineaddplugin)
    * [isPathIgnored()](#cliengineispathignored)
    * [getFormatter()](#clienginegetformatter)
    * [getErrorResults()](#clienginegeterrorresults)
    * [outputFixes()](#cliengineoutputfixes)
    * [getRules()](#clienginegetrules)
    * [version](#cliengineversion)
* [RuleTester](#ruletester)
    * [Customizing RuleTester](#customizing-ruletester)
* [Deprecated APIs](#deprecated-apis)

## SourceCode

The `SourceCode` type represents the parsed source code that ESLint executes on. It's used internally in ESLint and is also available so that already-parsed code can be used. You can create a new instance of `SourceCode` by passing in the text string representing the code and an abstract syntax tree (AST) in [ESTree](https://github.com/estree/estree) format (including location information, range information, comments, and tokens):

`SourceCode` 类型表示 ESLint 执行分析的源代码。它在 ESLint 内部使用，对于已经解析的代码也是可用的。你可以以 [ESTree](https://github.com/estree/estree) 的形式传递表示代码和抽象语法树 (AST) 的文本字符串创建`SourceCode`的新实例。（包含本地信息，范围信息，注释和标志）：

```js
var SourceCode = require("eslint").SourceCode;

var code = new SourceCode("var foo = bar;", ast);
```

The `SourceCode` constructor throws an error if the AST is missing any of the required information.

缺少任何必要的信息 `SourceCode` 构造器都会抛出错误。

The `SourceCode` constructor strips Unicode BOM.
Please note the AST also should be parsed from stripped text.

`SourceCode` 构造函数剥离 Unicode BOM。请注意，AST 也应该从剥离后的文本进行解析。
 
```js
var SourceCode = require("eslint").SourceCode;

var code = new SourceCode("\uFEFFvar foo = bar;", ast);

assert(code.hasBOM === true);
assert(code.text === "var foo = bar;");
```

### SourceCode#splitLines()

This is a static function on `SourceCode` that is used to split the source code text into an array of lines.

这是 `SourceCode` 的一个静态函数，用来将源码文本分割成一个行的数组。

```js
var SourceCode = require("eslint").SourceCode;

var code = "var a = 1;\nvar b = 2;"

// split code into an array
var codeLines = SourceCode.splitLines(code);

/*
    Value of codeLines will be
    [
        "var a = 1;",
        "var b = 2;"
    ]
 */
```

## Linter

The `Linter` object does the actual evaluation of the JavaScript code. It doesn't do any filesystem operations, it simply parses and reports on the code. In particular, the `Linter` object does not process configuration objects or files. You can retrieve instances of `Linter` like this:

`Linter` 对象对 JavaScript 代码进行评估。它不会对文件系统进行操作，它只会简单地解析和报告代码。特别是，`Linter` 对象不会处理配置对象或文件。你可以这样取得 `Linter` 实例： 

```js
var Linter = require("eslint").Linter;
var linter = new Linter();
```

### Linter#verify

The most important method on `Linter` is `verify()`, which initiates linting of the given text. This method accepts three arguments:

`Linter` 最重要的方法为 `verify()`，它对给出的文本进行检测。这个方法接受3个参数：

* `code` - the source code to lint (a string or instance of `SourceCode`).
* `code`- 要检测的源代码（字符串或者 `SourceCode` 的实例）。
* `config` - a configuration object that has been processed and normalized by CLIEngine using eslintrc files and/or other configuration arguments.
* `config` - 一个配置对象，被 CLIEngine 用来处理和规范，使用 eslintrc 文件和/或其它配置参数。
    * **Note**: If you want to lint text and have your configuration be read and processed, use CLIEngine's [`executeOnFiles`](#cliengineexecuteonfiles) or [`executeOnText`](#cliengineexecuteontext) instead.
    * **注意：**如果你想检测文本，读取和处理你的配置，使用 CLIEngine's [`executeOnFiles`](#cliengineexecuteonfiles) 或 [`executeOnText`](#cliengineexecuteontext)。
* `options` - (optional) Additional options for this run.
    * `filename` - (optional) the filename to associate with the source code.
    * `filename` - (可选的)与源代码关联的文件名。
    * `preprocess` - (optional) A function that accepts a string containing source text, and returns an array of strings containing blocks of code to lint. Also see: [Processors in Plugins](/docs/developer-guide/working-with-plugins#processors-in-plugins)
    * `preprocess` - (可选的) 该方法接受一个包含源码文本的字符串，返回一个要检测的代码块的字符串数组。查看：[Processors in Plugins](/docs/developer-guide/working-with-plugins#processors-in-plugins)
    * `postprocess` - (optional) A function that accepts an array of problem lists (one list of problems for each block of code from `preprocess`), and returns a one-dimensional array of problems containing problems for the original, unprocessed text. Also see: [Processors in Plugins](/docs/developer-guide/working-with-plugins#processors-in-plugins)
    * `postprocess` - (可选的) A function that accepts an array of problem lists (one list of problems for each block of code from `preprocess`), and returns a one-dimensional array of problems containing problems for the original, unprocessed text. Also see: [Processors in Plugins](/docs/developer-guide/working-with-plugins#processors-in-plugins)
    * `allowInlineConfig` - (optional) set to `false` to disable inline comments from changing ESLint rules.
    * `allowInlineConfig` - (optional) set to `false` to disable inline comments from changing ESLint rules.
    * `allowInLinrConfig` - (可选的)设置为 `false` 来从改变 eslint 规则禁用行内注释。
    * `reportUnusedDisableDirectives` - (optional) when set to `true`, adds reported errors for unused `eslint-disable` directives when no problems would be reported in the disabled area anyway.

If the third argument is a string, it is interpreted as the `filename`.

You can call `verify()` like this:

你可以这样调用 `verify()`：

```js
var Linter = require("eslint").Linter;
var linter = new Linter();

var messages = linter.verify("var foo;", {
    rules: {
        semi: 2
    }
}, { filename: "foo.js" });

// or using SourceCode

var Linter = require("eslint").Linter,
    linter = new Linter(),
    SourceCode = require("eslint").SourceCode;

var code = new SourceCode("var foo = bar;", ast);

var messages = linter.verify(code, {
    rules: {
        semi: 2
    }
}, { filename: "foo.js" });
```

The `verify()` method returns an array of objects containing information about the linting warnings and errors. Here's an example:

`verify()` 方法返回一个包含警告和错误的对象的数组。下面是个例子：

```js
{
    fatal: false,
    ruleId: "semi",
    severity: 2,
    line: 1,
    column: 23,
    message: "Expected a semicolon.",
    fix: {
        range: [1, 15],
        text: ";"
    }
}
```

The information available for each linting message is:

这些信息对所有的检测信息都是可用的：

* `column` - the column on which the error occurred.
* `column` - 出错的列。
* `fatal` - usually omitted, but will be set to true if there's a parsing error (not related to a rule).
* `fatal` - 通常忽略，但是有解析错误会被设置为true（和规则无关）。
* `line` - the line on which the error occurred.
* `line` - 出错的行。
* `message` - the message that should be output.
* `message` - 应该被输出的信息。
* `nodeType` - the node or token type that was reported with the problem.
* `nodeType` - 和问题一起报到的节点和令牌类型。
* `ruleId` - the ID of the rule that triggered the messages (or null if `fatal` is true).
* `ruleId` - 触发该消息的规则的 ID (如果 `fatal` 为true则此值为null)。
* `severity` - either 1 or 2, depending on your configuration.
* `serverity` - 根据你的配置，值为1或2。
* `endColumn` - the end column of the range on which the error occurred (this property is omitted if it's not range).
* `endColumn` - 错误发生的范围的结束列 (如果不是范围，这个属性会被省略)。
* `endLine` - the end line of the range on which the error occurred (this property is omitted if it's not range).
* `endLine` - 错误发生的范围的结束行 (如果不是范围，这个属性会被省略)。
* `fix` - an object describing the fix for the problem (this property is omitted if no fix is available).
* `fix` - 描述修复问题信息的对象（如果没有修复则会忽略此属性）。

Linting message objects have a deprecated `source` property. This property **will be removed** from linting messages in an upcoming breaking release. If you depend on this property, you should now use the `SourceCode` instance provided by the linter.

You can also get an instance of the `SourceCode` object used inside of `linter` by using the `getSourceCode()` method:

你也可以通过 `getSourceCode()` 方法获取一个在 `linter` 内部使用 `SourceCode` 的实例：

```js
var Linter = require("eslint").Linter;
var linter = new Linter();

var messages = linter.verify("var foo = bar;", {
    rules: {
        semi: 2
    }
}, { filename: "foo.js" });

var code = linter.getSourceCode();

console.log(code.text);     // "var foo = bar;"
```

In this way, you can retrieve the text and AST used for the last run of `linter.verify()`.

通过这种方式，你可以获取用作 `linter.verify()` 最终返回值的文本和 AST。

### Linter#verifyAndFix()

This method is similar to verify except that it also runs autofixing logic, similar to the `--fix` flag on the command line. The result object will contain the autofixed code, along with any remaining linting messages for the code that were not autofixed.

该方法类似于 `verify`，它还有运行自动修复的逻辑，类似于命令行中的 `--fix` 标记。返回的结果对象将包含自动修复后的代码，和其他没有自动修复过的代码的检测消息。

```js
var Linter = require("eslint").Linter;
var linter = new Linter();

var messages = linter.verifyAndFix("var foo", {
    rules: {
        semi: 2
    }
});
```

Output object from this method:

该方法输出的对象为：

```js
{
    fixed: true,
    output: "var foo;",
    messages: []
}
```

The information available is:

字段的含义为：

* `fixed` - True, if the code was fixed.
* `fixed` - 如果代码已修复，则为 true。
* `output` - Fixed code text (might be the same as input if no fixes were applied).
* `output` - 修复的代码文本 (如果没有应用任何修复，该文本可能同输入时的一样).
* `messages` - Collection of all messages for the given code (It has the same information as explained above under `verify` block).
* `messages` - 给定代码的消息集合 (同上面的 `verify` 中介绍的一样).

### Linter#defineRule

Each `Linter` instance holds a map of rule names to loaded rule objects. By default, all ESLint core rules are loaded. If you want to use `Linter` with custom rules, you should use the `defineRule` method to register your rules by ID.

每个 `Linter` 实例都持有一个规则名称到加载的规则对象的映射。默认情况下，将加载所有 ESLint 核心规则。如果你想使用自定义规则的 `Linter`，你应该使用 `defineRule` 方法通过 ID 注册规则。

```js
const Linter = require("eslint").Linter;
const linter = new Linter();

linter.defineRule("my-custom-rule", {
    // (an ESLint rule)

    create(context) {
        // ...
    }
});

const results = linter.verify("// some source text", { rules: { "my-custom-rule": "error" } });
```

### Linter#defineRules

This is a convenience method similar to `Linter#defineRule`, except that it allows you to define many rules at once using an object.

这是一个类似于 `Linter#defineRule` 的便利方法，只不过它允许你使用一个对象定义多个规则。

```js
const Linter = require("eslint").Linter;
const linter = new Linter();

linter.defineRules({
    "my-custom-rule": { /* an ESLint rule */ create() {} },
    "another-custom-rule": { /* an ESLint rule */ create() {} }
});

const results = linter.verify("// some source text", {
    rules: {
        "my-custom-rule": "error",
        "another-custom-rule": "warn"
    }
});
```

### Linter#getRules

This method returns a map of all loaded rules.

该方法返回所有的已加载的规则。

```js
const Linter = require("eslint").Linter;
const linter = new Linter();

linter.getRules();

/*
Map {
  'accessor-pairs' => { meta: { docs: [Object], schema: [Array] }, create: [Function: create] },
  'array-bracket-newline' => { meta: { docs: [Object], schema: [Array] }, create: [Function: create] },
  ...
}
*/
```

### Linter#defineParser

Each instance of `Linter` holds a map of custom parsers. If you want to define a parser programmatically you can add this function
with the name of the parser as first argument and the [parser object](/docs/developer-guide/working-with-plugins#working-with-custom-parsers) as second argument.

`Linter` 的每个实例都有一个定制解析器的映射。如果你希望以编程方式定义解析器，可以添加此函数第一个参数是解析器的名称，第二个参数是[解析器对象](/docs/developer-guide/working-with-plugins#working-with-custom-parsers)。

If during linting the parser is not found, it will fallback to `require(parserId)`.

如果在检测过程中没有找到解析器，它将回退到 `require(parserId)`。

```js
const Linter = require("eslint").Linter;
const linter = new Linter();

linter.defineParser("my-custom-parser", {
    parse(code, options) {
        // ...
    }
});

const results = linter.verify("// some source text", { parser: "my-custom-parser" });
```

### Linter#version/Linter.version

Each instance of `Linter` has a `version` property containing the semantic version number of ESLint that the `Linter` instance is from.

每个 `Linter` 的实例有一个 `version` 属性，包含了 `Linter` 实例的版本号。

```js
const Linter = require("eslint").Linter;
const linter = new Linter();

linter.version; // => '4.5.0'
```

There is also a `Linter.version` property that you can read without instantiating `Linter`:

还有一个 `Linter.version` 属性，你可以在不实例化 `Linter` 的情况下读取它：

```js
const Linter = require("eslint").Linter;

Linter.version; // => '4.5.0'
```

## linter

The `eslint.linter` object (deprecated) is an instance of the `Linter` class as defined [above](#linter). `eslint.linter` exists for backwards compatibility, but we do not recommend using it because any mutations to it are shared among every module that uses `eslint`. Instead, please create your own instance of `eslint.Linter`.

`eslint.linter` 对象(已弃用)是 `Linter` 类（[如上定义](#Linter)）的一个实例。`eslint.linter` 是为了向后兼容，但我们不推荐使用它，因为对它的任何改变将影响所有使用 `eslint` 的模块。相反，请创建你自己的  `eslint.Linter` 实例。

```js
var linter = require("eslint").linter;

var messages = linter.verify("var foo;", {
    rules: {
        semi: 2
    }
}, { filename: "foo.js" });
```

Note: This API is deprecated as of 4.0.0.

注意：该 API 已在 4.0.0 版中被弃用。

## CLIEngine

The primary Node.js API is `CLIEngine`, which is the underlying utility that runs the ESLint command line interface. This object will read the filesystem for configuration and file information but will not output any results. Instead, it allows you direct access to the important information so you can deal with the output yourself.

主要的 Node.js API 是 `CLIEngine`，它是运行在 ESLint 命令行接口的基础实用工具。该对象会读取文件系统获得配置和文件信息，但不会输出任何结果。相反，它允许你直接访问重要信息，这样你就可以自己处理输出结果。

You can get a reference to the `CLIEngine` by doing the following:

你可以通过下面的方式获得 `CLIEngine` 的引用：

```js
var CLIEngine = require("eslint").CLIEngine;
```

The `CLIEngine` is a constructor, and you can create a new instance by passing in the options you want to use. The available options are:

`CLIEngine` 是一个构造器，你可以通过传递想用的选项创建一个实例。下面是可以的选项：

* `allowInlineConfig` - Set to `false` to disable the use of configuration comments (such as `/*eslint-disable*/`). Corresponds to `--no-inline-config`.
* `allowInlineConfig` - 设置为 false 来禁止使用配置中的注释 (比如 `/*eslint-disable*/`)。对应 `--no-inline-config`。
* `baseConfig` - Can optionally be set to a config object that has the same schema as `.eslintrc.*`. This will used as a default config, and will be merged with any configuration defined in `.eslintrc.*` files, with the `.eslintrc.*` files having precedence.
* `baseConfig` - 可以选择将其设置为与 `.eslintrc.*` 模式相同的配置对象。这将作为默认配置，并与 `.eslintrc.*` 中的任何配置进行合并，其中 `.eslintrc.*` 文件的配置优先。
* `cache` - Operate only on changed files (default: `false`). Corresponds to `--cache`.
* `cache` - 仅操作改变的文件(默认为 `false`)。对应于 `--cache`.
* `cacheFile` - Name of the file where the cache will be stored (default: `.eslintcache`). Corresponds to `--cache-file`. Deprecated: use `cacheLocation` instead.
* `cacheFile` - 存放缓存的文件名。（默认为 `.eslintcache`）。对应于 `--cache-file`。已经弃用，用 `cacheLocation` 代替。
* `cacheLocation` - Name of the file or directory where the cache will be stored (default: `.eslintcache`). Corresponds to `--cache-location`.
* `cacheLocation` - 存放缓存的文件或者目录名。（默认为 `.eslintcache`）。 对应于--cache-location`。
* `configFile` - The configuration file to use (default: null). If `useEslintrc` is true or not specified, this configuration will be merged with any configuration defined in `.eslintrc.*` files, with options in this configuration having precedence. Corresponds to `-c`.
* `configFile` - 要使用的配置文件（默认：null）。如果 `useEslintrc` 为 true 或没有指定，则该配置将于在 `.eslintrc.*` 文件中的任何配置进行合并，且该配置具有优先权。对应于 `-c`。
* `cwd` - Path to a directory that should be considered as the current working directory.
* `cwd` - 当前工作目录路径
* `envs` - An array of environments to load (default: empty array). Corresponds to `--env`. Note: This differs from `.eslintrc.*` / `baseConfig`, where instead the option is called `env` and is an object.
* `envs` - 需要加载的环境数组（默认为空数组）。对应于 `--env`。注意：这与 `.eslintrc.*` / `baseConfig` 不同，后者是名为 `env` 的选项，是一个对象。
* `extensions` - An array of filename extensions that should be checked for code. The default is an array containing just `".js"`. Corresponds to `--ext`. It is only used in conjunction with directories, not with filenames, glob patterns or when using `executeOnText()`.
* `extensions`- 要检查的文件扩展名的数组。默认值是一个仅包含 `".js"` 的数组。对应于 `--ext`。它只和目录配合使用，而不是与 文件名或 glob 模式或使用 `executeOnText()` 时一起使用。
* `fix` - A boolean or a function (default: `false`). If a function, it will be passed each linting message and should return a boolean indicating whether the fix should be included with the output report (errors and warnings will not be listed if fixed). Files on disk are never changed regardless of the value of `fix`. To persist changes to disk, call [`outputFixes()`](#cliengineoutputfixes).
* `fix` - 布尔值或函数（默认：`false`）。如果是一个函数，它将传递每一个检测的消息，并且返回一个布尔值指示是否应该将修复包含在输出报告中（如果可修复，将不会再列出错误和警告）。无论 `fix` 的值是什么，磁盘上的文件不会更改。要将更改持久化到磁盘上，需调用[`outputFixes()`](#cliengineoutputfixes)。
* `fixTypes` - An array of rule types for which fixes should be applied (default: `null`). This array acts like a filter, only allowing rules of the given types to apply fixes. Possible array values are `"problem"`, `"suggestion"`, and `"layout"`.
* `fixTypes` - 需要应用修复的规则类型数组（默认为 `null`）。此数组的作用类似于过滤器，只允许对给定类型的规则应用修复。可能的数组值为 `"problem"`，`"suggestion"` 和 `"layout"`。
* `globals` - An array of global variables to declare (default: empty array). Corresponds to `--global`, and similarly supports passing `'name:true'` to denote a writeable global. Note: This differs from `.eslintrc.*` / `baseConfig`, where `globals` is an object.
* `globals` - 要声明的全局变量数组（默认为空数组）。对应于 `--global`，并且同样地支持传递 `'name:true'` 来表示一个可写的全局变量。注意：这不同于 `.eslintrc.*` / `baseConfig`，其中 `globals` 是一个对象。
* `ignore` - False disables use of `.eslintignore`, `ignorePath` and `ignorePattern` (default: true). Corresponds to `--no-ignore`.
* `ignore`- 值为 false 时禁用 `.eslintignore`、`ignorePath` 和 `ignorePattern` (默认为true)。对应于 `--no-ignore`。
* `ignorePath` - The ignore file to use instead of `.eslintignore` (default: null). Corresponds to `--ignore-path`.
* `ignorePath` - 要使用的忽略文件不是 `.eslintignore` (默认为 null)。对应于 `--ignore-path`。
* `ignorePattern` - Glob patterns for paths to ignore. String or array of strings.
* `ignorePattern` - 忽略路径的 Glob 模式。字符串或者字符串的数组。
* `parser` - Specify the parser to be used (default: `espree`). Corresponds to `--parser`.
* `parser` - 指定使用的解析器(默认为 `espree`)。对应于 `--parser`。
* `parserOptions` - An object containing parser options (default: empty object). Corresponds to `--parser-options`.
* `parserOptions` - 一个包含解析器选项的对象 (默认: 空对象)。对应 `--parser-options`。
* `plugins` - An array of plugins to load (default: empty array). Corresponds to `--plugin`.
* `plugins` - 要加载的插件数组 (默认: 空数组)。对应 `--plugin`。
* `reportUnusedDisableDirectives` - When set to `true`, adds reported errors for unused `eslint-disable` directives when no problems would be reported in the disabled area anyway (default: false). Corresponds to `--report-unused-disable-directives`.
* `reportUnusedDisableDirectives` - When set to `true`, adds reported errors for unused `eslint-disable` directives when no problems would be reported in the disabled area anyway (default: false). Corresponds to `--report-unused-disable-directives`.
* `rulePaths` - An array of directories to load custom rules from (default: empty array). Corresponds to `--rulesdir`.
* `rulePaths` - 加载自定义规则的目录的数组。(默认：空数组)。对应于 `--rulesdir`。
* `rules` - An object of rules to use (default: null). Corresponds to `--rule`.
* `rules` - 要使用的规则的对象 (默认为null)。 对应于 `--rule`。
* `useEslintrc` - Set to false to disable use of `.eslintrc` files (default: true). Corresponds to `--no-eslintrc`.
* `useEslintrc` - 设置为 false 时禁用 `.eslintrc` 文件(默认为true)。对应于`--no-eslintrc`。
* `globInputPaths` - Set to false to skip glob resolution of input file paths to lint (default: true). If false, each input file paths is assumed to be a non-glob path to an existing file.
* `globInputPaths` - 设置为 `false` 将 glob 匹配的输入文件路径跳过检测（默认为 `true`）。如果为 `false`，则假定每个输入文件路径都是现有文件的非 glob 路径。

To programmatically set `.eslintrc.*` options not supported above (such as `extends`,
`overrides` and `settings`), define them in a config object passed to `baseConfig` instead.

以编程方式设置 `.eslintrc.*` 选项不支持上面 (比如 `extends`、`overrides` 和 `settings`)，在传递给 `baseConfig` 配置对象中定义它们。

For example:

例如：

```js
var CLIEngine = require("eslint").CLIEngine;

var cli = new CLIEngine({
    baseConfig: {
        extends: ["eslint-config-shared"],
        settings: {
            sharedData: "Hello"
        }
    },
    envs: ["browser", "mocha"],
    useEslintrc: false,
    rules: {
        semi: 2
    }
});
```

In this example, a new `CLIEngine` instance is created that extends a configuration called
`"eslint-config-shared"`, a setting named `"sharedData"` and two environments (`"browser"`
and `"mocha"`) are defined, loading of `.eslintrc` and `package.json` files are disabled,
and the `semi` rule enabled as an error. You can then call methods on `cli` and these options
will be used to perform the correct action.

在本例中，创建了一个新的 `CLIEngine` 实例，它扩展了一个名为 `"eslint-config-shared"` 的配置，一个名为  `"sharedData"` 的设置和定义了两个环境变量 (`"browser"` 和 `"mocha"`)，禁止加载 `.eslintrc` 和 `package.json` 文件，启用了 `semi` 规则，被设置为 error 级别。你可以在调用 `cli` 的方法，这些选项将被应用并正确运行。

Note: Currently `CLIEngine` does not validate options passed to it, but may start doing so in the future.

注意：当前，`CLIEngine` 不会验证传递给它的选项，但将来可能会做验证。

### CLIEngine#executeOnFiles()

If you want to lint one or more files, use the `executeOnFiles()` method. This method accepts a single argument, which is an array of files and/or directories to traverse for files. You can pass the same values as you would using the ESLint command line interface, such as `"."` to search all JavaScript files in the current directory. Here's an example:

如果你检测一个或多个文件，就使用 `executeOnFiles()` 方法。这个方法接收一个参数，类型为文件的数组且/或要遍历文件的目录。你也可以在 ESLint 命令行接口使用时传递相同的值，例如 `.` 在当前目录搜索所有的 JavaScript 文件。下面举个例子：

```js
var CLIEngine = require("eslint").CLIEngine;

var cli = new CLIEngine({
    envs: ["browser", "mocha"],
    useEslintrc: false,
    rules: {
        semi: 2
    }
});

// lint myfile.js and all files in lib/
var report = cli.executeOnFiles(["myfile.js", "lib/"]);
```

The return value is an object containing the results of the linting operation. Here's an example of a report object:

返回值是包含检测操作的结果对象。下面是报告对象的例子：

```js
{
    results: [
        {
            filePath: "/Users/eslint/project/myfile.js",
            messages: [{
                ruleId: "semi",
                severity: 2,
                message: "Missing semicolon.",
                line: 1,
                column: 13,
                nodeType: "ExpressionStatement",
                source: "\"use strict\"", // Deprecated: see "please note" paragraph below.
                fix: { range: [12, 12], text: ";" }
            }],
            errorCount: 1,
            warningCount: 0,
            fixableErrorCount: 1,
            fixableWarningCount: 0,
            source: "\"use strict\"\n"
        }
    ],
    errorCount: 1,
    warningCount: 0,
    fixableErrorCount: 1,
    fixableWarningCount: 0,
    usedDeprecatedRules: []
}
```

You can also pass `fix: true` when instantiating the `CLIEngine` in order to have it figure out what fixes can be applied.

你也可以在 `CLIEngine` 实例化时，传入 `fix: true`，以指明可以应用哪些修复。

```js
var CLIEngine = require("eslint").CLIEngine;

var cli = new CLIEngine({
    envs: ["browser", "mocha"],
    fix: true, // difference from last example
    useEslintrc: false,
    rules: {
        semi: 2,
        quotes: [2, "double"]
    }
});

// lint myfile.js and all files in lib/
var report = cli.executeOnFiles(["myfile.js", "lib/"]);
```

```js
{
    results: [
        {
            filePath: "/Users/eslint/project/myfile.js",
            messages: [
                {
                    ruleId: "semi",
                    severity: 2,
                    message: "Missing semicolon.",
                    line: 1,
                    column: 13,
                    nodeType: "ExpressionStatement",
                    fix: { range: [12, 12], text: ";" }
                },
                {
                    ruleId: "func-name-matching",
                    severity: 2,
                    message: "Function name `bar` should match variable name `foo`",
                    line: 2,
                    column: 5,
                    nodeType: "VariableDeclarator"
                }
            ],
            errorCount: 2,
            warningCount: 0,
            fixableErrorCount: 1,
            fixableWarningCount: 0,
            output: "\"use strict\";\nvar foo = function bar() {};\nfoo();\n"
        }
    ],
    errorCount: 2,
    warningCount: 0,
    fixableErrorCount: 1,
    fixableWarningCount: 0,
    usedDeprecatedRules: []
}
```

If the operation ends with a parsing error, you will get a single message for this file, with `fatal: true` added as an extra property.

如果操作出现一个解析错误，你将获得一条消息，带有一个额外的属性 `fatal: true`。

```js
{
    results: [
        {
            filePath: "./myfile.js",
            messages: [
                {
                    ruleId: null,
                    fatal: true,
                    severity: 2,
                    message: "Parsing error: Unexpected token foo",
                    line: 1,
                    column: 10
                }
            ],
            errorCount: 1,
            warningCount: 0,
            fixableErrorCount: 0,
            fixableWarningCount: 0,
            source: "function foo() {}"
        }
    ],
    errorCount: 1,
    warningCount: 0,
    fixableErrorCount: 0,
    fixableWarningCount: 0,
    usedDeprecatedRules: []
}
```

The top-level report object has a `results` array containing all linting results for files that had warnings or errors (any files that did not produce a warning or error are omitted). Each file result includes:

报告对象的顶层是个 `results` 数组，包含文件的所有检查结果，有警告或错误（任何不产生讲过或错误的文件将被忽略）。每个文件结果包括：

* `filePath` - Path to the given file.
* `filePath` - 给定的文件路径。
* `messages` - Array containing the result of calling `linter.verify()` on the given file.
* `messages` - 包含在给定的文件上调用 `linter.verify()` 产生的结果的数组。
* `errorCount` and `warningCount` - The exact number of errors and warnings respectively on the given file.
* `errorCount` 和 `warningCount` - 给定的文件对应的错误和警告具体数量。
* `source` - The source code for the given file. This property is omitted if this file has no errors/warnings or if the `output` property is present.
* `source` - 给定的文件的源码。如果该文件没有错误或警告，或如果有 `output` 属性，这个属性将被省略。
* `output` - The source code for the given file with as many fixes applied as possible, so you can use that to rewrite the files if necessary. This property is omitted if no fix is available.
* `output` - 给定的文件应用尽可能多的修复之后的源码，如果有必要，你可以使用它对文件进行重写。如果没有可用的修复，这个属性将被省略。

The top-level report object also has `errorCount` and `warningCount` which give the exact number of errors and warnings respectively on all the files. Additionally, `usedDeprecatedRules` signals any deprecated rules used and their replacement (if available). Specifically, it is array of objects with properties like so:

顶层报告对象也有 `errorCount` 和 `warningCount`，分别给出所有文件的错误和警告具体数量。此外，`usedDeprecatedRules` 表示所使用的任何废弃的规则及其替换（如果可用）。具体来说，它是具有以下属性的对象数据：

* `ruleId` - The name of the rule (e.g. `indent-legacy`).
* `ruleId` - 规则名 (比如 `indent-legacy`)。
* `replacedBy` - An array of rules that replace the deprecated rule (e.g. `["indent"]`).
* `replacedBy` - 替换已废弃的规则数组 (比如 `["indent"]`)。

Once you get a report object, it's up to you to determine how to output the results. Fixes will not be automatically applied to the files, even if you set `fix: true` when constructing the `CLIEngine` instance. To apply fixes to the files, call [`outputFixes`](#cliengineoutputfixes).

一旦你得到了一个报告对象，由你来决定如何输出结果。修复不会自动应用到文件，即使你在创建 `CLIEngine` 实例时设置 `fix: true`。调用 [`outputFixes`](#cliengineoutputfixes)来使修复生效。

### CLIEngine#resolveFileGlobPatterns()

You can pass filesystem-style or glob patterns to ESLint and have it function properly. In order to achieve this, ESLint must resolve non-glob patterns into glob patterns before determining which files to execute on. The `resolveFileGlobPatterns()` methods uses the current settings from `CLIEngine` to resolve non-glob patterns into glob patterns. Pass an array of patterns that might be passed to the ESLint CLI and it will return an array of glob patterns that mean the same thing. Here's an example:

你可以传递 filesystem-style 或者 glob 模式给 ESLint，以让它正常运行。为了做到这点，ESLint 必须在确定要执行的文件之前将 non-glob 模式分解为 glob 模式 。`resolveFileGlobPatterns()` 方法使用`CLIEngine`的当前设置将non-glob模式分解为glob模式。传递一个模式的数组，它可能传入到ESLint CLI ，将返回一个glob模式的数组意味着同样的事情。例如：

```js
var CLIEngine = require("eslint").CLIEngine;

var cli = new CLIEngine({
});

// pass an array of patterns
var globPatterns = cli.resolveFileGlobPatterns(["."]);
console.log(globPatterns[i]);       // ["**/*.js"]
```

### CLIEngine#getConfigForFile()

If you want to retrieve a configuration object for a given file, use the `getConfigForFile()` method. This method accepts one argument, a file path, and returns an object represented the calculated configuration of the file. Here's an example:

如果你想为给定的文件获得一个配置对象，使用 `getConfigForFile()` 方法。这个方法接收一个参数，为一个文件路径，并且返回代表该文件的计算配置的对象。例如：

```js
var CLIEngine = require("eslint").CLIEngine;

var cli = new CLIEngine({
    envs: ["browser", "mocha"],
    useEslintrc: false,
    rules: {
        semi: 2
    }
});

var config = cli.getConfigForFile("myfile.js");
```

Once you have the configuration information, you can pass it into the `linter` object:

一旦你获得配置信息，可以将它传入到 `linter` 对象：

```js
var CLIEngine = require("eslint").CLIEngine,
    linter = require("eslint").linter;

var cli = new CLIEngine({
    envs: ["browser", "mocha"],
    useEslintrc: false,
    rules: {
        semi: 2
    }
});

var config = cli.getConfigForFile("myfile.js");

var messages = linter.verify('var foo;', config);
```

### CLIEngine#executeOnText()

If you already have some text to lint, then you can use the `executeOnText()` method to lint that text. The linter will assume that the text is a file in the current working directory, and so will still obey any `.eslintrc` and `.eslintignore` files that may be present. Here's an example:

如果你已经有一些文本要检测，你可以使用 `executeOnText()`。linter会假设这段文本为在当前工作目录下的文件，并且仍会遵守可能存在的 `.eslintrc` 和 `.eslintignore` 。例如：

```js
var CLIEngine = require("eslint").CLIEngine;

var cli = new CLIEngine({
    envs: ["browser", "mocha"],
    useEslintrc: false,
    rules: {
        semi: 2
    }
});

// lint the supplied text and optionally set
// a filename that is displayed in the report
var report = cli.executeOnText("var foo = 'bar';", "foo.js");
```

The `report` returned from `executeOnText()` is in the same format as from `executeOnFiles()`, but there is only ever one result in `report.results`.

`report` 从 `executeOnText()` 返回和从 `executeOnFiles()` 返回具有相同的格式, 但是在 `report.results` 中永远只有一个结果。

If a filename in the optional second parameter matches a file that is configured to be ignored, then this function returns no errors or warnings. To return a warning instead, call the method with true as the optional third parameter.

如果第二个可选参数的文件名匹配配置文件中被忽略的文件，该函数不会返回任何错误或经过。为了返回一个警告，调用该方法时设置第三个参数为 true。

### CLIEngine#addPlugin()

Loads a plugin from configuration object with specified name. Name can include plugin prefix ("eslint-plugin-")

从指定名称的配置对象中加载插件，名称可以包含插件前缀（"eslint-plugin-"）

```js
var CLIEngine = require("eslint").CLIEngine;
var cli = new CLIEngine({
    ignore: true
});
cli.addPlugin("eslint-plugin-processor", {
    processors: {
        ".txt": {
            preprocess: function(text) {
                return [text];
            },
            postprocess: function(messages) {
                return messages[0];
            }
        }
    }
});
```

### CLIEngine#isPathIgnored()

Checks if a given path is ignored by ESLint.

检查给定的路径是否被ESLint忽略。

```js
var CLIEngine = require("eslint").CLIEngine;

var cli = new CLIEngine({
    ignore: true,
    ignorePath: ".customIgnoreFile"
});

var isIgnored = cli.isPathIgnored("foo/bar.js");
```

### CLIEngine#getFormatter()

Retrieves a formatter, which you can then use to format a report object. The argument is either the name of a built-in formatter:
 
获取一个格式化工具，可以用它格式报告对象。参数或者是内建格式化工具的名字：

* "[checkstyle](./user-guide/formatters#checkstyle)"
* "[checkstyle](../user-guide/formatters#checkstyle)"
* "[codeframe](../user-guide/formatters#codeframe)"
* "[codeframe](../user-guide/formatters#codeframe)"
* "[compact](../user-guide/formatters#compact)"
* "[compact](../user-guide/formatters#compact)"
* "[html](../user-guide/formatters#html)"
* "[html](../user-guide/formatters#html)"
* "[jslint-xml](../user-guide/formatters#jslint-xml)"
* "[jslint-xml](../user-guide/formatters#jslint-xml)"
* "[json](../user-guide/formatters#json)"
* "[json](../user-guide/formatters#json)"
* "[junit](../user-guide/formatters#junit)"
* "[junit](../user-guide/formatters#junit)"
* "[stylish](../user-guide/formatters#stylish)" (the default)
* "[stylish](../user-guide/formatters#stylish)" (默认)
* "[table](../user-guide/formatters#table)"
* "[table](../user-guide/formatters#table)"
* "[tap](../user-guide/formatters#tap)"
* "[tap](../user-guide/formatters#tap)"
* "[unix](../user-guide/formatters#unix)"
* "[unix](../user-guide/formatters#unix)"
* "[visualstudio](../user-guide/formatters#visualstudio)"
* "[visualstudio](../user-guide/formatters#visualstudio)"

or the full path to a JavaScript file containing a custom formatter. You can also omit the argument to retrieve the default formatter.

或者是包含自定义格式化工具的 JavaScript 文件的全路径。你也可以忽略这个参数来获取默认的格式化工具。

```js
var CLIEngine = require("eslint").CLIEngine;

var cli = new CLIEngine({
    envs: ["browser", "mocha"],
    useEslintrc: false,
    rules: {
        semi: 2
    }
});

// lint myfile.js and all files in lib/
var report = cli.executeOnFiles(["myfile.js", "lib/"]);

// get the default formatter
var formatter = cli.getFormatter();

// Also could do...
// var formatter = cli.getFormatter("compact");
// var formatter = cli.getFormatter("./my/formatter.js");

// output to console
console.log(formatter(report.results));
```

**Note:** Also available as a static function on `CLIEngine`.

**注意：**`CLIEngine` 的静态方法也是适用的。

```js
// get the default formatter by calling the static function
var formatter = CLIEngine.getFormatter();
```

**Important:** You must pass in the `results` property of the report. Passing in `report` directly will result in an error.

**重要：**你必须传递报告的 `results`。直接传递 `report` 会引起错误。

### CLIEngine#getErrorResults()

This is a static function on `CLIEngine`. It can be used to filter out all the non error messages from the report object.

这是 `CLIEngine` 的静态方法。它可以用于从报告对象中过滤掉所有没有错误的信息。

```js
var CLIEngine = require("eslint").CLIEngine;

var cli = new CLIEngine({
    envs: ["browser", "mocha"],
    useEslintrc: false,
    rules: {
        semi: 2
    }
});

// lint myfile.js and all files in lib/
var report = cli.executeOnFiles(["myfile.js", "lib/"]);

// only get the error messages
var errorReport = CLIEngine.getErrorResults(report.results)
```

**Important:** You must pass in the `results` property of the report. Passing in `report` directly will result in an error.

**重要：**你必须传递报告的 `results`。直接传递 `report` 会引起错误。

### CLIEngine#outputFixes()

This is a static function on `CLIEngine` that is used to output fixes from `report` to disk. It does by looking for files that have an `output` property in their results. Here's an example:

这是 `CLIEngine` 的静态方法，用于从 `report` 输出修复到磁盘。它通过搜索在结果中包含 `output` 的文件。例如：

```js
var CLIEngine = require("eslint").CLIEngine;

var cli = new CLIEngine({
    envs: ["browser", "mocha"],
    fix: true,
    useEslintrc: false,
    rules: {
        semi: 2
    }
});

// lint myfile.js and all files in lib/
var report = cli.executeOnFiles(["myfile.js", "lib/"]);

// output fixes to disk
CLIEngine.outputFixes(report);
```

### CLIEngine#getRules()

This method returns a map of all loaded rules. Under the hood, it calls [Linter#getRules](#lintergetrules).

```js
const CLIEngine = require("eslint").CLIEngine;
const cli = new CLIEngine();

cli.getRules();

/*
Map {
  'accessor-pairs' => { meta: { docs: [Object], schema: [Array] }, create: [Function: create] },
  'array-bracket-newline' => { meta: { docs: [Object], schema: [Array] }, create: [Function: create] },
  ...
}
*/
```


### CLIEngine.version

`CLIEngine` has a static `version` property containing the semantic version number of ESLint that it comes from.

```js
require("eslint").CLIEngine.version; // '4.5.0'
```

## RuleTester

`eslint.RuleTester` is a utility to write tests for ESLint rules. It is used internally for the bundled rules that come with ESLint, and it can also be used by plugins.

Example usage:

```js
"use strict";

const rule = require("../../../lib/rules/my-rule"),
    RuleTester = require("eslint").RuleTester;

const ruleTester = new RuleTester();

ruleTester.run("my-rule", rule, {
    valid: [
        {
            code: "var foo = true",
            options: [{ allowFoo: true }]
        }
    ],

    invalid: [
        {
            code: "var invalidVariable = true",
            errors: [{ message: "Unexpected invalid variable." }]
        },
        {
            code: "var invalidVariable = true",
            errors: [{ message: /^Unexpected.+variable/ }]
        }
    ]
});
```

The `RuleTester` constructor accepts an optional object argument, which can be used to specify defaults for your test cases. For example, if all of your test cases use ES2015, you can set it as a default:

```js
const ruleTester = new RuleTester({ parserOptions: { ecmaVersion: 2015 } });
```

The `RuleTester#run()` method is used to run the tests. It should be passed the following arguments:

* The name of the rule (string)
* The rule object itself (see ["working with rules"](./working-with-rules))
* An object containing `valid` and `invalid` properties, each of which is an array containing test cases.

A test case is an object with the following properties:

* `code` (string, required): The source code that the rule should be run on
* `options` (array, optional): The options passed to the rule. The rule severity should not be included in this list.
* `filename` (string, optional): The filename for the given case (useful for rules that make assertions about filenames).

In addition to the properties above, invalid test cases can also have the following properties:

* `errors` (number or array, required): Asserts some properties of the errors that the rule is expected to produce when run on this code. If this is a number, asserts the number of errors produced. Otherwise, this should be a list of objects, each containing information about a single reported error. The following properties can be used for an error (all are optional):
    * `message` (string/regexp): The message for the error
    * `type` (string): The type of the reported AST node
    * `line` (number): The 1-based line number of the reported location
    * `column` (number): The 1-based column number of the reported location
    * `endLine` (number): The 1-based line number of the end of the reported location
    * `endColumn` (number): The 1-based column number of the end of the reported location

    If a string is provided as an error instead of an object, the string is used to assert the `message` of the error.
* `output` (string, optional): Asserts the output that will be produced when using this rule for a single pass of autofixing (e.g. with the `--fix` command line flag). If this is `null`, asserts that none of the reported problems suggest autofixes.

Any additional properties of a test case will be passed directly to the linter as config options. For example, a test case can have a `parserOptions` property to configure parser behavior:

```js
{
    code: "let foo;",
    parserOptions: { ecmaVersion: 2015 }
}
```

If a valid test case only uses the `code` property, it can optionally be provided as a string containing the code, rather than an object with a `code` key.

### Customizing RuleTester

`RuleTester` depends on two functions to run tests: `describe` and `it`. These functions can come from various places:

1. If `RuleTester.describe` and `RuleTester.it` have been set to function values, `RuleTester` will use `RuleTester.describe` and `RuleTester.it` to run tests. You can use this to customize the behavior of `RuleTester` to match a test framework that you're using.
1. Otherwise, if `describe` and `it` are present as globals, `RuleTester` will use `global.describe` and `global.it` to run tests. This allows `RuleTester` to work when using frameworks like [Mocha](https://mochajs.org/) without any additional configuration.
1. Otherwise, `RuleTester#run` will simply execute all of the tests in sequence, and will throw an error if one of them fails. This means you can simply execute a test file that calls `RuleTester.run` using `node`, without needing a testing framework.

`RuleTester#run` calls the `describe` function with two arguments: a string describing the rule, and a callback function. The callback calls the `it` function with a string describing the test case, and a test function. The test function will return successfully if the test passes, and throw an error if the test fails. (Note that this is the standard behavior for test suites when using frameworks like [Mocha](https://mochajs.org/); this information is only relevant if you plan to customize `RuleTester.it` and `RuleTester.describe`.)

Example of customizing `RuleTester`:

```js
"use strict";

const RuleTester = require("eslint").RuleTester,
    test = require("my-test-runner"),
    myRule = require("../../../lib/rules/my-rule");

RuleTester.describe = function(text, method) {
    RuleTester.it.title = text;
    return method.call(this);
};

RuleTester.it = function(text, method) {
    test(RuleTester.it.title + ": " + text, method);
};

// then use RuleTester as documented

const ruleTester = new RuleTester();

ruleTester.run("my-rule", myRule, {
    valid: [
        // valid test cases
    ],
    invalid: [
        // invalid test cases
    ]
})
```

## Deprecated APIs

* `cli` - the `cli` object has been deprecated in favor of `CLIEngine`. As of v1.0.0, `cli` is no longer exported and should not be used by external tools.
* `cli` - `cli` 对象在 `CLIEngine` 中已经弃用. 在 v1.0.0 版本中, `cli` 不会再导出并且不会再被外部工具使用。
* `linter` - the `linter` object has been deprecated in favor of `Linter` as of v4.0.0.
* `linter` - 在 v4.0.0 版中，`linter` 对象已经弃用，取而代之的是 `Linter`。
