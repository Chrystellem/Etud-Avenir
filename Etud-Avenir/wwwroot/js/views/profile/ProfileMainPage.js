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
exports.ProfileMainPage = void 0;
var React = require("react");
var react_router_dom_1 = require("react-router-dom");
var ProfileSaveButton_1 = require("../../components/ProfileSaveButton");
var user_service_1 = require("../../services/user-service");
function ProfileMainPage(props, state) {
    var navigate = (0, react_router_dom_1.useNavigate)();
    var _a = React.useState({ email: "", id: "" }), userInfo = _a[0], setUserInfo = _a[1];
    React.useEffect(function () {
        function fetchUserInfo() {
            return __awaiter(this, void 0, void 0, function () {
                var data;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, (0, user_service_1.getUserInformations)()];
                        case 1:
                            data = _a.sent();
                            setUserInfo(data);
                            return [2 /*return*/];
                    }
                });
            });
        }
        fetchUserInfo();
    }, []);
    var handleEmailClick = function () {
        navigate('/profil/email');
    };
    return React.createElement("div", { className: "profile-container" },
        React.createElement("div", { className: "mx-5 px-5" },
            React.createElement("h1", { className: "text-center mt-4" }, "Profil"),
            React.createElement("span", { onClick: handleEmailClick, className: "d-block text-center cursor-pointer" },
                "Email : ",
                React.createElement("em", null, userInfo.email),
                " ",
                React.createElement("i", { className: "ml-2 fa fa-edit" })),
            React.createElement("section", { className: "mt-5" },
                React.createElement("h2", { className: "my-saves-title" }, "Mes sauvegardes"),
                React.createElement("div", { className: "container-profile-buttons" },
                    React.createElement(ProfileSaveButton_1.ProfileSaveButton, { color: "#03A696", name: "Notes", classIcon: "fa-solid fa-file", onClickRedirectTo: "/profil/bulletins" }),
                    React.createElement(ProfileSaveButton_1.ProfileSaveButton, { color: "#F2668B", name: "Ecoles favorites", classIcon: "fa-sharp fa-solid fa-graduation-cap", onClickRedirectTo: "/profil/ecoles" }))),
            React.createElement("section", { className: "py-5" },
                React.createElement("h2", { className: "other-actions-title" }, "Autres actions"),
                React.createElement("ul", { className: "list-style-none" },
                    React.createElement("li", null,
                        '>>',
                        " Modifier le mot de passe"),
                    React.createElement("li", null,
                        '>>',
                        " Supprimer le compte")))));
}
exports.ProfileMainPage = ProfileMainPage;
//# sourceMappingURL=ProfileMainPage.js.map