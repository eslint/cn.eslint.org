---
title: Rule no-mixed-spaces-and-tabs
layout: doc
translator: molee1905
proofreader: molee1905
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# Disallow mixed spaces and tabs for indentation (no-mixed-spaces-and-tabs)

# 不允许空格和tab混合缩进 (no-mixed-spaces-and-tabs)

Most code conventions require either tabs or spaces be used for indentation. As such, it's usually an error if a single line of code is indented with both tabs and spaces.

大多数代码约定要求使用空格或tab进行缩进。因此，一行代码同时混有tab缩进和空格缩进，通常是错误的。

## Rule Details

The `no-mixed-spaces-and-tabs` rule is aimed at flagging any lines of code that are indented with a mixture of tabs and spaces.

该规则旨在标记同时有 tab 缩进和 space 缩进任何一行代码。

## Options

### smart-tabs

This option suppresses warnings about mixed tabs and spaces when the latter are used for alignment only. This technique is called [SmartTabs](http://www.emacswiki.org/emacs/SmartTabs). The option is turned off by default.

该选项取消混合使用tab缩进和空格缩进时的警告，前提是后者的仅仅是为了对齐。这种技术被称为[SmartTabs](http://www.emacswiki.org/emacs/SmartTabs)。该选项默认是关闭的。

You can enable this option by using the following configuration:

你可以通过以下配置开启此选项：

```json
"no-mixed-spaces-and-tabs": ["error", "smart-tabs"]
```

The following patterns are considered problems:

以下模式被认为是有问题的：

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

The following patterns are not considered problems:

以下模式被认为是没有问题的：

```js
/*eslint no-mixed-spaces-and-tabs: "error"*/

function add(x, y) {
// --->return x + y;
    return x + y;
}
```

When the SmartTabs option is enabled the following does not produce a warning:

当 SmartTabs 选项启用时，以下模式不会发出警告：

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
