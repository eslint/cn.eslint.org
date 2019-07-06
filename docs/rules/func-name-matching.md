---
title: func-name-matching - Rules
layout: doc
edit_link: https://github.com/eslint/eslint/edit/master/docs/rules/func-name-matching.md
rule_type: suggestion
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# require function names to match the name of the variable or property to which they are assigned (func-name-matching)

# 要求函数名与赋值给它们的变量名或属性名相匹配 (func-name-matching)

## Rule Details

This rule requires function names to match the name of the variable or property to which they are assigned. The rule will ignore property assignments where the property name is a literal that is not a valid identifier in the ECMAScript version specified in your configuration (default ES5).

该规则要求函数名与赋值给它们的变量名或属性名相匹配。该规则将忽略属性名不是 ECMAScript 版本指定的有效标识符（默认 ES5）的属性赋值。

## Options

This rule takes an optional string of `"always"` or `"never"` (when omitted, it defaults to "always"), and an optional options object with one key, `includeCommonJSModuleExports`, and a boolean value. This option defaults to `false`, which means that `module.exports` and `module["exports"]` are ignored by this rule. If `includeCommonJSModuleExports` is set to `true`, `module.exports` and `module["exports"]` will be checked by this rule.

该规则有一个字符串选项，值为 `"always"` 或 `"never"`（当省略时，默认为 `"always"`）和一个对象选项，其只有一个 `includeCommonJSModuleExports` 属性，值为布尔类型，默认为 `false`，表示该规则会忽略 `module.exports` 和 `module["exports"]` 。如果 `includeCommonJSModuleExports` 设置为 `true`，该规则将会检查`module.exports` 和 `module["exports"]`。

Examples of **incorrect** code for this rule:

**错误** 代码示例：

```js
/*eslint func-name-matching: "error"*/

var foo = function bar() {};
foo = function bar() {};
obj.foo = function bar() {};
obj['foo'] = function bar() {};
var obj = {foo: function bar() {}};
({['foo']: function bar() {}});
```

```js
/*eslint func-name-matching: ["error", { "includeCommonJSModuleExports": true }]*/
/*eslint func-name-matching: ["error", "always", { "includeCommonJSModuleExports": true }]*/ // these are equivalent

module.exports = function foo(name) {};
module['exports'] = function foo(name) {};
```

```js
/*eslint func-name-matching: ["error", "never"] */

var foo = function foo() {};
foo = function foo() {};
obj.foo = function foo() {};
obj['foo'] = function foo() {};
var obj = {foo: function foo() {}};
({['foo']: function foo() {}});
```

Examples of **correct** code for this rule:

**正确** 代码示例：

```js
/*eslint func-name-matching: "error"*/
/*eslint func-name-matching: ["error", "always"]*/ // these are equivalent
/*eslint-env es6*/

var foo = function foo() {};
var foo = function() {};
var foo = () => {};
foo = function foo() {};

obj.foo = function foo() {};
obj['foo'] = function foo() {};
obj['foo//bar'] = function foo() {};
obj[foo] = function bar() {};

var obj = {foo: function foo() {}};
var obj = {[foo]: function bar() {}};
var obj = {'foo//bar': function foo() {}};
var obj = {foo: function() {}};

obj['x' + 2] = function bar(){};
var [ bar ] = [ function bar(){} ];
({[foo]: function bar() {}})

module.exports = function foo(name) {};
module['exports'] = function foo(name) {};
```

```js
/*eslint func-name-matching: ["error", "never"] */
/*eslint-env es6*/

var foo = function bar() {};
var foo = function() {};
var foo = () => {};
foo = function bar() {};

obj.foo = function bar() {};
obj['foo'] = function bar() {};
obj['foo//bar'] = function foo() {};
obj[foo] = function foo() {};

var obj = {foo: function bar() {}};
var obj = {[foo]: function foo() {}};
var obj = {'foo//bar': function foo() {}};
var obj = {foo: function() {}};

obj['x' + 2] = function bar(){};
var [ bar ] = [ function bar(){} ];
({[foo]: function bar() {}})

module.exports = function foo(name) {};
module['exports'] = function foo(name) {};
```

