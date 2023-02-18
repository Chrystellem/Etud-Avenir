import * as React from 'react'
import Colors from '../constants/colors';
import Icons from '../constants/icons';
import { ReportModal } from '../modals/report';
import { ActionButton } from './action-button';
import CloseModalButton from './closeModalButton';
import Modal from './modal';

type ArticleIconProps = {
    classIcon: string,
    title: string,
    otherInfo: string,
    color: string
}

export function ArticleIcon({ classIcon, title, otherInfo, color }: ArticleIconProps) {
    let [showModal, setShowModal] = React.useState(false)
    let [reportId, setReportId] = React.useState(0)

    const editReport = () => {
        setShowModal(true)
        setReportId(12)

        console.log(reportId)
    }

    return <>
            <div className="my-3 d-flex actions-on-hover cursor-pointer">
            <article className="p-3 d-flex align-items-center cursor-pointer actions-on-hover">
                <i className={`mr-4 ${classIcon}`} style={{ color }}></i>
                <div className="info">
                    <h5>{title}</h5>
                    <span>{otherInfo}</span>
                </div>
            </article>
            <div className="hidden-actions ml-2">
                <ActionButton onClickHandler={editReport} classIcon={Icons.EDIT} styleParent={{ backgroundColor: Colors.GREEN }} manageConfirmation={false} />
                <ActionButton onClickHandler={() => console.log("coucou")} classIcon={Icons.DELETE} styleParent={{ backgroundColor: Colors.PINK }} manageConfirmation={true} />
            </div>
        </div>
            <Modal minWidth={600} parentControl={{
                toggler: setShowModal,
                isVisible: showModal
            }}>
                <ReportModal reportId={reportId} />
            </Modal>
        </>
}