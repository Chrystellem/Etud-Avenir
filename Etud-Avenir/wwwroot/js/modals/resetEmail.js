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
exports.ResetEmailModal = void 0;
var React = require("react");
var error_1 = require("../components/form/error");
var formButton_1 = require("../components/formButton");
var input_1 = require("../components/input");
function ResetEmailModal(_a, _b) {
    var _c = React.useState({
        error: '',
        email: '',
    }), formValues = _c[0], setFormValues = _c[1];
    var handleChange = function (event) {
        var _a;
        setFormValues(__assign(__assign({}, formValues), (_a = {}, _a[event.target.name.toLowerCase()] = event.target.value, _a)));
    };
    return React.createElement("form", null,
        React.createElement("legend", null, "R\u00E9initialiser l'email"),
        React.createElement(error_1.default, { error: formValues.error }),
        React.createElement(input_1.default, { label: "Email", name: "Email", inputType: "email", placeholder: "utilisateur@efrei.net", value: formValues.email, onChange: handleChange }),
        React.createElement(formButton_1.default, { name: "Valider", isImg: false }));
}
exports.ResetEmailModal = ResetEmailModal;
//# sourceMappingURL=resetEmail.js.map