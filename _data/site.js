"use strict";

const PORT = process.env.DEV_PORT || 8080;

function calculateUrl() {
    if (process.env.NODE_ENV === "development") {
        return `localhost:${PORT}`;
    }

    /*
     * Netlify sets the following environment variables
     * https://www.netlify.com/docs/continuous-deployment/#environment-variables
     */
    return process.env.CONTEXT === "production" ? process.env.URL : process.env.DEPLOY_PRIME_URL;
}

module.exports = {
    title: "ESLint - 可插拔的 JavaScript linter",
    description: "一个可插拔和可配置的 linter 工具，用于识别和报告 JavaScript 格式。轻松维护你的代码质量。",
    banner: {
        text: null,
        foregroundColor: "#ffffff",
        backgroundColor: "#150b29"
    },
    url: calculateUrl(),
    links: {
        chat: "/chat",
        codeOfConduct: "/conduct",
        mailingList: "https://groups.google.com/group/eslint",
        github: "https://github.com/eslint/eslint",
        twitter: "https://twitter.com/geteslint"
    }
};
