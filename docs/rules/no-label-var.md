---
title: no-label-var - Rules
layout: doc
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# Disallow Labels That Are Variables Names (no-label-var)

# 禁用与变量同名的标签 (no-label-var)

## Rule Details

This rule aims to create clearer code by disallowing the bad practice of creating a label that shares a name with a variable that is in scope.

该规则旨在通过禁止使用同一作用域下的同名的变量做为标签，来创建更清晰的代码。

Examples of **incorrect** code for this rule:

**错误** 代码示例：

```js
/*eslint no-label-var: "error"*/

var x = foo;
function bar() {
x:
  for (;;) {
    break x;
  }
}
```

Examples of **correct** code for this rule:

**正确** 代码示例：

```js
/*eslint no-label-var: "error"*/

// The variable that has the same name as the label is not in scope.

function foo() {
  var q = t;
}

function bar() {
q:
  for(;;) {
    break q;
  }
}
```

## When Not To Use It

If you don't want to be notified about usage of labels, then it's safe to disable this rule.

如果你不想收到标签的使用情况的通知，可以关闭此规则。

## Further Reading

* ['{a}' is a statement label](http://jslinterrors.com/a-is-a-statement-label/)

## Related Rules

* [no-extra-label](./no-extra-label)
* [no-labels](./no-labels)
* [no-unused-labels](./no-unused-labels)

## Version

This rule was introduced in ESLint 0.0.9.

该规则在 ESLint 0.0.9 中被引入。

## Resources

* [Rule source](https://github.com/eslint/eslint/tree/master/lib/rules/no-label-var.js)
* [Documentation source](https://github.com/eslint/eslint/tree/master/docs/rules/no-label-var.md)
