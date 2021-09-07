---
title: 命令行界面
layout: doc
edit_link: https://github.com/eslint/eslint/edit/master/docs/user-guide/command-line-interface.md

---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# 命令行界面 {#command-line-interface}

要在 Node.js 中运行 ESLint，你必须安装 npm。如果未安装 npm，请按照此处的说明进行操作：https://www.npmjs.com/

安装 npm 后，运行以下命令

    npm i -g eslint

这将从 npm 安装 ESLint CLI。要运行 ESLint，请使用以下格式：

    eslint [options] [file|dir|glob]*

例如：

    eslint file1.js file2.js

或者：

    eslint lib/**

请注意，当传递一个 glob 作为参数时，它会被你的 shell 扩展。扩展的结果可能因你的 shell 及其配置而异。如果你想使用 node `glob` 语法，你必须使用双引号包裹参数（如果你需要它在 Windows 中运行，请使用双引号），如下所示：

    eslint "lib/**"

##  选项 {#options}

命令行工具有一些选项。你可以通过运行 `eslint -h` 来查看选项。

```text
eslint [options] file.js [file.js] [dir]

Basic configuration:
  --no-eslintrc                  Disable use of configuration from .eslintrc.*
  -c, --config path::String      Use this configuration, overriding .eslintrc.* config options if present
  --env [String]                 Specify environments
  --ext [String]                 Specify JavaScript file extensions - default: .js
  --global [String]              Define global variables
  --parser String                Specify the parser to be used
  --parser-options Object        Specify parser options
  --resolve-plugins-relative-to path::String  A folder where plugins should be resolved from, CWD by default

Specifying rules and plugins:
  --rulesdir [path::String]      Use additional rules from this directory
  --plugin [String]              Specify plugins
  --rule Object                  Specify rules

Fixing problems:
  --fix                          Automatically fix problems
  --fix-dry-run                  Automatically fix problems without saving the changes to the file system
  --fix-type Array               Specify the types of fixes to apply (problem, suggestion, layout)

Ignoring files:
  --ignore-path path::String     Specify path of ignore file
  --no-ignore                    Disable use of ignore files and patterns
  --ignore-pattern [String]      Pattern of files to ignore (in addition to those in .eslintignore)

Using stdin:
  --stdin                        Lint code provided on <STDIN> - default: false
  --stdin-filename String        Specify filename to process STDIN as

Handling warnings:
  --quiet                        Report errors only - default: false
  --max-warnings Int             Number of warnings to trigger nonzero exit code - default: -1

Output:
  -o, --output-file path::String  Specify file to write report to
  -f, --format String            Use a specific output format - default: stylish
  --color, --no-color            Force enabling/disabling of color

Inline configuration comments:
  --no-inline-config             Prevent comments from changing config or rules
  --report-unused-disable-directives  Adds reported errors for unused eslint-disable directives

Caching:
  --cache                        Only check changed files - default: false
  --cache-file path::String      Path to the cache file. Deprecated: use --cache-location - default: .eslintcache
  --cache-location path::String  Path to the cache file or directory
  --cache-strategy String        Strategy to use for detecting changed files - either: metadata or content - default: metadata

Miscellaneous:
  --init                         Run config initialization wizard - default: false
  --env-info                     Output execution environment information - default: false
  --no-error-on-unmatched-pattern  Prevent errors when pattern is unmatched - default: false
  --exit-on-fatal-error          Exit with exit code 2 in case of fatal error - default: false
  --debug                        Output debugging information
  -h, --help                     Show help
  -v, --version                  Output the version number
  --print-config path::String    Print the configuration for the given file
```

可以通过重复选项或使用逗号分隔的列表来指定接受数组值的选项（除了不允许第二种样式的 `--ignore-pattern`）。

示例：

    eslint --ext .jsx --ext .js lib/

    eslint --ext .jsx,.js lib/

### 基础配置 {#basic-configuration}

#### `--no-eslintrc` {#--no-eslintrc}

不使用来自 `.eslintrc.*` 和 `package.json` 文件中的配置。

示例：

    eslint --no-eslintrc file.js

#### `-c`, `--config` {#-c---config}

此选项允许你为 ESLint 指定一个额外的配置文件（更多信息请参阅 [配置 ESLint](configuring)）。

示例：

    eslint -c ~/my-eslint.json file.js

这个示例使用了位于 `~/my-eslint.json` 的配置文件。

如果 `.eslintrc.*` 或 `package.json` 文件中同样进行了配置（即未指定 `--no-eslintrc`），则配置将会被合并。来自这个配置文件的配置优先级高于来自 `.eslintrc.*` 或 `package.json` 文件的配置。

#### `--env` {#--env}

此选项启用特定环境。有关每个环境定义的全局变量的详细信息，请参阅 [指定环境](configuring/language-options#specifying-environments) 文档。此选项仅启用环境，不会禁用在其他配置文件中设置的环境。要指定多个环境，请使用逗号分隔，或多次使用该选项。

示例：

    eslint --env browser,node file.js
    eslint --env browser --env node file.js

#### `--ext` {#--ext}

此选项允许你指定哪些拓展名的文件会在 ESLint 搜索你指定的文件夹中的目标文件时被命中。
默认情况下，ESLint 会命中 `*.js` 文件和你配置中 `overrides` 包含的文件。

实例:

    # 只命中 .ts
    eslint . --ext .ts

    # 同时命中 .js 和 .ts
    eslint . --ext .js --ext .ts

    # 也是同时命中 .js 和 .ts
    eslint . --ext .js,.ts

**注意：**`--ext` 只有在参数为文件夹时生效。如果你使用 glob 模式或者文件名匹配文件，`--ext` 会被忽略。

例如，`eslint lib/* --ext .js` 会匹配 `lib/` 文件夹下的所有文件，无论什么拓展名。

#### `--global` {#--global}

此选项用于定义全局变量，这样它们就不会被 `no-undef` 规则识别为 undefined。默认情况下，所有指定的全局变量会被标记为只读，但是在变量名称后面加上 `:true` 到全局变量后可以确保 `no-undef` 规则也允许写入该全局变量。要指定多个全局变量，请使用逗号分隔，或多次使用该选项。

示例：

    eslint --global require,exports:true file.js
    eslint --global require --global exports:true

#### `--parser` {#--parser}

此选项允许你指定一个被 ESLint 使用的解析器。默认情况下，ESLint 将会使用 `espree`。

#### `--parser-options` {#--parser-options}

此选项允许你指定一个被 ESLint 使用的解析器选项。注意，可用的解析器选项由所使用的解析器决定。

示例：

    echo '3 ** 4' | eslint --stdin --parser-options=ecmaVersion:6 # 解析错误导致失败
    echo '3 ** 4' | eslint --stdin --parser-options=ecmaVersion:7 # 成功，耶！

#### `--resolve-plugins-relative-to` {#--resolve-plugins-relative-to}

更改插件的解析文件夹。默认情况下，插件会从当前工作文件夹中解析。此选项应该在插件被最终用户以外的人安装时使用。它应该设置为依赖插件的项目目录。例如：

* 当使用位于当前项目之外的配置文件（带有 `--config` 标志）时，如果配置使用本地安装的插件，则 `--resolve-plugins-relative-to` 应设置为包含配置文件的文件夹。
* 如果集成工具依赖 ESLint 和一组插件，并且该工具使用预设配置代替用户调用 ESLint，则该工具应将 `--resolve-plugins-relative-to` 设置为该工具的顶级目录。

### 指定规则和插件 {#specifying-rules-and-plugins}

#### `--rulesdir` {#--rulesdir}

此选项允许你指定其他文件夹用于加载规则。它将允许你在运行时动态加载新的规则。如果你有不适合与 ESLint 耦合的自定义规则，此选项将非常有用。

示例：

    eslint --rulesdir my-rules/ file.js

自定义规则目录中的规则必须遵循与耦合规则相同的格式才能正常工作。你还可以通过包含多个 `--rulesdir` 选项来为自定义规则指定多个位置：

    eslint --rulesdir my-rules/ --rulesdir my-other-rules/ file.js

注意，与核心规则和插件规则一样，你仍然需要在配置中或通过 `--rule` CLI 选项启用规则，以便在 lint 期间运行这些规则。使用 `--rulesdir` 指定规则目录不会自动启用该目录中的规则。

#### `--plugin` {#--plugin}

此选项用于指定一个需要加载的插件。你可以省略插件名中的的前缀 `eslint-plugin-`。

在使用指定的插件之前，你需要使用 npm 安装它。

示例：

    eslint --plugin jquery file.js
    eslint --plugin eslint-plugin-mocha file.js

#### `--rule` {#--rule}

此选项用于指定一个需要采用的规则。这些规则会与配置文件中指定的其他规则合并。（你可以使用 `--no-eslintrc` 来改变这个行为。）要指定多个规则，请使用逗号分隔，或多次使用该选项。

如果规则是由插件定义的，那么你需要将插件名作为规则的前缀并使用 `/` 隔开。

示例：

    eslint --rule 'quotes: [2, double]'
    eslint --rule 'guard-for-in: 2' --rule 'brace-style: [2, 1tbs]'
    eslint --rule 'jquery/dollar-sign: 2'

### 修复问题 {#fixing-problems}

#### `--fix` {#--fix}

此选项指使 ESLint 尝试修复尽可能多的问题。修复是针对实际文件本身进行的，仅输出剩余的未修复问题。并非所有问题都可以使用此选项修复，并且该选项在以下情况下不起作用：

1. 当代码通过管道传输到 ESLint 时，此选项会引发错误。
2. 此选项对使用处理器的代码没有影响，除非处理器选择允许自动修复。

如果你想修复从 `stdin` 输入的代码或者其他你想要修复当并不想将修复后的代码写入源文件时，请使用 [`--fix-dry-run`](#--fix-dry-run) 选项。

#### `--fix-dry-run` {#--fix-dry-run}

此选项与 `--fix` 能力一致，除了一点：修复后的代码不会被保存至文件系统中。这将允许你能够修复从 `stdin` 输入的代码（当使用 `--stdin` 标志）。

因为默认的格式化工具不会输出修复后的代码，你需要其他格式化工具（例如 `json`）来获取修复的代码。下面是这种方式的一个例子：

```
getSomeText | eslint --stdin --fix-dry-run --format=json
```

此标志对于需要从命令行自动修复文本而不将其保存到文件系统的集成工具（例如编辑器插件）很有用。

#### `--fix-type` {#--fix-type}

此选项允许你在使用 `--fix` 或 `--fix-dry-run` 时指定要应用的修复类型。三种类型的修复是：

1. `problem` - 修复代码中潜在的错误
2. `suggestion` - 应用可以改进代码的修复
3. `layout` - 应用不改变代码结构（AST）的修复

你可以使用命令行指定一种或多种修复类型。这里列举了一些示例：

```
eslint --fix --fix-type suggestion .
eslint --fix --fix-type suggestion --fix-type problem .
eslint --fix --fix-type suggestion,layout .
```

如果你使用另一个程序来格式化你的代码，但你仍然希望 ESLint 应用其他类型的修复，那么此选项很有用。

### 忽略文件 {#ignoring-files}

#### `--ignore-path` {#--ignore-path}

此选项允许你指定要用作 `.eslintignore` 的文件。默认情况下，ESLint 在当前工作目录中查找 `.eslintignore`。你可以通过提供不同文件的路径来覆盖此行为。

示例：

    eslint --ignore-path tmp/.eslintignore file.js
    eslint --ignore-path .gitignore file.js

#### `--no-ignore` {#--no-ignore}

禁用从配置文件中的 `.eslintignore`、`--ignore-path`、`--ignore-pattern` 和 `ignorePatterns` 属性中排除文件。

示例：

    eslint --no-ignore file.js

#### `--ignore-pattern` {#--ignore-pattern}

此选项允许你指定要忽略的文件（除了 `.eslintignore` 中配置的）。你可以重复该选项以提供多个需要忽略的文件。支持的语法与 `.eslintignore` [文件](configuring/ignoring-code#the-eslintignore-file)相同，使用与 `.gitignore` 相同的[规范](https://git-scm.com/docs/gitignore)。你应该引用你的表达式以避免 shell 对 glob 模式的解析。

示例：

    eslint --ignore-pattern '/lib/' --ignore-pattern '/src/vendor/*' .

### 使用 stdin {#using-stdin}

#### `--stdin` {#--stdin}

此选项告诉 ESLint 从 STDIN 而不是从文件中读取和 lint 源代码。 你可以使用它来将代码通过管道传输到 ESLint。

示例：

    cat myfile.js | eslint --stdin

#### `--stdin-filename` {#--stdin-filename}

此选项允许你指定一个文件名来处理 STDIN。这在处理来自 STDIN 的文件时很有用，并且你有依赖于文件名的规则。

示例：

    cat myfile.js | eslint --stdin --stdin-filename=myfile.js

### 处理警告 {#handling-warnings}

#### `--quiet` {#--quiet}

此选项允许你禁用警告。开启了此选项后，ESLint 将只会报告错误。

示例：

    eslint --quiet file.js

#### `--max-warnings`{#--max-warnings}

此选项允许你指定一个警告阈值，如果你的项目中有太多警告级别的规则违规，它可以用来强制 ESLint 以错误状态退出。

通常，如果 ESLint 运行并没有发现错误（只有警告），它将以成功退出状态退出。但是，如果指定了 `--max-warnings` 并且总警告计数大于指定的阈值，则 ESLint 将以错误状态退出。指定阈值为 `-1` 或省略此选项将阻止此行为。

示例：

    eslint --max-warnings 10 file.js

### 输出 {#output}

#### `-o`, `--output-file` {#-o---output-file}

启用将报告写入文件中的功能。

示例：

    eslint -o ./test/test.html

指定后会以既定的格式输出到提供的文件名中。

#### `-f`, `--format` {#-f---format}

此选项指定控制台的输出格式。可能的格式有：

* [checkstyle](formatters/#checkstyle)
* [codeframe](formatters/#codeframe)
* [compact](formatters/#compact)
* [html](formatters/#html)
* [jslint-xml](formatters/#jslint-xml)
* [json](formatters/#json)
* [junit](formatters/#junit)
* [stylish](formatters/#stylish) (the default)
* [table](formatters/#table)
* [tap](formatters/#tap)
* [unix](formatters/#unix)
* [visualstudio](formatters/#visualstudio)

示例：

    eslint -f compact file.js

你还可以通过指定自定义格式化程序文件的路径从命令行使用自定义格式化程序。

示例：

    eslint -f ./customformat.js file.js

已经通过 npm 安装的格式化程序将会被解析，可以包含或者省略 `eslint-formatter-` 前缀。

示例：

    npm install eslint-formatter-pretty

    eslint -f pretty file.js

    // 等同于:
    eslint -f eslint-formatter-pretty file.js

指定格式化程序后，既定的格式将会输出到控制台。如果你希望将输出保存到一个文件中，你可以在命令行中执行下面这样的操作：

    eslint -f compact file.js > results.txt

此操作会将输出保存到 `results.txt` 文件中。

#### `--color`, `--no-color` {#--color---no-color}

此选项用于强制开启/关闭彩色的输出。你可以使用此选项来覆盖默认行为，即会启用彩色输出，除非未检测到 TTY，例如通过 `cat` 或 `less` 管道传输 `eslint` 时。

示例：

    eslint --color file.js | cat
    eslint --no-color file.js

### 内联配置注释 {#inline-configuration-comments}

#### `--no-inline-config` {#--no-inline-config}

此选项可防止诸如 `/*eslint-disable*/` 或 `/*global foo*/` 之类的内联注释产生任何影响。这允许你设置 ESLint 配置而无需文件修改它。所有内联配置注释都将被忽略，例如：

* `/*eslint-disable*/`
* `/*eslint-enable*/`
* `/*global*/`
* `/*eslint*/`
* `/*eslint-env*/`
* `// eslint-disable-line`
* `// eslint-disable-next-line`

