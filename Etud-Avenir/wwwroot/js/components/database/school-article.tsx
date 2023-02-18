﻿import * as React from 'react'
import Modal from '../modal';
import SchoolInformation from '../school/school-informations';

export default function SchoolArticle() {
    let [showModal, setShowModal] = React.useState(false);

    const getModal = () => {
        if (!showModal) return;

        return <div className='modal d-block'>
            <div className="modal-body" style={{ backgroundColor: 'transparent' }} >
                <SchoolInformation onClickHandler={() => setShowModal(false)} />
            </div>
        </div>
    }

    return <>
            <article className="d-flex">
            <img src="https://upload.wikimedia.org/wikipedia/fr/thumb/d/d8/Epita.png/800px-Epita.png?20180717093238" />
            <div className="w-100 p-4">
                <div className="d-flex align-items-end">
                    <h4>EFREI Paris</h4>
                    <span className="ml-4">78140 - Villejuif</span>
                </div>
                <div className="d-flex justify-content-between w-100 align-items-end mt-4">
                    <ul className="list-style-none">
                        <li><i className="fa-solid fa-flask color-green"></i> Domaine 1, 2, xxx</li>
                        <li><i className="fa-solid fa-vial color-green"></i> Programme 1, 2, 3, ...</li>
                    </ul>
                    <a className="btn btn-primary" onClick={() => setShowModal(true)}>En savoir +</a>
                </div>
            </div>
        </article>
        { getModal() }
        </>
}