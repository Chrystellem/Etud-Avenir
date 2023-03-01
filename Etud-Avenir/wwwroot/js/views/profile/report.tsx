import * as React from 'react'
import { ArticleIcon } from '../../components/article-icon';
import { Button } from '../../components/button';
import Modal from '../../components/modal';
import Colors from '../../constants/colors';
import { AddReportModal } from '../../modals/add-report';
import { getUserReports } from '../../services/report-service';
import ReportDTO from '../../types/report-dto';
import SmallReportDTO from '../../types/small-report-dto';
import { ProfilePageTemplate } from './page-template';

const description = "Renseigne ici tes bulletins, tu n'auras à les renseigner qu’une seule fois. Ensuite, sélectionne les pour effectuer une recherche. 3 bulletins sont nécessaires pour effectuer une recherche. Pour une recherche la plus adéquate possible, rentre les 3 derniers !"

export function ReportPage() {
    let [showModal, setShowModal] = React.useState(false);
    let [reports, setReports] = React.useState([] as SmallReportDTO[]);

    React.useEffect(() => {
        fetchReports();
    }, []);

    const fetchReports = async () => {
        const userReports = await getUserReports()
        setReports(userReports);
    }

    const closeModal = () => {
        setShowModal(false)
        fetchReports()
    }


    const deleteReport = async (reportId: number) => {
        const result = await fetch(`/api/report/${reportId}`, { method: 'DELETE' })
        if (result.ok) return

        setShowModal(true)
    }

    return <ProfilePageTemplate title="Bulletins" description={description} color={Colors.GREEN}>

        {
            reports.map(
                r => <ArticleIcon
                        key={r.reportId}
                        reportId={r.reportId}
                        classIcon="fa-solid fa-file"
                        title={`${r.schoolYear} - Trimestre ${r.quarter}`}
                        otherInfo={r.createdAt.toLocaleDateString()}
                        color={Colors.GREEN}
                        onDelete={() => deleteReport(r.reportId)}
                    />
            )
        }

        <div className="text-center">
            <Button name="Ajouter un bulletin" template="primary" customStyle={{ margin: '2rem auto 0 auto' }} onClick={() => setShowModal(true)} />
        </div>

        <Modal minWidth={600} parentControl={{
            toggler: setShowModal,
            isVisible: showModal
        }}>
            <AddReportModal isTemporary={false} closeModal={closeModal} />
        </Modal>
    </ProfilePageTemplate>
}