---
title: List of available rules
layout: doc
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# Rules

Rules in ESLint are divided into several categories to help you better understand their value. All rules are disabled by default. ESLint recommends some rules to catch common problems, and you can use these recommended rules by including `extends: "eslint:recommended"` in your configuration file. The rules that will be enabled when you inherit from `eslint:recommended` are indicated below as "(recommended)". For more information on how to configure rules and use `extends`, please see the [configuration documentation](../user-guide/configuring).

为了让你有个更好的理解，ESLint对其规则分门别类。所有的规则默认都是禁用的。针对一些常见的问题，ESLint 给出了一些推荐规则，你可以在你的配置文件中通过添加`extends: "eslint:recommended"`来使用它们。当你的规则继承自`eslint:recommended`时，以下被标记为"(recommended)"的规则将被启用。有关如何配置规则和使用`extends`的更多信息，请参见[configuration documentation](../user-guide/configuring)。

Some rules are fixable using the `--fix` command line flag. Those rules are marked as "(fixable)" below. Currently these fixes are limited only to whitespace fixes.

一些规则是可以通过`--fix`命令行进行修复的。这些规则被标记为"(fixable)"。目前只对空白进行修复。

## Possible Errors

The following rules point out areas where you might have made mistakes.

下面的规则指出了你可能犯错误的地方。

* [comma-dangle](comma-dangle) - disallow or enforce trailing commas (recommended)
* [comma-dangle](comma-dangle) - 禁止或强化末尾逗号 (recommended)
* [no-cond-assign](no-cond-assign) - disallow assignment in conditional expressions (recommended)
* [no-cond-assign](no-cond-assign) - 禁止条件表示中赋值(recommended)
* [no-console](no-console) - disallow use of `console` (recommended)
* [no-console](no-console) - 禁止node环境下使用 `console`(recommended)
* [no-constant-condition](no-constant-condition) - disallow use of constant expressions in conditions (recommended)
* [no-constant-condition](no-constant-condition) - 禁止在条件中使用常量表达式 (recommended)
* [no-control-regex](no-control-regex) - disallow control characters in regular expressions (recommended)
* [no-control-regex](no-control-regex) - 禁止在正则表达式中使用控制字符 (recommended)
* [no-debugger](no-debugger) - disallow use of `debugger` (recommended)
* [no-debugger](no-debugger) - 禁用 `debugger` (recommended)
* [no-dupe-args](no-dupe-args) - disallow duplicate arguments in functions (recommended)
* [no-dupe-args](no-dupe-args) - 禁止函数中有重复参数(recommended)
* [no-dupe-keys](no-dupe-keys) - disallow duplicate keys when creating object literals (recommended)
* [no-dupe-keys](no-dupe-keys) - 创建对象字面量时，禁止重复的键 (recommended)
* [no-duplicate-case](no-duplicate-case) - disallow a duplicate case label. (recommended)
* [no-duplicate-case](no-duplicate-case) - 禁止重复的case标签 (recommended)
* [no-empty](no-empty) - disallow empty block statements (recommended)
* [no-empty](no-empty) - 禁止空语句块 (recommended)
* [no-empty-character-class](no-empty-character-class) - disallow the use of empty character classes in regular expressions (recommended)
* [no-empty-character-class](no-empty-character-class) - 禁止在正则表达式中使用空字符集 (recommended)
* [no-ex-assign](no-ex-assign) - disallow assigning to the exception in a `catch` block (recommended)
* [no-ex-assign](no-ex-assign) - 禁止对 `catch` 块的异常进行赋值 (recommended)
* [no-extra-boolean-cast](no-extra-boolean-cast) - disallow double-negation boolean casts in a boolean context (recommended)
* [no-extra-boolean-cast](no-extra-boolean-cast) - 在布尔类型的上下文中禁止双重否定布尔转换 (recommended)
* [no-extra-parens](no-extra-parens) - disallow unnecessary parentheses
* [no-extra-parens](no-extra-parens) - 禁止不必要的括号
* [no-extra-semi](no-extra-semi) - disallow unnecessary semicolons (recommended) (fixable)
* [no-extra-semi](no-extra-semi) - 禁止不必要的分号 (recommended) (fixable)
* [no-func-assign](no-func-assign) - disallow overwriting functions written as function declarations (recommended)
* [no-func-assign](no-func-assign) - 禁止重写函数声明 (recommended)
* [no-inner-declarations](no-inner-declarations) - disallow function or variable declarations in nested blocks (recommended)
* [no-inner-declarations](no-inner-declarations) - 禁止在嵌套的块中声明函数或变量 (recommended)
* [no-invalid-regexp](no-invalid-regexp) - disallow invalid regular expression strings in the `RegExp` constructor (recommended)
* [no-invalid-regexp](no-invalid-regexp) - 禁止`RegExp`构造函数中无效的正则表达式字符串 (recommended)
* [no-irregular-whitespace](no-irregular-whitespace) - disallow irregular whitespace outside of strings and comments (recommended)
* [no-irregular-whitespace](no-irregular-whitespace) - 禁止在字符串和注释之外不规则的空白 (recommended)
* [no-negated-in-lhs](no-negated-in-lhs) - disallow negation of the left operand of an `in` expression (recommended)
* [no-negated-in-lhs](no-negated-in-lhs) - 禁止`in`操作符的否定的左操作数(recommended)
* [no-obj-calls](no-obj-calls) - disallow the use of object properties of the global object (`Math` and `JSON`) as functions (recommended)
* [no-obj-calls](no-obj-calls) - 禁止全局对象(`Math` 和 `JSON`)当作函数使用 (recommended)
* [no-regex-spaces](no-regex-spaces) - disallow multiple spaces in a regular expression literal (recommended)
* [no-regex-spaces](no-regex-spaces) - 禁止在正则表达式字面量中使用多个空格 (recommended)
* [no-sparse-arrays](no-sparse-arrays) - disallow sparse arrays (recommended)
* [no-sparse-arrays](no-sparse-arrays) - 禁用稀疏数组 (recommended)
* [no-unexpected-multiline](no-unexpected-multiline) - Avoid code that looks like two expressions but is actually one (recommended)
* [no-unexpected-multiline](no-unexpected-multiline) - 避免代码看起来像两个表达式但实际上是一个 (recommended)
* [no-unreachable](no-unreachable) - disallow unreachable statements after a return, throw, continue, or break statement (recommended)
* [no-unreachable](no-unreachable) - 禁止return， throw， continue或 break 语句之后的不可达语句 (recommended)
* [use-isnan](use-isnan) - disallow comparisons with the value `NaN` (recommended)
* [use-isnan](use-isnan) - 禁止与 `NaN`进行比较 (recommended)
* [valid-jsdoc](valid-jsdoc) - Ensure JSDoc comments are valid
* [valid-jsdoc](valid-jsdoc) - 确保JSDoc注释是有效的
* [valid-typeof](valid-typeof) - Ensure that the results of typeof are compared against a valid string (recommended)
* [valid-typeof](valid-typeof) - 确保typeof结果与一个有效的字符串相比较 (recommended)

