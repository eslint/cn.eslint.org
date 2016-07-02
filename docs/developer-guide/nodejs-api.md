---
title: Node.js API
layout: doc
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# Node.js API

While ESLint is designed to be run on the command line, it's possible to use ESLint programmatically through the Node.js API. The purpose of the Node.js API is to allow plugin and tool authors to use the ESLint functionality directly, without going through the command line interface.

ESLint 被设计为在命令行中运行，所以通过 Node.js API 使用 ESLint 编程是可能的。Node.js API 的目的是使插件和工具的作者可以直接使用 ESLint 的功能，而不需要通过命令行接口。

**Note:** Use undocumented parts of the API at your own risk. Only those parts that are specifically mentioned in this document are approved for use and will remain stable and reliable. Anything left undocumented is unstable and may change or be removed at any point.

**注意：**使用文档中没有的 API 的风险需自己承担。只有文档中声明的部分是赞成使用且可保持稳定可靠。文档中未声明的部分是不稳定的且可能随时被移除。

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

### splitLines()

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

## linter

The `linter` object does the actual evaluation of the JavaScript code. It doesn't do any filesystem operations, it simply parses and reports on the code. You can retrieve `linter` like this:

`linter` 对象对 JavaScript 代码进行评估。它不会对文件系统进行操作，它只会简单地解析和报告代码。你可以这样取得 `linter`： 

```js
var linter = require("eslint").linter;
```

The most important method on `linter` is `verify()`, which initiates linting of the given text. This method accepts four arguments:

`linter` 最重要的方法为 `verify()`，它对给出的文本进行检测。这个方法接受4个参数：

* `code` - the source code to lint (a string or instance of `SourceCode`).
* `code`- 要检测的源代码（字符串或者 `SourceCode` 的实例）。
* `config` - a configuration object that is equivalent to an eslintrc file.
* `config` - 一个配置对象，相当于一个 eslintrc 文件。
* `optionsOrFilename` - (optional) Additional options for this run or a string representing the filename to associate with the code being linted.
* `optionsOrFilename` - (可选的)运行的额外选项或与要检查的代码有关的文件名。
    * `filename` - (optional) the filename to associate with the source code.
    * `filename` - (可选的)与源代码关联的文件名。
    * `saveState` - (optional) see below. This will override any value passed as the fourth argument if an options object is used here instead of the filename.
    * `saveState` - (可选的) 这里如果是个对象而不是文件名，它将覆盖第四个参数的值。
    * `allowInlineConfig` - (optional) set to `false` to disable inline comments from changing eslint rules.
    * `allowInLinrConfig` - (可选的)设置为 `false` 来从改变 eslint 规则禁用行内注释。
* `saveState` - (optional) set to true to maintain the internal state of `linter` after linting (mostly used for testing purposes)
* `saveState` - (可选的)设置为 true 来保持检测后 `linter` 的内部状态（主要用来测试）。

You can call `verify()` like this:

你可以这样调用 `verify()`：

```js
var linter = require("eslint").linter;

var messages = linter.verify("var foo;", {
    rules: {
        semi: 2
    }
}, { filename: "foo.js" });

// or using SourceCode

var linter = require("eslint").linter,
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
* `source` - the line of code where the problem is (or empty string if it can't be found).
* `source` - 引起问的的代码的所在行（如果找不到的话就为空）。
* `fix` - an object describing the fix for the problem (this property is omitted if no fix is available).
* `fix` - 描述修复问题信息的对象（如果没有修复则会忽略此属性）。

You can also get an instance of the `SourceCode` object used inside of `linter` by using the `getSourceCode()` method:

你也可以通过 `getSourceCode()` 方法获取一个 `SourceCode` 的实例在 `linter` 内部使用：

```js
var linter = require("eslint").linter;

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

* `configFile` - The configuration file to use (default: null). Corresponds to `-c`.
* `configFile` - 要使用的配置文件（默认：null）。对应于 `-c`。
* `envs` - An array of environments to load (default: empty array). Corresponds to `--env`.
* `envs` - 需要加载的环境的数组（默认为空数组）。对应于 `--env`。
* `extensions` - An array of filename extensions that should be checked for code. The default is an array containing just `".js"`. Corresponds to `--ext`.
* `extensions`- 应被代码检查的文件名扩展的数组。默认为仅包含 `".js"` 的数组。对应于 `--ext`。
* `globals` - An array of global variables to declare (default: empty array). Corresponds to `--global`.
* `globals` - 要声明为全局变量的数组（默认为空数组）。对应于 `--global`。
* `fix` - True indicates that fixes should be applied to the text when possible.
* `fix` - True代表可能时修改应用到文本。
* `ignore` - False disables use of `.eslintignore`, `ignorePath` and `ignorePattern` (default: true). Corresponds to `--no-ignore`.
* `ignore`- 值为false时禁用 `.eslintignore`、`ignorePath` 和 `ignorePattern` (默认为true)。对应于 `--no-ignore`。
* `ignorePath` - The ignore file to use instead of `.eslintignore` (default: null). Corresponds to `--ignore-path`.
* `ignorePath` - 要使用的忽略文件不是 `.eslintignore` (默认为 null)。对应于 `--ignore-path`。
* `ignorePattern` - Glob patterns for paths to ignore. String or array of strings.
* `ignorePattern` - 忽略路径的 Glob 模式。字符串或者字符串的数组。
* `baseConfig` - Set to false to disable use of base config. Could be set to an object to override default base config as well.
* `baseConfig` - 设置为 false 禁用基本配置。 也可以设置为一个对象来重写基本配置。
* `rulePaths` - An array of directories to load custom rules from (default: empty array). Corresponds to `--rulesdir`.
* `rulePaths` - 用来从自定义规则加载的目录的数组。(默认为空数组)。对应于 `--rulesdir`。
* `rules` - An object of rules to use (default: null). Corresponds to `--rule`.
* `rules` - 要使用的规则的对象 (默认为null)。 对应于 `--rule`。
* `useEslintrc` - Set to false to disable use of `.eslintrc` files (default: true). Corresponds to `--no-eslintrc`.
* `useEslintrc` - 设置为 false 时禁用 `.eslintrc` 文件(默认为true)。对应于`--no-eslintrc`。
* `parser` - Specify the parser to be used (default: `espree`). Corresponds to `--parser`.
* `parser` - 指定使用的解析器(默认为 `espree`)。对应于 `--parser`。
* `cache` - Operate only on changed files (default: `false`). Corresponds to `--cache`.
* `cache` - 仅操作改变的文件(默认为 `false`)。对应于 `--cache`.
* `cacheFile` - Name of the file where the cache will be stored (default: `.eslintcache`). Corresponds to `--cache-file`. Deprecated: use `cacheLocation` instead.
* `cacheFile` - 存放缓存的文件名。（默认为 `.eslintcache`）。对应于 `--cache-file`。已经过时，用 `cacheLocation` 代替。
* `cacheLocation` - Name of the file or directory where the cache will be stored (default: `.eslintcache`). Corresponds to `--cache-location`.
* `cacheLocation` - 存放缓存的文件或者目录名。（默认为 `.eslintcache`）。 对应于--cache-location`。
* `cwd` - Path to a directory that should be considered as the current working directory.
* `cwd` - 当前工作目录路径

For example:

例如：

```js
var CLIEngine = require("eslint").CLIEngine;

