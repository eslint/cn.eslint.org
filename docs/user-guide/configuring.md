---
title: Configuring ESLint
layout: doc
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# Configuring ESLint

ESLint is designed to be completely configurable, meaning you can turn off every rule and run only with basic syntax validation, or mix and match the bundled rules and your custom rules to make ESLint perfect for your project. There are two primary ways to configure ESLint:

ESlint 被设计为是完全可配置的，这意味着你可以关闭每一个规则，只运行基本语法验证，或混合和匹配绑定的规则和自定义规则，以让 ESLint 更适合于你的项目。有两种主要的方式来配置 ESLint：

1. **Configuration Comments** - use JavaScript comments to embed configuration information directly into a file.
1. **Configuration Comments** - 使用 JavaScript 注释把配置信息直接嵌入到一个文件。
1. **Configuration Files** - use a JavaScript, JSON or YAML file to specify configuration information for an entire directory and all of its subdirectories. This can be in the form of an [.eslintrc.*](#configuration-file-formats) file or an `eslintConfig` field in a [`package.json`](https://docs.npmjs.com/files/package.json) file, both of which ESLint will look for and read automatically, or you can specify a configuration file on the [command line](command-line-interface).
1. **Configuration Files** - 使用 JavaScript、JSON 或者 YAML 文件为整个目录和它的子目录指定配置信息。可以用 [.eslintrc.*](#configuration-file-formats) 文件或者在 [`package.json`](https://docs.npmjs.com/files/package.json) 文件里的 `eslintConfig` 字段这两种方式进行配置，ESLint 会查找和自动读取它们，再者，你可以在[命令行](command-line-interface)指定一个配置文件。

There are several pieces of information that can be configured:

有很多信息可以配置：

* **Environments** - which environments your script is designed to run in. Each environment brings with it a certain set of predefined global variables.
* **Environments** - 指定脚本的运行环境。每种环境都有一组特定的预定义全局变量。
* **Globals** - the additional global variables your script accesses during execution.
* **Globals** - 脚本在执行期间访问的额外的全局变量
* **Rules** - which rules are enabled and at what error level.
* **Rules** - 启用的规则及各自的错误级别


All of these options give you fine-grained control over how ESLint treats your code.

所有这些选项让你可以细粒度地控制 ESLint 如何对待你的代码。

## Specifying Parser Options

ESLint allows you to specify the JavaScript language options you want to support. By default, ESLint expects ECMAScript 5 syntax. You can override that setting to enable support for other ECMAScript versions as well as JSX by using parser options.

ESLint 允许你指定你想要支持的 JavaScript 语言选项。默认情况下，ESLint 支持 ECMAScript 5 语法。你可以覆盖该设置启用对 ECMAScript 其它版本和 JSX 的支持。

Please note that supporting JSX syntax is not the same as supporting React. React applies specific semantics to JSX syntax that ESLint doesn't recognize. We recommend using [eslint-plugin-react](https://github.com/yannickcr/eslint-plugin-react) if you are using React and want React semantics.

请注意，对 JSX 语法的支持不用于对 React 的支持。React 适用于特定 ESLint 无法识别的 JSX 语法。如果你正在使用 React 和 想要 React 语义，我们推荐你使用 [eslint-plugin-react](https://github.com/yannickcr/eslint-plugin-react)。

Parser options are set in your `.eslintrc.*` file by using the `parserOptions` property. The available options are:

在 `.eslintrc.*` 文件使用 `parserOptions` 属性设置解析器选项。可用的选项有：

* `ecmaVersion` - set to 3, 5 (default), 6, 7, or 8 to specify the version of ECMAScript syntax you want to use. You can also set to 2015 (same as 6), 2016 (same as 7), or 2017 (same as 8) to use the year-based naming.
* `ecmaVersion` - 设置为 3， 5 (默认)， 6、7 或 8 指定你想要使用的 ECMAScript 版本。你也可以指定为 2015（同 6），2016（同 7），或 2017（同 8）使用年份命名
* `sourceType` - set to `"script"` (default) or `"module"` if your code is in ECMAScript modules.
* `sourceType` - 设置为 `"script"` (默认) 或 `"module"`（如果你的代码是 ECMAScript 模块)。
* `ecmaFeatures` - an object indicating which additional language features you'd like to use:
* `ecmaFeatures` - 这是个对象，表示你想使用的额外的语言特性:
    * `globalReturn` - allow `return` statements in the global scope
    * `globalReturn` - 允许在全局作用域下使用 `return` 语句
    * `impliedStrict` - enable global [strict mode](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode) (if `ecmaVersion` is 5 or greater)
    * `impliedStrict` - 启用全局 [strict mode](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode) (如果 `ecmaVersion` 是 5 或更高)
    * `jsx` - enable [JSX](http://facebook.github.io/jsx/)
    * `jsx` - 启用 [JSX](http://facebook.github.io/jsx/)
    * `experimentalObjectRestSpread` - enable support for the experimental [object rest/spread properties](https://github.com/sebmarkbage/ecmascript-rest-spread) (**IMPORTANT:** This is an experimental feature that may change significantly in the future. It's recommended that you do *not* write rules relying on this functionality unless you are willing to incur maintenance cost when it changes.)
    * `experimentalObjectRestSpread` - 启用对实验性的 [object rest/spread properties](https://github.com/sebmarkbage/ecmascript-rest-spread) 的支持。(**重要：**这是一个实验性的功能,在未来可能会改变明显。 建议你写的规则 **不要**依赖该功能，除非当它发生改变时你愿意承担维护成本。)

Here's an example `.eslintrc.json` file:

`.eslintrc.json` 文件示例：


```json
{
    "parserOptions": {
        "ecmaVersion": 6,
        "sourceType": "module",
        "ecmaFeatures": {
            "jsx": true
        }
    },
    "rules": {
        "semi": 2
    }
}
```

Setting parser options helps ESLint determine what is a parsing error. All language options are `false` by default.

设置解析器选项帮助 ESLint 确定什么是解析错误，所有语言选项默认都是 `false`。

## Specifying Parser

By default, ESLint uses [Espree](https://github.com/eslint/espree) as its parser. You can optionally specify that a different parser should be used in your configuration file so long as the parser meets the following requirements:

ESLint 默认使用[Espree](https://github.com/eslint/espree)作为其解析器，你可以在配置文件中指定一个不同的解析器，只要该解析器符合下列要求：

1. It must be an npm module installed locally.
1. 它必须是本地安装的一个 npm 模块。
1. It must have an Esprima-compatible interface (it must export a `parse()` method).
1. 它必须有兼容 Esprima 的接口（它必须输出一个 `parse()` 方法）
1. It must produce Esprima-compatible AST and token objects.
1. 它必须产出兼容 Esprima 的 AST 和 token 对象。

Note that even with these compatibilities, there are no guarantees that an external parser will work correctly with ESLint and ESLint will not fix bugs related to incompatibilities with other parsers.

注意，即使满足这些兼容性，也不能保证一个外部解析器可以与 ESLint 正常工作，ESLint 也不会修复与其它解析器不兼容的相关 bug。

To indicate the npm module to use as your parser, specify it using the `parser` option in your `.eslintrc` file. For example, the following specifies to use Esprima instead of Espree:

为了表明使用该 npm 模块作为你的解析器，你需要在你的 `.eslintrc` 文件里指定 `parser` 选项。例如，下面的配置指定了 Esprima 作为解析器：

```json
{
    "parser": "esprima",
    "rules": {
        "semi": "error"
    }
}
```

The following parsers are compatible with ESLint:

以下解析器与 ESLint 兼容：

* [Esprima](https://npmjs.com/package/esprima)
* [Esprima](https://npmjs.com/package/esprima)
* [Babel-ESLint](https://npmjs.com/package/babel-eslint) - A wrapper around the [Babel](http://babeljs.io) parser that makes it compatible with ESLint.
* [Babel-ESLint](https://npmjs.com/package/babel-eslint) - 对[Babel](http://babeljs.io)解析器的包装使其与 ESLint 兼容。

Note when using a custom parser, the `parserOptions` configuration property is still required for ESLint to work properly with features not in ECMAScript 5 by default. Parsers are all passed `parserOptions` and may or may not use them to determine which features to enable.

注意，当使用自定义解析器时，为了使 ESLint 在非 ECMAScript 5 特性下正常工作，配置属性 `parserOptions` 仍然是必须的。解析器被传入 `parserOptions`，可能会也可能不会使用它们来决定开启哪个特征。

## Specifying Environments

An environment defines global variables that are predefined. The available environments are:

环境定义了预定义的全局变量。可用的环境有：

* `browser` - browser global variables.
* `browser` - browser 全局变量。
* `node` - Node.js global variables and Node.js scoping.
* `node` - Node.js 全局变量和 Node.js 作用域。
* `commonjs` - CommonJS global variables and CommonJS scoping (use this for browser-only code that uses Browserify/WebPack).
* `commonjs` - CommonJS 全局变量和 CommonJS 作用域 (仅为使用 Browserify/WebPack 写的只支持浏览器的代码)。
* `shared-node-browser` - Globals common to both Node and Browser.
* `shared-node-browser` - Node 和 Browser 通用全局变量。
* `es6` - enable all ECMAScript 6 features except for modules (this automatically sets the `ecmaVersion` parser option to 6).
* `es6` - 支持除模块外所有 ECMAScript 6 特性（该选项会自动设置 `ecmaVersion` 解析器选项为 6）。
* `worker` - web workers global variables.
* `worker` - web workers 全局变量。
* `amd` - defines `require()` and `define()` as global variables as per the [amd](https://github.com/amdjs/amdjs-api/wiki/AMD) spec.
* `amd` - 定义 `require()` 和 `define()` 作为像 [amd](https://github.com/amdjs/amdjs-api/wiki/AMD) 一样的全局变量。
* `mocha` - adds all of the Mocha testing global variables.
* `mocha` - 添加所有的 Mocha 测试全局变量。
* `jasmine` - adds all of the Jasmine testing global variables for version 1.3 and 2.0.
* `jasmine` - 添加所有的 Jasmine 版本 1.3 和 2.0 的测试全局变量。
* `jest` - Jest global variables.
* `jest` - Jest 全局变量。
* `phantomjs` - PhantomJS global variables.
* `phantomjs` - PhantomJS 全局变量。
* `protractor` - Protractor global variables.
* `protractor` - Protractor 全局变量。
* `qunit` - QUnit global variables.
* `qunit` - QUnit 全局变量。
* `jquery` - jQuery global variables.
* `jquery` - jQuery 全局变量。
* `prototypejs` - Prototype.js global variables.
* `prototypejs` - Prototype.js 全局变量。
* `shelljs` - ShellJS global variables.
* `shelljs` - ShellJS 全局变量。
* `meteor` - Meteor global variables.
* `meteor` - Meteor 全局变量。
* `mongo` - MongoDB global variables.
* `mongo` - MongoDB 全局变量。
* `applescript` - AppleScript global variables.
* `applescript` - AppleScript 全局变量。
* `nashorn` - Java 8 Nashorn global variables.
* `nashorn` - Java 8 Nashorn 全局变量。
* `serviceworker` - Service Worker global variables.
* `serviceworker` - Service Worker 全局变量。
* `atomtest` - Atom test helper globals.
* `atomtest` - Atom 测试全局变量。
* `embertest` - Ember test helper globals.
* `embertest` - Ember 测试全局变量。
* `webextensions` - WebExtensions globals.
* `webextensions` - WebExtensions 全局变量。
* `greasemonkey` - GreaseMonkey globals.
* `greasemonkey` - GreaseMonkey 全局变量。

These environments are not mutually exclusive, so you can define more than one at a time.

这些环境并不是相互排斥的，所以你可以一次定义多个。

Environments can be specified inside of a file, in configuration files or using the `--env` [command line](command-line-interface) flag.

可以在一个文件里，在配置文件中或使用 `--env` [命令行](command-line-interface)来指定环境。

To specify environments using a comment inside of your JavaScript file, use the following format:

在你的 JavaScript 文件中使用注释来指定环境，格式如下：

```js
/* eslint-env node, mocha */
```

This enables Node.js and Mocha environments.

该设置启用了 Node.js 和 Mocha 环境。

To specify environments in a configuration file, use the `env` key and specify which environments you want to enable by setting each to `true`. For example, the following enables the browser and Node.js environments:

在配置文件里指定环境，使用 `env`，指定你想启用的环境，设置它们为 `true`。例如，以下示例启用了 browser 和 Node.js 的环境：

```json
{
    "env": {
        "browser": true,
        "node": true
    }
}
```

Or in a `package.json` file

或在 `package.json` 文件中：

```json
{
    "name": "mypackage",
    "version": "0.0.1",
    "eslintConfig": {
        "env": {
            "browser": true,
            "node": true
        }
    }
}
```

And in YAML:

在 YAML 文件中：

```yaml
---
  env:
    browser: true
    node: true
```

If you want to use an environment from a plugin, be sure to specify the plugin name in the `plugins` array and then use the unprefixed plugin name, followed by a slash, followed by the environment name. For example:

如果你想在一个插件中使用一种环境，确保在 `plugins` 数组里指定插件名，插件名不带前缀，后跟一个 `/`，紧随其后的是环境名称。例如：

```json
{
    "plugins": ["example"],
    "env": {
        "example/custom": true
    }
}
```

Or in a `package.json` file

或在 `package.json` 文件中

```json
{
    "name": "mypackage",
    "version": "0.0.1",
    "eslintConfig": {
        "plugins": ["example"],
        "env": {
            "example/custom": true
        }
    }
}
```

And in YAML:

在 YAML 文件中：

```yaml
---
  plugins:
    - example
  env:
    example/custom: true
```

## Specifying Globals

The [no-undef](../rules/no-undef) rule will warn on variables that are accessed but not defined within the same file. If you are using global variables inside of a file then it's worthwhile to define those globals so that ESLint will not warn about their usage. You can define global variables either using comments inside of a file or in the configuration file.

当访问未定义的变量时，[no-undef](../rules/no-undef) 规则将发出警告。如果你想在一个文件里使用全局变量，推荐你定义这些全局变量，这样 ESLint 就不会发出警告了。你可以使用注释或在配置文件中定义全局变量。

To specify globals using a comment inside of your JavaScript file, use the following format:

在你的 JavaScript 文件中，用注释指定全局变量，格式如下：

```js
/* global var1, var2 */
```

This defines two global variables, `var1` and `var2`. If you want to optionally specify that these global variables should never be written to (only read), then you can set each with a `false` flag:

这里定义了两个全局变量：`var1` 和 `var2`。如果你想指定这些变量不应被重写（只读），你可以将它们设置为 `false`：

```js
/* global var1:false, var2:false */
```

To configure global variables inside of a configuration file, use the `globals` key and indicate the global variables you want to use. Set each global variable name equal to `true` to allow the variable to be overwritten or `false` to disallow overwriting. For example:

在配置文件里配置全局变量时，使用 `globals` 指出你要使用的全局变量。设置每个变量等于 `true` 允许变量被重写，或 `false` 不允许被重写。比如：

```json
{
    "globals": {
        "var1": true,
        "var2": false
    }
}
```

And in YAML:

在 YAML 中：

```yaml
---
  globals:
    var1: true
    var2: false
```

These examples allow `var1` to be overwritten in your code, but disallow it for `var2`.

这些例子 `var1` 允许被重写，`var2` 不允许被重写。

**Note:** Enable the [no-global-assign](../rules/no-global-assign) rule to disallow modifications to read-only global variables in your code.

**注意：**启用[no-global-assign](../rules/no-global-assign)规则来禁止对只读的全局变量进行修改。

## Configuring Plugins

ESLint supports the use of third-party plugins. Before using the plugin you have to install it using npm.

ESLint 支持使用第三方插件。在使用插件之前，你必须使用 npm 安装它。

To configure plugins inside of a configuration file, use the `plugins` key, which contains a list of plugin names. The `eslint-plugin-` prefix can be omitted from the plugin name.

在配置文件里配置插件，要使用 `plugins` ，其中包含插件名字的列表。插件名称可以省略 `eslint-plugin-` 前缀。

```json
{
    "plugins": [
        "plugin1",
        "eslint-plugin-plugin2"
    ]
}
```

And in YAML:

在 YAML 中：

```yaml
---
  plugins:
    - plugin1
    - eslint-plugin-plugin2
```

**Note:** A globally-installed instance of ESLint can only use globally-installed ESLint plugins. A locally-installed ESLint can make use of both locally- and globally- installed ESLint plugins.

**注意：**全局安装的 ESLint 只能使用全局安装的插件。本地安装的 ESLint 不仅可以使用本地安装的插件还可以使用全局安装的插件。

## Configuring Rules

ESLint comes with a large number of rules. You can modify which rules your project uses either using configuration comments or configuration files. To change a rule setting, you must set the rule ID equal to one of these values:

ESLint 附带有大量的规则。你可以使用注释或配置文件修改你项目中要使用哪些规则。改变一个规则设置，你必须设置规则 ID 等于这些值之一：
 
* `"off"` or `0` - turn the rule off
* `"off"` 或 `0` - 关闭规则
* `"warn"` or `1` - turn the rule on as a warning (doesn't affect exit code)
* `"warn"` 或 `1` - 开启规则，使用警告级别的错误：`warn` (不会导致程序退出)
* `"error"` or `2` - turn the rule on as an error (exit code is 1 when triggered)
* `"error"` 或 `2` - 开启规则，使用错误级别的错误：`error` (当被触发的时候，程序会退出)

To configure rules inside of a file using configuration comments, use a comment in the following format:

为了在文件注释里配置规则，使用以下格式的注释：

```js
/* eslint eqeqeq: "off", curly: "error" */
```

In this example, [`eqeqeq`](../rules/eqeqeq) is turned off and [`curly`](../rules/curly) is turned on as an error. You can also use the numeric equivalent for the rule severity:

在这个例子里，[`eqeqeq`](../rules/eqeqeq) 规则被关闭，[`curly`](../rules/curly) 规则被打开，定义为错误级别。你也可以使用对应的数字定义规则严重程度：

```js
/* eslint eqeqeq: 0, curly: 2 */
```

This example is the same as the last example, only it uses the numeric codes instead of the string values. The `eqeqeq` rule is off and the `curly` rule is set to be an error.

这个例子和上个例子是一样的，只不过它是用的数字而不是字符串。`eqeqeq` 规则是关闭的，`curly` 规则被设置为错误级别。

If a rule has additional options, you can specify them using array literal syntax, such as:

如果一个规则有额外的选项，你可以使用数组字面量指定它们，比如：

```js
/* eslint quotes: ["error", "double"], curly: 2 */
```

This comment specifies the "double" option for the [`quotes`](../rules/quotes) rule. The first item in the array is always the rule severity (number or string).

这条注释为规则 [`quotes`](../rules/quotes) 指定了 "double"选项。数组的第一项总是规则的严重程度（数字或字符串）。

To configure rules inside of a configuration file, use the `rules` key along with an error level and any options you want to use. For example:

使用 `rules` 连同错误级别和任何你想使用的选项在配置文件中进行规则配置。例如：

```json
{
    "rules": {
        "eqeqeq": "off",
        "curly": "error",
        "quotes": ["error", "double"]
    }
}
```

And in YAML:

在 YAML 中：

```yaml
---
rules:
  eqeqeq: off
  curly: error
  quotes:
    - error
    - double
```

To configure a rule which is defined within a plugin you have to prefix the rule ID with the plugin name and a `/`. For example:

配置定义在插件中的一个规则的时候，你必须使用 `插件名/规则ID` 的形式。比如：

```json
{
    "plugins": [
        "plugin1"
    ],
    "rules": {
        "eqeqeq": "off",
        "curly": "error",
        "quotes": ["error", "double"],
        "plugin1/rule1": "error"
    }
}
```

And in YAML:

在 YAML 中：

```yaml
---
plugins:
  - plugin1
rules:
  eqeqeq: 0
  curly: error
  quotes:
    - error
    - "double"
  plugin1/rule1: error
```

In these configuration files, the rule `plugin1/rule1` comes from the plugin named `plugin1`. You can also use this format with configuration comments, such as:

在这些配置文件中，规则 `plugin1/rule1` 表示来自插件 `plugin1` 的 `rule1` 规则。你也可以使用这种格式的注释去配置，比如：

```js
/* eslint "plugin1/rule1": "error" */
```

**Note:** When specifying rules from plugins, make sure to omit `eslint-plugin-`. ESLint uses only the unprefixed name internally to locate rules.

**注意：**当指定从插件来的规则时，确保删除 `eslint-plugin-` 前缀。ESLint 在内部只使用没有前缀的名称去定位规则。

## Disabling Rules with Inline Comments

To temporarily disable rule warnings in your file, use block comments in the following format:

可以在你的文件中使用以下格式的块注释来临时禁止规则出现警告：
 
```js
/* eslint-disable */

alert('foo');

/* eslint-enable */
```

You can also disable or enable warnings for specific rules:

你也可以对指定的规则启用或禁用警告:

```js
/* eslint-disable no-alert, no-console */

alert('foo');
console.log('bar');

/* eslint-enable no-alert, no-console */

```

To disable rule warnings in an entire file, put a `/* eslint-disable */` block comment at the top of the file:

如果在整个文件范围内禁止规则出现警告，将 `/* eslint-disable */` 块注释放在文件顶部：

```js
/* eslint-disable */

alert('foo');
```

You can also disable or enable specific rules for an entire file:

你也可以对整个文件启用或禁用警告:

```js
/* eslint-disable no-alert */

// Disables no-alert for the rest of the file
alert('foo');
```

To disable all rules on a specific line, use a line comment in one of the following formats:

可以在你的文件中使用以下格式的行注释在某一特定的行上禁用所有规则：

```js
alert('foo'); // eslint-disable-line

// eslint-disable-next-line
alert('foo');
```

To disable a specific rule on a specific line:

在某一特定的行上禁用某个指定的规则：

```js
alert('foo'); // eslint-disable-line no-alert

// eslint-disable-next-line no-alert
alert('foo');
```

To disable multiple rules on a specific line:

在某个特定的行上禁用多个规则：

```js
alert('foo'); // eslint-disable-line no-alert, quotes, semi

// eslint-disable-next-line no-alert, quotes, semi
alert('foo');
```

All of the above methods also work for plugin rules. For example, to disable `eslint-plugin-example`'s `rule-name` rule, combine the plugin's name (`example`) and the rule's name (`rule-name`) into `example/rule-name`:

上面的所有方法同样适用于插件规则。例如，禁止 `eslint-plugin-example` 的 `rule-name` 规则，把插件名（`example`）和规则名（`rule-name`）结合为 `example/rule-name`：

```js
foo(); // eslint-disable-line example/rule-name
```

**Note:** Comments that disable warnings for a portion of a file tell ESLint not to report rule violations for the disabled code. ESLint still parses the entire file, however, so disabled code still needs to be syntactically valid JavaScript.

**注意：**为文件的某部分禁用警告的注释，告诉 ESLint 不要对禁用的代码报告规则的冲突。ESLint 仍解析整个文件，然而，禁用的代码仍需要是有效的 JavaScript 语法。

## Adding Shared Settings

ESLint supports adding shared settings into configuration file. You can add `settings` object to ESLint configuration file and it will be supplied to every rule that will be executed. This may be useful if you are adding custom rules and want them to have access to the same information and be easily configurable.

ESLint 支持在配置文件添加共享设置。你可以添加 `settings` 对象到配置文件，它将提供给每一个将被执行的规则。如果你想添加的自定义规则而且使它们可以访问到相同的信息，这将会很有用，并且很容易配置。

In JSON:

在 JSON 中：

```json
{
    "settings": {
        "sharedData": "Hello"
    }
}
```

And in YAML:

在 YAML 中：

```yaml
---
  settings:
    sharedData: "Hello"
```

## Using Configuration Files

There are two ways to use configuration files. The first is to save the file wherever you would like and pass its location to the CLI using the `-c` option, such as:

有两种方式可以使用配置文件。第一种是将文件保存到你喜欢的地方，然后将它的位置使用 `-c` 选项传递命令行，比如：

    eslint -c myconfig.json myfiletotest.js

The second way to use configuration files is via `.eslintrc.*` and `package.json` files. ESLint will automatically look for them in the directory of the file to be linted, and in successive parent directories all the way up to the root directory of the filesystem. This option is useful when you want different configurations for different parts of a project or when you want others to be able to use ESLint directly without needing to remember to pass in the configuration file.

第二种方式是通过 `.eslintrc.*` 和 `package.json`。ESLint 将自动在要检测的文件目录里寻找它们，紧接着是父级目录，一直到文件系统的根目录。当你想对一个项目的不同部分的使用不同配置，或当你希望别人能够直接使用 ESLint，而无需记住要在配置文件中传递什么，这种方式就很有用。

In each case, the settings in the configuration file override default settings.

每种情况，配置文件都会覆盖默认设置。

## Configuration File Formats

ESLint supports configuration files in several formats:

ESLint 支持几种格式的配置文件：

* **JavaScript** - use `.eslintrc.js` and export an object containing your configuration.
* **JavaScript** - 使用 `.eslintrc.js` 然后输出一个配置对象。
* **YAML** - use `.eslintrc.yaml` or `.eslintrc.yml` to define the configuration structure.
* **YAML** - 使用 `.eslintrc.yaml` 或 `.eslintrc.yml` 去定义配置的结构。
* **JSON** - use `.eslintrc.json` to define the configuration structure. ESLint's JSON files also allow JavaScript-style comments.
* **JSON** - 使用 `.eslintrc.json` 去定义配置的结构，ESLint 的 JSON 文件允许 JavaScript 风格的注释。
* **Deprecated** - use `.eslintrc`, which can be either JSON or YAML.
* **Deprecated** - 使用 `.eslintrc`，可以使 JSON 也可以是 YAML。
* **package.json** - create an `eslintConfig` property in your `package.json` file and define your configuration there.
* **package.json** - 在 `package.json` 里创建一个 `eslintConfig`属性，在那里定义你的配置。

If there are multiple configuration files in the same directory, ESLint will only use one. The priority order is:

如果同一个目录下有多个配置文件，ESLint 只会使用一个。优先级顺序如下：

1. `.eslintrc.js`
1. `.eslintrc.js`
1. `.eslintrc.yaml`
1. `.eslintrc.yaml`
1. `.eslintrc.yml`
1. `.eslintrc.yml`
1. `.eslintrc.json`
1. `.eslintrc.json`
1. `.eslintrc`
1. `.eslintrc`
1. `package.json`
1. `package.json`

## Configuration Cascading and Hierarchy

When using `.eslintrc.*` and `package.json` files for configuration, you can take advantage of configuration cascading. For instance, suppose you have the following structure:

当使用 `.eslintrc.*` 和 `package.json`文件的配置时，你可以利用配置级联。例如，假如你有以下结构：

```text
your-project
├── .eslintrc
├── lib
│ └── source.js
└─┬ tests
  ├── .eslintrc
  └── test.js
```

The configuration cascade works by using the closest `.eslintrc` file to the file being linted as the highest priority, then any configuration files in the parent directory, and so on. When you run ESLint on this project, all files in `lib/` will use the `.eslintrc` file at the root of the project as their configuration. When ESLint traverses into the `tests/` directory, it will then use `your-project/tests/.eslintrc` in addition to `your-project/.eslintrc`. So `your-project/tests/test.js` is linted based on the combination of the two `.eslintrc` files in its directory hierarchy, with the closest one taking priority. In this way, you can have project-level ESLint settings and also have directory-specific overrides.

层叠配置使用离要检测的文件最近的 `.eslintrc`文件作为最高优先级，然后才是父目录里的配置文件，等等。当你在这个项目中允许 ESLint 时，`lib/` 下面的所有文件将使用项目根目录里的 `.eslintrc` 文件作为它的配置文件。当 ESLint 遍历到 `test/` 目录，`your-project/.eslintrc` 之外，它还会用到 `your-project/tests/.eslintrc`。所以 `your-project/tests/test.js` 是基于它的目录层次结构中的两个`.eslintrc` 文件的组合，并且离的最近的一个优先。通过这种方式，你可以有项目级 ESLint 设置，也有覆盖特定目录的 ESLint 设置。

In the same way, if there is a `package.json` file in the root directory with an `eslintConfig` field, the configuration it describes will apply to all subdirectories beneath it, but the configuration described by the `.eslintrc` file in the tests directory will override it where there are conflicting specifications.

同样的，如果在根目录的 `package.json` 文件中有一个 `eslintConfig` 字段，其中的配置将使用于所有子目录，但是当 `tests` 目录下的 `.eslintrc` 文件中的规则与之发生冲突时，就会覆盖它。

```text
your-project
├── package.json
├── lib
│ └── source.js
└─┬ tests
  ├── .eslintrc
  └── test.js
```

If there is an `.eslintrc` and a `package.json` file found in the same directory, `.eslintrc` will take a priority and `package.json` file will not be used.

如果同一目录下 `.eslintrc` 和 `package.json` 同时存在，`.eslintrc` 优先级高会被使用，`package.json` 文件将不会被使用。

**Note:** If you have a personal configuration file in your home directory (`~/.eslintrc`), it will only be used if no other configuration files are found. Since a personal configuration would apply to everything inside of a user's directory, including third-party code, this could cause problems when running ESLint.

**注意：**如果在你的主目录下有一个自定义的配置文件 (`~/.eslintrc`) ，如果没有其它配置文件时它才会被使用。因为个人配置将适用于用户目录下的所有目录和文件，包括第三方的代码，当 ESLint 运行时肯能会导致问题。

By default, ESLint will look for configuration files in all parent folders up to the root directory. This can be useful if you want all of your projects to follow a certain convention, but can sometimes lead to unexpected results. To limit ESLint to a specific project, place `"root": true` inside the `eslintConfig` field of the `package.json` file or in the `.eslintrc.*` file at your project's root level.  ESLint will stop looking in parent folders once it finds a configuration with `"root": true`.

默认情况下，ESLint 会在所有父级目录里寻找配置文件，一直到根目录。如果你想要你所有项目都遵循一个特定的约定时，这将会很有用，但有时候会导致意想不到的结果。为了将 ESLint 限制到一个特定的项目，在你项目根目录下的 `package.json` 文件或者 `.eslintrc.*` 文件里的 `eslintConfig` 字段下设置 `"root": true`。ESLint 一旦发现配置文件中有 `"root": true`，它就会停止在父级目录中寻找。

```js
{
    "root": true
}
```

And in YAML:

在 YAML 中：

```yaml
---
  root: true
```

For example, consider `projectA` which has `"root": true` set in the `.eslintrc` file in the main project directory.  In this case, while linting `main.js`, the configurations within `lib/`will be used, but the `.eslintrc` file in `projectA/` will not.

例如，`projectA` 的主目录下的 `.eslintrc` 文件中设置了 `"root": true`。这种情况下，当检测 `main.js` 时，`lib/` 下的配置将会被使用，`projectA/` 下的 `.eslintrc` 将不会被使用。

```text
home
└── user
    ├── .eslintrc <- Always skipped if other configs present
    └── projectA
        ├── .eslintrc  <- Not used
        └── lib
            ├── .eslintrc  <- { "root": true }
            └── main.js
```

The complete configuration hierarchy, from highest precedence to lowest precedence, is as follows:

完整的配置层次结构，从最高优先级最低的优先级，如下:

1. Inline configuration
1. 行内配置
    1. `/*eslint-disable*/` and `/*eslint-enable*/`
    1. `/*eslint-disable*/` 和 `/*eslint-enable*/`
    1. `/*global*/`
    1. `/*global*/`
    1. `/*eslint*/`
    1. `/*eslint*/`
    1. `/*eslint-env*/`
    1. `/*eslint-env*/`
2. Command line options:
2. 命令行选项：
    1. `--global`
    1. `--global`
    1. `--rule`
    1. `--rule`
    1. `--env`
    1. `--env`
    1. `-c`, `--config`
    1. `-c`、`--config`
3. Project-level configuration:
3. 项目级配置：
    1. `.eslintrc.*` or `package.json` file in same directory as linted file
    1. 与要检测的文件在同一目录下的 `.eslintrc.*` 或 `package.json` 文件 
    1. Continue searching for `.eslintrc` and `package.json` files in ancestor directories (parent has highest precedence, then grandparent, etc.), up to and including the root directory or until a config with `"root": true` is found.
    1. 继续在父级目录寻找 `.eslintrc` 或 `package.json`文件，直到根目录（包括根目录）或直到发现一个有`"root": true`的配置。
    1. In the absence of any configuration from (1) thru (3), fall back to a personal default configuration in `~/.eslintrc`.
    1. 如果不是（1）到（3）中的任何一种情况，退回到 `~/.eslintrc` 中自定义的默认配置。

## Extending Configuration Files

A configuration file can extend the set of enabled rules from base configurations.

一个配置文件可以被基础配置中的已启用的规则继承。

The `extends` property value is either:

`extends` 属性值可以是：

* a string that specifies a configuration
* 在配置中指定的一个字符串
* an array of strings: each additional configuration extends the preceding configurations
* 字符串数组：每个配置继承它前面的配置

ESLint extends configurations recursively so a base configuration can also have an `extends` property.

ESLint 递归地进行扩展配置，所以一个基础的配置也可以有一个 `extends` 属性。

The `rules` property can do any of the following to extend (or override) the set of rules:

`rules` 属性可以做下面的任何事情以扩展（或覆盖）规则：

* enable additional rules
* 启用额外的规则
* change an inherited rule's severity without changing its options:
* 改变继承的规则级别而不改变它的选项：
    * Base config: `"eqeqeq": ["error", "allow-null"]`
    * 基础配置：`"eqeqeq": ["error", "allow-null"]`
    * Derived config: `"eqeqeq": ["error", "allow-null"]`
    * 派生的配置：`"eqeqeq": "warn"`
    * Resulting actual config: `"eqeqeq": ["warn", "allow-null"]`
    * 最后生成的配置：`"eqeqeq": ["warn", "allow-null"]`
* override options for rules from base configurations:
* 覆盖基础配置中的规则的选项
    * Base config: `"quotes": ["error", "single", "avoid-escape"]`
    * 基础配置：`"quotes": ["error", "single", "avoid-escape"]`
    * Derived config: `"quotes": ["error", "single"]`
    * 派生的配置：`"quotes": ["error", "single"]`
    * Resulting actual config: `"quotes": ["error", "single"]`
    * 最后生成的配置：`"quotes": ["error", "single"]`

### Using `"eslint:recommended"`

An `extends` property value `"eslint:recommended"` enables a subset of core rules that report common problems, which have a check mark (recommended) on the [rules page](../rules/). The recommended subset can change only at major versions of ESLint.

值为 `"eslint:recommended"` 的 `extends` 属性启用一系列核心规则，这些规则报告一些常见问题，在 [规则页面](../rules/) 中被标记为 (recommended) 。这个推荐的子集只能在 ESLint 主要版本进行更新。

If your configuration extends the recommended rules: after you upgrade to a newer major version of ESLint, review the reported problems before you use the `--fix` option on the [command line](./command-line-interface#fix), so you know if a new fixable recommended rule will make changes to the code.

如果你的配置集成了推荐的规则：在你升级到 ESLint 新的主版本之后，在你使用[命令行](./command-line-interface#fix)的 `--fix` 选项之前，检查一下报告的问题，这样你就知道一个新的可修复的推荐的规则将更改代码。

The `eslint --init` command can create a configuration so you can extend the recommended rules.

`eslint --init` 命令可以创建一个配置，这样你就可以继承推荐的规则。

Example of a configuration file in JavaScript format:

JavaScript 格式的一个配置文件的例子：

```js
module.exports = {
    "extends": "eslint:recommended",
    "rules": {
        // enable additional rules
        "indent": ["error", 4],
        "linebreak-style": ["error", "unix"],
        "quotes": ["error", "double"],
        "semi": ["error", "always"],

        // override default options for rules from base configurations
        "comma-dangle": ["error", "always"],
        "no-cond-assign": ["error", "always"],

        // disable rules from base configurations
        "no-console": "off",
    }
}
```

### Using a shareable configuration package

A [sharable configuration](../developer-guide/shareable-configs) is an npm package that exports a configuration object. Make sure the package has been installed to a directory where ESLint can require it.

[可共享的配置](../developer-guide/shareable-configs) 是一个 npm 包，它输出一个配置对象。要确保这个包安装在 ESLint 能请求到的目录下。

The `extends` property value can omit the `eslint-config-` prefix of the package name.

`extends` 属性值可以省略包名的前缀 `eslint-config-`。

The `eslint --init` command can create a configuration so you can extend a popular style guide (for example, `eslint-config-standard`).

`eslint --init` 命令可以创建一个配置，这样你就可以扩展一个流行的风格指南（比如，`eslint-config-standard`）。

Example of a configuration file in YAML format:

YAML 格式的一个配置文件的例子：

```yaml
extends: standard
rules:
  comma-dangle:
    - error
    - always
  no-empty: warn
```

### Using the configuration from a plugin

A [plugin](../developer-guide/working-with-plugins) is an npm package that usually exports rules. Some plugins also export one or more named [configurations](../developer-guide/working-with-plugins#configs-in-plugins). Make sure the package has been installed to a directory where ESLint can require it.

[插件](../developer-guide/working-with-plugins) 是一个 npm 包，通常输出规则。一些插件也可以输出一个或多个命名的 [配置](../developer-guide/working-with-plugins#configs-in-plugins)。要确保这个包安装在 ESLint 能请求到的目录下。

The `plugins` [property value](#configuring-plugins) can omit the `eslint-plugin-` prefix of the package name.

`plugins` [属性值](#configuring-plugins) 可以省略包名的前缀 `eslint-plugin-`。

The `extends` property value can consist of:

`extends` 属性值可以由以下组成：

* `plugin:`
* `plugin:`
* the package name (from which you can omit the prefix, for example, `react`)
* 包名 (省略了前缀，比如，`react`)
* `/`
* `/`
* the configuration name (for example, `recommended`)
* 配置名称 (比如 `recommended`)

Example of a configuration file in JSON format:

JSON 格式的一个配置文件的例子：

```json
{
    "plugins": [
        "react"
    ],
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    "rules": {
       "no-set-state": "off"
    }
}
```

### Using a configuration file

The `extends` property value can be an absolute or relative path to a base [configuration file](#using-configuration-files).

`extends` 属性值可以是基本[配置文件](#using-configuration-files)的绝对路径或相对路径。

ESLint resolves a relative path to a base configuration file relative to the configuration file that uses it **unless** that file is in your home directory or a directory that isn't an ancestor to the directory in which ESLint is installed (either locally or globally). In those cases, ESLint resolves the relative path to the base file relative to the linted **project** directory (typically the current working directory).

ESLint 解析基本配置文件的相对路径相对你你使用的配置文件，**除非**那个文件在你的主目录或非 ESLint 安装目录的父级目录。在这些情况下，ESLint 解析基本配合文件的相对路径相对于被检测的 **项目**目录（尤其是当前工作目录）。

Example of a configuration file in JSON format:

JSON 格式的一个配置文件的例子：

```json
{
    "extends": [
        "./node_modules/coding-standard/eslintDefaults.js",
        "./node_modules/coding-standard/.eslintrc-es6",
        "./node_modules/coding-standard/.eslintrc-jsx"
    ],
    "rules": {
        "eqeqeq": "warn"
    }
}
```

### Using `"eslint:all"`

The `extends` property value can be `"eslint:all"` to enable all core rules in the currently installed version of ESLint. The set of core rules can change at any minor or major version of ESLint.

`extends` 属性值可以是 `"eslint:all"`，启用当前安装的 ESLint 中所有的核心规则。这些规则可以在 ESLint 的任何版本进行更改。

**Important:** This configuration is **not recommended for production use** because it changes with every minor and major version of ESLint. Use at your own risk.

**重要：**这些配置 **不推荐在产品中使用**，因为它随着 ESLint 版本进行更改。使用的话，请自己承担风险。

If you configure ESLint to automatically enable new rules when you upgrade, ESLint can report new problems when there are no changes to source code, therefore any newer minor version of ESLint can behave as if it has breaking changes.

如果你配置 ESLint 升级时自动地启用新规则，当源码没有任何改变时，ESLint 可以报告新问题，因此任何 ESLint 的新的小版本好像有破坏性的更改。

You might enable all core rules as a shortcut to explore rules and options while you decide on the configuration for a project, especially if you rarely override options or disable rules. The default options for rules are not endorsements by ESLint (for example, the default option for the `quotes` rule does not mean double quotes are better than single quotes).

当你决定在一个项目上使用的规则和选项，尤其是如果你很少覆盖选项或禁用规则，你可能启用所有核心规则作为一种快捷方式使用。规则的默认选项并不是 ESLint 推荐的（例如，`quotes` 规则的默认选项并不意味着双引号要比单引号好）。

If your configuration extends all core rules: after you upgrade to a newer major or minor version of ESLint, review the reported problems before you use the `--fix` option on the [command line](./command-line-interface#fix), so you know if a new fixable rule will make changes to the code.

如果你的配置扩展了所有的核心规则：在你升级到一个新的大或小的 ESLint 版本，在你使用[命令行](./command-line-interface#fix)的 `--fix` 选项之前，检查一下报告的问题，这样你就知道一个新的可修复的规则将更改代码。

Example of a configuration file in JavaScript format:

JavaScript 格式的一个配置文件的例子：

```js
module.exports = {
    "extends": "eslint:all",
    "rules": {
        // override default options
        "comma-dangle": ["error", "always"],
        "indent": ["error", 2],
        "no-cond-assign": ["error", "always"],

        // disable now, but enable in the future
        "one-var": "off", // ["error", "never"]

        // disable
        "init-declarations": "off",
        "no-console": "off",
        "no-inline-comments": "off",
    }
}
```

## Comments in Configuration Files

Both the JSON and YAML configuration file formats support comments (`package.json` files should not include them). You can use JavaScript-style comments or YAML-style comments in either type of file and ESLint will safely ignore them. This allows your configuration files to be more human-friendly. For example:

JSON 和 YAML 配置文件格式都支持注释 ( `package.json` 文件不应该包括注释)。你可以在其他类型的文件中使用 JavaScript 风格的注释或使用 YAML 风格的注释，ESLint 会忽略它们。这允许你的配置更加人性化。例如：

```js
{
    "env": {
        "browser": true
    },
    "rules": {
        // Override our default settings just for this directory
        "eqeqeq": "warn",
        "strict": "off"
    }
}
```

## Specifying File extensions to Lint

Currently the sole method for telling ESLint which file extensions to lint is by specifying a comma separated list of extensions using the [`--ext`](./command-line-interface#ext) command line option.

目前，告诉 ESLint 哪个文件扩展名要检测的唯一方法是使用 [`--ext`](./command-line-interface#ext) 命令行选项指定一个逗号分隔的扩展名列表。

## Ignoring Files and Directories

You can tell ESLint to ignore specific files and directories by creating an `.eslintignore` file in your project's root directory. The `.eslintignore` file is a plain text file where each line is a glob pattern indicating which paths should be omitted from linting. For example, the following will omit all JavaScript files:

你可以通过在项目根目录创建一个 `.eslintignore` 文件告诉 ESLint 去忽略特定的文件和目录。`.eslintignore` 文件是一个纯文本文件，其中的每一行都是一个 glob 模式表明哪些路径应该忽略检测。例如，以下将忽略所有的 JavaScript 文件：

```text
**/*.js
```

When ESLint is run, it looks in the current working directory to find an `.eslintignore` file before determining which files to lint. If this file is found, then those preferences are applied when traversing directories. Only one `.eslintignore` file can be used at a time, so `.eslintignore` files other than the one in the current working directory will not be used.

当 ESLint 运行时，在确定哪些文件要检测之前，它会在当前工作目录中查找一个 `.eslintignore` 文件。如果发现了这个文件，当遍历目录时，将会应用这些偏好设置。一次只有一个 `.eslintignore` 文件会被使用，所以，不是当前工作目录下的 `.eslintignore` 文件将不会被用到。

Globs are matched using [node-ignore](https://github.com/kaelzhang/node-ignore), so a number of features are available:

Globs 匹配使用 [node-ignore](https://github.com/kaelzhang/node-ignore)，所以大量可用的特性有：

* Lines beginning with `#` are treated as comments and do not affect ignore patterns.
* 以 `#` 开头的行被当作注释，不影响忽略模式。
* Paths are relative to `.eslintignore` location or the current working directory. This also influences paths passed via `--ignore-pattern`.
* 路径是相对于 `.eslintignore` 的位置或当前工作目录。这也会影响通过 `--ignore-pattern`传递的路径。
* Ignore patterns behave according to the `.gitignore` [specification](http://git-scm.com/docs/gitignore)
* 忽略模式同 `.gitignore` [规范](http://git-scm.com/docs/gitignore)
* Lines preceded by `!` are negated patterns that re-include a pattern that was ignored by an earlier pattern.
* 以 `!` 开头的行是否定模式，它将会重新包含一个之前被忽略的模式。

In addition to any patterns in a `.eslintignore` file, ESLint always ignores files in `/node_modules/*` and `/bower_components/*`.

除了 `.eslintignore` 文件中的模式，ESLint总是忽略 `/node_modules/*` 和 `/bower_components/*` 中的文件。

For example, placing the following `.eslintignore` file in the current working directory will ignore all of `node_modules`, `bower_components`, any files with the extensions `.ts.js` or `.coffee.js` extension that might have been transpiled, and anything in the `build/` directory except `build/index.js`:

例如：把下面 `.eslintignore` 文件放到当前工作目录里，将忽略 `node_modules`，`bower_components` 和所有以 `.ts.js` 或者 `.coffee.js` 为扩展名的文件以及 `build/`  目录下除了 `build/index.js` 的所有文件。

```text
# /node_modules/* and /bower_components/* ignored by default

# Ignore built files except build/index.js
build/*
!build/index.js
```

### Using an Alternate File

If you'd prefer to use a different file than the `.eslintignore` in the current working directory, you can specify it on the command line using the `--ignore-path` option. For example, you can use `.jshintignore` file because it has the same format:

如果相比于当前工作目录下 `.eslintignore` 文件，你更想使用一个不同的文件，你可以在命令行使用 `--ignore-path`  选项指定它。例如，你可以使用 `.jshintignore` 文件，因为它有相同的格式：

    eslint --ignore-path .jshintignore file.js

You can also use your `.gitignore` file:

你也可以使用你的 `.gitignore` 文件：

    eslint --ignore-path .gitignore file.js

Any file that follows the standard ignore file format can be used. Keep in mind that specifying `--ignore-path` means that any existing `.eslintignore` file will not be used. Note that globbing rules in `.eslintignore` follow those of `.gitignore`.

任何文件只要满足标准忽略文件格式都可以用。记住，指定 `--ignore-path` 意味着任何现有的 `.eslintignore` 文件将不被使用。请注意，`.eslintignore` 中的匹配规则比 `.gitignore` 中的更严格。

### Ignored File Warnings

When you pass directories to ESLint, files and directories are silently ignored. If you pass a specific file to ESLint, then you will see a warning indicating that the file was skipped. For example, suppose you have an `.eslintignore` file that looks like this:

当你传递目录给 ESLint，文件和目录是默默被忽略的。如果你传递一个指定的文件给 ESLint，你会看到一个警告，表明该文件被跳过了。例如，假如你有一个像这样的 `.eslintignore`文件：

```text
foo.js
```

And then you run:

然后你执行：

    eslint foo.js

You'll see this warning:

你将会看到这个警告：

```text
foo.js
  0:0  warning  File ignored because of your .eslintignore file. Use --no-ignore to override.

✖ 1 problem (0 errors, 1 warning)
```

This message occurs because ESLint is unsure if you wanted to actually lint the file or not. As the message indicates, you can use `--no-ignore` to omit using the ignore rules.

这种消息出现是因为 ESLint 不确定你是否想检测文件。正如这个消息表明的那样，你可以使用 `--no-ignore` 覆盖忽略的规则。