## Best Practices

These are rules designed to prevent you from making mistakes. They either prescribe a better way of doing something or help you avoid footguns.

这些规则是为了阻止你犯错误。它们要么为你指明了更好的做事方法，要么可以帮助你绕开雷区。

* [accessor-pairs](accessor-pairs) - Enforces getter/setter pairs in objects
* [accessor-pairs](accessor-pairs) - 强制 getter/setter成对出现在对象中
* [array-callback-return](array-callback-return) - Enforces return statements in callbacks of array's methods
* [array-callback-return](array-callback-return) - Enforces return statements in callbacks of array's methods
* [block-scoped-var](block-scoped-var) - treat `var` statements as if they were block scoped
* [block-scoped-var](block-scoped-var) - 把 `var` 语句看作是在块级作用域范围之内
* [complexity](complexity) - specify the maximum cyclomatic complexity allowed in a program
* [complexity](complexity) - 指定程序中允许的最大环路复杂度
* [consistent-return](consistent-return) - require `return` statements to either always or never specify values
* [consistent-return](consistent-return) - 要求 `return` 语句要么总是指定返回的值，要么不指定
* [curly](curly) - specify curly brace conventions for all control statements
* [curly](curly) - 为所有控制语句指定花括号约定
* [default-case](default-case) - require `default` case in `switch` statements
* [default-case](default-case) - 要求 `switch`语句中有`default`分支
* [dot-location](dot-location) - enforces consistent newlines before or after dots
* [dot-location](dot-location) - 强制在点号之前或之后一致的换行
* [dot-notation](dot-notation) - encourages use of dot notation whenever possible
* [dot-notation](dot-notation) - 鼓励尽可能使用点号
* [eqeqeq](eqeqeq) - require the use of `===` and `!==`
* [eqeqeq](eqeqeq) - 要求使用 `===` 和 `!==`
* [guard-for-in](guard-for-in) - make sure `for-in` loops have an `if` statement
* [guard-for-in](guard-for-in) - 确保`for-in`循环中有一个 `if`语句
* [no-alert](no-alert) - disallow the use of `alert`, `confirm`, and `prompt`
* [no-alert](no-alert) - 禁用 `alert`，`confirm` 和 `prompt`
* [no-caller](no-caller) - disallow use of `arguments.caller` or `arguments.callee`
* [no-caller](no-caller) - 禁用 `arguments.caller` 或 `arguments.callee`
* [no-case-declarations](no-case-declarations) - disallow lexical declarations in case clauses (recommended)
* [no-case-declarations](no-case-declarations) - 不允许在case子句中使用词法声明 (recommended)
* [no-div-regex](no-div-regex) - disallow division operators explicitly at beginning of regular expression
* [no-div-regex](no-div-regex) - 禁止除法操作符显式的出现在正则表达式开始的位置
* [no-else-return](no-else-return) - disallow `else` after a `return` in an `if`
* [no-else-return](no-else-return) - 禁止`if`语句中有`return`之后有`else`
* [no-empty-function](no-empty-function) - disallow use of empty functions
* [no-empty-function](no-empty-function) - 禁用空函数
* [no-empty-pattern](no-empty-pattern) - disallow use of empty destructuring patterns (recommended)
* [no-empty-pattern](no-empty-pattern) - 禁止使用空解构模式 (recommended)
* [no-eq-null](no-eq-null) - disallow comparisons to null without a type-checking operator
* [no-eq-null](no-eq-null) - 禁止在没有类型检查操作符情况下与null进行比较
* [no-eval](no-eval) - disallow use of `eval()`
* [no-eval](no-eval) - 禁用 `eval()`
* [no-extend-native](no-extend-native) - disallow adding to native types
* [no-extend-native](no-extend-native) - 禁止扩展原生类型
* [no-extra-bind](no-extra-bind) - disallow unnecessary function binding
* [no-extra-bind](no-extra-bind) - 禁止不必要的函数绑定
* [no-extra-label](no-extra-label) - disallow unnecessary labels
* [no-extra-label](no-extra-label) - disallow unnecessary labels
* [no-fallthrough](no-fallthrough) - disallow fallthrough of `case` statements (recommended)
* [no-fallthrough](no-fallthrough) - disallow fallthrough of `case` statements (recommended)
* [no-floating-decimal](no-floating-decimal) - disallow the use of leading or trailing decimal points in numeric literals
* [no-floating-decimal](no-floating-decimal) - 禁止数字字面量中使用前导和末尾小数点
* [no-implicit-coercion](no-implicit-coercion) - disallow the type conversions with shorter notations
* [no-implicit-coercion](no-implicit-coercion) - 禁止是用短符号进行类型转换
* [no-implicit-globals](no-implicit-globals) - disallow `var` and named functions in global scope
* [no-implicit-globals](no-implicit-globals) - disallow `var` and named functions in global scope
* [no-implied-eval](no-implied-eval) - disallow use of `eval()`-like methods
* [no-implied-eval](no-implied-eval) - 禁止使用隐式`eval()`
* [no-invalid-this](no-invalid-this) - disallow `this` keywords outside of classes or class-like objects
* [no-invalid-this](no-invalid-this) - 禁止 `this` 关键字出现在类和类对象之外
* [no-iterator](no-iterator) - disallow usage of `__iterator__` property
* [no-iterator](no-iterator) - 禁用 `__iterator__`属性
* [no-labels](no-labels) - disallow use of labeled statements
* [no-labels](no-labels) - 禁用标签语句
* [no-lone-blocks](no-lone-blocks) - disallow unnecessary nested blocks
* [no-lone-blocks](no-lone-blocks) - 禁用不必要的嵌套块
* [no-loop-func](no-loop-func) - disallow creation of functions within loops
* [no-loop-func](no-loop-func) - 禁止在循环中创建函数
* [no-magic-numbers](no-magic-numbers) - disallow the use of magic numbers
* [no-magic-numbers](no-magic-numbers) - 禁用幻数
* [no-multi-spaces](no-multi-spaces) - disallow use of multiple spaces (fixable)
* [no-multi-spaces](no-multi-spaces) - 禁止使用多个空格 (fixable)
* [no-multi-str](no-multi-str) - disallow use of multiline strings
* [no-multi-str](no-multi-str) - 禁止使用多行字符串
* [no-native-reassign](no-native-reassign) - disallow reassignments of native objects
* [no-native-reassign](no-native-reassign) - 禁止对原生对象赋值
* [no-new](no-new) - disallow use of the `new` operator when not part of an assignment or comparison
* [no-new](no-new) - 非赋值或条件语句禁止使用`new`操作符
* [no-new-func](no-new-func) - disallow use of new operator for `Function` object
* [no-new-func](no-new-func) - 禁止对`Function`对象使用new操作符
* [no-new-wrappers](no-new-wrappers) - disallows creating new instances of `String`,`Number`, and `Boolean`
* [no-new-wrappers](no-new-wrappers) - 禁止创建`String`，`Number`和 `Boolean`的新实例
* [no-octal](no-octal) - disallow use of octal literals (recommended)
* [no-octal](no-octal) - 禁用八进制字面量 (recommended)
* [no-octal-escape](no-octal-escape) - disallow use of octal escape sequences in string literals, such as `var foo = "Copyright \251";`
* [no-octal-escape](no-octal-escape) - 禁止在字符串中使用八进制转义序列，比如 `var foo = "Copyright \251";`
* [no-param-reassign](no-param-reassign) - disallow reassignment of function parameters
* [no-param-reassign](no-param-reassign) - 不允许对函数的参数进行重新赋值
* [no-process-env](no-process-env) - disallow use of `process.env`
* [no-process-env](no-process-env) - 禁用`process.env`
* [no-proto](no-proto) - disallow usage of `__proto__` property
* [no-proto](no-proto) - 禁用`__proto__`属性
* [no-redeclare](no-redeclare) - disallow declaring the same variable more than once (recommended)
* [no-redeclare](no-redeclare) - 禁止多次声明同一变量 (recommended)
* [no-return-assign](no-return-assign) - disallow use of assignment in `return` statement
* [no-return-assign](no-return-assign) - 禁止在`return`语句中使用赋值语句
* [no-script-url](no-script-url) - disallow use of `javascript:` urls.
* [no-script-url](no-script-url) - 禁止使用`javascript:`url.
* [no-self-assign](no-self-assign) - disallow assignments where both sides are exactly the same (recommended)
* [no-self-assign](no-self-assign) - disallow assignments where both sides are exactly the same (recommended)
* [no-self-compare](no-self-compare) - disallow comparisons where both sides are exactly the same
* [no-self-compare](no-self-compare) - 禁止自身比较
* [no-sequences](no-sequences) - disallow use of the comma operator
* [no-sequences](no-sequences) - 禁用逗号操作符
* [no-throw-literal](no-throw-literal) - restrict what can be thrown as an exception
* [no-throw-literal](no-throw-literal) - 限制可被抛出的异常
* [no-unmodified-loop-condition](no-unmodified-loop-condition) - disallow unmodified conditions of loops
* [no-unmodified-loop-condition](no-unmodified-loop-condition) - disallow unmodified conditions of loops
* [no-unused-expressions](no-unused-expressions) - disallow usage of expressions in statement position
* [no-unused-expressions](no-unused-expressions) - 禁止在语句的位置使用表达式
* [no-unused-labels](no-unused-labels) - disallow unused labels (recommended)
* [no-unused-labels](no-unused-labels) - disallow unused labels (recommended)
* [no-useless-call](no-useless-call) - disallow unnecessary `.call()` and `.apply()`
* [no-useless-call](no-useless-call) - 禁止不必要的 `.call()` 和 `.apply()`
* [no-useless-concat](no-useless-concat) - disallow unnecessary concatenation of literals or template literals
* [no-useless-concat](no-useless-concat) - 禁止不必要的字符串字面量或模板字面量的连接
* [no-void](no-void) - disallow use of the `void` operator
* [no-void](no-void) - 禁用`void`操作符
* [no-warning-comments](no-warning-comments) - disallow usage of configurable warning terms in comments - e.g. `TODO` or `FIXME`
* [no-warning-comments](no-warning-comments) - 禁止在注释中使用可配置的警告术语 - 比如 `TODO` 或 `FIXME`
* [no-with](no-with) - disallow use of the `with` statement
* [no-with](no-with) - 禁用`with`语句
* [radix](radix) - require use of the second argument for `parseInt()`
* [radix](radix) - 要求使用`parseInt()`的第二个参数
* [vars-on-top](vars-on-top) - require declaration of all vars at the top of their containing scope
* [vars-on-top](vars-on-top) - 要求所有的var声明在它们所在的作用域顶部
* [wrap-iife](wrap-iife) - require immediate function invocation to be wrapped in parentheses
* [wrap-iife](wrap-iife) - 要求IIFE使用括号括起来
* [yoda](yoda) - require or disallow Yoda conditions
* [yoda](yoda) - 要求或禁止Yoda条件

