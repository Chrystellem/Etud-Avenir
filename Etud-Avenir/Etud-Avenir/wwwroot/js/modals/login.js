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
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var formButton_1 = require("../components/formButton");
var input_1 = require("../components/input");
var modal_1 = require("../components/modal");
var LoginModal = /** @class */ (function (_super) {
    __extends(LoginModal, _super);
    function LoginModal() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.loginModalRenderer = React.createElement("form", null,
            React.createElement("legend", null, "Se connecter"),
            React.createElement(input_1.default, { label: "Label test", inputType: "email", placeholder: "email@efrei.fr" }),
            React.createElement(input_1.default, { label: "Label test 2", inputType: "password", placeholder: "************" }),
            React.createElement(formButton_1.default, { name: "Valider", isImg: false }));
        _this.componentDidMount = function () {
            var loginButton = document.querySelector('.nav-item-login');
            loginButton.addEventListener('click', _this.toggleModal);
        };
        _this.render = function () {
            return _this.modalRenderer(_this.loginModalRenderer);
        };
        return _this;
    }
    return LoginModal;
}(modal_1.default));
exports.default = LoginModal;
//# sourceMappingURL=login.js.map