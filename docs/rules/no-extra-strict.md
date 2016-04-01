---
title: Rule no-extra-strict
layout: doc
translator: yanggao40
proofreader: molee1905
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# Disallow Unnecessary Strict Pragma (no-extra-strict)

# 禁止不必要的严格语句(no-extra-strict)

**Replacement notice**: This rule was removed in ESLint v1.0 and replaced by the [strict](strict) rule. Both `"global"` and `"function"` mode in the strict rule implement this rule's behavior.


**替换声明：** 该规则在 ESLint v1.0 中移除，被 [strict](strict)规则代替。 `"global"` 和 `"function"`模式在严格规则中都实现了本规则的行为。 

The `"use strict";` directive applies to the scope in which it appears and all inner scopes contained within that scope. Therefore, using the `"use strict";` directive in one of these inner scopes is unnecessary.

`"use strict";` 指令在它出现的作用域中以及被包含在该作用域的内部作用域中有效。因此，在这些内部作用域使用 `"use strict";` 是不必要的。

```js
"use strict";

(function () {
    "use strict";
    var foo = true;
}());
```

## Rule Details

This rule is aimed at preventing unnecessary `"use strict";` directives. As such, it will warn when it encounters a `"use strict";` directive when already in strict mode.

该规则旨在防止出现不必要的`"use strict";`指令。这样，当在严格模式下检测到多余的`"use strict";`，该规则将会发出警告。

The following patterns are considered problems:

下面的模式被认为有问题的：

```js
"use strict";

(function () {
    "use strict";
    var foo = true;
}());
```

The following patterns are not considered problems:

下面的模式被认为是没有问题的：

```js
"use strict";

(function () {
    var foo = true;
}());
```



```js
(function () {
    "use strict";
    var foo = true;
}());
```

## Further Reading

* [The ECMAScript 5 Annotated Specification - Strict Mode](http://es5.github.io/#C)

## Version

This rule was introduced in ESLint 0.3.0 and removed in 1.0.0-rc-1.

该规则在 ESLint 0.3.0 中被引入，在 1.0.0-rc-1 中移除。

## Resources

* [Documentation source](https://github.com/eslint/eslint/tree/master/docs/rules/no-extra-strict.md)
