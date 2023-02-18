import * as React from "react"
import { Button } from "../button"

type SchoolInformationProperties = {
    onClickHandler: React.MouseEventHandler
}

export default function SchoolInformation({ onClickHandler }: SchoolInformationProperties) {
    return <div>
        <div className="template-profile-page__description-element">
            <div className="template-profile-page__description-element__header">
                <h5>EFREI PARIS</h5>
                <span>Villejuif - 94800</span>
            </div>
            <div className="template-profile-page__description-element__program">
                <h5>Programme</h5>
                <div className="d-flex justify-content-between flex-wrap">
                    <span>Durée: X ans</span>
                    <span>Domaine: XXX</span>
                </div>
            </div>
            <div className="template-profile-page__description-element__fees">
                <h5>Frais</h5>
                <ul>
                    <li>Frais de candidature: xxxxx €</li>
                    <li>Frais de candidature: xxxxx €</li>
                    <li>Frais de candidature: xxxxx €</li>
                </ul>
            </div>
            <div className="template-profile-page__description-element__other">
                <h5>Informations complémentaires</h5>
                <p>blavlablabla</p>
            </div>
            <Button name="Voir le site" template="primary" />
            <Button name="Fermer" template="danger" onClick={onClickHandler} />
        </div>
    </div>
}