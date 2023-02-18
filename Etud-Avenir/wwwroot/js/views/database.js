"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var school_article_1 = require("../components/database/school-article");
var checkbox_1 = require("../components/form/checkbox");
var select_1 = require("../components/form/select");
var formButton_1 = require("../components/formButton");
var input_1 = require("../components/input");
function Database() {
    return React.createElement("div", { className: "p-5" },
        React.createElement("div", { className: "d-flex flex-wrap align-items-center justify-content-center" },
            React.createElement("img", { className: "database-img", src: "/images/decoration/database/icon-database.svg" }),
            React.createElement("div", { className: "ml-4 w-50" },
                React.createElement("h1", null, "Base de donn\u00E9es"),
                React.createElement("span", null, "Tu veux voir la liste des \u00E9coles prises en compte par notre algorithme ? Fais toi plaisir, on essaie d\u2019en prendre en compte le plus grand nombre possible"))),
        React.createElement("div", { className: "mt-4 d-flex align-items-sm-start" },
            React.createElement("div", { className: "filter p-4" },
                React.createElement("form", null,
                    React.createElement(select_1.default, { label: "Domaine", name: "Domain", required: false, onChange: function () { return undefined; } },
                        React.createElement("option", null, "S\u00E9lectionne un domaine")),
                    React.createElement(input_1.default, { label: "Nom", placeholder: "Ex: EFREI Paris", name: "Name", value: "", onChange: function () { return undefined; }, required: false, inputType: "text" }),
                    React.createElement(input_1.default, { label: "Localisation", placeholder: "Ville/D\u00E9partement/R\u00E9gion", name: "Localization", value: "", onChange: function () { return undefined; }, required: false, inputType: "text" }),
                    React.createElement(select_1.default, { label: "Accessibilit\u00E9", name: "Accessibility", required: false, onChange: function () { return undefined; } },
                        React.createElement("option", null, "S\u00E9lectionne un mode d\u2019accessibilit\u00E9")),
                    React.createElement(checkbox_1.Checkbox, { name: "IsPublic", label: "Ecole publique", value: "", onChange: function () { return undefined; }, checked: false }),
                    React.createElement(checkbox_1.Checkbox, { name: "IsPrivate", label: "Ecole priv\u00E9e", value: "", onChange: function () { return undefined; }, checked: false }),
                    React.createElement(checkbox_1.Checkbox, { name: "IsOfficial", label: "Reconnu par l'\u00E9tat", value: "", onChange: function () { return undefined; }, checked: false }),
                    React.createElement(checkbox_1.Checkbox, { name: "IsApprenticeshipProgram", label: "Alternance", value: "", onChange: function () { return undefined; }, checked: false }),
                    React.createElement(formButton_1.default, { isImg: false, name: "Rechercher" }))),
            React.createElement("div", { className: "school-container px-5" },
                React.createElement(school_article_1.default, null),
                React.createElement(school_article_1.default, null),
                React.createElement(school_article_1.default, null),
                React.createElement(school_article_1.default, null),
                React.createElement(school_article_1.default, null))));
}
exports.default = Database;
//# sourceMappingURL=database.js.map