示例：

    eslint --no-inline-config file.js

#### `--report-unused-disable-directives` {#--report-unused-disable-directives}

此选项控制 ESLint 报告指令注释，如 `// eslint-disable-line` 无论如何都不会在该行报告错误。通过清理不再适用的旧 `eslint-disable` 注释，这对于防止未来错误被意外屏蔽很有用。

**Warning**: When using this option, it is possible that new errors will start being reported whenever ESLint or custom rules are upgraded. For example, suppose a rule has a bug that causes it to report a false positive, and an `eslint-disable` comment is added to suppress the incorrect report. If the bug is then fixed in a patch release of ESLint, the `eslint-disable` comment will become unused since ESLint is no longer generating an incorrect report. This will result in a new reported error for the unused directive if the `report-unused-disable-directives` option is used.

Example:

    eslint --report-unused-disable-directives file.js

### Caching

#### `--cache`

Store the info about processed files in order to only operate on the changed ones. The cache is stored in `.eslintcache` by default. Enabling this option can dramatically improve ESLint's running time by ensuring that only changed files are linted.

**Note:** If you run ESLint with `--cache` and then run ESLint without `--cache`, the `.eslintcache` file will be deleted. This is necessary because the results of the lint might change and make `.eslintcache` invalid. If you want to control when the cache file is deleted, then use `--cache-location` to specify an alternate location for the cache file.

