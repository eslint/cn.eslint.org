---
title: Source Code
layout: doc
edit_link: https://github.com/eslint/eslint/edit/master/docs/developer-guide/source-code.md

---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# Source Code

ESLint is hosted at [GitHub](https://github.com/eslint/eslint) and uses [Git](https://git-scm.com/) for source control. In order to obtain the source code, you must first install Git on your system. Instructions for installing and setting up Git can be found at [https://help.github.com/articles/set-up-git/](https://help.github.com/articles/set-up-git/).

ESLint 托管在 [GitHub](https://github.com/eslint/eslint)，使用 [Git](https://git-scm.com/) 作为版本控制工具。
你必须先在操作系统中安装 [Git](http://git-scm.com/) ，才能获取到源码。
你可以在 [https://help.github.com/articles/set-up-git/](https://help.github.com/articles/set-up-git/) 找到关于如何安装和配置 Git 的教程。

If you simply want to create a local copy of the source to play with, you can clone the main repository using this command:

如果仅仅想拷贝源码到本地，可以使用这个命令克隆主仓库：

    git clone git://github.com/eslint/eslint.git

If you're planning on contributing to ESLint, then it's a good idea to fork the repository. You can find instructions for forking a repository at [https://help.github.com/articles/fork-a-repo/](https://help.github.com/articles/fork-a-repo/). After forking the ESLint repository, you'll want to create a local copy of your fork.

如果计划向 ESLint 贡献代码，那么 fork 这个仓库是一个好的选择。
你可以在 [https://help.github.com/articles/fork-a-repo/](https://help.github.com/articles/fork-a-repo/) 找到关于如何 fork 仓库的教程。
当你 fork ESLint 仓库后，可以拷贝你的 fork 到本地。

## Start Developing

Before you can get started developing, you'll need to have a couple of things installed:

在你开始开发之前，你需要安装以下工具：

* [Node.JS](https://nodejs.org)
* [Node.JS](https://nodejs.org)
* [npm](https://www.npmjs.com/)
* [npm](https://www.npmjs.com/)

Once you have a local copy and have Node.JS and npm installed, you'll need to install the ESLint dependencies:

当你已经将代码拷贝到本地并安装了 Node.JS 和 npm，你需要安装 ESLint 的相关依赖：

    cd eslint
    npm install

Now when you run `eslint`, it will be running your local copy and showing your changes.

现在运行 `eslint` 命令，将会运行本地的拷贝并可以显示你对它的修改。

**Note:** It's a good idea to re-rerun `npm install` whenever you pull from the main repository to ensure you have the latest development dependencies.

**注意：**当你从主仓库上 pull 代码后，最好重新运行 `npm install` 命令，以确保安装了最新的开发依赖。

## Directory structure

The ESLint directory and file structure is as follows:

ESLint 的目录和文件结构如下：

* `bin` - executable files that are available when ESLint is installed
* `bin` - ESLint 安装后可用的可执行文件
* `conf` - default configuration information
* `conf` - 默认配置信息
* `docs` - documentation for the project
* `docs` - 项目文档
* `lib` - contains the source code
* `lib` - 包含源码
    * `formatters` - all source files defining formatters
    * `formatters` - 定义 formatter 的所有源文件
    * `rules` - all source files defining rules
    * `rules` - 定义规则的所有源文件
* `tests` - the main unit test folder
* `tests` - 单元测试文件夹
    * `lib` - tests for the source code
    * `lib` - 源码的测试
        * `formatters` - tests for the formatters
        * `formatters` - formatter 的测试
        * `rules` - tests for the rules
        * `rules` - 规则的测试
