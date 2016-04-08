---
title: Documentation
layout: doc
exceptMulti: true
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# Migrating to v1.0.0

ESLint v1.0.0 is the first major version release. As a result, there are some significant changes between how ESLint worked during its life in 0.x and how it will work going forward. These changes are the direct result of feedback from the ESLint community of users and were not made without due consideration for the upgrade path. We believe that these changes make ESLint even better, and while some work is necessary to upgrade, we hope the pain of this upgrade is small enough that you will see the benefit of upgrading.

v1.0.0 是 ESLint 第一个主要的发行版本。结果是，在 0.x 版本 ESLint 是如何工作的和今后 ESLint 如何工作之间有一些显著的更改。这些更改是 ESLint 社区中的用户和 were not made without due consideration for the upgrade path 的反馈的直接结果。我们相信这些更改会令 ESLint 变得更好，同时有一些升级是必须要完成的工作。我们希望这次升级的痛苦是足够小的，你会看到升级的好处。

## All Rules Off by Default

## 所有的规则默认被关闭

The most important difference in v1.0.0 is that all rules are off by default. We made this change after numerous requests to allow turning off the default rules from within configuration files. While that wasn't technically feasible, it was feasible to have all rules off by default and then re-enable rules in configuration files using `extends`. As such, we've made the `--reset` behavior the default and removed this command line option.

在 v1.0.0 最重要的不同是所有的规则被默认关闭。我们是在用户多次请求关闭配置文件中的配置文件的默认规则之后做出的这个改变。同时在技术上关闭配置文件中的默认规则是不可行的，可行的方案是让所有规则都默认关闭并且支持使用 `extends` 重新开启默认规则。因此，我们默认开启 `--reset` 行为，并且删除了此命令行参数。

When using `--init`, your configuration file will automatically include the following line:

当使用 `--init`，你的配置文件会自动包含下面这行：

```json
{
    "extends": "eslint:recommended"
}
```

This setting mimics some of the default behavior from 0.x, but not all. If you don't want to use any of the recommended rules, you can delete this line.

这行模仿了 0.x 的一些默认的行为，但并不是所有。如果你不想使用任何 recommended 规则，你可以删除这行。

**To address:** If you are currently using `--reset`, then you should stop passing `--reset` on the command line; no other changes are necessary. If you are not using `--reset`, then you should review your configuration to determine which rules should be on by default. You can partially restore some of the default behavior by adding the following to your configuration file:

**To address:** 如果你目前仍然使用 `--reset`，那么你必须在命令行中停止传递 `--reset`。没有其它的更改是必须的。如果你没有使用 `--reset`，那么你必须重新查看你的配置文件判断哪些规则是默认开启的。你可以部分的恢复一些默认的行为通过在你的配置文件中添加下面的配置。

The `"eslint:recommended"` configuration contains many of the same default rule settings from 0.x, but not all. These rules are no longer on by default, so you should review your settings to ensure they are still as you expect:

`"eslint:recommended"` 包含了许多和 0.x 相似的默认配置，但并不是全部。一些规则不再是默认的，你必须重新检查你的配置确保它们仍然像你期望的一样：

