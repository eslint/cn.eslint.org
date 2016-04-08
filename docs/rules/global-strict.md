---
title: Rule global-strict
layout: doc
translator: yanggao40
proofreader: sunshiner
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# Global Strict Mode (global-strict)

# 全局严格模式(global-strict)

**Replacement notice**: This rule was removed in ESLint v1.0 and replaced by the [strict](strict) rule. `"global"` mode in the strict rule is most similar to this rule.

**替换通知：**该规则在ESLint v1.0 中被移除并被[strict](strict)规则代替。`"global"`模式在严格规则中与该规则最相似。

Strict mode is enabled by using the following pragma in your code:

在代码中使用如下语句后会开启严格模式：

```js
"use strict";
```

When used globally, as in this example, the strict mode pragma applies to all code within a single file. This can be dangerous if you concatenate scripts together before serving them to a browser. For instance, if you have a file running in strict mode and you concatenate that file with jQuery, the strict mode now also applies to jQuery and may cause errors.

当使用全局严格模式时, 严格模式将作用域当前文件中的所有代码。如果从服务器发送到浏览器之前将代码拼接可能会出现问题。例如，如果有一个文件在严格模式下运行，并将此文件与jQuery连接在一起，严格模式也将应用到jQuery中，这样可能引起错误。

However, if you're using Node.js, you may want to turn strict mode on globally. Files are typically not concatenated together in Node.js projects and therefore the risk of applying strict mode accidentally is minimal. Further, since every file in Node.js has its own scope, global strict mode only effects the single file in which it is placed.

然而，如果你正在使用Node.js,你可能希望将严格模式为全局的。在Node.js中文件通常不会结合到一起，因此不小心应用严格模式下的风险很小。将来，由于每个文件在Node.js中都有自己的作用域，全局严格模式在使用时仅仅会影响单个文件。

## Rule Details

This rule requires or disallows global strict mode invoked by a `"use strict"` pragma in the global scope.

该规则通过全局作用域的`"use strict"`语句声明要求或禁止全局严格模式。

The following pattern is under strict mode globally and is considered valid with the `"always"` option and a warning with the `"never"` option.

下面的模式运行在全局严格模式下，使用`"always"`选项认为是有效的，使用`"never"`选项会有警告。

```js
"use strict";

function foo() {
    return true;
}
```

The following patterns apply strict mode only to functions so are valid with the `"never"` option but are problems with the `"always"` option.

下面的代码严格模式仅仅应用在函数内部，所以使用"never"选项是有效的，但是使用"always"选项就会存在问题。

```js
function foo() {
    "use strict";

    return true;
}

(function() {
    "use strict";

    // other code
}());
```

## Options

```json
"global-strict": ["error", "always"]
```

Requires that every file have a top-level `"use strict"` statement.

要求每个文件有一个顶层的`"use strict"`语句。

```json
"global-strict": ["error", "never"]
```

Warns whenever `"use strict"` is used in the global scope such that it could contaminate concatenated files.

无论何时在全局作用域使用`"use strict"`都会发出警告，因为这样会污染串连的文件。

## When Not To Use It

When a project may use non-strict-mode code side by side with strict-mode code and the files are not concatenated, the decision to use global strict mode can be made on an individual basis, rendering this rule unnecessary.

当在项目中同时使用非严格模式和严格模式代码，并且文件没有串连在一起。可以在独立的文件中决定是否使用全局严格模式，使用该规则是不必要的。

## Version

This rule was introduced in ESLint 0.8.0 and removed in 1.0.0-rc-1.

该规则在 ESLint 0.8.0 中被引入，在 1.0.0-rc-1 中被移除。

## Resources

* [Documentation source](https://github.com/eslint/eslint/tree/master/docs/rules/global-strict.md)
