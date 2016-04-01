---
title: Rule no-unused-vars
layout: doc
translator: ILFront-End
proofreader: coocon 
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# Disallow Unused Variables (no-unused-vars)

# 禁用未使用过变量 (no-unused-vars)

Variables that are declared and not used anywhere in the code are most likely an error due to incomplete refactoring. Such variables take up space in the code and can lead to confusion by readers.

已声明的变量在代码里未被使用过，就像是由于不完整的重构而导致的遗漏错误。这样的变量增加了代码量，并且混淆读者。

## Rule Details

This rule is aimed at eliminating unused variables, functions and variables in parameters of functions, as such, warns when one is found.

此规则旨在消除未使用过的变量，方法和方法中的参数名，当发现这些存在，发出警告。

A variable is considered to be used when it:

符合下面条件的变量被认为是可以使用的:

1. Represents a function that is called (`doSomething()`)
1. 作为回调函数
1. Is read (`var y = x`)
1. 可读 (`var y = x`)
1. Is passed into a function as an argument (`doSomething(x)`)
1. 传入函数中作为argument对象(`doSomething(x)`)

A variable is *not* considered to be used if it is only ever assigned to (`var x = 5`) or declared.

一个变量仅仅是被复制过(`var x = 5`)或者是被声明过，则认为它是没被考虑使用。

Examples of **incorrect** code for this rule:

**错误**代码示例如下：

```js
/*eslint no-unused-vars: 2*/
/*global some_unused_var */

//It checks variables you have defined as global
some_unused_var = 42;

var x;

var y = 10;
y = 5;

// By default, unused arguments cause warnings.
(function(foo) {
    return 5;
})();

// Unused recursive functions also cause warnings.
function fact(n) {
    if (n < 2) return 1;
    return n * fact(n - 1);
}
```

Examples of **correct** code for this rule:

以下模式被认为是没有问题的：

```js
/*eslint no-unused-vars: 2*/

var x = 10;
alert(x);

// foo is considered used here
myFunc(function foo() {
    // ...
}.bind(this));

(function(foo) {
    return foo;
})();
```

### Exporting Variables

In environments outside of CommonJS or ECMAScript modules, you may use `var` to create a global variable that may be used by other scripts. You can use the `/* exported variableName */` comment block to indicate that this variable is being exported and therefore should not be considered unused. Note that `/* exported */` has no effect when used with the `node` or `commonjs` environments or when `ecmaFeatures.modules` or `ecmaFeatures.globalReturn` are true.

在 CommonJS 或者 ECMAScript 模块外部，可用 `var` 创建一个被其他模块代码引用的变量。你也可以用`/* exported variableName */`注释快表明此变量已导出，因此此变量不会被认为是未被使用过的。需要提醒，在 `node` 环境，`commonjs` 环境，还有当 `ecmaFeatures.modules` 为 true 时，`/* exported */`注释快导出变量无效。


### Options
This rule takes one argument which can be an string or an object. The string settings are the same as those of the `vars` property (explained below).

该规则接受一个字符串或者对像类型的参数。字符串设置正如同 `vars`一样（如下所示）。

By default this rule is enabled with `all` option for variables and `after-used` for arguments.

配置项的默认值，变量选项是 `all`，参数的选项是 `after-used` 。

```json
{
    "rules": {
        "no-unused-vars": [2, { "vars": "all", "args": "after-used" }]
    }
}
```

### vars

The `vars` option has two settings:

此配置项有两个值：

* `all` checks all variables for usage, including those in the global scope. This is the default setting.
* `local` checks only that locally-declared variables are used but will allow global variables to be unused.

* `all` 检测所有变量，包括全局环境中的变量。这是默认值。
* `local` 仅仅检测本作用域中声明的变量是否使用，允许不使用全局环境中的变量。

### varsIgnorePattern

The `varsIgnorePattern` option specifies exceptions not to check for usage: variables whose names match a regexp pattern. For example, variables whose names contain `ignored` or `Ignored`.

这个 `varsIgnorePattern` 选项指定了不需要检测的异常：变量名称匹配正则模式。例如，变量的名字包含 `ignored` 或者 `Ignored`。

Examples of **correct** code for the `{ "varsIgnorePattern": "[iI]gnored" }` option:

正确的使用 `{ "varsIgnorePattern": "[iI]gnored" }` 选项的示例代码如下:

```js
/*eslint no-unused-vars: [2, { "varsIgnorePattern": "[iI]gnored" }]*/

var firstVarIgnored = 1;
var secondVar = 2;
console.log(secondVar);
```

#### args

This option has three settings:

此配置项有三个值：

* `all` - all named arguments must be used.
* `after-used` - only the last argument must be used. This allows you, for instance, to have two named parameters to a function and as long as you use the second argument, ESLint will not warn you about the first. This is the default setting.
* `none` - do not check arguments.

* `all` - 所有命名参数必须使用。
* `after-used` - 最后一个参数必须使用。如：一个函数有两个参数，你使用了第二个参数，ESLint不会报警告。
* `none` - 不检查参数。


#### args: after-used

Examples of **incorrect** code for the default `{ "args": "after-used" }` option:

**错误**的使用 `{ "args": "after-used" }` 选项的示例如下：

```js
/*eslint no-unused-vars: [2, { "args": "after-used" }]*/

// 1 error
// "baz" is defined but never used
(function(foo, bar, baz) {
    return bar;
})();
```

Examples of **correct** code for the default `{ "args": "after-used" }` option:

正确的使用 `{ "args": "after-used" }` 选项的示例如下：

```js
/*eslint no-unused-vars: [2, {"args": "after-used"}]*/

(function(foo, bar, baz) {
    return baz;
})();
```


#### args: all

Examples of **incorrect** code for the `{ "args": "all" }` option:

**错误**的使用 `{ "args": "all" }` 选项的示例如下：

```js
/*eslint no-unused-vars: [2, { "args": "all" }]*/

// 2 errors
// "foo" is defined but never used
// "baz" is defined but never used
(function(foo, bar, baz) {
    return bar;
})();
```



#### args: none

Examples of **correct** code for the `{ "args": "none" }` option:

正确的使用 `{ "args": "none" }` 选项的示例如下：

```js
/*eslint no-unused-vars: [2, { "args": "none" }]*/

(function(foo, bar, baz) {
    return bar;
})();
```

### argsIgnorePattern

The `argsIgnorePattern` option specifies exceptions not to check for usage: arguments whose names match a regexp pattern. For example, variables whose names begin with an underscore.

这个 `argsIgnorePattern`选项指定排除不需要检测：这些参数的名字符合正则匹配。例如，以下划线开头的变量。

Examples of **correct** code for the `{ "argsIgnorePattern": "^_" }` option:

正确的使用`{ "argsIgnorePattern": "^_" }`选项的示例如下：

```js
/*eslint no-unused-vars: [2, { "argsIgnorePattern": "^_" }]*/

function foo(x, _y) {
    return x + 1;
}
foo();
```


## When Not To Use It

If you don't want to be notified about unused variables or function arguments, you can safely turn this rule off.

如果你不希望因为未使用变量或参数名而报警告，你可关闭此规则。

## Version

This rule was introduced in ESLint 0.0.9.

此规则在 ESLint 0.0.9 中被引入。

## Resources

* [Rule source](https://github.com/eslint/eslint/tree/master/lib/rules/no-unused-vars.js)
* [Documentation source](https://github.com/eslint/eslint/tree/master/docs/rules/no-unused-vars.md)
