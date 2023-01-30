"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var client_1 = require("react-dom/client");
var login_1 = require("../js/modals/login");
var container = document.getElementById('login');
var root = client_1.createRoot(container); // createRoot(container!) if you use TypeScript
root.render(React.createElement(login_1.default, null));
//# sourceMappingURL=login.js.map