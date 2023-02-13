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
var react_router_dom_1 = require("react-router-dom");
var emailConfirmation_1 = require("../api/emailConfirmation");
var modal_1 = require("../components/modal");
var forgotPassword_1 = require("../modals/forgotPassword");
var login_1 = require("../modals/login");
var registration_1 = require("../modals/registration");
var resetPassword_1 = require("../modals/resetPassword");
var Identity = /** @class */ (function (_super) {
    __extends(Identity, _super);
    function Identity() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.render = function () {
            return React.createElement(react_router_dom_1.Routes, null,
                React.createElement(react_router_dom_1.Route, { path: "/connexion", element: React.createElement(modal_1.default, { minWidth: 350, closeByDefault: false },
                        React.createElement(login_1.default, null)) }),
                React.createElement(react_router_dom_1.Route, { path: "/inscription", element: React.createElement(modal_1.default, { minWidth: 400, closeByDefault: false },
                        React.createElement(registration_1.default, null)) }),
                React.createElement(react_router_dom_1.Route, { path: "/confirmation-email", element: React.createElement(emailConfirmation_1.default, null) }),
                React.createElement(react_router_dom_1.Route, { path: "/mot-de-passe-oublie", element: React.createElement(modal_1.default, { minWidth: 350, closeByDefault: false },
                        React.createElement(forgotPassword_1.default, null)) }),
                React.createElement(react_router_dom_1.Route, { path: "/reinitialisation-mot-de-passe", element: React.createElement(modal_1.default, { minWidth: 350, closeByDefault: false },
                        React.createElement(resetPassword_1.default, null)) }));
        };
        return _this;
    }
    return Identity;
}(React.Component));
exports.default = Identity;
//# sourceMappingURL=identity.js.map