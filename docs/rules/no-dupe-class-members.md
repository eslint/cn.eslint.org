---
title: Rule no-dupe-class-members
layout: doc
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# Disallow duplicate name in class members (no-dupe-class-members)

# 不允许类成员中有重复的名称 (no-dupe-class-members)

If there are declarations of the same name in class members, the last declaration overwrites other declarations silently.
It can cause unexpected behaviors.

如果类成员中有同名的声明，最后一个声明将会默默地覆盖其它声明。
它可能导致意外的行为。

```js
/*eslint-env es6*/

class Foo {
  bar() { console.log("hello"); }
  bar() { console.log("goodbye"); }
}

var foo = new Foo();
foo.bar(); // goodbye
```

## Rule Details

This rule is aimed to flag the use of duplicate names in class members.

该规则旨在标记类成员中重复名称的使用。

The following patterns are considered problems:

以下模式被认为是有问题的：

```js
/*eslint no-dupe-class-members: "error"*/
/*eslint-env es6*/

class Foo {
  bar() { }
  bar() { }
}

class Foo {
  bar() { }
  get bar() { }
}

class Foo {
  static bar() { }
  static bar() { }
}
```

The following patterns are not considered problems:

以下模式被认为是没有问题的：

```js
/*eslint no-dupe-class-members: "error"*/
/*eslint-env es6*/

class Foo {
  bar() { }
  qux() { }
}

class Foo {
  get bar() { }
  set bar(value) { }
}

class Foo {
  static bar() { }
  bar() { }
}
```

## When Not To Use It

This rule should not be used in ES3/5 environments.

该规则不应在 ES3/5 环境下使用。

In ES2015 (ES6) or later, if you don't want to be notified about duplicate names in class members, you can safely disable this rule.

在ES2015 (ES6)或之后的版本，如果你不想收到关于类成员中有重复名称的通知，你可以关闭此规则。

## Version

This rule was introduced in ESLint 1.2.0.

该规则在 ESLint 1.2.0 中被引入。

## Resources

* [Rule source](https://github.com/eslint/eslint/tree/master/lib/rules/no-dupe-class-members.js)
* [Documentation source](https://github.com/eslint/eslint/tree/master/docs/rules/no-dupe-class-members.md)
