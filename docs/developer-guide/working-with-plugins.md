---
title: Documentation
layout: doc
translator: molee1905
proofreader: fengnana
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# Working with Plugins

# 使用插件

Each plugin is an npm module with a name in the format of `eslint-plugin-<plugin-name>`, such as `eslint-plugin-jquery`. You can also use scoped packages in the format of `@<scope>/eslint-plugin-<plugin-name>` such as `@jquery/eslint-plugin-jquery`.

每个插件是一个命名格式为`eslint-plugin-<plugin-name>`的 npm 模块，比如`eslint-plugin-jquery`。你也可以用这样的格式`@<scope>/eslint-plugin-<plugin-name>` 限定在包作用域下，比如`@jquery/eslint-plugin-jquery`。

## Create a Plugin

## 创建一个插件

The easiest way to start creating a plugin is to use the [Yeoman generator](https://npmjs.com/package/generator-eslint). The generator will guide you through setting up the skeleton of a plugin.

创建一个插件最简单的方式是使用[Yeoman generator](https://npmjs.com/package/generator-eslint)。它将引导你完成插件框架的设置。

### Rules in Plugins

### 插件中的规则

Plugins can expose additional rules for use in ESLint. To do so, the plugin must export a `rules` object containing a key-value mapping of rule ID to rule. The rule ID does not have to follow any naming convention (so it can just be `dollar-sign`, for instance).

在 ESLint 中，插件可以暴露额外的规则以供使用。为此，插件必须输出一个`rules`对象，包含规则ID和对应规则的一个键值对。这个规则 ID 不需要遵循任何命名规范（所以，比如，它可以是`dollar-sign`）。

```js
module.exports = {
    rules: {
        "dollar-sign": function (context) {
            // rule implementation ...
        }
    }
};
```

To use the rule in ESLint, you would use the unprefixed plugin name, followed by a slash, followed by the rule name. So if this plugin were named `eslint-plugin-myplugin`, then in your configuration you'd refer to the rule by the name `myplugin/dollar-sign`. Example: `"rules": {"myplugin/dollar-sign": 2}`.

### Environments in Plugins

Plugins can expose additional environments for use in ESLint. To do so, the plugin must export an `environments` object. The keys of the `environments` object are the names of the different environments provided and the values are the environment settings. For example:

```js
module.exports = {
    environments: {
        jquery: {
            globals: {
                $: false
            }
        }
    }
};
```

There's a `jquery` environment defined in this plugin. To use the environment in ESLint, you would use the unprefixed plugin name, followed by a slash, followed by the environment name. So if this plugin were named `eslint-plugin-myplugin`, then you would set the environment in your configuration to be `"myplugin/jquery"`.

Plugin environments can define the following objects:

1. `globals` - acts the same `globals` in a configuration file. The keys are the names of the globals and the values are `true` to allow the global to be overwritten and `false` to disallow.
1. `parserOptions` - acts the same as `parserOptions` in a configuration file.

### Processors in Plugins

### 插件中的处理器

You can also create plugins that would tell ESLint how to process files other than JavaScript. In order to create a processor, object that is exported from your module has to conform to the following interface:

你也可以创建插件告诉 ESLint 如何处理 JavaScript 之外的文件。为了创建一个处理器，从你的模块中输出的对象必须符合以下接口：

```js
processors: {

    // assign to the file extension you want (.js, .jsx, .html, etc.)
    ".ext": {
        // takes text of the file and filename
        preprocess: function(text, filename) {
            // here, you can strip out any non-JS content
            // and split into multiple strings to lint

            return [string];  // return an array of strings to lint
        },

        // takes a Message[][] and filename
        postprocess: function(messages, filename) {
            // `messages` argument contains two-dimensional array of Message objects
            // where each top-level array item contains array of lint messages related
            // to the text that was returned in array from preprocess() method

            // you need to return a one-dimensional array of the messages you want to keep
            return [Message];
        }
    }
}
```

The `preprocess` method takes the file contents and filename as arguments, and returns an array of strings to lint. The strings will be linted separately but still be registered to the filename. It's up to the plugin to decide if it needs to return just one part, or multiple pieces. For example in the case of processing `.html` files, you might want to return just one item in the array by combining all scripts, but for `.md` file where each JavaScript block might be independent, you can return multiple items.

`preprocess`将文件内容和文件名称作为参数，返回一个要检查的字符串数组。这些字符串将被分别检查，但仍要注册到文件名。决定它需要返回的只是一部分还是多个块，取决于这个插件。例如，在处理`.html`文件时，通过合并所有的脚本，你可能想要返回数组中的一项，但是对于`.md`文件，每个 JavaScript 块可能是独立的，你可以返回多个项。


The `postprocess` method takes a two-dimensional array of arrays of lint messages and the filename. Each item in the input
array corresponds to the part that was returned from the `preprocess` method. The `postprocess` method must adjust the location of all errors and aggregate them into a single flat array and return it.

`postprocess`方法需要一个二维数组作为参数，用于检查消息和文件名。传入数组中的每一项对应着从`preprocess`方法返回的部分。`postprocess`方法必须调整所有错误的位置并将他们汇集到一个的扁平的数组中，然后返回该数组。

You can have both rules and processors in a single plugin. You can also have multiple processors in one plugin.
To support multiple extensions, add each one to the `processors` element and point them to the same object.

你可以在一个插件中同时有规则和处理器。你也可以一个插件中有多个处理器。
为了支持多个扩展，将每一个处理器添加到`processors`元素，然后将它们指向同一个对象。

### Configs in Plugins

### 插件配置

You can bundle configurations inside a plugin. This can be useful when you want to provide not just code style, but also some custom rules to support it. You can specify configurations under `configs` key. Please note that when exposing configurations, you have to name each one, and there is no default. So your users will have to specify the name of the configuration they want to use.

你可以在插件中包含配置。但你想提供不止代码风格，还有一些自定义规则时，这会非常有用。你可以在`configs`键下指定配置。请注意，当暴露配置时，你需要对它们进行命名，而且是没有默认的。所以，你的用户将需要指定他们想使用的配置的名称。

```js
configs: {
    myConfig: {
        env: ["browser"],
        rules: {
            semi: 2
        }
    }
}
```

**Note:** Please note that configuration will not automatically attach your rules and you have to specify your plugin name and any rules you want to enable that are part of the plugin. See [Configuring Plugins](../user-guide/configuring#configuring-plugins)

### Peer Dependency

### peer 依赖

To make clear that the plugin requires ESLint to work correctly you have to declare ESLint as a `peerDependency` in your `package.json`.
The plugin support was introduced in ESLint version `0.8.0`. Ensure the `peerDependency` points to ESLint `0.8.0` or later.

为了明确插件需要 ESLint 才能正常运行，你必须在你的`package.json`中声明将 ESLint 作为一个`peerDependency`。对插件的支持在 ESLint `0.8.0`版本中被引入。要确保`peerDependency`指向 ESLint `0.8.0`或之后的版本。

```json
{
    "peerDependencies": {
        "eslint": ">=0.8.0"
    }
}
```

### Testing

### 测试

You can test the rules of your plugin [the same way as bundled ESLint rules](working-with-rules) using [`ESLintTester`](https://github.com/eslint/eslint-tester).

你可以使用[`ESLintTester`](https://github.com/eslint/eslint-tester)测试你插件中的规则[同测试 ESLint 规则一样](working-with-rules)。

Example:

示例：

```js
"use strict";

var rule = require("../../../lib/rules/custom-plugin-rule"),
    RuleTester = require("eslint").RuleTester;

var ruleTester = new RuleTester();
ruleTester.run("custom-plugin-rule", rule, {
    valid: [
        "var validVariable = true",
    ],

    invalid: [
        {
            code: "var invalidVariable = true",
            errors: [ { message: "Unexpected invalid variable." } ]
        }
    ]
});
```

## Share Plugins

In order to make your plugin available to the community you have to publish it on npm.

为了让你的插件在社区中可用，你需要将它发布到 npm。

Recommended keywords:

推荐的关键字：

* `eslint`
* `eslintplugin`

Add these keywords into your `package.json` file to make it easy for others to find.

将这些关键字添加到你的`package.json`中，会让其他人更容易找到它。

## Further Reading

* [npm Developer Guide](https://docs.npmjs.com/misc/developers)
