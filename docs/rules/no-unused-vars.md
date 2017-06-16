---
title: no-unused-vars - Rules
layout: doc
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# Disallow Unused Variables (no-unused-vars)

# 禁止未使用过的变量 (no-unused-vars)

Variables that are declared and not used anywhere in the code are most likely an error due to incomplete refactoring. Such variables take up space in the code and can lead to confusion by readers.

已声明的变量在代码里未被使用过，就像是由于不完整的重构而导致的遗漏错误。这样的变量增加了代码量，并且混淆读者。

## Rule Details

This rule is aimed at eliminating unused variables, functions, and parameters of functions.

此规则旨在消除未使用过的变量，方法和方法中的参数名，当发现这些存在，发出警告。

A variable is considered to be used if any of the following are true:

符合下面条件的变量被认为是可以使用的:

* It represents a function that is called (`doSomething()`)
* 作为回调函数
* It is read (`var y = x`)
* 被读取 (`var y = x`)
* It is passed into a function as an argument (`doSomething(x)`)
* 传入函数中作为argument对象(`doSomething(x)`)
* It is read inside of a function that is passed to another function (`doSomething(function() { foo(); })`)
* 在传入到另一个函数的函数中被读取

A variable is *not* considered to be used if it is only ever assigned to (`var x = 5`) or declared.

一个变量仅仅是被赋值为 (`var x = 5`) 或者是被声明过，则认为它是没被考虑使用。

Examples of **incorrect** code for this rule:

**错误** 代码示例：

```js
/*eslint no-unused-vars: "error"*/
/*global some_unused_var*/

// It checks variables you have defined as global
some_unused_var = 42;

var x;

// Write-only variables are not considered as used.
var y = 10;
y = 5;

// A read for a modification of itself is not considered as used.
var z = 0;
z = z + 1;

// By default, unused arguments cause warnings.
(function(foo) {
    return 5;
})();

// Unused recursive functions also cause warnings.
function fact(n) {
    if (n < 2) return 1;
    return n * fact(n - 1);
}

// When a function definition destructures an array, unused entries from the array also cause warnings.
function getY([x, y]) {
    return y;
}
```

Examples of **correct** code for this rule:

**正确** 代码示例：

```js
/*eslint no-unused-vars: "error"*/

var x = 10;
alert(x);

// foo is considered used here
myFunc(function foo() {
    // ...
}.bind(this));

(function(foo) {
    return foo;
})();

var myFunc;
myFunc = setTimeout(function() {
    // myFunc is considered used
    myFunc();
}, 50);

// Only the second argument from the descructured array is used.
function getY([, y]) {
    return y;
}
```

### exported

In environments outside of CommonJS or ECMAScript modules, you may use `var` to create a global variable that may be used by other scripts. You can use the `/* exported variableName */` comment block to indicate that this variable is being exported and therefore should not be considered unused.

在 CommonJS 或者 ECMAScript 模块外部，可用 `var`创建一个被其他模块代码引用的变量。你也可以用 `/* exported variableName */` 注释快表明此变量已导出，因此此变量不会被认为是未被使用过的。

Note that `/* exported */` has no effect for any of the following:

需要注意的是 `/* exported */` 在下列情况下是无效的：

* when the environment is `node` or `commonjs`
* `node` 或 `commonjs` 环境
* when `parserOptions.sourceType` is `module`
* `parserOptions.sourceType` 是 `module`
* when `ecmaFeatures.globalReturn` is `true`
* `ecmaFeatures.globalReturn` 为 `true`

## Options

This rule takes one argument which can be a string or an object. The string settings are the same as those of the `vars` property (explained below).

该规则接受一个字符串或者对像类型的参数。字符串设置正如同 `vars` 一样（如下所示）。

By default this rule is enabled with `all` option for variables and `after-used` for arguments.

配置项的默认值，变量选项是 `all`，参数的选项是 `after-used` 。

