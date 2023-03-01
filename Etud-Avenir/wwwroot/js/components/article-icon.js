"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArticleIcon = void 0;
var React = require("react");
var colors_1 = require("../constants/colors");
var icons_1 = require("../constants/icons");
var edit_report_1 = require("../modals/edit-report");
var action_button_1 = require("./action-button");
var modal_1 = require("./modal");
function ArticleIcon(_a) {
    var reportId = _a.reportId, classIcon = _a.classIcon, title = _a.title, otherInfo = _a.otherInfo, color = _a.color, showActionButtons = _a.showActionButtons, onDelete = _a.onDelete, onClickHandler = _a.onClickHandler, onEdit = _a.onEdit;
    var _b = React.useState(false), showModal = _b[0], setShowModal = _b[1];
    var _c = React.useState(true), showArticle = _c[0], setShowArticle = _c[1];
    var deleteElement = function () {
        setShowArticle(false);
        onDelete();
    };
    var clickHandler = function (event) {
        event.currentTarget.classList.toggle('clicked');
        if (!onClickHandler)
            return;
        onClickHandler();
    };
    var closeModal = function () {
        setShowModal(false);
        if (!onEdit)
            return;
        onEdit();
    };
    if (showActionButtons === undefined || showActionButtons == null) {
        showActionButtons = true;
    }
    if (!showArticle)
        return;
    return React.createElement(React.Fragment, null,
        React.createElement("div", { className: "my-3 d-flex actions-on-hover cursor-pointer" },
            React.createElement("article", { className: "p-3 d-flex align-items-center cursor-pointer actions-on-hover article-icon report-clickable", onClick: clickHandler },
                React.createElement("i", { className: "mr-4 ".concat(classIcon), style: { color: color } }),
                React.createElement("div", { className: "info" },
                    React.createElement("h5", null, title),
                    React.createElement("span", null, otherInfo))),
            showActionButtons ?
                React.createElement("div", { className: "hidden-actions ml-2" },
                    React.createElement(action_button_1.ActionButton, { onClickHandler: function () { return setShowModal(true); }, classIcon: icons_1.default.EDIT, styleParent: { backgroundColor: colors_1.default.GREEN }, manageConfirmation: false }),
                    React.createElement(action_button_1.ActionButton, { onClickHandler: deleteElement, classIcon: icons_1.default.DELETE, styleParent: { backgroundColor: colors_1.default.PINK }, manageConfirmation: true }))
                : ""),
        React.createElement(modal_1.default, { minWidth: 600, parentControl: {
                toggler: setShowModal,
                isVisible: showModal
            } },
            React.createElement(edit_report_1.EditReportModal, { reportId: reportId, closeModal: closeModal })));
}
exports.ArticleIcon = ArticleIcon;
//# sourceMappingURL=article-icon.js.map