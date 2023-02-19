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

export default function Research() {
    let [step, setStep] = React.useState(1);

    const displayResearchStep = () => {
        if (step === 1) return <ResearchFirstStep setStep={setStep} />

        return <ResearchSecondStep />
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
}

/**
 * Représente l'étape "Rentre tes notes" dans la recherche
 * Gère l'affichage
 */
const ResearchFirstStep = ({ setStep }: StepProperties) => {
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

                <ReportClickable title="La" otherInfo="aaaa-bbbb" />
                <ReportClickable title="La" otherInfo="aaaa-bbbb" />
                <ReportClickable title="La" otherInfo="aaaa-bbbb" />
            </div>
            <div className="research-separator"></div>
            <div className="p-5" style={{ maxWidth: '500px' }}>
                <h3>Nouveau(x) bulletin(s)</h3>

                <ReportClickable title="La" otherInfo="aaaa-bbbb" />
                <ReportClickable title="La" otherInfo="aaaa-bbbb" />
                <ReportClickable title="La" otherInfo="aaaa-bbbb" />
                <Button template='primary' name='Ajouter un nouveau bulletin' />
            </div>
        </div>

        <div className="w-100 d-flex justify-content-center">
            <Button template='primary' name='Valider' onClick={() => setStep(2)} />
        </div>
    </>)
}


/**
 * Représente l'étape "Rentre tes critères" dans la recherche
 * Gère l'affichage
 */
const ResearchSecondStep = () => {
    const navigate = useNavigate();

    return (<>
        <div className="pt-3 d-flex justify-content-center align-items-center w-100">
            <NumberTitle isSelected={false} title="Rentre tes notes" number={1} />
            <div className="arrow mx-4" style={{ width: '200px' }}></div>
            <NumberTitle isSelected={true} title="Rentre tes critères" number={2} />
        </div>
        <p className="pt-3 w-100 text-center">Renseigne tes envies, domaine, lieu d’étude et nous regarderons parmis toutes les écoles présentes dans nos bases de données lesquelles pourront te convenir</p>
        <div className="d-flex justify-content-center flex-wrap align-items-stretch my-4">
            <div className="p-5" style={{ maxWidth: '500px' }}>
                <Select name="Domain" label="Domaine" required={true} onChange={() => undefined}>
                    <option>-- Sélectionne un domaine --</option>
                </Select>

                <Input label="Localisation (commune, région)" name="Localization" required={false} inputType="text" onChange={() => undefined} placeholder="Localisation" value="" />
            </div>
            <div className="research-separator"></div>
            <div className="p-5" style={{ maxWidth: '500px' }}>
                <div className="d-flex align-items-center">
                    <div>
                        <Checkbox name="IsApprenticeship" label="En alternance" checked={false} onChange={() => undefined} value="" />
                    </div>
                    <div className="ml-5">
                        <Checkbox name="isStateRecognized" label="Reconnu par l'état" checked={false} onChange={() => undefined} value="" />
                    </div>
                </div>
                <div className="d-flex align-items-center">
                    <div>
                        <Checkbox name="isPublic" label="Public" checked={false} onChange={() => undefined} value="" />
                    </div>
                    <div className="ml-5">
                        <Checkbox name="isPrivate" label="Privé" checked={false} onChange={() => undefined} value="" />
                    </div>
                </div>

                <Select name="AdmissionType" label="Type d'admission" required={true} onChange={() => undefined}>
                    <option>-- Sélectionne un type d'admission --</option>
                </Select>
            </div>
        </div>

        <div className="w-100 d-flex justify-content-center">
            <Button template='primary' name='Rechercher' onClick={() => navigate('/recherche/resultats')} />
        </div>
    </>)
}