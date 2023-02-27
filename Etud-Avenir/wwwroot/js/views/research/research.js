"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
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
var report_service_1 = require("../../services/report-service");
function Research() {
    var _a = React.useState(1), step = _a[0], setStep = _a[1];
    var _b = React.useState([]), selectedReports = _b[0], setSelectedReports = _b[1];
    var displayResearchStep = function () {
        if (step === 1)
            return React.createElement(ResearchFirstStep, { setStep: setStep, selectedReports: selectedReports, setSelectedReports: setSelectedReports });
        return React.createElement(ResearchSecondStep, { selectedReports: selectedReports });
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
var ResearchFirstStep = /** @class */ (function (_super) {
    __extends(ResearchFirstStep, _super);
    function ResearchFirstStep(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            reports: [],
            showBtn: false
        };
        _this.componentDidMount = function () { return __awaiter(_this, void 0, void 0, function () {
            var reports;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, (0, report_service_1.getUserReports)()];
                    case 1:
                        reports = _a.sent();
                        this.setState({ reports: reports });
                        return [2 /*return*/];
                }
            });
        }); };
        /**
         * Ajoute ou retire des éléments sélectionnés
         * @param reportDTO
         */
        _this.toggleReportToSelection = function (reportDTO) {
            // Vérifier si déjà sélectionné
            var reportIndex = _this.props.selectedReports.findIndex(function (r) { return r.reportId === reportDTO.reportId; });
            if (reportIndex !== -1) {
                _this.props.selectedReports.splice(reportIndex, 1);
            }
            else {
                _this.props.selectedReports.push(reportDTO);
            }
            if (_this.props.selectedReports.length === 3) {
                _this.setState({ showBtn: true });
                return _this.props.setSelectedReports(_this.props.selectedReports);
            }
            _this.props.setSelectedReports(_this.props.selectedReports);
            _this.setState({ showBtn: false });
        };
        /**
         * Récupération des bulletins déjà enregistrés sur le compte
         */
        _this.savedReports = function () {
            return (React.createElement(React.Fragment, null, _this.state.reports.map(function (r, index) { return React.createElement(report_clickable_1.ReportClickable, { key: "report-clickable-".concat(index), title: "".concat(r.schoolYear, " - Trimestre ").concat(r.quarter), otherInfo: r.createdAt.toLocaleDateString(), onClickHandler: function () { return _this.toggleReportToSelection(r); } }); })));
        };
        /**
         * Gère l'affichae du bouton pour passer à la seconde étape
         */
        _this.showBtn = function () {
            if (!_this.state.showBtn)
                return;
            return (React.createElement("div", { className: "w-100 d-flex justify-content-center" },
                React.createElement(button_1.Button, { template: 'primary', name: 'Valider', onClick: function () { return _this.props.setStep(2); } })));
        };
        _this.render = function () {
            return (React.createElement(React.Fragment, null,
                React.createElement("div", { className: "pt-3 d-flex justify-content-center align-items-center w-100" },
                    React.createElement(number_title_1.default, { isSelected: true, title: "Rentre tes notes", number: 1 }),
                    React.createElement("div", { className: "arrow mx-4", style: { width: '200px' } }),
                    React.createElement(number_title_1.default, { isSelected: false, title: "Rentre tes crit\u00E8res", number: 2 })),
                React.createElement("p", { className: "pt-3 w-100 text-center" }, "S\u00E9lectionne ou ajoute tes 3 derniers bulletins ! Ils vont aider notre IA \u00E0 te trouver l\u2019\u00E9cole la plus susceptible de te correspondre"),
                React.createElement("div", { className: "d-flex justify-content-center flex-wrap align-items-stretch my-4" },
                    React.createElement("div", { className: "p-5", style: { maxWidth: '500px' } },
                        React.createElement("h3", null, "Bulletins enregistr\u00E9s"),
                        _this.savedReports()),
                    React.createElement("div", { className: "research-separator" }),
                    React.createElement("div", { className: "p-5", style: { maxWidth: '500px' } },
                        React.createElement("h3", null, "Nouveau(x) bulletin(s)"),
                        React.createElement(button_1.Button, { template: 'primary', name: 'Ajouter un nouveau bulletin' }))),
                _this.showBtn()));
        };
        return _this;
    }
    return ResearchFirstStep;
}(React.Component));
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
    console.log(state);
    var handleChange = function (event) {
        var _a, _b;
        var propertyName = event.currentTarget.name;
        if (event.currentTarget.type === "checkbox") {
            setState(__assign(__assign({}, state), (_a = {}, _a[propertyName] = !state[propertyName], _a)));
            return;
        }
        setState(__assign(__assign({}, state), (_b = {}, _b[propertyName] = event.currentTarget.value, _b)));
    };
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: "pt-3 d-flex justify-content-center align-items-center w-100" },
            React.createElement(number_title_1.default, { isSelected: false, title: "Rentre tes notes", number: 1 }),
            React.createElement("div", { className: "arrow mx-4", style: { width: '200px' } }),
            React.createElement(number_title_1.default, { isSelected: true, title: "Rentre tes crit\u00E8res", number: 2 })),
        React.createElement("p", { className: "pt-3 w-100 text-center" }, "Renseigne tes envies, domaine, lieu d\u2019\u00E9tude et nous regarderons parmis toutes les \u00E9coles pr\u00E9sentes dans nos bases de donn\u00E9es lesquelles pourront te convenir"),
        React.createElement("div", { className: "d-flex justify-content-center flex-wrap align-items-stretch my-4" },
            React.createElement("div", { className: "p-5", style: { maxWidth: '500px' } },
                React.createElement(select_1.default, { name: "domain", label: "Domaine", required: true, onChange: handleChange },
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
                React.createElement(select_1.default, { name: "admissionType", label: "Type d'admission", required: true, onChange: handleChange },
                    React.createElement("option", null, "-- S\u00E9lectionne un type d'admission --"),
                    React.createElement("option", null, "Sur dossier"),
                    React.createElement("option", null, "Concours")))),
        React.createElement("div", { className: "w-100 d-flex justify-content-center" },
            React.createElement(button_1.Button, { template: 'primary', name: 'Rechercher', onClick: function () { return navigate("/recherche/resultats?"
                    + "domain=".concat(state.domain)
                    + "&localization=".concat(state.localization)
                    + "&isInitialFormation=".concat(state.isInitialFormation)
                    + "&isApprenticeship=".concat(state.isApprenticeship)
                    + "&isStateApproved=".concat(state.isStateApproved)
                    + "&isPublic=".concat(state.isPublic)
                    + "&isPrivate=".concat(state.isPrivate)
                    + "&admissionType=".concat(state.admissionType)
                    + "&grades=".concat(selectedReports.map(function (s) { return s.reportId; }).join(","))); } }))));
};
//# sourceMappingURL=research.js.map