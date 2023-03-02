import * as React from 'react'
import SCHOOLS from '../../constants/schools';
import ResearchResultSchoolDTO from '../../types/research-result-school-dto';
import SchoolInformation from '../school/school-informations';

type SchoolArticleProperties = {
    school: ResearchResultSchoolDTO
    isResult: boolean
    displayFavoriteBtn: boolean
}

export default function SchoolArticle({ school, isResult, displayFavoriteBtn }: SchoolArticleProperties) {
    let [showModal, setShowModal] = React.useState(false);

    const getModal = () => {
        if (!showModal) return;

        return <div className='modal d-block'>
            <div className="modal-body" style={{ backgroundColor: 'transparent' }} >
                <SchoolInformation onClickHandler={() => setShowModal(false)} curriculumId={school.curriculumId} />
            </div>
        </div>
    }

    /**
     * Ajoute l'école aux favoris (partie profil du compte) 
     */
    const saveToFavorite = async () => {
        const result = await fetch("/api/curriculums/favorites", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                curriculumId: school.curriculumId
            })
        })

        if (!result.ok) return

        // TODO
    }

    return <>
        <article className="d-flex">
            <img src={SCHOOLS[school.name]?.img} />
            <div className="w-100 p-4">
                <div className="d-flex align-items-end justify-content-between">
                    <div className="d-flex align-items-end">
                        <h4>{school.name}</h4>
                        <span className="ml-4">{`${school.city} - ${school.zipCode}`}</span>
                    </div>
                    {
                        isResult ?
                            <div className="compatibility d-flex align-items-end"><p className="mb-0">Indice de compatibilité</p><span className="ml-2">80%</span></div> :
                            ""
                    }
                </div>
                <div className="d-flex justify-content-between w-100 align-items-end mt-4">
                    <ul className="list-style-none">
                        <li><i className="fa-solid fa-flask color-green"></i> {school.domain}</li>
                        <li><i className="fa-solid fa-vial color-green"></i> {school.formation} </li>
                    </ul>
                    <div>
                        {
                            displayFavoriteBtn ?  
                                <a className="btn btn-primary" onClick={saveToFavorite}>Ajouter aux favoris</a>
                                : ""
                        }
                        <a className="btn btn-primary ml-2" onClick={() => setShowModal(true)}>En savoir +</a>
                    </div>
                </div>
            </div>
        </article>
        {getModal()}
    </>
}