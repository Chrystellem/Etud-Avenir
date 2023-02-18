"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var button_1 = require("../button");
function SchoolInformation(_a) {
    var onClickHandler = _a.onClickHandler;
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
            React.createElement(button_1.Button, { name: "Fermer", template: "danger", onClick: onClickHandler })));
}
exports.default = SchoolInformation;
//# sourceMappingURL=school-informations.js.map