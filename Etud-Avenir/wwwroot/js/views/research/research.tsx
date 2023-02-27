import * as React from 'react'
import NumberTitle from '../../components/research/number-title'
import { ArticleIcon } from '../../components/article-icon';
import Colors from '../../constants/colors';
import { ReportClickable } from '../../components/research/report-clickable';
import { Button } from '../../components/button';
import Select from '../../components/form/select';
import Input from '../../components/input';
import { Checkbox } from '../../components/form/checkbox';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import ResearchResult from './result';
import { getUserReports } from '../../services/report-service';
import SmallReportDTO from '../../types/small-report-dto';

export default function Research() {
    let [step, setStep] = React.useState(1);
    let [selectedReports, setSelectedReports] = React.useState([] as SmallReportDTO[])

    const displayResearchStep = () => {
        if (step === 1) return <ResearchFirstStep setStep={setStep} selectedReports={selectedReports} setSelectedReports={setSelectedReports} />

        return <ResearchSecondStep selectedReports={selectedReports} />
    }

    return (
        <Router>
            <Routes>
                <Route path="/recherche" element={(
                    <div className="p-5">
                        <div className="d-flex flex-wrap align-items-center justify-content-center">
                            <img className="database-img" src="/images/decoration/database/icon-database.svg" />
                            <div className="ml-4 w-50" >
                                <h1>Base de données</h1> 
                                <span>Tu veux voir la liste des écoles prises en compte par notre algorithme ? Fais toi plaisir, on essaie d’en prendre en compte le plus grand nombre possible</span>
                            </div>
                        </div>
                        {displayResearchStep()}
                    </div>)} />

                <Route path="/recherche/resultats" element={<ResearchResult />} />
            </Routes>
        </Router>
    )
}

type StepProperties = {
    setStep?: React.Dispatch<React.SetStateAction<number>>
    selectedReports: SmallReportDTO[],
    setSelectedReports: React.Dispatch<React.SetStateAction<SmallReportDTO[]>>
}

type FirstStepState = {
    reports: SmallReportDTO[],
    showBtn: boolean
}

/**
 * Représente l'étape "Rentre tes notes" dans la recherche
 * Gère l'affichage
 */
class ResearchFirstStep extends React.Component<StepProperties, FirstStepState> {

    state: FirstStepState = {
        reports: [],
        showBtn: false
    }

    constructor(props) {
        super(props)
    }

    componentDidMount = async () => {
        const reports = await getUserReports()
        this.setState({ reports })
    }

    /**
     * Ajoute ou retire des éléments sélectionnés
     * @param reportDTO
     */
    toggleReportToSelection = (reportDTO: SmallReportDTO) => {
        // Vérifier si déjà sélectionné
        const reportIndex = this.props.selectedReports.findIndex(r => r.reportId === reportDTO.reportId)
        if (reportIndex !== -1) {
            this.props.selectedReports.splice(reportIndex, 1)
        } else {
            this.props.selectedReports.push(reportDTO)
        }

        if (this.props.selectedReports.length === 3) {
            this.setState({ showBtn: true })
            return this.props.setSelectedReports(this.props.selectedReports)
        }

        this.props.setSelectedReports(this.props.selectedReports)
        this.setState({ showBtn: false })
    }

    /**
     * Récupération des bulletins déjà enregistrés sur le compte 
     */
    savedReports = () => {
        return (<>
            {
                this.state.reports.map(
                    (r, index) => <ReportClickable
                        key={ `report-clickable-${index}` }
                        title={`${r.schoolYear} - Trimestre ${r.quarter}`}
                        otherInfo={r.createdAt.toLocaleDateString()}
                        onClickHandler={() => this.toggleReportToSelection(r)}
                    />
                )
            }
        </>)
    }

    /**
     * Gère l'affichae du bouton pour passer à la seconde étape 
     */
    showBtn = () => {
        if (!this.state.showBtn) return

        return (
            <div className="w-100 d-flex justify-content-center">
                <Button template='primary' name='Valider' onClick={() => this.props.setStep(2)} />
            </div>
        )
    }

    render = () => {
        return (<>
            <div className="pt-3 d-flex justify-content-center align-items-center w-100">
                <NumberTitle isSelected={true} title="Rentre tes notes" number={1} />
                <div className="arrow mx-4" style={{ width: '200px' }}></div>
                <NumberTitle isSelected={false} title="Rentre tes critères" number={2} />
            </div>
            <p className="pt-3 w-100 text-center">Sélectionne ou ajoute tes 3 derniers bulletins ! Ils vont aider notre IA à te trouver l’école la plus susceptible de te correspondre</p>
            <div className="d-flex justify-content-center flex-wrap align-items-stretch my-4">
                <div className="p-5" style={{ maxWidth: '500px' }}>
                    <h3>Bulletins enregistrés</h3>
                    { this.savedReports() }
                </div>
                <div className="research-separator"></div>
                <div className="p-5" style={{ maxWidth: '500px' }}>
                    <h3>Nouveau(x) bulletin(s)</h3>

                    <Button template='primary' name='Ajouter un nouveau bulletin' />
                </div>
            </div>

            { this.showBtn() }
            
        </>)
    }
}

