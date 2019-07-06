---
title: strict - Rules
layout: doc
edit_link: https://github.com/eslint/eslint/edit/master/docs/rules/strict.md
rule_type: suggestion
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# require or disallow strict mode directives (strict)

# 要求或禁止使用严格模式指令 (strict)

(fixable) The `--fix` option on the [command line](../user-guide/command-line-interface#fixing-problems) can automatically fix some of the problems reported by this rule.

(fixable) [命令行](../user-guide/command-line-interface#fixing-problems)中的 `--fix` 选项可以自动修复一些该规则报告的问题。

A strict mode directive is a `"use strict"` literal at the beginning of a script or function body. It enables strict mode semantics.

严格模式指令是在脚本或函数体开始位置放置一个 `"use strict"` 字面量。它启用了严格模式语义。

When a directive occurs in global scope, strict mode applies to the entire script:

当指令出现在全局作用域，严格模式指令适用于整个脚本：

```js
"use strict";

// strict mode

function foo() {
    // strict mode
}
```

When a directive occurs at the beginning of a function body, strict mode applies only to that function, including all contained functions:

当指令出现在函数体开始位置，严格模式指令只适用于那个函数，包括其内部函数：

```js
function foo() {
    "use strict";
    // strict mode
}

function foo2() {
    // not strict mode
};

(function() {
    "use strict";
    function bar() {
        // strict mode
    }
}());
```

In the **CommonJS** module system, a hidden function wraps each module and limits the scope of a "global" strict mode directive.

在 **CommonJS** 模块系统，a hidden function wraps each module and limits the scope of a "global" strict mode directive。

In **ECMAScript** modules, which always have strict mode semantics, the directives are unnecessary.

在 **ECMAScript** 模块中，总是处于严格模式语义下，严格模式指令也就没必要了。

## Rule Details

This rule requires or disallows strict mode directives.

该规则要求或禁止严格模式指令。

This rule disallows strict mode directives, no matter which option is specified, if ESLint configuration specifies either of the following as [parser options](/docs/user-guide/configuring#specifying-parser-options):

该规则禁止严格模式指令，无论指定了下面的哪个选项 [parser options](/docs/user-guide/configuring#specifying-parser-options)：

* `"sourceType": "module"` that is, files are **ECMAScript** modules
* `"sourceType": "module"` 也就是说，文件是 **ECMAScript** 模块
* `"impliedStrict": true` property in the `ecmaFeatures` object
* `"impliedStrict": true` `ecmaFeatures` 对象中的属性

This rule disallows strict mode directives, no matter which option is specified, in functions with non-simple parameter lists (for example, parameter lists with default parameter values) because that is a syntax error in **ECMAScript 2016** and later. See the examples of the [function](#function) option.

在有非常规参数列表（例如，有默认参数值）的函数中，不管指定的了什么选项，该规则禁止指定严格模式指令，因为 在 **ECMAScript 2016** 和以后的版本中将会报语法错误。查看[function](#function) 选项。

The `--fix` option on the command line does not insert new `"use strict"` statements, but only removes unneeded statements.

命令行的 `--fix` 选项不会插入新的 `"use strict"` 语句，只会移除不再需要的语句。

## Options

This rule has a string option:

该规则有一个字符串选项：

* `"safe"` (default) corresponds either of the following options:
* `"safe"` (默认) 对应下面的选项：
    * `"global"` if ESLint considers a file to be a **CommonJS** module
    * `"global"` 如果 ESLint 认为一个文件是 **CommonJS** 模块
    * `"function"` otherwise
    * `"function"` 如果 ESLint 认为一个文件不是 **CommonJS** 模块
* `"global"` requires one strict mode directive in the global scope (and disallows any other strict mode directives)
* `"global"` 要求在全局作用域下有一个严格模式指令（不允许任何其它严格模式指令）
* `"function"` requires one strict mode directive in each top-level function declaration or expression (and disallows any other strict mode directives)
* `"function"` 要求在函数声明或表达式开始位置有一个严格模式指令（不允许任何其它严格模式指令）
* `"never"` disallows strict mode directives
* `"never"` 禁用严格模式指令

### safe

The `"safe"` option corresponds to the `"global"` option if ESLint considers a file to be a **Node.js** or **CommonJS** module because the configuration specifies either of the following:

如果 ESLint 认为一个文件是 **Node.js** 或 **CommonJS** 模块，`"safe"` 选项就对应 `"global"` 选项，因为配置指定了下面中的一个：

* `node` or `commonjs` [environments](/docs/user-guide/configuring#specifying-environments)
* `node` 或 `commonjs` [environments](/docs/user-guide/configuring#specifying-environments)
* `"globalReturn": true` property in the `ecmaFeatures` object of [parser options](/docs/user-guide/configuring#specifying-parser-options)
* `"globalReturn": true` [parser options](/docs/user-guide/configuring#specifying-parser-options) 的 `ecmaFeatures` 对象中的属性

Otherwise the `"safe"` option corresponds to the `"function"` option. Note that if `"globalReturn": false` is explicitly specified in the configuration, the `"safe"` option will correspond to the `"function"` option regardless of the specified environment.

否则 `"safe"` 选项就对应 `"function"` 选项。注意，如果在配置中显示指定了 `"globalReturn": false`，则  `"safe"` 选项等同于 `"function"` 选项，不受限于所指定的环境。


### global

Examples of **incorrect** code for this rule with the `"global"` option:

选项 `"global"` 的 **错误** 代码示例：

```js
/*eslint strict: ["error", "global"]*/

function foo() {
}
```

```js
/*eslint strict: ["error", "global"]*/

function foo() {
    "use strict";
}
```

```js
/*eslint strict: ["error", "global"]*/

"use strict";

function foo() {
    "use strict";
}
```

Examples of **correct** code for this rule with the `"global"` option:

选项 `"global"` 的 **正确** 代码示例：

```js
/*eslint strict: ["error", "global"]*/

"use strict";

function foo() {
}
```

### function

This option ensures that all function bodies are strict mode code, while global code is not. Particularly if a build step concatenates multiple scripts, a strict mode directive in global code of one script could unintentionally enable strict mode in another script that was not intended to be strict code.

该个选项确保所有的函数体都是严格模式代码，而全局代码不是。特别是如果一个构建步骤链接多个脚本，一个脚本中的全局作用域的严格模式指令会无意间启用另一个脚本的严格模式。

Examples of **incorrect** code for this rule with the `"function"` option:

选项 `"function"` 的 **错误** 代码示例：

```js
/*eslint strict: ["error", "function"]*/

"use strict";

function foo() {
}
```

```js
/*eslint strict: ["error", "function"]*/

function foo() {
}

(function() {
    function bar() {
        "use strict";
    }
}());
```

```js
/*eslint strict: ["error", "function"]*/
/*eslint-env es6*/

// Illegal "use strict" directive in function with non-simple parameter list.
// This is a syntax error since ES2016.
function foo(a = 1) {
    "use strict";
}

// We cannot write "use strict" directive in this function.
// So we have to wrap this function with a function with "use strict" directive.
function foo(a = 1) {
}
```

Examples of **correct** code for this rule with the `"function"` option:

选项 `"function"` 的 **正确** 代码示例：

```js
/*eslint strict: ["error", "function"]*/

function foo() {
    "use strict";
}

(function() {
    "use strict";

    function bar() {
    }

    function baz(a = 1) {
    }
}());

var foo = (function() {
    "use strict";

    return function foo(a = 1) {
    };
}());
```

### never

Examples of **incorrect** code for this rule with the `"never"` option:

选项 `"never"` 的 **错误** 代码示例：

```js
/*eslint strict: ["error", "never"]*/

"use strict";

function foo() {
}
```

```js
/*eslint strict: ["error", "never"]*/

function foo() {
    "use strict";
}
```

Examples of **correct** code for this rule with the `"never"` option:

选项 `"never"` 的 **正确** 代码示例：

```js
/*eslint strict: ["error", "never"]*/

function foo() {
}
```

### earlier default (removed)

(removed) The default option (that is, no string option specified) for this rule was **removed** in ESLint v1.0. The `"function"` option is most similar to the removed option.

(removed) 该规则的默认选项(即没有指定字符串选项)在 ESLint v1.0中 **被移除**。`"function"` 选项最类似于已删除的选项。

This option ensures that all functions are executed in strict mode. A strict mode directive must be present in global code or in every top-level function declaration or expression. It does not concern itself with unnecessary strict mode directives in nested functions that are already strict, nor with multiple strict mode directives at the same level.

此选项确保所有函数都在严格模式下执行。严格模式指令必须出现在全局代码中，或者在每个顶级函数声明或表达式中。它不关心嵌套函数中已经严格的不必要的严格模式指令，也不关心同一级别的多个严格模式指令。

Examples of **incorrect** code for this rule with the earlier default option which has been removed:

已被删除的早期默认选项 **错误** 代码示例:

```js
// "strict": "error"

function foo() {
}
```

```js
// "strict": "error"

(function() {
    function bar() {
        "use strict";
    }
}());
```

Examples of **correct** code for this rule with the earlier default option which has been removed:

已被删除的早期默认选项 **正确** 代码示例:

```js
// "strict": "error"

"use strict";

function foo() {
}
```

```js
// "strict": "error"

function foo() {
    "use strict";
}
```

```js
// "strict": "error"

(function() {
    "use strict";
    function bar() {
        "use strict";
    }
}());
```

## When Not To Use It

In a codebase that has both strict and non-strict code, either turn this rule off, or [selectively disable it](/docs/user-guide/configuring) where necessary. For example, functions referencing `arguments.callee` are invalid in strict mode. A [full list of strict mode differences](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode/Transitioning_to_strict_mode#Differences_from_non-strict_to_strict) is available on MDN.

在既有严格模式也有非严格模式的代码库中，可以关闭此规则，或必要时[选择性地禁用严格模式](/docs/user-guide/configuring)。例如，函数引用 `arguments.callee`在严格模式下是无效的。可以看一下 MDN 上的这篇文章[《严格模式的区别》](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode/Transitioning_to_strict_mode#Differences_from_non-strict_to_strict)。

## Version

This rule was introduced in ESLint 0.1.0.

该规则在 ESLint 0.1.0 中被引入。

## Resources

* [Rule source](https://github.com/eslint/eslint/tree/master/lib/rules/strict.js)
* [Documentation source](https://github.com/eslint/eslint/tree/master/docs/rules/strict.md)
