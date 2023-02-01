"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_router_1 = require("react-router");
var feedbackContext_1 = require("../context/feedbackContext");
var UrlService_1 = require("../services/UrlService");
var launched = false;
function EmailConfirmation(_a) {
    if (launched)
        return;
    // Récupérer les paramètres de l'url
    var params = (0, UrlService_1.getParams)(window.location.href);
    if (!params.code || !params.userId)
        return;
    var setFeedbackContent = React.useContext(feedbackContext_1.default).setFeedbackContent;
    fetch("/Identity/EmailConfirmation?userId=".concat(params.userId, "&code=").concat(params.code)).then(function (response) {
        if (!response.ok) {
            setFeedbackContent({ content: "Nous n'avons pas vu vérifier l'email", isSuccessFull: false });
            return;
        }
        setFeedbackContent({ content: "Email vérifié. Tu peux maintenant te connecter !", isSuccessFull: true });
        launched = true;
    });
    return React.createElement(react_router_1.Navigate, { to: "/" });
}
exports.default = EmailConfirmation;
//# sourceMappingURL=emailConfirmation.js.map