## Strict Mode

These rules relate to using strict mode and strict mode directives.

该规则与使用strict模式有关。

* [strict](strict) - require effective use of strict mode directives
* [strict](strict) - 要求有效使用严格模式指令

## Variables

These rules have to do with variable declarations.

这些规则与变量声明有关。

* [init-declarations](init-declarations) - enforce or disallow variable initializations at definition
* [init-declarations](init-declarations) - 强制或禁止在变量声明时进行初始化
* [no-catch-shadow](no-catch-shadow) - disallow the catch clause parameter name being the same as a variable in the outer scope
* [no-catch-shadow](no-catch-shadow) - 不允许catch子句的参数名与外层作用域中的变量同名
* [no-delete-var](no-delete-var) - disallow deletion of variables (recommended)
* [no-delete-var](no-delete-var) - 不允许删除变量 (recommended)
* [no-label-var](no-label-var) - disallow labels that share a name with a variable
* [no-label-var](no-label-var) - 不允许标签与变量同名
* [no-restricted-globals](no-restricted-globals) - restrict usage of specified global variables
* [no-restricted-globals](no-restricted-globals) - restrict usage of specified global variables
* [no-shadow](no-shadow) - disallow declaration of variables already declared in the outer scope
* [no-shadow](no-shadow) - 不允许声明在外层作用域下已声明过的变量
* [no-shadow-restricted-names](no-shadow-restricted-names) - disallow shadowing of names such as `arguments`
* [no-shadow-restricted-names](no-shadow-restricted-names) - 禁止覆盖受限制的标识符，比如`arguments`
* [no-undef](no-undef) - disallow use of undeclared variables unless mentioned in a `/*global */` block (recommended)
* [no-undef](no-undef) - 禁用未声明的变量，除非它们在`/*global */`块中被提到(recommended)
* [no-undef-init](no-undef-init) - disallow use of undefined when initializing variables
* [no-undef-init](no-undef-init) - 不允许变量初始化为undefined
* [no-undefined](no-undefined) - disallow use of `undefined` variable
* [no-undefined](no-undefined) - 不允许使用 `undefined` 变量
* [no-unused-vars](no-unused-vars) - disallow declaration of variables that are not used in the code (recommended)
* [no-unused-vars](no-unused-vars) - 不允许代码中的变量只声明而不使用 (recommended)
* [no-use-before-define](no-use-before-define) - disallow use of variables before they are defined
* [no-use-before-define](no-use-before-define) - 不允许在变量定义之前使用它们

