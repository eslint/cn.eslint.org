---
title: Getting Started
layout: doc
---

# Getting Started with ESLint

# 开始使用 ESLint

ESLint is a tool for identifying and reporting on patterns found in ECMAScript/JavaScript code, with the goal of making code more consistent and avoiding bugs. In many ways, it is similar to JSLint and JSHint with a few exceptions:

ESLint 是在ECMAScript/JavaScript代码中识别和报告模式匹配的工具，它的目标是保证代码的一致性和避免错误。在许多方面，它和 JSLint、JSHint 相似，除了少数的例外：

* ESLint uses [Espree](https://github.com/eslint/espree) for JavaScript parsing.
* ESLint 使用 [Espree](https://github.com/eslint/espree) 解析JavaScript。
* ESLint uses an AST to evaluate patterns in code.
* ESLint 使用 AST 去分析代码中的模式
* ESLint is completely pluggable, every single rule is a plugin and you can add more at runtime.
* ESLint 是完全插件化的。每一个规则都是一个插件并且你可以在运行时添加更多的规则。

## Installation

## 安装

You can install ESLint using npm:

你可以使用 npm 安装 ESLint

    npm install -g eslint

## Usage

## 使用

If it's your first time using ESLint, you should set up a config file using `--init`:

如果你第一次使用 ESLint，你必须使用 `--init` 命令新建一个配置文件：

    eslint --init

After that, you can run ESLint on any JavaScript file:

随后，你可以使用 ESLint 检测任何 JavaScript 文件：

    eslint test.js test2.js

## Configuration

## 配置

**Note:** If you are coming from a version before 1.0.0 please see the [migration guide](http://eslint.org/docs/user-guide/migrating-to-1.0.0).

**Note:** 如果你之前使用的版本低于 1.0.0，请查看 [迁移指南](http://eslint.org/docs/user-guide/migrating-to-1.0.0)。

After running `eslint --init`, you'll have a `.eslintrc.*` file in your directory. In it, you'll see some rules configured like this:

运行 `eslint --init` 之后，`.eslintrc.*` 文件会在你的文件夹中自动创建。你可以在 `.eslintrc` 文件中看到许多像这样的规则：

```json
{
    "rules": {
        "semi": ["error", "always"],
        "quotes": ["error", "double"]
    }
}
```

The names `"semi"` and `"quotes"` are the names of [rules](http://eslint.org/docs/rules) in ESLint. The number is the error level of the rule and can be one of the following values:

`"semi"` 和 `"quotes"` 是 ESLint 中 [规则](http://eslint.org/docs/rules) 的名称。数字是规则的错误级别，它有 3 个取值：

* `"off"` or `0` - turn the rule off

* `"off"` or `0` - 关闭规则

* `"warn"` or `1` - turn the rule on as a warning (doesn't affect exit code)

* `"warn"` or `1` - 将规则视为一个警告（不会影响退出码）

* `"error"` or `2` - turn the rule on as an error (exit code will be 1)

* `"error"` or `2` - 将规则视为一个错误 (退出码为1)

The three error levels allow you fine-grained control over how ESLint applies rules (for more configuration options and details, see the [configuration docs](http://eslint.org/docs/user-guide/configuring)).

这三个错误级别可以允许你细粒度的控制 ESLint 是如何应用规则（更多关于配置选项和细节的问题，请查看[配置](http://eslint.org/docs/user-guide/configuring)）

Your `.eslintrc` configuration file will also include the line:

你的 `.eslintrc` 配置文件可以包含下面的一行：

```json
    "extends": "eslint:recommended"
```

Because of this this line, all of the rules marked "(recommended)" on the [rules page](http://eslint.org/docs/rules) will be turned on.  Alternatively, you can use configurations that others have created by searching for "eslint-config" on [npmjs.com](https://www.npmjs.com/search?q=eslint-config).  ESLint will not lint your code unless you extend from a shared configuration or explicitly turn rules on in your configuration.

由于这行，所有在 [规则页](http://eslint.org/docs/rules) 被标记为 "(recommended)" 的规则将会默认开启。另外，你可以在 [npmjs.com](https://www.npmjs.com/search?q=eslint-config) 搜索 "eslint-config" 使用别人创建好的配置。只有在你的配置文件中 extend 一个可分享的配置或者明确开启一个规则，ESLint 才会去校验你的代码。

---

## Next Steps

## 下一步

* Learn about [advanced configuration](http://eslint.org/docs/user-guide/configuring) of ESLint.

* 学习 ESLint 的[高级配置](http://eslint.org/docs/user-guide/configuring)。

* Get familiar with the [command line options](/docs/user-guide/command-line-interface).

* 熟悉 [命令行选项](/docs/user-guide/command-line-interface)。

* Explore [ESLint integrations](http://eslint.org/docs/user-guide/integrations) into other tools like editors, build systems, and more.

* 探索将 [ESLint 集成](http://eslint.org/docs/user-guide/integrations) 到其它工具，比如 编辑器，构建工具等等。

* Can't find just the right rule?  Make your own [custom rule](http://eslint.org/docs/developer-guide/working-with-rules).

* 没有找到适合的规则？创建[自定义规则](http://eslint.org/docs/developer-guide/working-with-rules)。

* Make ESLint even better by [contributing](http://eslint.org/docs/developer-guide/contributing).

* 通过 [贡献代码](http://eslint.org/docs/developer-guide/contributing) 让 ESLint 变得更好。
