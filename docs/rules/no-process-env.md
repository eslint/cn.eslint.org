---
title: Rule no-process-env
layout: doc
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# Disallow process.env (no-process-env)

# 禁用 process.env (no-process-env)

The `process.env` object in Node.js is used to store deployment/configuration parameters. Littering it through out a project could lead to maintenance issues as it's another kind of global dependency. As such, it could lead to merge conflicts in a multi-user setup and deployment issues in a multi-server setup. Instead, one of the best practices is to define all those parameters in a single configuration/settings file which could be accessed throughout the project.

Node.js 中的 `process.env` 对象用于存储部署或配置参数。在项目中随意使用它会作为另一个全局依赖会导致维护问题。因此，它可能会在一个多用户的设置中导致合并冲突和导致一个多服务器设置中的部署问题。相反，最好的做法是定义所有这些参数在一个配置/设置文件，这个文件可以在整个项目中访问。

## Rule Details

This rule is aimed at discouraging use of `process.env` to avoid global dependencies. As such, it will warn whenever `process.env` is used.

此规则旨在阻止 `process.env` 的使用而避免全局依赖关系。因此，每当 `process.env`被使用时会给出警告。

Examples of **incorrect** code for this rule:

**错误** 代码示例：

```js
/*eslint no-process-env: "error"*/

if(process.env.NODE_ENV === "development") {
    //...
}
```

Examples of **correct** code for this rule:

**正确** 代码示例：

```js
/*eslint no-process-env: "error"*/

var config = require("./config");

if(config.env === "development") {
    //...
}
```

## When Not To Use It

If prefer to use `process.env` throughout your project to retrieve values from environment variables, then you can safely disable this rule.

如果你更愿意在整个项目中使用 `process.env` 从环境变量中检索值，你可以安全地禁用此规则。

## Further Reading

* [How to store Node.js deployment settings/configuration files? - Stack Overflow](http://stackoverflow.com/questions/5869216/how-to-store-node-js-deployment-settings-configuration-files)
* [Storing Node.js application config data - Ben Hall's blog](http://blog.benhall.me.uk/2012/02/storing-application-config-data-in/)

## Version

This rule was introduced in ESLint 0.9.0.

该规则在 ESLint 0.9.0 中被引入。

## Resources

* [Rule source](https://github.com/eslint/eslint/tree/master/lib/rules/no-process-env.js)
* [Documentation source](https://github.com/eslint/eslint/tree/master/docs/rules/no-process-env.md)
