---
title: 开发者指南
layout: doc
edit_link: https://github.com/eslint/eslint/edit/main/docs/developer-guide/README.md

---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# 开发者指南 {#developer-guide}

本指南旨在帮助希望进行如下操作的开发者：

* 贡献代码到 ESLint
* 创建自己的 ESLint 规则

为了你能够作为开发者参与到 ESLint 项目中，建议你能够满足如下要求：

* 理解 JavaScript，因为 ESLint 是用 JavaScript 写的。
* 对 Node.js 有一定了解，因为 ESLint 运行在 Node.js 环境中。
* 熟悉命令行程序。
* 理解单元测试以及其重要性。

如果你满足上述条件，那么请继续阅读。

## 第 1 节：获取[源代码](source-code) {#section-1-get-the-source-code}

在开始之前，你需要获取一份 ESLint 的源代码。这一节会介绍如何获取源代码以及源码结构。

## 第 2 节：设置[开发环境](development-environment) {#section-2-set-up-a-development-environment}

ESLint 开发和在命令行中运行有些不同。本节会向你展示如何设置开发环境，让你做好编码的准备。

## 第 3 节：运行[单元测试](unit-tests) {#section-3-run-the-unit-tests}

ESLint 中的很多单元测试都是为了确保高质量的代码。本节会解释如何运行单元测试。

## 第 4 节：[使用规则](working-with-rules) {#section-4-working-with-rules}

终于可以开始编写规则了。你可能想要修复一个现有规则或者创建一个新规则，本节会告诉你如何做到这些。

## 第 5 节：[使用插件](working-with-plugins) {#section-5-working-with-plugins}

<<<<<<< HEAD
你开发好了特定的 ESLint 规则，想要分享到社区。你可以在 npm 上将其发布成为一个 ESLint 插件。
=======
You've developed library-specific rules for ESLint and you want to share them with the community. You can publish an ESLint plugin on npm.
>>>>>>> 17286db5f4a43376ff196a9408047f58db63c7c7

## 第 6 节：[使用自定义解析器](working-with-custom-parsers) {#section-6-working-with-custom-parsers}

如果你不想使用 ESLint 的默认解析器，本节会解释如何使用自定义解析器。

## 第 7 节：[Node.js API](nodejs-api) {#section-7-nodejs-api}

如果你对编写使用 ESLint 的工具感兴趣，那么你可以使用 Node.js API 以编程方式调用 ESLint 的相关功能。

## 第 8 节：[贡献](contributing/) {#section-8-contributing}

如果你希望和社区分享你的代码改动，下一步就是通过 pull request 来提交这些改动。
