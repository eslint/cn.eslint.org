---
title: Rule strict
layout: doc
translator: ILFront-End
proofreader: molee1905
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# Strict Mode Directives (strict)

# 严格模式指令 (strict)
 
A strict mode directive at the beginning of a script or function body enables strict mode semantics.

在脚本或方法体的开始位置使用严格模式指令开启严格模式语义。

When used globally, the entire script, including all contained functions, are strict mode code:

当在全局使用时，整个脚本包括所有的函数，都处于严格模式之下：

```js
"use strict";
```

It is also possible to specify function-level strict mode, such that strict mode applies only to the function in which the directive occurs:

当上面的示例代码被用在全局，整个脚本，包括脚本内包含的方法是严格模式代码。也可以指定函数级别的严格模式，这样的严格模式仅适用于有严格模式指令的函数。

```js
function foo() {
    "use strict";
    return;
}

var bar = function() {
    "use strict";
    return;
};
```

Unlike scripts, ECMAScript modules are always in strict mode. Strict mode directives in ECMAScript modules have no effect.

与脚本不同，ECMAScript 模块总是处于严格模式。严格模式指令对 ECMAScript 模块没有什么影响。

## Rule Details

This rule is aimed at using strict mode directives effectively, and as such, will flag any unexpected uses or omissions of strict mode directives.

该规则目的是有效使用严格模式指令，因此，该规则将标记严格模式指令的滥用和遗漏情况。

## Options

There are four options for this rule:

这个规则有四个选项：

* `"safe"` - require `"use strict"` globally when inside a module wrapper and in function scopes everywhere else. This is the default.
* `"safe"` - 在模块内部或函数作用域的任何地方要求使用全局`"use strict"`。这是默认选项。
* `"never"` - disallow `"use strict"`.
* `"never"` - 禁用 `"use strict"`。
* `"global"` - require `"use strict"` in the global scope.
* `"global"` - 在全局作用域使用 `"use strict"`
* `"function"` - require `"use strict"` in function scopes only.
* `"function"` - 在函数作用域使用 `"use strict"`
 