```json
{
    "rules": {
        "no-unused-vars": ["error", { "vars": "all", "args": "after-used", "ignoreRestSiblings": false }]
    }
}
```

### vars

The `vars` option has two settings:

此配置项有两个值：

* `all` checks all variables for usage, including those in the global scope. This is the default setting.
* `all` 检测所有变量，包括全局环境中的变量。这是默认值。
* `local` checks only that locally-declared variables are used but will allow global variables to be unused.
* `local` 仅仅检测本作用域中声明的变量是否使用，允许不使用全局环境中的变量。

#### vars: local

Examples of **correct** code for the `{ "vars": "local" }` option:

选项 `{ "vars": "local" }` 的 **正确** 代码示例：

```js
/*eslint no-unused-vars: ["error", { "vars": "local" }]*/
/*global some_unused_var */

some_unused_var = 42;
```

### varsIgnorePattern

The `varsIgnorePattern` option specifies exceptions not to check for usage: variables whose names match a regexp pattern. For example, variables whose names contain `ignored` or `Ignored`.

这个 `varsIgnorePattern` 选项指定了不需要检测的异常：变量名称匹配正则模式。例如，变量的名字包含 `ignored` 或者 `Ignored`。

Examples of **correct** code for the `{ "varsIgnorePattern": "[iI]gnored" }` option:

选项 `{ "varsIgnorePattern": "[iI]gnored" }` 的 **正确** 代码示例：

```js
/*eslint no-unused-vars: ["error", { "varsIgnorePattern": "[iI]gnored" }]*/

var firstVarIgnored = 1;
var secondVar = 2;
console.log(secondVar);
```

### args

The `args` option has three settings:

`args` 选项有三个值：

* `after-used` - only the last argument must be used. This allows you, for instance, to have two named parameters to a function and as long as you use the second argument, ESLint will not warn you about the first. This is the default setting.
* `after-used` - 最后一个参数必须使用。如：一个函数有两个参数，你使用了第二个参数，ESLint 不会报警告。
* `all` - all named arguments must be used.
* `all` - 所有命名参数必须使用。
* `none` - do not check arguments.
* `none` - 不检查参数。

#### args: after-used

Examples of **incorrect** code for the default `{ "args": "after-used" }` option:

选项 `{ "args": "after-used" }` 的 **错误** 代码示例：

```js
/*eslint no-unused-vars: ["error", { "args": "after-used" }]*/

// 1 error
// "baz" is defined but never used
(function(foo, bar, baz) {
    return bar;
})();
```

Examples of **correct** code for the default `{ "args": "after-used" }` option:

选项 `{ "args": "after-used" }` 的 **正确** 代码示例：

```js
/*eslint no-unused-vars: ["error", {"args": "after-used"}]*/

(function(foo, bar, baz) {
    return baz;
})();
```

#### args: all

Examples of **incorrect** code for the `{ "args": "all" }` option:

选项 `{ "args": "all" }` 的 **错误** 代码示例：

```js
/*eslint no-unused-vars: ["error", { "args": "all" }]*/

// 2 errors
// "foo" is defined but never used
// "baz" is defined but never used
(function(foo, bar, baz) {
    return bar;
})();
```

#### args: none

Examples of **correct** code for the `{ "args": "none" }` option:

选项 `{ "args": "none" }` 的 **正确** 代码示例：

```js
/*eslint no-unused-vars: ["error", { "args": "none" }]*/

(function(foo, bar, baz) {
    return bar;
})();
```

### ignoreRestSiblings

