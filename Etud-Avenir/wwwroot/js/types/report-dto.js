"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReportGradesResponseDTO = exports.ReportGradesRequestDTO = void 0;
/**
 * Représente le DTO envoyé par le client au serveur en respectant les regles de nommage de C#
 */
var ReportGradesRequestDTO = /** @class */ (function () {
    function ReportGradesRequestDTO(props) {
        this.GradeBySubject = [];
        if (!props)
            return;
        this.ReportId = props.ReportId;
        this.Quarter = props.Quarter;
        this.SchoolYear = props.SchoolYear;
        this.GradeBySubject = props.GradeBySubject;
    }
    return ReportGradesRequestDTO;
}());
exports.ReportGradesRequestDTO = ReportGradesRequestDTO;
/**
 * Représente le DTO renvoyé par le serveur
 */
var ReportGradesResponseDTO = /** @class */ (function () {
    function ReportGradesResponseDTO(props) {
        this.gradeBySubject = [];
        if (!props)
            return;
        this.reportId = props.reportId;
        this.quarter = props.quarter;
        this.schoolYear = props.schoolYear;
        this.gradeBySubject = props.gradeBySubject;
    }
    return ReportGradesResponseDTO;
}());
exports.ReportGradesResponseDTO = ReportGradesResponseDTO;
//# sourceMappingURL=report-dto.js.map