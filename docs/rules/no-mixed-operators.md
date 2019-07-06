---
title: no-mixed-operators - Rules
layout: doc
edit_link: https://github.com/eslint/eslint/edit/master/docs/rules/no-mixed-operators.md
rule_type: suggestion
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# Disallow mixes of different operators (no-mixed-operators)

# 禁止混合使用不同的操作符 (no-mixed-operators)

Enclosing complex expressions by parentheses clarifies the developer's intention, which makes the code more readable.
This rule warns when different operators are used consecutively without parentheses in an expression.

封闭的复杂表达式使用括号括起来明确了开发者的意图，使代码更具可读性。当表达式中连续的不同的操作符没有使用括号括起来，该规则将发出警告。

```js
var foo = a && b || c || d;    /*BAD: Unexpected mix of '&&' and '||'.*/
var foo = (a && b) || c || d;  /*GOOD*/
var foo = a && (b || c || d);  /*GOOD*/
```

**Note:**

**注意：**

It is expected for this rule to emit one error for each mixed operator in a pair. As a result, for each two consecutive mixed operators used, a distinct error will be displayed, pointing to where the specific operator that breaks the rule is used:

该规则期望对一对混合操作符发出一个错误。因此，对于使用的每两个连续混合操作符，将显示一个明显的错误，指向特定的破坏该规则的操作符:

```js
var foo = a && b || c || d;
```

will generate

将生成：

```sh
1:13  Unexpected mix of '&&' and '||'. (no-mixed-operators)
1:18  Unexpected mix of '&&' and '||'. (no-mixed-operators)
```


## Rule Details

This rule checks `BinaryExpression` and `LogicalExpression`.

该规则检查 `BinaryExpression` 和 `LogicalExpression`。

This rule may conflict with [no-extra-parens](no-extra-parens) rule.
If you use both this and [no-extra-parens](no-extra-parens) rule together, you need to use the `nestedBinaryExpressions` option of [no-extra-parens](no-extra-parens) rule.

该规则可能与 [no-extra-parens](no-extra-parens) 规则。如果你同时使用该规则和[no-extra-parens](no-extra-parens) 规则，你需要使用 [no-extra-parens](no-extra-parens) 规则的 `nestedBinaryExpressions` 的选项。
 
Examples of **incorrect** code for this rule:

**错误** 代码示例：

```js
/*eslint no-mixed-operators: "error"*/

var foo = a && b < 0 || c > 0 || d + 1 === 0;
var foo = a + b * c;
```

Examples of **correct** code for this rule:

**正确** 代码示例：

```js
/*eslint no-mixed-operators: "error"*/

var foo = a || b || c;
var foo = a && b && c;
var foo = (a && b < 0) || c > 0 || d + 1 === 0;
var foo = a && (b < 0 || c > 0 || d + 1 === 0);
var foo = a + (b * c);
var foo = (a + b) * c;
```

## Options

```json
{
    "no-mixed-operators": [
        "error",
        {
            "groups": [
                ["+", "-", "*", "/", "%", "**"],
                ["&", "|", "^", "~", "<<", ">>", ">>>"],
                ["==", "!=", "===", "!==", ">", ">=", "<", "<="],
                ["&&", "||"],
                ["in", "instanceof"]
            ],
            "allowSamePrecedence": true
        }
    ]
}
```

This rule has 2 options.

该规则有两个选项。

* `groups` (`string[][]`) - specifies operator groups to be checked. The `groups` option is a list of groups, and a group is a list of binary operators. Default operator groups are defined as arithmetic, bitwise, comparison, logical, and relational operators.
* `groups` (`string[][]`) - 指定要检查的操作符分组。`groups` 选项是分组的列表，分组是二进制运算符的列表。默认操作符分组定义为算术、位、比较、逻辑和关系运算符。
* `allowSamePrecedence` (`boolean`) - specifies whether to allow mixed operators if they are of equal precedence. Default is `true`.
* `allowSamePrecedence` (`boolean`) - 指定是否允许混合运算符具有相同的优先级。默认为 `true`。

### groups

The following operators can be used in `groups` option:

下面的操作符可以在 `groups` 选项中使用：