## Node.js and CommonJS

These rules are specific to JavaScript running on Node.js or using CommonJS in the browser.

这些规则是对javascript来时是特殊，它们运行在Node.js上或者在浏览器中使用CommonJS。

* [callback-return](callback-return) - enforce `return` after a callback
* [callback-return](callback-return) - enforce `return` after a callback
* [global-require](global-require) - enforce `require()` on top-level module scope
* [global-require](global-require) - 强制 `require()` 出现在顶层模块作用域中
* [handle-callback-err](handle-callback-err) - enforce error handling in callbacks
* [handle-callback-err](handle-callback-err) - 强制回调函数中有容错处理
* [no-mixed-requires](no-mixed-requires) - disallow mixing regular variable and require declarations
* [no-mixed-requires](no-mixed-requires) - 禁止混合常规变量和require声明
* [no-new-require](no-new-require) - disallow use of `new` operator with the `require` function
* [no-new-require](no-new-require) - 禁止对`require`函数使用`new` 操作符
* [no-path-concat](no-path-concat) - disallow string concatenation with `__dirname` and `__filename`
* [no-path-concat](no-path-concat) - 禁止同`__dirname` 和 `__filename`进行字符串明教
* [no-process-exit](no-process-exit) - disallow `process.exit()`
* [no-process-exit](no-process-exit) - 禁用 `process.exit()`
* [no-restricted-imports](no-restricted-imports) - restrict usage of specified node imports
* [no-restricted-imports](no-restricted-imports) - restrict usage of specified node imports
* [no-restricted-modules](no-restricted-modules) - restrict usage of specified node modules
* [no-restricted-modules](no-restricted-modules) - 限制指定的node模块的使用
* [no-sync](no-sync) - disallow use of synchronous methods
* [no-sync](no-sync) - 禁用同步方法

