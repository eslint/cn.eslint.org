---
title: 单元测试
layout: doc
edit_link: https://github.com/eslint/eslint/edit/master/docs/developer-guide/unit-tests.md

---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# 单元测试 {#unit-tests}

ESLint 的大多数部分都有与之相关的单元测试。单元测试是用 [Mocha](https://mochajs.org/) 编写的，在为 ESLint 做贡献时需要用到。你可以在 `tests` 目录下找到所有的单元测试。

当你第一次得到源代码时，你需要先运行一次 `npm install` 以安装依赖。一旦执行完毕，你就可以通过以下方式运行测试：

    npm test

这个指令会自动启动 Mocha 并运行 `tests` 目录下的所有测试。你只需要把你的测试添加进去，在运行测试时他们就会自动被选中。

## 运行独立测试 {#running-individual-tests}

如果你想快速运行一个测试文件，你可以通过直接运行 Mocha 并传入文件名来实现。比如说：

    npm run test:cli tests/lib/rules/no-wrap-func.js

如果你想只运行一个或一个子集的 `RuleTester` 测试用例，那么在每个测试用例中添加 `only: true` 就好了；或者用 `RuleTester.only(...)` 把测试用例包裹起来，这样就可以自动添加它了：

```js
ruleTester.run("my-rule", myRule, {
    valid: [
        RuleTester.only("const valid = 42;"),
        // Other valid cases
    ],
    invalid: [
        {
            code: "const invalid = 42;",
            only: true,
        },
        // Other invalid cases
    ]
})
```

运行单个测试在你在处理一个特定的 bug 并迭代解决方案时很有用。所以在提交 pull request 之前，你得确保你运行了 `npm test`。`npm test` 指令使用了 Mocha 的 `--forbid-only` 命令行标志来防止 `only` 测试通过完整测试运行。

## 对单元测试的更多控制 {#more-control-on-unit-testing}

`npm run test:cli` 是 `./node_modules/.bin/mocha` 路径下的 Mocha cli 的别名。可以提供 [选项](https://mochajs.org/#command-line-usage)，以帮助更好地控制要运行的测试。
