import * as React from 'react'
import Select from '../components/form/select'
import FormButton from '../components/formButton'
import Input from '../components/input'
import Modal from '../components/modal'

const subjects = ["Mathématiques", "Physique-Chimie", "SVT", "SI", "Histoire-Géo", "SES", "Philosophie", "Français", "LV2"]
const quarterOptions = ["Trimestre 1", "Trimestre 2"];

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
type ModalState = {
    quarter: string,
    grades: Subjects
    test: string
}

export function ReportModal({ reportId }: ReportModalProperties) {

    const [modalData, setModalData] = React.useState(getModalDefaultValues());
    React.useEffect(() => {
        async function fetchReport() {
            const data = await getReportInformations(reportId)
            setModalData(data);
        }

        fetchReport();
    }, []);

    const handleGradeChange = (event: React.ChangeEvent<HTMLInputElement>, subject: string) => {
        setModalData({
            ...modalData,
            ['grades']: {
                ...modalData.grades,
                [subject]: event.target.value
            }
        })
    }

    return <form>
        <>
            <legend>Ajouter/Modifier un bulletin</legend>

            <Select label="Trimestre" name="Semester" onChange={() => undefined} required={true}>
                <option>Sélectionne un trimestre</option>
                {quarterOptions.map((quarterOption, index) => <option key={`option-${index}`}>{quarterOption}</option>)}
            </Select>

            <span>Merci de renseigner tes moyennes du trimestre pour les matières ci-dessous. Laisser vide si tu n'as pas fait l’une des matières indiquées</span>

            <div className="report-modal__grades">
                {
                    subjects.map((subject, index) => <Input key={`grade-${index}`} label={subject} name={subject} required={false} onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleGradeChange(e, subject)} placeholder="" inputType="number" value={modalData.grades[subject]} />)
                }
            </div>

            <FormButton name="Valider" isImg={false} />
        </>
    </form>
}


async function getReportInformations(reportId: number): Promise<ModalState> {
    if (reportId <= 0) {
        return getModalDefaultValues()
    }

    // TODO : Récupérer les informations de ces notes
    return {
        quarter: "Trimestre 2",
        grades: {
            "Mathématiques": 15,
            "Physique-Chimie": 15,
            "SVT": 15,
            "SI": 15,
            "Histoire-Géo": 15,
            "SES": 15,
            "Philosophie": 15,
            "Français": 15,
            "LV2": 15,
        },
        test: ""
    }
}


function getModalDefaultValues(): ModalState {
    return {
        quarter: "",
        grades: {
            "Mathématiques": 0,
            "Physique-Chimie": 0,
            "SVT": 0,
            "SI": 0,
            "Histoire-Géo": 0,
            "SES": 0,
            "Philosophie": 0,
            "Français": 0,
            "LV2": 0,
        },
        test: ""
    } 
}