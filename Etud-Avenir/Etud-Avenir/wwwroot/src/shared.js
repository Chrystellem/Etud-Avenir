"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var client_1 = require("react-dom/client");
var react_router_dom_1 = require("react-router-dom");
var feedback_1 = require("../js/layouts/feedback");
var nav_1 = require("../js/layouts/nav");
var identity_1 = require("../js/views/identity");
console.log(window['feedback']);
var container = document.getElementById('shared-app');
var root = (0, client_1.createRoot)(container);
root.render(React.createElement(React.Fragment, null,
    React.createElement(react_router_dom_1.BrowserRouter, null,
        React.createElement(nav_1.default, { isUserAuthentified: window['isUserAuthentified'] }),
        React.createElement(feedback_1.default, { show: window['feedback']['show'], isSuccessfull: window['feedback']['isSuccessfull'], content: window['feedback']['content'] }),
        React.createElement(identity_1.default, null))));
//# sourceMappingURL=shared.js.map