"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_router_dom_1 = require("react-router-dom");
var closeModalButton_1 = require("./closeModalButton");
function Modal(props) {
    var navigate = (0, react_router_dom_1.useNavigate)();
    var closeModal = function () {
        navigate(-1);
    };
    if (props.parentControl && !props.parentControl.isVisible)
        return;
    return React.createElement("div", { className: 'modal d-block' },
        React.createElement("div", { className: "modal-body modal-body-border", style: { minWidth: props.minWidth + 'px' } },
            React.createElement(closeModalButton_1.default, { onClick: props.parentControl ? function () { return props.parentControl.toggler(!props.parentControl.isVisible); } : closeModal }),
            props.children));
}
exports.default = Modal;
//# sourceMappingURL=modal.js.map