* Arithmetic Operators: `"+"`, `"-"`, `"*"`, `"/"`, `"%"`, `"**"`
* 算数操作符：`"+"`、`"-"`、`"*"`、`"/"`、`"%"`、`"**"`
* Bitwise Operators: `"&"`, `"|"`, `"^"`, `"~"`, `"<<"`, `">>"`, `">>>"`
* 位操作符：`"&"`、`"|"`、`"^"`、`"~"`、`"<<"`、`">>"`、`">>>"`
* Comparison Operators: `"=="`, `"!="`, `"==="`, `"!=="`, `">"`, `">="`, `"<"`, `"<="`
* 比较操作符：`"=="`、`"!="`、`"==="`、`"!=="`、`">"`、`">="`、`"<"`、`"<="`
* Logical Operators: `"&&"`, `"||"`
* 逻辑操作符：`"&&"`、`"||"`
* Relational Operators: `"in"`, `"instanceof"`
* 关系操作符：`"in"`、`"instanceof"`

Now, consider the following group configuration: `{"groups": [["&", "|", "^", "~", "<<", ">>", ">>>"], ["&&", "||"]]}`.
There are 2 groups specified in this configuration: bitwise operators and logical operators.
This rule checks if the operators belong to the same group only.
In this case, this rule checks if bitwise operators and logical operators are mixed, but ignores all other operators.

现在，考虑以下分组配置：`{"groups": [["&", "|", "^", "~", "<<", ">>", ">>>"], ["&&", "||"]]}`。
在这个配置中指定了两个组: 位操作符和逻辑运算符。
该规则检查操作符是否仅属于同一组。
在这种情况下，该规则检查是否混合了位操作符和逻辑运算符，但忽略了所有其他操作符。

Examples of **incorrect** code for this rule with `{"groups": [["&", "|", "^", "~", "<<", ">>", ">>>"], ["&&", "||"]]}` option:

选项 `{"groups": [["&", "|", "^", "~", "<<", ">>", ">>>"], ["&&", "||"]]}` 的 **错误** 代码示例：

```js
/*eslint no-mixed-operators: ["error", {"groups": [["&", "|", "^", "~", "<<", ">>", ">>>"], ["&&", "||"]]}]*/

var foo = a && b < 0 || c > 0 || d + 1 === 0;
var foo = a & b | c;
```

Examples of **correct** code for this rule with `{"groups": [["&", "|", "^", "~", "<<", ">>", ">>>"], ["&&", "||"]]}` option:

选项 `{"groups": [["&", "|", "^", "~", "<<", ">>", ">>>"], ["&&", "||"]]}` 的 **正确** 代码示例：

```js
/*eslint no-mixed-operators: ["error", {"groups": [["&", "|", "^", "~", "<<", ">>", ">>>"], ["&&", "||"]]}]*/

var foo = a || b > 0 || c + 1 === 0;
var foo = a && b > 0 && c + 1 === 0;
var foo = (a && b < 0) || c > 0 || d + 1 === 0;
var foo = a && (b < 0 ||  c > 0 || d + 1 === 0);
var foo = (a & b) | c;
var foo = a & (b | c);
var foo = a + b * c;
var foo = a + (b * c);
var foo = (a + b) * c;
```

### allowSamePrecedence

Examples of **correct** code for this rule with `{"allowSamePrecedence": true}` option:

选项 `{"allowSamePrecedence": true}` 的 **正确** 代码示例：

```js
/*eslint no-mixed-operators: ["error", {"allowSamePrecedence": true}]*/

// + and - have the same precedence.
var foo = a + b - c;
```

Examples of **incorrect** code for this rule with `{"allowSamePrecedence": false}` option:

选项 `{"allowSamePrecedence": false}` 的 **错误** 代码示例：

```js
/*eslint no-mixed-operators: ["error", {"allowSamePrecedence": false}]*/

// + and - have the same precedence.
var foo = a + b - c;
```

Examples of **correct** code for this rule with `{"allowSamePrecedence": false}` option:

选项 `{"allowSamePrecedence": false}` 的 **正确** 代码示例：

```js
/*eslint no-mixed-operators: ["error", {"allowSamePrecedence": false}]*/

// + and - have the same precedence.
var foo = (a + b) - c;
```

## When Not To Use It

If you don't want to be notified about mixed operators, then it's safe to disable this rule.

如果你不想收到关于混合操作的通知，你可以关闭此规则。

## Related Rules

* [no-extra-parens](no-extra-parens)

## Version

This rule was introduced in ESLint 2.12.0.

该规则在 ESLint 2.12.0 中被引入。

## Resources

* [Rule source](https://github.com/eslint/eslint/tree/master/lib/rules/no-mixed-operators.js)
* [Documentation source](https://github.com/eslint/eslint/tree/master/docs/rules/no-mixed-operators.md)
