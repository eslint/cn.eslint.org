---
title: Rule no-mixed-operators
layout: doc
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

* `groups` (`string[][]`) - specifies groups to compare operators.
  When this rule compares two operators, if both operators are included in a same group, this rule checks it. Otherwise, this rule ignores it.
  This value is a list of groups. The group is a list of binary operators.
  Default is the groups for each kind of operators.
* `groups` (`string[][]`) - 指定要比较的操作符分组。
  当该规则比较两个操作符时，，如果操作符在同一分组内，该规则会进行检查。否则这规则忽略它。它值是个列表组。这个组是二元操作符列表。默认为各种操作符的组。
* `allowSamePrecedence` (`boolean`) - specifies to allow mix of 2 operators if those have the same precedence. Default is `true`.
* `allowSamePrecedence` (`boolean`) - 指定允许使用混合的两个操作符，前提是它们有同样的优先级。 默认为 `true`.

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

Now, considers about `{"groups": [["&", "|", "^", "~", "<<", ">>", ">>>"], ["&&", "||"]]}` configure.

现在，考虑一下 `{"groups": [["&", "|", "^", "~", "<<", ">>", ">>>"], ["&&", "||"]]}` 配置。

This configure has 2 groups: bitwise operators and logical operators.
This rule checks only if both operators are included in a same group.
So, in this case, this rule comes to check between bitwise operators and between logical operators.

该配置有两个分组：位操作符和逻辑操作符。该规则只检查同一分组内的操作符。所以，在这种情况下，该规则检查位操作符和逻辑操作符。

This rule ignores other operators.

该规则忽略其它操作符。

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
