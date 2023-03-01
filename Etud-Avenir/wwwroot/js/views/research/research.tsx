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
import Loader from '../../components/loader';
import Modal from '../../components/modal';
import { AddReportModal } from '../../modals/add-report';
//import { getCookieAndDeserialize } from '../../services/cookie-service';
import ReportDTO, { ReportGradesRequestDTO, ReportGradesResponseDTO } from '../../types/report-dto';
import { CookiesProvider, useCookies, withCookies } from 'react-cookie';
import ResearchFirstStep from '../../components/research/research-first-step';
import ResearchSecondStep from '../../components/research/research-second-step';

export default function Research() {
    let [step, setStep] = React.useState(1);
    let [selectedReports, setSelectedReports] = React.useState([] as SmallReportDTO[])

    const displayResearchStep = () => {
        if (step === 1) {
            return <CookiesProvider>
                <ResearchFirstStep setStep={setStep} selectedReports={selectedReports} setSelectedReports={setSelectedReports} />
            </CookiesProvider>
        }

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