type ResearchSecondStepState = {
    domain: string,
    localization: string
    isInitialFormation: boolean,
    isApprenticeship: boolean,
    isPublic: boolean
    isPrivate: boolean
    isStateApproved: boolean
    admissionType: string
}

type ResearchSecondStepProperties = {
    selectedReports: SmallReportDTO[]
}

/**
 * Représente l'étape "Rentre tes critères" dans la recherche
 * Gère l'affichage
 */
const ResearchSecondStep = ({ selectedReports }: ResearchSecondStepProperties) => {
    let [state, setState] = React.useState({
        domain: "",
        localization: "",
        isInitialFormation: false,
        isApprenticeship: false,
        isPublic: false,
        isPrivate: false,
        isStateApproved: false,
        admissionType: ""
    } as ResearchSecondStepState)
    const navigate = useNavigate();
    console.log(state)

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const propertyName = event.currentTarget.name
        if (event.currentTarget.type === "checkbox") {
            setState({
                ...state,
                [propertyName]: !state[propertyName]
            })
            return
        }

        setState({
            ...state,
            [propertyName]: event.currentTarget.value
        })
    }

    return (<>
        <div className="pt-3 d-flex justify-content-center align-items-center w-100">
            <NumberTitle isSelected={false} title="Rentre tes notes" number={1} />
            <div className="arrow mx-4" style={{ width: '200px' }}></div>
            <NumberTitle isSelected={true} title="Rentre tes critères" number={2} />
        </div>
        <p className="pt-3 w-100 text-center">Renseigne tes envies, domaine, lieu d’étude et nous regarderons parmis toutes les écoles présentes dans nos bases de données lesquelles pourront te convenir</p>
        <div className="d-flex justify-content-center flex-wrap align-items-stretch my-4">
            <div className="p-5" style={{ maxWidth: '500px' }}>
                <Select name="domain" label="Domaine" required={true} onChange={handleChange}>
                    <option>-- Sélectionne un domaine --</option>
                    <option>Informatique</option>
                    <option>Graphisme</option>
                    <option>Langues</option>
                    <option>Philosophie</option>
                    <option>Physique</option>
                    <option>Génie civile</option>
                    <option>Communication</option>
                    <option>Marketing</option>
                </Select>

                <Input label="Localisation (ville, département, région, toute la france ?)" name="localization" required={false} inputType="text" onChange={handleChange} placeholder="Localisation" value={state.localization} />
            </div>
            <div className="research-separator"></div>
            <div className="p-5" style={{ maxWidth: '700px' }}>
                <div className="d-flex align-items-center">
                    <div>
                        <Checkbox name="isInitialFormation" label="Formation initiale" checked={state.isInitialFormation} onChange={handleChange} />
                    </div>
                    <div>
                        <Checkbox name="isApprenticeship" label="En alternance" checked={state.isApprenticeship} onChange={handleChange} />
                    </div>
                    <div className="ml-5">
                        <Checkbox name="isStateApproved" label="Reconnu par l'état" checked={state.isStateApproved} onChange={handleChange} />
                    </div>
                </div>
                <div className="d-flex align-items-center">
                    <div>
                        <Checkbox name="isPublic" label="Public" checked={state.isPublic} onChange={handleChange} />
                    </div>
                    <div className="ml-5">
                        <Checkbox name="isPrivate" label="Privé" checked={state.isPrivate} onChange={handleChange} />
                    </div>
                </div>

                <Select name="admissionType" label="Type d'admission" required={true} onChange={handleChange}>
                    <option>-- Sélectionne un type d'admission --</option>
                    <option>Sur dossier</option>
                    <option>Concours</option>
                </Select>
            </div>
        </div>

        <div className="w-100 d-flex justify-content-center">
            <Button
                template='primary'
                name='Rechercher'
                onClick={
                    () => navigate(`/recherche/resultats?`
                                + `domain=${state.domain}`
                                + `&localization=${state.localization}`
                                + `&isInitialFormation=${state.isInitialFormation}`
                                + `&isApprenticeship=${state.isApprenticeship}`
                                + `&isStateApproved=${state.isStateApproved}`
                                + `&isPublic=${state.isPublic}`
                                + `&isPrivate=${state.isPrivate}`
                                + `&admissionType=${state.admissionType}`
                                + `&reports=${selectedReports.map(s => s.reportId).join(",")}`)
                }
            />
        </div>
    </>)
}