## Stylistic Issues

These rules are purely matters of style and are quite subjective.

这些规则完全是风格问题，是相当主观的。

* [array-bracket-spacing](array-bracket-spacing) - enforce spacing inside array brackets (fixable)
* [array-bracket-spacing](array-bracket-spacing) - 强制数组方括号中使用空格 (fixable)
* [block-spacing](block-spacing) - disallow or enforce spaces inside of single line blocks (fixable)
* [block-spacing](block-spacing) - 禁止或强制在单行代码块中使用空格 (fixable)
* [brace-style](brace-style) - enforce one true brace style
* [brace-style](brace-style) - 强制使用一种大括号风格
* [camelcase](camelcase) - require camel case names
* [camelcase](camelcase) - 要求使用骆驼拼写法
* [comma-spacing](comma-spacing) - enforce spacing before and after comma (fixable)
* [comma-spacing](comma-spacing) - 强制在逗号周围使用空格 (fixable)
* [comma-style](comma-style) - enforce one true comma style
* [comma-style](comma-style) - 强制使用一种逗号风格
* [computed-property-spacing](computed-property-spacing) - require or disallow padding inside computed properties (fixable)
* [computed-property-spacing](computed-property-spacing) - 禁止或强制在计算属性中使用空格 (fixable)
* [consistent-this](consistent-this) - enforce consistent naming when capturing the current execution context
* [consistent-this](consistent-this) - 当获取当前执行环境的上下文时，强制使用一致的命名
* [eol-last](eol-last) - enforce newline at the end of file, with no multiple empty lines (fixable)
* [eol-last](eol-last) - 要求文件末尾保留一行空行 (fixable)
* [func-names](func-names) - require function expressions to have a name
* [func-names](func-names) - 要求函数表达式有个一名字
* [func-style](func-style) - enforce use of function declarations or expressions
* [func-style](func-style) - 强制使用函数声明或函数表达式
* [id-blacklist](id-blacklist) - blacklist certain identifiers to prevent them being used
* [id-blacklist](id-blacklist) - blacklist certain identifiers to prevent them being used
* [id-length](id-length) - this option enforces minimum and maximum identifier lengths (variable names, property names etc.)
* [id-length](id-length) - 该选项强制标识符的长度（变量名，属性明等）
* [id-match](id-match) - require identifiers to match the provided regular expression
* [id-match](id-match) - 要求标识符匹配所提供的正则表达式
* [indent](indent) - specify tab or space width for your code (fixable)
* [indent](indent) - 为你的代码指定tab或空格缩进宽度 (fixable)
* [jsx-quotes](jsx-quotes) - specify whether double or single quotes should be used in JSX attributes (fixable)
* [jsx-quotes](jsx-quotes) - 指定应该在JSX属性中使用双引号还是单引号 (fixable)
* [key-spacing](key-spacing) - enforce spacing between keys and values in object literal properties
* [key-spacing](key-spacing) - 强制对象字面量属性中键和值之间的间距
* [keyword-spacing](keyword-spacing) - enforce spacing before and after keywords (fixable)
* [keyword-spacing](keyword-spacing) - enforce spacing before and after keywords (fixable)
* [linebreak-style](linebreak-style) - enforce linebreak style (fixable)
* [linebreak-style](linebreak-style) - 强制换行风格 (fixable)
* [lines-around-comment](lines-around-comment) - enforce empty lines around comments
* [lines-around-comment](lines-around-comment) - 强制注释周围有空行
* [max-depth](max-depth) - specify the maximum depth that blocks can be nested
* [max-depth](max-depth) - 指定块可嵌套的最大深度
* [max-len](max-len) - specify the maximum length of a line in your program
* [max-len](max-len) - 指定你程序中一行的最大长度
* [max-nested-callbacks](max-nested-callbacks) - specify the maximum depth callbacks can be nested
* [max-nested-callbacks](max-nested-callbacks) - 指定回调函数最大嵌套深度
* [max-params](max-params) - limits the number of parameters that can be used in the function declaration
* [max-params](max-params) - 限制函数声明中可使用的参数数量
* [max-statements](max-statements) - specify the maximum number of statement allowed in a function
* [max-statements](max-statements) - 指定一个函数所允许的语句的最大数量
* [new-cap](new-cap) - require a capital letter for constructors
* [new-cap](new-cap) - 要求构造函数首字母大写
* [new-parens](new-parens) - disallow the omission of parentheses when invoking a constructor with no arguments
* [new-parens](new-parens) - 调用无参构造函数时，不允许省略圆括号
* [newline-after-var](newline-after-var) - require or disallow an empty newline after variable declarations
* [newline-after-var](newline-after-var) - require or disallow an empty newline after variable declarations
* [newline-before-return](newline-before-return) - require newline before `return` statement
* [newline-before-return](newline-before-return) - require newline before `return` statement
* [newline-per-chained-call](newline-per-chained-call) - enforce newline after each call when chaining the calls
* [newline-per-chained-call](newline-per-chained-call) - enforce newline after each call when chaining the calls
* [no-array-constructor](no-array-constructor) - 要求或禁止变量声明语句后有空行
* [no-array-constructor](no-array-constructor) - disallow use of the `Array` constructor
* [no-bitwise](no-bitwise) - disallow use of bitwise operators
* [no-bitwise](no-bitwise) - 不允许使用按位运算符 
* [no-continue](no-continue) - disallow use of the `continue` statement
* [no-continue](no-continue) - 不允许使用 `continue` 语句
* [no-inline-comments](no-inline-comments) - disallow comments inline after code
* [no-inline-comments](no-inline-comments) - 不允许代码行后有注释
* [no-lonely-if](no-lonely-if) - disallow `if` as the only statement in an `else` block
* [no-lonely-if](no-lonely-if) - 禁止`if`作为唯一的语句出现在`else`语句中
* [no-mixed-spaces-and-tabs](no-mixed-spaces-and-tabs) - disallow mixed spaces and tabs for indentation (recommended)
* [no-mixed-spaces-and-tabs](no-mixed-spaces-and-tabs) - 不允许空格和tab混合缩进 (recommended)
* [no-multiple-empty-lines](no-multiple-empty-lines) - disallow multiple empty lines
* [no-multiple-empty-lines](no-multiple-empty-lines) - 不允许多个空行
* [no-negated-condition](no-negated-condition) - disallow negated conditions
* [no-negated-condition](no-negated-condition) - 不允许否定的表达式
* [no-nested-ternary](no-nested-ternary) - disallow nested ternary expressions
* [no-nested-ternary](no-nested-ternary) - 不允许使用嵌套的三元表达式
* [no-new-object](no-new-object) - disallow the use of the `Object` constructor
* [no-new-object](no-new-object) - 不允许使用`Object`的构造函数
* [no-plusplus](no-plusplus) - disallow use of unary operators, `++` and `--`
* [no-plusplus](no-plusplus) - 不允许使用`++` 和 `--`
* [no-restricted-syntax](no-restricted-syntax) - disallow use of certain syntax in code
* [no-restricted-syntax](no-restricted-syntax) - 不允许在代码中使用特定的语法
* [no-spaced-func](no-spaced-func) - disallow space between function identifier and application (fixable)
* [no-spaced-func](no-spaced-func) - 不允许函数调用时，function标识符和括号之间有空格 (fixable)
* [no-ternary](no-ternary) - disallow the use of ternary operators
* [no-ternary](no-ternary) - 不允许使用三元操作符
* [no-trailing-spaces](no-trailing-spaces) - disallow trailing whitespace at the end of lines (fixable)
* [no-trailing-spaces](no-trailing-spaces) - 禁用行尾空格 (fixable)
* [no-underscore-dangle](no-underscore-dangle) - disallow dangling underscores in identifiers
* [no-underscore-dangle](no-underscore-dangle) - 禁止标识符中有悬空下划线
* [no-unneeded-ternary](no-unneeded-ternary) - disallow the use of ternary operators when a simpler alternative exists
* [no-unneeded-ternary](no-unneeded-ternary) - 在有更简单的可替代的表达式存在时，禁止使用三元操作符
* [no-whitespace-before-property](no-whitespace-before-property) - disallow whitespace before properties
* [no-whitespace-before-property](no-whitespace-before-property) - disallow whitespace before properties
* [object-curly-spacing](object-curly-spacing) - require or disallow padding inside curly braces (fixable)
* [object-curly-spacing](object-curly-spacing) - 禁止或强制对象的花括号中有空格 (fixable)
* [one-var](one-var) - require or disallow one variable declaration per function
* [one-var](one-var) - 要求或禁止每个函数只有一个变量声明
* [one-var-declaration-per-line](one-var-declaration-per-line) - require or disallow an newline around variable declarations
* [one-var-declaration-per-line](one-var-declaration-per-line) - require or disallow an newline around variable declarations
* [operator-assignment](operator-assignment) - require assignment operator shorthand where possible or prohibit it entirely
* [operator-assignment](operator-assignment) - 完全禁止或在可能的情况下要求使用简化的赋值操作符
* [operator-linebreak](operator-linebreak) - enforce operators to be placed before or after line breaks
* [operator-linebreak](operator-linebreak) - 强制操作符放在换行符之前或之后
* [padded-blocks](padded-blocks) - enforce padding within blocks
* [padded-blocks](padded-blocks) - 强制块内填充
* [quote-props](quote-props) - require quotes around object literal property names
* [quote-props](quote-props) - 要求对象字面量属性名称用引号括起来
* [quotes](quotes) - specify whether backticks, double or single quotes should be used (fixable)
* [quotes](quotes) - 指定是否应使用反勾号、双引号互殴单引号(fixable)
* [require-jsdoc](require-jsdoc) - Require JSDoc comment
* [require-jsdoc](require-jsdoc) - 要求使用 JSDoc 注释
* [semi](semi) - require or disallow use of semicolons instead of ASI (fixable)
* [semi](semi) - 要求或禁止使用分号而不是ASI (fixable)
* [semi-spacing](semi-spacing) - enforce spacing before and after semicolons (fixable)
* [semi-spacing](semi-spacing) - 强制分号之前和之后有空格 (fixable)
* [sort-imports](sort-imports) - sort import declarations within module
* [sort-imports](sort-imports) - sort import declarations within module
* [sort-vars](sort-vars) - sort variables within the same declaration block
* [sort-vars](sort-vars) - 对同一个声明块中的变量进行排序
* [space-before-blocks](space-before-blocks) - require or disallow a space before blocks (fixable)
* [space-before-blocks](space-before-blocks) - 要求或禁止块之前的空格 (fixable)
* [space-before-function-paren](space-before-function-paren) - require or disallow a space before function opening parenthesis (fixable)
* [space-before-function-paren](space-before-function-paren) - 要求或禁止函数左括号之前有一个空格 (fixable)
* [space-in-parens](space-in-parens) - require or disallow spaces inside parentheses (fixable)
* [space-in-parens](space-in-parens) - 要求或禁止圆括号内有空格 (fixable)
* [space-infix-ops](space-infix-ops) - require spaces around operators (fixable)
* [space-infix-ops](space-infix-ops) - 要求操作符周围有空格 (fixable)
* [space-unary-ops](space-unary-ops) - require or disallow spaces before/after unary operators (fixable)
* [space-unary-ops](space-unary-ops) - 要求或禁止在一元操作符之前或之后存在空格 (fixable)
* [spaced-comment](spaced-comment) - require or disallow a space immediately following the `//` or `/*` in a comment
* [spaced-comment](spaced-comment) - 要求或禁止注释中`//` 或 `/*`紧跟一个空格
* [wrap-regex](wrap-regex) - require regex literals to be wrapped in parentheses
* [wrap-regex](wrap-regex) - 要求正则表达式被括号括起来

