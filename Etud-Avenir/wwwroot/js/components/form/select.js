"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
function Select(props) {
    return React.createElement("div", { className: "react-form-group" },
        React.createElement("label", { htmlFor: props.name }, props.label),
        React.createElement("select", { name: props.name, onChange: props.onChange, required: props.required, value: props.value }, props.children));
}
exports.default = Select;
//# sourceMappingURL=select.js.map