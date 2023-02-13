"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArticleIcon = void 0;
var React = require("react");
var colors_1 = require("../constants/colors");
var icons_1 = require("../constants/icons");
var action_button_1 = require("./action-button");
function ArticleIcon(_a) {
    var classIcon = _a.classIcon, title = _a.title, otherInfo = _a.otherInfo, color = _a.color;
    return React.createElement("div", { className: "my-3 d-flex actions-on-hover cursor-pointer" },
        React.createElement("article", { className: "p-3 d-flex align-items-center cursor-pointer actions-on-hover" },
            React.createElement("i", { className: "mr-4 ".concat(classIcon), style: { color: color } }),
            React.createElement("div", { className: "info" },
                React.createElement("h5", null, title),
                React.createElement("span", null, otherInfo))),
        React.createElement("div", { className: "hidden-actions ml-2" },
            React.createElement(action_button_1.ActionButton, { onClickHandler: function () { return console.log("coucou"); }, classIcon: icons_1.default.EDIT, styleParent: { backgroundColor: colors_1.default.GREEN }, manageConfirmation: false }),
            React.createElement(action_button_1.ActionButton, { onClickHandler: function () { return console.log("coucou"); }, classIcon: icons_1.default.DELETE, styleParent: { backgroundColor: colors_1.default.PINK }, manageConfirmation: true })));
}
exports.ArticleIcon = ArticleIcon;
//# sourceMappingURL=article-icon.js.map