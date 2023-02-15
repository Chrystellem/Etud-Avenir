"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Button = void 0;
var React = require("react");
function Button(_a) {
    var name = _a.name, template = _a.template, customStyle = _a.customStyle, onClick = _a.onClick;
    if (template)
        return React.createElement("a", { className: "btn btn-".concat(template), style: customStyle, onClick: onClick }, name);
    return React.createElement("a", { style: customStyle }, name);
}
exports.Button = Button;
//# sourceMappingURL=button.js.map