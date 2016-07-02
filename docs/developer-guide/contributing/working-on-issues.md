---
title: Working on Issues
layout: doc
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# Working on Issues

Our public [issues tracker](https://github.com/eslint/eslint/issues) lists all of the things we plan on doing as well as suggestions from the community. Before starting to work on an issue, be sure you read through the rest of this page.

我们公共的 [issues tracker](https://github.com/eslint/eslint/issues) 列出了所有我们计划做的事情以及社区的建议。开始在议题（issue）上工作之前，确保你已经阅读了这个页面的其余部分。

## Issue Labels

We use labels to indicate the status of issues. The most important labels are:

我们使用标签来表示议题（issue）的状态。最重要的标签是：

1. [`triage`](https://github.com/eslint/eslint/issues?labels=triage&milestone=&page=1&state=open) - When an issue is first submitted, it is labeled as `triage`, which means the ESLint team needs to investigate and determine if the request is a bug report, a feature request, or something else. It's best not to work on tickets marked as `triage`, because we're not yet sure if we will accept the issue to work on.
1. [`triage`](https://github.com/eslint/eslint/issues?labels=triage&milestone=&page=1&state=open) - 当这个议题（issue）是第一次被提交时，会被标记为 `triage`，这意味着ESLint团队需要审查和确定该请求是否是一个bug报告，一个特性请求还是其它。最好不要在标记为 `triage` 的标签上工作，因为我们不确认我们是否将接受这个议题（issue）。
1. [`accepted`](https://github.com/eslint/eslint/issues?labels=accepted&milestone=&page=1&state=open) - Once an issue has been properly triaged and the team decides it must be addressed, someone will assign the `accepted` label to an issue. When an issue is accepted, anyone is free to work on it.
1. [`accepted`](https://github.com/eslint/eslint/issues?labels=accepted&milestone=&page=1&state=open) - 一旦一个议题（issue）被正确地鉴别分类并且团队决定必须解决它，有人将会把该议题（issue）打上 `accepted` 标签。当一个议题被接受后，任何人都可以解决它。
1. [`bug`](https://github.com/eslint/eslint/issues?labels=bug&milestone=&page=1&state=open) - Indicates that the issue is reporting a problem. When submitting a pull request to work on this type of issue, be sure to prefix the commit message with "Fix:".
1. [`bug`](https://github.com/eslint/eslint/issues?labels=bug&milestone=&page=1&state=open) - 表明该议题（issue）是在报告一个问题。当提交一个合并请求（pull request）来处理这个类型的议题时，确保在提交的消息加上前缀 "Fix:"。
1. [`feature`](https://github.com/eslint/eslint/issues?labels=feature&milestone=&page=1&state=open) - Indicates that the issue is requesting a new feature. Features are functionality that doesn't already exist in the project. When submitting a pull request to work on this type of issue, be sure to prefix the commit message with "New:".
1. [`feature`](https://github.com/eslint/eslint/issues?labels=feature&milestone=&page=1&state=open) - 表明该议题（issue）是在请求一个新特性。该特性是项目中没有的功能。当提交一个合并请求来处理这个类型的议题（issue）时，确保在提交的消息加上前缀 "New:"。
1. [`enhancement`](https://github.com/eslint/eslint/issues?labels=enhancement&milestone=&page=1&state=open) - Indicates that the issue is requesting a change to existing functionality. When submitting a pull request to work on this type of issue, be sure to prefix the commit message with "Update:".
1. [`enhancement`](https://github.com/eslint/eslint/issues?labels=enhancement&milestone=&page=1&state=open) - 表明该议题（issue）是在请求对现有功能的一个改变。当提交一个合并请求来处理这个类型的问议题（issue）时，确保在提交的消息加上前缀"Update:"。
1. [`beginner`](https://github.com/eslint/eslint/issues?labels=beginner&milestone=&page=1&state=open) - Indicates that the issue is simple enough that it would be a good first contribution for a new contributor. If you're looking to get started helping out with ESLint, take a look at the beginner issues.
1. [`beginner`](https://github.com/eslint/eslint/issues?labels=beginner&milestone=&page=1&state=open) - 表明这个议题（issue）是很简单，对新的贡献者而言，它是一个很好的开始。如果你想参与到ESLint，看看新手议题（issues）吧。
1. [`help wanted`](https://github.com/eslint/eslint/issues?labels=help%20wanted&milestone=&page=1&state=open) - Indicates that the core team won't be working on this issue, however, we will accept pull requests from contributors. This basically means the issue isn't on the formal roadmap but it will be accepted if a contributor wants to implement it.
1. [`help wanted`](https://github.com/eslint/eslint/issues?labels=help%20wanted&milestone=&page=1&state=open) - 表明核心团队不会在此议题（issue）上工作，然而，我们仍然会接受贡献者的的合并请求（pull requests）。这基本上意味着，这个议题（issue）不在正式的路线图上，如果某个贡献者想实现它，它将被接受。

## Bounty Issues

We accept and assign issue bounties using [BountySource](https://www.bountysource.com/teams/eslint/issues).

我们使用[BountySource](https://www.bountysource.com/teams/eslint/issues)接受和分配议题（issue）赏金。

## Issue Priority

Because we have a lot of issues, we prioritize certain issues above others. The following is the list of priorities, from highest to lowest:

因为我们有很多议题（issue），我们优先考虑某些议题（issue）。以下是优先级列表，从高到低：

1. **Bugs** - problems with the project are actively affecting users. We want to get these resolved as quickly as possible.
1. **Bugs** - 项目中的问题已经影响到了他人。我们想让这些问题尽可能快地得到解决。
1. **Documentation** - documentation issues are a type of bug in that they actively affect current users. As such, we want to address documentation issues as quickly as possible.
1. **Documentation** - 文档议题（issues）是一种bug，它们影响到了当前用户。因此，我们想尽可能快地解决文档议题。
1. **Features** - new functionality that will aid users in the future.
1. **Features** - 在将来能帮助用户的新功能。
1. **Enhancements** - requested improvements for existing functionality.
1. **Enhancements** - 要求改进现有功能。
1. **Other** - anything else.
1. **Other** - 其他。

## Starting Work

If you're going to work on an issue, please add a comment to that issue saying so and indicating when you think you will complete it. It will help us to avoid duplication of effort. Some examples of good comments are:

如果你将在一个议题（issue）上工作，请给该议题（issue）添加一个评论说明你认为在何时将完成它。它将帮助我们避免重复的工作。一些好的评论的例子如下：

* "I'll take a look at this over the weekend."
* "I'm going to do this, give me two weeks."
* "Working on this" (as in, I'm working on it right now)

If an issue has already been claimed by someone, please be respectful of that person's desire to complete the work and don't work on it unless you verify that they are no longer interested.

如果一个议题（issue）已被认领，请尊重他想完成这项工作的愿望，不要在上面工作，除非你确定他们已经不再感兴趣了。

If you find you can't finish the work, then simply add a comment letting people know, for example:

如果你发现你不能完成这项工作，简单地添加一条评论让人们知道，例如:

* "Sorry, it looks like I don't have time to do this."
* "I thought I knew enough to fix this, but it turns out I don't."

No one will blame you for backing out of an issue if you are unable to complete it. We just want to keep the process moving along as efficiently as possible.

如果你不能完成某个议题（issue），没有人会责怪你退出。我们只是想尽可能高效地保持进度。
