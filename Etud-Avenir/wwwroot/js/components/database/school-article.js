"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var school_informations_1 = require("../school/school-informations");
function SchoolArticle() {
    var _a = React.useState(false), showModal = _a[0], setShowModal = _a[1];
    var getModal = function () {
        if (!showModal)
            return;
        return React.createElement("div", { className: 'modal d-block' },
            React.createElement("div", { className: "modal-body", style: { backgroundColor: 'transparent' } },
                React.createElement(school_informations_1.default, { onClickHandler: function () { return setShowModal(false); } })));
    };
    return React.createElement(React.Fragment, null,
        React.createElement("article", { className: "d-flex" },
            React.createElement("img", { src: "https://upload.wikimedia.org/wikipedia/fr/thumb/d/d8/Epita.png/800px-Epita.png?20180717093238" }),
            React.createElement("div", { className: "w-100 p-4" },
                React.createElement("div", { className: "d-flex align-items-end" },
                    React.createElement("h4", null, "EFREI Paris"),
                    React.createElement("span", { className: "ml-4" }, "78140 - Villejuif")),
                React.createElement("div", { className: "d-flex justify-content-between w-100 align-items-end mt-4" },
                    React.createElement("ul", { className: "list-style-none" },
                        React.createElement("li", null,
                            React.createElement("i", { className: "fa-solid fa-flask color-green" }),
                            " Domaine 1, 2, xxx"),
                        React.createElement("li", null,
                            React.createElement("i", { className: "fa-solid fa-vial color-green" }),
                            " Programme 1, 2, 3, ...")),
                    React.createElement("a", { className: "btn btn-primary", onClick: function () { return setShowModal(true); } }, "En savoir +")))),
        getModal());
}
exports.default = SchoolArticle;
//# sourceMappingURL=school-article.js.map