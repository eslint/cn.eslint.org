---
title: quote-props - Rules
layout: doc
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# require quotes around object literal property names (quote-props)

# 要求对象字面量属性名称使用引号 (quote-props)

(fixable) The `--fix` option on the [command line](../user-guide/command-line-interface#fix) can automatically fix some of the problems reported by this rule.

(fixable) [命令行](../user-guide/command-line-interface#fix)中的 `--fix` 选项可以自动修复一些该规则报告的问题。

Object literal property names can be defined in two ways: using literals or using strings. For example, these two objects are equivalent:

对象字面量的属性名称可以用两种方式进行定义：使用文本或字符串。例如，这两个对象是等效的：

```js
var object1 = {
    property: true
};

var object2 = {
    "property": true
};
```

In many cases, it doesn't matter if you choose to use an identifier instead of a string or vice-versa. Even so, you might decide to enforce a consistent style in your code.

在很多情况下，你选择使用标识符或字符串，这都不影响。即便如此，你可以决定在代码中执行一致的风格。

There are, however, some occasions when you must use quotes:

然而，有一些场合，你必须使用引号：

1. If you are using an ECMAScript 3 JavaScript engine (such as IE8) and you want to use a keyword (such as `if`) as a property name. This restriction was removed in ECMAScript 5.
1. 如果你想在 ECMAScript 3 JavaScript 引擎（例如 IE8 ）中使用关键字（例如 `if`）作为属性名。这个限制在 ECMAScript 5 被移除。
2. You want to use a non-identifier character in your property name, such as having a property with a space like `"one two"`.
2. 你想在你的属性名中使用非标识符的字符，比如一个属性中间有一个空格，像 `"one two"` 这样。

Another example where quotes do matter is when using numeric literals as property keys:

另外一个示例说明引号的重要性，即在使用数字文本作为属性的键时。

```js
var object = {
    1e2: 1,
    100: 2
};
```

This may look alright at first sight, but this code in fact throws a syntax error in ECMAScript 5 strict mode. This happens because `1e2` and `100` are coerced into strings before getting used as the property name. Both `String(1e2)` and `String(100)` happen to be equal to `"100"`, which causes the "Duplicate data property in object literal not allowed in strict mode" error. Issues like that can be tricky to debug, so some prefer to require quotes around all property names.

这可能乍一看起来是没有问题的，但在 ECMAScript 5 严格模式下，这段代码实际上会抛出一个语法错误。因为 `1e2` 和 `100`在作为属性名使用之前被强制转换为字符串。`String(1e2)` 和 `String(100)` 正好是等于 `"100"`，造成了“严格模式下对象字面量中不允许重复的数据属性”的错误。这样的问题调试起来非常棘手，所以一些人喜欢要求所有的属性名都要有引号。

## Rule Details

This rule requires quotes around object literal property names.

该规则要求对象字面量属性名称使用引号。

## Options

This rule has two options, a string option and an object option.

该规则有两个选项，一个是字符串，一个是对象。

String option:

字符串选项：

* `"always"` (default) requires quotes around all object literal property names
* `"always"` (默认) 要求对象字面量属性名称都使用引号
* `"as-needed"` disallows quotes around object literal property names that are not strictly required
* `"as-needed"` 当没有严格要求时，禁止对象字面量属性名称使用引号
* `"consistent"` enforces a consistent quote style requires quotes around object literal property names
* `"consistent"` 要求对象字面量属性名称使用一致的引号
* `"consistent-as-needed"` requires quotes around all object literal property names if any name strictly requires quotes, otherwise disallows quotes around object property names
* `"consistent-as-needed"` 如果有属性名称要求使用引号，则所有的属性名称都要使用引号；否则，禁止所有的属性名称使用引号

Object option:

对象选项：

* `"keywords": true` requires quotes around language keywords used as object property names (only applies when using `as-needed` or `consistent-as-needed`)
* `"keywords": true` 如果关键字作为对象属性名称，要求使用引号 (当 `as-needed` 或 `consistent-as-needed` 时生效)
* `"unnecessary": true` (default) disallows quotes around object literal property names that are not strictly required (only applies when using `as-needed`)
* `"unnecessary": true` (默认) 如果没有严格要求，禁止对象属性名称使用引号 (当`as-needed` 时生效)
* `"unnecessary": false` allows quotes around object literal property names that are not strictly required (only applies when using `as-needed`)
* `"unnecessary": false` 如果没有严格要求，允许对象属性名称使用引号 (当 `as-needed` 时生效)
* `"numbers": true` requires quotes around numbers used as object property names (only applies when using `as-needed`)
* `"numbers": true` 当数字作为对象属性名称时，要求使用引号 (只当 `as-needed` 时生效)

### always

Examples of **incorrect** code for this rule with the default `"always"` option:

默认选项 `"always"` 的 **错误** 代码示例：

```js
/*eslint quote-props: ["error", "always"]*/

var object = {
    foo: "bar",
    baz: 42,
    "qux-lorem": true
};
```

Examples of **correct** code for this rule with the default `"always"` option:

默认选项 `"always"` 的 **正确** 代码示例：

```js
/*eslint quote-props: ["error", "always"]*/
/*eslint-env es6*/

var object1 = {
    "foo": "bar",
    "baz": 42,
    "qux-lorem": true
};

var object2 = {
    'foo': 'bar',
    'baz': 42,
    'qux-lorem': true
};

var object3 = {
    foo() {
        return;
    }
};
```

### as-needed

Examples of **incorrect** code for this rule with the `"as-needed"` option:

选项 `"as-needed"` 的 **错误** 代码示例：

```js
/*eslint quote-props: ["error", "as-needed"]*/

var object = {
    "a": 0,
    "0": 0,
    "true": 0,
    "null": 0
};
```

Examples of **correct** code for this rule with the `"as-needed"` option:

选项 `"as-needed"` 的 **正确** 代码示例：

```js
/*eslint quote-props: ["error", "as-needed"]*/
/*eslint-env es6*/

var object1 = {
    "a-b": 0,
    "0x0": 0,
    "1e2": 0
};

var object2 = {
    foo: 'bar',
    baz: 42,
    true: 0,
    0: 0,
    'qux-lorem': true
};

var object3 = {
    foo() {
        return;
    }
};
```

### consistent

Examples of **incorrect** code for this rule with the `"consistent"` option:

选项 `"consistent"` 的 **错误** 代码示例：

```js
/*eslint quote-props: ["error", "consistent"]*/

var object1 = {
    foo: "bar",
    "baz": 42,
    "qux-lorem": true
};

var object2 = {
    'foo': 'bar',
    baz: 42
};
```

Examples of **correct** code for this rule with the `"consistent"` option:

选项 `"consistent"` 的 **正确** 代码示例：

```js
/*eslint quote-props: ["error", "consistent"]*/

var object1 = {
    "foo": "bar",
    "baz": 42,
    "qux-lorem": true
};

var object2 = {
    'foo': 'bar',
    'baz': 42
};

var object3 = {
    foo: 'bar',
    baz: 42
};
```

### consistent-as-needed

Examples of **incorrect** code for this rule with the `"consistent-as-needed"` option:

选项 `"consistent-as-needed"` 的 **错误** 代码示例：

```js
/*eslint quote-props: ["error", "consistent-as-needed"]*/

var object1 = {
    foo: "bar",
    "baz": 42,
    "qux-lorem": true
};

var object2 = {
    'foo': 'bar',
    'baz': 42
};
```

Examples of **correct** code for this rule with the `"consistent-as-needed"` option:

选项 `"consistent-as-needed"` 的 **正确** 代码示例：

```js
/*eslint quote-props: ["error", "consistent-as-needed"]*/

var object1 = {
    "foo": "bar",
    "baz": 42,
    "qux-lorem": true
};

var object2 = {
    foo: 'bar',
    baz: 42
};
```

### keywords

Examples of additional **incorrect** code for this rule with the `"as-needed", { "keywords": true }` options:

选项 `"as-needed", { "keywords": true }` 的 **错误** 代码示例：

```js
/*eslint quote-props: ["error", "as-needed", { "keywords": true }]*/

var x = {
    while: 1,
    volatile: "foo"
};
```

Examples of additional **incorrect** code for this rule with the `"consistent-as-needed", { "keywords": true }` options:

选项 `"consistent-as-needed", { "keywords": true }` 的 **错误** 代码示例：

```js
/*eslint quote-props: ["error", "consistent-as-needed", { "keywords": true }]*/

var x = {
    "prop": 1,
    "bar": "foo"
};
```

### unnecessary

Examples of additional **correct** code for this rule with the `"as-needed", { "unnecessary": false }` options:

选项 `"as-needed", { "unnecessary": false }` 的 **正确** 代码示例：

```js
/*eslint quote-props: ["error", "as-needed", { "keywords": true, "unnecessary": false }]*/

var x = {
    "while": 1,
    "foo": "bar"  // Would normally have caused a warning
};
```

### numbers

Examples of additional **incorrect** code for this rule with the `"as-needed", { "numbers": true }` options:

选项 `"as-needed", { "numbers": true }` 的 **错误** 代码示例：

```js
/*eslint quote-props: ["error", "as-needed", { "numbers": true }]*/

var x = {
    100: 1
}
```

## When Not To Use It

If you don't care if property names are consistently wrapped in quotes or not, and you don't target legacy ES3 environments, turn this rule off.

如果你并不关心属性名是否始终被引号包裹，也不会弥留在 ES3 环境中，关闭此规则即可。

## Further Reading

* [Reserved words as property names](https://kangax.github.io/compat-table/es5/#Reserved_words_as_property_names)
* [Unquoted property names / object keys in JavaScript](https://mathiasbynens.be/notes/javascript-properties)

## Version

This rule was introduced in ESLint 0.0.6.

该规则在 ESLint 0.0.6 中被引入。

## Resources

* [Rule source](https://github.com/eslint/eslint/tree/master/lib/rules/quote-props.js)
* [Documentation source](https://github.com/eslint/eslint/tree/master/docs/rules/quote-props.md)
