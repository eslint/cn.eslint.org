---
title: Working with Plugins
layout: doc
edit_link: https://github.com/eslint/eslint/edit/master/docs/developer-guide/working-with-plugins.md

---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# Working with Plugins

Each plugin is an npm module with a name in the format of `eslint-plugin-<plugin-name>`, such as `eslint-plugin-jquery`. You can also use scoped packages in the format of `@<scope>/eslint-plugin-<plugin-name>` such as `@jquery/eslint-plugin-jquery`.

每个插件是一个命名格式为 `eslint-plugin-<plugin-name>` 的 npm 模块，比如 `eslint-plugin-jquery`。你也可以用这样的格式 `@<scope>/eslint-plugin-<plugin-name>` 限定在包作用域下，比如 `@jquery/eslint-plugin-jquery`。

## Create a Plugin

The easiest way to start creating a plugin is to use the [Yeoman generator](https://www.npmjs.com/package/generator-eslint). The generator will guide you through setting up the skeleton of a plugin.

创建一个插件最简单的方式是使用 [Yeoman generator](https://www.npmjs.com/package/generator-eslint)。它将引导你完成插件框架的设置。

### Rules in Plugins

Plugins can expose additional rules for use in ESLint. To do so, the plugin must export a `rules` object containing a key-value mapping of rule ID to rule. The rule ID does not have to follow any naming convention (so it can just be `dollar-sign`, for instance).

在 ESLint 中，插件可以暴露额外的规则以供使用。为此，插件必须输出一个 `rules`对象，包含规则 ID 和对应规则的一个键值对。这个规则 ID 不需要遵循任何命名规范（所以，比如，它可以是 `dollar-sign`）。

```js
module.exports = {
    rules: {
        "dollar-sign": {
            create: function (context) {
                // rule implementation ...
            }
        }
    }
};
```

To use the rule in ESLint, you would use the unprefixed plugin name, followed by a slash, followed by the rule name. So if this plugin were named `eslint-plugin-myplugin`, then in your configuration you'd refer to the rule by the name `myplugin/dollar-sign`. Example: `"rules": {"myplugin/dollar-sign": 2}`.

如果要在 ESLint 中使用插件中的规则，你可以使用不带前缀的插件名，后跟一个 `/`，然后是规则名。所以如果这个插件是 `eslint-plugin-myplugin`，那么在你的配置中你可以使用 `myplugin/dollar-sign` 来引用其中的规则。示例：`"rules": {"myplugin/dollar-sign": "error"}`。

### Environments in Plugins

Plugins can expose additional environments for use in ESLint. To do so, the plugin must export an `environments` object. The keys of the `environments` object are the names of the different environments provided and the values are the environment settings. For example:

插件可以暴露额外的环境以在 ESLint 中使用。为此，插件必须输出一个 `environments` 对象。`environments` 对象的 key 是不同环境提供的名字，值是不同环境的设置。例如：

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

在这个插件中，定义了一个 `jquery` 环境。为了在 ESLint 中使用这个环境，你可以使用不带前缀的插件名，后跟一个 `/`，然后是环境名。所以如果这个插件是 `eslint-plugin-myplugin`，那么在你的配置中设置环境为 `myplugin/jquery`。

Plugin environments can define the following objects:

插件环境定义以下对象：

1. `globals` - acts the same `globals` in a configuration file. The keys are the names of the globals and the values are `true` to allow the global to be overwritten and `false` to disallow.
1. `globals` - 同配置文件中的 `globals` 一样。key 是全局变量的名字，值为 `true`允许全局变量被覆盖，`false` 不允许覆盖。
1. `parserOptions` - acts the same as `parserOptions` in a configuration file.
1. `parserOptions` - 同配置文件中的 `parserOptions` 一样。

### Processors in Plugins

You can also create plugins that would tell ESLint how to process files other than JavaScript. In order to create a processor, the object that is exported from your module has to conform to the following interface:

你也可以创建插件告诉 ESLint 如何处理 JavaScript 之外的文件。为了创建一个处理器，从你的模块中输出的对象必须符合以下接口：

```js
module.exports = {
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
                return messages[0];
            },

            supportsAutofix: true // (optional, defaults to false)
        }
    }
};
```

The `preprocess` method takes the file contents and filename as arguments, and returns an array of strings to lint. The strings will be linted separately but still be registered to the filename. It's up to the plugin to decide if it needs to return just one part, or multiple pieces. For example in the case of processing `.html` files, you might want to return just one item in the array by combining all scripts, but for `.md` file where each JavaScript block might be independent, you can return multiple items.

`preprocess` 将文件内容和文件名称作为参数，返回一个要检查的字符串数组。这些字符串将被分别检查，但仍要注册到文件名。决定它需要返回的只是一部分还是多个块，取决于这个插件。例如，在处理`.html`文件时，通过合并所有的脚本，你可能想要返回数组中的一项，但是对于`.md`文件，每个 JavaScript 块可能是独立的，你可以返回多个项。

The `postprocess` method takes a two-dimensional array of arrays of lint messages and the filename. Each item in the input array corresponds to the part that was returned from the `preprocess` method. The `postprocess` method must adjust the locations of all errors to correspond to locations in the original, unprocessed code, and aggregate them into a single flat array and return it.

`postprocess` 方法接受一个二维数组，包含检测消息和文件名。输入数组中的每一项都对应从 `preprocess` 方法返回的部分。`preprocess` 方法必须调整所有错误的位置，使其与原始的未处理的代码中的位置相对应，并将它们聚合成一个打平的数组并返回。

Reported problems have the following location information:

报告的问题有以下位置信息：

```typescript
{
    line: number,
    column: number,

    endLine?: number,
    endColumn?: number
}
```

By default, ESLint will not perform autofixes when a processor is used, even when the `--fix` flag is enabled on the command line. To allow ESLint to autofix code when using your processor, you should take the following additional steps:

默认情况下，当使用处理器时，ESLint 不会执行自动修复，即使在命令行上启用了 `--fix` 标志。要允许 ESLint 在使用处理器时自动修复代码，你应该采取以下额外步骤：

1.Update the `postprocess` method to additionally transform the `fix` property of reported problems. All autofixable problems will have a `fix` property, which is an object with the following schema:

1.更新 `postprocess` 方法，以额外转换报告问题的 `fix` 属性。所有可自动修复的问题都有一个 `fix` 属性，它是一个对象，模式如下:

```js
{
    range: [number, number],
    text: string
}
```

The `range` property contains two indexes in the code, referring to the start and end location of a contiguous section of text that will be replaced. The `text` property refers to the text that will replace the given range.

`range` 属性在代码中包含两个索引，表示将被替换的连续文本段的开始和结束位置。`text` 属性引用将替换给定范围的文本。

In the initial list of problems, the `fix` property will refer to a fix in the processed JavaScript. The `postprocess` method should transform the object to refer to a fix in the original, unprocessed file.

在最初的问题列表中，`fix` 属性将引用处理过的 JavaScript 中的修复。`postprocess` 方法应该将对象转换为引用原始的未处理的文件中的修复。

2.Add a `supportsAutofix: true` property to the processor.

2.向处理器添加 `supportsAutofix: true` 属性。

You can have both rules and processors in a single plugin. You can also have multiple processors in one plugin.
To support multiple extensions, add each one to the `processors` element and point them to the same object.

你可以在一个插件中同时拥有规则和处理器。你也可以一个插件中拥有多个处理器。
要支持多个扩展，请将每一个处理器添加到 `processors` 元素，然后将它们指向同一个对象。

### Configs in Plugins

You can bundle configurations inside a plugin by specifying them under the `configs` key. This can be useful when you want to provide not just code style, but also some custom rules to support it. Multiple configurations are supported per plugin. Note that it is not possible to specify a default configuration for a given plugin and that users must specify in their configuration file when they want to use one.

你可以在一个插件中在 `configs` 键下指定打包的配置。当你想提供不止代码风格，而且希望提供一些自定义规则来支持它时，会非常有用。每个插件支持多配置。注意不可能为给定的插件指定默认配置，当用户想要使用一个插件时，必须在配置文件中指定。

```js
// eslint-plugin-myPlugin

module.exports = {
    configs: {
        myConfig: {
            plugins: ["myPlugin"],
            env: ["browser"],
            rules: {
                semi: "error",
                "myPlugin/my-rule": "error",
                "eslint-plugin-myPlugin/another-rule": "error"
            }
        },
        myOtherConfig: {
            plugins: ["myPlugin"],
            env: ["node"],
            rules: {
                "myPlugin/my-rule": "off",
                "eslint-plugin-myPlugin/another-rule": "off"
                "eslint-plugin-myPlugin/yet-another-rule": "error"
            }
        }
    }
};
```

If the example plugin above were called `eslint-plugin-myPlugin`, the `myConfig` and `myOtherConfig` configurations would then be usable by extending off of `"plugin:myPlugin/myConfig"` and `"plugin:myPlugin/myOtherConfig"`, respectively.

如果上面的示例插件名为 `eslint-plugin-myPlugin`，那么 `myConfig` 和 `myOtherConfig` 配置可以分别从 `"plugin:myPlugin/myConfig"` 和 `"plugin:myPlugin/myOtherConfig"` 扩展出来。

```json
{
    "extends": ["plugin:myPlugin/myConfig"]
}

```

**Note:** Please note that configuration will not enable any of the plugin's rules by default, and instead should be treated as a standalone config. This means that you must specify your plugin name in the `plugins` array as well as any rules you want to enable that are part of the plugin. Any plugin rules must be prefixed with the short or long plugin name. See [Configuring Plugins](../user-guide/configuring#configuring-plugins) for more information.

**注意：**在默认情况下，配置不会启用插件中的任何规则，而且应该作为一个独立的配置来处理。和意味着，你必须在 `plugins` 数组中指定插件名和任何你想使用的插件中的规则。任何插件中的规则必须带有插件名或其简写前缀。更多详细信息，请查看 [Configuring Plugins](../user-guide/configuring)。

### Peer Dependency

To make clear that the plugin requires ESLint to work correctly you have to declare ESLint as a `peerDependency` in your `package.json`.
The plugin support was introduced in ESLint version `0.8.0`. Ensure the `peerDependency` points to ESLint `0.8.0` or later.

为了明确插件需要 ESLint 才能正常运行，你必须在你的 `package.json` 中声明将 ESLint 作为一个 `peerDependency`。对插件的支持在 ESLint `0.8.0` 版本中被引入。要确保 `peerDependency` 指向 ESLint `0.8.0` 或之后的版本。

```json
{
    "peerDependencies": {
        "eslint": ">=0.8.0"
    }
}
```

### Testing

ESLint provides the [`RuleTester`](/docs/developer-guide/nodejs-api#ruletester) utility to make it easy to test the rules of your plugin.

ESLint 提供了 [`RuleTester`](/docs/developer-guide/nodejs-api#ruletester) 实用工具可以轻松地测试你插件中的规则。

## Share Plugins

In order to make your plugin available to the community you have to publish it on npm.

为了让你的插件在社区中可用，你需要将它发布到 npm。

Recommended keywords:

推荐的关键字：

* `eslint`
* `eslint`
* `eslintplugin`
* `eslintplugin`

Add these keywords into your `package.json` file to make it easy for others to find.

将这些关键字添加到你的 `package.json` 中，会让其他人更容易找到它。

## Further Reading

* [npm Developer Guide](https://docs.npmjs.com/misc/developers)
