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
var react_cookie_1 = require("react-cookie");
var colors_1 = require("../../constants/colors");
var add_report_1 = require("../../modals/add-report");
var report_service_1 = require("../../services/report-service");
var small_report_dto_1 = require("../../types/small-report-dto");
var article_icon_1 = require("../article-icon");
var button_1 = require("../button");
var loader_1 = require("../loader");
var modal_1 = require("../modal");
var number_title_1 = require("./number-title");
var report_clickable_1 = require("./report-clickable");
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
            cookieReports: [],
            showBtn: false,
            fetching: true,
            showModal: false
        };
        _this.componentDidMount = function () { return __awaiter(_this, void 0, void 0, function () {
            var reports;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, (0, report_service_1.getUserReports)()];
                    case 1:
                        reports = _a.sent();
                        this.setState({
                            reports: reports,
                            fetching: false,
                            cookieReports: this.getSmallReportDTOsinCookies()
                        });
                        return [2 /*return*/];
                }
            });
        }); };
        _this.getSmallReportDTOsinCookies = function () {
            var cookieReports = _this.props.cookies.get("reports");
            if (!cookieReports)
                return [];
            return cookieReports.map(function (c) { return new small_report_dto_1.default({
                reportId: c.reportId,
                createdAt: new Date(),
                quarter: c.quarter,
                schoolYear: c.schoolYear
            }); });
        };
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
            if (_this.state.fetching)
                return React.createElement(loader_1.default, null);
            return (React.createElement(React.Fragment, null, _this.state.reports.map(function (r, index) { return React.createElement(report_clickable_1.ReportClickable, { key: "report-clickable-".concat(index), title: "".concat(r.schoolYear, " - Trimestre ").concat(r.quarter), otherInfo: r.createdAt.toLocaleDateString(), onClickHandler: function () { return _this.toggleReportToSelection(r); } }); })));
        };
        /**
         * Récupération des bulletins déjà enregistrés sur le compte
         */
        _this.temporaryReports = function () {
            return (React.createElement(React.Fragment, null, _this.state.cookieReports.map(function (r) { return React.createElement(article_icon_1.ArticleIcon, { key: r.reportId, reportId: r.reportId, classIcon: "fa-solid fa-file", title: "".concat(r.schoolYear, " - Trimestre ").concat(r.quarter), otherInfo: r.createdAt.toLocaleDateString(), color: colors_1.default.GREEN, onDelete: function () { return _this.removeReportDTOinCookies(r.reportId); }, showActionButtons: true, onClickHandler: function () { return _this.toggleReportToSelection(r); }, onEdit: function () { return _this.setState({ cookieReports: _this.getSmallReportDTOsinCookies() }); } }); })));
        };
        /**
         * Retire un bulletin des cookies
         * @param reportId
         */
        _this.removeReportDTOinCookies = function (reportId) {
            var reportDTOs = _this.props.cookies.get("reports");
            var reportDTOtoDeleteIndex = reportDTOs.findIndex(function (r) { return r.reportId == reportId; });
            if (reportDTOtoDeleteIndex === -1)
                return;
            reportDTOs.splice(reportDTOtoDeleteIndex, 1);
            _this.props.cookies.set("reports", reportDTOs);
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
        _this.closeModal = function () {
            _this.setState({
                showModal: false,
                cookieReports: _this.getSmallReportDTOsinCookies()
            });
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
                        React.createElement("h3", null, "Bulletins du profil"),
                        React.createElement("div", { style: { position: 'relative', minHeight: '100px' } }, _this.savedReports())),
                    React.createElement("div", { className: "research-separator" }),
                    React.createElement("div", { className: "p-5", style: { maxWidth: '500px' } },
                        React.createElement("h3", null, "Bulletin(s) temporaire(s)"),
                        React.createElement("span", { className: "d-block mb-4" }, "Ces bulletins sont enregistr\u00E9s dans vos cookies"),
                        _this.temporaryReports(),
                        React.createElement(button_1.Button, { template: 'primary', name: 'Ajouter un bulletin temporaire', onClick: function () { return _this.setState({ showModal: true }); } }))),
                _this.showBtn(),
                React.createElement(modal_1.default, { minWidth: 600, parentControl: {
                        toggler: function (state) { return _this.setState({ showModal: state }); },
                        isVisible: _this.state.showModal
                    } },
                    React.createElement(add_report_1.AddReportModal, { isTemporary: true, closeModal: _this.closeModal }))));
        };
        return _this;
    }
    return ResearchFirstStep;
}(React.Component));
exports.default = (0, react_cookie_1.withCookies)(ResearchFirstStep);
//# sourceMappingURL=research-first-step.js.map