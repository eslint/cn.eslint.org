---
title: Working on Issues
layout: doc
edit_link: https://github.com/eslint/eslint/edit/master/docs/developer-guide/contributing/working-on-issues.md

---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# Working on Issues

Our public [issues tracker](https://github.com/eslint/eslint/issues) lists all of the things we plan on doing as well as suggestions from the community. Before starting to work on an issue, be sure you read through the rest of this page.

我们公共的 [issues tracker](https://github.com/eslint/eslint/issues) 列出了我们计划做的所有事情以及社区的建议。开始处理某个 issue 之前，请务必通读这一页的其余部分。

## Issue Labels

We use labels to indicate the status of issues. The most complete documentation on the labels is found in the [Maintainer Guide](https://eslint.org/docs/maintainer-guide/issues.html#when-an-issue-is-opened), but most contributors should find the information on this page sufficient. The most important questions that labels can help you, as a contributor, answer are:

我们使用标签来表示 issue 的状态。标签的最完整文档可以在 [Maintainer Guide](https://eslint.org/docs/maintainer-guide/issues.html#when-an-issue-is-opened) 找到，对于大多数贡献者来说，本页的信息已经足够了。最为贡献者，标签可以帮助你回答的最重要的问题是：

1. Is this issue available for me to work on? If you have little or no experience contributing to ESLint, the [`good first issue`](https://github.com/eslint/eslint/labels/good%20first%20issue) label marks appropriate issues. Otherwise, the [`help wanted`](https://github.com/eslint/eslint/labels/help%20wanted) label is an invitation to work on the issue. If you have more experience, you can try working on other issues labeled [`accepted`](https://github.com/eslint/eslint/labels/accepted). Conversely, issues not yet ready to work on are labeled `triage`, `evaluating`, and/or `needs bikeshedding`, and issues that cannot currently be worked on because of something else, such as a bug in a dependency, are labeled `blocked`.
1. 这个 issue 我能解决吗？如果你 ESLint 贡献很少或没有经验，带有[`good first issue`](https://github.com/eslint/eslint/labels/good%20first%20issue) 标签的 issue 比较适合你。另外，[`help wanted`](https://github.com/eslint/eslint/labels/help%20wanted) 标签是要求你来解决此 issue。如果你有更多的经验，你可以尝试解决带有 [`accepted`](https://github.com/eslint/eslint/labels/accepted) 标签的 issue。与此相反，尚未准备好的 issue 被标记为 `triage`，`evaluating` 和/或 `needs bikeshedding`，而由于其他原因（比如依赖项中的一个 bug）当前无法处理的，被标记为 `blocked`。
1. What is this issue about? Labels describing the nature of issues include `bug`, `enhancement`, `feature`, `question`, `rule`, `documentation`, `core`, `build`, `cli`, `infrastructure`, `breaking`, and `chore`. These are documented in the [Maintainer Guide](https://eslint.org/docs/maintainer-guide/issues.html#types-of-issues).
1. 这个 issue 是关于什么的？标签用来描述 issue 的本质，包括 `bug`，`enhancement`，`feature`，`question`，`rule`，`documentation`，`core`，`build`，`cli`，`infrastructure`，`breaking` 和 `chore`。这些标签在 [Maintainer Guide](https://eslint.org/docs/maintainer-guide/issues.html#types-of-issues) 中有详细介绍。


1. What is the priority of this issue? Because we have a lot of issues, we prioritize certain issues above others. The following is the list of priorities, from highest to lowest:

1. 一个 issue 的优先级是什么？因为我们有很多 issue，我们优先考虑某些 issue。以下是优先级列表，从高到低：

    1. **Bugs** - problems with the project are actively affecting users. We want to get these resolved as quickly as possible.
    1. **Bugs** - 项目中的问题已经影响到了他人。我们想让这些 issue 尽可能快地得到解决。
    1. **Documentation** - documentation issues are a type of bug in that they actively affect current users. As such, we want to address documentation issues as quickly as possible.
    1. **Documentation** - 文档 issue 是一种直接影响当前用的bug。因此，我们想尽可能快地解决文档 issue。
    1. **Features** - new functionality that will aid users in the future.
    1. **Features** - 在将来能帮助用户的新功能。
    1. **Enhancements** - requested improvements for existing functionality.
    1. **Enhancements** - 要求改进现有功能。
    1. **Other** - anything else.
    1. **Other** - 其他。

Some issues have had monetary rewards attached to them. Those are labeled `bounty`. Bounties are assigned via [BountySource](https://www.bountysource.com/teams/eslint/issues).

有些 issue 还附带的金钱奖励。这些 issue 被标记为 `bounty`。奖金通过 [BountySource](https://www.bountysource.com/teams/eslint/issues) 分配。
    

## Starting Work

If you're going to work on an issue, please add a comment to that issue saying so and indicating when you think you will complete it. It will help us to avoid duplication of effort. Some examples of good comments are:

如果你要处理一个 issue，请给该 issue 添加一个评论说明你认为在何时将完成它。它将帮助我们避免重复的工作。一些好的评论的例子如下：

* "I'll take a look at this over the weekend."
* "I'll take a look at this over the weekend."
* "I'm going to do this, give me two weeks."
* "I'm going to do this, give me two weeks."
* "Working on this" (as in, I'm working on it right now)
* "Working on this" (as in, I'm working on it right now)

If an issue has already been claimed by someone, please be respectful of that person's desire to complete the work and don't work on it unless you verify that they are no longer interested.

如果一个 issue 已被认领，请尊重他想完成这项工作的愿望，除非你确定他们已经不再感兴趣了，否则不要处理它。

If you find you can't finish the work, then simply add a comment letting people know, for example:

如果你发现你不能完成这项工作，简单地添加一条评论让人们知道，例如:

* "Sorry, it looks like I don't have time to do this."
* "Sorry, it looks like I don't have time to do this."
* "I thought I knew enough to fix this, but it turns out I don't."
* "I thought I knew enough to fix this, but it turns out I don't."

No one will blame you for backing out of an issue if you are unable to complete it. We just want to keep the process moving along as efficiently as possible.

如果你不能完成某个 issue，没有人会因为你的退出而责备你。我们只是想让这个过程尽可能高效地进行下去。
