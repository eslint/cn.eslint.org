---
title: Rule prefer-reflect
layout: doc
translator: molee1905
proofreader: summart
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# Suggest using Reflect methods where applicable (prefer-reflect)

# 建议在合适的地方使用Reflect方法 (prefer-reflect)

The ES6 Reflect API comes with a handful of methods which somewhat deprecate methods on old constructors:

ES6的Reflect API 提供了若干的方法，在一定程度上不再支持一些旧的构造器上的方法：

* [`Reflect.apply`](http://www.ecma-international.org/ecma-262/6.0/index.html#sec-reflect.apply) effectively deprecates [`Function.prototype.apply`](http://www.ecma-international.org/ecma-262/6.0/index.html#sec-function.prototype.apply) and [`Function.prototype.call`](http://www.ecma-international.org/ecma-262/6.0/index.html#sec-function.prototype.call)

* [`Reflect.apply`](http://www.ecma-international.org/ecma-262/6.0/index.html#sec-reflect.apply) 有效地弃用了 [`Function.prototype.apply`](http://www.ecma-international.org/ecma-262/6.0/index.html#sec-function.prototype.apply) 和 [`Function.prototype.call`](http://www.ecma-international.org/ecma-262/6.0/index.html#sec-function.prototype.call)

* [`Reflect.deleteProperty`](http://www.ecma-international.org/ecma-262/6.0/index.html#sec-reflect.deleteproperty) effectively deprecates the [`delete` keyword](http://www.ecma-international.org/ecma-262/6.0/index.html#sec-delete-operator-runtime-semantics-evaluation)

* [`Reflect.deleteProperty`](http://www.ecma-international.org/ecma-262/6.0/index.html#sec-reflect.deleteproperty) 有效地弃用了 [`delete` keyword](http://www.ecma-international.org/ecma-262/6.0/index.html#sec-delete-operator-runtime-semantics-evaluation)

* [`Reflect.getOwnPropertyDescriptor`](http://www.ecma-international.org/ecma-262/6.0/index.html#sec-reflect.getownpropertydescriptor) effectively deprecates [`Object.getOwnPropertyDescriptor`](http://www.ecma-international.org/ecma-262/6.0/index.html#sec-object.getownpropertydescriptor)

* [`Reflect.getOwnPropertyDescriptor`](http://www.ecma-international.org/ecma-262/6.0/index.html#sec-reflect.getownpropertydescriptor) 有效地弃用了 [`Object.getOwnPropertyDescriptor`](http://www.ecma-international.org/ecma-262/6.0/index.html#sec-object.getownpropertydescriptor)

* [`Reflect.getPrototypeOf`](http://www.ecma-international.org/ecma-262/6.0/index.html#sec-reflect.getprototypeof) effectively deprecates [`Object.getPrototypeOf`](http://www.ecma-international.org/ecma-262/6.0/index.html#sec-object.getprototypeof)

* [`Reflect.getPrototypeOf`](http://www.ecma-international.org/ecma-262/6.0/index.html#sec-reflect.getprototypeof) 有效地弃用了 [`Object.getPrototypeOf`](http://www.ecma-international.org/ecma-262/6.0/index.html#sec-object.getprototypeof)

* [`Reflect.setPrototypeOf`](http://www.ecma-international.org/ecma-262/6.0/index.html#sec-reflect.setprototypeof) effectively deprecates [`Object.setPrototypeOf`](http://www.ecma-international.org/ecma-262/6.0/index.html#sec-object.setprototypeof)

* [`Reflect.setPrototypeOf`](http://www.ecma-international.org/ecma-262/6.0/index.html#sec-reflect.setprototypeof) 有效地弃用了 [`Object.setPrototypeOf`](http://www.ecma-international.org/ecma-262/6.0/index.html#sec-object.setprototypeof)

* [`Reflect.preventExtensions`](http://www.ecma-international.org/ecma-262/6.0/index.html#sec-reflect.preventextensions)  effectively deprecates [`Object.preventExtensions`](http://www.ecma-international.org/ecma-262/6.0/index.html#sec-object.preventextensions)

* [`Reflect.preventExtensions`](http://www.ecma-international.org/ecma-262/6.0/index.html#sec-reflect.preventextensions) 有效地弃用了 [`Object.preventExtensions`](http://www.ecma-international.org/ecma-262/6.0/index.html#sec-object.preventextensions)

The prefer-reflect rule will flag usage of any older method, suggesting to instead use the newer Reflect version.

该规则将标记任何旧方法的使用，建议使用较新的Reflect版本代替。

## Rule Details

## Options

### Exceptions

```
"prefer-reflect": [<enabled>, { exceptions: [<...exceptions>] }]
```

The `exceptions` option allows you to pass an array of methods names you'd like to continue to use in the old style.

`exceptions`选项允许你传递一个数组，数组中的元素为你想继续使用旧风格的方法的名字。

For example if you wish to use all Reflect methods, except for `Function.prototype.apply` then your config would look like `prefer-reflect: [2, { exceptions: ["apply"] }]`.

例如，如果你想使用除了`Function.prototype.apply`之外所有的Reflect方法，你的配置将会看起来像`prefer-reflect: [2, { exceptions: ["apply"] }]`。

If you want to use Reflect methods, but keep using the `delete` keyword, then your config would look like `prefer-reflect: [2, { exceptions: ["delete"] }]`.

如果你想使用Reflect方法，但是保留`delete`关键字的使用，你的配置将会看起来像`prefer-reflect: [2, { exceptions: ["delete"] }]`。

These can be combined as much as you like. To make all methods exceptions (thereby rendering this rule useless), use `prefer-reflect: [2, { exceptions: ["apply", "call", "defineProperty", "getOwnPropertyDescriptor", "getPrototypeOf", "setPrototypeOf", "isExtensible", "getOwnPropertyNames", "preventExtensions", "delete"] }]`

这些可以根据你的喜好任意组合。不包含所有的方法(使这条规则变得无用)，使用`prefer-reflect: [2, { exceptions: ["apply", "call", "defineProperty", "getOwnPropertyDescriptor", "getPrototypeOf", "setPrototypeOf", "isExtensible", "getOwnPropertyNames", "preventExtensions", "delete"] }]`


### Reflect.apply (Function.prototype.apply/Function.prototype.call)

The following patterns are considered problems:

以下模式被认为是有问题的：

```js
/*eslint prefer-reflect: 2*/

foo.apply(undefined, args);
foo.apply(null, args);
obj.foo.apply(obj, args);
obj.foo.apply(other, args);

foo.call(undefined, arg);
foo.call(null, arg);
obj.foo.call(obj, arg);
obj.foo.call(other, arg);
```

The following patterns are not considered problems:

以下模式被认为是没有问题的：

```js
/*eslint prefer-reflect: 2*/

Reflect.apply(undefined, args);
Reflect.apply(null, args);
Reflect.apply(obj.foo, obj, args);
Reflect.apply(obj.foo, other, args);
Reflect.apply(undefined, [arg]);
Reflect.apply(null, [arg]);
Reflect.apply(obj.foo, obj, [arg]);
Reflect.apply(obj.foo, other, [arg]);
```

```js
/*eslint prefer-reflect: [2, { exceptions: ["apply"] }]*/

foo.apply(undefined, args);
foo.apply(null, args);
obj.foo.apply(obj, args);
obj.foo.apply(other, args);
Reflect.apply(undefined, args);
Reflect.apply(null, args);
Reflect.apply(obj.foo, obj, args);
Reflect.apply(obj.foo, other, args);
```

```js
/*eslint prefer-reflect: [2, { exceptions: ["call"] }]*/

foo.call(undefined, arg);
foo.call(null, arg);
obj.foo.call(obj, arg);
obj.foo.call(other, arg);
Reflect.apply(undefined, [arg]);
Reflect.apply(null, [arg]);
Reflect.apply(obj.foo, obj, [arg]);
Reflect.apply(obj.foo, other, [arg]);
```

### Reflect.defineProperty (Object.defineProperty)

The following patterns are considered problems:

以下模式被认为是有问题的：

```js
/*eslint prefer-reflect: 2*/

Object.defineProperty({}, 'foo', {value: 1})
```

The following patterns are not considered problems:

以下模式被认为是没有问题的：

```js
/*eslint prefer-reflect: 2*/

Reflect.defineProperty({}, 'foo', {value: 1})
```

```js
/*eslint prefer-reflect: [2, { exceptions: ["defineProperty"] }]*/

Object.defineProperty({}, 'foo', {value: 1})
Reflect.defineProperty({}, 'foo', {value: 1})
```

### Reflect.getOwnPropertyDescriptor (Object.getOwnPropertyDescriptor)

The following patterns are considered problems:

以下模式被认为是有问题的：

```js
/*eslint prefer-reflect: 2*/

Object.getOwnPropertyDescriptor({}, 'foo')
```

The following patterns are not considered problems:

以下模式被认为是没有问题的：

```js
/*eslint prefer-reflect: 2*/

Reflect.getOwnPropertyDescriptor({}, 'foo')
```

__config:__ `prefer-reflect: [2, { exceptions: ["getOwnPropertyDescriptor"] }]`

```js
/*eslint prefer-reflect: [2, { exceptions: ["getOwnPropertyDescriptor"] }]*/

Object.getOwnPropertyDescriptor({}, 'foo')
Reflect.getOwnPropertyDescriptor({}, 'foo')
```

### Reflect.getPrototypeOf (Object.getPrototypeOf)

The following patterns are considered problems:

以下模式被认为是有问题的：

```js
/*eslint prefer-reflect: 2*/

Object.getPrototypeOf({}, 'foo')
```

The following patterns are not considered problems:

以下模式被认为是没有问题的：

```js
/*eslint prefer-reflect: 2*/

Reflect.getPrototypeOf({}, 'foo')
```

```js
/*eslint prefer-reflect: [2, { exceptions: ["getPrototypeOf"] }]*/

Object.getPrototypeOf({}, 'foo')
Reflect.getPrototypeOf({}, 'foo')
```

### Reflect.setPrototypeOf (Object.setPrototypeOf)

The following patterns are considered problems:

以下模式被认为是有问题的：

```js
/*eslint prefer-reflect: 2*/

Object.setPrototypeOf({}, Object.prototype)
```

The following patterns are not considered problems:

以下模式被认为是没有问题的：

```js
/*eslint prefer-reflect: 2*/

Reflect.setPrototypeOf({}, Object.prototype)
```

__config:__ `prefer-reflect: [2, { exceptions: ["setPrototypeOf"] }]`

```js
/*eslint prefer-reflect: [2, { exceptions: ["setPrototypeOf"] }]*/

Object.setPrototypeOf({}, Object.prototype)
Reflect.setPrototypeOf({}, Object.prototype)
```

### Reflect.isExtensible (Object.isExtensible)

The following patterns are considered problems:

以下模式被认为是有问题的：

```js
/*eslint prefer-reflect: 2*/

Object.isExtensible({})
```

The following patterns are not considered problems:

以下模式被认为是没有问题的：

```js
/*eslint prefer-reflect: 2*/

Reflect.isExtensible({})
```

```js
/*eslint prefer-reflect: [2, { exceptions: ["isExtensible"] }]*/

Object.isExtensible({})
Reflect.isExtensible({})
```

### Reflect.getOwnPropertyNames (Object.getOwnPropertyNames)

The following patterns are considered problems:

以下模式被认为是有问题的：

```js
/*eslint prefer-reflect: 2*/

Object.getOwnPropertyNames({})
```

The following patterns are not considered problems:

以下模式被认为是没有问题的：

```js
/*eslint prefer-reflect: 2*/

Reflect.getOwnPropertyNames({})
```

```js
/*eslint prefer-reflect: [2, { exceptions: ["getOwnPropertyNames"] }]*/

Object.getOwnPropertyNames({})
Reflect.getOwnPropertyNames({})
```

### Reflect.preventExtensions (Object.preventExtensions)

The following patterns are considered problems:

以下模式被认为是有问题的：

```js
/*eslint prefer-reflect: 2*/

Object.preventExtensions({})
```

The following patterns are not considered problems:

以下模式被认为是没有问题的：

```js
/*eslint prefer-reflect: 2*/

Reflect.preventExtensions({})
```

```js
/*eslint prefer-reflect: [2, { exceptions: ["preventExtensions"] }]*/

Object.preventExtensions({})
Reflect.preventExtensions({})
```

### Reflect.deleteProperty (The `delete` keyword)

The following patterns are considered problems:

以下模式被认为是有问题的：

```js
/*eslint prefer-reflect: 2*/

delete foo.bar;
```

The following patterns are not considered problems:

以下模式被认为是没有问题的：

```js
/*eslint prefer-reflect: 2*/

delete bar; // Does not reference an object, just a var
Reflect.deleteProperty(foo, 'bar');
```

(Note: For a rule preventing deletion of variables, see [no-delete-var instead](no-delete-var))

```js
/*eslint prefer-reflect: [2, { exceptions: ["delete"] }]*/

delete bar
delete foo.bar
Reflect.deleteProperty(foo, 'bar');
```


## When Not To Use It

This rule should not be used in ES3/5 environments.

该规则不应在ES3/5环境中使用。

In ES2015 (ES6) or later, if you don't want to be notified about places where Reflect could be used, you can safely disable this rule.

在ES2015 (ES6)或以后的版本中，如果你不想收到哪里应该使用Reflect的通知，你可以关闭此规则。

## Related Rules

* [no-useless-call](no-useless-call)
* [prefer-spread](prefer-spread)
* [no-delete-var](no-delete-var)

## Version

This rule was introduced in ESLint 1.0.0-rc-2.

该规则在ESLint 1.0.0-rc-2 中被引入。

## Resources

* [Rule source](https://github.com/eslint/eslint/tree/master/lib/rules/prefer-reflect.js)
* [Documentation source](https://github.com/eslint/eslint/tree/master/docs/rules/prefer-reflect.md)
