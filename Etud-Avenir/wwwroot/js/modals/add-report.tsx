import * as React from 'react'
import { useCookies } from 'react-cookie'
import FormError from '../components/form/error'
import Select from '../components/form/select'
import FormButton from '../components/formButton'
import Input from '../components/input'
import { QUARTER_OPTIONS } from '../constants/report'
import { getQuarterAndSchoolYearFromSelection } from '../services/report-service'
import { ReportGradesRequestDTO, ReportGradesResponseDTO } from '../types/report-dto'
import SubjectDTO, { SubjectGradeDTO } from '../types/subject-dto'

type AddReportModalProperties = {
    closeModal: () => void,
    isTemporary: boolean
}

export function AddReportModal({ closeModal, isTemporary }: AddReportModalProperties) {
    const [state, setState] = React.useState(new ReportGradesRequestDTO());
    const [selectedQuarter, setSelectedQuarter] = React.useState("0");
    const [error, setError] = React.useState("")
    const [cookies, setCookie] = useCookies(['reports']);

    React.useEffect(() => {
        async function fetchSubjects() {
            const subjects = await getSubjects()
            const newState = new ReportGradesRequestDTO({
                ...state,
                GradeBySubject: subjects.map(s => new SubjectGradeDTO(s.name, 0))
            });

            setState(newState)
        }

        fetchSubjects()
    }, []);

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

        setSelectedQuarter(event.currentTarget.value)
    } 

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault()
        if (!state.SchoolYear || !state.Quarter) {
            return setError("Tu n'as pas sélectionné de trimestre")
        }

        if (!state.GradeBySubject.reduce((a, b) => a + b.grade, 0)) {
            return setError("Soit tu es un cancre, soit tu n'as pas indiqué tes notes...")
        }

        if (isTemporary) {
            addReportDTOToCookie()
            return closeModal()
        }

        const result = await fetch("/api/report", { method: "POST", headers: {"content-type": "application/json"}, body: JSON.stringify(state) })
        if (!result.ok) return setError("Une erreur est survenue :( Reessaie plus tard")

        closeModal()
    }

    const addReportDTOToCookie = () => {
        const responseDTO = new ReportGradesResponseDTO({
            reportId: Math.floor(Math.random() * 999999) + 100,
            quarter: state.Quarter,
            schoolYear: state.SchoolYear,
            gradeBySubject: state.GradeBySubject
        })

        let reportInCookies = cookies.reports as ReportGradesResponseDTO[]
        if (!reportInCookies || !reportInCookies.length) reportInCookies = []

        reportInCookies.push(responseDTO)
        setCookie("reports", reportInCookies)
    }

    return <form onSubmit={ handleSubmit }>
        <>
            <legend>Ajouter un bulletin</legend>
            <FormError error={error} />

            <Select label="Trimestre" name="Quarter" onChange={handleQuarterChange} required={true} value={selectedQuarter} >
                <option value="0">Sélectionne un trimestre</option>
                {QUARTER_OPTIONS.map((quarterOption, index) => <option key={`option-${index}`} value={quarterOption.value}>{quarterOption.label}</option>)}
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

/**
 * Récupère les différentes matières stockées en base de données 
 */
async function getSubjects(): Promise<SubjectDTO[]> {
    const result = await fetch("/api/subjects")
    if (!result.ok) return null

    return result.json()
}