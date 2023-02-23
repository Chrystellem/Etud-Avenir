"use strict";
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
exports.ReportPage = void 0;
var React = require("react");
var article_icon_1 = require("../../components/article-icon");
var button_1 = require("../../components/button");
var modal_1 = require("../../components/modal");
var colors_1 = require("../../constants/colors");
var add_report_1 = require("../../modals/add-report");
var small_report_dto_1 = require("../../types/small-report-dto");
var page_template_1 = require("./page-template");
var description = "Renseigne ici tes bulletins, tu n'auras à les renseigner qu’une seule fois. Ensuite, sélectionne les pour effectuer une recherche. 3 bulletins sont nécessaires pour effectuer une recherche. Pour une recherche la plus adéquate possible, rentre les 3 derniers !";
function ReportPage() {
    var _this = this;
    var _a = React.useState(false), showModal = _a[0], setShowModal = _a[1];
    var _b = React.useState([]), reports = _b[0], setReports = _b[1];
    React.useEffect(function () {
        fetchReports();
    }, []);
    var fetchReports = function () { return __awaiter(_this, void 0, void 0, function () {
        var userReports;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, getUserReports()];
                case 1:
                    userReports = _a.sent();
                    setReports(userReports);
                    return [2 /*return*/];
            }
        });
    }); };
    var closeModal = function () {
        setShowModal(false);
        fetchReports();
    };
    var deleteReport = function (reportId) { return __awaiter(_this, void 0, void 0, function () {
        var result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch("/api/report/".concat(reportId), { method: 'DELETE' })];
                case 1:
                    result = _a.sent();
                    if (result.ok)
                        return [2 /*return*/];
                    setShowModal(true);
                    return [2 /*return*/];
            }
        });
    }); };
    return React.createElement(page_template_1.ProfilePageTemplate, { title: "Bulletins", description: description, color: colors_1.default.GREEN },
        reports.map(function (r) { return React.createElement(article_icon_1.ArticleIcon, { key: r.reportId, reportId: r.reportId, classIcon: "fa-solid fa-file", title: "".concat(r.schoolYear, " - Trimestre ").concat(r.quarter), otherInfo: r.createdAt.toLocaleDateString(), color: colors_1.default.GREEN, onDelete: function () { return deleteReport(r.reportId); } }); }),
        React.createElement("div", { className: "text-center" },
            React.createElement(button_1.Button, { name: "Ajouter un bulletin", template: "primary", customStyle: { margin: '2rem auto 0 auto' }, onClick: function () { return setShowModal(true); } })),
        React.createElement(modal_1.default, { minWidth: 600, parentControl: {
                toggler: setShowModal,
                isVisible: showModal
            } },
            React.createElement(add_report_1.AddReportModal, { closeModal: closeModal })));
}
exports.ReportPage = ReportPage;
var getUserReports = function () { return __awaiter(void 0, void 0, void 0, function () {
    var result, jsonReports, smallReportDTOs;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, fetch("/api/reports")];
            case 1:
                result = _a.sent();
                if (!result.ok)
                    return [2 /*return*/, []];
                return [4 /*yield*/, result.json()];
            case 2:
                jsonReports = _a.sent();
                smallReportDTOs = [];
                jsonReports.forEach(function (jsonReport) {
                    jsonReport.createdAt = new Date(jsonReport.createdAt);
                    smallReportDTOs.push(new small_report_dto_1.default(jsonReport));
                });
                return [2 /*return*/, smallReportDTOs];
        }
    });
}); };
//# sourceMappingURL=report.js.map