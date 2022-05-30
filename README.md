[![Build Status](https://github.com/eslint/website/actions/workflows/ci.yml/badge.svg)](https://github.com/eslint/website/actions/workflows/ci.yml?query=branch%3Amaster)
[![Netlify Status](https://api.netlify.com/api/v1/badges/cefb59aa-729a-4f8e-be36-b981fda399c0/deploy-status)](https://app.netlify.com/sites/eslint/deploys)

# ESLint 中文文档

此仓库的代码会部署在 [cn.eslint.org](https://cn.eslint.org) 域名下。

## 任务认领

参与翻译，请参考 [issues](https://github.com/eslint/cn.eslint.org/issues)。

阅读顺序：

1. 翻译流程说明
2. 翻译任务认领
3. 规则任务认领

## Pull Requests

请注意，此仓库只包含 eslint 中文文档的全部内容。

如果你对文章内容存在疑问，请先阅读英文文档，查看是不是翻译问题。

如果属于翻译问题，请直接 PR 到本仓库；如果非翻译问题，请移步至 [eslint/website](https://github.com/eslint/website) 仓库，使用英文发起 PR 或者提交 issue。

## 开发

此站点基于 [Eleventy](https://www.11ty.io) 构建，并部署在 [Netlify](https://www.netlify.com)。

### 本地调试

如下本地调试，请根据你的运行环境安装 [Node.js](https://nodejs.org/)，并进行如下操作：

```sh
# 克隆本仓库
git clone git@github.com:eslint/website.git eslint-website

# 进入仓库根目录
cd eslint-website

# 安装依赖
npm install
```

执行完上述操作，即可进行本地调试：

```sh
npm start
```

启动后会部署在 `http://localhost:8080/` 域名下，并会根据源码的变化进行热更新。
