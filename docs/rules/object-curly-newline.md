---
title: object-curly-newline - Rules
layout: doc
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# enforce consistent line breaks inside braces (object-curly-newline)

# 强制在花括号内使用一致的换行符 (object-curly-newline)

(fixable) The `--fix` option on the [command line](../user-guide/command-line-interface#fix) automatically fixes problems reported by this rule.

(fixable) [命令行](../user-guide/command-line-interface#fix)中的 `--fix` 选项可以自动修复该规则报告的问题。

A number of style guides require or disallow line breaks inside of object braces and other tokens.

一些风格指南要求或禁止对象的花括号和其它符号之间出现换行符。

## Rule Details

This rule enforces consistent line breaks inside braces of object literals or destructuring assignments.

该规则强制花括号内使用换行符的一致性。该规则同时适用于对象字面量和解构赋值。

## Options

This rule has either a string option:

该规则有一个字符串选项

* `"always"` requires line breaks inside braces
* `"always"` 要求花括号内有换行符
* `"never"` disallows line breaks inside braces
* `"never"` 禁止花括号内有换行符

Or an object option:

或一个对象选项：

* `"multiline": true` (default) requires line breaks if there are line breaks inside properties or between properties
* `{multiline: true}` (默认)如果在属性内部或属性之间有换行符，就要求有换行符
* `"minProperties"` requires line breaks if the number of properties is more than the given integer
* `"minProperties"` 如果属性的数量超过了给定的数值，要求有换行符

You can specify different options for object literals and destructuring assignments:

你可以为字面量和解构赋值指定不同的选项：

```json
{
    "object-curly-newline": ["error", {
        "ObjectExpression": "always",
        "ObjectPattern": { "multiline": true }
    }]
}
```

* `"ObjectExpression"` configuration for object literals
* `"ObjectExpression"` 对象字面量的配置。
* `"ObjectPattern"` configuration for object patterns of destructuring assignments
* `"ObjectPattern"` 对象的解构赋值模式的配置。

### always

Examples of **incorrect** code for this rule with the `"always"` option:

选项 `"always"` 的 **错误** 代码示例：

```js
/*eslint object-curly-newline: ["error", "always"]*/
/*eslint-env es6*/

let a = {};
let b = {foo: 1};
let c = {foo: 1, bar: 2};
let d = {foo: 1,
    bar: 2};
let e = {foo() {
    dosomething();
}};

let {} = obj;
let {f} = obj;
let {g, h} = obj;
let {i,
    j} = obj;
let {k = function() {
    dosomething();
}} = obj;
```

Examples of **correct** code for this rule with the `"always"` option:

选项 `"always"` 的 **正确** 代码示例：

```js
/*eslint object-curly-newline: ["error", "always"]*/
/*eslint-env es6*/

let a = {
};
let b = {
    foo: 1
};
let c = {
    foo: 1, bar: 2
};
let d = {
    foo: 1,
    bar: 2
};
let e = {
    foo: function() {
        dosomething();
    }
};

let {
} = obj;
let {
    f
} = obj;
let {
    g, h
} = obj;
let {
    i,
    j
} = obj;
let {
    k = function() {
        dosomething();
    }
} = obj;
```

### never

Examples of **incorrect** code for this rule with the `"never"` option:

选项 `"never"` 的 **错误** 代码示例：

```js
/*eslint object-curly-newline: ["error", "never"]*/
/*eslint-env es6*/

let a = {
};
let b = {
    foo: 1
};
let c = {
    foo: 1, bar: 2
};
let d = {
    foo: 1,
    bar: 2
};
let e = {
    foo: function() {
        dosomething();
    }
};

let {
} = obj;
let {
    f
} = obj;
let {
    g, h
} = obj;
let {
    i,
    j
} = obj;
let {
    k = function() {
        dosomething();
    }
} = obj;
```

Examples of **correct** code for this rule with the `"never"` option:

选项 `"never"` 的 **正确** 代码示例：

```js
/*eslint object-curly-newline: ["error", "never"]*/
/*eslint-env es6*/

let a = {};
let b = {foo: 1};
let c = {foo: 1, bar: 2};
let d = {foo: 1,
    bar: 2};
let e = {foo: function() {
    dosomething();
}};

let {} = obj;
let {f} = obj;
let {g, h} = obj;
let {i,
    j} = obj;
let {k = function() {
    dosomething();
}} = obj;
```

### multiline

Examples of **incorrect** code for this rule with the default `{ "multiline": true }` option:

默认选项 `{ "multiline": true }` 的 **错误** 代码示例：

```js
/*eslint object-curly-newline: ["error", { "multiline": true }]*/
/*eslint-env es6*/

let a = {
};
let b = {
    foo: 1
};
let c = {
    foo: 1, bar: 2
};
let d = {foo: 1,
    bar: 2};
let e = {foo: function() {
    dosomething();
}};

let {
} = obj;
let {
    f
} = obj;
let {
    g, h
} = obj;
let {i,
    j} = obj;
let {k = function() {
    dosomething();
}} = obj;
```

Examples of **correct** code for this rule with the default `{ "multiline": true }` option:

默认选项 `{ "multiline": true }` 的 **正确** 代码示例：

```js
/*eslint object-curly-newline: ["error", { "multiline": true }]*/
/*eslint-env es6*/

let a = {};
let b = {foo: 1};
let c = {foo: 1, bar: 2};
let d = {
    foo: 1,
    bar: 2
};
let e = {
    foo: function() {
        dosomething();
    }
};

let {} = obj;
let {f} = obj;
let {g, h} = obj;
let {
    i,
    j
} = obj;
let {
    k = function() {
        dosomething();
    }
} = obj;
```

### minProperties

Examples of **incorrect** code for this rule with the `{ "minProperties": 2 }` option:

选项 `{ "minProperties": 2 }` 的 **错误** 代码示例：

```js
/*eslint object-curly-newline: ["error", { "minProperties": 2 }]*/
/*eslint-env es6*/

let a = {
};
let b = {
    foo: 1
};
let c = {foo: 1, bar: 2};
let d = {foo: 1,
    bar: 2};
let e = {
    foo: function() {
        dosomething();
    }
};

let {
} = obj;
let {
    f
} = obj;
let {g, h} = obj;
let {i,
    j} = obj;
let {
    k = function() {
        dosomething();
    }
} = obj;
```

Examples of **correct** code for this rule with the `{ "minProperties": 2 }` option:

选项 `{ "minProperties": 2 }` 的 **正确** 代码示例：

```js
/*eslint object-curly-newline: ["error", { "minProperties": 2 }]*/
/*eslint-env es6*/

let a = {};
let b = {foo: 1};
let c = {
    foo: 1, bar: 2
};
let d = {
    foo: 1,
    bar: 2
};
let e = {foo: function() {
    dosomething();
}};

let {} = obj;
let {f} = obj;
let {
    g, h
} = obj;
let {
    i,
    j
} = obj;
let {k = function() {
    dosomething();
}} = obj;
```

### ObjectExpression and ObjectPattern

Examples of **incorrect** code for this rule with the `{ "ObjectExpression": "always", "ObjectPattern": "never" }` options:

选项 `{ "ObjectExpression": "always", "ObjectPattern": "never" }` 的 **错误** 代码示例：

```js
/*eslint object-curly-newline: ["error", { "ObjectExpression": "always", "ObjectPattern": "never" }]*/
/*eslint-env es6*/

let a = {};
let b = {foo: 1};
let c = {foo: 1, bar: 2};
let d = {foo: 1,
    bar: 2};
let e = {foo: function() {
    dosomething();
}};

let {
} = obj;
let {
    f
} = obj;
let {
    g, h
} = obj;
let {
    i,
    j
} = obj;
let {
    k = function() {
        dosomething();
    }
} = obj;
```

Examples of **correct** code for this rule with the `{ "ObjectExpression": "always", "ObjectPattern": "never" }` options:

选项 `{ "ObjectExpression": "always", "ObjectPattern": "never" }` 的 **正确** 代码示例：

```js
/*eslint object-curly-newline: ["error", { "ObjectExpression": "always", "ObjectPattern": "never" }]*/
/*eslint-env es6*/

let a = {
};
let b = {
    foo: 1
};
let c = {
    foo: 1, bar: 2
};
let d = {
    foo: 1,
    bar: 2
};
let e = {
    foo: function() {
        dosomething();
    }
};

let {} = obj;
let {f} = obj;
let {g, h} = obj;
let {i,
    j} = obj;
let {k = function() {
    dosomething();
}} = obj;
```

## Compatibility

* **JSCS**: [requirePaddingNewLinesInObjects](http://jscs.info/rule/requirePaddingNewLinesInObjects) and [disallowPaddingNewLinesInObjects](http://jscs.info/rule/disallowPaddingNewLinesInObjects)

## When Not To Use It

If you don't want to enforce consistent line breaks inside braces, then it's safe to disable this rule.

如果你不想强制花括号内换行符的一致性，可以关闭此规则。

## Related Rules

* [comma-spacing](comma-spacing)
* [key-spacing](key-spacing)
* [object-curly-spacing](object-curly-spacing)
* [object-property-newline](object-property-newline)

## Version

This rule was introduced in ESLint 2.12.0.

该规则在 ESLint 2.12.0 中被引入。

## Resources

* [Rule source](https://github.com/eslint/eslint/tree/master/lib/rules/object-curly-newline.js)
* [Documentation source](https://github.com/eslint/eslint/tree/master/docs/rules/object-curly-newline.md)
