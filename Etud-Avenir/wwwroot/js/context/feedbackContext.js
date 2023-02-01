"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var FeedbackContext = (0, react_1.createContext)({
    state: {
        content: "",
        isSuccessFull: false,
        show: false
    },
    setFeedbackContent: function (state) { },
});
exports.default = FeedbackContext;
//# sourceMappingURL=feedbackContext.js.map