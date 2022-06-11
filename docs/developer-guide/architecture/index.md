---
title: 架构
layout: doc
edit_link: https://github.com/eslint/eslint/edit/main/docs/src/developer-guide/architecture/index.md

---
<<<<<<< HEAD
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# 架构 {#architecture}
=======
>>>>>>> 701fbee467b3a2d0278b54c324638fd0bf482f64

<center><img alt="dependency graph" src="dependency.svg"></center>

从顶层来看，ESLint 分为几个关键的部分：

<<<<<<< HEAD
* `bin/eslint.js` - 这个是命令行应用程序实际上执行的文件。这仅仅只是个封装，除了引导 ESLint 启动之外不会做多余的事情，并向 `cli` 传递参数。该文件有意保持很小，以免需要大量的测试。
* `lib/api.js` - 这个文件是 `require("eslint")` 的入口，它暴露出一个包含 `Linter`、`CLIEngine`、`RuleTester` 和 `SourceCode` 这些公有类的对象。
* `lib/cli.js` - 这个文件是 ESLint CLI 的核心，它接受一个参数的数组，并使用 `eslint` 来执行命令，通过将它保持为一个独立的程序，它允许其他程序从另一个 Node.js 程序中有效地调用 ESLint，就像在命令行上一样。它主要的调用方法是 `cli.execute()` ，而这也是完成所有文件读取、目录遍历、输入和输出的部分。
* `lib/init/` - 该模块包含为用户初始化一个配置文件的 `--init` 的功能。
* `lib/cli-engine/` - 这个模块包含了 `CLIEngine` 的类，这个类会用来查找源代码文件和配置文件，然后给 `Linter` 类进行代码的检查。这个模块包括一些配置文件、解析器、插件和格式化能力的加载逻辑。
* `lib/linter/` - 它包含了 `Linter` 的核心类，它根据配置上的选项进行代码检查。该文件不进行文件 I/O 操作，也不直接与命令行进行交互。对于其他需要进行 JavaScript 文本验证的 Node.js 程序，可以直接调用此接口。
* `lib/rule-tester/` - 它包含了 `RuleTester` 的类，通过封装 `Mocha` 来对一些规则进行单元测试。这个类允许我们对每个规则编写一致的格式化的测试，以确保规则运行正常。RuleTester 接口参照了 Mocha，兼容了 Mocha 全部的测试方法。RuleTester 也可以被修改来与其他测试框架一起工作。
* `lib/source-code/` - 它包含了 `SourceCode` 的类，它可以用来代表解析后的源代码。它接收源代码，以及表示代码的 AST 节点，用来展现解析后的源代码。它使用源码和 AST 作为参数。
* `lib/rules/` - 这个模块包含验证源代码的内置规则。
=======
* `bin/eslint.js` - this is the file that actually gets executed with the command line utility. It's a dumb wrapper that does nothing more than bootstrap ESLint, passing the command line arguments to `cli`. This is intentionally small so as not to require heavy testing.
* `lib/api.js` - this is the entry point of `require("eslint")`. This file exposes an object that contains public classes `Linter`, `ESLint`, `RuleTester`, and `SourceCode`.
* `lib/cli.js` - this is the heart of the ESLint CLI. It takes an array of arguments and then uses `eslint` to execute the commands. By keeping this as a separate utility, it allows others to effectively call ESLint from within another Node.js program as if it were done on the command line. The main call is `cli.execute()`. This is also the part that does all the file reading, directory traversing, input, and output.
* `lib/cli-engine/` - this module is `CLIEngine` class that finds source code files and configuration files then does code verifying with the `Linter` class. This includes the loading logic of configuration files, parsers, plugins, and formatters.
* `lib/linter/` - this module is the core `Linter` class that does code verifying based on configuration options. This file does no file I/O and does not interact with the `console` at all. For other Node.js programs that have JavaScript text to verify, they would be able to use this interface directly.
* `lib/rule-tester/` - this module is `RuleTester` class that is a wrapper around Mocha so that rules can be unit tested. This class lets us write consistently formatted tests for each rule that is implemented and be confident that each of the rules work. The RuleTester interface was modeled after Mocha and works with Mocha's global testing methods. RuleTester can also be modified to work with other testing frameworks.
* `lib/source-code/` - this module is `SourceCode` class that is used to represent the parsed source code. It takes in source code and the Program node of the AST representing the code.
* `lib/rules/` - this contains built-in rules that verify source code.
>>>>>>> 701fbee467b3a2d0278b54c324638fd0bf482f64

