---
title: lines-between-class-members - Rules
layout: doc
edit_link: https://github.com/eslint/eslint/edit/master/docs/rules/lines-between-class-members.md
rule_type: layout
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# require or disallow an empty line between class members (lines-between-class-members)

# 要求或禁止在类成员之间出现空行 (lines-between-class-members)

(fixable) The `--fix` option on the [command line](../user-guide/command-line-interface#fixing-problems) can automatically fix some of the problems reported by this rule.

(fixable) [命令行](../user-guide/command-line-interface#fixing-problems)中的 `--fix` 选项可以自动修复一些该规则报告的问题。

This rule improves readability by enforcing lines between class members. It will not check empty lines before the first member and after the last member, since that is already taken care of by padded-blocks.

该规则通过强制类成员间的空行来提高可读性。该规则不会检查第一个成员和最后一个成员，因为这已经由填充的块进行了处理。

## Rule Details

Examples of **incorrect** code for this rule:

**错误** 代码示例：

```js
/* eslint lines-between-class-members: ["error", "always"]*/
class MyClass {
  foo() {
    //...
  }
  bar() {
    //...
  }
}
```

Examples of **correct** code for this rule:

**正确** 代码示例：

```js
/* eslint lines-between-class-members: ["error", "always"]*/
class MyClass {
  foo() {
    //...
  }

  bar() {
    //...
  }
}
```

### Options

This rule has a string option and an object option.

该规则有一个字符串选项和一个对象选项：

String option:

字符串选项：

* `"always"`(default) require an empty line after class members
* `"always"`(默认) 要求在类成员之后有一行空行
* `"never"` disallows an empty line after class members
* `"never"` 禁止在类成员之后有一行空行

Object option:

对象选项：

* `"exceptAfterSingleLine": false`(default) **do not** skip checking empty lines after single-line class members
* `"exceptAfterSingleLine": false`(默认) **不要** 跳过对单行类成员之后的空行的检查
* `"exceptAfterSingleLine": true` skip checking empty lines after single-line class members
* `"exceptAfterSingleLine": true` 跳过对单行类成员之后的空行的检查

Examples of **incorrect** code for this rule with the string option:

字符串选项的 **错误** 代码示例：

```js
/* eslint lines-between-class-members: ["error", "always"]*/
class Foo{
  bar(){}
  baz(){}
}

/* eslint lines-between-class-members: ["error", "never"]*/
class Foo{
  bar(){}

  baz(){}
}
```

Examples of **correct** code for this rule with the string option:

字符串选项的 **正确** 代码示例：

```js
/* eslint lines-between-class-members: ["error", "always"]*/
class Foo{
  bar(){}

  baz(){}
}

/* eslint lines-between-class-members: ["error", "never"]*/
class Foo{
  bar(){}
  baz(){}
}
```

Examples of **correct** code for this rule with the object option:

对象选项的 **正确** 代码示例：

```js
/* eslint lines-between-class-members: ["error", "always", { exceptAfterSingleLine: true }]*/
class Foo{
  bar(){} // single line class member
  baz(){
    // multi line class member
  }

  qux(){}
}
```

## When Not To Use It

If you don't want to enforce empty lines between class members, you can disable this rule.

如果你不想强制类成员间的空行，你可以禁用此规则。

## Related Rules

* [padded-blocks](padded-blocks)
* [padding-line-between-statements](padding-line-between-statements)

## Compatibility

* [requirePaddingNewLinesAfterBlocks](https://jscs-dev.github.io/rule/requirePaddingNewLinesAfterBlocks)
* [disallowPaddingNewLinesAfterBlocks](https://jscs-dev.github.io/rule/disallowPaddingNewLinesAfterBlocks)

## Version

This rule was introduced in ESLint 4.9.0.

该规则在 ESLint 4.9.0 中被引入。

## Resources

* [Rule source](https://github.com/eslint/eslint/tree/master/lib/rules/lines-between-class-members.js)
* [Documentation source](https://github.com/eslint/eslint/tree/master/docs/rules/lines-between-class-members.md)
