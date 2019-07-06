---
title: New Rules
layout: doc
edit_link: https://github.com/eslint/eslint/edit/master/docs/developer-guide/contributing/new-rules.md

---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# New Rules

ESLint is all about rules. For most of the project's lifetime, we've had over 200 rules, and that list continues to grow. However, we can't just accept any proposed rule because all rules need to work cohesively together. As such, we have some guidelines around which rules can be part of the ESLint core and which are better off as custom rules and plugins.

ESLint 的核心就是规则。在该项目的生命周期的大部分时间里，我们已经创建了超过100条规则，而且数量还在持续增加。然而，我们不能一味地接受这些提出的规则，我们需要这些规则在一起能协同工作。因此，对于哪些规则可以成为 ESLint 核心的一部分，哪些规则更适合作为自定义的规则和插件，我们制定了一些准则。

**Note:** As of 2016, we accept only rules that are deemed extremely important for inclusion. We prefer that new rules be implemented in plugins.

**注意：**在2016年，我们只接受被认为是极其重要的规则。我们希望新的规则以插件的形式实现的。

## Core Rule Guidelines

In general, ESLint core rules must be:

一般而言，ESLint 核心规则必须是：

1. **Widely applicable.** The rules we distribute need to be of importance to a large number of developers. Individual preferences for uncommon patterns are not supported.
1. **适用广泛。** 我们发布的规则重点针对于大众的开发者，不支持小众的个人偏好。
1. **Generic.** Rules cannot be so specific that users will have trouble understanding when to use them. A rule is typically too specific if describing what it does requires more than two "and"s (if a and b and c and d, then this rule warns).
1. **通用性。** 规则不能太具体而导致用户使用过程中产生误解。如果一条规则需要两个以上的“and”来描述，那么它通常就是太具体了(if a and b and c and d, then this rule warns)。
1. **Atomic.** Rules must function completely on their own. Rules are expressly forbidden from knowing about the state or presence of other rules.
1. **原子性** 规则必须能独自运行。在一个规则中获知其他规则的状态是明令禁止的。
1. **Unique.** No two rules can produce the same warning. Overlapping rules confuse end users and there is an expectation that core ESLint rules do not overlap.
1. **唯一性。** 没有两条规则可以产生相同的警告。重叠的规则会混淆使用者而且我们也希望核心的 ESLint 规则不重叠。
1. **Library agnostic.** Rules must be based solely on JavaScript runtime environments and not on specific libraries or frameworks. For example, core rules shouldn't only apply if you're using jQuery but we may have some rules that apply only if you're using Node.js (a runtime).
1. **类库无关。**  规则必须完全基于 JavaScript 运行时环境，而不是特定的类库或者框架。比如，核心规则不应该仅仅适用于 jQuery ，然而我们可能有一些规则仅仅适用于 Node.js。
1. **No conflicts.** No rule must directly conflict with another rule. For example, if we have a rule requiring semicolons, we cannot also have a rule disallowing semicolons (which is why we have one rule, `semi`, that does both).
1. **无冲突。** 规则之间绝对不能有直接的冲突。举个例子，如果我们有一个规则要求分号，我们就不会有另外一个规则禁用分号（这就是为什么我们有一个 `semi` 规则，可以同时满足这两种需求）。

Even though these are the formal criteria for inclusion, each rule is evaluated on its own basis.

尽管这些准则是核心规则入选的正式标准，each rule is evaluated on its own basis。

## Proposing a Rule

If you want to propose a new rule, please see how to [create a pull request](/docs/developer-guide/contributing/pull-requests) or submit an issue by filling out a [new rule template](https://github.com/eslint/eslint/issues/new?template=NEW_RULE.md).


如果你想提议一条新规则，请查看如何 [创建一个合并请求（pull request）](/docs/developer-guide/contributing/pull-requests)，或通过填写[新规则模板](https://github.com/eslint/eslint/blob/master/templates/rule-proposal.md)提交一个 issue。

We need all of this information in order to determine whether or not the rule is a good core rule candidate.

我们需要所有这些信息来判断它是否满足核心规则的候选要求。
 
## Accepting a Rule

In order for a rule to be accepted in the ESLint core, it must:

为了让一个规则被 ESLint 核心接受，它必须：

1. Fulfill all the criteria listed in the "Core Rule Guidelines" section
1. 满足 "Core Rule Guidelines" 章节列出的所有标准
1. Have an ESLint team member champion inclusion of the rule
1. 规则的内容得到一位 ESLint 团队成员的用户
1. Be very important for ESLint users because it either catches a serious problem or allows styling of code in accordance with a popular style guide
1. 对 ESLint 用户非常重要，因为它捕捉了一个非常严重的问题或允许代码与一个流行的风格指南保持风格上一致

Keep in mind that we have over 200 rules, and that is daunting both for end users and the ESLint team (who has to maintain them). As such, any new rules must be deemed of high importance to be considered for inclusion in ESLint.

我们有超过 200 条规则，对 ESLint 用户和 团队（维护者）来说都是不可思议的。因此，任何新的规则必须被认为为非常有价值，才能被 ESLint 接受。

## Implementation is Your Responsibility

The ESLint team doesn't implement new rules that are suggested by users because we have a limited number of people and need to focus on the overall roadmap. Once a rule is accepted, you are responsible for implementing and documenting the rule. You may, alternately, recruit another person to help you implement the rule. The ESLint team member who championed the rule is your resource to help guide you through the rest of this process.

ESLint 团队不会去实现用户提议的新规则，因为我们人数有限，需要集中精力在整体路线图上。一旦一条规则被接受，你有责任实现它并且提供相应文档。你可能会招募另一个人来帮你实现这条规则。ESLint 团队中支持这条规则的成员将指引你完成这一过程的其余部分。

## Alternative: Creating Your Own Rules

Remember that ESLint is completely pluggable, which means you can create your own rules and distribute them using plugins. We did this on purpose because we don't want to be the gatekeepers for all possible rules. Even if we don't accept a rule into the core, that doesn't mean you can't have the exact rule that you want. See the [working with rules](../working-with-rules) and [working with plugins](../working-with-plugins) documentation for more information.

ESLint 是完全插件化的，这意味着你可以创建自己的规则，然后以插件的方式进行发布。我们之所以这么做是因为我们不想给所有可能的规则都设置一个门槛。即使这条规则不能成为为核心规则，那也并不意味着你不能拥有自己想要的规则。你可以从 [working with rules](../working-with-rules) 和 [working with plugins](../working-with-plugins) 的文档中查看更多相关信息。
