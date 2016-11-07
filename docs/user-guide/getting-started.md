---
title: Getting Started with ESLint
layout: doc
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# Getting Started with ESLint

ESLint is a tool for identifying and reporting on patterns found in ECMAScript/JavaScript code, with the goal of making code more consistent and avoiding bugs. In many ways, it is similar to JSLint and JSHint with a few exceptions:

ESLint 是在 ECMAScript/JavaScript 代码中识别和报告模式匹配的工具，它的目标是保证代码的一致性和避免错误。在许多方面，它和 JSLint、JSHint 相似，除了少数的例外：

* ESLint uses [Espree](https://github.com/eslint/espree) for JavaScript parsing.
* ESLint 使用 [Espree](https://github.com/eslint/espree) 解析 JavaScript。
* ESLint uses an AST to evaluate patterns in code.
* ESLint 使用 AST 去分析代码中的模式
* ESLint is completely pluggable, every single rule is a plugin and you can add more at runtime.
* ESLint 是完全插件化的。每一个规则都是一个插件并且你可以在运行时添加更多的规则。

## Installation and Usage

There are two ways to install ESLint: globally and locally.

有两种方式安装 ESLint： 全局安装和本地安装。

### Local Installation and Usage

If you want to include ESLint as part of your project's build system, we recommend installing it locally. You can do so using npm:

如果你想让 ESLint 成为你项目构建系统的一部分，我们建议在本地安装。你可以使用 npm：

```
$ npm install eslint --save-dev
```

You should then setup a configuration file:

紧接着你应该设置一个配置文件：

```
$ ./node_modules/.bin/eslint --init
```

After that, you can run ESLint on any file or directory like this:

之后，你可以在任何文件或目录运行 ESLint：

```
$ ./node_modules/.bin/eslint yourfile.js
```

Any plugins or shareable configs that you use must also be installed locally to work with a locally-installed ESLint.

使用本地安装的 ESLint 时，你使用的任何插件或可分享的配置也都必须在本地安装。

### Global Installation and Usage

If you want to make ESLint available to tools that run across all of your projects, we recommend installing ESLint globally. You can do so using npm:

如果你想使 ESLint 适用于你所有的项目，我们建议你全局安装 ESLint。你可以使用 npm：

```
$ npm install -g eslint
```

You should then setup a configuration file:

紧接着你应该设置一个配置文件：

```
$ eslint --init
```

After that, you can run ESLint on any file or directory like this:

之后，你可以在任何文件或目录运行 ESLint：

```
$ eslint yourfile.js
```

Any plugins or shareable configs that you use must also be installed globally to work with a globally-installed ESLint.

使用全局安装的 ESLint 时，你使用的任何插件或可分享的配置也都必须在全局安装。

**Note:** `eslint --init` is intended for setting up and configuring ESLint on a per-project basis and will perform a local installation of ESLint and its plugins in the directory in which it is run. If you prefer using a global installation of ESLint, any plugins used in your configuration must also be installed globally.

**注意：**`eslint --init`适用于对某个项目进行设置和配置 ESLint，并将执行本地安装的 ESLint 和及它所运行的目录下的插件 。如果你倾向于使用全局安装的 ESLint，你配置中使用的任何插件也必须是全局安装的。

**注意：** `eslint --init`

## Configuration

**Note:** If you are coming from a version before 1.0.0 please see the [migration guide](http://eslint.org/docs/user-guide/migrating-to-1.0.0).

**注意：**如果你之前使用的版本低于 1.0.0，请查看 [迁移指南](migrating-to-1.0.0)。

After running `eslint --init`, you'll have a `.eslintrc` file in your directory. In it, you'll see some rules configured like this:

运行 `eslint --init` 之后，`.eslintrc` 文件会在你的文件夹中自动创建。你可以在 `.eslintrc` 文件中看到许多像这样的规则：

```json
{
    "rules": {
        "semi": ["error", "always"],
        "quotes": ["error", "double"]
    }
}
```

The names `"semi"` and `"quotes"` are the names of [rules](http://eslint.org/docs/rules) in ESLint. The first value is the error level of the rule and can be one of these values:

`"semi"` 和 `"quotes"` 是 ESLint 中 [规则](../rules) 的名称。第一个值是错误级别，可以使下面的值之一：

* `"off"` or `0` - turn the rule off
* `"off"` or `0` - 关闭规则
* `"warn"` or `1` - turn the rule on as a warning (doesn't affect exit code)
* `"warn"` or `1` - 将规则视为一个警告（不会影响退出码）
* `"error"` or `2` - turn the rule on as an error (exit code will be 1)
* `"error"` or `2` - 将规则视为一个错误 (退出码为1)

The three error levels allow you fine-grained control over how ESLint applies rules (for more configuration options and details, see the [configuration docs](configuring)).

这三个错误级别可以允许你细粒度的控制 ESLint 是如何应用规则（更多关于配置选项和细节的问题，请查看[配置文件](configuring)）

Your `.eslintrc` configuration file will also include the line:

你的 `.eslintrc` 配置文件可以包含下面的一行：

```json
    "extends": "eslint:recommended"
```

Because of this line, all of the rules marked "(recommended)" on the [rules page](../rules) will be turned on.  Alternatively, you can use configurations that others have created by searching for "eslint-config" on [npmjs.com](https://www.npmjs.com/search?q=eslint-config).  ESLint will not lint your code unless you extend from a shared configuration or explicitly turn rules on in your configuration.

由于这行，所有在 [规则页面](../rules) 被标记为 "(recommended)" 的规则将会默认开启。另外，你可以在 [npmjs.com](https://www.npmjs.com/search?q=eslint-config) 搜索 "eslint-config" 使用别人创建好的配置。只有在你的配置文件中扩展了一个可分享的配置或者明确开启一个规则，ESLint 才会去校验你的代码。

---

## Next Steps

* Learn about [advanced configuration](configuring) of ESLint.
* 学习 ESLint 的[高级配置](configuring)。
* Get familiar with the [command line options](command-line-interface).
* 熟悉 [命令行选项](command-line-interface)。
* Explore [ESLint integrations](integrations) into other tools like editors, build systems, and more.
* 探索将 [ESLint 集成](integrations) 到其它工具，比如 编辑器，构建工具等等。
* Can't find just the right rule?  Make your own [custom rule](../developer-guide/working-with-rules).
* 没有找到适合的规则？创建[自定义规则](../developer-guide/working-with-rules)。
* Make ESLint even better by [contributing](../developer-guide/contributing).
* 通过 [贡献代码](../developer-guide/contributing) 让 ESLint 变得更好。
