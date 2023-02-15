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
exports.ReportModal = void 0;
var React = require("react");
var select_1 = require("../components/form/select");
var formButton_1 = require("../components/formButton");
var input_1 = require("../components/input");
var subjects = ["Mathématiques", "Physique-Chimie", "SVT", "SI", "Histoire-Géo", "SES", "Philosophie", "Français", "LV2"];
var quarterOptions = ["Trimestre 1", "Trimestre 2"];
function ReportModal(_a) {
    var reportId = _a.reportId;
    var _b = React.useState(getModalDefaultValues()), modalData = _b[0], setModalData = _b[1];
    React.useEffect(function () {
        function fetchReport() {
            return __awaiter(this, void 0, void 0, function () {
                var data;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, getReportInformations(reportId)];
                        case 1:
                            data = _a.sent();
                            setModalData(data);
                            return [2 /*return*/];
                    }
                });
            });
        }
        fetchReport();
    }, []);
    var handleGradeChange = function (event, subject) {
        var _a, _b;
        setModalData(__assign(__assign({}, modalData), (_a = {}, _a['grades'] = __assign(__assign({}, modalData.grades), (_b = {}, _b[subject] = event.target.value, _b)), _a)));
    };
    return React.createElement("form", null,
        React.createElement(React.Fragment, null,
            React.createElement("legend", null, "Ajouter/Modifier un bulletin"),
            React.createElement(select_1.default, { label: "Trimestre", name: "Semester", onChange: function () { return undefined; }, required: true },
                React.createElement("option", null, "S\u00E9lectionne un trimestre"),
                quarterOptions.map(function (quarterOption, index) { return React.createElement("option", { key: "option-".concat(index) }, quarterOption); })),
            React.createElement("span", null, "Merci de renseigner tes moyennes du trimestre pour les mati\u00E8res ci-dessous. Laisser vide si tu n'as pas fait l\u2019une des mati\u00E8res indiqu\u00E9es"),
            React.createElement("div", { className: "report-modal__grades" }, subjects.map(function (subject, index) { return React.createElement(input_1.default, { key: "grade-".concat(index), label: subject, name: subject, required: false, onChange: function (e) { return handleGradeChange(e, subject); }, placeholder: "", inputType: "number", value: modalData.grades[subject] }); })),
            React.createElement(formButton_1.default, { name: "Valider", isImg: false })));
}
exports.ReportModal = ReportModal;
function getReportInformations(reportId) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            if (reportId <= 0) {
                return [2 /*return*/, getModalDefaultValues()];
            }
            // TODO : Récupérer les informations de ces notes
            return [2 /*return*/, {
                    quarter: "Trimestre 2",
                    grades: {
                        "Mathématiques": 15,
                        "Physique-Chimie": 15,
                        "SVT": 15,
                        "SI": 15,
                        "Histoire-Géo": 15,
                        "SES": 15,
                        "Philosophie": 15,
                        "Français": 15,
                        "LV2": 15,
                    },
                    test: ""
                }];
        });
    });
}
function getModalDefaultValues() {
    return {
        quarter: "",
        grades: {
            "Mathématiques": 0,
            "Physique-Chimie": 0,
            "SVT": 0,
            "SI": 0,
            "Histoire-Géo": 0,
            "SES": 0,
            "Philosophie": 0,
            "Français": 0,
            "LV2": 0,
        },
        test: ""
    };
}
//# sourceMappingURL=report.js.map