---
title: Architecture
layout: doc
translator: molee1905
proofreader: maomaoking
---

# Architecture

# 架构

At a high level, there are a few key parts to ESLint:

ESLint有几个关键部分：

* `bin/eslint.js` - this is the file that actually gets executed with the command line utility. It's a dumb wrapper that does nothing more than bootstrap ESLint, passing the command line arguments to `cli`. This is intentionally small so as not to require heavy testing.
* `bin/eslint.js` - 这个是命令行应用程序实际上执行的文件. 它仅仅是个封装，用来启动ESLint，并向`cli`传递命令行参数。该文件有意保持很小，以免需要大量的测试。
* `lib/cli.js` - this is the heart of the ESLint CLI. It takes an array of arguments and then uses `eslint` to execute the commands. By keeping this as a separate utility, it allows others to effectively call ESLint from within another Node.js program as if it were done on the command line. The main call is `cli.execute()`. This is also the part that does all the file reading, directory traversing, input, and output.
* `lib/cli.js` - 这个是ESLint CLI的核心。它需要一个参数数组，然后使用`eslint`去执行相应的命令。通过保持这个文件作为一个单独的应用程序，它允许其他人在另外的Node.js程序中有效的调用ESLint，就好像是在命令行上操作的一样。它最重要的函数是`cli.execute()`。它也扮演着读取文件、遍历目录，输入和输出的角色。
* `lib/eslint.js` - this is the core `eslint` object that does code verifying based on configuration options. This file does no file I/O and does not interact with the `console` at all. For other Node.js programs that have JavaScript text to verify, they would be able to use this interface directly.
* `lib/eslint.js` - 这个是核心的`eslint`对象，负责根据配置选项进行代码验证。这个文件没有文件I/O操作，也不与`console`打交道。对于其他需要验证Javascript文本的Node.js程序而已，它们可以直接使用这个接口。

## The `cli` object

The `cli` object is the API for the command line interface. Literally, the `bin/eslint.js` file simply passes arguments to the `cli` object and then calls `process.exit()` with the returned exit code.

`cli`对象是命令行接口的API。事实上，`bin/eslint.js`文件只是简单的将参数传递给`cli`对象，然后调用`process.exit()`，并返回退出码。

The main method is `cli.execute()`, which accepts an array of strings that represent the command line options (as if `process.argv` were passed without the first two arguments). If you want to run ESLint from inside of another program and have it act like the CLI, then `cli` is the object to use.

它的主要方法是`cli.execute()`，该方法接收一个代表命令行选项的字符串数组（就像传递少了前两个参数的`process.argv`一样）。如果你想在另一程序里像CLI一样运行ESLint，那么`cli`就是你要用到的对象。

This object's responsibilities include:

这个对象的职责包括：

* Interpreting command line arguments
* 解释命令行参数
* Reading from the file system
* 从文件系统读取文件
* Outputting to the console
* 输出到控制台
* Outputting to the filesystem
* 输出到文件系统
* Use a formatter
* 使用一个格式化器
* Returning the correct exit code
* 返回正确的退出码

This object may not:

这个对象可能不：

* Call `process.exit()` directly
* 直接调用 `process.exit()`
* Perform any asynchronous operations
* 执行任何异步操作

## The `CLIEngine` object

The `CLIEngine` type represents the core functionality of the CLI except that it reads nothing from the command line and doesn't output anything by default. Instead, it accepts many (but not all) of the arguments that are passed into the CLI. It reads both configuration and source files as well as managing the environment that is passed into the `eslint` object.

`CLIEngine`类型代表CLI的核心功能，除了在默认情况下它不从命令行读取任何内容，也不输出任何内容。相反，它接受很多（不是全部）传递给CLI的参数。它读取配置文件和源码文件，同时也管理传递到`eslint`对象的环境。

The main method of the `CLIEngine` is `executeOnFiles()`, which accepts an array of file and directory names to run the linter on.

