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
exports.Checkbox = void 0;
var React = require("react");
var Checkbox = /** @class */ (function (_super) {
    __extends(Checkbox, _super);
    function Checkbox() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.render = function () {
            return React.createElement("div", { className: "d-flex align-items-center mb-3 react-form-group__checkbox" },
                React.createElement("input", { type: "checkbox", className: "mr-3 cursor-pointer", name: _this.props.name, checked: _this.props.checked, onChange: _this.props.onChange }),
                React.createElement("label", { htmlFor: _this.props.name, className: "mb-0" }, _this.props.label));
        };
        return _this;
    }
    return Checkbox;
}(React.Component));
exports.Checkbox = Checkbox;
//# sourceMappingURL=checkbox.js.map