## ECMAScript 6

These rules are only relevant to ES6 environments.

这些规则只与ES6环境有关。

* [arrow-body-style](arrow-body-style) - require braces in arrow function body
* [arrow-body-style](arrow-body-style) - 要求箭头函数体使用大括号
* [arrow-parens](arrow-parens) - require parens in arrow function arguments
* [arrow-parens](arrow-parens) - 要求箭头函数的参数使用圆括号
* [arrow-spacing](arrow-spacing) - require space before/after arrow function's arrow (fixable)
* [arrow-spacing](arrow-spacing) - 要求箭头函数的箭头之前或之后有空格 (fixable)
* [constructor-super](constructor-super) - verify calls of `super()` in constructors (recommended)
* [constructor-super](constructor-super) - 验证构造函数中`super()`的调用 (recommended)
* [generator-star-spacing](generator-star-spacing) - enforce spacing around the `*` in generator functions (fixable)
* [generator-star-spacing](generator-star-spacing) - 强制generator函数中*号周围有空格 (fixable)
* [no-class-assign](no-class-assign) - disallow modifying variables of class declarations (recommended)
* [no-class-assign](no-class-assign) - 不允许修改类声明的变量 (recommended)
* [no-confusing-arrow](no-confusing-arrow) - disallow arrow functions where they could be confused with comparisons
* [no-confusing-arrow](no-confusing-arrow) - disallow arrow functions where they could be confused with comparisons
* [no-const-assign](no-const-assign) - disallow modifying variables that are declared using `const` (recommended)
* [no-const-assign](no-const-assign) - 不允许改变用`const`声明的变量 (recommended)
* [no-dupe-class-members](no-dupe-class-members) - disallow duplicate name in class members (recommended)
* [no-dupe-class-members](no-dupe-class-members) - 不允许类成员中有重复的名称 (recommended)
* [no-new-symbol](no-new-symbol) - disallow use of the `new` operator with the `Symbol` object (recommended)
* [no-new-symbol](no-new-symbol) - disallow use of the `new` operator with the `Symbol` object (recommended)
* [no-this-before-super](no-this-before-super) - disallow use of `this`/`super` before calling `super()` in constructors (recommended)
* [no-this-before-super](no-this-before-super) - 在构造函数中禁止在调用`super()`之前使用`this`或`super` (recommended)
* [no-useless-constructor](no-useless-constructor) - disallow unnecessary constructor
* [no-useless-constructor](no-useless-constructor) - disallow unnecessary constructor
* [no-var](no-var) - require `let` or `const` instead of `var`
* [no-var](no-var) - 要求使用 `let` 或 `const` 而不是 `var`
* [object-shorthand](object-shorthand) - require method and property shorthand syntax for object literals
* [object-shorthand](object-shorthand) - 要求对象字面量中方法和属性使用简写语法
* [prefer-arrow-callback](prefer-arrow-callback) - suggest using arrow functions as callbacks
* [prefer-arrow-callback](prefer-arrow-callback) - 推荐使用箭头函数作为回调
* [prefer-const](prefer-const) - suggest using `const` declaration for variables that are never modified after declared
* [prefer-const](prefer-const) - 建议使用`const`声明那些声明后从不被修改过的变量
* [prefer-reflect](prefer-reflect) - suggest using Reflect methods where applicable
* [prefer-reflect](prefer-reflect) - 建议在合适的地方使用反射方法
* [prefer-rest-params](prefer-rest-params) - suggest using the rest parameters instead of `arguments`
* [prefer-rest-params](prefer-rest-params) - suggest using the rest parameters instead of `arguments`
* [prefer-spread](prefer-spread) - suggest using the spread operator instead of `.apply()`
* [prefer-spread](prefer-spread) - 建议使用扩展运算符而非`.apply()`
* [prefer-template](prefer-template) - suggest using template literals instead of strings concatenation
* [prefer-template](prefer-template) - 建议使用模板而非字符串连接
* [require-yield](require-yield) - disallow generator functions that do not have `yield`
* [require-yield](require-yield) - 禁用函数内没有`yield`的generator函数
* [template-curly-spacing](template-curly-spacing) - enforce spacing around embedded expressions of template strings (fixable)
* [template-curly-spacing](template-curly-spacing) - enforce spacing around embedded expressions of template strings (fixable)
* [yield-star-spacing](yield-star-spacing) - enforce spacing around the `*` in `yield*` expressions (fixable)
* [yield-star-spacing](yield-star-spacing) - enforce spacing around the `*` in `yield*` expressions (fixable)


