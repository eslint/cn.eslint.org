---
title: Rule space-before-keywords
layout: doc
translator: molee1905
proofreader: freeyiyi1993

---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# Require or disallow spaces before keywords (space-before-keywords)

# 要求或禁止关键字之前的空格 (space-before-keywords)

**Replacement notice**: This rule was removed in ESLint v2.0 and replaced by [keyword-spacing](keyword-spacing) rule.

**替代通知**: 该规则在 ESLint v2.0 中被移除，被[keyword-spacing](keyword-spacing) 替代。

(fixable) The --fix option on the [command line](../user-guide/command-line-interface#fix) automatically fixed problems reported by this rule.

(fixable)[command line](../user-guide/command-line-interface#fix)中的`--fix`选项可以自动修复该规则报告的问题。

Keywords are syntax elements of JavaScript, such as `function` and `if`. These identifiers have special meaning to the language and so often appear in a different color in code editors. As an important part of the language, style guides often refer to the spacing that should be used around keywords. For example, you might have a style guide that says keywords should be always be preceded by spaces, which would mean `if-else` statements must look like this:

关键字是 Javascript 中的语法元素，比如`function` 和 `if`。这些标识符对该语言有特殊意义，因此经常在代码编辑器中以不同的颜色出现。作为 Javascript 语言的重要组成部分，风格指南经常提到关键字周围应该使用空格。例如，你可能有一个风格指南说关键字之后应该总是有空格，这意味着`if-else`语句必须看起来像下面这样：


```js
if (foo) {
    // ...
} else {
    // ...
}
```

Of course, you could also have a style guide that disallows spaces before keywords.

当然，你也可以有一个风格指南禁止关键字之前有空格。

## Rule Details

This rule will enforce consistency of spacing before the keywords `if`, `else`, `for`,
`while`, `do`, `switch`, `throw`, `try`, `catch`, `finally`, `with`, `break`, `continue`,
`return`, `function`, `yield`, `class` and variable declarations (`let`, `const`, `var`)
and label statements.

该规则将强制关键字、变量声明(`let`，`const`， `var`)和标签语句之前的空格的一致性，这些关键字包括：`if`，`else`， `for`， `while`， `do`， `switch`， `throw`， `try`， `catch`， `finally`， `with`， `break`， `continue`，`return`， `function`， `yield`， `class`。

This rule takes one argument: `"always"` or `"never"`. If `"always"` then the keywords
must be preceded by at least one space. If `"never"` then no spaces will be allowed before
the keywords `else`, `while` (do...while), `finally` and `catch`. The default value is `"always"`.

该规则有一个参数：`"always"` 或 `"never"`。如果为`"always"`，所有的关键字之前必须有至少一个空格。如果为`"never"`，关键字`else`，`while` (do...while)，`finally` 和 `catch`之前不能有空格。默认为`"always"`。

This rule will allow keywords to be preceded by an opening curly brace (`{`). If you wish to alter
this behaviour, consider using the [block-spacing](block-spacing) rule.

该规则将允许关键字之后有一个左花括号(`{`)。如果你想改变这种行为，考虑使用 [block-spacing](block-spacing)规则。

The following patterns are considered errors when configured `"never"`:

当配置为`"never"`，以下模式被认为是有错误的：

```js
/*eslint space-before-keywords: ["error", "never"]*/

if (foo) {
    // ...
} else {}

do {

}
while (foo)

try {} finally {}

try {} catch(e) {}
```

The following patterns are not considered errors when configured `"never"`:

当配置为`"never"`，以下模式被认为是没有错误的：

```js
/*eslint space-before-keywords: ["error", "never"]*/

if (foo) {
    // ...
}else {}

do {}while (foo)

try {}finally {}

try{}catch(e) {}
```

The following patterns are considered errors when configured `"always"`:

当配置为`"always"`，以下模式被认为是有错误的：

```js
/*eslint space-before-keywords: ["error", "always"]*/
/*eslint-env es6*/

if (foo) {
    // ...
}else {}

const foo = 'bar';let baz = 'qux';

var foo =function bar () {}

function bar() {
    if (foo) {return; }
}
```

The following patterns are not considered errors when configured `"always"`:

当配置为`"always"`，以下模式被认为是没有错误的：

```js
/*eslint space-before-keywords: ["error", "always"]*/
/*eslint-env es6*/

if (foo) {
    // ...
} else {}

(function() {})()

<Foo onClick={function bar() {}} />

for (let foo of ['bar', 'baz', 'qux']) {}
```

## When Not To Use It

If you do not wish to enforce consistency on keyword spacing.

如果你不想强制关键字前的空格的一致性，可以不使用此规则。

## Related Rules

* [space-after-keywords](space-after-keywords)
* [block-spacing](block-spacing)
* [space-return-throw-case](space-return-throw-case)
* [space-unary-ops](space-unary-ops)
* [space-infix-ops](space-infix-ops)

## Version

This rule was introduced in ESLint 1.4.0 and removed in 2.0.0-beta.3.

该规则在 ESLint 1.4.0 中被引入，在 2.0.0-beta.3 被移除。

## Resources

* [Documentation source](https://github.com/eslint/eslint/tree/master/docs/rules/space-before-keywords.md)
