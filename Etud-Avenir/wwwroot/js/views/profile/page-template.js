"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfilePageTemplate = void 0;
var React = require("react");
var react_router_dom_1 = require("react-router-dom");
var button_1 = require("../../components/button");
function ProfilePageTemplate(_a) {
    var title = _a.title, description = _a.description, children = _a.children, color = _a.color, partial = _a.partial;
    var style = { color: color };
    var getPartial = function () {
        if (!partial || !partial.showPartial)
            return;
        return React.createElement("div", null,
            React.createElement("div", { className: "template-profile-page__description-element" },
                React.createElement("div", { className: "template-profile-page__description-element__header" },
                    React.createElement("h5", null, "EFREI PARIS"),
                    React.createElement("span", null, "Villejuif - 94800")),
                React.createElement("div", { className: "template-profile-page__description-element__program" },
                    React.createElement("h5", null, "Programme"),
                    React.createElement("div", { className: "d-flex justify-content-between flex-wrap" },
                        React.createElement("span", null, "Dur\u00E9e: X ans"),
                        React.createElement("span", null, "Domaine: XXX"))),
                React.createElement("div", { className: "template-profile-page__description-element__fees" },
                    React.createElement("h5", null, "Frais"),
                    React.createElement("ul", null,
                        React.createElement("li", null, "Frais de candidature: xxxxx \u20AC"),
                        React.createElement("li", null, "Frais de candidature: xxxxx \u20AC"),
                        React.createElement("li", null, "Frais de candidature: xxxxx \u20AC"))),
                React.createElement("div", { className: "template-profile-page__description-element__other" },
                    React.createElement("h5", null, "Informations compl\u00E9mentaires"),
                    React.createElement("p", null, "blavlablabla")),
                React.createElement(button_1.Button, { name: "Voir le site", template: "primary" }),
                React.createElement(button_1.Button, { name: "Fermer", template: "danger", onClick: function () { return partial.setShowPartial(false); } })));
    };
    return React.createElement("div", { className: "template-profile-page" },
        React.createElement("div", { className: "mx-5 px-5" },
            React.createElement("div", { className: "template-profile-page__header d-flex justify-content-center align-items-baseline flex-wrap", style: style },
                React.createElement("h1", { className: "text-center mt-4" }, "Profil"),
                React.createElement(react_router_dom_1.Link, { style: style, className: "ml-3", to: "/profil" },
                    '>',
                    " ",
                    title))),
        React.createElement("p", { className: "text-center" }, description),
        React.createElement("div", { className: "template-profile-page__main" },
            React.createElement("div", { className: "template-profile-page__container" }, children),
            getPartial()));
}
exports.ProfilePageTemplate = ProfilePageTemplate;
//# sourceMappingURL=page-template.js.map