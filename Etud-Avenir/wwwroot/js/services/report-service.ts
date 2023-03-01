import SmallReportDTO from "../types/small-report-dto"
import { ReportGradesRequestDTO } from "../types/report-dto"

/**
 * Permet d'obtenir la correspondance entre la sélection du semestre et la logique du back 
 */
export const getQuarterAndSchoolYearFromSelection = (quarter: string): { quarter: number, schoolYear: string } => {
    switch (quarter) {
        case "1": return { quarter: 1, schoolYear: "Première" }
        case "2": return { quarter: 2, schoolYear: "Première" }
        case "3": return { quarter: 3, schoolYear: "Première" }
        case "4": return { quarter: 1, schoolYear: "Terminale" }
        case "5": return { quarter: 2, schoolYear: "Terminale" }
        default: return { quarter: 0, schoolYear: "Invalid" }
    }
}

/**
 * Depuis le trimstre et l'année donne l'équivalent dans le select
 * @param quarter
 * @param schoolYear
 */
export const getQuarterAndSchoolYearSelectValue = (quarter: number, schoolYear: string) => {
    if (!quarter || !schoolYear) return 0
    const numberToAdd = schoolYear === "Première" ? 0 : 3
    return quarter + numberToAdd
}

export const getUserReports = async (): Promise<SmallReportDTO[]> => {
    const result = await fetch("/api/reports");
    if (!result.ok || result.redirected) return []

    const jsonReports = await result.json();
    const smallReportDTOs = []
    jsonReports.forEach((jsonReport) => {
        jsonReport.createdAt = new Date(jsonReport.createdAt)
        smallReportDTOs.push(new SmallReportDTO(jsonReport as SmallReportDTO))
    })

    return smallReportDTOs;
}