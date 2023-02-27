"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var checkbox_1 = require("../form/checkbox");
var select_1 = require("../form/select");
var formButton_1 = require("../formButton");
var input_1 = require("../input");
function Filter(_a) {
    var state = _a.state, handleChange = _a.handleChange, handleSubmit = _a.handleSubmit;
    return (React.createElement("div", { className: "filter p-4" },
        React.createElement("form", { onSubmit: handleSubmit },
            React.createElement(select_1.default, { label: "Domaine", name: "domain", required: true, onChange: handleChange, value: state.domain },
                React.createElement("option", null, "-- S\u00E9lectionne un domaine --"),
                React.createElement("option", null, "Informatique"),
                React.createElement("option", null, "Graphisme"),
                React.createElement("option", null, "Langues"),
                React.createElement("option", null, "Philosophie"),
                React.createElement("option", null, "Physique"),
                React.createElement("option", null, "G\u00E9nie civile"),
                React.createElement("option", null, "Communication"),
                React.createElement("option", null, "Marketing")),
            React.createElement(input_1.default, { label: "Localisation", placeholder: "Ville/D\u00E9partement/R\u00E9gion", name: "localization", value: state.localization, onChange: handleChange, required: false, inputType: "text" }),
            React.createElement(select_1.default, { name: "admissionType", label: "Type d'admission", required: true, onChange: handleChange, value: state.admissionType },
                React.createElement("option", null, "-- S\u00E9lectionne un type d'admission --"),
                React.createElement("option", null, "Sur dossier"),
                React.createElement("option", null, "Concours")),
            React.createElement(checkbox_1.Checkbox, { name: "isPublic", label: "Ecole publique", onChange: handleChange, checked: state.isPublic }),
            React.createElement(checkbox_1.Checkbox, { name: "isPrivate", label: "Ecole priv\u00E9e", onChange: handleChange, checked: state.isPrivate }),
            React.createElement(checkbox_1.Checkbox, { name: "isStateApproved", label: "Reconnu par l'\u00E9tat", onChange: handleChange, checked: state.isStateApproved }),
            React.createElement(checkbox_1.Checkbox, { name: "isApprenticeship", label: "Alternance", onChange: handleChange, checked: state.isApprenticeship }),
            React.createElement(checkbox_1.Checkbox, { name: "isInitialFormation", label: "Formation initiale", onChange: handleChange, checked: state.isInitialFormation }),
            React.createElement(formButton_1.default, { isImg: false, name: "Rechercher" }))));
}
exports.default = Filter;
//# sourceMappingURL=filter.js.map