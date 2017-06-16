---
title: no-mixed-spaces-and-tabs - Rules
layout: doc
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# disallow mixed spaces and tabs for indentation (no-mixed-spaces-and-tabs)

# 禁止使用 空格 和 tab 混合缩进 (no-mixed-spaces-and-tabs)

(recommended) The `"extends": "eslint:recommended"` property in a configuration file enables this rule.

(recommended) 配置文件中的 `"extends": "eslint:recommended"` 属性启用了此规则。

Most code conventions require either tabs or spaces be used for indentation. As such, it's usually an error if a single line of code is indented with both tabs and spaces.

大多数代码约定要求使用空格或 tab 进行缩进。因此，一行代码同时混有 tab 缩进和空格缩进，通常是错误的。

## Rule Details

This rule disallows mixed spaces and tabs for indentation.

该规则禁止使用 空格 和 tab 混合缩进。

Examples of **incorrect** code for this rule:

**错误** 代码示例：

```js
/*eslint no-mixed-spaces-and-tabs: "error"*/

function add(x, y) {
// --->..return x + y;

      return x + y;
}

function main() {
// --->var x = 5,
// --->....y = 7;

    var x = 5,
        y = 7;
}
```

Examples of **correct** code for this rule:

**正确** 代码示例：

```js
/*eslint no-mixed-spaces-and-tabs: "error"*/

function add(x, y) {
// --->return x + y;
    return x + y;
}
```

## Options

This rule has a string option.

该规则有一个字符串选项。

* `"smart-tabs"` allows mixed spaces and tabs when the latter are used for alignment.
* `"smart-tabs"` 当 tab 是为了对齐，允许混合使用空格和 tab。

### smart-tabs

Examples of **correct** code for this rule with the `"smart-tabs"` option:

选项 `"smart-tabs"` 的 **正确** 代码示例：

```js
/*eslint no-mixed-spaces-and-tabs: ["error", "smart-tabs"]*/

function main() {
// --->var x = 5,
// --->....y = 7;

    var x = 5,
        y = 7;
}
```


## Further Reading

* [Smart Tabs](http://www.emacswiki.org/emacs/SmartTabs)

## Version

This rule was introduced in ESLint 0.7.1.

该规则在 ESLint 0.7.1 中被引入。

## Resources

* [Rule source](https://github.com/eslint/eslint/tree/master/lib/rules/no-mixed-spaces-and-tabs.js)
* [Documentation source](https://github.com/eslint/eslint/tree/master/docs/rules/no-mixed-spaces-and-tabs.md)
