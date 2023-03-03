import * as React from 'react'
import Colors from '../../constants/colors'
import Icons from '../../constants/icons'
import SCHOOLS from '../../constants/schools'
import { deleteCurriculum } from '../../services/curriculum-service'
import { ActionButton } from '../action-button'
import CloseModalButton from '../closeModalButton'

type SavedSchoolArticle = {
    curriculumId: number,
    name: string,
    savedDate: Date,
    formation: string,
    setShowPartial: React.Dispatch<React.SetStateAction<boolean>>
}

export default function SavedSchoolArticle({ curriculumId, name, savedDate, formation, setShowPartial }: SavedSchoolArticle) {
    let [isDeleted, setIsDeleted] = React.useState(false)

    const deleteCurriculumHandler = async () => {
        if (!(await deleteCurriculum(curriculumId))) return

        setIsDeleted(true)
    }

    if (isDeleted) return

    return <div className="my-3 d-flex actions-on-hover cursor-pointer">
        <article className="saved-school d-flex align-items-center" onClick={() => setShowPartial(true)}>
            <div className="saved-school__img">
                <img src={SCHOOLS[name]?.img} />
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
            <ActionButton onClickHandler={deleteCurriculumHandler} classIcon={Icons.DELETE} styleParent={{ backgroundColor: Colors.PINK }} manageConfirmation={true} />
        </div>
    </div>
}

