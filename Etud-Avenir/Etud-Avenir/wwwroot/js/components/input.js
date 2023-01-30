"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var Input = /** @class */ (function (_super) {
    __extends(Input, _super);
    function Input(props) {
        var _this = _super.call(this, props) || this;
        _this.renderPasswordRequirements = function () {
            if (!_this.props.showPasswordRequirements)
                return;
            var requirements = [
                "Au moins 8 caractères",
                "Au moins un chiffre",
                "Au moins un caractère spécial"
            ];
            var listRequirements = requirements.map(function (requirement, index) { return React.createElement("li", { key: "requirement".concat(index), className: "p-0" }, requirement); });
            return React.createElement("ul", { className: "pl-0 list-style-none" }, listRequirements);
        };
        _this.state = {
            showPasswordRequirements: _this.props.showPasswordRequirements == null ? false : _this.props.showPasswordRequirements
        };
        return _this;
    }
    Input.prototype.render = function () {
        var _a;
        return React.createElement("div", { className: "react-form-group" },
            React.createElement("label", { htmlFor: this.props.name }, this.props.label),
            this.renderPasswordRequirements(),
            React.createElement("input", { name: this.props.name, placeholder: this.props.placeholder, type: this.props.inputType, value: this.props.value, onChange: this.props.onChange, required: (_a = this.props.required) !== null && _a !== void 0 ? _a : false }));
    };
    return Input;
}(React.Component));
exports.default = Input;
//# sourceMappingURL=input.js.map