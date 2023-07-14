---
title: 规则弃用
layout: doc
edit_link: https://github.com/eslint/eslint/edit/main/docs/src/user-guide/rule-deprecation.md

---
<<<<<<< HEAD
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# 规则弃用 {#rule-deprecation}
=======
>>>>>>> 701fbee467b3a2d0278b54c324638fd0bf482f64

权衡改善工具和这种改善所可能带来的挫折是一项艰巨的任务。那么其中一个影响到我们用户的关键领域在于规则的删减。

ESLint 团队致力于使升级尽可能的简单和无痛。为此，该团队已经就以下一套关于未来废止规则的准则达成了一致。这些准则的目标是允许在不破坏现有配置的情况下进行改进和改变。

* 规则永远不会从 ESLint 中删除。
* 规则将根据需要被弃用，并在所有文档中标明。
* 在一条规则被废弃后，团队将不再对其进行任何工作。这包括错误修复、改进和规则文档的更新。与被废弃的规则有关的问题和 PR 将不被接受，同时将会被关闭。

由于废弃的规则永远不会被删除，如果它们对你有用，你可以继续无限期地使用它们。然而，请记住，被废弃的规则实际上将不再维护。

我们希望通过遵循这些准则，能够持续改进并努力使 ESLint 成为最好的工具，同时在这个过程中对我们的用户造成尽可能少的干扰。
