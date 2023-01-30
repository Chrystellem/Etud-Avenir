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
var FormError = /** @class */ (function (_super) {
    __extends(FormError, _super);
    function FormError() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.render = function () {
            if (_this.props.error) {
                return React.createElement("div", { className: "color-danger font-weight-bolder ".concat(_this.props.error ? 'd-block' : 'd-none') }, _this.props.error);
            }
            if (_this.props.errors) {
                var errors = _this.props.errors.map(function (error, index) { return React.createElement("li", { className: "color-danger", key: index }, error); });
                return React.createElement("ul", { className: "list-style-none font-weight-bolder d-block pl-0" }, errors);
            }
            return;
        };
        return _this;
    }
    return FormError;
}(React.Component));
exports.default = FormError;
//# sourceMappingURL=error.js.map