## Options

This rule takes an optional string of "always" or "never" (when omitted, it defaults to "always"), and an optional options object with two properties `considerPropertyDescriptor` and `includeCommonJSModuleExports`.

该规则接受一个可选字符串 `always` 或 `never` (省略时默认为 `always`)，以及一个可选选项对象，该对象具有两个属性`considerPropertyDescriptor` 和 `includeCommonJSModuleExports`。

### considerPropertyDescriptor

A boolean value that defaults to `false`. If `considerPropertyDescriptor` is set to true, the check will take into account the use of `Object.create`, `Object.defineProperty`, `Object.defineProperties`, and `Reflect.defineProperty`.

是个布尔值，默认为 `false`。如果 `considerPropertyDescriptor` 设置为 `true`，那么该规则将检测 `Object.create`、`Object.defineProperty`、`Object.defineProperties` 和 `Reflect.defineProperty` 的使用。

Examples of **correct** code for the `{ considerPropertyDescriptor: true }` option:

选项 `{ considerPropertyDescriptor: true }` 的 **正确** 代码示例：

```js
/*eslint func-name-matching: ["error", { "considerPropertyDescriptor": true }]*/
/*eslint func-name-matching: ["error", "always", { "considerPropertyDescriptor": true }]*/ // these are equivalent
var obj = {};
Object.create(obj, {foo:{value: function foo() {}}});
Object.defineProperty(obj, 'bar', {value: function bar() {}});
Object.defineProperties(obj, {baz:{value: function baz() {} }});
Reflect.defineProperty(obj, 'foo', {value: function foo() {}});
```

Examples of **incorrect** code for the `{ considerPropertyDescriptor: true }` option:

选项 `{ considerPropertyDescriptor: true }` 的 **错误** 代码示例：

```js
/*eslint func-name-matching: ["error", { "considerPropertyDescriptor": true }]*/
/*eslint func-name-matching: ["error", "always", { "considerPropertyDescriptor": true }]*/ // these are equivalent
var obj = {};
Object.create(obj, {foo:{value: function bar() {}}});
Object.defineProperty(obj, 'bar', {value: function baz() {}});
Object.defineProperties(obj, {baz:{value: function foo() {} }});
Reflect.defineProperty(obj, 'foo', {value: function value() {}});
```

### includeCommonJSModuleExports

A boolean value that defaults to `false`. If `includeCommonJSModuleExports` is set to true, `module.exports` and `module["exports"]` will be checked by this rule.

是个布尔值，默认为 `false`。如果 `includeCommonJSModuleExports` 设置为 `true`，那么该规则将检测 `module.exports` 、`module["exports"]`。


Examples of **incorrect** code for the `{ includeCommonJSModuleExports: true }` option:

选项 `{ includeCommonJSModuleExports: true }` 的 **错误** 代码示例：

```js
/*eslint func-name-matching: ["error", { "includeCommonJSModuleExports": true }]*/
/*eslint func-name-matching: ["error", "always", { "includeCommonJSModuleExports": true }]*/ // these are equivalent

module.exports = function foo(name) {};
module['exports'] = function foo(name) {};
```

## When Not To Use It

Do not use this rule if you want to allow named functions to have different names from the variable or property to which they are assigned.

如果你允许被命名的函数与赋值给它的变量或属性名不同，就不要使用此规则。

## Compatibility

* **JSCS**: [requireMatchingFunctionName](https://jscs-dev.github.io/rule/requireMatchingFunctionName)

## Version

This rule was introduced in ESLint 3.8.0.

该规则在 ESLint 3.8.0 中被引入。

## Resources

* [Rule source](https://github.com/eslint/eslint/tree/master/lib/rules/func-name-matching.js)
* [Documentation source](https://github.com/eslint/eslint/tree/master/docs/rules/func-name-matching.md)
