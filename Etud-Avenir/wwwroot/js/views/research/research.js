"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var number_title_1 = require("../../components/research/number-title");
var report_clickable_1 = require("../../components/research/report-clickable");
var button_1 = require("../../components/button");
var select_1 = require("../../components/form/select");
var input_1 = require("../../components/input");
var checkbox_1 = require("../../components/form/checkbox");
var react_router_dom_1 = require("react-router-dom");
var result_1 = require("./result");
function Research() {
    var _a = React.useState(1), step = _a[0], setStep = _a[1];
    var displayResearchStep = function () {
        if (step === 1)
            return React.createElement(ResearchFirstStep, { setStep: setStep });
        return React.createElement(ResearchSecondStep, null);
    };
    return (React.createElement(react_router_dom_1.BrowserRouter, null,
        React.createElement(react_router_dom_1.Routes, null,
            React.createElement(react_router_dom_1.Route, { path: "/recherche", element: (React.createElement("div", { className: "p-5" },
                    React.createElement("div", { className: "d-flex flex-wrap align-items-center justify-content-center" },
                        React.createElement("img", { className: "database-img", src: "/images/decoration/database/icon-database.svg" }),
                        React.createElement("div", { className: "ml-4 w-50" },
                            React.createElement("h1", null, "Base de donn\u00E9es"),
                            React.createElement("span", null, "Tu veux voir la liste des \u00E9coles prises en compte par notre algorithme ? Fais toi plaisir, on essaie d\u2019en prendre en compte le plus grand nombre possible"))),
                    displayResearchStep())) }),
            React.createElement(react_router_dom_1.Route, { path: "/recherche/resultats", element: React.createElement(result_1.default, null) }))));
}
exports.default = Research;
/**
 * Représente l'étape "Rentre tes notes" dans la recherche
 * Gère l'affichage
 */
var ResearchFirstStep = function (_a) {
    var setStep = _a.setStep;
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: "pt-3 d-flex justify-content-center align-items-center w-100" },
            React.createElement(number_title_1.default, { isSelected: true, title: "Rentre tes notes", number: 1 }),
            React.createElement("div", { className: "arrow mx-4", style: { width: '200px' } }),
            React.createElement(number_title_1.default, { isSelected: false, title: "Rentre tes crit\u00E8res", number: 2 })),
        React.createElement("p", { className: "pt-3 w-100 text-center" }, "S\u00E9lectionne ou ajoute tes 3 derniers bulletins ! Ils vont aider notre IA \u00E0 te trouver l\u2019\u00E9cole la plus susceptible de te correspondre"),
        React.createElement("div", { className: "d-flex justify-content-center flex-wrap align-items-stretch my-4" },
            React.createElement("div", { className: "p-5", style: { maxWidth: '500px' } },
                React.createElement("h3", null, "Bulletins enregistr\u00E9s"),
                React.createElement(report_clickable_1.ReportClickable, { title: "La", otherInfo: "aaaa-bbbb" }),
                React.createElement(report_clickable_1.ReportClickable, { title: "La", otherInfo: "aaaa-bbbb" }),
                React.createElement(report_clickable_1.ReportClickable, { title: "La", otherInfo: "aaaa-bbbb" })),
            React.createElement("div", { className: "research-separator" }),
            React.createElement("div", { className: "p-5", style: { maxWidth: '500px' } },
                React.createElement("h3", null, "Nouveau(x) bulletin(s)"),
                React.createElement(report_clickable_1.ReportClickable, { title: "La", otherInfo: "aaaa-bbbb" }),
                React.createElement(report_clickable_1.ReportClickable, { title: "La", otherInfo: "aaaa-bbbb" }),
                React.createElement(report_clickable_1.ReportClickable, { title: "La", otherInfo: "aaaa-bbbb" }),
                React.createElement(button_1.Button, { template: 'primary', name: 'Ajouter un nouveau bulletin' }))),
        React.createElement("div", { className: "w-100 d-flex justify-content-center" },
            React.createElement(button_1.Button, { template: 'primary', name: 'Valider', onClick: function () { return setStep(2); } }))));
};
/**
 * Représente l'étape "Rentre tes critères" dans la recherche
 * Gère l'affichage
 */
var ResearchSecondStep = function () {
    var navigate = (0, react_router_dom_1.useNavigate)();
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: "pt-3 d-flex justify-content-center align-items-center w-100" },
            React.createElement(number_title_1.default, { isSelected: false, title: "Rentre tes notes", number: 1 }),
            React.createElement("div", { className: "arrow mx-4", style: { width: '200px' } }),
            React.createElement(number_title_1.default, { isSelected: true, title: "Rentre tes crit\u00E8res", number: 2 })),
        React.createElement("p", { className: "pt-3 w-100 text-center" }, "Renseigne tes envies, domaine, lieu d\u2019\u00E9tude et nous regarderons parmis toutes les \u00E9coles pr\u00E9sentes dans nos bases de donn\u00E9es lesquelles pourront te convenir"),
        React.createElement("div", { className: "d-flex justify-content-center flex-wrap align-items-stretch my-4" },
            React.createElement("div", { className: "p-5", style: { maxWidth: '500px' } },
                React.createElement(select_1.default, { name: "Domain", label: "Domaine", required: true, onChange: function () { return undefined; } },
                    React.createElement("option", null, "-- S\u00E9lectionne un domaine --")),
                React.createElement(input_1.default, { label: "Localisation (commune, r\u00E9gion)", name: "Localization", required: false, inputType: "text", onChange: function () { return undefined; }, placeholder: "Localisation", value: "" })),
            React.createElement("div", { className: "research-separator" }),
            React.createElement("div", { className: "p-5", style: { maxWidth: '500px' } },
                React.createElement("div", { className: "d-flex align-items-center" },
                    React.createElement("div", null,
                        React.createElement(checkbox_1.Checkbox, { name: "IsApprenticeship", label: "En alternance", checked: false, onChange: function () { return undefined; }, value: "" })),
                    React.createElement("div", { className: "ml-5" },
                        React.createElement(checkbox_1.Checkbox, { name: "isStateRecognized", label: "Reconnu par l'\u00E9tat", checked: false, onChange: function () { return undefined; }, value: "" }))),
                React.createElement("div", { className: "d-flex align-items-center" },
                    React.createElement("div", null,
                        React.createElement(checkbox_1.Checkbox, { name: "isPublic", label: "Public", checked: false, onChange: function () { return undefined; }, value: "" })),
                    React.createElement("div", { className: "ml-5" },
                        React.createElement(checkbox_1.Checkbox, { name: "isPrivate", label: "Priv\u00E9", checked: false, onChange: function () { return undefined; }, value: "" }))),
                React.createElement(select_1.default, { name: "AdmissionType", label: "Type d'admission", required: true, onChange: function () { return undefined; } },
                    React.createElement("option", null, "-- S\u00E9lectionne un type d'admission --")))),
        React.createElement("div", { className: "w-100 d-flex justify-content-center" },
            React.createElement(button_1.Button, { template: 'primary', name: 'Rechercher', onClick: function () { return navigate('/recherche/resultats'); } }))));
};
//# sourceMappingURL=research.js.map