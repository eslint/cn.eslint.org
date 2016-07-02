---
title: Rule no-case-declarations
layout: doc
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# Disallow lexical declarations in case/default clauses (no-case-declarations)

# 禁止在 case 或 default 子句中出现词法声明 (no-case-declarations)

This rule disallows lexical declarations (`let`, `const`, `function` and `class`)
in `case`/`default` clauses. The reason is that the lexical declaration is visible
in the entire switch block but it only gets initialized when it is assigned, which
will only happen if the case where it is defined is reached.

该规则禁止词法声明 (`let`、`const`、`function` 和 `class`) 出现在 `case`或`default` 子句中。原因是，词法声明在整个 `switch` 语句块中是可见的，但是它只有在运行到它定义的 case 语句时，才会进行初始化操作。

To ensure that the lexical declaration only applies to the current case clause
wrap your clauses in blocks.

为了保证词法声明语句只在当前 case 语句中有效，将你子句包裹在块中。

## Rule Details

This rule aims to prevent access to uninitialized lexical bindings as well as accessing hoisted functions across case clauses.

该规则旨在避免访问未经初始化的词法绑定以及跨 case 语句访问被提升的函数。

Examples of **incorrect** code for this rule:

**错误** 代码示例：

```js
/*eslint no-case-declarations: "error"*/
/*eslint-env es6*/

switch (foo) {
    case 1:
        let x = 1;
        break;
    case 2:
        const y = 2;
        break;
    case 3:
        function f() {}
        break;
    default:
        class C {}
}
```

Examples of **correct** code for this rule:

**正确** 代码示例：

```js
/*eslint no-case-declarations: "error"*/
/*eslint-env es6*/

switch (foo) {
    case 1: {
        let x = 1;
        break;
    }
    case 2: {
        const y = 2;
        break;
    }
    case 3: {
        function f() {}
        break;
    }
    default: {
        class C {}
    }
}
```

## When Not To Use It

If you depend on fall through behavior and want access to bindings introduced in the case block.

如果你依赖 case 落空行为，并想访问 case 块中引入的绑定，可以关闭此规则。

## Related Rules

* [no-fallthrough](no-fallthrough)

## Version

This rule was introduced in ESLint 1.9.0.

该规则在 ESLint 1.9.0 中被引入。

## Resources

* [Rule source](https://github.com/eslint/eslint/tree/master/lib/rules/no-case-declarations.js)
* [Documentation source](https://github.com/eslint/eslint/tree/master/docs/rules/no-case-declarations.md)
