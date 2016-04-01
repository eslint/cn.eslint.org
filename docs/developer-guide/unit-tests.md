---
title: Unit tests
layout: doc
translator: molee1905
proofreader: hacke2
---

# Unit Tests

# 单元测试

Most parts of ESLint have unit tests associated with them. Unit tests are written using [Mocha](http://mochajs.org/) and are required when making contributions to ESLint. You'll find all of the unit tests in the `tests` directory.

ESLint大多部分都有与其相关的单元测试。单元测试是用[Mocha](http://mochajs.org/)写的，也是对ESLint做出贡献所要求的。你会在`tests`目录下发现所有的单元测试。

When you first get the source code, you need to run `npm install` once initially to set ESLint for development. Once you've done that, you can run the tests via:

当你第一次获取源码，你需要运行`npm install`来设置ESLint的开发环境。设置好之后，你可以运行测试，通过：

    npm test

This automatically starts Mocha and runs all tests in the `tests` directory. You need only add yours and it will automatically be picked up when running tests.

这自动启动Mocha，运行`tests`目录下的所有测试。你只需要添加你自己的测试，它会自动测试。

## Running Individual Tests

## 运行单个测试

If you want to quickly run just one test, you can do so by running Mocha directly and passing in the filename. For example:

如果你想快速的运行一个测试，可以通过直接运行Mocha，传递一个文件名来做到。例如：

    ./node_modules/.bin/mocha tests/lib/rules/no-wrap-func.js
    
Running individual tests is useful when you're working on a specific bug and iterating on the solution. You should be sure to run `npm test` before submitting a pull request.

当你工作在一个特定的bug和重复性的解决方案时，运行单个测试是很有用的。在提交请求之前，你应该确保运行了`npm test`。


