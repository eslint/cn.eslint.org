---
title: Command Line Interface
layout: doc
edit_link: https://github.com/eslint/eslint/edit/master/docs/user-guide/command-line-interface.md

---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# Command Line Interface

# 命令行

To run ESLint on Node.js, you must have npm installed. If npm is not installed, follow the instructions here: https://www.npmjs.com/

为了在 Node.js 上运行 ESLint，你必须先安装 npm。如果还没有安装 npm ，按照这里的说明进行安装：[https://www.npmjs.com/](https://www.npmjs.com/)。

Once npm is installed, run the following

一旦安装了 npm，运行下面的命令

    npm i -g eslint

This installs the ESLint CLI from the npm repository. To run ESLint, use the following format:

这句命令从 npm 仓库安装了 ESLint CLI。使用以下格式运行 ESLint：

    eslint [options] [file|dir|glob]*

Such as:

比如：

    eslint file1.js file2.js

or:

或者：

    eslint lib/**

Please note that when passing a glob as a parameter, it will be expanded by your shell. The results of the expansion can vary depending on your shell, and its configuration. If you want to use node `glob` syntax, you have to quote your parameter (using double quotes if you need it to run in Windows), as follows:

请注意，传递一个 glob 模式作为参数时，它将由你的 shell 进行扩展。扩展的结果取决于你的 shell 及其配置。如果你想使用 node 的 `glob` 语法，你需要给参数加上引号（在 windows 系统运行时，如果你需要，也可以使用双引号 ），像下面这样：

    eslint "lib/**"

## Options

The command line utility has several options. You can view the options by running `eslint -h`.

命令行工具有几个选项，你可以通过运行 `eslint -h` 查看所有选项。

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

Miscellaneous:
  --init                         Run config initialization wizard - default: false
  --debug                        Output debugging information
  -h, --help                     Show help
  -v, --version                  Output the version number
  --print-config path::String    Print the configuration for the given file
```

Options that accept array values can be specified by repeating the option or with a comma-delimited list (other than `--ignore-pattern` which does not allow the second style).

这些选项可以通过重复该选项或使用逗号分隔的列表进行指定（除了 `--ignore-pattern` 不允许第二种风格）。

Example:

示例：

    eslint --ext .jsx --ext .js lib/

    eslint --ext .jsx,.js lib/

### Basic configuration

#### `--no-eslintrc`

Disables use of configuration from `.eslintrc.*` and `package.json` files.

禁用 `.eslintrc.*` 和 `package.json` 文件中的配置。

Example:

示例：

    eslint --no-eslintrc file.js

#### `-c`, `--config`

This option allows you to specify an additional configuration file for ESLint (see [Configuring ESLint](configuring) for more).

该选项允许你为 ESLint (查看 [Configuring ESLint](configuring) 了解更多)指定一个额外的配置文件。

Example:

示例：

    eslint -c ~/my-eslint.json file.js

This example uses the configuration file at `~/my-eslint.json`.

这个例子使用了 `~/my-eslint.json` 作为配置文件。

If `.eslintrc.*` and/or `package.json` files are also used for configuration (i.e., `--no-eslintrc` was not specified), the configurations will be merged. Options from this configuration file have precedence over the options from `.eslintrc.*` and `package.json` files.

如果 `.eslintrc.*` 和/或 `package.json` 文件也用于配置（比如，不指定 `--no-eslintrc`），配置将被合并。此配置文件中的选项优先于 `.eslintrc.*` 和 `package.json` 文件中的选项。

#### `--env`

This option enables specific environments. Details about the global variables defined by each environment are available on the [configuration](configuring) documentation. This option only enables environments; it does not disable environments set in other configuration files. To specify multiple environments, separate them using commas, or use the option multiple times.

这个选项用来指定环境。关于每种环境中定义的全局变量的详细信息请查看 [configuration](configuring) 文档。该选项只能启用环境，不能禁用在其它配置文件中设置的环境。要指定多个环境的话，使用逗号分隔它们，或多次使用这个选项。

Examples:

示例：

    eslint --env browser,node file.js
    eslint --env browser --env node file.js

#### `--ext`

This option allows you to specify which file extensions ESLint will use when searching for JavaScript files in the directories you specify.
By default, it uses `.js` as the only file extension.

这个选项允许你指定 ESLint 在指定的目录下查找 JavaScript 文件时要使用的文件扩展名。默认情况下，它使用 `.js` 作为唯一性文件扩展名。

Examples:

示例：

    # Use only .js2 extension
    eslint . --ext .js2

    # Use both .js and .js2
    eslint . --ext .js --ext .js2

    # Also use both .js and .js2
    eslint . --ext .js,.js2

**Note:** `--ext` is only used when the arguments are directories. If you use glob patterns or file names, then `--ext` is ignored.

**注意：**`--ext` 只有在参数为目录时，才生效。如果你使用 glob 模式或文件名，`--ext` 将被忽略

For example, `eslint lib/* --ext .js` will match all files within the `lib/` directory, regardless of extension.

例如，`eslint lib/* --ext .js` 将匹配 `lib/` 下的所有文件，忽略扩展名。

#### `--global`

This option defines global variables so that they will not be flagged as undefined by the `no-undef` rule. Any specified global variables are assumed to be read-only by default, but appending `:true` to a variable's name ensures that `no-undef` will also allow writes. To specify multiple global variables, separate them using commas, or use the option multiple times.

这个选项定义了全局变量，这样它们就不会被 `no-undef` 规则标记为未定义了。任何指定的全局变量默认是只读的，在变量名字后加上 `:true` 后会使它变为可写。要指定多个变量，使用逗号分隔它们，或多次使用这个选项。

Examples:

示例：

    eslint --global require,exports:true file.js
    eslint --global require --global exports:true

#### `--parser`

This option allows you to specify a parser to be used by ESLint. By default, `espree` will be used.

该选项允许你为 ESLint 指定一个解析器。默认情况下，使用 `espree`。

#### `--parser-options`

This option allows you to specify parser options to be used by ESLint. Note that the available parser options are determined by the parser being used.

该选项允许你指定 ESLint 要使用的解析器选项。注意，可用的解析器选项取决于你所选用的解析器。

Examples:

示例：

    echo '3 ** 4' | eslint --stdin --parser-options=ecmaVersion:6 # will fail with a parsing error
    echo '3 ** 4' | eslint --stdin --parser-options=ecmaVersion:7 # succeeds, yay!

#### `--resolve-plugins-relative-to`

Changes the folder where plugins are resolved from. By default, plugins are resolved from the current working directory. This option should be used when plugins were installed by someone other than the end user. It should be set to the project directory of the project that has a dependency on the necessary plugins. For example:

更改插件解析所在的文件夹。默认情况下，插件从当前工作目录解析。当插件不是由其他人而非最终用户安装的时候，应该使用这个选项。它应该设置为依赖于必要插件的项目的项目目录。例如：

* When using a config file that is located outside of the current project (with the `--config` flag), if the config uses plugins which are installed locally to itself, `--resolve-plugins-relative-to` should be set to the directory containing the config file.
* 当使用位于当前项目外部的配置文件(带有 `--config` 标志)时，如果配置使用本地安装的插件，`--resolve-plugins-relative-to` 应该设置为包含配置文件的目录。
* If an integration has dependencies on ESLint and a set of plugins, and the tool invokes ESLint on behalf of the user with a preset configuration, the tool should set `--resolve-plugins-relative-to` to the top-level directory of the tool.
* 如果集成依赖于 ESLint 和一组插件，并且该工具使用预先设置的配置代表用户调用 ESLint，则该工具应将`--resolve-plugins-relative-to` 设置为工具的顶层目录。

### Specifying rules and plugins

#### `--rulesdir`

This option allows you to specify another directory from which to load rules files. This allows you to dynamically load new rules at run time. This is useful when you have custom rules that aren't suitable for being bundled with ESLint.

这个选项允许你指定另一个加载规则文件的目录。这允许你在运行时动态加载新规则。当你有自定义规则，而且这些规则不适合绑定到 ESLint 时，这会很有用。

Example:

示例：

    eslint --rulesdir my-rules/ file.js

The rules in your custom rules directory must follow the same format as bundled rules to work properly. You can also specify multiple locations for custom rules by including multiple `--rulesdir` options:

为了使你自定义的规则目录下的规则正常工作，必须遵照同绑定的规则一样的格式。你也可以通过包含多个 `--rulesdir` 选项来为自定义规则指定多个位置。

    eslint --rulesdir my-rules/ --rulesdir my-other-rules/ file.js

Note that, as with core rules and plugin rules, you still need to enable the rules in configuration or via the `--rule` CLI option in order to actually run those rules during linting. Specifying a rules directory with `--rulesdir` does not automatically enable the rules within that directory.

注意，与核心规则和插件规则一样，你仍需要在配置文件或通过 `--rule` 命令行选项启用这些规则，以便在检测过程中实际运行这些规则。使用 `--rulesdir` 指定一个规则目录不会自动启用那些目录下的规则。

#### `--plugin`

This option specifies a plugin to load. You can omit the prefix `eslint-plugin-` from the plugin name.

这个选项指定一个要加载的插件。你可以省略插件名的前缀 `eslint-plugin-`。

Before using the plugin, you have to install it using npm.

在你使用插件之前，你必须使用 npm 安装它。

Examples:

示例：

    eslint --plugin jquery file.js
    eslint --plugin eslint-plugin-mocha file.js

#### `--rule`

This option specifies rules to be used. These rules will be merged with any rules specified with configuration files. (You can use `--no-eslintrc` to change that behavior.) To define multiple rules, separate them using commas, or use the option multiple times. The [levn](https://github.com/gkz/levn#levn--) format is used for specifying the rules.

这个选项指定要使用的规则。这些规则将会与配制文件中指定的规则合并。（你可以使用 `--no-eslintrc` 改变这种行为。）要定义多个规则，使用逗号分隔它们，或多次使用这个选项。[levn](https://github.com/gkz/levn#levn--) 格式被用来指定规则。

If the rule is defined within a plugin, you have to prefix the rule ID with the plugin name and a `/`.

如果这个规则定义在插件内，你必须在规则 ID 前使用插件名和 `/`，即 `插件名/规则ID`。

Examples:

示例：

    eslint --rule 'quotes: [2, double]'
    eslint --rule 'guard-for-in: 2' --rule 'brace-style: [2, 1tbs]'
    eslint --rule 'jquery/dollar-sign: 2'

### Fixing problems

#### `--fix`

This option instructs ESLint to try to fix as many issues as possible. The fixes are made to the actual files themselves and only the remaining unfixed issues are output. Not all problems are fixable using this option, and the option does not work in these situations:

该选项指示 ESLint 试图修复尽可能多的问题。修复只针对实际文件本身，而且剩下的未修复的问题才会输出。不是所有的问题都能使用这个选项进行修复，该选项在以下情形中不起作用：

1. This option throws an error when code is piped to ESLint.
1. 当代码传递给 ESLint 时，这个选项抛出一个错误。
1. This option has no effect on code that uses a processor, unless the processor opts into allowing autofixes.
1. 该选项对使用处理器的代码没有影响，除非处理器选择允许自动修复。

If you want to fix code from `stdin` or otherwise want to get the fixes without actually writing them to the file, use the [`--fix-dry-run`](#--fix-dry-run) option.

如果你想从 `stdin` 修复代码或希望在不实际写入到文件的情况下进行修复，使用 [`--fix-dry-run`](#--fix-dry-run) 选项。

#### `--fix-dry-run`

This option has the same effect as `--fix` with one difference: the fixes are not saved to the file system. This makes it possible to fix code from `stdin` (when used with the `--stdin` flag).

该选项与 `--fix` 有相同的效果，唯一一点不同是，修复不会保存到文件系统中。这也是从 `stdin`（当使用 `--stdin` 标记时）修复代码成为可能。

Because the default formatter does not output the fixed code, you'll have to use another one (e.g. `json`) to get the fixes. Here's an example of this pattern:

因为默认的格式化器不会输出修复的代码，你必须使用另外一个（比如 `json`）进行修复。下面是这个模式的一个例子：

```
getSomeText | eslint --stdin --fix-dry-run --format=json
```

This flag can be useful for integrations (e.g. editor plugins) which need to autofix text from the command line without saving it to the filesystem.

该标记对集成（比如，编辑器插件）很有用，它需要从命令行进行自动修复，而不需要保存到文件系统。

#### `--fix-type`

This option allows you to specify the type of fixes to apply when using either `--fix` or `--fix-dry-run`. The three types of fixes are:

此选项允许你在使用 `--fix` 或 `--fix-dry-run` 时指定要应用的修复的类型。修复的三种类型是:

1. `problem` - fix potential errors in the code
1. `problem` - 修复代码中的潜在错误
1. `suggestion` - apply fixes to the code that improve it
1. `suggestion` - 对改进它的代码应用修复
1. `layout` - apply fixes that do not change the program structure (AST)
1. `layout` - 应用不改变程序结构 (AST) 的修复

You can specify one or more fix type on the command line. Here are some examples:

你可以在命令行上指定一个或多个fix类型。下面是一些例子:

```
eslint --fix --fix-type suggestion .
eslint --fix --fix-type suggestion --fix-type problem .
eslint --fix --fix-type suggestion,layout .
```

This option is helpful if you are using another program to format your code but you would still like ESLint to apply other types of fixes.

如果你正在使用另一个程序来格式化代码，但仍然希望 ESLint 应用其他类型的修复程序，则此选项非常有用。

### Ignoring files

#### `--ignore-path`

This option allows you to specify the file to use as your `.eslintignore`. By default, ESLint looks in the current working directory for `.eslintignore`. You can override this behavior by providing a path to a different file.

这个选项允许你指定一个文件作为 `.eslintignore`。默认情况下，ESLint 在当前工作目录下查找 `.eslintignore`。你可以通过提供另一个文件的路径改变这种行为。

Example:

示例：

    eslint --ignore-path tmp/.eslintignore file.js
    eslint --ignore-path .gitignore file.js

#### `--no-ignore`

Disables excluding of files from `.eslintignore`, `--ignore-path` and `--ignore-pattern`.

禁止排除 `.eslintignore`、`--ignore-path` 和 `--ignore-pattern` 文件中指定的文件。

Example:

示例：

    eslint --no-ignore file.js

#### `--ignore-pattern`

This option allows you to specify patterns of files to ignore (in addition to those in `.eslintignore`). You can repeat the option to provide multiple patterns. The supported syntax is the same as for `.eslintignore` [files](./configuring#.eslintignore), which use the same patterns as the `.gitignore` [specification](https://git-scm.com/docs/gitignore). You should quote your patterns in order to avoid shell interpretation of glob patterns.

该选项允许你指定要忽略的文件模式(除了 `.eslintignore` 中的模式之外)。你可以重复该选项以提供多个模式。所支持的语法同 `.eslintignore` [文件](./configuring#.eslintignore) 中的相同，即使用同 `.gitignore` [规范](https://git-scm.com/docs/gitignore) 相同的模式。你应该将你的模式用引号括起来，以避免对glob模式进行shell解释。

Example:

示例：

    eslint --ignore-pattern '/lib/' --ignore-pattern '/src/vendor/*' .

### Using stdin

#### `--stdin`

This option tells ESLint to read and lint source code from STDIN instead of from files. You can use this to pipe code to ESLint.

这个选项告诉 ESLint 从 STDIN 而不是从文件中读取和检测源码。你可以使用该选项向 ESLint 来输入代码。

Example:

示例：

    cat myfile.js | eslint --stdin

#### `--stdin-filename`

This option allows you to specify a filename to process STDIN as. This is useful when processing files from STDIN and you have rules which depend on the filename.

这个选项允许你指定一个文件名去处理 STDIN。当你处理从 STDIN 来的文件和有规则依赖于这个文件名时，这会很有用。

Example

示例：

    cat myfile.js | eslint --stdin --stdin-filename=myfile.js

### Handling warnings

#### `--quiet`

This option allows you to disable reporting on warnings. If you enable this option, only errors are reported by ESLint.

这个选项允许你禁止报告警告。如果开启这个选项，ESLint 只会报告错误。

Example:

示例：

    eslint --quiet file.js

#### `--max-warnings`

This option allows you to specify a warning threshold, which can be used to force ESLint to exit with an error status if there are too many warning-level rule violations in your project.

这个选项允许你指定一个警告的阈值，当你的项目中有太多违反规则的警告时，这个阈值被用来强制 ESLint 以错误状态退出。

Normally, if ESLint runs and finds no errors (only warnings), it will exit with a success exit status. However, if `--max-warnings` is specified and the total warning count is greater than the specified threshold, ESLint will exit with an error status. Specifying a threshold of `-1` or omitting this option will prevent this behavior.

通常情况下，如果 ESLint 运行过程中，没有出现错误（只有警告），它将以成功的状态退出。然而，如果指定了 `--max-warnings`，而且警告的总数超过了指定的阈值，ESLint 将以错误的状态退出。通过指定一个 `-1` 的阈值或省略这个选项将会避免这种行为。

Example:

示例：

    eslint --max-warnings 10 file.js

### Output

#### `-o`, `--output-file`

Enable report to be written to a file.

将报告写到一个文件。

Example:

示例：

    eslint -o ./test/test.html

When specified, the given format is output into the provided file name.

当指定这个选项时，就会按给定的格式输出到指定的文件名。

#### `-f`, `--format`

This option specifies the output format for the console. Possible formats are:

这个选项指定了控制台的输出格式。可用的格式是：
 
* [checkstyle](formatters/#checkstyle)
* [checkstyle](formatters/#checkstyle)
* [codeframe](formatters/#codeframe)
* [codeframe](formatters/#codeframe)
* [compact](formatters/#compact)
* [compact](formatters/#compact)
* [html](formatters/#html)
* [html](formatters/#html)
* [jslint-xml](formatters/#jslint-xml)
* [jslint-xml](formatters/#jslint-xml)
* [json](formatters/#json)
* [json](formatters/#json)
* [junit](formatters/#junit)
* [junit](formatters/#junit)
* [stylish](formatters/#stylish) (the default)
* [stylish](formatters/#stylish) (默认)
* [table](formatters/#table)
* [table](formatters/#table)
* [tap](formatters/#tap)
* [tap](formatters/#tap)
* [unix](formatters/#unix)
* [unix](formatters/#unix)
* [visualstudio](formatters/#visualstudio)
* [visualstudio](formatters/#visualstudio)


Example:

示例：

    eslint -f compact file.js

You can also use a custom formatter from the command line by specifying a path to the custom formatter file.

你也可以在命令行中通过指定一个自定义的格式的文件路径来使用自定义的格式。

Example:

示例：

    eslint -f ./customformat.js file.js

An npm-installed formatter is resolved with or without `eslint-formatter-` prefix.

通过 npm 安装的格式化器可带可不带 `eslint-formatter-` 前缀。

Example:

示例：

    npm install eslint-formatter-pretty

    eslint -f pretty file.js

    // equivalent:
    eslint -f eslint-formatter-pretty file.js

When specified, the given format is output to the console. If you'd like to save that output into a file, you can do so on the command line like so:

当指定之后，给定的格式就输出到控制台。如果你想将输出保存到一个文件，你可以在命令行上这样操作：

    eslint -f compact file.js > results.txt

This saves the output into the `results.txt` file.

这会将输出保存到 `results.txt` 文件。

#### `--color`, `--no-color`

This option forces the enabling/disabling of colorized output. You can use this to override the default behavior, which is to enable colorized output unless no TTY is detected, such as when piping `eslint` through `cat` or `less`.

此选项强制启用/禁用彩色输出。你可以使用此方法来覆盖默认行为，即在未检测到TTY的情况下启用彩色输出，例如通过 `cat` 或 `less` 进行管道输出 `eslint`。

Examples:

示例：

    eslint --color file.js | cat
    eslint --no-color file.js

### Inline configuration comments

#### `--no-inline-config`

This option prevents inline comments like `/*eslint-disable*/` or
`/*global foo*/` from having any effect. This allows you to set an ESLint
config without files modifying it. All inline config comments are ignored, e.g.:

这个选项会阻止像 `/*eslint-disable*/` 或者 `/*global foo*/`  这样的内联注释起作用。这允许你在不修改文件的情况下设置一个 ESLint 配置。所有的内联注释都会被忽略，比如：

* `/*eslint-disable*/`
* `/*eslint-disable*/`
* `/*eslint-enable*/`
* `/*eslint-enable*/`
* `/*global*/`
* `/*global*/`
* `/*eslint*/`
* `/*eslint*/`
* `/*eslint-env*/`
* `/*eslint-env*/`
* `// eslint-disable-line`
* `// eslint-disable-line`
* `// eslint-disable-next-line`
* `// eslint-disable-next-line`

Example:

示例：

    eslint --no-inline-config file.js

#### `--report-unused-disable-directives`

This option causes ESLint to report directive comments like `// eslint-disable-line` when no errors would have been reported on that line anyway. This can be useful to prevent future errors from unexpectedly being suppressed, by cleaning up old `eslint-disable` comments which are no longer applicable.

当像 `// eslint-disable-line` 这样的指令注释所在行没有任何错误报告时，该选项会导致 ESLint 报告这样的指令注释。通过清理旧的不再适用 `eslint-disable` 注释，对防止将来意外的被抑制的错误很有用。

**Warning**: When using this option, it is possible that new errors will start being reported whenever ESLint or custom rules are upgraded. For example, suppose a rule has a bug that causes it to report a false positive, and an `eslint-disable` comment is added to suppress the incorrect report. If the bug is then fixed in a patch release of ESLint, the `eslint-disable` comment will become unused since ESLint is no longer generating an incorrect report. This will result in a new reported error for the unused directive if the `report-unused-disable-directives` option is used.

**警告：**但使用此选项，当升级 ESLint 或自定义规则时，可能会出现新的错误。例如，假如一个规则有 bug，导致它报告一个错误，而添加了 `eslint-disable` 注释，抑制了错误报告。如果该 bug 在 ESLint 补丁发布中被修复，`eslint-disable` 将不再被使用，因为 ESLint 不再产生一个错误报告。这将导致如果使用了 `report-unused-disable-directives` 选项，未使用的指令会报告一个新的错误。

Example:

示例：

    eslint --report-unused-disable-directives file.js

### Caching

#### `--cache`

Store the info about processed files in order to only operate on the changed ones. The cache is stored in `.eslintcache` by default. Enabling this option can dramatically improve ESLint's running time by ensuring that only changed files are linted.

存储处理过的文件的信息以便只对有改变的文件进行操作。缓存默认被存储在 `.eslintcache`。启用这个选项可以显著改善 ESLint 的运行时间，确保只对有改变的文件进行检测。

**Note:** If you run ESLint with `--cache` and then run ESLint without `--cache`, the `.eslintcache` file will be deleted. This is necessary because the results of the lint might change and make `.eslintcache` invalid. If you want to control when the cache file is deleted, then use `--cache-location` to specify an alternate location for the cache file.

**注意：**如果你运行 ESLint `--cache`，然后又运行 ESLint 不带 `--cache`，`.eslintcache` 文件将被删除。这是必要的，因为检测的结果可能会改变，使 `.eslintcache` 无效。如果你想控制缓存文件何时被删除，那么使用 `--cache-location` 来指定一个缓存文件的位置。

**Note:** Autofixed files are not placed in the cache. Subsequent linting that does not trigger an autofix will place it in the cache.

**注意：**自动修复的文件不放在缓存中。不触发自动修复的后续检测将把它放在缓存中。

#### `--cache-file`

Path to the cache file. If none specified `.eslintcache` will be used. The file will be created in the directory where the `eslint` command is executed. **Deprecated**: Use `--cache-location` instead.

缓存文件的路径。如果没有指定，则使用 `.eslintcache`。这个文件会在 `eslint` 命令行被执行的文件目录中被创建。
**已弃用：** 请使用 `--cache-location`。

#### `--cache-location`

Path to the cache location. Can be a file or a directory. If no location is specified, `.eslintcache` will be used. In that case, the file will be created in the directory where the `eslint` command is executed.

缓存文件的路径。可以是一个文件或者一个目录。如果没有指定，则使用 `.eslintcache` 。这个文件会在 `eslint` 命令行被执行的文件目录中被创建。

If a directory is specified, a cache file will be created inside the specified folder. The name of the file will be based on the hash of the current working directory (CWD). e.g.: `.cache_hashOfCWD`

如果指定一个目录，缓存文件将在指定的文件夹下被创建。文件名将基于当前工作目录（CWD) 的  hash 值，比如：`.cache_hashOfCWD`。