**Note:** Autofixed files are not placed in the cache. Subsequent linting that does not trigger an autofix will place it in the cache.

#### `--cache-file`

Path to the cache file. If none specified `.eslintcache` will be used. The file will be created in the directory where the `eslint` command is executed. **Deprecated**: Use `--cache-location` instead.

#### `--cache-location`

Path to the cache location. Can be a file or a directory. If no location is specified, `.eslintcache` will be used. In that case, the file will be created in the directory where the `eslint` command is executed.

If a directory is specified, a cache file will be created inside the specified folder. The name of the file will be based on the hash of the current working directory (CWD). e.g.: `.cache_hashOfCWD`

**Important note:** If the directory for the cache does not exist make sure you add a trailing `/` on \*nix systems or `\` in windows. Otherwise the path will be assumed to be a file.

Example:

    eslint "src/**/*.js" --cache --cache-location "/Users/user/.eslintcache/"

#### `--cache-strategy`

Strategy for the cache to use for detecting changed files. Can be either `metadata` or `content`. If no strategy is specified, `metadata` will be used.

The `content` strategy can be useful in cases where the modification time of your files change even if their contents have not. For example, this can happen during git operations like git clone because git does not track file modification time.

Example:

    eslint "src/**/*.js" --cache --cache-strategy content

### Miscellaneous

#### `--init`

This option will start config initialization wizard. It's designed to help new users quickly create .eslintrc file by answering a few questions, choosing a popular style guide, or inspecting your source files and attempting to automatically generate a suitable configuration.

The resulting configuration file will be created in the current directory.

#### `--env-info`

This option outputs information about the execution environment, including the version of Node, npm, and local and global installations of ESLint. The ESLint team may ask for this information to help solve bugs.

#### `--no-error-on-unmatched-pattern`

This option prevents errors when a quoted glob pattern or `--ext` is unmatched. This will not prevent errors when your shell can't match a glob.

#### `--exit-on-fatal-error`

This option causes ESLint to exit with exit code 2 if one or more fatal parsing errors occur. Without this option, fatal parsing errors are reported as rule violations.

#### `--debug`

This option outputs debugging information to the console. This information is useful when you're seeing a problem and having a hard time pinpointing it. The ESLint team may ask for this debugging information to help solve bugs.

#### `-h`, `--help`

This option outputs the help menu, displaying all of the available options. All other options are ignored when this is present.

#### `-v`, `--version`

This option outputs the current ESLint version onto the console. All other options are ignored when this is present.

#### `--print-config`

This option outputs the configuration to be used for the file passed. When present, no linting is performed and only config-related options are valid.

Example:

    eslint --print-config file.js

## Ignoring files from linting

ESLint supports `.eslintignore` files to exclude files from the linting process when ESLint operates on a directory. Files given as individual CLI arguments will be exempt from exclusion. The `.eslintignore` file is a plain text file containing one pattern per line. It can be located in any of the target directory's ancestors; it will affect files in its containing directory as well as all sub-directories. Here's a simple example of a `.eslintignore` file:

    temp.js
    **/vendor/*.js

A more detailed breakdown of supported patterns and directories ESLint ignores by default can be found in [Ignoring Code](configuring/ignoring-code).

## Exit codes

When linting files, ESLint will exit with one of the following exit codes:

* `0`: Linting was successful and there are no linting errors. If the `--max-warnings` flag is set to `n`, the number of linting warnings is at most `n`.
* `1`: Linting was successful and there is at least one linting error, or there are more linting warnings than allowed by the `--max-warnings` option.
* `2`: Linting was unsuccessful due to a configuration problem or an internal error.
