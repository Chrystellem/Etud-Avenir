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
var Nav = /** @class */ (function (_super) {
    __extends(Nav, _super);
    function Nav() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.render = function () {
            return React.createElement("header", null,
                React.createElement("nav", { className: "navbar navbar-expand-sm navbar-toggleable-sm navbar-light bg-white border-bottom box-shadow" },
                    React.createElement("div", { className: "container-fluid d-flex justify-content-between" },
                        React.createElement("a", { className: "navbar-brand", href: "/" },
                            React.createElement("img", { src: "/images/logo_color.png", height: "36" })),
                        _this.props.isUserAuthentified ? React.createElement(NavLogin, null) : React.createElement(NavLogout, null))));
        };
        return _this;
    }
    return Nav;
}(React.Component));
exports.default = Nav;
/**
 * Représente la nav quand l'utilisateur est connecté
 * */
var NavLogin = /** @class */ (function (_super) {
    __extends(NavLogin, _super);
    function NavLogin() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.render = function () {
            return React.createElement(React.Fragment, null,
                React.createElement("ul", { className: "navbar-nav" },
                    React.createElement("li", { className: "nav-item" },
                        React.createElement("a", { className: "nav-link", href: "/recherche" }, "Rechercher")),
                    React.createElement("li", { className: "nav-item" },
                        React.createElement("a", { className: "nav-link", href: "/ecoles" }, "Base de donn\u00E9es")),
                    React.createElement("li", { className: "nav-item" },
                        React.createElement("a", { className: "nav-link", href: "/contact" }, "Contact"))),
                React.createElement("ul", { className: "navbar-nav" },
                    React.createElement("li", { className: "nav-item" },
                        React.createElement("a", { className: "nav-link", href: "/profil" }, "Profil")),
                    React.createElement("li", { className: "nav-item" },
                        React.createElement("a", { className: "nav-link", href: "/logout" }, "D\u00E9connexion"))));
        };
        return _this;
    }
    return NavLogin;
}(React.Component));
/**
 * Réprésente la navbar quand l'utilisateur est déconnecté
 */
var NavLogout = /** @class */ (function (_super) {
    __extends(NavLogout, _super);
    function NavLogout() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.render = function () {
            return React.createElement(React.Fragment, null,
                React.createElement("ul", { className: "navbar-nav" },
                    React.createElement("li", { className: "nav-item" },
                        React.createElement("a", { className: "nav-link", href: "/recherche" }, "Rechercher")),
                    React.createElement("li", { className: "nav-item" },
                        React.createElement("a", { className: "nav-link", href: "/ecoles" }, "Base de donn\u00E9es")),
                    React.createElement("li", { className: "nav-item" },
                        React.createElement("a", { className: "nav-link", href: "/contact" }, "Contact"))),
                React.createElement("ul", { className: "navbar-nav" },
                    React.createElement("li", { className: "nav-item" },
                        React.createElement(react_router_dom_1.Link, { className: "nav-link", to: "/inscription" }, "Inscription")),
                    React.createElement("li", { className: "nav-item" },
                        React.createElement(react_router_dom_1.Link, { className: "nav-link", to: "/connexion" }, "Connexion"))));
        };
        return _this;
    }
    return NavLogout;
}(React.Component));
//# sourceMappingURL=nav.js.map