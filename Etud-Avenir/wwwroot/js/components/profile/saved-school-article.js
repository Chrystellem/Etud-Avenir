"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var colors_1 = require("../../constants/colors");
var icons_1 = require("../../constants/icons");
var action_button_1 = require("../action-button");
function SavedSchoolArticle(_a) {
    var logoPath = _a.logoPath, name = _a.name, savedDate = _a.savedDate, formation = _a.formation, setShowPartial = _a.setShowPartial;
    return React.createElement("div", { className: "my-3 d-flex actions-on-hover cursor-pointer", onClick: function () { return setShowPartial(true); } },
        React.createElement("article", { className: "saved-school d-flex align-items-center" },
            React.createElement("div", { className: "saved-school__img" },
                React.createElement("img", { src: logoPath })),
            React.createElement("div", { className: "school-info mx-3 py-2" },
                React.createElement("div", null,
                    React.createElement("h5", { className: "mb-1" }, name),
                    React.createElement("span", null, formation)),
                React.createElement("span", { className: "d-block mt-2" },
                    "Ajout\u00E9 le ",
                    savedDate.toLocaleDateString()))),
        React.createElement("div", { className: "saved-school__actions hidden-actions ml-2" },
            React.createElement(action_button_1.ActionButton, { onClickHandler: function () { return console.log("coucou"); }, classIcon: icons_1.default.DELETE, styleParent: { backgroundColor: colors_1.default.PINK }, manageConfirmation: true })));
}
exports.default = SavedSchoolArticle;
//# sourceMappingURL=saved-school-article.js.map