All strict mode directives are flagged as unnecessary if ECMAScript modules or implied strict mode are enabled (see [Specifying Parser Options](../user-guide/configuring#specifying-parser-options)). This behaviour does not depend on the rule options, but can be silenced by disabling this rule.

在 ECMAScript 模块或隐式严格模式下，所有的严格模式指令被标记为不必要的(查看 [Specifying Parser Options](../user-guide/configuring#specifying-parser-options))。这种行为并不取决于规则选项，但可以禁用这个规则使其不报告问题。

### safe

Node.js and the CommonJS module system wrap modules inside a hidden function wrapper that defines each module's scope. The wrapper makes it safe to concatenate strict mode modules while maintaining their original strict mode directives. When the `node` or `commonjs` environments are enabled or `globalReturn` is enabled in `ecmaFeatures`, ESLint considers code to be inside the module wrapper, and `"safe"` mode corresponds to `"global"` mode and enforces global strict mode directives. Everywhere else, `"safe"` mode corresponds to `"function"` mode and enforces strict mode directives inside top-level functions.

Node.js 和 CommonJS 模块系统将模块包在匿名函数中来定义每个模块的作用域。这种包裹使它安全地连接严格模式模块，同时包在自己原有的严格模式指令。当启用了`node`或`commonjs`环境，或在`ecmaFeatures`中启用了`globalReturn`，ESLint 认为代码处于模块包裹中，`"safe"`模式对应`"global"`模式，强制使用全局的严格模式指令。在其它地方，`"safe"`模式对应`"function"`模式，强制在函数顶部使用严格模式指令。

### never

This mode forbids any occurrence of a strict mode directive.

这个模式禁止任何严格模式指令出现。

Examples of **incorrect** code for the `"never"` option:

`"never"`选项的 **错误**代码示例：

```js
/*eslint strict: ["error", "never"]*/

"use strict";

function foo() {
    "use strict";
    return;
}

var bar = function() {
    "use strict";
    return;
};

foo();
bar();
```

Examples of **correct** code for the `"never"` option:

`"never"`选项的 **正确**代码示例：

```js
/*eslint strict: ["error", "never"]*/

function foo() {
    return;
}

var bar = function() {
    return;
};

foo();
bar();
```

### global

This mode ensures that all code is in strict mode and that there are no extraneous strict mode directives at the top level or in nested functions, which are themselves already strict by virtue of being contained in strict global code. It requires that global code contains exactly one strict mode directive. Strict mode directives inside functions are considered unnecessary. Multiple strict mode directives at any level also trigger warnings.

这个模式可以确保所有代码是在严格模式下，在函数顶部或嵌套的函数内没有多余的严格模式指令。要求全局代码只包含一个严格模式指令。函数里的严格模式指令被认为是没有必要的。在任何地方使用多个严格模式指令也会触发警告。

Examples of **incorrect** code for the `"global"` option:

`"global"`选项的 **错误**代码示例：

```js
/*eslint strict: ["error", "global"]*/

"use strict";
"use strict";

function foo() {
    "use strict";

    return function() {
        "use strict";
        "use strict";

        return;
    };
}

foo();
```

Examples of **correct** code for the `"global"` option:

`"global"`选项的 **正确**代码示例：

```js
/*eslint strict: ["error", "global"]*/

"use strict";

function foo() {
    return function() {
        return;
    };
}

foo();
```

### function

This mode ensures that all function bodies are strict mode code, while global code is not. Particularly if a build step concatenates multiple scripts, a strict mode directive in global code of one script could unintentionally enable strict mode in another script that was not intended to be strict code. It forbids any occurrence of a strict mode directive in global code. It requires exactly one strict mode directive in each function declaration or expression whose parent is global code. Strict mode directives inside nested functions are considered unnecessary. Multiple strict mode directives at any level also trigger warnings.

这个模式确保所有函数体都是严格模式代码，全局代码除外。特别是如果一次构建过程包含过个脚本，某个脚本使用了全局的严格模式可能会无意中就启用另一个脚本中的严格模式，而那个脚本并不想使用严格模式。这个选项禁止全局代码中出现严格模式指令。它要求在每个最外层的函数声明或函数表达式中只有一个严格模式指令。嵌套的函数里的严格模式指令被认为是没有必要的。在任何地方使用多个严格模式指令也会触发警告。

Examples of **incorrect** code for the `"function"` option:

`"function"`选项的 **错误**代码示例：
 
```js
/*eslint strict: ["error", "function"]*/

"use strict";

function foo() {
    // Missing strict mode directive

    return function() {
        "use strict";   // Unnecessary; parent should contain a strict mode directive
        "use strict";

        return;
    };
}

foo();
```

Examples of **correct** code for the `"function"` option:

`"function"`选项的 **正确**代码示例：

```js
/*eslint strict: ["error", "function"]*/

function foo() {
    "use strict";

    return function() {
        return;
    };
}

(function() {
    "use strict";

    return;
}());

foo();
```

### earlier default (removed)

**Replacement notice**: This mode, previously enabled by turning on the rule without specifying a mode, has been removed in ESLint v1.0. `"function"` mode is most similar to the deprecated behavior.

**替换通知**：这个模式，之前开启该规则但不指定一个模式来启用，已经在 ESLint v1.0 中移除。`"function"`模式与此非常类似。

This mode ensures that all functions are executed in strict mode. A strict mode directive must be present in global code or in every top-level function declaration or expression. It does not concern itself with unnecessary strict mode directives in nested functions that are already strict, nor with multiple strict mode directives at the same level.

这个模式确保所有的函数在严格模式下执行。一个严格模式指令必须出现在全局代码里或在每个函数声明或函数表达式顶部。它本身并不关心在已经是严格模式的嵌套函数里使用不必要的严格模式指令，或在同一层级里使用多个严格模式指令。

Examples of **incorrect** code for an earlier default option which has been removed:

之前的默认选项（已被移除）的 **错误**代码示例：

```js
// "strict": "error"

function foo() {
    return true;
}
```

Examples of **correct** code for an earlier default option which has been removed:

之前的默认选项（已被移除）的 **正确**代码示例：

```js
// "strict": "error"

"use strict";

function foo() {
    return true;
}
```

```js
// "strict": "error"

function foo() {

    "use strict";

    return true;
}
```

```js
// "strict": "error"

(function() {
    "use strict";

    // other code
}());
```

## When Not To Use It

In a codebase that has both strict and non-strict code, either turn this rule off, or [selectively disable it](/docs/user-guide/configuring) where necessary. For example, functions referencing `arguments.callee` are invalid in strict mode. A [full list of strict mode differences](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode/Transitioning_to_strict_mode#Differences_from_non-strict_to_strict) is available on MDN.

在既有严格模式也有非严格模式的代码库中，可以关闭此规则，或必要时[选择性地禁用严格模式](/docs/user-guide/configuring)。例如，函数引用`arguments.callee`在严格模式下是无效的。可以看一下 MDN 上的这篇文章[《严格模式的区别》](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode/Transitioning_to_strict_mode#Differences_from_non-strict_to_strict)。

## Version

This rule was introduced in ESLint 0.1.0.

此规则在 ESLint 0.1.0 中被引入。

## Resources

* [Rule source](https://github.com/eslint/eslint/tree/master/lib/rules/strict.js)
* [Documentation source](https://github.com/eslint/eslint/tree/master/docs/rules/strict.md)
