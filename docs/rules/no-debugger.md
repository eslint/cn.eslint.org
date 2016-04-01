---
title: Rule no-debugger
layout: doc
translator: ybbjegj
proofreader: molee1905
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# Disallow debugger (no-debugger)

# 禁用 debugger (no-debugger)

The `debugger` statement is used to tell the executing JavaScript environment to stop execution and start up a debugger at the current point in the code. This has fallen out of favor as a good practice with the advent of modern debugging and development tools. Production code should definitely not contain `debugger`, as it will cause the browser to stop executing code and open an appropriate debugger.

`debugger` 语句用于告诉 JavaScript 执行环境停止执行并在代码的当前位置启动调试器。随着现代调试和开发工具的出现，使用调试器已不是最佳实践。产品代码不应该包含 `debugger`,因为它会导致浏览器停止执行代码并打开一个适当的调试器。

```js
debugger;
```

## Rule Details

This rule is aimed at eliminating `debugger` references from your JavaScript. As such, it warns whenever it sees `debugger` used as an identifier in code.

该规则目的在于消除 JavaScript 代码中的 `debugger` 引用。因此，在代码中只要发现 `debugger` 标识符，该规则就会发出警告。

## When Not To Use It

If your code is still very much in development and don't want to worry about stripping about `debugger` statements, then turn this rule off. You'll generally want to turn it back on when testing code prior to deployment.

如果你的代码在开发中有大量调试器并且不想担心对 `debugger` 语句的剥离，就关闭该规则。你通常要在部署前，测试代码时重新打开该规则。

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
