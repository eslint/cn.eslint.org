---
title: Rule auto-fixing
layout: issue
---

# [Auto fixing](https://github.com/eslint/eslint/issues/5329)

# [自动修复](https://github.com/eslint/eslint/issues/5329)

There have been a few issues recently with people asking to add more autofixing. This is definitely something we want to address, but we can't do it with the way autofixing works right now. This (unfortunately long) issue is meant to outline what we currently have, its limitations, and start towards thinking about how to fix autofix so we can use autofix in as many places as possible.

最近有一些要求增加更多自动修复的issue。自动修复我们肯定是要做的，但不是现在。在此，大概描述一下现阶段的情况，它的局限性，以及关于自动修复的一些思考，以便使我们在尽可能多的地方使用自动修复。

### Intro

### 介绍
---
When ESLint first implemented autofixing, our belief was that it was primarily useful for making small changes, mostly whitespace and anything that could be contained within a single token. Most of the complaints people had about ESLint rules was that they hated going through and fixing alignment or adding/removing semicolons but loved the error catches. So naturally, I thought if we could get the whitespace and other small autofixes in, that would make people happy. It did, it's just that then we started getting requests to autofix more rules and we realized that the current system doesn't scale well.

ESLint最初实现自动修复时，我们的信念就是，它主要用于一些小的改变，主要是空白和单一的token。人们对于ESLint规则的大部分抱怨是他们讨厌经历和修复对齐或增删分号，但是喜欢错误的捕获。所以，我想过我们是否要把空白和其他小的自动修复添加进来，满足大家。我们已经做了，也就是那时起，我们开始收到对更多规则自动修复的请求，我们也意识到，现在的系统可扩展性并不是很好。

### How it Works Today

### 自动修复是如何工作的
---

Today's autofix is based on text and is latched onto how ESLint has always worked:

自动修复是基于文本的，而且强烈依赖于ESLint的工作机制:

1. ESLint makes a single traversal through the AST of the file.

1. ESLint 通过文件的AST只做一次遍历。

2. Rules listen for different nodes and evaluate the AST as it goes, producing messages when it finds something wrong.

2. 遍历过程中，这些规则监听不同的节点和评估当前的AST，当发现错误时，就产出消息。

3. Rules can optionally specify a way to fix each message it reports. The fix is indicated by range offsets (the same as used in the range object on AST nodes). This fix is not guaranteed to be applied and will not even be attempted until after the complete traversal is finished.

3. 每条规则可以指定一种方式去进行修复。使用范围偏移表示要修复的位置（这和AST节点中rang对象的用法一样）。在遍历完成之前，并不能保证修复程序被调用，也不会尝试这么做。

4. After the traversal is complete, all of the proposed fixes are sorted in descending order of range location. So a fix at location 10 comes before a fix at 5.

4. 遍历完成之后，所有的修复根据rang的位置降序排列。所以处于位置10的修复比在位置5的修复要先行调用。

5. The fixer attempts to apply the fixes in this order. If two fixes overlap in range, then only the first is applied. This continues until all potential fixes have been processed.

5. 修复程序尝试使用这种顺序来进行修复。如果两个修复的范围发生重叠，那么只有第一个会被应用。这会一直持续下去，直到其他潜在的修复被处理。

6. If a fix is applied, then that message is removed from the lint results of the file.

6. 如果一个修复被应用，那么它产生的消息会从该文件的lint的结果中删除。

7. The remaining lint results are presented to the user.

7. 剩下的lint结果将展现给用户。

Because of the single traversal, we can't apply the fixes as we go because it would affect other rules as it goes. For instance, if we changed a let to a const, that then pushes the ranges of everything in the tree by two, so when does that calculation happen? Also, each rule is triggered multiple times at different nodes, and many of the rules try to track things in between those triggers - the built-in assumption is that the tree looks the same as the first time the rule is triggered.

由于只会遍历一次，我们无法随意地进行修复，因为那些会影响到其他规则。比如，如果我们将let声明的变量改为了一个常量，然后将树中的所有范围记录两次，那么，什么时候进行计算呢？同时，每个规则在不同的节点上被多次触发，很多规则试图定位这些触发器之间的事情 -- 假定这颗树看起来和这条规则第一次被触发一样。

