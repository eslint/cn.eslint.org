---
title: Rule space-unary-word-ops
layout: doc
translator: yanggao40
proofreader: molee1905
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# Require spaces following unary word operators (space-unary-word-ops)

# 一元操作符后要求空格(space-unary-word-ops)

**Replacement notice**: This rule was removed and has been replaced by the [space-unary-ops](space-unary-ops) rule.

**替换声明：**该规则被移除且被[space-unary-ops](space-unary-ops)规则替换。

Require spaces following unary word operators.

要求一元操作符后有空格。

## Rule Details

The following patterns are considered problems:

以下模式被认为是有问题的：

```js
typeof!a
```

```js
void{a:0}
```

```js
new[a][0]
```

```js
delete(a.b)
```

The following patterns are not considered problems:

以下模式被认为是没有问题的：

```js
delete a.b
```

```js
new C
```

```js
void 0
```

## Version

This rule was introduced in ESLint 0.1.4 and removed in 0.10.0.

该规则在 ESLint 0.1.4 中引入，在 0.10.0 中移除。

## Resources

* [Documentation source](https://github.com/eslint/eslint/tree/master/docs/rules/space-unary-word-ops.md)
