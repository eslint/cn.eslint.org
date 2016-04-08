---
title: Rule no-new-wrappers
layout: doc
translator: fengnana
proofreader: yanggao40
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# Disallow Primitive Wrapper Instances (no-new-wrappers)

# 禁止原始包装实例 (no-new-wrappers)

There are three primitive types in JavaScript that have wrapper objects: string, number, and boolean. These are represented by the constructors `String`, `Number`, and `Boolean`, respectively. The primitive wrapper types are used whenever one of these primitive values is read, providing them with object-like capabilities such as methods. Behind the scenes, an object of the associated wrapper type is created and then destroyed, which is why you can call methods on primitive values, such as:

在 JavaScript 中有3种原始类型包装对象：字符串，数字，和布尔值。它们所代表的构造器分别为`String`, `Number`, and `Boolean`。当读取原始类型的值或者为它们提供如方法等类似对象的功能时，原始包装类型将被使用。在幕后,相关包装器类型的一个对象被创建,然后销毁,这就是为什么你可以在原始值上调用方法,例如：

```js
var text = "Hello world".substring(2);
```

Behind the scenes in this example, a `String` object is constructed. The `substring()` method exists on `String.prototype` and so is accessible to the string instance.

在本例中幕后,一个`String`对象被创建。`substring()`方法存在于`String.prototype`中所以可以访问字符实例。

It's also possible to manually create a new wrapper instance:

还可以手动创建一个新的包装器实例：

```js
var stringObject = new String("Hello world");
var numberObject = new Number(33);
var booleanObject = new Boolean(false);
```

Although possible, there aren't any good reasons to use these primitive wrappers as constructors. They tend to confuse other developers more than anything else because they seem like they should act as primitives, but they do not. For example:

虽然可能,没有任何理由将这些原始包装器作为构造函数。他们往往比任何东西都混淆其他开发人员,因为它们看起来好像应该充当原语,但他们没有。例如：

```js
var stringObject = new String("Hello world");
console.log(typeof stringObject);       // "object"

var text = "Hello world";
console.log(typeof text);               // "string"

var booleanObject = new Boolean(false);
if (booleanObject) {    // all objects are truthy!
    console.log("This executes");
}
```

The first problem is that primitive wrapper objects are, in fact, objects. That means `typeof` will return `"object"` instead of `"string"`, `"number"`, or `"boolean"`. The second problem comes with boolean objects. Every object is truthy, that means an instance of `Boolean` always resolves to `true` even when its actual value is `false`.

原始包装类型的第一个问题是，实际上是对象。这意味着`typeod`将返回 `"object"`而不是`"string"`, `"number"`, 或者`"boolean"`。第二个问题伴随着布尔型对象。每个对象都是真，这以为着每个`Boolean` 的实例都会返回`true`，甚至它们实际的值是 `false`。

For these reasons, it's considered a best practice to avoid using primitive wrapper types with `new`.

由于这些原因，最佳实践认为使用 `new`来避免使用原始包装类型。

## Rule Details

This rule aims to eliminate the use of `String`, `Number`, and `Boolean` with the `new` operator. As such, it warns whenever it sees `new String`, `new Number`, or `new Boolean`.

此规则目的在于消除通过`new`操作符使用`String`, `Number`, 和 `Boolean`。因此,每当它遇到`new String`, `new Number`, 或者 `new Boolean`都会给出警告。

Examples of **incorrect** code for this rule:

**错误**代码示例：

```js
/*eslint no-new-wrappers: "error"*/

var stringObject = new String("Hello world");
var numberObject = new Number(33);
var booleanObject = new Boolean(false);

var stringObject = new String;
var numberObject = new Number;
var booleanObject = new Boolean;
```

Examples of **correct** code for this rule:

**正确**代码示例：

```js
/*eslint no-new-wrappers: "error"*/

var text = String(someValue);
var num = Number(someValue);

var object = new MyString();
```

## When Not To Use It

If you want to allow the use of primitive wrapper objects, then you can safely disable this rule.

如果你想允许使用原始包装器对象,那么你可以安全地关闭这条规则。

## Further Reading

* [Wrapper objects](https://www.inkling.com/read/javascript-definitive-guide-david-flanagan-6th/chapter-3/wrapper-objects)

## Related Rules

* [no-array-constructor](no-array-constructor)
* [no-new-object](no-new-object)

## Version

This rule was introduced in ESLint 0.0.6.

此规则在 ESLint 0.0.6 中被引入。

## Resources

* [Rule source](https://github.com/eslint/eslint/tree/master/lib/rules/no-new-wrappers.js)
* [Documentation source](https://github.com/eslint/eslint/tree/master/docs/rules/no-new-wrappers.md)
