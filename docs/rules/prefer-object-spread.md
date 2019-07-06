---
title: prefer-object-spread - Rules
layout: doc
edit_link: https://github.com/eslint/eslint/edit/master/docs/rules/prefer-object-spread.md
rule_type: suggestion
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# Prefer use of an object spread over `Object.assign` (prefer-object-spread)

# 优先使用对象扩展而不是 `Object.assign` 

(fixable) The `--fix` option on the [command line](../user-guide/command-line-interface#fixing-problems) can automatically fix some of the problems reported by this rule.

(fixable) [命令行](../user-guide/command-line-interface#fixing-problems)中的 `--fix` 选项可以自动修复一些该规则报告的问题。

When Object.assign is called using an object literal as the first argument, this rule requires using the object spread syntax instead. This rule also warns on cases where an `Object.assign` call is made using a single argument that is an object literal, in this case, the `Object.assign` call is not needed.

当使用对象字面量作为 Object.assign 第一个参数时，此规则要求使用对象扩展语法。这条规则还对只有一个对象字面量作为唯一参数时调用 `Object.assign` 的情况发出警告，这种情况下，不需要调用 `Object.assign`。

Introduced in ES2018, object spread is a declarative alternative which may perform better than the more dynamic, imperative `Object.assign`.

对象扩展是在 ES2018 中引入的一种声明性替代方法，它可能比更具动态性的命令式 `Object.assign` 执行得更好。

## Rule Details

Examples of **incorrect** code for this rule:

**错误** 代码示例：

```js

Object.assign({}, foo)

Object.assign({}, {foo: 'bar'})

Object.assign({ foo: 'bar'}, baz)

Object.assign({ foo: 'bar' }, Object.assign({ bar: 'foo' }))

Object.assign({}, { foo, bar, baz })

Object.assign({}, { ...baz })

// Object.assign with a single argument that is an object literal
Object.assign({});

Object.assign({ foo: bar });
```

Examples of **correct** code for this rule:

**正确** 代码示例：

```js

Object.assign(...foo);

// Any Object.assign call without an object literal as the first argument
Object.assign(foo, { bar: baz });

Object.assign(foo, Object.assign(bar));

Object.assign(foo, { bar, baz })

Object.assign(foo, { ...baz });
```

## When Not To Use It

This rule should not be used unless ES2018 is supported in your codebase.

除非代码库支持 ES2018，否则不应使用此规则。

## Version

This rule was introduced in ESLint 5.0.0-alpha.3.

该规则在 ESLint 5.0.0-alpha.3 中被引入。

## Resources

* [Rule source](https://github.com/eslint/eslint/tree/master/lib/rules/prefer-object-spread.js)
* [Documentation source](https://github.com/eslint/eslint/tree/master/docs/rules/prefer-object-spread.md)
