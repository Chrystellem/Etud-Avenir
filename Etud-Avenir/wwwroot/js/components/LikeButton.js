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
var LikeButton = /** @class */ (function (_super) {
    __extends(LikeButton, _super);
    function LikeButton() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            liked: false
        };
        return _this;
    }
    LikeButton.prototype.render = function () {
        var _this = this;
        if (this.state.liked)
            return React.createElement("h1", null, "You liked this");
        return React.createElement("button", { onClick: function () { return _this.setState({ liked: true }); } }, this.props.title);
    };
    return LikeButton;
}(React.Component));
exports.default = LikeButton;
//# sourceMappingURL=LikeButton.js.map