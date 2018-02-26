---
title: Development Environment
layout: doc
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# Development Environment

ESLint has a very lightweight development environment that makes updating code fast and easy. This is a step-by-step guide to setting up a local development environment that will let you contribute back to the project.

ESLint 有一个让更新代码非常快速简单而且非常轻量级的开发环境。这是一个帮助你逐步安装本地开发环境的指南，让你的贡献回馈到 ESlint 项目中。

## Step 1: Install Node.js

Go to <https://nodejs.org/> to download and install the latest stable version for your operating system.

到 <https://nodejs.org/> 为你的操作系统下载并安装最新的稳定版。

Most of the installers come with [npm](https://www.npmjs.com/) already installed, but if for some reason it doesn't work on your system, you can install it manually using the instructions on the site.

大多数的安装都会自动安装 [npm](http://www.npmjs.com/)，但是由于某些原因它不能在你的系统中工作，你可以根据网站上的说明手动安装。

## Step 2: Fork and checkout your own ESLint repository

Go to <https://github.com/eslint/eslint> and click the "Fork" button. Follow the [GitHub documentation](https://help.github.com/articles/fork-a-repo) for forking and cloning.

到 <https://github.com/eslint/eslint> 网站并点击 "Fork" 按钮。参照[GitHub 文档](https://help.github.com/articles/fork-a-repo)了解 forking 和 cloning。

Once you've cloned the repository, run `npm install` to get all the necessary dependencies:

一旦你已经 clone 了资源库，运行 `npm install` 获取所有必要的依赖:

```
$ cd eslint
$ npm install
```

You must be connected to the Internet for this step to work. You'll see a lot of utilities being downloaded.

这一步必须联网才能工作。你会看到下载了大量的工具。

If you have an ESLint configuration file in your home directory (such as `~/.eslintrc.js`), either delete or rename it. This will help ensure that all the tests in Step 5 pass. It will also prevent ESLint from running with an incorrect configuration in case the configuration file in your development environment becomes misnamed, moved, or deleted.

如果在你的主目录下有 ESLint 配置文件（比如 `~/.eslintrc.js`），可以删除或重命名它。这将确保在步骤 5 的测试用例都通过测试。假如在你的开发环境下，配置文件命名错误、被移除或删除，它会防止 ESLint 使用错误的配置运行。

## Step 3: Add the upstream source

The *upstream source* is the main ESLint repository that active development happens on. While you won't have push access to upstream, you will have pull access, allowing you to pull in the latest code whenever you want.

*upstream source* 是非常活跃的 ESLint 的主仓库。虽然你没有向上游 push 的权限，但是你有权限随时 pull 最新的代码。

To add the upstream source for ESLint, run the following in your repository:

要添加 ESLint 的上游资源库，需要在你的本地仓库下运行：

```
git remote add upstream git@github.com:eslint/eslint.git
```

Now, the remote `upstream` points to the upstream source.

现在，远程 `upstream` 就指向上游资源库了。

## Step 4: Install the Yeoman Generator

[Yeoman](http://yeoman.io) is a scaffold generator that ESLint uses to help streamline development of new rules. If you don't already have Yeoman installed, you can install it via npm:

[Yeoman](http://yeoman.io) 是一个脚手架生成器，ESLint 使用它来简化新规则的开发。如果你没有安装 Yeoman ,可以使用 npm 安装:

    npm install -g yo

Then, you can install the ESLint Yeoman generator:

随后安装 ESLint 的 Yeoman 生成器:

    npm install -g generator-eslint

Please see the [generator documentation](https://github.com/eslint/generator-eslint) for instructions on how to use it.

请查看[生成器文档](https://github.com/eslint/generator-eslint)来了解如何使用。

## Step 5: Run the tests

Running the tests is the best way to ensure you have correctly set up your development environment. Make sure you're in the `eslint` directory and run:

运行测试是确保你正确安装了开发环境最好的方式。确保你在 `eslint` 文件夹下并运行:

```
npm test
```

The testing takes a few minutes to complete. If any tests fail, that likely means one or more parts of the environment setup didn't complete correctly. The upstream tests always pass.

测试需要花费几分钟的时间完成，如果有任何的测试失败，意味着开发环境有一个或多个地方没有正确的完成设置。上游资源库是一直能通过测试的。

## Reference Information

### Workflow

Once you have your development environment installed, you can make and submit changes to the ESLint source files. Doing this successfully requires careful adherence to our [pull-request submission workflow](contributing/pull-requests).

一旦你在开发环境进行了安装，你可以编译和提交修改 ESLint 的源文件。请仔细遵守我们的 [pull-request submission workflow](contributing/pull-requests)，以确保成功运行。

### Build Scripts

ESLint has several build scripts that help with various parts of development.

ESLint 有几个构建脚本用于开发的各个部分。

#### npm test

The primary script to use is `npm test`, which does several things:

这个主要的脚本使用 `npm test` 运行，它主要做了以下几件事：

1. Lints all JavaScript (including tests) and JSON
1. 校验所有的 JavaScript (包含测试）和 JSON 文件
1. Runs all tests on Node.js
1. 在 Node.js 上运行所有的测试
1. Checks code coverage targets
1. 检查代码覆盖
1. Generates `build/eslint.js` for use in a browser
1. 生成 `build/eslint.js` 在浏览器端使用
1. Runs a subset of tests in PhantomJS
1. 在 PhantomJS 上运行单元测试

Be sure to run this after making changes and before sending a pull request with your changes.

确保在做出修改后或者提交有修改的 pull request 之前运行测试

**Note:** The full code coverage report is output into `/coverage`.

**注意：**完整的代码覆盖率报告输出到 `/coverage`。

#### npm run lint

Runs just the JavaScript and JSON linting on the repository

只运行仓库中的 JavaScript 和 JSON 文件进行检测

#### npm run browserify

Generates `build/eslint.js`, a version of ESLint for use in the browser

生成 `build/eslint.js`，在浏览器端使用的 ESLint 版本。

#### npm run docs

Generates JSDoc documentation and places it into `/jsdoc`.

生成 JSDoc 文档并放在 `/jsdoc`。

#### npm run profile

This command is used for intensive profiling of ESLint using Chrome Developer Tools. It starts a development server that runs through three profiles:

这个命令的作用是使用 Chrome 开发者工具对 ESLint 进行精密的分析。通过下边三个配置文件启动一个服务：

* Large - Runs ESLint on JSHint
* Large - 基于JSHint运行ESLint
* Medium - Runs ESLint on jQuery
* Medium - 基于 jQuery 运行 ESLint
* Small - Runs ESLint on KnockoutJS
* Small - 基于 KnockoutJS 运行 ESLint

Your browser should automatically open to the page in question. When that happens:

当做如下操作时，你的浏览器会自动打开相关的页面：

1. Open up developer tools
1. 打开开发者工具
1. Click on Profiles
1. 点击 Profiles 项

You should start to see profiles for each run show up on the left side. If not, reload the page in the browser. Once all three profiles have completed, they will be available for inspection.

每一次运行的时候一开始你都会在左侧看到分析器。如果没有，则在浏览器中重新加载页面。一旦所有的分析已经完成，就可以提供查阅了。