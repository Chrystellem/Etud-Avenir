"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReportPage = void 0;
var React = require("react");
var article_icon_1 = require("../../components/article-icon");
var button_1 = require("../../components/button");
var modal_1 = require("../../components/modal");
var colors_1 = require("../../constants/colors");
var report_1 = require("../../modals/report");
var page_template_1 = require("./page-template");
var description = "Renseigne ici tes bulletins, tu n'auras à les renseigner qu’une seule fois. Ensuite, sélectionne les pour effectuer une recherche. 3 bulletins sont nécessaires pour effectuer une recherche. Pour une recherche la plus adéquate possible, rentre les 3 derniers !";
function ReportPage() {
    var _a = React.useState(false), showModal = _a[0], setShowModal = _a[1];
    return React.createElement(page_template_1.ProfilePageTemplate, { title: "Bulletins", description: description, color: colors_1.default.GREEN },
        React.createElement(article_icon_1.ArticleIcon, { classIcon: "fa-solid fa-file", title: "Trimestre 1", otherInfo: "xxx", color: colors_1.default.GREEN }),
        React.createElement(article_icon_1.ArticleIcon, { classIcon: "fa-solid fa-file", title: "Trimestre 1", otherInfo: "xxx", color: colors_1.default.GREEN }),
        React.createElement(article_icon_1.ArticleIcon, { classIcon: "fa-solid fa-file", title: "Trimestre 1", otherInfo: "xxx", color: colors_1.default.GREEN }),
        React.createElement("div", { className: "text-center" },
            React.createElement(button_1.Button, { name: "Ajouter un bulletin", template: "primary", customStyle: { margin: '2rem auto 0 auto' }, onClick: function () { return setShowModal(true); } })),
        React.createElement(modal_1.default, { minWidth: 600, parentControl: {
                toggler: setShowModal,
                isVisible: showModal
            } },
            React.createElement(report_1.ReportModal, { reportId: 0 })));
}
exports.ReportPage = ReportPage;
//# sourceMappingURL=report.js.map