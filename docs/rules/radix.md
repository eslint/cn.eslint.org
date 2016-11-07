---
title: radix - Rules
layout: doc
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# Require Radix Parameter (radix)

# 要求必须有基数 (radix)

When using the `parseInt()` function it is common to omit the second argument, the radix, and let the function try to determine from the first argument what type of number it is. By default, `parseInt()` will autodetect decimal and hexadecimal (via `0x` prefix). Prior to ECMAScript 5, `parseInt()` also autodetected octal literals, which caused problems because many developers assumed a leading `0` would be ignored.

当使用`parseInt()`函数时，通常省略第二个参数，基数，并根据第一个参数确定它是什么类型的数字。
默认情况下，`parseInt()`将自动检测十进制和十六进制(通过`0x`前缀)。在ECMAScript 5 之前，`parseInt()`也自动检测八进制文本，这会出现问题，因为许多开发人员认为前导`0`会被忽略。

This confusion led to the suggestion that you always use the radix parameter to `parseInt()` to eliminate unintended consequences. So instead of doing this:

由于这种混乱，所以建议在`parseInt()`中始终使用基数以消除意想不到的后果。因此，不要这么做:

```js
var num = parseInt("071");      // 57
```

Do this:

要这么做：

```js
var num = parseInt("071", 10);  // 71
```

ECMAScript 5 changed the behavior of `parseInt()` so that it no longer autodetects octal literals and instead treats them as decimal literals. However, the differences between hexadecimal and decimal interpretation of the first parameter causes many developers to continue using the radix parameter to ensure the string is interpreted in the intended way.

ECMAScript 5 改变了`parseInt()`的这种行为，它不再自动检测八进制文本，而是把它们当作十进制文本。然而，对第一个参数的十六进制和十进制的解释之间的差异导致很多开发者继续使用基数来确保字符串是按预期的方式解释执行。

On the other hand, if the code is targeting only ES5-compliant environments passing the radix `10` may be redundant. In such a case you might want to disallow using such a radix.

另一方面，如果代码只对兼容 ES5 环境，传递基数`10`可能是多余的。在这种情况下，你可能想禁止使用这样一个基数。

## Rule Details

This rule is aimed at preventing the unintended conversion of a string to a number of a different base than intended or at preventing the redundant `10` radix if targeting modern environments only.

该规则旨在防止出现不确定的字符串对数字的转换或防止在现代环境中出现多余的基数 `10`。

## Options

There are two options for this rule:

此规则有两个选项：

* `"always"` enforces providing a radix (default)
* `"always"`强制提供一个基数（默认的）
* `"as-needed"` disallows providing the `10` radix
* `"as-needed"`禁止提供基数`10`

### always

Examples of **incorrect** code for the default `"always"` option:

`"always"`选项的 **错误** 代码示例：

```js
/*eslint radix: "error"*/

var num = parseInt("071");

var num = parseInt(someValue);

var num = parseInt("071", "abc");

var num = parseInt();
```

Examples of **correct** code for the default `"always"` option:

`"always"`选项的 **正确** 代码示例：

```js
/*eslint radix: "error"*/

var num = parseInt("071", 10);

var num = parseInt("071", 8);

var num = parseFloat(someValue);
```
 
### as-needed

Examples of **incorrect** code for the `"as-needed"` option:

`"as-needed"`选项的 **错误** 代码示例：

```js
/*eslint radix: ["error", "as-needed"]*/

var num = parseInt("071", 10);

var num = parseInt("071", "abc");

var num = parseInt();
```

Examples of **correct** code for the `"as-needed"` option:

`"as-needed"`选项的 **正确** 代码示例：

```js
/*eslint radix: ["error", "as-needed"]*/

var num = parseInt("071");

var num = parseInt("071", 8);

var num = parseFloat(someValue);
```

## When Not To Use It

If you don't want to enforce either presence or omission of the `10` radix value you can turn this rule off.

如果你不想强制约定是否有`10`这个基数，你可以关闭此规则。

## Further Reading

* [parseInt and radix](http://davidwalsh.name/parseint-radix)

## Version

This rule was introduced in ESLint 0.0.7.

该规则在 ESLint 0.0.7 中被引入。

## Resources

* [Rule source](https://github.com/eslint/eslint/tree/master/lib/rules/radix.js)
* [Documentation source](https://github.com/eslint/eslint/tree/master/docs/rules/radix.md)
