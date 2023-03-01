import { report } from 'process'
import * as React from 'react'
import { useCookies } from 'react-cookie'
import FormError from '../components/form/error'
import Select from '../components/form/select'
import FormButton from '../components/formButton'
import Input from '../components/input'
import Loader from '../components/loader'
import Modal from '../components/modal'
import { QUARTER_OPTIONS } from '../constants/report'
//import { getCookieAndDeserialize } from '../services/cookie-service'
import { getQuarterAndSchoolYearFromSelection, getQuarterAndSchoolYearSelectValue } from '../services/report-service'
import { ReportGradesRequestDTO, ReportGradesResponseDTO } from '../types/report-dto'

type EditReportModalProperties = {
    reportId: number
    closeModal: () => void
}

export function EditReportModal({ reportId, closeModal }: EditReportModalProperties) {
    const [state, setState] = React.useState(new ReportGradesRequestDTO());
    const [cookies, setCookie] = useCookies(['reports']);
    const [error, setError] = React.useState("")

    React.useEffect(() => {
        fetchReport()
    }, []);

    const fetchReport = async () => {
        const reportGrades = await getReportGradesDTO(reportId)
        setState(reportGrades);
    }

    const handleGradeChange = (event: React.ChangeEvent<HTMLInputElement>, subject: string) => {
        const gradeToEdit = state.GradeBySubject.find(e => e.subject === subject)
        gradeToEdit.grade = parseInt(event.currentTarget.value)

        const newState = new ReportGradesRequestDTO({
            ...state
        });

        setState(newState)
    }

    const handleQuarterChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const { quarter, schoolYear } = getQuarterAndSchoolYearFromSelection(event.currentTarget.value)
        setState({
            ...state,
            Quarter: quarter,
            SchoolYear: schoolYear
        })
    } 

    const getReportGradesDTO = async (reportId: number): Promise<ReportGradesRequestDTO> => {
        // Vérifier avant si ces notes ne sont pas déjà dans les cookies
        const reportDTOinCookie = getReportDTOFromCookies(reportId, cookies.reports)
        if (reportDTOinCookie) return reportDTOinCookie

        const result = await fetch(`/api/reports/${reportId}`)
        if (!result.ok) {
            setError("Une erreur est survenue")
            return
        }

        const responseDTO = (await result.json()) as ReportGradesResponseDTO
        return new ReportGradesRequestDTO({
            ReportId: responseDTO.reportId,
            GradeBySubject: responseDTO.gradeBySubject,
            Quarter: responseDTO.quarter,
            SchoolYear: responseDTO.schoolYear
        })
    }

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault()
        if (!state.SchoolYear || !state.Quarter) {
            return setError("Tu n'as pas sélectionné de trimestre")
        }

        if (!state.GradeBySubject.reduce((a, b) => a + b.grade, 0)) {
            return setError("Soit tu es un cancre, soit tu n'as pas indiqué tes notes...")
        }

        // Vérifier si dans cookie
        const reportDTOinCookie = getReportDTOFromCookies(reportId, cookies.reports)
        if (reportDTOinCookie) {
            editReportDTOinCookie();
            return closeModal();
        }

        const result = await fetch("/api/report", { method: "PUT", headers: { "content-type": "application/json" }, body: JSON.stringify(state) })
        if (!result.ok) return setError("Une erreur est survenue :( Reessaie plus tard")

        closeModal()
    }

    const editReportDTOinCookie = () => {
        const reportDTO = cookies.reports.find(r => r.reportId === reportId) as ReportGradesResponseDTO
        reportDTO.quarter = state.Quarter
        reportDTO.schoolYear = state.SchoolYear
        reportDTO.gradeBySubject = state.GradeBySubject

        setCookie("reports", cookies.reports)
    }

    const renderGrades = () => {
        if (!state.GradeBySubject.length) return <Loader /> 

        return state.GradeBySubject.map(({ subject, grade }, index) =>
                <Input
                    key={`grade-${index}`}
                    label={subject}
                    name={subject}
                    required={false}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleGradeChange(e, subject)}
                    placeholder=""
                    inputType="number"
                    value={grade.toString()} />)
    }

    return <form onSubmit={handleSubmit}>
        <>
            <legend>Modifier un bulletin</legend>
            <FormError error={error} />

            <Select label="Trimestre" name="Quarter" onChange={handleQuarterChange} required={true} value={getQuarterAndSchoolYearSelectValue(state.Quarter, state.SchoolYear)} >
                <option>Sélectionne un trimestre</option>
                {
                    QUARTER_OPTIONS.map(({ label, value }, index) =>
                        <option
                            key={`option-${index}`}
                            value={value}>
                            {label}
                        </option>
                    )
                }
            </Select>

            <span>Merci de renseigner tes moyennes du trimestre pour les matières ci-dessous. Laisser vide si tu n'as pas fait l’une des matières indiquées</span>

            <div className="report-modal__grades">
                {renderGrades()}
            </div>

            <FormButton name="Valider" isImg={false} />
        </>
    </form>
}

const getReportDTOFromCookies = (reportId: number, reportDTOs: ReportGradesResponseDTO[]) => {
    if (!reportDTOs || !reportDTOs.length) return null

    const reportDTO = reportDTOs.find(r => r.reportId === reportId)
    if (!reportDTO) return null

    return new ReportGradesRequestDTO({
        ReportId: reportDTO.reportId,
        Quarter: reportDTO.quarter,
        SchoolYear: reportDTO.schoolYear,
        GradeBySubject: reportDTO.gradeBySubject
    })
}
