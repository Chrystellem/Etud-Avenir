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
exports.EditReportModal = void 0;
var React = require("react");
var react_cookie_1 = require("react-cookie");
var error_1 = require("../components/form/error");
var select_1 = require("../components/form/select");
var formButton_1 = require("../components/formButton");
var input_1 = require("../components/input");
var loader_1 = require("../components/loader");
var report_1 = require("../constants/report");
//import { getCookieAndDeserialize } from '../services/cookie-service'
var report_service_1 = require("../services/report-service");
var report_dto_1 = require("../types/report-dto");
function EditReportModal(_a) {
    var _this = this;
    var reportId = _a.reportId, closeModal = _a.closeModal;
    var _b = React.useState(new report_dto_1.ReportGradesRequestDTO()), state = _b[0], setState = _b[1];
    var _c = (0, react_cookie_1.useCookies)(['reports']), cookies = _c[0], setCookie = _c[1];
    var _d = React.useState(""), error = _d[0], setError = _d[1];
    React.useEffect(function () {
        fetchReport();
    }, []);
    var fetchReport = function () { return __awaiter(_this, void 0, void 0, function () {
        var reportGrades;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, getReportGradesDTO(reportId)];
                case 1:
                    reportGrades = _a.sent();
                    setState(reportGrades);
                    return [2 /*return*/];
            }
        });
    }); };
    var handleGradeChange = function (event, subject) {
        var gradeToEdit = state.GradeBySubject.find(function (e) { return e.subject === subject; });
        gradeToEdit.grade = parseInt(event.currentTarget.value);
        var newState = new report_dto_1.ReportGradesRequestDTO(__assign({}, state));
        setState(newState);
    };
    var handleQuarterChange = function (event) {
        var _a = (0, report_service_1.getQuarterAndSchoolYearFromSelection)(event.currentTarget.value), quarter = _a.quarter, schoolYear = _a.schoolYear;
        setState(__assign(__assign({}, state), { Quarter: quarter, SchoolYear: schoolYear }));
    };
    var getReportGradesDTO = function (reportId) { return __awaiter(_this, void 0, void 0, function () {
        var reportDTOinCookie, result, responseDTO;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    reportDTOinCookie = getReportDTOFromCookies(reportId, cookies.reports);
                    if (reportDTOinCookie)
                        return [2 /*return*/, reportDTOinCookie];
                    return [4 /*yield*/, fetch("/api/reports/".concat(reportId))];
                case 1:
                    result = _a.sent();
                    if (!result.ok) {
                        setError("Une erreur est survenue");
                        return [2 /*return*/];
                    }
                    return [4 /*yield*/, result.json()];
                case 2:
                    responseDTO = (_a.sent());
                    return [2 /*return*/, new report_dto_1.ReportGradesRequestDTO({
                            ReportId: responseDTO.reportId,
                            GradeBySubject: responseDTO.gradeBySubject,
                            Quarter: responseDTO.quarter,
                            SchoolYear: responseDTO.schoolYear
                        })];
            }
        });
    }); };
    var handleSubmit = function (event) { return __awaiter(_this, void 0, void 0, function () {
        var reportDTOinCookie, result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    event.preventDefault();
                    if (!state.SchoolYear || !state.Quarter) {
                        return [2 /*return*/, setError("Tu n'as pas sélectionné de trimestre")];
                    }
                    if (!state.GradeBySubject.reduce(function (a, b) { return a + b.grade; }, 0)) {
                        return [2 /*return*/, setError("Soit tu es un cancre, soit tu n'as pas indiqué tes notes...")];
                    }
                    reportDTOinCookie = getReportDTOFromCookies(reportId, cookies.reports);
                    if (reportDTOinCookie) {
                        editReportDTOinCookie();
                        return [2 /*return*/, closeModal()];
                    }
                    return [4 /*yield*/, fetch("/api/report", { method: "PUT", headers: { "content-type": "application/json" }, body: JSON.stringify(state) })];
                case 1:
                    result = _a.sent();
                    if (!result.ok)
                        return [2 /*return*/, setError("Une erreur est survenue :( Reessaie plus tard")];
                    closeModal();
                    return [2 /*return*/];
            }
        });
    }); };
    var editReportDTOinCookie = function () {
        var reportDTO = cookies.reports.find(function (r) { return r.reportId === reportId; });
        reportDTO.quarter = state.Quarter;
        reportDTO.schoolYear = state.SchoolYear;
        reportDTO.gradeBySubject = state.GradeBySubject;
        setCookie("reports", cookies.reports);
    };
    var renderGrades = function () {
        if (!state.GradeBySubject.length)
            return React.createElement(loader_1.default, null);
        return state.GradeBySubject.map(function (_a, index) {
            var subject = _a.subject, grade = _a.grade;
            return React.createElement(input_1.default, { key: "grade-".concat(index), label: subject, name: subject, required: false, onChange: function (e) { return handleGradeChange(e, subject); }, placeholder: "", inputType: "number", value: grade.toString() });
        });
    };
    return React.createElement("form", { onSubmit: handleSubmit },
        React.createElement(React.Fragment, null,
            React.createElement("legend", null, "Modifier un bulletin"),
            React.createElement(error_1.default, { error: error }),
            React.createElement(select_1.default, { label: "Trimestre", name: "Quarter", onChange: handleQuarterChange, required: true, value: (0, report_service_1.getQuarterAndSchoolYearSelectValue)(state.Quarter, state.SchoolYear) },
                React.createElement("option", null, "S\u00E9lectionne un trimestre"),
                report_1.QUARTER_OPTIONS.map(function (_a, index) {
                    var label = _a.label, value = _a.value;
                    return React.createElement("option", { key: "option-".concat(index), value: value }, label);
                })),
            React.createElement("span", null, "Merci de renseigner tes moyennes du trimestre pour les mati\u00E8res ci-dessous. Laisser vide si tu n'as pas fait l\u2019une des mati\u00E8res indiqu\u00E9es"),
            React.createElement("div", { className: "report-modal__grades" }, renderGrades()),
            React.createElement(formButton_1.default, { name: "Valider", isImg: false })));
}
exports.EditReportModal = EditReportModal;
var getReportDTOFromCookies = function (reportId, reportDTOs) {
    if (!reportDTOs || !reportDTOs.length)
        return null;
    var reportDTO = reportDTOs.find(function (r) { return r.reportId === reportId; });
    if (!reportDTO)
        return null;
    return new report_dto_1.ReportGradesRequestDTO({
        ReportId: reportDTO.reportId,
        Quarter: reportDTO.quarter,
        SchoolYear: reportDTO.schoolYear,
        GradeBySubject: reportDTO.gradeBySubject
    });
};
//# sourceMappingURL=edit-report.js.map