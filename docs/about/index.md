---
title: 关于
layout: doc
edit_link: https://github.com/eslint/eslint/edit/main/docs/src/about/index.md

---
<<<<<<< HEAD
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# 关于 {#about}
=======
>>>>>>> d3b79dc3008d88a22772cde83627a5796c8d83e9

ESLint 是一个开源的 JavaScript lint 工具，由 Nicholas C. Zakas 在 2013 年 6 月创建。[lint][] 是一种静态分析，经常被用来寻找有问题的或不遵守某些风格准则的代码。大多数编程语言都有相对应的 linter，而编译器有时会在编译过程中执行 lint 操作。

JavaScript 作为一种动态并弱类型的语言，开发时很容易出错。在不编译的情况下，为了找到语法或其他错误，我们通常就得要执行 JavaScript 代码。而有了像 ESLint 这样的 linter，开发者在不执行代码的情况下也可以发现问题了。

创建 ESLint 的主要原因是允许开发者创建他们自己的 lint 规则。ESLint 被设计成所有的规则都是可插拔的：默认规则的编写就像任何插件规则一样。他们都可以遵循相同的模式，无论是规则本身还是测试。虽然 ESLint 会有一些开箱即用的内置规则，但不管什么时候你都可以动态地加载规则。

ESLint 是用 Node.js 写的，因而是一个快速的运行环境，并可以通过 [npm][] 轻松安装。

[lint]: https://en.wikipedia.org/wiki/Lint_(software)
[npm]: https://npmjs.org/

## 理念 {philosophy}

一切都是可插拔的。

* 规则 API 被捆绑的以及自定义的规则使用
* 捆绑式和自定义格式化器都使用了格式化器 API
* 可以在运行时指定额外的规则和格式器
* 规则和格式化器不一定要捆绑在一起才能使用

每个规则：

* 都是独立的
* 都可以开关（没什么 “我太重要了你不能把我关掉” 之流）
* 都可以被设置成报警或报错

并且：

* 规则是 “不拘泥形式” 的 - ESLint 不提倡任何特定的编码风格
* 任何捆绑好的规则都是可以通用的

此项目:

* 重视文件和清晰的沟通
* 尽可能的透明
* 相信测试的重要性
