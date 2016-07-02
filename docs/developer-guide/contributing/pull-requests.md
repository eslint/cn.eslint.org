---
title: Pull Requests
layout: doc
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# Pull Requests

If you want to contribute to an ESLint repo, please use a GitHub pull request. This is the fastest way for us to evaluate your code and to merge it into the code base. Please don't file an issue with snippets of code. Doing so means that we need to manually merge the changes in and update any appropriate tests. That decreases the likelihood that your code is going to get included in a timely manner. Please use pull requests.

如果你想要贡献代码到 ESLint 仓库，请使用 GitHub 发出一个合并请求（pull request）。这是我们评估你的代码并把它合并到代码库中的最快的方法。请不要提出一个包含代码片段的议题（issue）。这样做的话意味着我们需要手动地合并这些修改和更新对应的测试用例。它会降低你的代码及时地被合并的可能性。请使用合并请求（pull request）。

## Getting Started

If you'd like to work on a pull request and you've never submitted code before, follow these steps:

如果你想要使用合并请求（pull request），但是你之前从来没有提交过代码，请遵循以下步骤：

1. Sign our [Contributor License Agreement](https://contribute.jquery.org/cla).
1. 签署我们的 [贡献者许可协议（Contributor License Agreement）](https://contribute.jquery.org/cla)。
1. Set up a [development environment](../development-environment).
1. 搭建[开发环境](../development-environment)。
1. Ensure there's an issue that describes what you're doing. You can create a new issue or just indicate you're [working on an existing issue](working-on-issues).
1. 确保有一个议题（issue）描述你正在做的事情。你可以新建一个议题（issue）或者表明你正[working on an existing issue](working-on-issues)。
  * Exception: documentation-only changes do not require an issue.
  * 例外: 文档的修改不要求有议题（issue）。


After that, you're ready to start working on code.

在这之后，你可以开始操作代码了。

## Working with Code

The process of submitting a pull request is fairly straightforward and generally follows the same pattern each time:

提交一个合并请求（pull request）的过程相当简单，一般每次都遵循相同的模式：

1. [Create a new branch](#step1)
1. [新建一个分支](#step1)
2. [Make your changes](#step2)
2. [做出自己的修改](#step2)
3. [Rebase onto upstream](#step3)
3. [变基（rebase) 到上游（upstream）](#step3)
4. [Run the tests](#step4)
4. [运行测试](#step4)
5. [Squash your commits](#step5)
5. [压缩（squash）你的提交](#step5)
6. [Double check your submission](#step6)
6. [仔细检查你的提交](#step6)
7. [Submit the pull request](#step7)
7. [提交这个合并请求（pull request）](#step7)


Details about each step are found below.

有关每个步骤的详细信息请参看下文。

### Step 1: Create a new branch<a name="step1"></a>

The first step to sending a pull request is to create a new branch in your ESLint fork. Give the branch a descriptive name that describes what it is you're fixing, such as:

发起一个合并请求（pull request）的第一步是，在你 fork 的 ESLint 中新建一个分支。给这个分支起一个描述性的名字用来描述你在修复什么，比如：

```
$ git checkout -b issue1234
```

You should do all of your development for the issue in this branch.

在这个分支中，你所有的开发工作都应该是关于这个议题（issue）的。

**Note:** Do not combine fixes for multiple issues into one branch. Use a separate branch for each issue you're working on.

**注意：**请不要把多个议题（issue）的修改合并到一个分支上。针对每个议题（issue）使用一个独立的分支。


### Step 2: Make your changes<a name="step2"></a>

Make the changes to the code and tests, following the [code conventions](../code-conventions) as you go. Once you have finished, commit the changes to your branch:

对代码和测试用例进行修改，请遵循[编码规范](../code-conventions)。完成之后，将这些修改提交到你的分支：

```
$ git add -A
$ git commit
```

Our commit message format is as follows:

我们提交的信息格式如下：

```
Tag: Short description (fixes #1234)

Longer description here if necessary
```

The first line of the commit message (the summary) must have a specific format. This format is checked by our build tools.

提交的信息（摘要）的第一行必须遵循特定的格式。我们构建工具将会对此进行检查。

The `Tag` is one of the following:

`Tag` 是下列之一:

* `Fix` - for a bug fix.
* `Fix` - 针对一个 bug 的修复。
* `Update` - for a backwards-compatible enhancement or a change to a rule that increases the number of reported problems.
* `Update` - 用于向后兼容的增强 或 a change to a rule that increases the number of reported problems.
* `New` - implemented a new feature.
* `New` - 实现一个新特性。
* `Breaking` - for a backwards-incompatible enhancement or feature.
* `Breaking` - 用于非向后兼容的功能增强或新特性。
* `Docs` - changes to documentation only.
* `Docs` - 只修改了文档。
* `Build` - changes to build process only.
* `Build` - 只包含构建过程的修改。
* `Upgrade` - for a dependency upgrade.
* `Upgrade` - 为依赖升级。
* `Chore` - for refactoring, adding tests, etc. (anything that isn't user-facing).
* `Chore` - for refactoring, adding tests, etc. (anything that isn't user-facing).

Use the [labels of the issue you are working on](working-on-issues#issue-labels) to determine the best tag.

参考[issue labels](working-on-issues#issue-labels) 选定最合适的标签.

The message summary should be a one-sentence description of the change, and it must be 72 characters in length or shorter. The issue number should be mentioned at the end. If the commit doesn't completely fix the issue, then use `(refs #1234)` instead of `(fixes #1234)`.

描述变更的摘要信息应该是一句话，并且它不能超过72个字符。议题（issue）编号应该展示在最后。如果提交的变更没能彻底修复问题，请使用`(refs #1234)`而不是 `(fixes #1234)`。

Here are some good commit message summary examples:

这里有几个比较好的提交信息摘要的例子：

```
Build: Update Travis to only test Node 0.10 (refs #734)
Fix: Semi rule incorrectly flagging extra semicolon (fixes #840)
Upgrade: Esprima to 1.2, switch to using Esprima comment attachment (fixes #730)
```

The commit message format is important because these messages are used to create a changelog for each release. The tag and issue number help to create more consistent and useful changelogs.

提交信息的格式是重要的，因为每次发版时要用这些信息生成更新日志。标签和议题（issue）的编号有助于生成一致的和有用的更新日志。

### Step 3: Rebase onto upstream<a name="step3"></a>

Before you send the pull request, be sure to rebase onto the upstream source. This ensures your code is running on the latest available code.

在你提交合并请求（pull request）之前，一定要变基（rebase) 到上游（upstream）源头。这将确保你的代码运行在最新的可用代码之上。

```
git fetch upstream
git rebase upstream/master
```

### Step 4: Run the tests<a name="step4"></a>

After rebasing, be sure to run all of the tests once again to make sure nothing broke:

变基（rebase) 过后, 务必再次运行测试来确保没有什么问题了。

```
npm test
```

### Step 5: Squash your commits<a name="step5"></a>

ESLint requires just one commit per pull request. If you have used multiple commits, be sure to [squash](http://gitready.com/advanced/2009/02/10/squashing-commits-with-rebase.html) your commits.

ESLint 要求每个合并请求（pull request）只包含一次提交。如果你多次提交，一定要[压缩（squash）](http://gitready.com/advanced/2009/02/10/squashing-commits-with-rebase.html)你的提交。

### Step 6: Double check your submission<a name="step6"></a>

With your code ready to go, this is a good time to double-check your submission to make sure it follows our conventions. Here are the things to check:

在你准备提交代码之前，请仔细检查你的提交是否遵循我们的约定。下面是一些要检查的事情：

* Run `npm run check-commit` to double-check that your commit is formatted correctly.
* 运行 `npm run check-commit` 命令来再次检查你的提交格式是否正确。
* Make sure there is an issue for any pull request you send.
* 确保你发出的合并请求（pull request）有一个对应的议题（issue）。
    * The only exception is for documentation changes.
    * 唯一的例外是文档的修改，不需要有一个议题（issue）。
* The pull request must have a description. The description should explain what you did and how its effects can be seen.
* 合并请求（pull request）必须包含一个描述。 这个描述应该解释你做了什么和怎样显示它的效果。
* The commit message is properly formatted.
* 提交信息必须正确地格式化。
* The change introduces no functional regression. Be sure to run `npm test` to verify your changes before submitting a pull request.
* 这个变更不会引发功能回退。请确保在提交合并请求（pull request）之前运行 `npm test` 来验证你的变更。
* Make separate pull requests for unrelated changes. Large pull requests with multiple unrelated changes may be closed without merging.
* 不相干的变更使用不同的合并请求（pull request）。包含多个不相干修改的合并请求（pull request）可能会被直接关闭而不合并。
* All changes must be accompanied by tests, even if the feature you're working on previously had no tests.
* 所有的变更必须附有测试，即使你正在使用的功能在之前也并没有测试。
* All user-facing changes must be accompanied by appropriate documentation.
* 面向用户的所有变更必须附有相应的文档。
* Only *one commit* is allowed per pull request. If you have multiple commits, you'll be asked to squash them.
* 每个合并请求（pull request）只能包含一个 *one commit*。如果有多个提交，你会被要求压缩它们。
* Follow the [Code Conventions](../code-conventions.html).
* 遵循[代码规范（Code Conventions）](../code-conventions.html)。

### Step 7: Send the pull request<a name="step7"></a>

Now you're ready to send the pull request. Go to your ESLint fork and then follow the [GitHub documentation](https://help.github.com/articles/creating-a-pull-request) on how to send a pull request.

现在你已经准备好发合并请求（pull request）了。到你fork的 ESLint, 按照[GitHub 文档](https://help.github.com/articles/creating-a-pull-request) 文档中如何发出一个合并请求（pull request）去做。

## Following Up

Once your pull request is sent, it's time for the team to review it. As such, please make sure to:

一旦你已发出合并请求（pull request），我们团队会检查它。因此，请确保：

1. Monitor the status of the Travis CI build for your pull request. If it fails, please investigate why. We cannot merge pull requests that fail Travis for any reason.
1. 监控Travis CI针对你的合并请求（pull request） 的构建状态。如果它失败了，请调查一下原因。我们不会合并因为任何原因导致 Travis 失败的合并请求（pull request）。
1. Respond to comments left on the pull request from team members. Remember, we want to help you land your code, so please be receptive to our feedback.
1. 回复小组成员关于这个合并请求（pull request）的评论 。记住, 我们想要帮助你使你的代码落地， 所以请接受我们的反馈。
1. We may ask you to make changes, rebase, or squash your commits.
1. 我们可能会要求你做出修改，变基（rebase），或是压缩（squash）你的提交。

### Updating the Commit Message

If your commit message is in the incorrect format, you'll be asked to update it. You can do so via:

如果你提交的信息格式不正确，你将会被要求更新它。你可以这样做:

```
$ git commit --amend
```

This will open up your editor so you can make changes. After that, you'll need to do a forced push to your branch:

这样会打开你的编辑器然后你可以做些修改。之后，你需要强制推送到你的分支。

```
$ git push origin issue1234 -f
```

### Updating the Code

If we ask you to make code changes, there's no need to close the pull request and create a new one. Just go back to the branch on your fork and make your changes. Then, when you're ready, you can add your changes into the branch:

如果我们要求你做出代码变更，不需要关闭这个合并请求（pull request）再去创建一个新的。只要回到你的fork 上的分支，做出你的修改。然后，当你准备好了，你可以添加你的修改到这个分支：

```
$ git add -A
$ git commit --amend --no-edit
$ git push origin issue1234 -f
```

This snippets adds all your new changes, then amends the previous commit with them. The `--no-edit` means you don't want to edit the commit message; you can omit that option if you need to make commit message changes as well.

这段代码中增加了你所有的新的变化，然后会修改之前的提交。这个 `--no-edit` 表示你不想修改提交信息；如果你需要修改提交信息，你可以省略这个选项。


### Rebasing

If your code is out-of-date, we might ask you to rebase. That means we want you to apply your changes on top of the latest upstream code. You can do so via:

如果你的代码过时了，我们也许会要求你变基（rebase）。 它意味着我们希望你把自己的变更应用到最新的上游（upstream）代码中。你可以这样做：

```
$ git fetch upstream
$ git rebase upstream/master
```

You might find that there are merge conflicts when you attempt to rebase. Please [resolve the conflicts](https://help.github.com/articles/resolving-merge-conflicts-after-a-git-rebase/) and then do a forced push to your branch:

当你试图rebase的时候，你可能会遇到合并冲突。请[解决冲突（resolve the conflicts）](https://help.github.com/articles/resolving-merge-conflicts-after-a-git-rebase/) 接着强制推送到你的分支：

```
$ git push origin issue1234 -f
```

### Squashing

If you have more than one commit on your pull request, we'll ask you to [squash your commits](http://gitready.com/advanced/2009/02/10/squashing-commits-with-rebase.html). Once your commits are squashed, you can do a forced push to update your branch:

如果你的合并请求（pull request）中包含多次提交，我们会要求你 [压缩提交（squash your commits）](http://gitready.com/advanced/2009/02/10/squashing-commits-with-rebase.html)。一旦你的提交压缩以后，你可以做一个强制推送来更新你的分支：

```
$ git push origin issue1234 -f
```
