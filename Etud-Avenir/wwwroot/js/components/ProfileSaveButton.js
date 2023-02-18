"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfileSaveButton = void 0;
var React = require("react");
var react_router_dom_1 = require("react-router-dom");
function ProfileSaveButton(props, state) {
    var navigate = (0, react_router_dom_1.useNavigate)();
    var styleBtn = {
        color: props.color,
        borderRadius: props.color,
        border: '3px solid ' + props.color
    };
    var styleText = { color: props.color };
    return React.createElement("div", { className: "saveButtons my-2 cursor-pointer", style: styleBtn, onClick: function () { return navigate(props.onClickRedirectTo); } },
        React.createElement("i", { className: props.classIcon }),
        React.createElement("span", { className: "mt-4", style: styleText }, props.name));
}
exports.ProfileSaveButton = ProfileSaveButton;
//# sourceMappingURL=ProfileSaveButton.js.map