import * as React from 'react'
import Colors from '../../constants/colors'
import Icons from '../../constants/icons'
import { ActionButton } from '../action-button'
import CloseModalButton from '../closeModalButton'

type SavedSchoolArticle = {
    logoPath: string,
    name: string,
    savedDate: Date,
    formation: string,
    setShowPartial: React.Dispatch<React.SetStateAction<boolean>>
}

export default function SavedSchoolArticle({ logoPath, name, savedDate, formation, setShowPartial }: SavedSchoolArticle) {
    return <div className="my-3 d-flex actions-on-hover cursor-pointer" onClick={() => setShowPartial(true) }>
        <article className="saved-school d-flex align-items-center">
            <div className="saved-school__img">
                <img src={logoPath} />
            </div>
            <div className="school-info mx-3 py-2">
                <div>
                    <h5 className="mb-1">{name}</h5>
                    <span>{formation}</span>
                </div>
                <span className="d-block mt-2">Ajouté le {savedDate.toLocaleDateString()}</span>
            </div>
        </article>
        <div className="saved-school__actions hidden-actions ml-2">
            <ActionButton onClickHandler={() => console.log("coucou")} classIcon={Icons.DELETE} styleParent={{ backgroundColor: Colors.PINK }} manageConfirmation={true} />
        </div>
    </div>
}