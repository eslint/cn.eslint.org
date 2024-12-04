---
title: 新规则
layout: doc
edit_link: https://github.com/eslint/eslint/edit/main/docs/developer-guide/contributing/new-rules.md

---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# 新规则 {#new-rules}

ESLint 的核心就是规则。在这个项目生命周期的大部分时间里，我们已经有了超过 200 条规则，而且数量还在持续增加。然而，我们不能一味地接受这些提出的规则，因为这些规则需要在一起能协同工作。因此，对于哪些规则可以成为 ESLint 核心的一部分，哪些规则更适合作为自定义的规则和插件，我们制定了一些准则。

**注意：** 从 2020 年起，我们只接受与 ECMAScript 新特性相关的规则。我们更希望新的规则能在插件中实现。

## 核心规则指南 {#core-rule-guidelines}

总体来说，ESLint 的核心规则必须是:

1. **适用广泛。** 我们发布的规则重点针对于大众的开发者，不支持小众的个人偏好。
1. **通用性。** 规则不能太具体，以至于用户难以理解何时使用它们。如果一条规则的作用需要两个以上的 “and” 来描述，那么它通常就太具体了(if a and b and c and d, then this rule warns)。
1. **原子性。** 规则必须完全独立运行。在一个规则中获知其他规则的状态是明令禁止的。
1. **唯一性。** 没有两条规则可以产生相同的警告。重叠的规则会让使用者混淆，而且我们也希望核心的 ESLint 规则不重叠。
1. **类库无关。** 规则必须完全基于 JavaScript 运行时环境，而不是特定的类库或框架。比如，核心规则不应该仅仅适用于 jQuery，但是我们会有一些规则仅仅适用于 Node.js（一种运行时）。
1. **无冲突。** 规则之间绝对不能有直接的冲突。例如，如果我们有一条要求分号的规则，我们就不能同时有一条不允许分号的规则（这就是为什么我们有一条 `semi` 规则，可以同时满足这两种需求）。

尽管这些准则是核心规则入选的正式标准，但每条规则都是根据自己的情况进行评估的。

## 提出一项规则 {#proposing-a-rule}

<<<<<<< HEAD
如果你想提议一条新规则，请查看如何 [创建一个合并请求（pull request）](/docs/developer-guide/contributing/pull-requests)，或通过填写 [新规则模板](https://github.com/eslint/eslint/issues/new?template=NEW_RULE.md) 提交一个 issue。
=======
If you want to propose a new rule, please see how to [create a pull request](/docs/developer-guide/contributing/pull-requests) or submit an issue by filling out a [new rule template](https://github.com/eslint/eslint/issues/new/choose).
>>>>>>> c3bf963020346898c7d13f516cd899e3a054f69e

我们需要所有这些信息来判断它是否满足核心规则的候选要求。

## 接受一个规则 {#accepting-a-rule}

为了使一条规则在 ESLint 核心中被接受，它必须：

1. 满足“核心规则指南“部分列出的所有标准
1. 有一个 ESLint 团队成员支持该规则的加入
1. 与过去 12 个月内达到第四阶段的 ECMAScript 特性有关。

请记住，我们有超过 200 条规则，这对最终用户和 ESLint 团队（维护者）来说都是不可思议的。因此，任何新的规则必须被认为非常有价值，才能被 ESLint 接受。

## 实现规则是你的责任 {#implementation-is-your-responsibility}

ESLint 团队不会去实现用户提议的新规则，因为我们人数有限，需要专注于整体路线图上。一旦一条规则被接受，你有责任实现它并且提供相应文档。你可以招募另一个人来帮助你实现该规则。支持该规则的 ESLint 团队成员是你的资源，可帮助指导你完成此过程的其余部分。

## 替代方案：创建自己的规则 {#alternative-creating-your-own-rules}

请记住，ESLint 是完全插件化的，这意味着你可以创建自己的规则，然后以插件的方式进行发布。我们之所以这么做是因为我们不想给所有可能的规则都设置一个门槛。即使这条规则不能成为为核心规则，那也并不意味着你不能拥有自己想要的规则。更多信息请参见 [working with rules](../working-with-rules) 和 [working with plugins](../working-with-plugins) 文档。