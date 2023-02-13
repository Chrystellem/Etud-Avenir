"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfilePageTemplate = void 0;
var React = require("react");
var react_router_dom_1 = require("react-router-dom");
function ProfilePageTemplate(_a) {
    var title = _a.title, description = _a.description, children = _a.children, color = _a.color;
    var style = { color: color };
    return React.createElement("div", { className: "template-profile-page" },
        React.createElement("div", { className: "mx-5 px-5" },
            React.createElement("div", { className: "template-profile-page__header d-flex justify-content-center align-items-baseline flex-wrap", style: style },
                React.createElement("h1", { className: "text-center mt-4" }, "Profil"),
                React.createElement(react_router_dom_1.Link, { style: style, className: "ml-3", to: "/profil" },
                    '>',
                    " ",
                    title))),
        React.createElement("p", { className: "text-center" }, description),
        React.createElement("div", { className: "template-profile-page__container" }, children));
}
exports.ProfilePageTemplate = ProfilePageTemplate;
//# sourceMappingURL=page-template.js.map