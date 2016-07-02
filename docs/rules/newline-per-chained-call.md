---
title: Rule newline-per-chained-call
layout: doc
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# require a newline after each call in a method chain (newline-per-chained-call)

# 要求方法链中每个调用都有一个换行符 (newline-per-chained-call)

Chained method calls on a single line without line breaks are harder to read, so some developers place a newline character after each method call in the chain to make it more readable and easy to maintain.

方法链在同一行上调用，不带换行符会使代码很难阅读，所以，一些开发者将换行符放在每个方法调用之后，使它更容易阅读和维护。

Let's look at the following perfectly valid (but single line) code.

让我们看看下面这段完全有效（但在同一行）的代码。

```js
d3.select("body").selectAll("p").data([4, 8, 15, 16, 23, 42 ]).enter().append("p").text(function(d) { return "I'm number " + d + "!"; });
```

However, with appropriate new lines, it becomes easy to read and understand. Look at the same code written below with line breaks after each call.

然而，如果进行适当的换行，就很容易阅读和理解。看一下同样的代码，在每个调用后带有换行符。

```js
d3
    .select("body")
    .selectAll("p")
    .data([
        4,
        8,
        15,
        16,
        23,
        42
    ])
    .enter()
    .append("p")
    .text(function (d) {
        return "I'm number " + d + "!";
    });
```

Another argument in favor of this style is that it improves the clarity of diffs when something in the method chain is changed:

另一种赞成这种风格的观点是，当方法链发生改变，它提高了差异的清晰度。

Less clear:

不太清晰：

```diff
-d3.select("body").selectAll("p").style("color", "white");
+d3.select("body").selectAll("p").style("color", "blue");
```

More clear:

更清楚：

```diff
d3
    .select("body")
    .selectAll("p")
-    .style("color", "white");
+    .style("color", "blue");
```

## Rule Details

This rule requires a newline after each call in a method chain or deep member access. Computed property accesses such as `instance[something]` are excluded.

该规则要求在方法链中的每个调用之后或或深度成员访问之后有一个换行符。计算属性访问比如 `instance[something]` 不适用于此规则。

## Options

This rule has an object option:

该规则有一个对象选项：

* `"ignoreChainWithDepth"` (default: `2`) allows chains up to a specified depth.
* `"ignoreChainWithDepth"` (默认为 `2`) 允许在同一行成链的深度。

### ignoreChainWithDepth

Examples of **incorrect** code for this rule with the default `{ "ignoreChainWithDepth": 2 }` option:

默认选项 `{ "ignoreChainWithDepth": 2 }` 的 **错误** 代码示例：

```js
/*eslint newline-per-chained-call: ["error", { "ignoreChainWithDepth": 2 }]*/

_.chain({}).map(foo).filter(bar).value();

// Or
_.chain({}).map(foo).filter(bar);

// Or
_
  .chain({}).map(foo)
  .filter(bar);

// Or
obj.method().method2().method3();
```

Examples of **correct** code for this rule with the default `{ "ignoreChainWithDepth": 2 }` option:

默认选项 `{ "ignoreChainWithDepth": 2 }` 的 **正确** 代码示例：

```js
/*eslint newline-per-chained-call: ["error", { "ignoreChainWithDepth": 2 }]*/

_
  .chain({})
  .map(foo)
  .filter(bar)
  .value();

// Or
_
  .chain({})
  .map(foo)
  .filter(bar);

// Or
_.chain({})
  .map(foo)
  .filter(bar);

// Or
obj
  .prop
  .method().prop;

// Or
obj
  .prop.method()
  .method2()
  .method3().prop;
```

## When Not To Use It

If you have conflicting rules or when you are fine with chained calls on one line, you can safely turn this rule off.

如果你有与之冲突的规则或允许在同一行上成链调用，你可以关闭此规则。

## Version

This rule was introduced in ESLint 2.0.0-rc.0.

该规则在 ESLint 2.0.0-rc.0 中被引入。

## Resources

* [Rule source](https://github.com/eslint/eslint/tree/master/lib/rules/newline-per-chained-call.js)
* [Documentation source](https://github.com/eslint/eslint/tree/master/docs/rules/newline-per-chained-call.md)
