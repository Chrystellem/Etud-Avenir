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
var schools_1 = require("../../constants/schools");
var school_informations_response_dto_1 = require("../../types/school-informations-response-dto");
var button_1 = require("../button");
var loader_1 = require("../loader");
var SchoolInformation = /** @class */ (function (_super) {
    __extends(SchoolInformation, _super);
    function SchoolInformation(props) {
        var _this = _super.call(this, props) || this;
        _this.state = new school_informations_response_dto_1.default();
        _this.componentDidMount = function () { return __awaiter(_this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, getSchoolInformations(this.props.schoolId)];
                    case 1:
                        result = _a.sent();
                        this.setState(result);
                        console.log(result);
                        return [2 /*return*/];
                }
            });
        }); };
        _this.renderDescription = function () {
            return React.createElement(React.Fragment, null,
                React.createElement("div", { className: "template-profile-page__description-element__header d-flex align-items-center" },
                    React.createElement("img", { src: schools_1.default[_this.state.name].img }),
                    React.createElement("div", { className: "ml-3" },
                        React.createElement("h5", null, _this.state.name),
                        React.createElement("span", null,
                            _this.state.city,
                            " - ",
                            _this.state.zipCode))),
                React.createElement("div", { className: "template-profile-page__description-element__program" },
                    React.createElement("h5", null, "Programme"),
                    React.createElement("div", { className: "d-flex justify-content-between flex-wrap gap-3" },
                        React.createElement("span", null,
                            "Dur\u00E9e: ",
                            _this.state.programDuration,
                            " ans"),
                        React.createElement("span", null,
                            "Domaine: ",
                            _this.state.domain),
                        React.createElement("span", null,
                            "Type d'admission: ",
                            _this.state.admissionType),
                        React.createElement("span", null,
                            "Apprentissage: ",
                            _this.state.isInternshipAvailable ? "Oui" : "Non"),
                        React.createElement("span", null,
                            "Public: ",
                            _this.state.isPublic ? "Oui" : "Non"),
                        React.createElement("span", null,
                            "Reconnu par l'\u00E9tat: ",
                            _this.state.isStateApproved ? "Oui" : "Non"))),
                React.createElement("div", { className: "template-profile-page__description-element__fees" },
                    React.createElement("h5", null, "Frais"),
                    React.createElement("ul", { className: "list-style-none pl-0" }, _this.state.fees.map(function (fee) { return React.createElement("li", { key: fee.name },
                        fee.name,
                        ":  ",
                        fee.amount,
                        " \u20AC"); }))),
                _this.state.otherInformations ?
                    React.createElement("div", { className: "template-profile-page__description-element__other" },
                        React.createElement("h5", null, "Informations compl\u00E9mentaires"),
                        React.createElement("p", null, _this.state.otherInformations))
                    : "",
                React.createElement("a", { className: 'btn btn-parimary', href: schools_1.default[_this.state.name].website }, "Voir le site"),
                React.createElement(button_1.Button, { name: "Fermer", template: "danger", onClick: _this.props.onClickHandler }));
        };
        _this.render = function () {
            return React.createElement("div", null,
                React.createElement("div", { className: "template-profile-page__description-element" }, _this.state.schoolId == null || _this.state.schoolId == undefined ?
                    React.createElement(loader_1.default, null) :
                    _this.renderDescription()));
        };
        return _this;
    }
    return SchoolInformation;
}(React.Component));
exports.default = SchoolInformation;
var getSchoolInformations = function (schoolId) { return __awaiter(void 0, void 0, void 0, function () {
    var result;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, fetch("/api/schools/".concat(schoolId))];
            case 1:
                result = _a.sent();
                if (!result.ok)
                    return [2 /*return*/];
                return [2 /*return*/, result.json()];
        }
    });
}); };
//# sourceMappingURL=school-informations.js.map