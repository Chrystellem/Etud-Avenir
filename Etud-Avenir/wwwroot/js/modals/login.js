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
var react_router_dom_1 = require("react-router-dom");
var checkbox_1 = require("../components/form/checkbox");
var error_1 = require("../components/form/error");
var formButton_1 = require("../components/formButton");
var input_1 = require("../components/input");
var LoginModal = /** @class */ (function (_super) {
    __extends(LoginModal, _super);
    function LoginModal() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            email: '',
            password: '',
            rememberMe: false,
            errorMessage: ''
        };
        _this.handleChangeEmail = function (event) {
            _this.setState({ email: event.target.value });
        };
        _this.handleChangePassword = function (event) {
            _this.setState({ password: event.target.value });
        };
        _this.handleChangeRememberMe = function () {
            _this.setState({ rememberMe: !_this.state.rememberMe });
        };
        _this.handleSubmit = function (event) { return __awaiter(_this, void 0, void 0, function () {
            var response, payload;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        event.preventDefault();
                        return [4 /*yield*/, fetch('/Identity/LoginAPI', {
                                method: 'POST',
                                headers: {
                                    'Accept': 'application/json',
                                    'Content-Type': 'application/json'
                                },
                                body: JSON.stringify({
                                    Email: this.state.email,
                                    Password: this.state.password,
                                    RememberMe: this.state.rememberMe
                                })
                            })];
                    case 1:
                        response = _a.sent();
                        if (response.ok)
                            return [2 /*return*/, window.location.href = '/'];
                        return [4 /*yield*/, response.json()];
                    case 2:
                        payload = _a.sent();
                        this.setState({ errorMessage: payload.error });
                        return [2 /*return*/];
                }
            });
        }); };
        _this.render = function () {
            return React.createElement("div", null,
                React.createElement("form", { onSubmit: _this.handleSubmit },
                    React.createElement("legend", null, "Se connecter"),
                    React.createElement(error_1.default, { error: _this.state.errorMessage }),
                    React.createElement(input_1.default, { name: "Email", label: "Email", inputType: "email", placeholder: "email@efrei.fr", value: _this.state.email, onChange: _this.handleChangeEmail }),
                    React.createElement(input_1.default, { name: "Password", label: "Mot de passe", inputType: "password", placeholder: "************", value: _this.state.password, onChange: _this.handleChangePassword }),
                    React.createElement(checkbox_1.Checkbox, { name: "RememberMe", label: "Se souvenir de moi ?", checked: _this.state.rememberMe, onChange: _this.handleChangeRememberMe }),
                    React.createElement(formButton_1.default, { name: "Valider", isImg: false })),
                React.createElement("hr", null),
                React.createElement("span", { className: "d-block" },
                    "Mot de passe oubli\u00E9 ?",
                    React.createElement(react_router_dom_1.Link, { to: "/mot-de-passe-oublie", className: "ml-2 italic underline-hover" }, "R\u00E9initialise-le")),
                React.createElement("span", { className: "d-block mt-2" },
                    "Tu n'as pas de compte ? ",
                    React.createElement(react_router_dom_1.Link, { to: "/inscription", className: "ml-2 italic underline-hover" }, "Inscris-toi")));
        };
        return _this;
    }
    return LoginModal;
}(React.Component));
exports.default = LoginModal;
//# sourceMappingURL=login.js.map