**Important note:** If the directory for the cache does not exist make sure you add a trailing `/` on \*nix systems or `\` in windows. Otherwise the path will be assumed to be a file.

**重要提示：**如果不存在缓存文件的目录，请确保在尾部添加 `/`（\*nix 系统）或 `\`（windows 系统）。否则该路径将被假定为是一个文件。

Example:

示例：

    eslint "src/**/*.js" --cache --cache-location "/Users/user/.eslintcache/"

### Miscellaneous

#### `--init`

This option will start config initialization wizard. It's designed to help new users quickly create .eslintrc file by answering a few questions, choosing a popular style guide, or inspecting your source files and attempting to automatically generate a suitable configuration.

这个选项将会配置初始化向导。它被用来帮助新用户快速地创建 `.eslintrc` 文件，用户通过回答一些问题，选择一个流行的风格指南，或检查你的源文件，自动生成一个合适的配置。

The resulting configuration file will be created in the current directory.

生成的配置文件将被创建在当前目录。


#### `--debug`

This option outputs debugging information to the console. This information is useful when you're seeing a problem and having a hard time pinpointing it. The ESLint team may ask for this debugging information to help solve bugs.

这个选项将调试信息输出到控制台。当你看到一个问题并且很难定位它时，这些调试信息会很有用。ESLint 团队可能会通过询问这些调试信息帮助你解决 bug。

#### `-h`, `--help`

This option outputs the help menu, displaying all of the available options. All other options are ignored when this is present.

这个选项会输出帮助菜单，显示所有可用的选项。当有这个选项时，忽略其他所有选项。

#### `-v`, `--version`

This option outputs the current ESLint version onto the console. All other options are ignored when this is present.

这个选项在控制台输出当前 ESlint 的版本。当有这个标记时，忽略其他所有标记。

#### `--print-config`

This option outputs the configuration to be used for the file passed. When present, no linting is performed and only config-related options are valid.

这个选项输出传递的文件使用的配置。当有这个标记时，不进行检测，只有配置相关的选项才是有效的。

Example:

示例：

    eslint --print-config file.js

## Ignoring files from linting

ESLint supports `.eslintignore` files to exclude files from the linting process when ESLint operates on a directory. Files given as individual CLI arguments will be exempt from exclusion. The `.eslintignore` file is a plain text file containing one pattern per line. It can be located in any of the target directory's ancestors; it will affect files in its containing directory as well as all sub-directories. Here's a simple example of a `.eslintignore` file:

当 ESLint 作用于一个目录时，ESLint 支持使用 `.eslintignore` 文件来避免检测处理。通过特定的命令行参数指定的文件就可以免除被忽略。`.eslintignore` 文件是个纯文本文件，每一行都包含一种模式。它可以放在目标目录的任何父级目录；它将影响到它所在的当前目录和所有子目录。这里是 `.eslintignore` 文件的一个简单示例：

    node_modules/*
    **/vendor/*.js

A more detailed breakdown of supported patterns and directories ESLint ignores by default can be found in [Configuring ESLint](configuring#ignoring-files-and-directories).

在 [Configuring ESLint](configuring#ignoring-files-and-directories) 中可以找到更多关于 ESLint  默认忽略的受支持模式和目录的详细信息。

## Exit codes

When linting files, ESLint will exit with one of the following exit codes:

当检测文件时，ESLint 将使用以下退出代码之一退出:

* `0`: Linting was successful and there are no linting errors. If the `--max-warnings` flag is set to `n`, the number of linting warnings is at most `n`.
* `0`: 检测成功，没有错误。如果 `--max-warnings` 标志被设置为 `n`，那么警告数量最多为`n`。
* `1`: Linting was successful and there is at least one linting error, or there are more linting warnings than allowed by the `--max-warnings` option.
* `1`: 检测成功，并且至少有一个错误，或者警告多于 `--max-warnings` 选项所允许的警告。
* `2`: Linting was unsuccessful due to a configuration problem or an internal error.
* `2`: 由于配置问题或内部错误，检测未能成功。