## `cli` 对象 {#the-cli-object}

`cli` 对象是命令行接口上的 API。事实上，`bin/eslint.js` 文件只是简单的将参数传递给 `cli` 对象，然后设置 `process.exitCode` 来返回退出码。

它的主要方法是 `cli.execute()` ，该方法接收一个代表命令行选项的字符串数组（就像传递少了前两个参数的 `process.argv` 一样）。如果你想在另一程序里像 CLI 一样运行 ESLint，那么 `cli` 就是你要用到的对象。

这个对象的职责包括：

* 解释命令行参数
* 从文件系统读取文件
* 输出到控制台
* 输出到文件系统
* 使用一个格式化工具
* 返回正确的退出码

这个对象不能：

* 直接调用 `process.exit()`
* 执行任何异步操作

## `CLIEngine` 对象 {#the-cliengine-object}

`CLIEngine` 类型代表 CLI 的核心功能，除了在默认情况下它不从命令行读取任何内容，也不输出任何内容。相反，它接受很多（不是全部）传递给 CLI 的参数。它读取配置文件和源码文件，同时也管理传递到 `Linter` 对象的环境。

`CLIEngine` 的主要方法是 `executeOnFiles()`，接收一个要被检查的文件和目录名的数组。

这个对象的职责包括：

* 管理 eslint 的执行环境
* 从文件系统读取文件
* 从配置文件读取配置信息 (包括 .eslintrc 和 package.json)

这个对象不能：

* 直接调用 `process.exit()`
* 执行任何异步操作
* 输出到控制台
* 使用格式化工具

## `Linter` 对象 {#the-linter-object}

`Linter` 对象的主要方法是 `verify()`，它接收两个参数：要验证的源码文本和一个配置对象（通过准备好的配置文件与命令行的操作）。该方法首先使用 `espree`（或者配置的解析器）解析获取的文本，并检索 AST。AST 可以用来产生行/列和范围的位置，这对于报告问题的位置和检索与 AST 节点有关的源文本是很有帮助的。

一旦 AST 是可用的，`estraverse` 被用来从上到下遍历 AST。在每个节点，`Linter` 对象触发与该节点类型同名的一个事件（即 “Identifier”，”WithStatement” 等）。在回退到子树上时，一个带有 AST 类型名称和 “:exit” 后缀的事件被触发，比如 “Identifier:exit” - 这允许规则在正向和逆向遍历开始起作用。每个事件在恰当的 AST 节点可用时触发。

这个对象的职责包括：

* 检查 JavaScript 代码字符串
* 为代码创建 AST
* 在 AST 上执行规则
* 报告执行的结果

这个对象不能：

* 直接调用 `process.exit()`
* 执行任何异步操作
* 使用 Node.js 特定的功能
* 访问文件系统
* 调用 `console.log()` 或其他任何类似方法

## 规则 {#rules}

独特的规则是 ESLint 架构中最特殊的部分。规则能做的很少，它们只是针对所提供的 AST 执行的一组指令。它们能够获取一些传入的上下文信息，但主要职责是检查 AST，并报告警告。

这个对象的职责包括：

* 检查 AST 特定的模式
* 当发现特定的模式时，报告警告

这个对象不能：

* 直接调用 `process.exit()`
* 执行任何异步操作
* 使用 Node.js 特定的功能
* 访问文件系统
* 调用 `console.log()` 或其他任何类似方法
