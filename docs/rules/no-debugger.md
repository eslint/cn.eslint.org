---
title: no-debugger - Rules
layout: doc
edit_link: https://github.com/eslint/eslint/edit/master/docs/rules/no-debugger.md
rule_type: problem
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# disallow the use of `debugger` (no-debugger)

# 禁用 `debugger` (no-debugger)

(recommended) The `"extends": "eslint:recommended"` property in a configuration file enables this rule.

(recommended) 配置文件中的 `"extends": "eslint:recommended"` 属性启用了此规则。

(fixable) The `--fix` option on the [command line](../user-guide/command-line-interface#fixing-problems) can automatically fix some of the problems reported by this rule.

(fixable) [命令行](../user-guide/command-line-interface#fixing-problems)中的 `--fix` 选项可以自动修复一些该规则报告的问题。

The `debugger` statement is used to tell the executing JavaScript environment to stop execution and start up a debugger at the current point in the code. This has fallen out of favor as a good practice with the advent of modern debugging and development tools. Production code should definitely not contain `debugger`, as it will cause the browser to stop executing code and open an appropriate debugger.

`debugger` 语句用于告诉 JavaScript 执行环境停止执行并在代码的当前位置启动调试器。随着现代调试和开发工具的出现，使用调试器已不是最佳实践。产品代码不应该包含 `debugger`，因为它会导致浏览器停止执行代码并打开一个适当的调试器。

## Rule Details

This rule disallows `debugger` statements.

该规则禁止 `debugger` 语句。

Example of **incorrect** code for this rule:

**错误** 代码示例：

```js
/*eslint no-debugger: "error"*/

function isTruthy(x) {
    debugger;
    return Boolean(x);
}
```

Example of **correct** code for this rule:

**正确** 代码示例：

```js
/*eslint no-debugger: "error"*/

function isTruthy(x) {
    return Boolean(x); // set a breakpoint at this line
}
```

## When Not To Use It

If your code is still very much in development and don't want to worry about stripping `debugger` statements, then turn this rule off. You'll generally want to turn it back on when testing code prior to deployment.

如果你的代码在很大程度上仍处于开发阶段，不想担心剥离 `debugger` 语句，那么就关闭此规则。通常在部署测试代码之前，你会想重新开启此规则。

## Further Reading

* [Debugger](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/debugger)

## Related Rules

* [no-alert](no-alert)
* [no-console](no-console)

## Version

This rule was introduced in ESLint 0.0.2.

该规则在 ESLint 0.0.2 中被引入。

## Resources

* [Rule source](https://github.com/eslint/eslint/tree/master/lib/rules/no-debugger.js)
* [Documentation source](https://github.com/eslint/eslint/tree/master/docs/rules/no-debugger.md)
