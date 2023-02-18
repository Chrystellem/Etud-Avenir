"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Profile = void 0;
var React = require("react");
var react_router_dom_1 = require("react-router-dom");
var modal_1 = require("../components/modal");
var resetEmail_1 = require("../modals/resetEmail");
var ProfileMainPage_1 = require("./profile/ProfileMainPage");
var report_1 = require("./profile/report");
var schools_1 = require("./profile/schools");
function Profile(props, state) {
    return React.createElement(react_router_dom_1.BrowserRouter, null,
        React.createElement(react_router_dom_1.Routes, null,
            React.createElement(react_router_dom_1.Route, { path: "/profil", element: React.createElement(ProfileMainPage_1.ProfileMainPage, null) }),
            React.createElement(react_router_dom_1.Route, { path: "/profil/email", element: React.createElement(React.Fragment, null,
                    React.createElement(ProfileMainPage_1.ProfileMainPage, null),
                    React.createElement(modal_1.default, { minWidth: 350 },
                        React.createElement(resetEmail_1.ResetEmailModal, null))) }),
            React.createElement(react_router_dom_1.Route, { path: "/profil/bulletins", element: React.createElement(report_1.ReportPage, null) }),
            React.createElement(react_router_dom_1.Route, { path: "/profil/ecoles", element: React.createElement(schools_1.default, null) })));
}
exports.Profile = Profile;
//# sourceMappingURL=profile.js.map