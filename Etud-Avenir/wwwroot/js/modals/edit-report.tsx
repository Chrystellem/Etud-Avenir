import * as React from 'react'
import FormError from '../components/form/error'
import Select from '../components/form/select'
import FormButton from '../components/formButton'
import Input from '../components/input'
import Modal from '../components/modal'
import { QUARTER_OPTIONS } from '../constants/report'
import { getQuarterAndSchoolYearFromSelection } from '../services/report-service'
import { ReportGradesRequestDTO, ReportGradesResponseDTO } from '../types/report-dto'
import SubjectDTO from '../types/subject-dto'

const subjects = ["Mathématiques", "Physique-Chimie", "SVT", "SI", "Histoire-Géo", "SES", "Philosophie", "Français", "LV2"]

type ReportModalProperties = {
    reportId: number 
}
type Subjects = {
    "Mathématiques": number,
    "Physique-Chimie": number,
    "SVT": number,
    "SI": number,
    "Histoire-Géo": number,
    "SES": number,
    "Philosophie": number,
    "Français": number,
    "LV2" : number
}

type EditReportModalProperties = {
    reportId: number
    closeModal: () => void
}

export function EditReportModal({ reportId, closeModal }: EditReportModalProperties) {
    const [state, setState] = React.useState(new ReportGradesRequestDTO());
    const [error, setError] = React.useState("")

    console.log(state)
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
        const result = await fetch(`/api/reports/${reportId}`)
        if (!result.ok) {
            setError("Une erreur est survenue")
            return
        }

        const responseDTO = (await result.json()) as ReportGradesResponseDTO
        console.log(responseDTO)

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

        const result = await fetch("/api/report", { method: "PUT", headers: { "content-type": "application/json" }, body: JSON.stringify(state) })
        if (!result.ok) return setError("Une erreur est survenue :( Reessaie plus tard")

        closeModal()
    }

    return <form onSubmit={handleSubmit}>
        <>
            <legend>Ajouter/Modifier un bulletin</legend>
            <FormError error={error} />

            <Select label="Trimestre" name="Quarter" onChange={handleQuarterChange} required={true} value="">
                <option>Sélectionne un trimestre</option>
                {
                    QUARTER_OPTIONS.map(({ label, value }, index) =>
                        <option
                            key={`option-${index}`} selected={`${state.SchoolYear} - Trimestre ${state.Quarter}` === label}
                            value={value}>
                            {label}
                        </option>
                    )
                }
            </Select>

            <span>Merci de renseigner tes moyennes du trimestre pour les matières ci-dessous. Laisser vide si tu n'as pas fait l’une des matières indiquées</span>

            <div className="report-modal__grades">
                {
                    state.GradeBySubject.map(({ subject, grade }, index) =>
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
            </div>

            <FormButton name="Valider" isImg={false} />
        </>
    </form>
}