var cli = new CLIEngine({
    envs: ["browser", "mocha"],
    useEslintrc: false,
    rules: {
        semi: 2
    }
});
```

In this code, a new `CLIEngine` instance is created that sets two environments, `"browser"` and `"mocha"`, disables loading of `.eslintrc` and `package.json` files, and enables the `semi` rule as an error. You can then call methods on `cli` and these options will be used to perform the correct action.

在上面的代码中，创建了一个 `CLIEngine` 实例，设置两种环境，`"browser"` 和 `"mocha"`,禁止加载 `.eslintrc` 和 `package.json` 文件，开启 `semi` 规则作为错误。你可以在 `cli` 调用，然后这些选项将被应用并正确运行。

### executeOnFiles()

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
            filePath: "./myfile.js",
            output: "foo;",
            messages: [
                {
                    fatal: false,
                    severity: 2,
                    ruleId: "semi",
                    severity: 2,
                    line: 1,
                    column: 23,
                    message: "Expected a semicolon."
                }
            ],
            errorCount: 1,
            warningCount: 0
        }
    ],
    errorCount: 1,
    warningCount: 0
}
```

The top-level report object has a `results` array containing all linting results for files that had warnings or errors (any files that did not produce a warning or error are omitted). Each file result includes the `filePath`, a `messages` array, `errorCount`, `warningCount`, and optionally `output`. The `messages` array contains the result of calling `linter.verify()` on the given file. The `errorCount` and `warningCount` give the exact number of errors and warnings respectively on the given file. The `output` property gives the source code for the file with as many fixes applied as possible, so you can use that to rewrite the files if necessary. The top-level report object also has `errorCount` and `warningCount` which give the exact number of errors and warnings respectively on all the files.

顶层的报告对象有一个 `result` 数组，该数组包含引起警告或错误的文件的检测结果（不引起警告或错误的文件都会被忽略）。每个文件的结果包含 `filePath`, 一个 `messages` 数组, `errorCount`, `warningCount`, 和可选的 `output`。`message`数组包含对给定文件调用 `linter.verify()` 函数的结果。`errorCount` 和 `warningCount` 对于给定文件分别给错误和警告的确切数目。`output` 属性会给出尽可能多的应用在文件上的修复源代码。所以，如果有必要你可以使用它来重写文件。顶层的报告对象也包含 `errorCount` 和 `warningCount`，分别对所有的文件给出准确的警告和错误数量。

Once you get a report object, it's up to you to determine how to output the results.

一旦获取一个报告对象，怎么输出结果取决于你。

### resolveFileGlobPatterns()

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

### getConfigForFile()

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

### executeOnText()

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


### addPlugin()

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

### isPathIgnored()

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

### getFormatter()

Retrieves a formatter, which you can then use to format a report object. The argument is either the name of a built-in formatter:
 
获取一个格式化工具，可以用它格式报告对象。参数或者是内建格式化工具的名字：

* "[checkstyle](./user-guide/formatters#checkstyle)"
* "[checkstyle](../user-guide/formatters#checkstyle)"
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

**注意：** `CLIEngine` 的静态方法也是适用的。

```js
// get the default formatter by calling the static function
var formatter = CLIEngine.getFormatter();
```

**Important:** You must pass in the `results` property of the report. Passing in `report` directly will result in an error.

**重要：**你必须传递报告的 `results`。直接传递 `report` 会引起错误。

### getErrorResults()

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

### outputFixes()

This is a static function on `CLIEngine` that is used to output fixes from `report` to disk. It does by looking for files that have an `output` property in their results. Here's an example:

这是 `CLIEngine` 的静态方法，用于从 `report` 输出修复到磁盘。它通过搜索在结果中包含 `output` 的文件。例如：

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

// output fixes to disk
CLIEngine.outputFixes(report);
```

## Deprecated APIs

* `cli` - the `cli` object has been deprecated in favor of `CLIEngine`. As of v1.0.0, `cli` is no longer exported and should not be used by external tools.

* `cli` - `cli` 对象在 `CLIEngine` 中已经过时. 在 v1.0.0 版本中, `cli` 不会再导出并且不会再被外部工具使用。
