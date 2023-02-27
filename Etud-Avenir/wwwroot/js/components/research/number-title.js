"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
function NumberTitle(_a) {
    var number = _a.number, title = _a.title, isSelected = _a.isSelected;
    return React.createElement("div", { className: "mx-3 d-flex justify-content-center align-items-center number-title ".concat(isSelected ? 'number-title-selected' : '') },
        React.createElement("span", { className: "circle" }, number),
        React.createElement("span", { className: "ml-3" }, title));
}
exports.default = NumberTitle;
//# sourceMappingURL=number-title.js.map