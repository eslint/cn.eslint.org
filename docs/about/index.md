---
title: About
layout: doc
translator: sunshiner
proofreader: maomaoking
---

# About

# 关于

ESLint is an open source JavaScript linting utility originally created by Nicholas C. Zakas in June 2013. Code [linting][] is a type of static analysis that is frequently used to find problematic patterns or code that doesn't adhere to certain style guidelines. There are code linters for most programming languages, and compilers sometimes incorporate linting into the compilation process.

ESLint是一个开源的JavaScript代码检查工具，由Nicholas C. Zakas 于2013年6月创建。代码检查是一种静态的分析，常用于寻找有问题的模式或者代码，并且不依赖于具体的编码风格。对大多数编程语言来说都会有代码检查，一般来说编译程序会内置检查工具。

JavaScript, being a dynamic and loosely-typed language, is especially prone to developer error. Without the benefit of a compilation process, JavaScript code is typically executed in order to find syntax or other errors. Linting tools like ESLint allow developers to discover problems with their JavaScript code without executing it.

JavaScript是一个动态的弱类型语言，在开发中比较容易出错。因为没有编译程序，为了寻找JavaScript代码错误通常需要在执行过程中不断调适。像ESLint这样的可以让程序员在编码的过程中发现问题而不是在执行的过程中。

The primary reason ESLint was created was to allow developers to create their own linting rules. ESLint is designed to have all rules completely pluggable. The default rules are written just like any plugin rules would be. They can all follow the same pattern, both for the rules themselves as well as tests. While ESLint will ship with some built-in rules to make it useful from the start, you'll be able to dynamically load rules at any point in time.

ESLint的初衷是为了让程序员可以创建自己的检测规则。ESLint的所有规则都被设计成可插入的。ESLint的默认规则与其他的插件并没有什么区别，规则本身和测试可以依赖于同样的模式。为了便于人们使用，ESLint内置了一些规则，当然，你可以在使用过程中自定义规则。

ESLint is written using Node.js to provide a fast runtime environment and easy installation via [npm][].

ESLint使用Node.js编写，这样既可以有一个快速的运行环境的同时也便于安装。

[linting]: http://en.wikipedia.org/wiki/Lint_(software)
[npm]: http://npmjs.org/

## Philosophy

Everything is pluggable:

所有都是可拔插的

* Rule API is used both by bundled and custom rules
* 内置规则和自定义规则共用一套规则API
* Formatter API is used both by bundled and custom formatters
* 内置的格式化方法和自定义的格式化方法共用一套格式化API
* Additional rules and formatters can be specified at runtime
* 额外的规则和格式化方法能够在运行时指定
* Rules and formatters don't have to be bundled to be used
* 规则和对应的格式化方法并不强制捆绑使用

Every rule:

每条规则:

* Is standalone
* 各自独立
* Can be able to be turned off or on (nothing can be deemed "too important to turn off")
* 可以开启或关闭（没有什么可以被认为“太重要所以不能关闭”）
* Can be set to be a warning or error individually
* 可以将结果设置成警告或者错误
* Is turned on by providing a non-zero number and off by providing zero
* 设置为非0值表示开启，设置为0表示关闭

Additionally:

另外:

* Rules are "agenda free" - ESLint does not promote any particular coding style
* ESLint并不推荐任何编码风格，规则是自由的
* Any bundled rules are generalizable
* 所有内置规则都是泛化的

The project:

项目:

* Values documentation and clear communication
* 通过丰富文档减少沟通成本
* Is as transparent as possible
* 尽可能的简单透明
* Believes in the importance of testing
* 相信测试的重要性