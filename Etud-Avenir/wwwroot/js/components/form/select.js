"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
function Select(props) {
    var _a;
    return React.createElement("div", { className: "react-form-group" },
        React.createElement("label", { htmlFor: props.name }, props.label),
        React.createElement("select", { name: props.name, onChange: props.onChange, required: (_a = props.required) !== null && _a !== void 0 ? _a : false }, props.children));
}
exports.default = Select;
//# sourceMappingURL=select.js.map