---
title: v8.0.0 迁移指南
layout: doc
edit_link: https://github.com/eslint/eslint/edit/master/docs/user-guide/migrating-to-8.0.0.md

---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# v8.0.0 迁移指南 {#migrating-to-v8-0-0}

ESLint v8.0.0 是 ESLint 的重要版本，我们在该版本中引入了一些重大更新。本指南旨在帮助你了解这些更新。

下面列表中会列出大部分变化，每项变化按照预计影响用户范围进行了排序，其中第一项对使用者影响最大。

## 目录 {#table-of-contents}

### 影响用户的更新 {#breaking-changes-for-users}

- [不再支持 Node.js v10，v13 以及 v15](#drop-old-node)
- [移除核心代码中 `codeframe` 和 `table` 的格式化器](#removed-formatters)
- [`comma-dangle` 规则模式更加严格](#comma-dangle)
- [修复未使用的 disable 指令](#directives)
- [更新了 `eslint:recommended`](#eslint-recommended)

### 影响插件开发者的更新 {#breaking-changes-for-plugin-developers}

- [不再支持 Node.js v10，v13 以及 v15](#drop-old-node)
- [提供修改建议前，需设置 `meta.hasSuggestions`](#suggestions)
- [提供修复方式前，需设置 `meta.fixable`](#fixes)
- [继续使用 `SourceCode#getComments()` 将会造成 `RuleTester` 执行失败](#get-comments)
- [调整属性简写的 AST 格式](#ast-format)

### 影响工具集成开发者的更新 {#breaking-changes-for-integration-developers}

- [不再支持 Node.js v10，v13 以及 v15](#drop-old-node)
- [移除 `CLIEngine` 类](#remove-cliengine)
- [移除 `linter` 对象](#remove-linter)
- [移除 `/lib` 的入口](#remove-lib)

---

## <a name="drop-old-node"></a> 不再支持 Node.js v10，v13 以及 v15 {#drop-old-node}

Node.js v10，v13，v15 都已在 2020 年或 2021 年初停止了维护。ESLint 从 v8.0.0 开始正式放弃对 Node.js 这些版本的支持。ESLint 现支持已下版本的 Node.js：

- Node.js 12.22 及以上版本
- Node.js 14 及以上版本
- Node.js 16 及以上版本

**解决方案：** 需确保在使用 ESLint v8.0.0 时，至少将 Node.js 版本升级至 `12.22.0`。还有一点要注意，需要检查通过编辑器使用 ESLint 时，你编辑器所使用的 Node.js 版本。如果 Node.js 版本因某种原因无法升级，我们建议你在升级 Node.js 版本之前继续使用 ESLint 7。

**相关 issue：** [#14023](https://github.com/eslint/eslint/issues/14023)

## <a name="removed-formatters"></a> 移除了 `codeframe` 和 `table` 的格式化器 {#removed-formatters}

ESLint v8.0.0 已将 `codeframe` 和 `table` 的格式化器从核心代码中剔除。这些格式化器所依赖的包并没有在 ESLint 的其他地方被使用到，剔除它们可以减少 ESLint 的体积，使其安装速度更快。

**解决方案：** 如果你使用了 `codeframe` 或 `table` 的格式化器，升级到 v8.0.0 后，需安装 [`eslint-formatter-codeframe`](https://github.com/fregante/eslint-formatter-codeframe) 或 [`eslint-formatter-table`](https://github.com/fregante/eslint-formatter-table) 的 npm 包，以便它们能够正常使用。

**相关 issue：** [#14277](https://github.com/eslint/eslint/issues/14277)，[#14316](https://github.com/eslint/eslint/pull/14316)


## <a name="comma-dangle"></a> `comma-dangle` 规则模式更加严格 {#comma-dangle}

在 ESLint v7.0.0 中，`comma-dangle` 按如下方式配置不会出现错误：

```json
{
    "rules": {
        "comma-dangle": ["error", "never", { "arrays": "always" }]
    }
}
```

按如上配置，规则只读取到第二个元素，而数组中的第三个元素则会被忽略。在 ESLint v8.0.0 中，此配置会致使 ESLint 抛出错误。

**解决方案：** 调整你的规则配置，保证数组中只有两个元素，第二个元素可以为字符串也可以是一个对象，例如：

```jsonc
{
    "comma-dangle": ["error", "never"],
    // or
    "comma-dangle": ["error", {
        "arrays": "never",
        "objects": "never",
        "imports": "never",
        "exports": "never",
        "functions": "never"
    }]
}
```

**相关 issue：** [#13739](https://github.com/eslint/eslint/issues/13739)

## <a name="directives"></a> 修复未使用的 disable 指令 {#directives}

在 ESLint v7.0.0 中，同时使用 `--report-unused-disable-directives` 和 `--fix` 在命令行中会只修复规则，但保留了未使用的 disable 指令。在 ESLint v8.0.0 中，这种命令选项的组合方式会致使未使用的 disable 指令被删除。

**解决方案：** 如果在命令行中同时使用了 `--report-unused-disable-directives` 和 `--fix`，而又不希望未使用的 disable 指令被删除，请添加命令行选项 `--fix-type problem,suggestion,layout`。

**相关 issue：** [#11815](https://github.com/eslint/eslint/issues/11815)

## <a name="eslint-recommended"></a> 更新了 `eslint:recommended` {#eslint-recommended}

在 `eslint:recommended` 预设中启用了四个新规则。

- [`no-loss-of-precision`](https://eslint.org/docs/rules/no-loss-of-precision)
- [`no-nonoctal-decimal-escape`](https://eslint.org/docs/rules/no-nonoctal-decimal-escape)
- [`no-unsafe-optional-chaining`](https://eslint.org/docs/rules/no-unsafe-optional-chaining)
- [`no-useless-backreference`](https://eslint.org/docs/rules/no-useless-backreference)

**解决方案：** 修复错误或者禁用这些规则。

**相关 issue：** [#14673](https://github.com/eslint/eslint/issues/14673)


## <a name="suggestions"></a> 提供修改建议前，需设置 `meta.hasSuggestions` {#suggestions}

在 ESLint v7.0.0，规则 [提供建议](https://eslint.org/docs/developer-guide/working-with-rules#providing-suggestions) 无需告知 ESLint。而在 v8.0.0 中，规则提供建议需将 `meta.hasSuggestions` 设置为 `true`。这会告知 ESLint 此规则会提供建议。如果没有此属性，任务提供建议的行为都会报错。

**解决方案：** 如果你的自定义规则提供了建议，需要设置 `meta.hasSuggestions` 为 true，例如：

```js
module.exports = {
    meta: {
        hasSuggestions: true
    },
    create(context) {
        // your rule
    }
};
```

使用 [eslint-plugin/require-meta-has-suggestions](https://github.com/not-an-aardvark/eslint-plugin-eslint-plugin/blob/master/docs/rules/require-meta-has-suggestions.md) 规则可以自动修复此问题，并强制在你的规则中正确的设置 `meta.hasSuggestions`。

**相关 issue：** [#14312](https://github.com/eslint/eslint/issues/14312)

## <a name="fixes"></a> 提供修复方式前，需设置 `meta.fixable` {#fixes}

在 ESLint v7.0.0 中，导出为函数的规则能够提供修复方式。在 ESLint v8.0.0 中，只要导出为对象的规则才允许提供修复方式，并且必须将 `meta.fixable` 属性设置为 `"code"` 或 `"whitespace"`。

**解决方案：** 如果你的规则提供了修复方式，并编写了函数，例如：

```js
module.exports = function(context) {
    // 你的规则
};
```

请按如下格式重写你的规则：

```js
module.exports = {
    meta: {
        fixable: "code" // 或者 "whitespace"
    },
    create(context) {
        // 你的规则
    }
};
```

[eslint-plugin/require-meta-fixable](https://github.com/not-an-aardvark/eslint-plugin-eslint-plugin/blob/master/docs/rules/require-meta-fixable.md) 规则可以自动修复此问题，并强制在你的规则中正确的设置 `meta.fixable`。

[eslint-plugin/prefer-object-rule](https://github.com/not-an-aardvark/eslint-plugin-eslint-plugin/blob/master/docs/rules/prefer-object-rule.md) 规则可以自动修复导出规则为函数的问题，会强制将废弃的函数格式更改为对象格式。

欲了解更多关于编写规则的详细信息，请参阅 [规则文档](https://eslint.org/docs/developer-guide/working-with-rules)。

**相关 issue：** [#13349](https://github.com/eslint/eslint/issues/13349)

## <a name="get-comments"></a> 继续使用 `SourceCode#getComments()` 将会造成 `RuleTester` 执行失败 {#get-comments}

其实在 ESLint v4.0.0 中，我们就已经废除了 `SourceCode#getComments()`，由于疏忽忘记了删除它。但我们没有选择立即从 v8.0.0 中剔除，而是采取了过渡的方式，我们更新了 `RuleTester`，当规则中使用了 `SourceCode#getComments()` 时，`RuleTester` 会失败。因此，现有规则会正常工作，但当开发者对规则进行测试时，则会测试失败。

`SourceCode#getComments()` 方法将在 v9.0.0 中彻底移除。

**解决方案：** 如果你的规则中有使用到 `SourceCode#getComments()`，请使用 [`SourceCode#getCommentsBefore()`，`SourceCode#getCommentsAfter()` 或 `SourceCode#getCommentsInside()`](https://eslint.org/docs/developer-guide/working-with-rules#sourcecodegetcommentsbefore-sourcecodegetcommentsafter-and-sourcecodegetcommentsinside) 代替。

**相关 issue：** [#14744](https://github.com/eslint/eslint/issues/14744)

## <a name="ast-format"></a> 调整属性简写的 AST 格式 {#ast-format}

ESLint v8.0.0 中将 Espree 也升级到了 v8.0.0 以支持新语法。而 Espree 的升级，又涉及到 Acorn v8.0.0 的升级，而 Acron 的升级改变了 AST 中对属性简写的表示方式，具体示例如下：

```js
const version = 8;
const x = {
    version
};
```

这段代码会生成一个属性节点，大概形式如下：

```json
{
    "type": "Property",
    "method": false,
    "shorthand": true,
    "computed": false,
    "key": {
        "type": "Identifier",
        "name": "version"
    },
    "kind": "init",
    "value": {
        "type": "Identifier",
        "name": "version"
    }
}
```

注意，`key` 和 `value` 属性都包含相同的信息，在 Acorn v8.0.0 以前（也可以说是 ESLint v8.0.0 以前），这两个节点会指向同一个对象，所以你可以使用 `===` 来确定它们是否表示同一个节点，例如：

```js
// ESLint v7.x 中为 true，ESLint v8.0.0 中为 false
if (propertyNode.key === propertyNode.value) {
    // do something
}
```

在 ESLint v8.0.0 中（基于 Acorn v8.0.0），key 和 value 现在指向两个独立的对象，因此不再相等。

**解决方案：** 如果你的规则需确定对象简写属性字面量的 key 和 value 是否在同一节点，你需要使用以下两种任一方式来改写你的代码：

1. 使用 `propertyNode.shorthand` 来确定该属性是否为简写属性。
1. 使用每个节点的 `range` 属性来确定 key 和 value 是否占据同一个位置。

**相关 issue：** [#14591](https://github.com/eslint/eslint/pull/14591#issuecomment-887733070)


## <a name="remove-cliengine"></a> 移除 `CLIEngine` 类 {#remove-cliengine}

`CLIEngine` 类已被删除，将由 [`ESLint` class](https://eslint.org/docs/developer-guide/nodejs-api#eslint-class) 取而代之。

**解决方案：** 如果你代码中使用了 `CLIEngine`，请更新你的代码以使用全新的 `ESLint` 类。下表是现有 `CLIEngine` 方法与 `ESLint` 方法的对应关系：

| `CLIEngine`                                  | `ESLint`                           |
| :------------------------------------------- | :--------------------------------- |
| `executeOnFiles(patterns)`                   | `lintFiles(patterns)`              |
| `executeOnText(text, filePath, warnIgnored)` | `lintText(text, options)`          |
| `getFormatter(name)`                         | `loadFormatter(name)`              |
| `getConfigForFile(filePath)`                 | `calculateConfigForFile(filePath)` |
| `isPathIgnored(filePath)`                    | `isPathIgnored(filePath)`          |
| `static outputFixes(results)`                | `static outputFixes(results)`      |
| `static getErrorResults(results)`            | `static getErrorResults(results)`  |
| `static getFormatter(name)`                  | (removed ※1)                      |
| `addPlugin(pluginId, definition)`            | the `plugins` constructor option   |
| `getRules()`                                 | (removed ※2)                      |
| `resolveFileGlobPatterns()`                  | (removed ※3)                      |

- ※1 `engine.getFormatter()` 方法目前会按原样返回加载的包的对象，出于兼容性的考虑，这样很难向 formatter 中添加新功能。而全新的 `eslint.loadFormatter()` 方法会返回一个适配器对象，该对象包含了加载的包的对象，以简化添加新特性的过程。此外，适配器对象可以访问 `ESLint` 实例来计算默认数据（例如，使用加载的插件规则来制作 `rulesMeta`）。因此，`ESLint` 类只实现了 `loadFormatter()` 方法的实例版本。
- ※2 由于 `CLIEngine#getRules()` 方法存在副作用，因此已被移除。如果你需要使用 `CLIEngine#getRules()` 来检索基于 linting 结果规则的元信息，请使用 `ESLint#getRulesMetaForResults()` 代替。如果你需要使用 `CLIEngine#getRules()` 来检索所有内置规则，请从 `eslint/use-at-your-own-risk` 中引入 `builtinRules`，这是一个未被支持的 API，但可以通过它访问内部规则。
- ※3 自 ESLint v6.0.0 起，ESLint 使用了不同于 `resolveFileGlobPatterns()` 方法的方式来迭代文件，最终使得此方法被淘汰。

**相关 issue：** [RFC80](https://github.com/eslint/rfcs/tree/main/designs/2021-package-exports)，[#14716](https://github.com/eslint/eslint/pull/14716)，[#13654](https://github.com/eslint/eslint/issues/13654)

## <a name="remove-linter"></a> The `linter` object has been removed {#remove-linter}

在 v8.0.0 中，废弃的 `linter` 对象已从 ESLint 包中移除。

**解决方案：** 如果你使用了 `linter` 对象，例如：

```js
const { linter } = require("eslint");
```

请将代码修改为：

```js
const { Linter } = require("eslint");
const linter = new Linter();
```

**相关 issue：** [RFC80](https://github.com/eslint/rfcs/tree/main/designs/2021-package-exports)，[#14716](https://github.com/eslint/eslint/pull/14716)，[#13654](https://github.com/eslint/eslint/issues/13654)

## <a name="remove-lib"></a> 移除 `/lib` 的入口 {#remove-lib}

自 v8.0.0 起，ESLint 严格定义了其公共 API 的访问。以前，你可以访问个别文件，如 `require("eslint/lib/rules/semi")`，之后将不再允许这样操作。考虑到兼容的问题，现在有少数 API 可以通过 `/use-at-your-own-risk` 的入口进行访问。但这些 API 没有得到正式的支持，可能会出现莫名其妙的状况。

**解决方案：** 如果你直接通过 `/lib` 入口访问了某个规则，例如：

```js
const rule = require("eslint/lib/rules/semi");
```

请将代码修改为：

```js
const { builtinRules } = require("eslint/use-at-your-own-risk");
const rule = builtinRules.get("semi");
```

如果你是通过 `/lib` 入口直接访问了 `FileEnumerator`，例如：

```js
const { FileEnumerator } = require("eslint/lib/cli-engine/file-enumerator");
```

请将代码修改为：

```js
const { FileEnumerator } = require("eslint/use-at-your-own-risk");
```

**相关 issue：** [RFC80](https://github.com/eslint/rfcs/tree/main/designs/2021-package-exports)，[#14716](https://github.com/eslint/eslint/pull/14716)，[#13654](https://github.com/eslint/eslint/issues/13654)
