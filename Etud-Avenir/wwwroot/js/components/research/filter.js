"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var checkbox_1 = require("../form/checkbox");
var select_1 = require("../form/select");
var formButton_1 = require("../formButton");
var input_1 = require("../input");
function Filter() {
    return (React.createElement("div", { className: "filter p-4" },
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
            React.createElement(formButton_1.default, { isImg: false, name: "Rechercher" }))));
}
exports.default = Filter;
//# sourceMappingURL=filter.js.map