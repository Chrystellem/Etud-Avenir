import * as React from 'react'
import { withCookies, Cookies } from 'react-cookie'
import Colors from '../../constants/colors'
import { AddReportModal } from '../../modals/add-report'
import { getUserReports } from '../../services/report-service'
import { ReportGradesRequestDTO, ReportGradesResponseDTO } from '../../types/report-dto'
import SmallReportDTO from "../../types/small-report-dto"
import { ArticleIcon } from '../article-icon'
import { Button } from '../button'
import Loader from '../loader'
import Modal from '../modal'
import NumberTitle from './number-title'
import { ReportClickable } from './report-clickable'

type StepProperties = {
    setStep?: React.Dispatch<React.SetStateAction<number>>
    selectedReports: SmallReportDTO[],
    setSelectedReports: React.Dispatch<React.SetStateAction<SmallReportDTO[]>>,
    cookies: Cookies
}

type FirstStepState = {
    reports: SmallReportDTO[],
    cookieReports: SmallReportDTO[],
    showBtn: boolean,
    fetching: boolean,
    showModal: boolean
}

/**
 * Représente l'étape "Rentre tes notes" dans la recherche
 * Gère l'affichage
 */
class ResearchFirstStep extends React.Component<StepProperties, FirstStepState> {
    state: FirstStepState = {
        reports: [],
        cookieReports: [],
        showBtn: false,
        fetching: true,
        showModal: false
    }

    constructor(props) {
        super(props)
    }

    componentDidMount = async () => {
        const reports = await getUserReports()
        this.setState({
            reports,
            fetching: false,
            cookieReports: this.getSmallReportDTOsinCookies()
        })
    }

    getSmallReportDTOsinCookies = () => {
        const cookieReports = this.props.cookies.get("reports") as ReportGradesResponseDTO[]
        if (!cookieReports) return []

        return cookieReports.map(c => new SmallReportDTO({
            reportId: c.reportId,
            createdAt: new Date(),
            quarter: c.quarter,
            schoolYear: c.schoolYear
        }))
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
        if (this.state.fetching) return <Loader />

        return (<>
            {
                this.state.reports.map(
                    (r, index) => <ReportClickable
                        key={`report-clickable-${index}`}
                        title={`${r.schoolYear} - Trimestre ${r.quarter}`}
                        otherInfo={r.createdAt.toLocaleDateString()}
                        onClickHandler={() => this.toggleReportToSelection(r)}
                    />
                )
            }
        </>)
    }

    /**
     * Récupération des bulletins déjà enregistrés sur le compte 
     */
    temporaryReports = () => {
        return (<>
            {
                this.state.cookieReports.map(
                    r => <ArticleIcon
                        key={r.reportId}
                        reportId={r.reportId}
                        classIcon="fa-solid fa-file"
                        title={`${r.schoolYear} - Trimestre ${r.quarter}`}
                        otherInfo={r.createdAt.toLocaleDateString()}
                        color={Colors.GREEN}
                        onDelete={() => this.removeReportDTOinCookies(r.reportId)}
                        showActionButtons={true}
                        onClickHandler={() => this.toggleReportToSelection(r)}
                        onEdit={() => this.setState({ cookieReports: this.getSmallReportDTOsinCookies() })}
                    />
                )
            }
        </>)
    }

    /**
     * Retire un bulletin des cookies
     * @param reportId
     */
    removeReportDTOinCookies = (reportId: number) => {
        const reportDTOs = this.props.cookies.get("reports") as ReportGradesResponseDTO[]
        const reportDTOtoDeleteIndex = reportDTOs.findIndex(r => r.reportId == reportId)
        if (reportDTOtoDeleteIndex === -1) return

        reportDTOs.splice(reportDTOtoDeleteIndex, 1)
        this.props.cookies.set("reports", reportDTOs)
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

    closeModal = () => {
        this.setState({
            showModal: false,
            cookieReports: this.getSmallReportDTOsinCookies()
        })
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
                    <h3>Bulletins du profil</h3>
                    <div style={{ position: 'relative', minHeight: '100px' }}>
                        {this.savedReports()}
                    </div>
                </div>
                <div className="research-separator"></div>
                <div className="p-5" style={{ maxWidth: '500px' }}>
                    <h3>Bulletin(s) temporaire(s)</h3>
                    <span className="d-block mb-4">Ces bulletins sont enregistrés dans vos cookies</span>

                    {this.temporaryReports()}

                    <Button template='primary' name='Ajouter un bulletin temporaire' onClick={() => this.setState({ showModal: true })} />
                </div>
            </div>

            {this.showBtn()}

            <Modal minWidth={600} parentControl={{
                toggler: (state: boolean) => this.setState({ showModal: state }),
                isVisible: this.state.showModal
            }}>
                <AddReportModal isTemporary={true} closeModal={this.closeModal} />
            </Modal>
        </>)
    }
}

export default withCookies(ResearchFirstStep)