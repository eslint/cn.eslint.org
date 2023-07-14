---
title: 集成
layout: doc
edit_link: https://github.com/eslint/eslint/edit/main/docs/src/user-guide/integrations.md
eleventyNavigation:
    key: integrations
    parent: user guide
    title: Integrations
    order: 6

---
<<<<<<< HEAD
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# 集成 {#integrations}
=======
>>>>>>> d73506093f8fc55c9a8b9a346227f5823f5bf54d

## 编辑器 {#editors}

* Sublime Text 3:
    * [SublimeLinter-eslint](https://github.com/roadhump/SublimeLinter-eslint)
    * [Build Next](https://github.com/albertosantini/sublimetext-buildnext)
* Vim:
    * [ALE](https://github.com/w0rp/ale)
    * [Syntastic](https://github.com/vim-syntastic/syntastic/tree/master/syntax_checkers/javascript)
* Emacs: [Flycheck](http://www.flycheck.org/) 使用 [javascript-eslint](http://www.flycheck.org/en/latest/languages.html#javascript) 检查器来支持 ESLint。
* Eclipse Orion: ESLint 是 [默认校验器](https://dev.eclipse.org/mhonarc/lists/orion-dev/msg02718.html)
* Eclipse IDE: [Tern ESLint linter](https://github.com/angelozerr/tern.java/wiki/Tern-Linter-ESLint)
* TextMate 2:
    * [eslint.tmbundle](https://github.com/ryanfitzer/eslint.tmbundle)
    * [javascript-eslint.tmbundle](https://github.com/natesilva/javascript-eslint.tmbundle)
<<<<<<< HEAD
* Atom: [linter-eslint](https://atom.io/packages/linter-eslint)
* IntelliJ IDEA, RubyMine, WebStorm, PhpStorm, PyCharm, AppCode, Android Studio, 0xDBE: [ESLint 插件](https://plugins.jetbrains.com/plugin/7494-eslint)
* Visual Studio Code: [ESLint 扩展插件](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
=======
* Atom:
    * [linter-eslint](https://atom.io/packages/linter-eslint)
    * [fast-eslint-8](https://atom.io/packages/fast-eslint-8)
* IntelliJ IDEA, WebStorm, PhpStorm, PyCharm, RubyMine, and other JetBrains IDEs: [How to use ESLint](https://www.jetbrains.com/help/webstorm/eslint.html)
* Visual Studio Code: [ESLint Extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
>>>>>>> d73506093f8fc55c9a8b9a346227f5823f5bf54d
* Brackets: Included and [Brackets ESLint](https://github.com/brackets-userland/brackets-eslint)

## 构建工具 {#build-tools}

* Grunt: [grunt-eslint](https://www.npmjs.com/package/grunt-eslint)
* Gulp: [gulp-eslint](https://www.npmjs.com/package/gulp-eslint)
* Mimosa: [mimosa-eslint](https://www.npmjs.com/package/mimosa-eslint)
* Broccoli: [broccoli-eslint](https://www.npmjs.com/package/broccoli-eslint)
* Browserify: [eslintify](https://www.npmjs.com/package/eslintify)
* Webpack: [eslint-webpack-plugin](https://www.npmjs.com/package/eslint-webpack-plugin)
* Rollup: [@rollup/plugin-eslint](https://www.npmjs.com/package/@rollup/plugin-eslint)
* Ember-cli: [ember-cli-eslint](https://www.npmjs.com/package/ember-cli-eslint)
* Sails.js: [sails-hook-lint](https://www.npmjs.com/package/sails-hook-lint), [sails-eslint](https://www.npmjs.com/package/sails-eslint)
* Start: [@start/plugin-lib-eslint](https://www.npmjs.com/package/@start/plugin-lib-eslint)
* Brunch: [eslint-brunch](https://www.npmjs.com/package/eslint-brunch)

## 命令行工具 {#command-line-tools}

* [ESLint Watch](https://www.npmjs.com/package/eslint-watch)
* [Code Climate CLI](https://github.com/codeclimate/codeclimate)
* [ESLint Nibble](https://github.com/IanVS/eslint-nibble)

## 源代码控制 {#source-control}

* [Git Precommit Hook](https://coderwall.com/p/zq8jlq/eslint-pre-commit-hook)
* [只对分阶段进行更改的 Git pre-commit hook](https://gist.github.com/dahjelle/8ddedf0aebd488208a9a7c829f19b9e8)
* [overcommit Git hook manager](https://github.com/brigade/overcommit)
* [Mega-Linter](https://nvuillam.github.io/mega-linter): 用于 CI 的 Linter 聚合器， [embedding eslint](https://nvuillam.github.io/mega-linter/descriptors/javascript_eslint/)

## 测试 {#testing}

* Mocha.js: [mocha-eslint](https://www.npmjs.com/package/mocha-eslint)

## ESLint 扩展规则 {#external-eslint-rules}

* [AngularJS](https://github.com/Gillespie59/eslint-plugin-angular)
* [BackboneJS](https://github.com/ilyavolodin/eslint-plugin-backbone)
* [Jasmine](https://github.com/tlvince/eslint-plugin-jasmine)
* [React](https://github.com/yannickcr/eslint-plugin-react)

… 使用 [eslintplugin](https://www.npmjs.com/browse/keyword/eslintplugin) 关键字，查看更多发布在 npm 上的 ESLint 插件。

## 其他集成列表 {#other-integration-lists}

你可以在 [awesome-eslint](https://github.com/dustinspecker/awesome-eslint) 仓库中找到 ESLint 精选的其他流行集成列表。
