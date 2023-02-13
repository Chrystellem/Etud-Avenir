import * as React from 'react'
import { ArticleIcon } from '../../components/article-icon';
import { Button } from '../../components/button';
import Modal from '../../components/modal';
import Colors from '../../constants/colors';
import { ReportModal } from '../../modals/report';
import { ProfilePageTemplate } from './page-template';

const description = "Renseigne ici tes bulletins, tu n'auras à les renseigner qu’une seule fois. Ensuite, sélectionne les pour effectuer une recherche. 3 bulletins sont nécessaires pour effectuer une recherche. Pour une recherche la plus adéquate possible, rentre les 3 derniers !"

export function ReportPage() {
    let [showModal, setShowModal] = React.useState(false);

    return <ProfilePageTemplate title="Bulletins" description={description} color={Colors.GREEN}>
        <ArticleIcon classIcon="fa-solid fa-file" title="Trimestre 1" otherInfo="xxx" color={Colors.GREEN} />
        <ArticleIcon classIcon="fa-solid fa-file" title="Trimestre 1" otherInfo="xxx" color={Colors.GREEN} />
        <ArticleIcon classIcon="fa-solid fa-file" title="Trimestre 1" otherInfo="xxx" color={Colors.GREEN} />

        <div className="text-center">
            <Button name="Ajouter un bulletin" template="primary" customStyle={{ margin: '2rem auto 0 auto' }} onClick={() => setShowModal(true)} />
        </div>

        <Modal minWidth={600} parentControl={{
            toggler: setShowModal,
            isVisible: showModal
        }}>
            <ReportModal reportId={0} />
        </Modal>
    </ProfilePageTemplate>
}