## Removed

These rules existed in a previous version of ESLint but have since been replaced by newer rules.

以下规则只存在于旧版的ESLint中，并已被新规则所取代。

* [generator-star](generator-star) - enforce the position of the `*` in generator functions (replaced by [generator-star-spacing](generator-star-spacing))
* [generator-star](generator-star) - 强制`*`在generator函数中的位置 (替换为 [generator-star-spacing](generator-star-spacing))
* [global-strict](global-strict) - require or disallow the `"use strict"` pragma in the global scope (replaced by [strict](strict))
* [global-strict](global-strict) - 要求或禁止全局作用域下的`"use strict"` (替换为 [strict](strict))
* [no-arrow-condition](no-arrow-condition) - disallow arrow functions where a condition is expected (replaced by [no-confusing-arrow](no-confusing-arrow) and [no-constant-condition](no-constant-condition))
* [no-arrow-condition](no-arrow-condition) - 禁止在本应使用条件语句的地方使用箭头函数 (替换为 [no-confusing-arrow](no-confusing-arrow) and [no-constant-condition](no-constant-condition))
* [no-comma-dangle](no-comma-dangle) - disallow trailing commas in object literals (replaced by [comma-dangle](comma-dangle))
* [no-comma-dangle](no-comma-dangle) - 禁用对象字面量中尾部逗号 (替换为 [comma-dangle](comma-dangle))
* [no-empty-class](no-empty-class) - disallow the use of empty character classes in regular expressions (replaced by [no-empty-character-class](no-empty-character-class))
* [no-empty-class](no-empty-class) - 禁止在正则表达式中使用空字符 (替换为 [no-empty-character-class](no-empty-character-class))
* [no-empty-label](no-empty-label) - disallow use of labels for anything other than loops and switches (replaced by [no-labels](no-labels))
* [no-empty-label](no-empty-label) - 禁用标签，除了循环和switch外(替换为 [no-labels](no-labels))
* [no-extra-strict](no-extra-strict) - disallow unnecessary use of `"use strict";` when already in strict mode (replaced by [strict](strict))
* [no-extra-strict](no-extra-strict) - 当已经处于严格模式下，禁用不必要的`"use strict";`编译指示 (替换为 [strict](strict))
* [no-reserved-keys](no-reserved-keys) - disallow reserved words being used as object literal keys (replaced by [quote-props](quote-props))
* [no-reserved-keys](no-reserved-keys) - 禁止使用保留字作为对象字面量的键(替换为 [quote-props](quote-props))
* [no-space-before-semi](no-space-before-semi) - disallow space before semicolon (replaced by [semi-spacing](semi-spacing))
* [no-space-before-semi](no-space-before-semi) - 禁用分号前空格 (替换为 [semi-spacing](semi-spacing))
* [no-wrap-func](no-wrap-func) - disallow wrapping of non-IIFE statements in parens (replaced by [no-extra-parens](no-extra-parens))
* [no-wrap-func](no-wrap-func) - 禁止非IIFE语句括在括号中 (替换为 [no-extra-parens](no-extra-parens))
* [space-after-function-name](space-after-function-name) - require a space after function names (replaced by [space-before-function-paren](space-before-function-paren))
* [space-after-function-name](space-after-function-name) - 要求函数名后有一个空格 (替换为 [space-before-function-paren](space-before-function-paren))
* [space-after-keywords](space-after-keywords) - require a space after certain keywords (fixable) (replaced by [keyword-spacing](keyword-spacing))
* [space-after-keywords](space-after-keywords) - 要求在特定的关键字之后有一个空格 (fixable) (替换为 [keyword-spacing](keyword-spacing))
* [space-before-function-parentheses](space-before-function-parentheses) - require or disallow space before function parentheses (replaced by [space-before-function-paren](space-before-function-paren))
* [space-before-function-parentheses](space-before-function-parentheses) - 要求或禁止函数的圆括号前有空格 (替换为 [space-before-function-paren](space-before-function-paren))
* [space-before-keywords](space-before-keywords) - require a space before certain keywords (fixable) (replaced by [keyword-spacing](keyword-spacing))
* [space-before-keywords](space-before-keywords) - 要求特定的关键字之前有一个空格 (fixable) (替换为 [keyword-spacing](keyword-spacing))
* [space-in-brackets](space-in-brackets) - require or disallow spaces inside brackets (replaced by [object-curly-spacing](object-curly-spacing) and [array-bracket-spacing](array-bracket-spacing))
* [space-in-brackets](space-in-brackets) - 要求或禁止括号内有空格 (替换为 [object-curly-spacing](object-curly-spacing) and [array-bracket-spacing](array-bracket-spacing))
* [space-return-throw-case](space-return-throw-case) - require a space after `return`, `throw`, and `case` (fixable) (replaced by [keyword-spacing](keyword-spacing))
* [space-return-throw-case](space-return-throw-case) - 要求`return`，`throw`和 `case`之后一个空格 (fixable) (替换为 [keyword-spacing](keyword-spacing))
* [space-unary-word-ops](space-unary-word-ops) - require or disallow spaces before/after unary operators (replaced by [space-unary-ops](space-unary-ops))
* [space-unary-word-ops](space-unary-word-ops) - 要求或禁止一元操作符之前或之后有空格 (替换为 [space-unary-ops](space-unary-ops))
* [spaced-line-comment](spaced-line-comment) - require or disallow a space immediately following the `//` in a line comment (replaced by [spaced-comment](spaced-comment))
* [spaced-line-comment](spaced-line-comment) - 要求或禁止注释中`//`紧跟一个空格 (替换为 [spaced-comment](spaced-comment))
