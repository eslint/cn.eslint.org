---
title: no-restricted-properties - Rules
layout: doc
edit_link: https://github.com/eslint/eslint/edit/master/docs/rules/no-restricted-properties.md
rule_type: suggestion
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# disallow certain object properties (no-restricted-properties)

# 禁止使用对象的某些属性 (no-restricted-properties)

Certain properties on objects may be disallowed in a codebase. This is useful for deprecating an API or restricting usage of a module's methods. For example, you may want to disallow using `describe.only` when using Mocha or telling people to use `Object.assign` instead of `_.extend`.

在代码库中，对象的某些属性可能被禁止使用。在对弃用一个 API 或严格显示一个模块的方法很有用。比如，当你使用 Mocha ，你可能不允许使用 `describe.only`，或告诉人们使用 `Object.assign` 而不是 `_.extend`。

## Rule Details

This rule looks for accessing a given property key on a given object name, either when reading the property's value or invoking it as a function. You may specify an optional message to indicate an alternative API or a reason for the restriction.

该规则在给定的对象名上寻找给定的属性键，无论是读取属性值或是作为函数调用它。你可以指定一个可选的 `message` 字段，来表明一个替代的 API 或进行限制的原因。

### Options

This rule takes a list of objects, where the object name and property names are specified:

该规则接受一个对象列表，用来指定对象名和属性名：

```json
{
    "rules": {
        "no-restricted-properties": [2, {
            "object": "disallowedObjectName",
            "property": "disallowedPropertyName"
        }]
    }
}
```

Multiple object/property values can be disallowed, and you can specify an optional message:

可以禁止多个 `object/property`，而且你可以指定一个可选的 `message` 字段：

```json
{
    "rules": {
        "no-restricted-properties": [2, {
            "object": "disallowedObjectName",
            "property": "disallowedPropertyName"
        }, {
            "object": "disallowedObjectName",
            "property": "anotherDisallowedPropertyName",
            "message": "Please use allowedObjectName.allowedPropertyName."
        }]
    }
}
```

If the object name is omitted, the property is disallowed for all objects:

如果省略了对象名，将禁止使用所有对象的这个属性：

```json
{
    "rules": {
        "no-restricted-properties": [2, {
            "property": "__defineGetter__",
            "message": "Please use Object.defineProperty instead."
        }]
    }
}
```

If the property name is omitted, accessing any property of the given object is disallowed:

如果省略的属性名，不允许访问给定对象的任何属性：

```json
{
    "rules": {
        "no-restricted-properties": [2, {
            "object": "require",
            "message": "Please call require() directly."
        }]
    }
}
```

Examples of **incorrect** code for this rule:

**错误** 代码示例：

```js
/* eslint no-restricted-properties: [2, {
    "object": "disallowedObjectName",
    "property": "disallowedPropertyName"
}] */

var example = disallowedObjectName.disallowedPropertyName; /*error Disallowed object property: disallowedObjectName.disallowedPropertyName.*/

disallowedObjectName.disallowedPropertyName(); /*error Disallowed object property: disallowedObjectName.disallowedPropertyName.*/
```

```js
/* eslint no-restricted-properties: [2, {
    "property": "__defineGetter__"
}] */

foo.__defineGetter__(bar, baz);
```

```js
/* eslint no-restricted-properties: [2, {
    "object": "require"
}] */

require.resolve('foo');
```

Examples of **correct** code for this rule:

**正确** 代码示例：

```js
/* eslint no-restricted-properties: [2, {
    "object": "disallowedObjectName",
    "property": "disallowedPropertyName"
}] */

var example = disallowedObjectName.somePropertyName;

allowedObjectName.disallowedPropertyName();
```

```js
/* eslint no-restricted-properties: [2, {
    "object": "require"
}] */

require('foo');
```

## When Not To Use It

If you don't have any object/property combinations to restrict, you should not use this rule.

如果你没有任何对象或属性组合来限制，你就不应该使用此规则。

## Related Rules

* [no-restricted-globals](no-restricted-globals)
* [no-restricted-syntax](no-restricted-syntax)

## Version

This rule was introduced in ESLint 3.5.0.

该规则在 ESLint 3.5.0 中被引入。

## Resources

* [Rule source](https://github.com/eslint/eslint/tree/master/lib/rules/no-restricted-properties.js)
* [Documentation source](https://github.com/eslint/eslint/tree/master/docs/rules/no-restricted-properties.md)
