---
title: 开发环境
layout: doc
edit_link: https://github.com/eslint/eslint/edit/main/docs/src/developer-guide/development-environment.md
eleventyNavigation:
    key: set up a development environment
    parent: developer guide
    title: Set Up a Development Environment
    order: 2

---
<<<<<<< HEAD
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# 开发环境 {#development-environment}
=======
>>>>>>> 89db7c70db025dfcc04f46decf01127a76f11263

ESLint 的开发环境非常轻量级，使得更新代码快速而简单。本篇是一个建立本地开发环境的分步指南，以便你回馈项目。

## 第一步：安装 Node.js {#step-1-install-node.js}

去 <https://nodejs.org/> 下载并安装适合你的操作系统的最新稳定版本。

大多数 Node.js 安装包会自带 [npm](https://www.npmjs.com/)，但如果由于某些原因 npm 在你的系统上有问题，你也可以参考网站上的说明手动安装它。

## 第二步: Fork 然后 checkout 你自己的 Eslint 仓库 {step-2-fork-and-checkout-your-own-eslint-repository}

进入 <https://github.com/eslint/eslint>，点击 “Fork” 按钮。Fork 和 clone 的教程在 [GitHub 文档](https://help.github.com/articles/fork-a-repo) 中。

当你 clone 好了 ESLint 仓库，运行 `npm install` 以安装所需的依赖：

```shell
cd eslint
npm install
```

这个指令只有在你连接着网络时才会起作用。你会看到很多包被下载。

## 第三步：添加上游源 {#step-3-add-the-upstream-source}

*上游源* 是 ESLint 的正在活跃开发中的主仓库。虽然你没有对上游的推送权限，但你会有拉取 (pull) 代码的权限，允许你随时拉取最新的代码。

要添加 ESLint 的上游源，请在你的仓库中运行以下指令：

```shell
git remote add upstream git@github.com:eslint/eslint.git
```

现在，remote 的 `upstream` 指向上游源。

## 第四步：安装 Yeoman 生成器 {#step-4-install-the-yeoman-generator}

[Yeoman](http://yeoman.io) 是一个脚手架生成器，ESLint 使用它来帮助简化新规则的开发。如果你还没有安装 Yeoman，你可以通过 npm 安装它。

    npm install -g yo

然后，你就可以安装 ESLint Yeoman 生成器了：

    npm install -g generator-eslint

请参阅 [生成器文档](https://github.com/eslint/generator-eslint)，了解如何使用它。

## 第五步：运行测试 {#step-5-run-the-tests}

运行测试是检验你是否正确地配置了你的开发环境的最好方式。确保你是在 `eslint` 目录下之后，运行：

```shell
npm test
```

测试需要几分钟时间来完成。如果任何测试不通过，这可能意味着环境设置的一个或几个部分没有正确完成。上游的测试都是通过的。

## 参考信息 {#reference-information}

### 工作流 {#workflow}

安装好了你的开发环境，你现在就可以对 ESLint 的源文件进行修改并提交了。不过，要真正地做到这一点，需要你认真遵守我们的 [pull request 提交工作流程](contribution/pull-requests)。

### 构建脚本 {#build-scripts}

ESLint 有几个构建脚本可以帮助开发的各个部分。

#### npm test {#npm-test}

使用的主要脚本是 `npm test`，它会完成如下任务：

1. Lint 所有的 JavaScript（包括测试）和 JSON 文件。
1. 在 Node.js 上运行所有测试
1. 检查代码覆盖率
1. 生成 `build/eslint.js`，以便在浏览器中使用。
1. 在 PhantomJS 中运行一个子集的测试

请务必在进行更改后以及提交 pull request 之前运行此脚本。

**注意：**完整的代码覆盖率报告会被输出到 `/coverage` 目录下。

#### npm run lint {#npm-run-lint}

只对 JavaScript 和 JSON 进行 lint。

#### npm run webpack {#npm-run-webpack}

生成 `build/eslint.js`，一个在浏览器中使用的 ESLint 版本。
