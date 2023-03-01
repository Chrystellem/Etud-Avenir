"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_router_dom_1 = require("react-router-dom");
var button_1 = require("../button");
var checkbox_1 = require("../form/checkbox");
var select_1 = require("../form/select");
var input_1 = require("../input");
var number_title_1 = require("./number-title");
/**
 * Représente l'étape "Rentre tes critères" dans la recherche
 * Gère l'affichage
 */
var ResearchSecondStep = function (_a) {
    var selectedReports = _a.selectedReports;
    var _b = React.useState({
        domain: "",
        localization: "",
        isInitialFormation: false,
        isApprenticeship: false,
        isPublic: false,
        isPrivate: false,
        isStateApproved: false,
        admissionType: ""
    }), state = _b[0], setState = _b[1];
    var navigate = (0, react_router_dom_1.useNavigate)();
    var handleChange = function (event) {
        var _a, _b;
        var propertyName = event.currentTarget.name;
        if (event.currentTarget.type === "checkbox") {
            setState(__assign(__assign({}, state), (_a = {}, _a[propertyName] = !state[propertyName], _a)));
            return;
        }
        setState(__assign(__assign({}, state), (_b = {}, _b[propertyName] = event.currentTarget.value, _b)));
    };
    var launchResult = function () {
        // Vérifier que les paramètres obligatoires sont présents
        if (!state.domain || !state.localization)
            return;
        var urlToNavigateTo = "/recherche/resultats?domain=".concat(state.domain, "&localization=").concat(state.localization);
        if (state.isInitialFormation)
            urlToNavigateTo += "&isInitialFormation=".concat(state.isInitialFormation);
        if (state.isApprenticeship)
            urlToNavigateTo += "&isApprenticeship=".concat(state.isApprenticeship);
        if (state.isStateApproved)
            urlToNavigateTo += "&isStateApproved=".concat(state.isStateApproved);
        if (state.isPublic)
            urlToNavigateTo += "&isPublic=".concat(state.isPublic);
        if (state.isPrivate)
            urlToNavigateTo += "&isPrivate=".concat(state.isPrivate);
        if (state.admissionType)
            urlToNavigateTo += "&admissionType=".concat(state.admissionType);
        urlToNavigateTo += "&reports=".concat(selectedReports.map(function (s) { return s.reportId; }).join(","));
        navigate(urlToNavigateTo);
    };
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: "pt-3 d-flex justify-content-center align-items-center w-100" },
            React.createElement(number_title_1.default, { isSelected: false, title: "Rentre tes notes", number: 1 }),
            React.createElement("div", { className: "arrow mx-4", style: { width: '200px' } }),
            React.createElement(number_title_1.default, { isSelected: true, title: "Rentre tes crit\u00E8res", number: 2 })),
        React.createElement("p", { className: "pt-3 w-100 text-center" }, "Renseigne tes envies, domaine, lieu d\u2019\u00E9tude et nous regarderons parmis toutes les \u00E9coles pr\u00E9sentes dans nos bases de donn\u00E9es lesquelles pourront te convenir"),
        React.createElement("div", { className: "d-flex justify-content-center flex-wrap align-items-stretch my-4" },
            React.createElement("div", { className: "p-5", style: { maxWidth: '500px' } },
                React.createElement(select_1.default, { name: "domain", label: "Domaine", required: true, onChange: handleChange, value: state.domain },
                    React.createElement("option", null, "-- S\u00E9lectionne un domaine --"),
                    React.createElement("option", null, "Informatique"),
                    React.createElement("option", null, "Graphisme"),
                    React.createElement("option", null, "Langues"),
                    React.createElement("option", null, "Philosophie"),
                    React.createElement("option", null, "Physique"),
                    React.createElement("option", null, "G\u00E9nie civile"),
                    React.createElement("option", null, "Communication"),
                    React.createElement("option", null, "Marketing")),
                React.createElement(input_1.default, { label: "Localisation (ville, d\u00E9partement, r\u00E9gion, toute la france ?)", name: "localization", required: false, inputType: "text", onChange: handleChange, placeholder: "Localisation", value: state.localization })),
            React.createElement("div", { className: "research-separator" }),
            React.createElement("div", { className: "p-5", style: { maxWidth: '700px' } },
                React.createElement("div", { className: "d-flex align-items-center" },
                    React.createElement("div", null,
                        React.createElement(checkbox_1.Checkbox, { name: "isInitialFormation", label: "Formation initiale", checked: state.isInitialFormation, onChange: handleChange })),
                    React.createElement("div", null,
                        React.createElement(checkbox_1.Checkbox, { name: "isApprenticeship", label: "En alternance", checked: state.isApprenticeship, onChange: handleChange })),
                    React.createElement("div", { className: "ml-5" },
                        React.createElement(checkbox_1.Checkbox, { name: "isStateApproved", label: "Reconnu par l'\u00E9tat", checked: state.isStateApproved, onChange: handleChange }))),
                React.createElement("div", { className: "d-flex align-items-center" },
                    React.createElement("div", null,
                        React.createElement(checkbox_1.Checkbox, { name: "isPublic", label: "Public", checked: state.isPublic, onChange: handleChange })),
                    React.createElement("div", { className: "ml-5" },
                        React.createElement(checkbox_1.Checkbox, { name: "isPrivate", label: "Priv\u00E9", checked: state.isPrivate, onChange: handleChange }))),
                React.createElement(select_1.default, { name: "admissionType", label: "Type d'admission", required: true, onChange: handleChange, value: state.admissionType },
                    React.createElement("option", null, "-- S\u00E9lectionne un type d'admission --"),
                    React.createElement("option", null, "Sur dossier"),
                    React.createElement("option", null, "Concours")))),
        React.createElement("div", { className: "w-100 d-flex justify-content-center" },
            React.createElement(button_1.Button, { template: 'primary', name: 'Rechercher', onClick: launchResult }))));
};
exports.default = ResearchSecondStep;
//# sourceMappingURL=research-second-step.js.map