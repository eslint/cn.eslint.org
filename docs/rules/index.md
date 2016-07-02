---
title: List of available rules
layout: doc
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# Rules

Rules in ESLint are grouped by category to help you understand their purpose.

为了让你对规则有个更好的理解，ESLint 对其进行了分门别类。

No rules are enabled by default. The `"extends": "eslint:recommended"` property in a [configuration file](../user-guide/configuring#extending-configuration-files) enables rules that report common problems, which have a check mark (recommended) below.

所有的规则默认都是禁用的。在[配置文件](../user-guide/configuring#extending-configuration-files)中，使用 `"extends": "eslint:recommended"` 来启用推荐的规则，报告一些常见的问题，在下文中这些推荐的规则都带有一个(recommended)标记。

The `--fix` option on the [command line](../user-guide/command-line-interface#fix) automatically fixes problems (currently mostly whitespace) reported by rules which have a wrench (fixable) below.

[命令行](../user-guide/command-line-interface#fix)的 `--fix` 选项用来自动修复规则所报告的问题（目前，大部分是对空白的修复），在下文中会有一个(fixable)的图标。

## Possible Errors

These rules relate to possible syntax or logic errors in JavaScript code:

下面的规则指出了你可能犯错误的地方。

* [comma-dangle](comma-dangle): require or disallow trailing commas (recommended) (fixable)
* [comma-dangle](comma-dangle): 要求或禁止末尾逗号 (recommended) (fixable)
* [no-cond-assign](no-cond-assign): disallow assignment operators in conditional expressions (recommended)
* [no-cond-assign](no-cond-assign): 禁止条件表达式中出现赋值操作符 (recommended)
* [no-console](no-console): disallow the use of `console` (recommended)
* [no-console](no-console): 禁用 `console` (recommended)
* [no-constant-condition](no-constant-condition): disallow constant expressions in conditions (recommended)
* [no-constant-condition](no-constant-condition): 禁止在条件中使用常量表达式 (recommended)
* [no-control-regex](no-control-regex): disallow control characters in regular expressions (recommended)
* [no-control-regex](no-control-regex): 禁止在正则表达式中使用控制字符 (recommended)
* [no-debugger](no-debugger): disallow the use of `debugger` (recommended)
* [no-debugger](no-debugger): 禁用 `debugger` (recommended)
* [no-dupe-args](no-dupe-args): disallow duplicate arguments in `function` definitions (recommended)
* [no-dupe-args](no-dupe-args): 禁止 `function` 定义中出现重名参数 (recommended)
* [no-dupe-keys](no-dupe-keys): disallow duplicate keys in object literals (recommended)
* [no-dupe-keys](no-dupe-keys): 禁止对象字面量中出现重复的 key (recommended)
* [no-duplicate-case](no-duplicate-case): disallow duplicate case labels (recommended)
* [no-duplicate-case](no-duplicate-case): 禁止重复的 case 标签 (recommended)
* [no-empty](no-empty): disallow empty block statements (recommended)
* [no-empty](no-empty): 禁止空语句块 (recommended)
* [no-empty-character-class](no-empty-character-class): disallow empty character classes in regular expressions (recommended)
* [no-empty-character-class](no-empty-character-class): 禁止在正则表达式中使用空字符集 (recommended)
* [no-ex-assign](no-ex-assign): disallow reassigning exceptions in `catch` clauses (recommended)
* [no-ex-assign](no-ex-assign): 禁止对 `catch` 子句的参数重新赋值 (recommended)
* [no-extra-boolean-cast](no-extra-boolean-cast): disallow unnecessary boolean casts (recommended)
* [no-extra-boolean-cast](no-extra-boolean-cast): 禁止不必要的布尔转换 (recommended)
* [no-extra-parens](no-extra-parens): disallow unnecessary parentheses
* [no-extra-parens](no-extra-parens): 禁止不必要的括号
* [no-extra-semi](no-extra-semi): disallow unnecessary semicolons (recommended) (fixable)
* [no-extra-semi](no-extra-semi): 禁止不必要的分号 (recommended) (fixable)
* [no-func-assign](no-func-assign): disallow reassigning `function` declarations (recommended)
* [no-func-assign](no-func-assign): 禁止对 `function` 声明重新赋值 (recommended)
* [no-inner-declarations](no-inner-declarations): disallow `function` or `var` declarations in nested blocks (recommended)
* [no-inner-declarations](no-inner-declarations): 禁止在嵌套的块中出现 `function` 或 `var` 声明 (recommended)
* [no-invalid-regexp](no-invalid-regexp): disallow invalid regular expression strings in `RegExp` constructors (recommended)
* [no-invalid-regexp](no-invalid-regexp): 禁止 `RegExp` 构造函数中无效的正则表达式字符串 (recommended)
* [no-irregular-whitespace](no-irregular-whitespace): disallow irregular whitespace outside of strings and comments (recommended)
* [no-irregular-whitespace](no-irregular-whitespace): 禁止在字符串和注释之外不规则的空白 (recommended)
* [no-negated-in-lhs](no-negated-in-lhs): disallow negating the left operand in `in` expressions (recommended)
* [no-negated-in-lhs](no-negated-in-lhs): 禁止在 `in` 表达式中出现否定的左操作数 (recommended)
* [no-obj-calls](no-obj-calls): disallow calling global object properties as functions (recommended)
* [no-obj-calls](no-obj-calls): 禁止把全局对象 (`Math` 和 `JSON`) 作为函数调用 (recommended)
* [no-prototype-builtins](no-prototype-builtins): Disallow use of `Object.prototypes` builtins directly
* [no-prototype-builtins](no-prototype-builtins): 禁止直接使用 `Object.prototypes` 的内置属性
* [no-regex-spaces](no-regex-spaces): disallow multiple spaces in regular expression literals (recommended)
* [no-regex-spaces](no-regex-spaces): 禁止正则表达式字面量中出现多个空格 (recommended)
* [no-sparse-arrays](no-sparse-arrays): disallow sparse arrays (recommended)
* [no-sparse-arrays](no-sparse-arrays): 禁用稀疏数组 (recommended)
* [no-unexpected-multiline](no-unexpected-multiline): disallow confusing multiline expressions (recommended)
* [no-unexpected-multiline](no-unexpected-multiline): 禁止出现令人困惑的多行表达式 (recommended)
* [no-unreachable](no-unreachable): disallow unreachable code after `return`, `throw`, `continue`, and `break` statements (recommended)
* [no-unreachable](no-unreachable): 禁止在`return`、`throw`、`continue` 和 `break`语句之后出现不可达代码 (recommended)
* [no-unsafe-finally](no-unsafe-finally): disallow control flow statements in `finally` blocks
* [no-unsafe-finally](no-unsafe-finally): 禁止在 `finally` 语句块中出现控制流语句
* [use-isnan](use-isnan): require calls to `isNaN()` when checking for `NaN` (recommended)
* [use-isnan](use-isnan): 要求使用 `isNaN()` 检查 `NaN` (recommended)
* [valid-jsdoc](valid-jsdoc): enforce valid JSDoc comments
* [valid-jsdoc](valid-jsdoc): 强制使用有效的 JSDoc 注释
* [valid-typeof](valid-typeof): enforce comparing `typeof` expressions against valid strings (recommended)
* [valid-typeof](valid-typeof): 强制 `typeof` 表达式与有效的字符串进行比较 (recommended)


## Best Practices

These rules relate to better ways of doing things to help you avoid problems:

这些规则是关于最佳实践的，帮助你避免一些问题：

* [accessor-pairs](accessor-pairs): enforce getter and setter pairs in objects
* [accessor-pairs](accessor-pairs): 强制 getter 和 setter 在对象中成对出现
* [array-callback-return](array-callback-return): enforce `return` statements in callbacks of array methods
* [array-callback-return](array-callback-return): 强制数组方法的回调函数中有 `return` 语句
* [block-scoped-var](block-scoped-var): enforce the use of variables within the scope they are defined
* [block-scoped-var](block-scoped-var): 强制把变量的使用限制在其定义的作用域范围内
* [complexity](complexity): enforce a maximum cyclomatic complexity allowed in a program
* [complexity](complexity): 指定程序中允许的最大环路复杂度
* [consistent-return](consistent-return): require `return` statements to either always or never specify values
* [consistent-return](consistent-return): 要求 `return` 语句要么总是指定返回的值，要么不指定
* [curly](curly): enforce consistent brace style for all control statements
* [curly](curly): 强制所有控制语句使用一致的括号风格
* [default-case](default-case): require `default` cases in `switch` statements
* [default-case](default-case): 要求 `switch` 语句中有 `default` 分支
* [dot-location](dot-location): enforce consistent newlines before and after dots
* [dot-location](dot-location): 强制在点号之前和之后一致的换行
* [dot-notation](dot-notation): enforce dot notation whenever possible
* [dot-notation](dot-notation): 强制在任何允许的时候使用点号
* [eqeqeq](eqeqeq): require the use of `===` and `!==`
* [eqeqeq](eqeqeq): 要求使用 `===` 和 `!==`
* [guard-for-in](guard-for-in): require `for-in` loops to include an `if` statement
* [guard-for-in](guard-for-in): 要求 `for-in` 循环中有一个 `if` 语句
* [no-alert](no-alert): disallow the use of `alert`, `confirm`, and `prompt`
* [no-alert](no-alert): 禁用 `alert`、`confirm` 和 `prompt`
* [no-caller](no-caller): disallow the use of `arguments.caller` or `arguments.callee`
* [no-caller](no-caller): 禁用 `arguments.caller` 或 `arguments.callee`
* [no-case-declarations](no-case-declarations): disallow lexical declarations in case clauses (recommended)
* [no-case-declarations](no-case-declarations): 不允许在 case 子句中使用词法声明 (recommended)
* [no-div-regex](no-div-regex): disallow division operators explicitly at the beginning of regular expressions
* [no-div-regex](no-div-regex): 禁止除法操作符显式的出现在正则表达式开始的位置
* [no-else-return](no-else-return): disallow `else` blocks after `return` statements in `if` statements
* [no-else-return](no-else-return): 禁止 `if` 语句中有 `return` 之后有 `else`
* [no-empty-function](no-empty-function): disallow empty functions
* [no-empty-function](no-empty-function): 禁止出现空函数
* [no-empty-pattern](no-empty-pattern): disallow empty destructuring patterns (recommended)
* [no-empty-pattern](no-empty-pattern): 禁止使用空解构模式 (recommended)
* [no-eq-null](no-eq-null): disallow `null` comparisons without type-checking operators
* [no-eq-null](no-eq-null): 禁止在没有类型检查操作符的情况下与 `null` 进行比较
* [no-eval](no-eval): disallow the use of `eval()`
* [no-eval](no-eval): 禁用 `eval()`
* [no-extend-native](no-extend-native): disallow extending native types
* [no-extend-native](no-extend-native): 禁止扩展原生类型
* [no-extra-bind](no-extra-bind): disallow unnecessary calls to `.bind()`
* [no-extra-bind](no-extra-bind): 禁止不必要的 `.bind()` 调用
* [no-extra-label](no-extra-label): disallow unnecessary labels
* [no-extra-label](no-extra-label): 禁用不必要的标签
* [no-fallthrough](no-fallthrough): disallow fallthrough of `case` statements (recommended)
* [no-fallthrough](no-fallthrough): 禁止 `case` 语句落空 (recommended)
* [no-floating-decimal](no-floating-decimal): disallow leading or trailing decimal points in numeric literals
* [no-floating-decimal](no-floating-decimal): 禁止数字字面量中使用前导和末尾小数点
* [no-implicit-coercion](no-implicit-coercion): disallow shorthand type conversions
* [no-implicit-coercion](no-implicit-coercion): 禁止使用短符号进行类型转换
* [no-implicit-globals](no-implicit-globals): disallow `var` and named `function` declarations in the global scope
* [no-implicit-globals](no-implicit-globals): 禁止在全局范围内使用 `var` 和命名的 `function` 声明
* [no-implied-eval](no-implied-eval): disallow the use of `eval()`-like methods
* [no-implied-eval](no-implied-eval): 禁止使用类似 `eval()` 的方法
* [no-invalid-this](no-invalid-this): disallow `this` keywords outside of classes or class-like objects
* [no-invalid-this](no-invalid-this): 禁止 `this` 关键字出现在类和类对象之外
* [no-iterator](no-iterator): disallow the use of the `__iterator__` property
* [no-iterator](no-iterator): 禁用 `__iterator__` 属性
* [no-labels](no-labels): disallow labeled statements
* [no-labels](no-labels): 禁用标签语句
* [no-lone-blocks](no-lone-blocks): disallow unnecessary nested blocks
* [no-lone-blocks](no-lone-blocks): 禁用不必要的嵌套块
* [no-loop-func](no-loop-func): disallow `function` declarations and expressions inside loop statements
* [no-loop-func](no-loop-func): 禁止在循环中出现 `function` 声明和表达式
* [no-magic-numbers](no-magic-numbers): disallow magic numbers
* [no-magic-numbers](no-magic-numbers): 禁用魔术数字
* [no-multi-spaces](no-multi-spaces): disallow multiple spaces (fixable)
* [no-multi-spaces](no-multi-spaces): 禁止使用多个空格 (fixable)
* [no-multi-str](no-multi-str): disallow multiline strings
* [no-multi-str](no-multi-str): 禁止使用多行字符串
* [no-native-reassign](no-native-reassign): disallow reassigning native objects
* [no-native-reassign](no-native-reassign): 禁止对原生对象赋值
* [no-new](no-new): disallow `new` operators outside of assignments or comparisons
* [no-new](no-new): 禁止在非赋值或条件语句中使用 `new` 操作符
* [no-new-func](no-new-func): disallow `new` operators with the `Function` object
* [no-new-func](no-new-func): 禁止对 `Function` 对象使用 `new` 操作符
* [no-new-wrappers](no-new-wrappers): disallow `new` operators with the `String`, `Number`, and `Boolean` objects
* [no-new-wrappers](no-new-wrappers): 禁止对 `String`，`Number` 和 `Boolean` 使用 `new` 操作符
* [no-octal](no-octal): disallow octal literals (recommended)
* [no-octal](no-octal): 禁用八进制字面量 (recommended)
* [no-octal-escape](no-octal-escape): disallow octal escape sequences in string literals
* [no-octal-escape](no-octal-escape): 禁止在字符串中使用八进制转义序列
* [no-param-reassign](no-param-reassign): disallow reassigning `function` parameters
* [no-param-reassign](no-param-reassign): 不允许对 `function` 的参数进行重新赋值
* [no-proto](no-proto): disallow the use of the `__proto__` property
* [no-proto](no-proto): 禁用 `__proto__` 属性
* [no-redeclare](no-redeclare): disallow `var` redeclaration (recommended)
* [no-redeclare](no-redeclare): 禁止使用 `var` 多次声明同一变量 (recommended)
* [no-return-assign](no-return-assign): disallow assignment operators in `return` statements
* [no-return-assign](no-return-assign): 禁止在 `return` 语句中使用赋值语句
* [no-script-url](no-script-url): disallow `javascript:` urls
* [no-script-url](no-script-url): 禁止使用 `javascript:` url
* [no-self-assign](no-self-assign): disallow assignments where both sides are exactly the same (recommended)
* [no-self-assign](no-self-assign): 禁止自我赋值 (recommended)
* [no-self-compare](no-self-compare): disallow comparisons where both sides are exactly the same
* [no-self-compare](no-self-compare): 禁止自身比较
* [no-sequences](no-sequences): disallow comma operators
* [no-sequences](no-sequences): 禁用逗号操作符
* [no-throw-literal](no-throw-literal): disallow throwing literals as exceptions
* [no-throw-literal](no-throw-literal): 禁止抛出非异常字面量
* [no-unmodified-loop-condition](no-unmodified-loop-condition): disallow unmodified loop conditions
* [no-unmodified-loop-condition](no-unmodified-loop-condition): 禁用一成不变的循环条件
* [no-unused-expressions](no-unused-expressions): disallow unused expressions
* [no-unused-expressions](no-unused-expressions): 禁止出现未使用过的表达式
* [no-unused-labels](no-unused-labels): disallow unused labels (recommended)
* [no-unused-labels](no-unused-labels): 禁用未使用过的标签 (recommended)
* [no-useless-call](no-useless-call): disallow unnecessary calls to `.call()` and `.apply()`
* [no-useless-call](no-useless-call): 禁止不必要的 `.call()` 和 `.apply()`
* [no-useless-concat](no-useless-concat): disallow unnecessary concatenation of literals or template literals
* [no-useless-concat](no-useless-concat): 禁止不必要的字符串字面量或模板字面量的连接
* [no-useless-escape](no-useless-escape): disallow unnecessary escape characters
* [no-useless-escape](no-useless-escape): 禁用不必要的转义字符
* [no-void](no-void): disallow `void` operators
* [no-void](no-void): 禁用 `void` 操作符
* [no-warning-comments](no-warning-comments): disallow specified warning terms in comments
* [no-warning-comments](no-warning-comments): 禁止在注释中使用特定的警告术语
* [no-with](no-with): disallow `with` statements
* [no-with](no-with): 禁用 `with` 语句
* [radix](radix): enforce the consistent use of the radix argument when using `parseInt()`
* [radix](radix): 强制在`parseInt()`使用基数参数
* [vars-on-top](vars-on-top): require `var` declarations be placed at the top of their containing scope
* [vars-on-top](vars-on-top): 要求所有的 `var` 声明出现在它们所在的作用域顶部
* [wrap-iife](wrap-iife): require parentheses around immediate `function` invocations
* [wrap-iife](wrap-iife): 要求 IIFE 使用括号括起来
* [yoda](yoda): require or disallow "Yoda" conditions
* [yoda](yoda): 要求或禁止 "Yoda" 条件

## Strict Mode

These rules relate to strict mode directives:

该规则与使用严格模式和严格模式指令有关：

* [strict](strict): require or disallow strict mode directives
* [strict](strict): 要求或禁止使用严格模式指令


## Variables

These rules relate to variable declarations:

这些规则与变量声明有关：

* [init-declarations](init-declarations): require or disallow initialization in `var` declarations
* [init-declarations](init-declarations): 要求或禁止 `var` 声明中的初始化
* [no-catch-shadow](no-catch-shadow): disallow `catch` clause parameters from shadowing variables in the outer scope
* [no-catch-shadow](no-catch-shadow): 不允许 `catch` 子句的参数与外层作用域中的变量同名
* [no-delete-var](no-delete-var): disallow deleting variables (recommended)
* [no-delete-var](no-delete-var): 禁止删除变量 (recommended)
* [no-label-var](no-label-var): disallow labels that share a name with a variable
* [no-label-var](no-label-var): 不允许标签与变量同名
* [no-restricted-globals](no-restricted-globals): disallow specified global variables
* [no-restricted-globals](no-restricted-globals): 禁用特定的全局变量
* [no-shadow](no-shadow): disallow `var` declarations from shadowing variables in the outer scope
* [no-shadow](no-shadow): 禁止 `var` 声明 与外层作用域的变量同名
* [no-shadow-restricted-names](no-shadow-restricted-names): disallow identifiers from shadowing restricted names
* [no-shadow-restricted-names](no-shadow-restricted-names): 禁止覆盖受限制的标识符
* [no-undef](no-undef): disallow the use of undeclared variables unless mentioned in `/*global */` comments (recommended)
* [no-undef](no-undef): 禁用未声明的变量，除非它们在 `/*global */` 注释中被提到(recommended)
* [no-undef-init](no-undef-init): disallow initializing variables to `undefined`
* [no-undef-init](no-undef-init): 禁止将变量初始化为 `undefined`
* [no-undefined](no-undefined): disallow the use of `undefined` as an identifier
* [no-undefined](no-undefined): 禁止将 `undefined` 作为标识符
* [no-unused-vars](no-unused-vars): disallow unused variables (recommended)
* [no-unused-vars](no-unused-vars): 禁止出现未使用过的变量 (recommended)
* [no-use-before-define](no-use-before-define): disallow the use of variables before they are defined
* [no-use-before-define](no-use-before-define): 不允许在变量定义之前使用它们


## Node.js and CommonJS

These rules relate to code running in Node.js, or in browsers with CommonJS:

这些规则是关于Node.js 或 在浏览器中使用CommonJS 的：

* [callback-return](callback-return): require `return` statements after callbacks
* [callback-return](callback-return): require `return` statements after callbacks
* [global-require](global-require): require `require()` calls to be placed at top-level module scope
* [global-require](global-require): 要求 `require()` 出现在顶层模块作用域中
* [handle-callback-err](handle-callback-err): require error handling in callbacks
* [handle-callback-err](handle-callback-err): 要求回调函数中有容错处理
* [no-mixed-requires](no-mixed-requires): disallow `require` calls to be mixed with regular `var` declarations
* [no-mixed-requires](no-mixed-requires): 禁止混合常规 `var` 声明和 `require` 调用
* [no-new-require](no-new-require): disallow `new` operators with calls to `require`
* [no-new-require](no-new-require): 禁止调用 `require` 时使用 `new` 操作符
* [no-path-concat](no-path-concat): disallow string concatenation with `__dirname` and `__filename`
* [no-path-concat](no-path-concat): 禁止对 `__dirname` 和 `__filename`进行字符串连接
* [no-process-env](no-process-env): disallow the use of `process.env`
* [no-process-env](no-process-env): 禁用 `process.env`
* [no-process-exit](no-process-exit): disallow the use of `process.exit()`
* [no-process-exit](no-process-exit): 禁用 `process.exit()`
* [no-restricted-modules](no-restricted-modules): disallow specified modules when loaded by `require`
* [no-restricted-modules](no-restricted-modules): 禁用指定的通过 `require` 加载的模块
* [no-sync](no-sync): disallow synchronous methods
* [no-sync](no-sync): 禁用同步方法


## Stylistic Issues

These rules relate to style guidelines, and are therefore quite subjective:

这些规则是关于风格指南的，而且是非常主观的：

* [array-bracket-spacing](array-bracket-spacing): enforce consistent spacing inside array brackets (fixable)
* [array-bracket-spacing](array-bracket-spacing): 强制数组方括号中使用一致的空格 (fixable)
* [block-spacing](block-spacing): enforce consistent spacing inside single-line blocks (fixable)
* [block-spacing](block-spacing): 强制在单行代码块中使用一致的空格 (fixable)
* [brace-style](brace-style): enforce consistent brace style for blocks
* [brace-style](brace-style): 强制在代码块中使用一致的大括号风格
* [camelcase](camelcase): enforce camelcase naming convention
* [camelcase](camelcase): 强制使用骆驼拼写法命名约定
* [comma-spacing](comma-spacing): enforce consistent spacing before and after commas (fixable)
* [comma-spacing](comma-spacing): 强制在逗号前后使用一致的空格 (fixable)
* [comma-style](comma-style): enforce consistent comma style
* [comma-style](comma-style): 强制使用一致的逗号风格
* [computed-property-spacing](computed-property-spacing): enforce consistent spacing inside computed property brackets (fixable)
* [computed-property-spacing](computed-property-spacing): 强制在计算的属性的方括号中使用一致的空格 (fixable)
* [consistent-this](consistent-this): enforce consistent naming when capturing the current execution context
* [consistent-this](consistent-this): 当获取当前执行环境的上下文时，强制使用一致的命名
* [eol-last](eol-last): enforce at least one newline at the end of files (fixable)
* [eol-last](eol-last): 强制文件末尾至少保留一行空行 (fixable)
* [func-names](func-names): enforce named `function` expressions
* [func-names](func-names): 强制使用命名的 `function` 表达式
* [func-style](func-style): enforce the consistent use of either `function` declarations or expressions
* [func-style](func-style): 强制一致地使用函数声明或函数表达式
* [id-blacklist](id-blacklist): disallow specified identifiers
* [id-blacklist](id-blacklist): 禁止使用指定的标识符
* [id-length](id-length): enforce minimum and maximum identifier lengths
* [id-length](id-length): 强制标识符的最新和最大长度
* [id-match](id-match): require identifiers to match a specified regular expression
* [id-match](id-match): 要求标识符匹配一个指定的正则表达式
* [indent](indent): enforce consistent indentation (fixable)
* [indent](indent): 强制使用一致的缩进 (fixable)
* [jsx-quotes](jsx-quotes): enforce the consistent use of either double or single quotes in JSX attributes (fixable)
* [jsx-quotes](jsx-quotes): 强制在 JSX 属性中一致地使用双引号或单引号 (fixable)
* [key-spacing](key-spacing): enforce consistent spacing between keys and values in object literal properties
* [key-spacing](key-spacing): 强制在对象字面量的属性中键和值之间使用一致的间距
* [keyword-spacing](keyword-spacing): enforce consistent spacing before and after keywords (fixable)
* [keyword-spacing](keyword-spacing): 强制在关键字前后使用一致的空格 (fixable)
* [linebreak-style](linebreak-style): enforce consistent linebreak style (fixable)
* [linebreak-style](linebreak-style): 强制使用一致的换行风格 (fixable)
* [lines-around-comment](lines-around-comment): require empty lines around comments
* [lines-around-comment](lines-around-comment): 要求在注释周围有空行
* [max-depth](max-depth): enforce a maximum depth that blocks can be nested
* [max-depth](max-depth): 强制可嵌套的块的最大深度
* [max-len](max-len): enforce a maximum line length
* [max-len](max-len): 强制一行的最大长度
* [max-lines](max-lines): enforce a maximum file length
* [max-lines](max-lines): 强制最大行数
* [max-nested-callbacks](max-nested-callbacks): enforce a maximum depth that callbacks can be nested
* [max-nested-callbacks](max-nested-callbacks): 强制回调函数最大嵌套深度
* [max-params](max-params): enforce a maximum number of parameters in `function` definitions
* [max-params](max-params): 强制 `function` 定义中最多允许的参数数量
* [max-statements](max-statements): enforce a maximum number of statements allowed in `function` blocks
* [max-statements](max-statements): 强制 `function` 块最多允许的的语句数量
* [max-statements-per-line](max-statements-per-line): enforce a maximum number of statements allowed per line
* [max-statements-per-line](max-statements-per-line): 强制每一行中所允许的最大语句数量 
* [new-cap](new-cap): require constructor `function` names to begin with a capital letter
* [new-cap](new-cap): 要求构造函数首字母大写
* [new-parens](new-parens): require parentheses when invoking a constructor with no arguments
* [new-parens](new-parens): 要求调用无参构造函数时有圆括号
* [newline-after-var](newline-after-var): require or disallow an empty line after `var` declarations
* [newline-after-var](newline-after-var): 要求或禁止 `var` 声明语句后有一行空行
* [newline-before-return](newline-before-return): require an empty line before `return` statements
* [newline-before-return](newline-before-return): 要求 `return` 语句之前有一空行
* [newline-per-chained-call](newline-per-chained-call): require a newline after each call in a method chain
* [newline-per-chained-call](newline-per-chained-call): 要求方法链中每个调用都有一个换行符
* [no-array-constructor](no-array-constructor): disallow `Array` constructors
* [no-array-constructor](no-array-constructor): 禁止使用 `Array` 构造函数
* [no-bitwise](no-bitwise): disallow bitwise operators
* [no-bitwise](no-bitwise): 禁用按位运算符
* [no-continue](no-continue): disallow `continue` statements
* [no-continue](no-continue): 禁用 `continue` 语句
* [no-inline-comments](no-inline-comments): disallow inline comments after code
* [no-inline-comments](no-inline-comments): 禁止在代码行后使用内联注释
* [no-lonely-if](no-lonely-if): disallow `if` statements as the only statement in `else` blocks
* [no-lonely-if](no-lonely-if): 禁止 `if` 作为唯一的语句出现在 `else` 语句中
* [no-mixed-operators](no-mixed-operators): disallow mixes of different operators
* [no-mixed-operators](no-mixed-operators): 禁止混合使用不同的操作符
* [no-mixed-spaces-and-tabs](no-mixed-spaces-and-tabs): disallow mixed spaces and tabs for indentation (recommended)
* [no-mixed-spaces-and-tabs](no-mixed-spaces-and-tabs): 不允许空格和 tab 混合缩进 (recommended)
* [no-multiple-empty-lines](no-multiple-empty-lines): disallow multiple empty lines
* [no-multiple-empty-lines](no-multiple-empty-lines): 不允许多个空行
* [no-negated-condition](no-negated-condition): disallow negated conditions
* [no-negated-condition](no-negated-condition): 不允许否定的表达式
* [no-nested-ternary](no-nested-ternary): disallow nested ternary expressions
* [no-nested-ternary](no-nested-ternary): 不允许使用嵌套的三元表达式
* [no-new-object](no-new-object): disallow `Object` constructors
* [no-new-object](no-new-object): 禁止使用 `Object` 的构造函数
* [no-plusplus](no-plusplus): disallow the unary operators `++` and `--`
* [no-plusplus](no-plusplus): 禁止使用一元操作符 `++` 和 `--`
* [no-restricted-syntax](no-restricted-syntax): disallow specified syntax
* [no-restricted-syntax](no-restricted-syntax): 禁止使用特定的语法
* [no-spaced-func](no-spaced-func): disallow spacing between `function` identifiers and their applications (fixable)
* [no-spaced-func](no-spaced-func): 禁止 `function` 标识符和括号之间出现空格 (fixable)
* [no-ternary](no-ternary): disallow ternary operators
* [no-ternary](no-ternary): 不允许使用三元操作符
* [no-trailing-spaces](no-trailing-spaces): disallow trailing whitespace at the end of lines (fixable)
* [no-trailing-spaces](no-trailing-spaces): 禁用行尾空格 (fixable)
* [no-underscore-dangle](no-underscore-dangle): disallow dangling underscores in identifiers
* [no-underscore-dangle](no-underscore-dangle): 禁止标识符中有悬空下划线
* [no-unneeded-ternary](no-unneeded-ternary): disallow ternary operators when simpler alternatives exist
* [no-unneeded-ternary](no-unneeded-ternary): 禁止可以在有更简单的可替代的表达式时使用三元操作符
* [no-whitespace-before-property](no-whitespace-before-property): disallow whitespace before properties (fixable)
* [no-whitespace-before-property](no-whitespace-before-property): 禁止属性前有空白 (fixable)
* [object-curly-newline](object-curly-newline): enforce consistent line breaks inside braces (fixable)
* [object-curly-newline](object-curly-newline): 强制花括号内换行符的一致性 (fixable)
* [object-curly-spacing](object-curly-spacing): enforce consistent spacing inside braces (fixable)
* [object-curly-spacing](object-curly-spacing): 强制在花括号中使用一致的空格 (fixable)
* [object-property-newline](object-property-newline): enforce placing object properties on separate lines
* [object-property-newline](object-property-newline): 强制将对象的属性放在不同的行上 
* [one-var](one-var): enforce variables to be declared either together or separately in functions
* [one-var](one-var): 强制函数中的变量要么一起声明要么分开声明
* [one-var-declaration-per-line](one-var-declaration-per-line): require or disallow newlines around `var` declarations
* [one-var-declaration-per-line](one-var-declaration-per-line): 要求或禁止在 `var` 声明周围换行
* [operator-assignment](operator-assignment): require or disallow assignment operator shorthand where possible
* [operator-assignment](operator-assignment): 要求或禁止在可能的情况下要求使用简化的赋值操作符
* [operator-linebreak](operator-linebreak): enforce consistent linebreak style for operators
* [operator-linebreak](operator-linebreak): 强制操作符使用一致的换行符
* [padded-blocks](padded-blocks): require or disallow padding within blocks
* [padded-blocks](padded-blocks): 要求或禁止块内填充
* [quote-props](quote-props): require quotes around object literal property names
* [quote-props](quote-props): 要求对象字面量属性名称用引号括起来
* [quotes](quotes): enforce the consistent use of either backticks, double, or single quotes (fixable)
* [quotes](quotes): 强制使用一致的反勾号、双引号或单引号 (fixable)
* [require-jsdoc](require-jsdoc): require JSDoc comments
* [require-jsdoc](require-jsdoc): 要求使用 JSDoc 注释
* [semi](semi): require or disallow semicolons instead of ASI (fixable)
* [semi](semi): 要求或禁止使用分号而不是 ASI (fixable)
* [semi-spacing](semi-spacing): enforce consistent spacing before and after semicolons (fixable)
* [semi-spacing](semi-spacing): 强制分号之前和之后使用一致的空格 (fixable)
* [sort-vars](sort-vars): require variables within the same declaration block to be sorted
* [sort-vars](sort-vars): 要求同一个声明块中的变量按顺序排列
* [space-before-blocks](space-before-blocks): enforce consistent spacing before blocks (fixable)
* [space-before-blocks](space-before-blocks): 强制在块之前使用一致的空格 (fixable)
* [space-before-function-paren](space-before-function-paren): enforce consistent spacing before `function` definition opening parenthesis (fixable)
* [space-before-function-paren](space-before-function-paren): 强制在 `function`的左括号之前使用一致的空格 (fixable)
* [space-in-parens](space-in-parens): enforce consistent spacing inside parentheses (fixable)
* [space-in-parens](space-in-parens): 强制在圆括号内使用一致的空格 (fixable)
* [space-infix-ops](space-infix-ops): require spacing around operators (fixable)
* [space-infix-ops](space-infix-ops): 要求操作符周围有空格 (fixable)
* [space-unary-ops](space-unary-ops): enforce consistent spacing before or after unary operators (fixable)
* [space-unary-ops](space-unary-ops): 强制在一元操作符前后使用一致的空格 (fixable)
* [spaced-comment](spaced-comment): enforce consistent spacing after the `//` or `/*` in a comment (fixable)
* [spaced-comment](spaced-comment): 强制在注释中 `//` 或 `/*` 使用一致的空格 (fixable)
* [unicode-bom](unicode-bom): require or disallow the Unicode BOM (fixable)
* [unicode-bom](unicode-bom): 要求或禁止 Unicode BOM (fixable)
* [wrap-regex](wrap-regex): require parenthesis around regex literals
* [wrap-regex](wrap-regex): 要求正则表达式被括号括起来


## ECMAScript 6

These rules relate to ES6, also known as ES2015:

这些规则只与 ES6 有关, 即通常所说的 ES2015：

* [arrow-body-style](arrow-body-style): require braces around arrow function bodies
* [arrow-body-style](arrow-body-style): 要求箭头函数体使用大括号
* [arrow-parens](arrow-parens): require parentheses around arrow function arguments
* [arrow-parens](arrow-parens): 要求箭头函数的参数使用圆括号
* [arrow-spacing](arrow-spacing): enforce consistent spacing before and after the arrow in arrow functions (fixable)
* [arrow-spacing](arrow-spacing): 强制箭头函数的箭头前后使用一致的空格 (fixable)
* [constructor-super](constructor-super): require `super()` calls in constructors (recommended)
* [constructor-super](constructor-super): 要求在构造函数中有 `super()` 的调用 (recommended)
* [generator-star-spacing](generator-star-spacing): enforce consistent spacing around `*` operators in generator functions (fixable)
* [generator-star-spacing](generator-star-spacing): 强制 generator 函数中 `*` 号周围使用一致的空格 (fixable)
* [no-class-assign](no-class-assign): disallow reassigning class members (recommended)
* [no-class-assign](no-class-assign): 禁止修改类声明的变量 (recommended)
* [no-confusing-arrow](no-confusing-arrow): disallow arrow functions where they could be confused with comparisons
* [no-confusing-arrow](no-confusing-arrow): disallow arrow functions where they could be confused with comparisons
* [no-const-assign](no-const-assign): disallow reassigning `const` variables (recommended)
* [no-const-assign](no-const-assign): 禁止修改 `const` 声明的变量 (recommended)
* [no-dupe-class-members](no-dupe-class-members): disallow duplicate class members (recommended)
* [no-dupe-class-members](no-dupe-class-members): 禁止类成员中出现重复的名称 (recommended)
* [no-duplicate-imports](no-duplicate-imports): disallow duplicate module imports
* [no-duplicate-imports](no-duplicate-imports): disallow duplicate module imports
* [no-new-symbol](no-new-symbol): disallow `new` operators with the `Symbol` object (recommended)
* [no-new-symbol](no-new-symbol): disallow `new` operators with the `Symbol` object (recommended)
* [no-restricted-imports](no-restricted-imports): disallow specified modules when loaded by `import`
* [no-restricted-imports](no-restricted-imports): disallow specified modules when loaded by `import`
* [no-this-before-super](no-this-before-super): disallow `this`/`super` before calling `super()` in constructors (recommended)
* [no-this-before-super](no-this-before-super): 禁止在构造函数中，在调用 `super()` 之前使用 `this` 或 `super` (recommended)
* [no-useless-computed-key](no-useless-computed-key): disallow unnecessary computed property keys in object literals
* [no-useless-computed-key](no-useless-computed-key): disallow unnecessary computed property keys in object literals
* [no-useless-constructor](no-useless-constructor): disallow unnecessary constructors
* [no-useless-constructor](no-useless-constructor): 禁用不必要的构造函数
* [no-useless-rename](no-useless-rename): disallow renaming import, export, and destructured assignments to the same name (fixable)
* [no-useless-rename](no-useless-rename): disallow renaming import, export, and destructured assignments to the same name (fixable)
* [no-var](no-var): require `let` or `const` instead of `var`
* [no-var](no-var): 要求使用 `let` 或 `const` 而不是 `var`
* [object-shorthand](object-shorthand): require or disallow method and property shorthand syntax for object literals
* [object-shorthand](object-shorthand): 要求或禁止对象字面量中方法和属性使用简写语法
* [prefer-arrow-callback](prefer-arrow-callback): require arrow functions as callbacks
* [prefer-arrow-callback](prefer-arrow-callback): 要求使用箭头函数作为回调
* [prefer-const](prefer-const): require `const` declarations for variables that are never reassigned after declared
* [prefer-const](prefer-const): 要求使用 `const` 声明那些声明后不再被修改的变量
* [prefer-reflect](prefer-reflect): require `Reflect` methods where applicable
* [prefer-reflect](prefer-reflect): 要求在合适的地方使用 `Reflect` 方法
* [prefer-rest-params](prefer-rest-params): require rest parameters instead of `arguments`
* [prefer-rest-params](prefer-rest-params): require rest parameters instead of `arguments`
* [prefer-spread](prefer-spread): require spread operators instead of `.apply()`
* [prefer-spread](prefer-spread): 要求使用扩展运算符而非 `.apply()`
* [prefer-template](prefer-template): require template literals instead of string concatenation
* [prefer-template](prefer-template): 要求使用模板字面量而非字符串连接
* [require-yield](require-yield): require generator functions to contain `yield`
* [require-yield](require-yield): 要求generator 函数内有 `yield`
* [rest-spread-spacing](rest-spread-spacing): enforce spacing between rest and spread operators and their expressions (fixable)
* [rest-spread-spacing](rest-spread-spacing): enforce spacing between rest and spread operators and their expressions (fixable)
* [sort-imports](sort-imports): enforce sorted import declarations within modules
* [sort-imports](sort-imports): 强制模块内的 import 排序
* [template-curly-spacing](template-curly-spacing): require or disallow spacing around embedded expressions of template strings (fixable)
* [template-curly-spacing](template-curly-spacing): 要求或禁止模板字符串中的嵌入表达式周围空格的使用 (fixable)
* [yield-star-spacing](yield-star-spacing): require or disallow spacing around the `*` in `yield*` expressions (fixable)
* [yield-star-spacing](yield-star-spacing): 强制在 `yield*` 表达式中 `*` 周围使用空格 (fixable)

## Removed

These rules from older versions of ESLint have been replaced by newer rules:

|Removed rule|Replaced by
|---|---
|[generator-star](generator-star)|[generator-star-spacing](generator-star-spacing)
|[global-strict](global-strict)|[strict](strict)
|[no-arrow-condition](no-arrow-condition)|[no-confusing-arrow](no-confusing-arrow) and [no-constant-condition](no-constant-condition)
|[no-comma-dangle](no-comma-dangle)|[comma-dangle](comma-dangle)
|[no-empty-class](no-empty-class)|[no-empty-character-class](no-empty-character-class)
|[no-empty-label](no-empty-label)|[no-labels](no-labels)
|[no-extra-strict](no-extra-strict)|[strict](strict)
|[no-reserved-keys](no-reserved-keys)|[quote-props](quote-props)
|[no-space-before-semi](no-space-before-semi)|[semi-spacing](semi-spacing)
|[no-wrap-func](no-wrap-func)|[no-extra-parens](no-extra-parens)
|[space-after-function-name](space-after-function-name)|[space-before-function-paren](space-before-function-paren)
|[space-after-keywords](space-after-keywords)|[keyword-spacing](keyword-spacing)
|[space-before-function-parentheses](space-before-function-parentheses)|[space-before-function-paren](space-before-function-paren)
|[space-before-keywords](space-before-keywords)|[keyword-spacing](keyword-spacing)
|[space-in-brackets](space-in-brackets)|[object-curly-spacing](object-curly-spacing) and [array-bracket-spacing](array-bracket-spacing)
|[space-return-throw-case](space-return-throw-case)|[keyword-spacing](keyword-spacing)
|[space-unary-word-ops](space-unary-word-ops)|[space-unary-ops](space-unary-ops)
|[spaced-line-comment](spaced-line-comment)|[spaced-comment](spaced-comment)
