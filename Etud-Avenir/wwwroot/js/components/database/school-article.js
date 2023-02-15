"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
function SchoolArticle() {
    return React.createElement("article", { className: "d-flex" },
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
                React.createElement("a", { className: "btn btn-primary" }, "En savoir +"))));
}
exports.default = SchoolArticle;
//# sourceMappingURL=school-article.js.map