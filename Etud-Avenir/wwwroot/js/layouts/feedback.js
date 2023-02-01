"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var feedbackContext_1 = require("../context/feedbackContext");
function Feedback() {
    var feedback = React.useContext(feedbackContext_1.default);
    if (!feedback.state.show)
        return;
    return React.createElement("div", { className: "d-flex justify-content-center p-3 color-white ".concat(feedback.state.isSuccessFull ? "bg-green" : "bg-danger") }, feedback.state.content);
}
exports.default = Feedback;
//# sourceMappingURL=feedback.js.map