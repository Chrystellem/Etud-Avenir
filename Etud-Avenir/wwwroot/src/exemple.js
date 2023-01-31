"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var client_1 = require("react-dom/client");
var LikeButton_1 = require("../js/components/LikeButton");
function Welcome(props) {
    return React.createElement("h1", null,
        "Bonjour, ",
        props.name);
}
var element = React.createElement("div", null,
    React.createElement("span", null, "Like ci-dessous"),
    React.createElement(LikeButton_1.default, { title: "LIKEZZZ MOIIII" }),
    React.createElement(Welcome, { name: "Jean" }));
var container = document.getElementById('test');
var root = (0, client_1.createRoot)(container); // createRoot(container!) if you use TypeScript
root.render(element);
//# sourceMappingURL=exemple.js.map