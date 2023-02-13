"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var saved_school_article_1 = require("../../components/profile/saved-school-article");
var colors_1 = require("../../constants/colors");
var page_template_1 = require("./page-template");
var description = "Clique sur l’une des écoles/formation enregistrées pour obtenir plus d’informations dessus";
function SavedSchoolPage() {
    return React.createElement(page_template_1.ProfilePageTemplate, { title: "Ecoles favorites", description: description, color: colors_1.default.PINK },
        React.createElement(saved_school_article_1.default, { name: "Efrei Paris", formation: "Ing\u00E9nieur", savedDate: new Date(), logoPath: "https://www.cfa-afia.com/app/uploads/2022/01/logo-efrei-print-efrei-web.png" }),
        React.createElement(saved_school_article_1.default, { name: "Efrei Paris", formation: "Ing\u00E9nieur", savedDate: new Date(), logoPath: "https://www.cfa-afia.com/app/uploads/2022/01/logo-efrei-print-efrei-web.png" }));
}
exports.default = SavedSchoolPage;
//# sourceMappingURL=schools.js.map