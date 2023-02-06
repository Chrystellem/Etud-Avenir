"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var client_1 = require("react-dom/client");
var react_router_dom_1 = require("react-router-dom");
var feedbackContext_1 = require("../js/context/feedbackContext");
var feedback_1 = require("../js/layouts/feedback");
var nav_1 = require("../js/layouts/nav");
var identity_1 = require("../js/views/identity");
var container = document.getElementById('shared-app');
var root = (0, client_1.createRoot)(container);
root.render(React.createElement(AppShared, null));
function AppShared() {
    var _a = React.useState({ content: '', isSuccessFull: false, show: false }), feedback = _a[0], setFeedback = _a[1];
    var setFeedbackContent = React.useCallback(function (value) {
        setFeedback(__assign(__assign({}, value), { show: true }));
        // Enlever l'affichage au bout de 5s 
        setTimeout(function () { return setFeedback(__assign(__assign({}, value), { show: false })); }, 5000);
    }, []);
    var feedbackContextValue = React.useMemo(function () {
        return {
            state: feedback,
            setFeedbackContent: setFeedbackContent
        };
    }, [feedback, setFeedbackContent]);
    return React.createElement(react_router_dom_1.BrowserRouter, null,
        React.createElement(nav_1.default, { isUserAuthentified: window['isUserAuthentified'] }),
        React.createElement(feedbackContext_1.default.Provider, { value: feedbackContextValue },
            React.createElement(feedback_1.default, null),
            React.createElement(identity_1.default, null)));
}
//# sourceMappingURL=shared.js.map