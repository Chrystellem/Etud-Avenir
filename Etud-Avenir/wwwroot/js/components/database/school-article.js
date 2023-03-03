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
var React = require("react");
var schools_1 = require("../../constants/schools");
var school_informations_1 = require("../school/school-informations");
function SchoolArticle(_a) {
    var _this = this;
    var _b;
    var school = _a.school, isResult = _a.isResult, displayFavoriteBtn = _a.displayFavoriteBtn;
    var _c = React.useState(false), showModal = _c[0], setShowModal = _c[1];
    var getModal = function () {
        if (!showModal)
            return;
        return React.createElement("div", { className: 'modal d-block' },
            React.createElement("div", { className: "modal-body", style: { backgroundColor: 'transparent' } },
                React.createElement(school_informations_1.default, { onClickHandler: function () { return setShowModal(false); }, curriculumId: school.curriculumId })));
    };
    /**
     * Ajoute l'école aux favoris (partie profil du compte)
     */
    var saveToFavorite = function () { return __awaiter(_this, void 0, void 0, function () {
        var result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch("/api/curriculums/favorites", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify({
                            curriculumId: school.curriculumId
                        })
                    })];
                case 1:
                    result = _a.sent();
                    if (!result.ok)
                        return [2 /*return*/];
                    return [2 /*return*/];
            }
        });
    }); };
    return React.createElement(React.Fragment, null,
        React.createElement("article", { className: "d-flex" },
            React.createElement("img", { src: (_b = schools_1.default[school.name]) === null || _b === void 0 ? void 0 : _b.img }),
            React.createElement("div", { className: "w-100 p-4" },
                React.createElement("div", { className: "d-flex align-items-end justify-content-between" },
                    React.createElement("div", { className: "d-flex align-items-end" },
                        React.createElement("h4", null, school.name),
                        React.createElement("span", { className: "ml-4" }, "".concat(school.city, " - ").concat(school.zipCode))),
                    isResult ?
                        React.createElement("div", { className: "compatibility d-flex align-items-end" },
                            React.createElement("p", { className: "mb-0" }, "Indice de compatibilit\u00E9"),
                            React.createElement("span", { className: "ml-2" }, school.score)) :
                        ""),
                React.createElement("div", { className: "d-flex justify-content-between w-100 align-items-end mt-4" },
                    React.createElement("ul", { className: "list-style-none" },
                        React.createElement("li", null,
                            React.createElement("i", { className: "fa-solid fa-flask color-green" }),
                            " ",
                            school.domain),
                        React.createElement("li", null,
                            React.createElement("i", { className: "fa-solid fa-vial color-green" }),
                            " ",
                            school.formation,
                            " ")),
                    React.createElement("div", null,
                        displayFavoriteBtn ?
                            React.createElement("a", { className: "btn btn-primary", onClick: saveToFavorite }, "Ajouter aux favoris")
                            : "",
                        React.createElement("a", { className: "btn btn-primary ml-2", onClick: function () { return setShowModal(true); } }, "En savoir +"))))),
        getModal());
}
exports.default = SchoolArticle;
//# sourceMappingURL=school-article.js.map