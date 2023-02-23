"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getQuarterAndSchoolYearFromSelection = void 0;
/**
 * Permet d'obtenir la correspondance entre la sélection du semestre et la logique du back
 */
var getQuarterAndSchoolYearFromSelection = function (quarter) {
    switch (quarter) {
        case "1": return { quarter: 1, schoolYear: "Première" };
        case "2": return { quarter: 2, schoolYear: "Première" };
        case "3": return { quarter: 3, schoolYear: "Première" };
        case "4": return { quarter: 1, schoolYear: "Terminale" };
        case "5": return { quarter: 2, schoolYear: "Terminale" };
        default: return { quarter: 0, schoolYear: "Invalid" };
    }
};
exports.getQuarterAndSchoolYearFromSelection = getQuarterAndSchoolYearFromSelection;
//# sourceMappingURL=report-service.js.map