The `ignoreRestSiblings` option is a boolean (default: `false`). Using a [Rest Property](https://github.com/sebmarkbage/ecmascript-rest-spread) it is possible to "omit" properties from an object, but by default the sibling properties are marked as "unused". With this option enabled the rest property's siblings are ignored.

`ignoreRestSiblings` 选项是个布尔类型 (默认: `false`)。使用 [Rest 属性](https://github.com/sebmarkbage/ecmascript-rest-spread) 可能会“省略”对象中的属性，但是默认情况下，其兄弟属性被标记为 "unused"。使用该选项可以使 rest 属性的兄弟属性被忽略。

Examples of **correct** code for the `{ "ignoreRestSiblings": true }` option:

选项 `{ "ignoreRestSiblings": true }` 的 **正确** 代码示例：

```js
/*eslint no-unused-vars: ["error", { "ignoreRestSiblings": true }]*/
// 'type' is ignored because it has a rest property sibling.
var { type, ...coords } = data;
```

### argsIgnorePattern

The `argsIgnorePattern` option specifies exceptions not to check for usage: arguments whose names match a regexp pattern. For example, variables whose names begin with an underscore.

`argsIgnorePattern` 选项指定排除不需要检测：这些参数的名字符合正则匹配。例如，下划线开头的变量。

Examples of **correct** code for the `{ "argsIgnorePattern": "^_" }` option:

选项 `{ "argsIgnorePattern": "^_" }` 的 **正确** 代码示例：

```js
/*eslint no-unused-vars: ["error", { "argsIgnorePattern": "^_" }]*/

function foo(x, _y) {
    return x + 1;
}
foo();
```

### caughtErrors

The `caughtErrors` option is used for `catch` block arguments validation.

`caughtErrors` 选项被用来验证 `catch` 块的参数。

It has two settings:

它有两个设置：

* `none` - do not check error objects. This is the default setting.
* `none` - 不检查错误对象。这是默认设置。
* `all` - all named arguments must be used.
* `all` - 所有参数必须被使用。

#### caughtErrors: none

Not specifying this rule is equivalent of assigning it to `none`.

没有指定该规则，相当于将它赋值为 `none`。

Examples of **correct** code for the `{ "caughtErrors": "none" }` option:

选项 `{ "caughtErrors": "none" }` 的 **正确** 代码示例：

```js
/*eslint no-unused-vars: ["error", { "caughtErrors": "none" }]*/

try {
    //...
} catch (err) {
    console.error("errors");
}
```

#### caughtErrors: all

Examples of **incorrect** code for the `{ "caughtErrors": "all" }` option:

选项 `{ "caughtErrors": "all" }` 的 **错误** 代码示例：

```js
/*eslint no-unused-vars: ["error", { "caughtErrors": "all" }]*/

// 1 error
// "err" is defined but never used
try {
    //...
} catch (err) {
    console.error("errors");
}
```

### caughtErrorsIgnorePattern

The `caughtErrorsIgnorePattern` option specifies exceptions not to check for usage: catch arguments whose names match a regexp pattern. For example, variables whose names begin with a string 'ignore'.

`caughtErrorsIgnorePattern` 选项指定例外情况，不会检查匹配正则表达式 catch 参数。例如，名字以 'ignore' 开头的变量。

Examples of **correct** code for the `{ "caughtErrorsIgnorePattern": "^ignore" }` option:

选项 `{ "caughtErrorsIgnorePattern": "^ignore" }` 的 **正确** 代码示例：

```js
/*eslint no-unused-vars: ["error", { "caughtErrorsIgnorePattern": "^ignore" }]*/

try {
    //...
} catch (ignoreErr) {
    console.error("errors");
}
```


## When Not To Use It

If you don't want to be notified about unused variables or function arguments, you can safely turn this rule off.

如果你不想受到关于未使用的变量或函数参数的通知，你可关闭此规则。

## Version

This rule was introduced in ESLint 0.0.9.

该规则在 ESLint 0.0.9 中被引入。

## Resources

* [Rule source](https://github.com/eslint/eslint/tree/master/lib/rules/no-unused-vars.js)
* [Documentation source](https://github.com/eslint/eslint/tree/master/docs/rules/no-unused-vars.md)