`CLIEngine`的主要方法是`executeOnFiles()`，接收一个要被检查的文件和目录名的数组。

This object's responsibilities include:

这个对象的职责包括：

* Managing the execution environment for `eslint`
* 管理`eslint`的执行环境
* Reading from the file system
* 从文件系统读取文件
* Loading rule definitions
* 加载规则定义
* Reading configuration information from config files (including `.eslintrc` and `package.json`)
* 从配置文件读取配置信息 (包括 `.eslintrc` 和 `package.json`)

This object may not:

这个对象可能不：

* Call `process.exit()` directly
* 直接调用 `process.exit()`
* Perform any asynchronous operations
* 执行任何异步操作
* Output to the console
* 输出到控制台
* Use formatters
* 使用格式化器

## The `eslint` object

The main method of the `eslint` object is `verify()` and accepts two arguments: the source text to verify and a configuration object (the baked configuration of the given configuration file plus command line options). The method first parses the given text with Esprima and retrieves the AST. The AST is produced with both line/column and range locations which are useful for reporting location of issues and retrieving the source text related to an AST node, respectively.

`eslint`对象的主要方法是`verify()`，接收两个参数：要验证的源码文本和一个配置对象（通过准备好的配置文件加命令行操作会生成配置）。该方法首先使用Esprima解析获取的文本，检索AST。AST用来产生行/列和范围的位置，对报告问题的位置和检索与AST节点有关的源文本很有帮助。

Once the AST is available, `estraverse` is used to traverse the AST from top to bottom. At each node, the `eslint` object emits an event that has the same name as the node type (i.e., "Identifier", "WithStatement", etc.). On the way back up the subtree, an event is emitted with the AST type name and suffixed with ":after", such as "Identifier:after" - this allows rules to take action both on the way down and on the way up in the traversal. Each event is emitted with the appropriate AST node available.

一旦AST是可用的，`estraverse`被用来从上到下遍历AST。在每个节点，`eslint`对象触发与该节点类型同名的一个事件（即 "Identifier"，"WithStatement" 等等）。在回退到子树上时，一个带有AST类型名称和":after"后缀的事件被触发，比如"Identifier:after" - 这允许规则在正向和逆向遍历开始起作用。每个事件在恰当的AST节点可用时触发。

This object's responsibilities include:

这个对象的职责包括：

* Inspecting JavaScript code strings
* 检查Javascript 代码字符串
* Creating an AST for the code
* 为代码创建AST
* Executing rules on the AST
* 在AST上执行规则
* Reporting back the results of the execution
* 报告执行的结果。

This object may not:

这个对象可能不：

* Call `process.exit()` directly
* 直接调用 `process.exit()`
* Perform any asynchronous operations
* 执行任何异步操作
* Use Node.js-specific features
* 使用 Node.js特定的功能
* Access the file system
* 访问文件系统
* Call `console.log()` or any other similar method
* 调用 `console.log()` 或其他任何类似方法

## Rules

Individual rules are the most specialized part of the ESLint architecture. Rules can do very little, they are simply a set of instructions executed against an AST that is provided. They do get some context information passed in, but the primary responsibility of a rule is to inspect the AST and report warnings.

独特的规则是ESLint 架构中最专业的部分。规则能做的很少，它们只是对提供的AST执行的一组指令。它们获取以下传入的上下文信息，但主要职责是家常AST，报告警告。

These objects' responsibilities are:

这个对象的职责包括：

* Inspect the AST for specific patterns
* 检查AST特定的模式
* Reporting warnings when certain patterns are found
* 当发现特定的模式时，报告警告

These objects may not:

这个对象可能不：

* Call `process.exit()` directly
* 直接调用 `process.exit()`
* Perform any asynchronous operations
* 执行任何异步操作
* Use Node.js-specific features
* 使用 Node.js特定的功能
* Access the file system
* 访问文件系统
* Call `console.log()` or any other similar method
* 调用 `console.log()` 或其他任何类似方法
