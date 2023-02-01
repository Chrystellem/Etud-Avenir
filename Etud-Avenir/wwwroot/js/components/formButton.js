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
var FormButton = /** @class */ (function (_super) {
    __extends(FormButton, _super);
    function FormButton() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FormButton.prototype.render = function () {
        if (this.props.isImg) {
            return React.createElement("div", null,
                React.createElement("button", { className: "btn btn-success" }, "Image"));
        }
        return React.createElement("div", null,
            React.createElement("button", { className: 'btn-primary btn' }, this.props.name));
    };
    return FormButton;
}(React.Component));
exports.default = FormButton;
//# sourceMappingURL=formButton.js.map