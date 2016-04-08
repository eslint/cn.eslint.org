---
title: Setting up development environment
layout: doc
translator: maoshuyu
proofreader: summart
---

# Development Environment

# 开发环境

ESLint has a very lightweight development environment that makes updating code fast and easy. This is a step-by-step guide to setting up a local development environment that will let you contribute back to the project.

ESLint 有一个让更新代码非常快速简单而且非常轻量级的开发环境。这是一个帮助你逐步安装本地开发环境的指南，让你的贡献回馈到 ESlint 项目中。

## Step 1: Install Node.js

## Step 1: 安装 Node.js

Go to [http://nodejs.org/](http://nodejs.org/) to download and install the latest stable version for your operating system.

到[http://nodejs.org/](http://nodejs.org/)为你的操作系统下载并安装最新的稳定版。

Most of the installers come with [npm](http://npmjs.org/) already installed, but if for some reason it doesn't work on your system, you can install it manually using the instructions on the website.

大多数的安装都会自动安装[npm](http://npmjs.org/)，但是由于某些原因它不能在你的系统中工作，你可以根据网站上的说明手动安装。

## Step 2: Fork and checkout your own ESLint repository

## Step 2: Fork and checkout 你自己的 ESLint 仓库

Go to [https://github.com/eslint/eslint](https://github.com/eslint/eslint) and click the "Fork" button. Follow the [GitHub documentation](https://help.github.com/articles/fork-a-repo) for forking and cloning.

到[https://github.com/eslint/eslint](https://github.com/eslint/eslint) 网站并点击 "Fork" 按钮。参照[GitHub 文档](https://help.github.com/articles/fork-a-repo)了解 forking 和 cloning。

Once you've cloned the repository, run `npm install` to get all the necessary dependencies:

一旦你已经 clone 了资源库，运行 `npm install` 获取所有必要的依赖:

```
$ cd eslint
$ npm install
```

You must be connected to the Internet for this step to work. You'll see a lot of utilities being downloaded.

这一步必须联网才能工作。你会看到下载了大量的工具。

## Step 3: Add the upstream source

## Step 3: 添加上游资源库

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

## Step 4: 安装 Yeoman Generator

[Yeoman](http://yeoman.io) is a scaffold generator that ESLint uses to help streamline development of new rules. If you don't already have Yeoman installed, you can install it via npm:

[Yeoman](http://yeoman.io) 是一个脚手架生成器，ESLint 使用它来简化新规则的开发。如果你没有安装 Yeoman ,可以使用 npm 安装:

    npm install -g yo

Then, you can install the ESLint Yeoman generator:

随后安装 ESLint 的 Yeoman 生成器:

    npm install -g generator-eslint

Please see the [generator documentation](https://github.com/eslint/generator-eslint) for instructions on how to use it.

请查看[生成器文档](https://github.com/eslint/generator-eslint)来了解如何使用。

## Step 5: Run the tests

## Step 5: 运行测试
 
Running the tests is the best way to ensure you have correctly set up your development environment. Make sure you're in the the `eslint` directory and run:

运行测试是确保你正确安装了开发环境最好的方式。确保你在 `eslint` 文件夹下并运行:

```
npm test
```

The testing takes a few seconds to complete. If any tests fail, that likely means one or more parts of the environment setup didn't complete correctly. The upstream tests always pass.

测试需要花费几秒钟的时间完成，如果有任何的测试失败，意味着开发环境有一个或多个地方没有正确的完成设置。上游资源库是一直能通过测试的。

## Build Scripts

## 构建脚本

ESLint has several build scripts that help with various parts of development.

ESLint 有几个构建脚本用于开发的各个部分。

### npm test

### npm test

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

### npm run lint

### npm run lint

Runs just the JavaScript and JSON linting on the repository

只运行仓库中的 JavaScript 和 JSON 文件进行检测

### npm run browserify

### npm run browserify

Generates `build/eslint.js`, a version of ESLint for use in the browser

生成 `build/eslint.js`，在浏览器端使用的 ESLint 版本。

### npm run docs

### npm run docs

Generates JSDoc documentation and places it into `/jsdoc`.

生成 JSDoc 文档并放在 `/jsdoc`。

### npm run profile

### npm run profile

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

## Workflow

## 工作流

Whenever you make changes to the ESLint source files, you'll need to run `npm test` to rerun the tests. The workflow is:

只要你对 ESLint 的源文件做了修改，都必须运行 `npm test` 做回归测试。流程如下：

1. Make changes
1. 对源文件更改
2. Run `npm test` to run tests on the command line
2. 在命令行运行 `npm test` 做回归测试

You'll have to do this each time you make a change. The tests are run automatically whenever a pull request is received, so make sure to verify your changes work before submitting them.

在每次修改后你必须做这些操作。当接收到一个 pull request 时，这些测试都会自动运行，因此在提交前确保你的修改能正常工作。
