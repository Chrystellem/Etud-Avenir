"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfileMainPage = void 0;
var React = require("react");
var react_router_dom_1 = require("react-router-dom");
var ProfileSaveButton_1 = require("../../components/ProfileSaveButton");
function ProfileMainPage(props, state) {
    var navigate = (0, react_router_dom_1.useNavigate)();
    var handleEmailClick = function () {
        navigate('/profil/email');
    };
    return React.createElement("div", { className: "profile-container" },
        React.createElement("div", { className: "mx-5 px-5" },
            React.createElement("h1", { className: "text-center mt-4" }, "Profil"),
            React.createElement("span", { onClick: handleEmailClick, className: "d-block text-center cursor-pointer" },
                "Email : ",
                React.createElement("em", null, "xxxxx@gmail.com"),
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