### Problems

### 存在的问题
---

Due the single traversal mode, we have several problems:

由于只遍历一次，会存在如下问题：

1. It's possible that not all fixes will be applied.

1. 有可能所有的修复都不会被应用

2. It's possible for a fix to be applied that violates a different rule. For instance, one rule could insert a comma while another requires a space after a comma. The rule requiring the space has no idea that a new comma was added because it's done after the rule has already executed.

2. 有可能某个被应用的修复违反其他规则。例如，一个规则能插入逗号，然而另一个规则要求逗号后面有空格。要求有空格的规则并不知道一个新的逗号被加了进来，因为在规则执行后它就结束了。

3. It's possible for a fix to change scope evaluation. For instance, changing var to const has implications based on the functions or block statements using it. That can invalidate a whole host of rules because scope calculations are done once, before the traversal.

3. 修复的可能变化范围的评估。例如,改变var const影响基于函数或语句块的使用它。可以无效的一整套规则因为范围计算做了一次,在遍历。

4. It's possible for a fix to introduce an error into the program by changing the meaning of the code.

5. 一个修复，如果改变了代码的含义，很有可能导致程序出错。

As a result of these problems, we decided to limit what we'd allow as fixes in core rules to whitespace and other small changes. Semicolons were a big pain point, so even though they aren't whitespace, we determined the value of fixing these was high enough to be worth any potential other problems. The same with string literals. We actually removed autofixing for === after we realized it would change the meaning of the condition and cause a runtime error. We then decided that any new autofixes would just be whitespace to avoid any other complications.

鉴于这些问题的存在，我们决定把我们曾经限制修复核心规则，扩大到空白和其他小的改变。分号是最大的一个痛点，所以即使它们不是空白，相比于其他潜在的问题，我们确定修复分号具有更高优先级。字符串文本也一样。在我们意识到它可能会改变条件的含义和导致运行时错误之后，我们实际上已经移除了对 === 的自动修复。所以，我们决定任何新的自动修复只针对空白，以避免造成其他问题。

### Where I Went Wrong

### 我哪里错了
---

Looking back, I think I made several design decisions that were incorrect. These are the things I think I got wrong (and I use "I" here since I came up with the design):

回顾过去，我认为我做的一些设计上的决策是不正确的。以下是我认为我做错的地方（在这里我是用“I”, 是因为这种设计只涉及到我自己）：

1. Autofix mode should just do fixes and not worry about unfixable rules. Right now it acts just like linting, outputting any messages it didn't fix. That seems unnecessary.

1. 自动修复模式应该只进行修复，无需关心不可修复的规则。但是现在，它既扮演者lint的角色，也会输出消息。这似乎是不必要的。

2. The text-based fixes were a naive approach to autofixing that was targeted at whitespace fixes as a primary use case. It's clear text-based fixes aren't scaleable.

2. 以对空白进行修复作为一个主要的用例，这种基于文本的修复对于自动修复太过天真。很明显，基于文本的修复可伸缩性很差。

3. Trying to fit autofixing into the same single traversal system as the linting is too limiting.

3. 试图将自动修复融入到单一遍历系统的linting过程中，显得力不从心。

### The Future

### 未来
---

So now that I've explained the current state of stuff, I think we have an opportunity to fix it (no pun intended). This will likely be a big breaking change, but hopefully will be better for what people really want to use autofix for. I don't know the implementation details, but I have a high-level of idea of where I'd like to see autofix go.

现在我已经解释了自动修复的现状，我想我们有机会去修复它。这可能会是一个突破性的改变，但希望比用户真正想使用自动修复去做的要更好。我还不知道具体实现的细节，但是我对自动修复的走向有一个高层次的想法。

### Requirements

### 要求
---

