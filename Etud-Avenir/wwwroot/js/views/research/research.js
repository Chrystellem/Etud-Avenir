"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_router_dom_1 = require("react-router-dom");
var result_1 = require("./result");
var react_cookie_1 = require("react-cookie");
var research_first_step_1 = require("../../components/research/research-first-step");
var research_second_step_1 = require("../../components/research/research-second-step");
function Research() {
    var _a = React.useState(1), step = _a[0], setStep = _a[1];
    var _b = React.useState([]), selectedReports = _b[0], setSelectedReports = _b[1];
    var displayResearchStep = function () {
        if (step === 1) {
            return React.createElement(react_cookie_1.CookiesProvider, null,
                React.createElement(research_first_step_1.default, { setStep: setStep, selectedReports: selectedReports, setSelectedReports: setSelectedReports }));
        }
        return React.createElement(research_second_step_1.default, { selectedReports: selectedReports });
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
//# sourceMappingURL=research.js.map