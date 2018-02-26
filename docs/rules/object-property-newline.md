---
title: object-property-newline - Rules
layout: doc
edit_link: https://github.com/eslint/eslint/edit/master/docs/rules/object-property-newline.md
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# enforce placing object properties on separate lines (object-property-newline)

# 强制将对象的属性放在不同的行上 (object-property-newline)

(fixable) The `--fix` option on the [command line](../user-guide/command-line-interface#fix) can automatically fix some of the problems reported by this rule.

(fixable) [命令行](../user-guide/command-line-interface#fix)中的 `--fix` 选项可以自动修复一些该规则报告的问题。

This rule permits you to restrict the locations of property specifications in object literals. You may prohibit any part of any property specification from appearing on the same line as any part of any other property specification. You may make this prohibition absolute, or, by invoking an object option, you may allow an exception, permitting an object literal to have all parts of all of its property specifications on a single line.

该规则允许你限制对象字面量中属性的位置。你可以禁止属性规范的任意部分出现在与其他属性规范的任意部分的同一行上。你可以绝对禁止或通过调用一个对象选项来允许一个例外，允许对象的所有属性在同一行上。

## Rule Details

### Motivations

This rule makes it possible to ensure, as some style guides require, that property specifications appear on separate lines for better readability. For example, you can prohibit all of these:

该规则可以确保，正如某些风格指南所要求的那样，属性分散在不同的行中可以获得更好的可读性。例如，你可以禁止所有这些：

```js
const newObject = {a: 1, b: [2, {a: 3, b: 4}]};
const newObject = {
    a: 1, b: [2, {a: 3, b: 4}]
};
const newObject = {
    a: 1,
    b: [2, {a: 3, b: 4}]
};
const newObject = {
    a: 1,
    b: [
        2,
        {a: 3, b: 4}
    ]
};

```

Instead of those, you can comply with the rule by writing

相反，你可以遵守该规则，这样写：

```js
const newObject = {
    a: 1,
    b: [2, {
        a: 3,
        b: 4
    }]
};
```

or

或

```js
const newObject = {
    a: 1,
    b: [
        2,
        {
            a: 3,
            b: 4
        }
    ]
};
```

Another benefit of this rule is specificity of diffs when a property is changed:

该规则的另一个好处是，当一个属性改变时，可以显示出特异性的差别：

```diff
// More specific
 var obj = {
     foo: "foo",
-    bar: "bar",
+    bar: "bazz",
     baz: "baz"
 };
```

```diff
// Less specific
-var obj = { foo: "foo", bar: "bar", baz: "baz" };
+var obj = { foo: "foo", bar: "bazz", baz: "baz" };
```

### Optional Exception

The rule offers one object option, `allowAllPropertiesOnSameLine` (a deprecated synonym is `allowMultiplePropertiesPerLine`). If you set it to `true`, object literals such as the first two above, with all property specifications on the same line, will be permitted, but one like

该规则有一个对象选项， `allowAllPropertiesOnSameLine` (一个弃用的同义词是  `allowMultiplePropertiesPerLine`)。如果你设置此选项为 `true`，像上面前两个对象字面量，即所有属性都在同一行上，将被允许，但除了下面这个

```js
const newObject = {
    a: 'a.m.', b: 'p.m.',
    c: 'daylight saving time'
};

```

will be prohibited, because two properties, but not all properties, appear on the same line.

将被禁止，因为两个属性，不是全部的属性出现在同一行上。

### Notations

This rule applies equally to all property specifications, regardless of notation, including:

该规则适用于所有的属性规范，不管是什么符号，包括：

- `a: 1` (ES5)
- `a: 1` (ES5)
- `a` (ES2015 shorthand property)
- `a` (ES2015 简写属性)
- ``[`prop${a}`]`` (ES2015 computed property name)
- ``[`prop${a}`]`` (ES2015 计算的属性名)

Thus, the rule (without the object option) prohibits both of these:

因此，该规则（没有对象选项）禁止下面这两个：

```js
const newObject = {
    a: 1, [
        process.argv[4]
    ]: '01'
};
const newObject = {
    a: 1, [process.argv[4]]: '01'
};
```

(This behavior differs from that of the JSCS rule cited below, which does not treat the leading `[` of a computed property name as part of that property specification. The JSCS rule prohibits the second of these formats but permits the first.)

（此行为与下面引用的 JSCS 规则不同，它不将以 `[` 开头的计算属性作为属性规范的一部分。JSCS 规则禁止第二种格式，但允许第一种格式。）

### Multiline Properties

The rule prohibits the colocation on any line of at least 1 character of one property specification with at least 1 character of any other property specification. For example, the rule prohibits

该规则禁止至少一个字符的属性与至少一个字符的其他属性出现在同一行。例如，该规则禁止：

```js
const newObject = {a: [
    'Officiële website van de Europese Unie',
    'Официален уебсайт на Европейския съюз'
], b: 2};
```

because 1 character of the specification of `a` (i.e. the trailing `]` of its value) is on the same line as the specification of `b`.

因为一个字符的属性 `a` 与属性 `b` 在同一行上。

The optional exception does not excuse this case, because the entire collection of property specifications spans 4 lines, not 1.

可选的例外不允许这种情况出现，因为整个属性跨了4行，而不是1行。

### Inter-property Delimiters

The comma and any whitespace that delimit property specifications are not considered parts of them. Therefore, the rule permits both of these formats:

分隔属性的逗号和任意空白不被认为是属性的一部分。因此，giant规则允许下面这种格式：

```js
const newFunction = multiplier => ({
    a: 2 * multiplier,
    b: 4 * multiplier,
    c: 8 * multiplier
});
const newFunction = multiplier => ({
    a: 2 * multiplier
    , b: 4 * multiplier
    , c: 8 * multiplier
});
```

(This behavior differs from that of the JSCS rule cited below, which permits the first but prohibits the second format.)

（这种行为与下面引用的 JSCS 规则不同，JSCS 规则允许第一种，禁止第二种。）

### --fix

If this rule is invoked with the command-line `--fix` option, object literals that violate the rule are generally modified to comply with it. The modification in each case is to move a property specification to the next line whenever there is part or all of a previous property specification on the same line. For example,

如果使用命令行 `--fix` 选项调用此规则，通常会修改违反此规则的对象字面量。每种情况的修改都是将一个属性移动下一行，无论是否与前一个属性的一部分还是全部在同一行上。例如，

```js
const newObject = {
    a: 'a.m.', b: 'p.m.',
    c: 'daylight saving time'
};
```

is converted to

被转换为：

```js
const newObject = {
    a: 'a.m.',
b: 'p.m.',
    c: 'daylight saving time'
};
```

The modification does not depend on whether the object option is set to `true`. In other words, ESLint never collects all the property specifications onto a single line, even when the object option would permit that.

修改不取决于对象选项是否被设为 `true`。换句话说，ESLint 不会将所有的属性放置到一行，即使对象选项允许那么做。

ESLint does not correct a violation of this rule if a comment immediately precedes the second or subsequent property specification on a line, since ESLint cannot determine which line to put the comment onto.

如果注释在同一行的第二个或后续的属性之前，ESLint 不会纠正违反此规则的行为，因为 ESLint 不能决定要把注释放到哪一行。

As illustrated above, the `--fix` option, applied to this rule, does not comply with other rules, such as `indent`, but, if those other rules are also in effect, the option applies them, too.

综上所述，应用于此规则的 `--fix` 选项，不会符合其他规则，比如 `indent` 规则，但是，如果其他规则也有效，该选项也适用。

## Examples

Examples of **incorrect** code for this rule, with no object option or with `allowAllPropertiesOnSameLine` set to `false`:

选项 `allowAllPropertiesOnSameLine` 设为 `false` 的 **错误** 代码示例：

```js
/*eslint object-property-newline: "error"*/

const obj0 = { foo: "foo", bar: "bar", baz: "baz" };

const obj1 = {
    foo: "foo", bar: "bar", baz: "baz"
};

const obj2 = {
    foo: "foo", bar: "bar",
    baz: "baz"
};

const obj3 = {
    [process.argv[3] ? "foo" : "bar"]: 0, baz: [
        1,
        2,
        4,
        8
    ]
};

const a = "antidisestablishmentarianistically";
const b = "yugoslavyalılaştırabildiklerimizdenmişsiniz";
const obj4 = {a, b};

const domain = process.argv[4];
const obj5 = {
    foo: "foo", [
    domain.includes(":") ? "complexdomain" : "simpledomain"
]: true};
```

Examples of **correct** code for this rule, with no object option or with `allowAllPropertiesOnSameLine` set to `false`:

选项 `allowAllPropertiesOnSameLine` 设为 `false` 的 **正确** 代码示例：

```js
/*eslint object-property-newline: "error"*/

const obj1 = {
    foo: "foo",
    bar: "bar",
    baz: "baz"
};

const obj2 = {
    foo: "foo"
    , bar: "bar"
    , baz: "baz"
};

const user = process.argv[2];
const obj3 = {
    user,
    [process.argv[3] ? "foo" : "bar"]: 0,
    baz: [
        1,
        2,
        4,
        8
    ]
};
```

Examples of additional **correct** code for this rule with the `{ "allowAllPropertiesOnSameLine": true }` option:

选项 `{ "allowAllPropertiesOnSameLine": true }` 的 **正确** 代码示例：

```js
/*eslint object-property-newline: ["error", { "allowAllPropertiesOnSameLine": true }]*/

const obj = { foo: "foo", bar: "bar", baz: "baz" };

const obj2 = {
    foo: "foo", bar: "bar", baz: "baz"
};
const user = process.argv[2];
const obj3 = {
    user, [process.argv[3] ? "foo" : "bar"]: 0, baz: [1, 2, 4, 8]
};
```

## When Not To Use It

You can turn this rule off if you want to decide, case-by-case, whether to place property specifications on separate lines.

如果你想要决定是否要将属性放在单独的行上，你可以关闭此规则。

## Compatibility

- **JSCS**: This rule provides partial compatibility with [requireObjectKeysOnNewLine](http://jscs.info/rule/requireObjectKeysOnNewLine).

## Related Rules

- [brace-style](brace-style)
- [comma-dangle](comma-dangle)
- [key-spacing](key-spacing)
- [object-curly-spacing](object-curly-spacing)

## Version

This rule was introduced in ESLint 2.10.0.

该规则在 ESLint 2.10.0 中被引入。

## Resources

* [Rule source](https://github.com/eslint/eslint/tree/master/lib/rules/object-property-newline.js)
* [Documentation source](https://github.com/eslint/eslint/tree/master/docs/rules/object-property-newline.md)
