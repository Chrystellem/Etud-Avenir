import * as React from 'react'
import Colors from '../constants/colors'
import Icons from '../constants/icons'

type ActionButtonProps = {
    onClickHandler: React.MouseEventHandler<HTMLDivElement>,
    classIcon: string,
    styleParent?: React.CSSProperties,
    styleIcon?: React.CSSProperties,
    manageConfirmation: boolean,
    confirmationHandler?: React.MouseEventHandler<HTMLDivElement>,
}

export function ActionButton({
    onClickHandler,
    classIcon,
    styleParent,
    styleIcon,
    manageConfirmation,
    confirmationHandler }: ActionButtonProps)
{
    let [showDeleteConfirmation, setShowDeleteConfirmation] = React.useState(false);

    if (!manageConfirmation) {
        return <div className="action-icon-btn color-white" onClick={onClickHandler} style={styleParent}>
            <i className={classIcon} style={styleIcon}></i>
        </div>
    }

    const deleteBtn = <div className="action-icon-btn color-white" onClick={() => setShowDeleteConfirmation(true)} style={styleParent}>
            <i className={classIcon} style={styleIcon}></i>
        </div>

    return <>
        {!showDeleteConfirmation ?
            deleteBtn : 
            <div className="action-icon-btn__delete-confirmation">
                <div className="action-icon-btn color-white" style={{ backgroundColor: Colors.PINK }} onClick={() => setShowDeleteConfirmation(false)}>
                    <i className={Icons.DELETE} style={styleIcon}></i>
                </div>
                <span>
                    Confirmer la suppression ?
                </span>
                <div className="action-icon-btn color-white" onClick={confirmationHandler} style={{ backgroundColor: Colors.GREEN }}>
                    <i className="fa-solid fa-check"></i>
                </div>
            </div>
        }
    </>
}


//function DeleteButton(showConfirmation: boolean, styleParent: React.CSSProperties, showConfirmation ) {
//    return <div className="action-icon-btn color-white" onClick={showConfirmation} style={styleParent}>
//        <i className={classIcon} style={styleIcon}></i>
//    </div>
//}


//function showConfirmation() {

//}