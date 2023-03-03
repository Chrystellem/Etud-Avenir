import * as React from 'react'
import { useNavigate } from "react-router-dom"
import SmallReportDTO from "../../types/small-report-dto"
import { Button } from "../button"
import { Checkbox } from "../form/checkbox"
import Select from "../form/select"
import Input from '../input'
import NumberTitle from "./number-title"

type ResearchSecondStepState = {
    domain: string,
    localization: string
    isInitialFormation: boolean,
    isApprenticeship: boolean,
    isPublic: boolean
    isPrivate: boolean
    isStateApproved: boolean
    admissionType: number
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
        admissionType: 0
    } as ResearchSecondStepState)
    const navigate = useNavigate();

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

    const launchResult = () => {
        // Vérifier que les paramètres obligatoires sont présents
        if (!state.domain || !state.localization) return

        let urlToNavigateTo = `/recherche/resultats?domain=${state.domain}&localization=${state.localization}`
        if (state.isInitialFormation) urlToNavigateTo += `&isInitialFormation=${state.isInitialFormation}`
        if (state.isApprenticeship) urlToNavigateTo += `&isApprenticeship=${state.isApprenticeship}`
        if (state.isStateApproved) urlToNavigateTo += `&isStateApproved=${state.isStateApproved}`
        if (state.isPublic) urlToNavigateTo += `&isPublic=${state.isPublic}`
        if (state.isPrivate) urlToNavigateTo += `&isPrivate=${state.isPrivate}`
        if (state.admissionType) urlToNavigateTo += `&admissionType=${state.admissionType}`

        urlToNavigateTo += `&reports=${selectedReports.map(s => s.reportId).join(",")}`
        navigate(urlToNavigateTo)
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
                <Select name="domain" label="Domaine" required={true} onChange={handleChange} value={state.domain} >
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

                <Input
                    label="Localisation (ville, département, région, toute la france ?)"
                    name="localization"
                    required={false}
                    inputType="text"
                    onChange={handleChange}
                    placeholder="Localisation"
                    value={state.localization} />
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

                <Select name="admissionType" label="Type d'admission" required={true} onChange={handleChange} value={state.admissionType} >
                    <option value="0">-- Sélectionne un type d'admission --</option>
                    <option value="1">Sur dossier</option>
                    <option value="2">Concours</option>
                </Select>
            </div>
        </div>

        <div className="w-100 d-flex justify-content-center">
            <Button
                template='primary'
                name='Rechercher'
                onClick={launchResult}
            />
        </div>
    </>)
}

export default ResearchSecondStep