1. Autofix mode just does fixes and does not do any unfixable rule linting at all. (That means --fix doesn't output any linting problems.)

1. 自动修复模式只做修复，决不对不可修复的规则进行lint。（这意味着 --fix 不输入任何lint问题。）

2. Autofix logic for each rule is contained with the rule file that does linting, not it another file.

2. 每条规则的自动修复逻辑包含在要lint的规则文件中，而不是其他文件。

3. Autofix logic in rules is declarative and doesn't force rules to do something like if (mode === "fix") { fix() }. Basically, we can't throw away the way rules work today, there are too many core rules and plugins with rules to force everyone to rewrite in a dramatic way.

3. 规则中的自动修复逻辑是声明式的，不强制规则做像 if (mode === "fix") { fix() }这样的事情。从根本上说，我们不能扔掉现有规则的工作方式，因为有太多核心规则和插件，不能迫使每个人都去重写。

4. Multiple autofix passes can be done on the same file to ensure as many fixes as possible are applied.

4. 同一个文件可以使用多个自动修复，以保证尽可能多的修复被应用到。

5. Regardless of fixes, ESLint must never output a file with illegal syntax as the final result.

5. 且不论修复，ESLint绝不输出一个有非法语法的文件作为最终结果。

6. Autofix should work for custom nodes that aren't part of the ESTree spec (I'm thinking about Flow, TypeScript, and other derivatives that add custom nodes into an ESTree AST).

6. 自动修复应该对非ESTree规范的自定义的节点起作用。（我正在考虑把Flow、TypeScript和其他添加自定义节点的衍生类库添加到AST）。


### Ideas: Config

### 配置：
---

One of my ideas is that you should be able to specify which rules you want autofix to apply for, so in your config file, you'd do something like:

我的一个想法是，你应该能够指定哪些规则你想应用自动修复，那么在你的配置文件中，你这样配置：

```javascript
rules:
    semi: "fix"
    quotes: ["fix", "double"]
```

This would be an extension of the work done in #3626 to allow "off", "warn", and "error" as options instead of 0, 1, and 2.

这将是对[#3626](https://github.com/eslint/eslint/issues/3626)的一个扩展，它允许使用"off"、"warn"和 "error" 而不是 0，1和2。

I think this would be a big win because it gives us a good idea about how to save time: during fixing, we just load the rules marked as "fix" and ignore the rest. That should cut down on the runtime (so long as not every rule is fixable!)

我想这将是一个重大的胜利，因为对于如何节省时间，它给我们提供了一个很好的想法： 在修复期间，我们只加载带有“fix”标记的规则，忽略其他的规则。在运行时，这些时间是应该减掉的（只要不是每条规则都是可修复的！）

Open Question: When not running in fix mode, what does "fix" mean? Is it "warn" or "error"?

**疑问：** 什么时候不运行在修复模式下？“fix” 是什么意思？ “warn” 还是 “error” ?

### Concerns

### 关注点
---

Some other concerns I have with changes are:

对于这些改变，我有一些其他关注点：

1. Is it possible to do multiple fixes in a single traversal? Or do we need to do one rule's fixes at a time?

1. 是否有肯能在一次遍历中做多次修复？或者我们是否需要每次只做一个规则的修复？

2. Do we need to do nonwhitespace rules first and whitespace rules second? Or do we just bite the bullet and say we always need at least two passes per file to get as many fixes as possible? (Or just keep doing passes until all fixes are applied?)

2. 我们是否需要先处理非空白规则，然后再处理空白的规则？或者我们只是咬紧牙关说每个文件我们总是需要至少传递两个，以获取尽可能多的修复？（或者一直传递直到所有的修复都被应用？）

3. How will this work with code path analysis? Changing nodes around affects code paths dramatically.

3. 这将如何处理代码路径分析？改变周围节点明显会影响代码路径。

4. How will this work with escope and scope evaluation? Will we have to run scope analysis multiple times? How will that affect performance

4. 这将如何处理escope和 scope的评估？我们是否需要多次运行scope分析？这将如何影响性能？

### Next Steps

### 下一步
----

This is just the beginning of the conversation, there are a ton of details that need to be hashed out. 

这只是讨论的开始，还有许多细节需要讨论决定。我只是想分享这些，以确保每个人都在思考，我们想做出改进。


