import * as React from 'react'
import Colors from '../constants/colors';
import Icons from '../constants/icons';
import { EditReportModal } from '../modals/edit-report';
import { ActionButton } from './action-button';
import CloseModalButton from './closeModalButton';
import Modal from './modal';

type ArticleIconProps = {
    reportId: number,
    classIcon: string,
    title: string,
    otherInfo: string,
    color: string,
    showActionButtons?: boolean,
    onDelete?: () => void,
    onClickHandler?: () => void,
    onEdit?: () => void
}

export function ArticleIcon({
    reportId,
    classIcon,
    title,
    otherInfo,
    color,
    showActionButtons,
    onDelete,
    onClickHandler,
    onEdit}: ArticleIconProps) {
    let [showModal, setShowModal] = React.useState(false)
    let [showArticle, setShowArticle] = React.useState(true)

    const deleteElement = () => {
        setShowArticle(false)
        onDelete()
    }

    const clickHandler = (event: React.MouseEvent<HTMLDivElement>) => {
        event.currentTarget.classList.toggle('clicked')
        if (!onClickHandler) return

        onClickHandler()
    }

    const closeModal = () => {
        setShowModal(false)
        if (!onEdit) return

        onEdit()
    }

    if (showActionButtons === undefined || showActionButtons == null) {
        showActionButtons = true;
    }

    if (!showArticle) return

    return <>
        <div className="my-3 d-flex actions-on-hover cursor-pointer">
            <article className="p-3 d-flex align-items-center cursor-pointer actions-on-hover article-icon report-clickable" onClick={clickHandler}>
                <i className={`mr-4 ${classIcon}`} style={{ color }}></i>
                <div className="info">
                    <h5>{title}</h5>
                    <span>{otherInfo}</span>
                </div>
            </article>
            {
                showActionButtons ?
                    <div className="hidden-actions ml-2">
                        <ActionButton onClickHandler={() => setShowModal(true)} classIcon={Icons.EDIT} styleParent={{ backgroundColor: Colors.GREEN }} manageConfirmation={false} />
                        <ActionButton onClickHandler={deleteElement} classIcon={Icons.DELETE} styleParent={{ backgroundColor: Colors.PINK }} manageConfirmation={true} />
                    </div>
                    : ""
            }
        </div>
        <Modal minWidth={600} parentControl={{
            toggler: setShowModal,
            isVisible: showModal
        }}>
            <EditReportModal reportId={reportId} closeModal={closeModal} />
        </Modal>
    </>
}