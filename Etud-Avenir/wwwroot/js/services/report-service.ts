import SmallReportDTO from "../types/small-report-dto"

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

export const getUserReports = async (): Promise<SmallReportDTO[]> => {
    const result = await fetch("/api/reports");
    if (!result.ok) return []

    const jsonReports = await result.json();
    const smallReportDTOs = []
    jsonReports.forEach((jsonReport) => {
        jsonReport.createdAt = new Date(jsonReport.createdAt)
        smallReportDTOs.push(new SmallReportDTO(jsonReport as SmallReportDTO))
    })

    return smallReportDTOs;
}