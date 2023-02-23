export default class SmallReportDTO {
    reportId: number
    quarter: number
    schoolYear: string
    createdAt: Date

    constructor({ reportId, quarter, schoolYear, createdAt }: SmallReportDTO | null) {
        this.reportId = reportId
        this.quarter = quarter
        this.schoolYear = schoolYear
        this.createdAt = createdAt
    }
}