* [no-alert](http://eslint.org/docs/rules/no-alert)
* [no-array-constructor](http://eslint.org/docs/rules/no-array-constructor)
* [no-caller](http://eslint.org/docs/rules/no-caller)
* [no-catch-shadow](http://eslint.org/docs/rules/no-catch-shadow)
* [no-empty-label](http://eslint.org/docs/rules/no-empty-label)
* [no-eval](http://eslint.org/docs/rules/no-eval)
* [no-extend-native](http://eslint.org/docs/rules/no-extend-native)
* [no-extra-bind](http://eslint.org/docs/rules/no-extra-bind)
* [no-extra-strict](http://eslint.org/docs/rules/no-extra-strict)
* [no-implied-eval](http://eslint.org/docs/rules/no-implied-eval)
* [no-iterator](http://eslint.org/docs/rules/no-iterator)
* [no-label-var](http://eslint.org/docs/rules/no-label-var)
* [no-labels](http://eslint.org/docs/rules/no-labels)
* [no-lone-blocks](http://eslint.org/docs/rules/no-lone-blocks)
* [no-loop-func](http://eslint.org/docs/rules/no-loop-func)
* [no-multi-spaces](http://eslint.org/docs/rules/no-multi-spaces)
* [no-multi-str](http://eslint.org/docs/rules/no-multi-str)
* [no-native-reassign](http://eslint.org/docs/rules/no-native-reassign)
* [no-new](http://eslint.org/docs/rules/no-new)
* [no-new-func](http://eslint.org/docs/rules/no-new-func)
* [no-new-object](http://eslint.org/docs/rules/no-new-object)
* [no-new-wrappers](http://eslint.org/docs/rules/no-new-wrappers)
* [no-octal-escape](http://eslint.org/docs/rules/no-octal-escape)
* [no-process-exit](http://eslint.org/docs/rules/no-process-exit)
* [no-proto](http://eslint.org/docs/rules/no-proto)
* [no-return-assign](http://eslint.org/docs/rules/no-return-assign)
* [no-script-url](http://eslint.org/docs/rules/no-script-url)
* [no-sequences](http://eslint.org/docs/rules/no-sequences)
* [no-shadow](http://eslint.org/docs/rules/no-shadow)
* [no-shadow-restricted-names](http://eslint.org/docs/rules/no-shadow-restricted-names)
* [no-spaced-func](http://eslint.org/docs/rules/no-spaced-func)
* [no-trailing-spaces](http://eslint.org/docs/rules/no-trailing-spaces)
* [no-undef-init](http://eslint.org/docs/rules/no-undef-init)
* [no-underscore-dangle](http://eslint.org/docs/rules/no-underscore-dangle)
* [no-unused-expressions](http://eslint.org/docs/rules/no-unused-expressions)
* [no-use-before-define](http://eslint.org/docs/rules/no-use-before-define)
* [no-with](http://eslint.org/docs/rules/no-with)
* [no-wrap-func](http://eslint.org/docs/rules/no-wrap-func)
* [camelcase](http://eslint.org/docs/rules/camelcase)
* [comma-spacing](http://eslint.org/docs/rules/comma-spacing)
* [consistent-return](http://eslint.org/docs/rules/consistent-return)
* [curly](http://eslint.org/docs/rules/curly)
* [dot-notation](http://eslint.org/docs/rules/dot-notation)
* [eol-last](http://eslint.org/docs/rules/eol-last)
* [eqeqeq](http://eslint.org/docs/rules/eqeqeq)
* [key-spacing](http://eslint.org/docs/rules/key-spacing)
* [new-cap](http://eslint.org/docs/rules/new-cap)
* [new-parens](http://eslint.org/docs/rules/new-parens)
* [quotes](http://eslint.org/docs/rules/quotes)
* [semi](http://eslint.org/docs/rules/semi)
* [semi-spacing](http://eslint.org/docs/rules/semi-spacing)
* [space-infix-ops](http://eslint.org/docs/rules/space-infix-ops)
* [space-return-throw-case](http://eslint.org/docs/rules/space-return-throw-case)
* [space-unary-ops](http://eslint.org/docs/rules/space-unary-ops)
* [strict](http://eslint.org/docs/rules/strict)
* [yoda](http://eslint.org/docs/rules/yoda)

See also: the [full diff](https://github.com/eslint/eslint/commit/e3e9dbd9876daf4bdeb4e15f8a76a9d5e6e03e39#diff-b01a5cfd9361ca9280a460fd6bb8edbbL1) where the defaults were changed.

也可以查看 [full diff](https://github.com/eslint/eslint/commit/e3e9dbd9876daf4bdeb4e15f8a76a9d5e6e03e39#diff-b01a5cfd9361ca9280a460fd6bb8edbbL1)，了解哪些默认的配置更改了。

Here's a configuration file with the closest equivalent of the old defaults:

这里是和旧的版本接近一致的配置。

```json
{
    "extends": "eslint:recommended",
    "rules": {
        "no-alert": 2,
        "no-array-constructor": 2,
        "no-caller": 2,
        "no-catch-shadow": 2,
        "no-empty-label": 2,
        "no-eval": 2,
        "no-extend-native": 2,
        "no-extra-bind": 2,
        "no-implied-eval": 2,
        "no-iterator": 2,
        "no-label-var": 2,
        "no-labels": 2,
        "no-lone-blocks": 2,
        "no-loop-func": 2,
        "no-multi-spaces": 2,
        "no-multi-str": 2,
        "no-native-reassign": 2,
        "no-new": 2,
        "no-new-func": 2,
        "no-new-object": 2,
        "no-new-wrappers": 2,
        "no-octal-escape": 2,
        "no-process-exit": 2,
        "no-proto": 2,
        "no-return-assign": 2,
        "no-script-url": 2,
        "no-sequences": 2,
        "no-shadow": 2,
        "no-shadow-restricted-names": 2,
        "no-spaced-func": 2,
        "no-trailing-spaces": 2,
        "no-undef-init": 2,
        "no-underscore-dangle": 2,
        "no-unused-expressions": 2,
        "no-use-before-define": 2,
        "no-with": 2,
        "camelcase": 2,
        "comma-spacing": 2,
        "consistent-return": 2,
        "curly": [2, "all"],
        "dot-notation": [2, { "allowKeywords": true }],
        "eol-last": 2,
        "no-extra-parens": [2, "functions"],
        "eqeqeq": 2,
        "key-spacing": [2, { "beforeColon": false, "afterColon": true }],
        "new-cap": 2,
        "new-parens": 2,
        "quotes": [2, "double"],
        "semi": 2,
        "semi-spacing": [2, {"before": false, "after": true}],
        "space-infix-ops": 2,
        "space-return-throw-case": 2,
        "space-unary-ops": [2, { "words": true, "nonwords": false }],
        "strict": [2, "function"],
        "yoda": [2, "never"]
    }
}
```

## Removed Rules
## 移除的规则

Over the past several releases, we have been deprecating rules and introducing new rules to take their place. The following is a list of the removed rules and their replacements:

在过去的一些发布中，我们已经废弃了一些规则并且引入了新的规则替代它们。下面的列表罗列了已经废弃的规则和它们对应的替代规则：

* [generator-star](http://eslint.org/docs/rules/generator-star) is replaced by [generator-star-spacing](http://eslint.org/docs/rules/generator-star-spacing)
* [global-strict](http://eslint.org/docs/rules/global-strict) is replaced by [strict](http://eslint.org/docs/rules/strict)
* [no-comma-dangle](http://eslint.org/docs/rules/no-comma-dangle) is replaced by [comma-dangle](http://eslint.org/docs/rules/comma-dangle)
* [no-empty-class](http://eslint.org/docs/rules/no-empty-class) is replaced by [no-empty-character-class](http://eslint.org/docs/rules/no-empty-character-class)
* [no-extra-strict](http://eslint.org/docs/rules/no-extra-strict) is replaced by [strict](http://eslint.org/docs/rules/strict)
* [no-reserved-keys](http://eslint.org/docs/rules/no-reserved-keys) is replaced by [quote-props](http://eslint.org/docs/rules/quote-props)
* [no-space-before-semi](http://eslint.org/docs/rules/no-space-before-semi) is replaced by [semi-spacing](http://eslint.org/docs/rules/semi-spacing)
* [no-wrap-func](http://eslint.org/docs/rules/no-wrap-func) is replaced by [no-extra-parens](http://eslint.org/docs/rules/no-extra-parens)
* [space-after-function-name](http://eslint.org/docs/rules/space-after-function-name) is replaced by [space-before-function-paren](http://eslint.org/docs/rules/space-before-function-paren)
* [space-before-function-parentheses](http://eslint.org/docs/rules/space-before-function-parentheses) is replaced by [space-before-function-paren](http://eslint.org/docs/rules/space-before-function-paren)
* [space-in-brackets](http://eslint.org/docs/rules/space-in-brackets) is replaced by[object-curly-spacing](http://eslint.org/docs/rules/object-curly-spacing) and [array-bracket-spacing](http://eslint.org/docs/rules/array-bracket-spacing)
* [space-unary-word-ops](http://eslint.org/docs/rules/space-unary-word-ops) is replaced by [space-unary-ops](http://eslint.org/docs/rules/space-unary-ops)
* [spaced-line-comment](http://eslint.org/docs/rules/spaced-line-comment) is replaced by [spaced-comment](http://eslint.org/docs/rules/spaced-comment)

**To address:** You'll need to update your rule configurations to use the new rules. ESLint v1.0.0 will also warn you when you're using a rule that has been removed and will suggest the replacement rules. Hopefully, this will result in few surprises during the upgrade process.

**To address:** 你可能需要更新你的配置文件，从而确保使用新的规则。 当你使用废弃的规则时，ESLint v1.0.0 也会警告你并且建议你使用对应的替代规则。希望，这会成为升级过程中的惊喜。

## Column Numbers are 1-based

From the beginning, ESLint has reported errors using 0-based columns because that's what Esprima, and later Espree, reported. However, most tools and editors use 1-based columns, which made for some tricky integrations with ESLint. In v1.0.0, we've switched over to reporting errors using 1-based columns to fall into line with the tools developers use everyday.

从一开始，由于 Esprima 和 之后的 Espree，ESLint 都是使用 0-based columns 报告错误。然而大多数的工具和编辑器使用 1-based columns，这会给 ESLint 的集成带来一些问题。在1.0.0，为了与开发人员每天使用的工具一致，我们使用 1-based columns 报告错误。

**To address:** If you've created an editor integration, or a tool that had to correct the column number, you'll need to update to just pass through the column number from ESLint. Otherwise, no change is necessary.

**To address:** 如果你已经已正确的列数将 ESLint 集成到编辑器或工具中，你只需要更新 ESLint 的列数。否则，没有更改是必须的。

## No Longer Exporting cli

## cli 对象不会被暴露

In 0.x, the `cli` object was exported for use by external tools. It was later deprecated in favor of `CLIEngine`. In v1.0.0, we are no longer exporting `cli` as it should not be used by external tools. This will break existing tools that make use of it.

在 0.x，`cli`被暴露供一些外部的工具使用。今后将会废弃。在1.0.0，cli 不会暴露供外部工具使用了。这将会让先有得工具不能够继续使用。

**To address:** If you are using the exported `cli` object, switch to using `CLIEngine` instead.

**To address:** 如果你仍然在使用暴露的 `cli` 对象，使用 `CLIEngine` 对象替代它。

## Deprecating eslint-tester

## 废弃 eslint-tester

The `eslint-tester` module, which has long been the primary tester for ESLint rules, has now been moved into the `eslint` module. This was the result of a difficult relationship between these two modules that created circular dependencies and was causing a lot of problems in rule tests. Moving the tester into the `eslint` module fixed a lot of those issues.

很长一段时间，`eslint-tester` 模块都是主要的ESLint 规则测试工具，现在 `eslint-tester` 模块会迁移到 `eslint` 模块中。这是因为这两个模块间的混乱的关系会导致循环依赖的发生同时在规则测试中会引起许多问题。将这个模块移到 `eslint` 模块中会解决这个问题。

The replacement for `eslint-tester` is called `RuleTester`. It's a simplified version of `ESLintTester` that's designed to work with any testing framework. This object is exposed by the package.

`eslint-tester` 的替代者是 `RuleTester`。 它是一个简化版的 `ESLintTester`，它可以和任何测试框架工作，这个对象被包暴露。


**To address:** Convert all of your rule tests to use `RuleTester`. If you have this as a test using `ESLintTester`:
**To address:** 让所有的规则测试都使用 `RuleTester`。如果你还是这样使用 `ESLintTester` 对规则测试：

```js
var eslint = require("../../../lib/eslint"),
    ESLintTester = require("eslint-tester");

var eslintTester = new ESLintTester(eslint);
eslintTester.addRuleTest("lib/rules/your-rule", {
    valid: [],
    invalid: []
});
```

Then you can change to:

那么你必须修改成这样：

```js
var rule = require("../../../lib/rules/your-rule"),
    RuleTester = require("eslint").RuleTester;

var ruleTester = new RuleTester();
ruleTester.run("your-rule", rule, {
    valid: [],
    invalid: []
});
```
