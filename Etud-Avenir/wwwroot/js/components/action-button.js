"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActionButton = void 0;
var React = require("react");
var colors_1 = require("../constants/colors");
var icons_1 = require("../constants/icons");
function ActionButton(_a) {
    var onClickHandler = _a.onClickHandler, classIcon = _a.classIcon, styleParent = _a.styleParent, styleIcon = _a.styleIcon, manageConfirmation = _a.manageConfirmation;
    var _b = React.useState(false), showDeleteConfirmation = _b[0], setShowDeleteConfirmation = _b[1];
    if (!manageConfirmation) {
        return React.createElement("div", { className: "action-icon-btn color-white", onClick: onClickHandler, style: styleParent },
            React.createElement("i", { className: classIcon, style: styleIcon }));
    }
    var deleteBtn = React.createElement("div", { className: "action-icon-btn color-white", onClick: function () { return setShowDeleteConfirmation(true); }, style: styleParent },
        React.createElement("i", { className: classIcon, style: styleIcon }));
    return React.createElement(React.Fragment, null, !showDeleteConfirmation ?
        deleteBtn :
        React.createElement("div", { className: "action-icon-btn__delete-confirmation" },
            React.createElement("div", { className: "action-icon-btn color-white", style: { backgroundColor: colors_1.default.PINK }, onClick: function () { return setShowDeleteConfirmation(false); } },
                React.createElement("i", { className: icons_1.default.DELETE, style: styleIcon })),
            React.createElement("span", null, "Confirmer la suppression ?"),
            React.createElement("div", { className: "action-icon-btn color-white", onClick: onClickHandler, style: { backgroundColor: colors_1.default.GREEN } },
                React.createElement("i", { className: "fa-solid fa-check" }))));
}
exports.ActionButton = ActionButton;
//function DeleteButton(showConfirmation: boolean, styleParent: React.CSSProperties, showConfirmation ) {
//    return <div className="action-icon-btn color-white" onClick={showConfirmation} style={styleParent}>
//        <i className={classIcon} style={styleIcon}></i>
//    </div>
//}
//function showConfirmation() {
//}
//# sourceMappingURL=action-button.js.map