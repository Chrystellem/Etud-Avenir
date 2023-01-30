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
var closeModalButton_1 = require("./closeModalButton");
var Modal = /** @class */ (function (_super) {
    __extends(Modal, _super);
    function Modal() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            isModalClosed: true
        };
        _this.toggleModal = function () {
            _this.setState({ isModalClosed: !_this.state.isModalClosed });
        };
        _this.modalRenderer = function (childComponent) {
            return React.createElement("div", { className: "modal " + (_this.state.isModalClosed ? 'd-none' : 'd-block') },
                React.createElement("div", { className: "modal-body modal-body-border" },
                    React.createElement(closeModalButton_1.default, { onClick: _this.toggleModal }),
                    childComponent));
        };
        return _this;
    }
    return Modal;
}(React.Component));
exports.default = Modal;
//# sourceMappingURL=modal.js.map