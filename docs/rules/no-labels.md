---
title: Rule no-labels
layout: doc
translator: fengnana
proofreader: molee1905
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# Disallow Labeled Statements (no-labels)

# 禁用标签语句 (no-labels)

Labeled statements in JavaScript are used in conjunction with `break` and `continue` to control flow around multiple loops. For example:

JavaScript 中的标签语句连同`break`和`continue`一样用来控制循环流程。例如：

```js
outer:
    while (true) {

        while (true) {
            break outer;
        }
    }
```

The `break outer` statement ensures that this code will not result in an infinite loop because control is returned to the next statement after the `outer` label was applied. If this statement was changed to be just `break`, control would flow back to the outer `while` statement and an infinite loop would result.

`break outer`语句确保代码不会无限循环，因为应用`outer`标签之后，将会进入下一条语句。如果这个语句变为`break`，控制流程会回到外层`while`语句，并会导致无限循环。

While convenient in some cases, labels tend to be used only rarely and are frowned upon by some as a remedial form of flow control that is more error prone and harder to understand.

虽然在某些情况下很方便，标签往往很少使用，很多人不赞成将标签作为一种复杂流程控制的补救措施。

## Rule Details

This rule aims to eliminate the use of labeled statements in JavaScript. It will warn whenever a labeled statement is encountered and whenever `break` or `continue` are used with a label.

此规则旨在消除 JavaScript 中标签的使用。当遇到标签语句时，该规则将发出警告。

Examples of **incorrect** code for this rule:

**错误**代码示例：

```js
/*eslint no-labels: "error"*/

label:
    while(true) {
        // ...
    }

label:
    while(true) {
        break label;
    }

label:
    while(true) {
        continue label;
    }

label:
    switch (a) {
    case 0:
        break label;
    }

label:
    {
        break label;
    }

label:
    if (a) {
        break label;
    }
```

Examples of **correct** code for this rule:

**正确**代码示例：

```js
/*eslint no-labels: "error"*/

var f = {
    label: "foo"
};

while (true) {
    break;
}

while (true) {
    continue;
}
```

## Options

The options allow labels with loop or switch statements:

以下选项允许在循环和 switch 语句中使用标签。

* `"allowLoop"` (`boolean`, default is `false`) - If this option was set `true`, this rule ignores labels which are sticking to loop statements.
* `"allowLoop"` (`boolean`，默认是 `false`) - 如果这个选项被设置为 `true`，该规则忽略循环语句中的标签。
* `"allowSwitch"` (`boolean`, default is `false`) - If this option was set `true`, this rule ignores labels which are sticking to switch statements.
* `"allowSwitch"` (`boolean`，默认是`false`) - 如果这个选项被设置为 `true`，该规则忽略 switch 语句中的标签。

Actually labeled statements in JavaScript can be used with other than loop and switch statements.
However, this way is ultra rare, not well-known, so this would be confusing developers.

事实上，在 JavaScript 中，标签不仅仅被用于循环语句和 switch 语句中。然而，这非常罕见，会给开发者造成困惑。

### allowLoop

Examples of **correct** code for the `{ "allowLoop": true }` option:

`{ "allowLoop": true }`选项的 **正确**代码示例：

```js
/*eslint no-labels: ["error", { "allowLoop": true }]*/

label:
    while (true) {
        break label;
    }
```

### allowSwitch

Examples of **correct** code for the `{ "allowSwitch": true }` option:

`{ "allowSwitch": true }`选项的 **错误**代码示例：

```js
/*eslint no-labels: ["error", { "allowSwitch": true }]*/

label:
    switch (a) {
        case 0:
            break label;
    }
```

## When Not To Use It

If you need to use labeled statements everywhere, then you can safely disable this rule.

如果你需要在任何地方都使用标签语句，你可以禁用此规则。

## Related Rules

* [no-extra-label](./no-extra-label)
* [no-label-var](./no-label-var)
* [no-unused-labels](./no-unused-labels)

## Version

This rule was introduced in ESLint 0.4.0.

此规则在 ESLint 0.4.0 中被引入。

## Resources

* [Rule source](https://github.com/eslint/eslint/tree/master/lib/rules/no-labels.js)
* [Documentation source](https://github.com/eslint/eslint/tree/master/docs/rules/no-labels.md)
