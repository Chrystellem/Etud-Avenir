"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var school_article_1 = require("../../components/database/school-article");
var filter_1 = require("../../components/research/filter");
function ResearchResult() {
    return (React.createElement("div", { className: "d-flex p-5" },
        React.createElement("div", null,
            React.createElement("h1", null, "R\u00E9sultats"),
            React.createElement(filter_1.default, null)),
        React.createElement("div", { className: "school-container px-5" },
            React.createElement(school_article_1.default, null),
            React.createElement(school_article_1.default, null),
            React.createElement(school_article_1.default, null),
            React.createElement(school_article_1.default, null),
            React.createElement(school_article_1.default, null))));
}
exports.default = ResearchResult;
//# sourceMappingURL=result.js.map