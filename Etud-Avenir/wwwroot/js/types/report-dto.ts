import SmallReportDTO from "./small-report-dto";
import { SubjectGradeDTO } from "./subject-dto";

/**
 * Bulletin de l'utilisateur 
 */
export default interface ReportDTO {
    Id: number,
    Title: string,
    CreatedAt: Date,
}

/**
 * Représente le DTO envoyé par le client au serveur en respectant les regles de nommage de C# 
 */
export class ReportGradesRequestDTO {
    ReportId: number
    Quarter: number
    SchoolYear: string
    GradeBySubject: SubjectGradeDTO[] = []

    constructor(props?: ReportGradesRequestDTO) {
        if (!props) return

        this.ReportId = props.ReportId
        this.Quarter = props.Quarter
        this.SchoolYear = props.SchoolYear
        this.GradeBySubject = props.GradeBySubject
    }
}


/**
 * Représente le DTO renvoyé par le serveur 
 */
export class ReportGradesResponseDTO {
    reportId: number
    quarter: number
    schoolYear: string
    gradeBySubject: SubjectGradeDTO[] = []

    constructor(props?: ReportGradesResponseDTO) {
        if (!props) return

        this.reportId = props.reportId
        this.quarter = props.quarter
        this.schoolYear = props.schoolYear
        this.gradeBySubject = props.gradeBySubject
    }
}