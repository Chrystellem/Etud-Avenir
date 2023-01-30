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
var Feedback = /** @class */ (function (_super) {
    __extends(Feedback, _super);
    function Feedback() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.render = function () {
            if (!_this.props.show)
                return;
            return React.createElement("div", { className: "d-flex justify-content-center p-3 color-white ".concat(_this.props.isSuccessfull ? "bg-green" : "bg-danger") }, _this.props.content);
        };
        return _this;
    }
    return Feedback;
}(React.Component));
exports.default = Feedback;
//# sourceMappingURL=feedback.js.map