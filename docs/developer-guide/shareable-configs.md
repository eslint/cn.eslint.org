---
title: Shareable Configs
layout: doc
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# Shareable Configs

The configuration that you have in your `.eslintrc` file is an important part of your project, and as such, you may want to share it with other projects or people. Shareable configs allow you to publish your configuration settings on [npm](https://npmjs.com) and have others download and use it in their ESLint projects.

包含配置信息的 `.eslintrc` 文件是你的项目中重要的部分，正因为这样，你可能想要将你的配置信息分享给其他项目或人。可分享的配置允许你在 [npm](https://npmjs.com) 发布你的配置设置并且其他人可以在他的 ESLint 项目中下载使用这些配置。

## Creating a Shareable Config

Shareable configs are simply npm packages that export a configuration object. To start, [create a Node.js module](https://docs.npmjs.com/getting-started/creating-node-modules) like you normally would. Make sure the module name begins with `eslint-config-`, such as `eslint-config-myconfig`. 

可分享的配置只是导出一个配置对象 npm 包 。首先，像你通常做的那样 [创建一个 Node.js 模块](https://docs.npmjs.com/getting-started/creating-node-modules)。确保模块名称以 `eslint-config-` 开头，例如 `eslint-config-myconfig`。

npm [scoped modules](https://docs.npmjs.com/misc/scope) are also supported, by naming or prefixing the module with `@scope/eslint-config`, such as `@scope/eslint-config` or `@scope/eslint-config-myconfig`.

npm [scoped modules](https://docs.npmjs.com/misc/scope) 也是支持的，以 `@scope/eslint-config` 前缀命名，比如 `@scope/eslint-config` 或 `@scope/eslint-config-myconfig`。

Create a new `index.js` file and export an object containing your settings:

创建一个新的 `index.js` 文件并 export 一个包含配置的对象。

```js
module.exports = {

    globals: {
        MyGlobal: true
    },

    rules: {
        semi: [2, "always"]
    }

};
```

Since `index.js` is just JavaScript, you can optionally read these settings from a file or generate them dynamically.

因为 `index.js` 只是 JavaScript，你可以选择从文件读取读取这些配置或者动态生成它们。

## Publishing a Shareable Config

Once your shareable config is ready, you can [publish to npm](https://docs.npmjs.com/getting-started/publishing-npm-packages) to share with others. We recommend using the `eslint` and `eslintconfig` keywords so others can easily find your module.

一旦可分享的配置设置好，你可以 [发布到 npm](https://docs.npmjs.com/getting-started/publishing-npm-packages) 分享给其他人。我们建议使用 `eslint` 和 `eslintconfig` 关键字方便其他人很容易的找到你的模块。

You should declare your dependency on eslint in `package.json` using the [peerDependencies](https://docs.npmjs.com/files/package.json#peerdependencies) field. The recommended way to declare a dependency for future proof compatibility is with the ">=" range syntax, using the lowest required eslint version. For example:

你应该在 `package.json` 中用 [peerDependencies](https://docs.npmjs.com/files/package.json#peerdependencies) 字段声明你依赖的 eslint。推荐使用 ">=" 范围语法，即使用最低要求的 eslint 版本，声明该
依赖以向后兼容。

```
peerDependencies: {
    "eslint": ">= 3"
}
```

You can also test your shareable config on your computer before publishing by linking your module globally. Type:

在发布到 npm 之前，你可以将你的模块 link 到全局从而测试你的可分享设置模块。像这样:

```bash
npm link
```

Then, in your project that wants to use your shareable config, type:

随后，在你的项目中使用你的可分享配置模块，像这样：

```bash
npm link eslint-config-myconfig
```

Be sure to replace `eslint-config-myconfig` with the actual name of your module.

确保使用你的模块的实际的名称替换 `eslint-config-myconfig`。

## Using a Shareable Config

Shareable configs are designed to work with the `extends` feature of `.eslintrc` files. Instead of using a file path for the value of `extends`, use your module name. For example:

可分享配置被设计和 `.eslintrc` 文件的 `extends` 特性一起使用。使用模块名称作为 `extends` 取值而不是文件路径。例如：

```json
{
    "extends": "eslint-config-myconfig"
}
```

You can also omit the `eslint-config-` and it will be automatically assumed by ESLint:

你也可以忽略 `eslint-config-` 前缀，ESLint 会自动找到。例如：

```json
{
    "extends": "myconfig"
}
```

### npm scoped modules

npm [scoped modules](https://docs.npmjs.com/misc/scope) are also supported in a number of ways.

有多种方式支持 npm [scoped modules](https://docs.npmjs.com/misc/scope)。

By using the module name:

通过使用模块名：

```json
{
    "extends": "@scope/eslint-config"
}
```

You can also omit the `eslint-config` and it will be automatically assumed by ESLint:

你也可以省略 `eslint-config`，ESLint 会自动处理：

```json
{
    "extends": "@scope"
}
```

The module name can also be customized, just note that when using [scoped modules](https://docs.npmjs.com/misc/scope) it is not possible to omit the `eslint-config-` prefix. Doing so would result in package naming conflicts, and thus in resolution errors in most of cases. For example a package named `@scope/eslint-config-myconfig` vs `@scope/my-config`, since both are valid scoped package names, the configuration should be specified as:

模块名也可以定制，只是要注意的是，当使用 [scoped modules](https://docs.npmjs.com/misc/scope) 时，就不能省略 `eslint-config-` 前缀了。否则会导致包名冲突，从而导致大多数情况下的解析错误。比如，一个名为  `@scope/eslint-config-myconfig` 的包和 `@scope/my-config`，由于两者都是有效的特定范围的包名，所以应该这样指定配置：

```json
{
    "extends": "@scope/eslint-config-myconfig"
}
```

You can override settings from the shareable config by adding them directly into your `.eslintrc` file.

你可以在你的 `.eslintrc` 文件中直接添加规则覆盖可分享的配置。 

## Sharing Multiple Configs

It's possible to share multiple configs in the same npm package. You can specify a default config for the package by following the directions in the first section. You can specify additional configs by simply adding a new file to your npm package and then referencing it from your ESLint config.

你可能想分享多个配置在同一个 npm 包中。你可以像第一个章节那样为 npm 包指定默认的配置。你可以指定额外的配置通过在你的 npm 包中添加一个新文件并在你的 ESLint 配置中引用它。

As an example, you can create a file called `my-special-config.js` in the root of your npm package and export a config, such as:

例如，你可以创建一个叫 `my-special-config.js` 在 npm 包的根目录并且导出一个配置对象。如下：

```js
module.exports = {
    rules: {
        quotes: [2, "double"];
    }
};
```

Then, assuming you're using the package name `eslint-config-myconfig`, you can access the additional config via:

随后，假设你使用的包的名称是 `eslint-config-myconfig`，你可以访问额外的配置通过：

```json
{
    "extends": "myconfig/my-special-config"
}
```

When using [scoped modules](https://docs.npmjs.com/misc/scope) it is not possible to omit the `eslint-config` namespace. Doing so would result in resolution errors as explained above. Assuming the package name is `@scope/eslint-config`, the additional config can be accessed as:

当使用 [scoped modules](https://docs.npmjs.com/misc/scope) 时，不能省略 `eslint-config` 命名空间。如果省略，就会导致解析错误，如上解释。假设包名为 `@scope/eslint-config`，可如下配置：

```json
{
    "extends": "@scope/eslint-config/my-special-config"
}
```

Note that you can leave off the `.js` from the filename. In this way, you can add as many additional configs to your package as you'd like.

注意你可以从文件名称中去掉 `.js`。使用这种方法，你可以按照你想要的添加许多额外的配置到你的 npm 包中。

**Important:** We strongly recommend always including a default config for your plugin to avoid errors.

**重要：**我们强烈的建议为你的插件包含默认的配置从而避免错误。

## Local Config File Resolution

If you need to make multiple configs that can extend from each other and live in different directories, you can create a single shareable config that handles this scenario.

如果你想要创建多个可以互相引用并且放置在不同文件夹的配置文件。你可以创建一个简单的可分享配置处理这个场景。

As an example, let's assume you're using the package name `eslint-config-myconfig` and your package looks something like this:

例如，假设你使用一个名称为 `eslint-config-myconfig` 的包，你的包看起来像这样：

```text
myconfig
├── index.js
└─┬ lib
  ├── defaults.js
  ├── dev.js
  ├── ci.js
  └─┬ ci
    ├── frontend.js
    ├── backend.js
    └── common.js
```

In your `index.js` you can do something like this:

在你的 `index.js` 文件你可以在这样做：

```js
module.exports = require('./lib/ci.js');
```

Now inside your package you have `/lib/defaults.js`, which contains:

现在在你的包的内部有一个 `/lib/defaults.js` 文件，包含：

```js
module.exports = {
    rules: {
        'no-console': 1
    }
};
```

Inside your `/lib/ci.js` you have

`/lib/ci.js` 文件内部是这样的：

```js
module.exports = require('./ci/backend');
```

Inside your `/lib/ci/common.js`

`/lib/ci/common.js` 文件内部是这样的：

```js
module.exports = {
    rules: {
        'no-alert': 2
    },
    extends: 'myconfig/lib/defaults'
};
```

Despite being in an entirely different directory, you'll see that all `extends` must use the full package path to the config file you wish to extend.

尽管在一个完全不同的目录中，你会看到所有的 `extends` 都必须使用你希望扩展的配置文件的完整包路径。

Now inside your `/lib/ci/backend.js`

`/lib/ci/backend.js` 文件内部是这样的：


```js
module.exports = {
    rules: {
        'no-console': 1
    },
    extends: 'myconfig/lib/ci/common'
};
```

In the last file, you'll once again see that to properly resolve your config, you'll need include the full package path.

在最后一个文件中，你会再次看到，要正确地解决你的配置，你需要包含完整的包路径。

## Further Reading

* [npm Developer Guide](https://docs.npmjs.com/misc/developers)
