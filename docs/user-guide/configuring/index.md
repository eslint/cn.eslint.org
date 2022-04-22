---
title: 配置 ESLint
layout: doc
edit_link: https://github.com/eslint/eslint/edit/main/docs/src/user-guide/configuring/README.md
---
<<<<<<< HEAD
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# 配置 ESLint {#configuring-eslint}
=======
>>>>>>> f04ac1f2a1066809c4638f10601b57cc5fefc9b8

ESLint 被设计为可以根据你的使用情况灵活配置。你可以关闭任何一个规则，只运行基本的语法验证；也可以将 ESLint 默认绑定的规则与你的自定义规则混合使用，以适应你的实际项目需求。有以下两种主要方式来配置 ESLint：

1. **Configuration Comments** - 使用 JavaScript 注释将配置信息直接注入到源代码文件中。
1. **Configuration Files** - 你可以使用 JavaScript，JSON 或者是 YAML 文件来指定整个目录及其所有子目录的配置信息。其形式可以是以 [`.eslintrc.*`](./configuration-files#configuration-file-formats) 命名的文件，也可以是 [`package.json`](https://docs.npmjs.com/files/package.json) 文件中的 `eslintConfig` 字段，这两种形式会被 ESLint 自动寻找并读取，除此之外，你还可以通过 [命令行](https://eslint.org/docs/user-guide/command-line-interface) 指定一个配置文件。

以下是你可以在 ESLint 中可以使用的配置项：

* [**Environments**](./language-options#specifying-environments) - 用于指定脚本的运行环境。每种环境都有一组特定的预定义的全局变量。
* [**Globals**](./language-options#specifying-globals) - 用于设置脚本在执行期间允许访问的全局变量。
* [**Rules**](rules) - 用于设置启用规则及其错误级别。
* [**Plugins**](plugins) - 用于设置供 ESLint 使用的第三方插件，插件中定义了额外的规则、环境，配置等信息。

所有这些选项让你可以更细粒度地控制 ESLint 如何处理你的代码。

## 目录 {#table-of-contents}

[**配置文件**](configuration-files)

* [配置文件格式](./configuration-files#configuration-file-formats)
* [使用配置文件](./configuration-files#using-configuration-files)
* [新增共享配置](./configuration-files#adding-shared-settings)
* [级联与层次结构](./configuration-files#cascading-and-hierarchy)
* [扩展配置文件](./configuration-files#extending-configuration-files)
* [基于 Glob 模式的配置](./configuration-files#configuration-based-on-glob-patterns)
* [个人配置文件](./configuration-files#personal-configuration-files-deprecated)

[**语言选项**](language-options)

* [指定环境](./language-options#specifying-environments)
* [指定全局变量](./language-options#specifying-globals)
* [指定解析器配置项](./language-options#specifying-parser-options)

[**规则**](rules)

* [配置规则](./rules#configuring-rules)
* [禁用规则](./rules#disabling-rules)

[**插件**](plugins)

* [指定解析器](./plugins#specifying-parser)
* [指定预处理器](./plugins#specifying-processor)
* [配置插件](./plugins#configuring-plugins)

[**忽略代码**](ignoring-code)

* [配置文件中设置 `ignorePatterns`](./ignoring-code#ignorepatterns-in-config-files)
* [使用 `.eslintignore` 文件](./ignoring-code#the-eslintignore-file)
* [使用备选文件](./ignoring-code#using-an-alternate-file)
* [在 package.json 中使用 eslintIgnore 字段](./ignoring-code#using-eslintignore-in-packagejson)
* [忽略文件警告](./ignoring-code#ignored-file-warnings)
