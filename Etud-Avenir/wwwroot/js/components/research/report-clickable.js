"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReportClickable = void 0;
var React = require("react");
function ReportClickable(_a) {
    var title = _a.title, otherInfo = _a.otherInfo;
    var clickHandler = function (event) {
        event.currentTarget.classList.toggle('clicked');
    };
    return React.createElement(React.Fragment, null,
        React.createElement("div", { className: "my-3 d-flex cursor-pointer report-clickable", onClick: clickHandler },
            React.createElement("article", { className: "p-3 d-flex align-items-center cursor-pointer article-icon", style: { minWidth: '230px' } },
                React.createElement("i", { className: 'mr-4 fa-solid fa-file fa-3x color-green' }),
                React.createElement("div", { className: "info" },
                    React.createElement("h5", null, title),
                    React.createElement("span", null, otherInfo)))));
}
exports.ReportClickable = ReportClickable;
//# sourceMappingURL=report-clickable.js.map